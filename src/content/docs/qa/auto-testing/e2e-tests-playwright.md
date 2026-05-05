---
title: "E2E-тесты WordPress с Playwright"
description: "Полное руководство по написанию end-to-end тестов для WordPress с Playwright: настройка окружения, тестирование блоков, паттернов и фронтенда."
---

## Что такое E2E-тестирование

End-to-end (E2E) тесты — это тесты, которые симулируют действия реального пользователя в браузере. В отличие от unit-тестов, которые проверяют изолированные функции, E2E-тесты работают на макро-уровне: они взаимодействуют с полным стеком приложения — фронтендом, бэкендом и базой данных.

**E2E-тесты особенно полезны для:**
- Критических пользовательских сценариев (логин, оформление заказа, создание контента)
- Проверки блоков и паттернов в редакторе Gutenberg
- Верификации фронтенд-вывода после настройки через REST API

**Ограничения:** E2E-тесты медленнее и хрупче unit-тестов. Изменение в любом слое (UI, сеть, БД) может сломать тест. Их стоит использовать для ключевых сценариев, а не пытаться покрыть весь код.

## Инструменты

WordPress для E2E-тестирования использует [Playwright](https://playwright.dev/) — современный, надёжный и широко распространённый фреймворк. Ранее в WordPress использовался Puppeteer, но с 2022 года проект перешёл на Playwright.

| Инструмент | Назначение |
|-----------|-----------|
| `@playwright/test` | Фреймворк для написания и запуска E2E-тестов |
| `@wordpress/e2e-test-utils-playwright` | WordPress-хелперы: авто-логин, `createNewPost()`, `visitAdminPage()` |
| `@wordpress/env` (`wp-env`) | Локальное WordPress-окружение в Docker |
| `@wordpress/scripts` | Набор скриптов, включая `test-playwright` |

## Настройка окружения

### 1. Локальное окружение с wp-env

`wp-env` запускает WordPress в Docker-контейнере. Это официальный инструмент от WordPress, который минимизирует время настройки.

```bash
# Установка
npm install @wordpress/env --save-dev

# Создание конфигурации .wp-env.json
cat > .wp-env.json << 'EOF'
{
  "$schema": "https://schemas.wp.org/trunk/wp-env.json",
  "themes": [ "." ],
  "lifecycleScripts": {
    "afterStart": "THEME_SLUG=$(basename \"$PWD\");
      for SERVICE in cli tests-cli; do
        wp-env run \"$SERVICE\" wp theme activate \"$THEME_SLUG\";
      done"
  }
}
EOF

# Добавление скрипта в package.json
# "scripts": { "wp-env": "wp-env" }

# Запуск окружения
npx wp-env start
```

После запуска будут доступны:
- `http://localhost:8888` — среда разработки
- `http://localhost:8889` — тестовая среда

### 2. Установка Playwright

```bash
# Установка пакетов
npm install @playwright/test @wordpress/e2e-test-utils-playwright --save-dev

# Установка браузеров и системных зависимостей
npx playwright install --with-deps
```

### 3. Файл конфигурации

Создайте `playwright.config.js` в корне проекта:

```js
export { default } from '@wordpress/scripts/config/playwright.config.js';
```

Это использует [стандартную конфигурацию WordPress](https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/config/playwright.config.js), которая:
- Автоматически запускает и останавливает `wp-env`
- Настраивает базовый URL и аутентификацию
- Определяет директорию `specs/` для тестов

Кастомизация (при необходимости):

```js
import { defineConfig } from '@playwright/test';
import baseConfig from '@wordpress/scripts/config/playwright.config';

export default defineConfig( {
  ...baseConfig,
  testDir: './tests/e2e/', // своя директория вместо specs/
} );
```

### 4. Проверка установки

```bash
npx wp-scripts test-playwright
```

Ожидаемый вывод: `Error: No tests found` — тестов ещё нет, но конфигурация работает.

## Первый тест: проверка дашборда

Создайте `specs/main.spec.js`:

```js
import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test( 'Loads WordPress dashboard', async ( { admin, page } ) => {
  await admin.visitAdminPage( '/' );
  await expect(
    page.getByRole( 'heading', { name: 'Welcome to WordPress', level: 2 } )
  ).toBeVisible();
} );
```

**Разбор теста:**
- `admin.visitAdminPage('/')` — WordPress-хелпер, который переходит на `/wp-admin/`, обрабатывает экраны обновления и проверяет что пользователь залогинен
- `page.getByRole('heading', ...)` — Playwright-локатор, использующий accessibility roles (рекомендованный способ)
- `expect(...).toBeVisible()` — асинхронное утверждение (assertion)

**Запуск:**

```bash
npx wp-scripts test-playwright
```

Важно понимать: при использовании стандартного WordPress-тулинга все тесты запускаются от имени администратора (авто-логин). Для тестирования от посетителя нужно либо разлогиниться, либо открыть отдельную страницу без авторизации.

### UI Mode

Playwright has встроенный UI Mode для отладки:

```bash
npx wp-scripts test-playwright --ui
```

Открывает браузер с инспектором тестов — можно смотреть пошаговое выполнение, снепшоты и ошибки.

## Паттерн AAA: Arrange — Act — Assert

Все E2E-тесты следуют трёхфазному паттерну:

1. **Arrange** — подготовка предусловий (создать пост, установить мета-поля)
2. **Act** — выполнение действий (кликнуть, заполнить, вставить блок)
3. **Assert** — проверка результата (видимость элемента, текст, атрибуты)

В реальных E2E-тестах эти фазы могут чередоваться (несколько act-assert циклов в одном тесте).

## Тестирование вариаций блоков

Допустим, тема регистрирует вариацию блока Paragraph с именем «Book Author», которая использует [Block Bindings API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-bindings/) для привязки к мета-полю `themeslug_book_author`.

### Планирование теста

Мысленно представьте ручное тестирование:
1. Создать новую запись
2. Открыть Inserter блоков
3. Найти «Book Author» среди доступных блоков
4. Кликнуть для вставки
5. Проверить, что блок отображает значение мета-поля

Переведите эти шаги в код:

```js
test( 'Inserts Book Author block', async ( { admin, page, editor } ) => {
  // Arrange + Act: создать пост и вставить блок
  await admin.createNewPost();

  await page
    .getByRole( 'button', { name: 'Block Inserter' } )
    .click();

  await page
    .getByRole( 'region', { name: 'Block Library' } )
    .getByRole( 'listbox', { name: 'Widgets' } )
    .getByRole( 'option', { name: 'Book Author', exact: true } )
    .click();

  // Assert через проверку атрибутов блока
  await expect.poll( editor.getBlocks ).toMatchObject( [ {
    name: 'core/paragraph',
    attributes: {
      metadata: {
        bindings: {
          content: {
            source: 'core/post-meta',
            args: { key: 'themeslug_book_author' },
          },
        },
      },
      placeholder: 'Book Author',
    },
  } ] );

  // Assert через проверку отображаемого значения
  await page.evaluate( () =>
    wp.data
      .dispatch( 'core/editor' )
      .editPost( { meta: { themeslug_book_author: 'Jane Austen' } } )
  );

  const bookAuthorBlock = editor.canvas.getByRole( 'document', {
    name: 'Block: Paragraph',
  } );
  await expect( bookAuthorBlock ).toHaveText( 'Jane Austen' );
} );
```

### Ключевые моменты

- **`expect.poll(editor.getBlocks)`** — опрашивает состояние блоков асинхронно. Вставка блока — асинхронная операция, без `poll` тест может упасть, если блоки ещё не готовы
- **`page.evaluate()`** — выполняет код в контексте страницы, даёт доступ к глобальному `wp.data` для программной установки мета-полей
- **`editor.canvas.getByRole()`** — поиск элементов внутри canvas редактора (iframe с контентом)

### Best practices для селекторов

WordPress рекомендует **использовать accessible selectors** (`getByRole`, `getByLabelText`, `getByText`). CSS-селекторы и XPath — только когда accessibility-селекторы невозможны.

DevTools браузера умеют показывать accessibility tree: в Chrome — вкладка **Accessibility** или флаг **Full accessibility tree**.

## Тестирование паттернов со снепшотами

Паттерны содержат много блоков — проверять каждый по-отдельности громоздко. Вместо этого используйте **snapshot testing** — сохранение эталонного состояния и сравнение с ним.

### Вставка паттерна

```js
test( 'Inserts Book Review Card pattern', async ( { admin, page, editor } ) => {
  await admin.createNewPost();

  await page
    .getByRole( 'button', { name: 'Block Inserter' } )
    .click();

  await page.getByRole( 'tab', { name: 'Patterns' } ).click();
  await page.getByRole( 'tab', { name: 'Book Reviews' } ).click();

  await page
    .getByRole( 'listbox', { name: 'Book Reviews' } )
    .getByRole( 'option', { name: 'Book Review Card' } )
    .click();

  // Снепшот-утверждение
  const bookReviewCardPattern = editor.canvas.getByRole( 'document', {
    name: 'Block: Columns',
  } );
  await expect( bookReviewCardPattern ).toMatchAriaSnapshot();
} );
```

### Генерация снепшотов

При первом запуске тест упадёт с ошибкой — снепшота ещё нет:

```bash
npx wp-scripts test-playwright
# Error: A snapshot doesn't exist at specs/__snapshots__/...aria.yml, writing actual.
```

Сгенерируйте снепшоты:

```bash
npx wp-scripts test-playwright --update-snapshots
```

Создастся YAML-файл с accessibility-деревом паттерна (`specs/__snapshots__/`). Теперь тест будет сверять текущее состояние с эталонным снепшотом.

**Важно:** Используйте `--update-snapshots` только когда намеренно хотите обновить снепшоты.

## Тестирование фронтенда через REST API

Если способ создания контента не важен для теста, можно создать пост через REST API, минуя редактор. Это резко сокращает код теста.

```js
test( 'Displays book review meta on the frontend', async ( {
  page,
  requestUtils,
} ) => {
  // Arrange: создать пост с мета-полями через REST API
  const newPost = await requestUtils.createPost( {
    status: 'publish',
    title: 'Emma',
    content: '',
    meta: {
      themeslug_book_author: 'Jane Austen',
      themeslug_book_rating: '5',
      themeslug_book_length: '477',
      themeslug_book_goodreads_url:
        'https://www.goodreads.com/book/show/6969.Emma',
    },
  } );

  // Act: перейти на страницу созданного поста
  await page.goto( `?p=${ newPost.id }` );

  // Assert: проверить отображение на фронтенде
  await expect( page.getByText( '5 / 5 Stars' ) ).toBeVisible();
  await expect( page.getByText( '477 Pages' ) ).toBeVisible();
  await expect( page.getByText( 'Written by Jane Austen' ) ).toBeVisible();
  await expect(
    page.getByRole( 'link', { name: 'View on Goodreads' } )
  ).toHaveAttribute(
    'href',
    'https://www.goodreads.com/book/show/6969.Emma'
  );
} );
```

Хелпер `requestUtils.createPost()` — часть пакета `@wordpress/e2e-test-utils-playwright`. Он работает с REST API напрямую.

## Команды и флаги

| Команда | Описание |
|--------|----------|
| `npx wp-scripts test-playwright` | Запуск всех тестов |
| `npx wp-scripts test-playwright --ui` | UI Mode для отладки |
| `npx wp-scripts test-playwright --update-snapshots` | Обновление снепшотов |
| `npx playwright test --grep "pattern name"` | Запуск конкретных тестов по имени |

## Best practices

### 1. Используйте accessible selectors

```js
// ✅ Хорошо
page.getByRole( 'button', { name: 'Block Inserter' } )

// ⚠️ Приемлемо, если нет accessibility-альтернативы
page.locator( '.block-editor-inserter__toggle' )

// ❌ Плохо: хрупко, зависит от структуры DOM
page.locator( 'button:nth-child(3)' )
```

### 2. Используйте `expect.poll()` для асинхронных операций

```js
// ✅ Правильно — ждёт готовности
await expect.poll( editor.getBlocks ).toMatchObject( expected );

// ❌ Может упасть из-за race condition
expect( editor.getBlocks() ).toMatchObject( expected );
```

### 3. Отдавайте предпочтение REST API для настройки

Если тест проверяет фронтенд, создавайте контент через `requestUtils.createPost()`, а не через UI редактора. Это быстрее и надёжнее.

### 4. Снепшоты для сложных структур

Для паттернов и макетов из многих блоков используйте `toMatchAriaSnapshot()` вместо проверки каждого блока отдельно.

### 5. Не гонитесь за 100% покрытием E2E

E2E-тесты медленные. Используйте их для критических пользовательских сценариев. Дополняйте unit- и интеграционными тестами.

## Дальнейшие шаги

- [Playwright: Writing Tests](https://playwright.dev/docs/writing-tests) — больше действий и утверждений
- [Playwright: Test Hooks](https://playwright.dev/docs/writing-tests#using-test-hooks) — `beforeEach`, `afterEach` для организации тестов
- [Playwright: Fixtures](https://playwright.dev/docs/test-fixtures) — вынос переиспользуемой логики из тестов
- [Playwright: CI Setup](https://playwright.dev/docs/ci-intro) — запуск тестов на каждый коммит или PR
- [WordPress Core E2E Tests](https://github.com/WordPress/gutenberg/tree/trunk/test/e2e/specs/editor/blocks) — реальные примеры тестов блоков
- [WordPress E2E Testing Overview](https://developer.wordpress.org/block-editor/contributors/code/testing-overview/e2e/) — рекомендации Core-команды
- [Playwright: Test Agents](https://playwright.dev/docs/test-agents) — куда движется технология

## Материалы и источники

- [WordPress Developer Blog: Getting started writing WordPress E2E Tests with Playwright](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [WordPress Gutenberg E2E Test Utils](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-e2e-test-utils-playwright/)
- [Migrating WordPress E2E tests to Playwright (Make WordPress Core)](https://make.wordpress.org/core/2022/03/23/migrating-wordpress-e2e-tests-to-playwright/)
