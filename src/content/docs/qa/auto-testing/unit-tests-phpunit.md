---
title: "Unit-тесты с PHPUnit для WordPress"
description: "Пошаговое руководство: настройка PHPUnit через Composer, WP_UnitTestCase, фабрика постов, тестирование CPT и интеграция с GitHub Actions."
---

## Что такое unit-тесты в WordPress

Unit-тесты автоматически проверяют конкретную часть кода — обычно функцию или метод — в изоляции от остальной системы. В WordPress-разработке они помогают убедиться, что функции, классы и хуки работают корректно даже после изменений кода.

Это особенно важно, потому что плагин может работать в разных окружениях: версии WordPress, PHP-конфигурации, комбинации с другими плагинами и темами.

### Типы тестов

- **Unit-тесты:** изолированные части кода, без внешних зависимостей
- **Интеграционные тесты:** проверяют взаимодействие компонентов (например, плагин + БД WordPress) — именно их мы здесь рассматриваем, так как `WP_UnitTestCase` работает с реальной БД

### Преимущества

- **Предотвращение регрессий** — изменения не ломают существующую функциональность
- **Повышение надёжности** — можно выпускать новые версии с уверенностью
- **Упрощение поддержки** — новый разработчик видит, что его изменение ничего не сломало
- **Улучшение качества кода** — тесты заставляют писать чище и переиспользуемее
- **Документирование** — тесты показывают, как функция должна работать

## Настройка окружения

### Предварительные требования

- PHP и MySQL (локально или через Docker)
- База данных `wordpress_tests` с пользователем `root` и паролем `root`
- SVN (Subversion) — для загрузки тестового окружения WordPress
- WP-CLI — для генерации файлов тестов

### 1. Генерация файлов через WP-CLI

```bash
wp scaffold plugin-tests plugin-name --ci=github
```

Создаются файлы:
- `.github/workflows/phpunit.yml` — интеграция с GitHub Actions
- `bin/install-wp-tests.sh` — bash-скрипт установки тестового окружения
- `phpunit.xml.dist` — конфигурация PHPUnit
- `tests/bootstrap.php` — загрузка WordPress перед тестами
- `tests/test-sample.php` — пример теста

### 2. Установка Composer-зависимостей

```bash
composer require --dev yoast/phpunit-polyfills:^1.0 wp-phpunit/wp-phpunit:^6.3
```

| Пакет | Назначение |
|-------|-----------|
| `wp-phpunit/wp-phpunit` | WordPress-тестовое окружение через PHPUnit (community-форк) |
| `yoast/phpunit-polyfills` | Совместимость между версиями PHPUnit и PHP |

### 3. Добавление Composer-скриптов

В `composer.json`:

```json
{
  "scripts": {
    "test": "phpunit",
    "test-install": "bash bin/install-wp-tests.sh wordpress_test root 'root' 127.0.0.1 latest"
  }
}
```

### 4. Установка тестового окружения

```bash
composer test-install
```

### 5. Настройка `phpunit.xml.dist`

Удалите `prefix="test-"` из конфигурации — в некоторых версиях это вызывает конфликты. Создайте поддиректорию `tests/Unit/` и переместите туда тесты.

### 6. Дополнение bootstrap.php

```php
define( 'TESTS_PLUGIN_DIR', dirname( __DIR__ ) );
define( 'UNIT_TESTS_DATA_PLUGIN_DIR', TESTS_PLUGIN_DIR . '/tests/Data/' );

if ( ! defined( 'WP_CORE_DIR' ) ) {
    $_wp_core_dir = getenv( 'WP_CORE_DIR' );
    if ( ! $_wp_core_dir ) {
        $_wp_core_dir = rtrim( sys_get_temp_dir(), '/\\' ) . '/wordpress';
    }
    define( 'WP_CORE_DIR', $_wp_core_dir );
}
```

### 7. Игнорирование в Git

Добавьте в `.gitignore`:

```
.phpunit.result.cache
vendor/
```

### 8. Первый запуск

```bash
composer test
```

Ожидаемый результат:

```
PHPUnit 9.6.24 by Sebastian Bergmann and contributors.
OK (1 test, 1 assertion)
```

## Assert-функции PHPUnit

Основные утверждения для проверки результатов:

| Функция | Проверка |
|---------|---------|
| `assertTrue($cond)` | Условие истинно |
| `assertFalse($cond)` | Условие ложно |
| `assertEquals($exp, $act)` | Равенство (нестрогое) |
| `assertSame($exp, $act)` | Равенство (строгое: тип + значение) |
| `assertNull($var)` | Переменная null |
| `assertNotNull($var)` | Переменная не null |
| `assertEmpty($var)` | Переменная пуста |
| `assertNotEmpty($var)` | Переменная не пуста |
| `assertCount($n, $arr)` | Массив содержит N элементов |
| `assertContains($needle, $haystack)` | Значение есть в массиве/строке |
| `assertInstanceOf($class, $obj)` | Объект — экземпляр класса |
| `assertIsArray($var)` / `assertIsString($var)` / `assertIsInt($var)` | Проверка типа |
| `assertGreaterThan($a, $b)` | Значение больше другого |
| `assertLessThan($a, $b)` | Значение меньше другого |

## Простой тест функции

```php
// Тестируемая функция
function plunit_sum( $a, $b ) {
    return $a + $b;
}

// Тест с корректными данными
function test_sum_without_errors() {
    $sum = plunit_sum( 4, 2 );
    $this->assertEquals( 6, $sum );
}

// Тест с некорректными данными
function test_sum_with_errors() {
    $sum = plunit_sum( 'hello', 2 );
    $this->assertEquals( 0, $sum );
}
```

**Важно:** тестируйте не только корректные, но и некорректные входные данные. Функция должна безопасно обрабатывать строки, null и другие неожиданные значения.

## Тестирование кастомного типа записи (CPT)

Полноценный пример тестового класса:

```php
class Test_Book_CPT extends WP_UnitTestCase {

    public function setUp(): void {
        parent::setUp();
        // Регистрируем CPT перед каждым тестом
        mtp_register_cpt_book();
        flush_rewrite_rules();
    }

    // Проверка: CPT зарегистрирован
    public function test_book_post_type_is_registered() {
        $this->assertTrue(
            post_type_exists( 'book' ),
            'The "book" post type should be registered.'
        );
    }

    // Проверка: CPT публичный и виден в админке
    public function test_book_post_type_is_public() {
        $post_type_obj = get_post_type_object( 'book' );
        $this->assertNotNull( $post_type_obj );
        $this->assertTrue( $post_type_obj->public );
        $this->assertTrue( $post_type_obj->show_ui );
    }

    // Проверка: можно создать запись этого типа
    public function test_can_create_book_post() {
        $post_id = self::factory()->post->create( [
            'post_type'  => 'book',
            'post_title' => 'Test Book',
        ] );

        $this->assertIsInt( $post_id );
        $this->assertSame( 'book', get_post_type( $post_id ) );
        $this->assertSame( 'Test Book', get_the_title( $post_id ) );
    }
}
```

### Разбор

- **`extends WP_UnitTestCase`** — даёт доступ к WordPress-хелперам (`factory()`) и изоляции тестов
- **`setUp()`** — вызывается перед каждым тестом. Регистрирует CPT и сбрасывает rewrite rules
- **`self::factory()->post->create()`** — фабрика для создания записей напрямую в БД, минуя админку
- **`post_type_exists()`** — WordPress-функция проверки регистрации CPT

## Добавление зависимостей (WooCommerce)

Если плагин зависит от WooCommerce:

### 1. В `bin/install-wp-tests.sh`

```bash
install_woocommerce() {
    local PLUGIN_DIR="$WP_CORE_DIR/wp-content/plugins"
    mkdir -p "$PLUGIN_DIR"
    WOOCOMMERCE_URL="https://downloads.wordpress.org/plugin/woocommerce.zip"
    download "$WOOCOMMERCE_URL" "$TMPDIR/woocommerce.zip"
    unzip -q "$TMPDIR/woocommerce.zip" -d "$TMPDIR/"
    rm -rf "$PLUGIN_DIR/woocommerce"
    mv "$TMPDIR/woocommerce" "$PLUGIN_DIR/woocommerce"
}

# Вызвать после install_wp
install_woocommerce
```

### 2. В `tests/bootstrap.php`

```php
require_once WP_CORE_DIR . '/wp-content/plugins/woocommerce/woocommerce.php';
```

## GitHub Actions: автоматический запуск

Файл `.github/workflows/phpunit.yml` (генерируется WP-CLI, требует доработок):

```yaml
on:
  pull_request:
    branches:
      - trunk  # замените на вашу основную ветку

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        php-version: ['8.1', '8.2', '8.3']
    steps:
      - uses: actions/checkout@v4

      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: ${{ matrix.php-version }}
          tools: phpunit-polyfills:1.1
          extensions: mbstring, xml, zip, intl, pdo, mysql

      - name: Install SVN
        run: sudo apt-get update && sudo apt-get install -y subversion

      - name: Install WP tests
        run: bash bin/install-wp-tests.sh wordpress_test root root 127.0.0.1 latest

      - name: Run tests
        run: composer test
```

## Устранение ошибок

### `Could not find /wordpress-tests-lib/includes/functions.php`

Временная установка WordPress неполная. Решение:

```bash
# Узнайте директорию из вывода composer test-install
# Например: /var/folders/.../T/

# Удалите и переустановите
rm -rfv /var/folders/.../T/wordpress-tests-lib/
rm -rfv /var/folders/.../T/wordpress/
composer test-install
```

## Дальнейшие шаги

- [Стратегия тестирования WordPress](./testing-strategy.md) — Когда и что тестировать
- [Интеграционные тесты: Pest + WP-CLI](./pest-wp-cli.md) — Альтернативный стек с лаконичным синтаксисом
- [E2E-тесты с Playwright](./e2e-tests-playwright.md) — Тестирование UI

## Материалы и источники

- [WordPress Developer Blog: How to add automated unit tests to your WordPress plugin](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/)
- [PHPUnit Documentation](https://phpunit.de/index.html)
- [WP-PHPUnit (community fork)](https://github.com/wp-phpunit/wp-phpunit)
- [Yoast PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills)
- [WordPress CLI: scaffold plugin-tests](https://developer.wordpress.org/cli/commands/scaffold/plugin-tests/)
- [GitHub Actions: setup-php](https://github.com/shivammathur/setup-php)
