---
title: "Автоматическое тестирование WordPress"
description: "Виды автоматических тестов для WordPress: unit (PHPUnit), интеграционные и E2E (Playwright) — когда и что применять."
---

## Зачем автоматизировать тестирование

Автоматические тесты — это код, который проверяет код. Для WordPress-проектов они решают три задачи:

1. **Предотвращение регрессий** — изменения в плагине или теме не ломают существующую функциональность.
2. **Документирование поведения** — тесты показывают, как система должна работать.
3. **Уверенность при рефакторинге** — можно безопасно переписывать код, зная что тесты поймают ошибку.

## Пирамида тестирования vs Трофей

### Классическая пирамида

```
        ╱  E2E  ╲
       ╱─────────╲
      ╱ Интеграц. ╲
     ╱─────────────╲
    ╱   Unit-тесты  ╲
   ╱─────────────────╲
```

- **Unit-тесты** — быстро, дёшево, много. Тестируют изолированные функции и классы.
- **Интеграционные тесты** — средняя скорость. Проверяют взаимодействие нескольких компонентов.
- **E2E-тесты** — медленно, дорого, мало. Симулируют реального пользователя в браузере.

### Трофей тестирования (Testing Trophy)

Современный подход смещает акценты:

```
        ╱   E2E    ╲
       ╱────────────╲
      ╱ Интеграционные ╲  ← основной фокус
     ╱──────────────────╲
    ╱    Unit-тесты      ╲
   ╱──────────────────────╲
  ╱   Статический анализ   ╲
 ╱──────────────────────────╲
```

- **Статический анализ** (TypeScript, ESLint, PHPStan) — основа, ловит ошибки типов
- **Интеграционные тесты** — главный слой: проверяют взаимодействие компонентов, дают лучший ROI
- **Unit-тесты** — только для сложной изолированной логики
- **E2E-тесты** — критические пользовательские пути

> Подробнее: [Стратегия тестирования WordPress](../index.md)

Для WordPress-проектов практический баланс: **мало unit-тестов + много интеграционных + несколько E2E**.

## Виды тестов в WordPress

### Unit-тесты (PHPUnit)

Проверяют отдельные PHP-функции и методы классов в изоляции.

**Инструменты:** PHPUnit, `WP_UnitTestCase`, `wp-phpunit/wp-phpunit`, `yoast/phpunit-polyfills`.

```php
class Test_Book_CPT extends WP_UnitTestCase {
    public function setUp(): void {
        parent::setUp();
        mtp_register_cpt_book();
    }
    
    public function test_book_post_type_is_registered() {
        $this->assertTrue( post_type_exists( 'book' ) );
    }
    
    public function test_can_create_book_post() {
        $post_id = self::factory()->post->create( [
            'post_type' => 'book',
            'post_title' => 'Test Book',
        ] );
        $this->assertSame( 'book', get_post_type( $post_id ) );
    }
}
```

→ Подробнее: [Unit-тесты с PHPUnit](./unit-tests-phpunit.md)

### Интеграционные тесты

Проверяют взаимодействие компонентов с реальной базой данных WordPress.

**Инструменты:** Pest PHP + WP-CLI + `wp-env`, фикстуры, транзакции для изоляции.

```php
it('syncs products with attributes', function (): void {
    \WooMS\Settings::setValue('wooms_attributes_sync_enabled', 1);
    $productId = \WooMS\Products\product_update($row, []);
    expect($productId)->toBeInt()->toBeGreaterThan(0);
    $product = wc_get_product($productId);
    expect($product->get_meta('wooms_id'))->toBe((string) $row['id']);
});
```

→ Подробнее: [Интеграционные тесты: Pest + WP-CLI](./pest-wp-cli.md)

### E2E-тесты (Playwright)

Симулируют действия пользователя в браузере: клики, ввод текста, проверку видимости элементов.

**Инструменты:** Playwright, `@wordpress/e2e-test-utils-playwright`, `wp-env`.

→ Подробнее: [E2E-тесты с Playwright](./e2e-tests-playwright.md)

## Когда какой вид теста применять

| Вид теста | Применяй для | Не применяй для |
|-----------|-------------|-----------------|
| **Unit** | Логика PHP-функций, хуки, фильтры, валидация | UI-взаимодействия, проверка вёрстки |
| **Интеграционные** | CRUD-операции, API-запросы, работа с БД | Изолированная бизнес-логика |
| **E2E** | Критические пользовательские сценарии, блоки, паттерны | Тестирование всех edge-кейсов |

## Страницы раздела

- [Стратегия тестирования WordPress](../index.md) — Общая стратегия: автоматизация, ручное тестирование, риск-ориентированный подход, трофей тестирования.
- [Unit-тесты с PHPUnit](./unit-tests-phpunit.md) — Полное руководство: Composer, `WP_UnitTestCase`, фабрика, тестирование CPT, GitHub Actions.
- [Интеграционные тесты: Pest + WP-CLI](./pest-wp-cli.md) — Стек Pest PHP + WP-CLI + `wp-env`: фикстуры, транзакции, Makefile.
- [E2E-тесты с Playwright](./e2e-tests-playwright.md) — `wp-env`, Playwright, тестирование блоков, паттернов и фронтенда.
- [Чек-лист запуска в продакшен](../../cheatsheet/production-checklist.md) — Включает проверку тестового покрытия.

## Материалы и источники

- [WordPress Developer Blog: How to add automated unit tests to your WordPress plugin](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/)
- [WordPress Developer Blog: Getting started writing WordPress E2E Tests with Playwright](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/)
- [Автотесты плагина WordPress через WP CLI + Pest (wpcraft.ru)](https://wpcraft.ru/blog/autotesting-pest-wp-cli)
- [Стратегия тестирования: пишите тесты, не много, но в основном интеграционные (wpcraft.ru)](https://wpcraft.ru/blog/strategiya-testirovaniya-pishite-testy-ne-mnogo-no-v-osnovnom-integraczionnye)
- [Write tests. Not too many. Mostly integration. (Kent C. Dodds)](https://kentcdodds.com/blog/write-tests)
- [WordPress Core Testing Handbook](https://make.wordpress.org/core/handbook/testing/automated-testing/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
