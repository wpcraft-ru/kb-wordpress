---
title: "Интеграционные тесты: Pest + WP-CLI"
description: "Стек для интеграционного тестирования WordPress-плагинов: Pest PHP, WP-CLI, wp-env, фикстуры, транзакции и Makefile — как в Laravel."
---

## Зачем этот стек

Пока плагин маленький, хватает ручной проверки. Но когда появляется бизнес-логика, синхронизация данных, WooCommerce, внешние API и несколько режимов работы — ручное тестирование не справляется.

Стек Pest PHP + WP-CLI + `wp-env` даёт:
- Тесты в живом WordPress-окружении (не моки)
- Лаконичный синтаксис (как в Laravel)
- Воспроизводимость (одна команда — полный прогон)
- Изоляцию тестов через транзакции

## Стек

| Инструмент | Роль |
|-----------|------|
| `@wordpress/env` | Docker-окружение с WordPress |
| Docker | Контейнеры для WP, PHP и БД |
| Composer | PHP-зависимости |
| **Pest PHP** | Лаконичный синтаксис тестов поверх PHPUnit |
| **WP-CLI** | Единая точка входа для запуска тестов |
| **Makefile** | Короткие команды |

## 1. Локальное окружение: `wp-env`

Минимальный конфиг `.wp-env.json`:

```json
{
  "core": null,
  "phpVersion": "8.3",
  "plugins": [ ".", "https://downloads.wordpress.org/plugin/woocommerce.zip" ],
  "port": 8888,
  "config": {
    "WP_DEBUG": true,
    "WP_DEBUG_LOG": true,
    "WP_DEBUG_DISPLAY": false,
    "SCRIPT_DEBUG": true
  }
}
```

- `"core": null` — последняя стабильная версия WordPress
- `"phpVersion": "8.3"` — версия PHP зафиксирована явно
- `"."` и WooCommerce — плагины монтируются в окружение
- `WP_DEBUG_LOG` — ошибки в лог, а не в браузер

Запуск:

```bash
npx wp-env start
```

## 2. Composer-зависимости

```json
{
  "require-dev": {
    "pestphp/pest": "^4.0",
    "roots/wordpress": "^6.7",
    "wp-cli/wp-cli": "*",
    "brain/monkey": "^2.4",
    "symfony/var-dumper": "^7.4"
  },
  "extra": {
    "wordpress-install-dir": "vendor/wordpress"
  }
}
```

| Пакет | Зачем |
|-------|-------|
| `pestphp/pest` | Фреймворк для тестов |
| `roots/wordpress` | WordPress core как Composer-зависимость |
| `wp-cli/wp-cli` | CLI-инфраструктура |
| `brain/monkey` | Моки WordPress-хуков и функций |
| `symfony/var-dumper` | Удобная отладка: `dd()` |

Установка внутри контейнера:

```bash
npx wp-env run cli --env-cwd=wp-content/plugins/plugin-name composer install
```

## 3. Pest PHP: синтаксис

Pest работает поверх PHPUnit, но с более читаемым синтаксисом:

```php
// Простой тест
it('loads wordpress core functions', function (): void {
    expect(function_exists('get_post'))->toBeTrue();
    $posts = get_posts();
    expect($posts)->toBeArray();
});

// С датасетами
it('validates product types', function (string $type): void {
    $product = wc_get_product(wc_create_product(['type' => $type]));
    expect($product->get_type())->toBe($type);
})->with(['simple', 'variable', 'grouped']);
```

Ключевые особенности:
- `it('description', fn () => ...)` — читается как предложение
- `expect($value)->toBeX()` — текучий API утверждений
- `beforeEach()` / `afterEach()` — подготовка и очистка
- Датасеты — проверка нескольких вариантов входных данных

## 4. `phpunit.xml`: конфигурация

```xml
<?xml version="1.0"?>
<phpunit
    bootstrap="tests/bootstrap.php"
    colors="true"
    stopOnFailure="false">
    <testsuites>
        <testsuite name="Plugin Tests">
            <directory suffix=".php">./tests/includes/</directory>
        </testsuite>
    </testsuites>
    <php>
        <env name="APP_ENV" value="testing"/>
    </php>
</phpunit>
```

## 5. `bootstrap.php`: подключение WordPress

```php
<?php

declare(strict_types=1);

$wpLoadPath = '/var/www/html/wp-load.php';

if (! file_exists($wpLoadPath)) {
    throw new RuntimeException("WordPress not found at: {$wpLoadPath}");
}

require_once $wpLoadPath;
```

После этого в тестах доступны:
- Функции WordPress: `get_posts()`, `get_option()`, `update_option()`
- Глобальный `$wpdb`
- WooCommerce: `wc_get_product()`, `wc_get_order()`
- Функции и классы самого плагина

## 6. WP-CLI: единая точка входа

Регистрация команды `wp test:plugin`:

```php
<?php

if (defined('WP_CLI') && WP_CLI && class_exists('WP_CLI')) {
    WP_CLI::add_command('test:plugin', RunPluginTestsCommand::class, [
        'shortdesc' => 'Run plugin tests using Pest.',
    ]);
}

class RunPluginTestsCommand
{
    public function __invoke($args, $assoc_args)
    {
        $plugin_path = dirname(__DIR__ . '/..');
        $pest_binary = $plugin_path . '/vendor/bin/pest';

        if (! file_exists($pest_binary)) {
            WP_CLI::error("Pest binary not found at {$pest_binary}");
        }

        $php_binary = defined('PHP_BINARY') ? PHP_BINARY : 'php';

        $command_parts = array_merge(
            [escapeshellarg($php_binary), escapeshellarg($pest_binary), '--colors=always'],
            array_map('escapeshellarg', $args)
        );

        $command = sprintf(
            'cd %s && %s',
            escapeshellarg($plugin_path),
            implode(' ', $command_parts)
        );

        passthru($command, $exit_code);
        WP_CLI::halt($exit_code);
    }
}
```

Примеры запуска:

```bash
# Полный прогон
npx wp-env run cli wp test:plugin

# Фильтр по имени теста
npx wp-env run cli wp test:plugin --filter="loads wordpress"

# Конкретный файл
npx wp-env run cli wp test:plugin tests/includes/ProductsTests.php
```

## 7. Makefile: короткие команды

```makefile
start:
	npx wp-env start

start-update:
	npx wp-env stop
	npx wp-env start --update

stop:
	npx wp-env stop

destroy:
	npx wp-env destroy

cli:
	npx wp-env run cli sh

test:
	npx wp-env run cli wp test:plugin
```

Использование: `make start`, `make stop`, `make test`.

## 8. Фикстуры вместо реального API

Если плагин синхронизирует данные с внешним сервисом (МойСклад, 1С, CRM) — сохраните реальные JSON-ответы в фикстуры:

```
tests/data/fixtures-v1/
├── products/
├── categories/
└── variants/
```

Проверка фикстур:

```php
it('has valid fixtures v1', function (): void {
    $fixture = __DIR__ . '/../data/fixtures-v1/products/first-100.json';
    expect(file_exists($fixture))->toBeTrue();

    $payload = json_decode((string) file_get_contents($fixture), true);
    expect($payload)->toBeArray();
    expect($payload['rows'] ?? [])->not->toBeEmpty();
});
```

Преимущества фикстур:
- Тесты не зависят от сети и доступности API
- Входные данные стабильны
- Можно тестировать edge cases (пустой ответ, ошибка API)

## 9. Транзакции: чистая база после каждого теста

```php
beforeEach(function (): void {
    global $wpdb;
    $wpdb->query('START TRANSACTION');
});

afterEach(function (): void {
    global $wpdb;
    $wpdb->query('ROLLBACK');
});
```

После каждого теста база возвращается в исходное состояние. Особенно важно, когда тест создаёт реальные записи в WordPress и WooCommerce.

## 10. Примеры тестов

### Smoke-тест: всё загрузилось

```php
it('loads plugin and WooCommerce', function (): void {
    expect(function_exists('MyPlugin\\init'))->toBeTrue();
    expect(function_exists('wc_get_product'))->toBeTrue();
    expect(class_exists('WooCommerce'))->toBeTrue();
});
```

### Интеграционный тест синхронизации продукта

```php
it('syncs products with attributes', function (): void {
    \MyPlugin\Settings::setValue('attributes_sync_enabled', 1);
    $rows = getProductsFixtureRows();
    $row = $rows[0];

    $productId = \MyPlugin\Products\product_update($row, []);

    expect($productId)->toBeInt()->toBeGreaterThan(0);

    $product = wc_get_product($productId);
    expect($product)->not->toBeFalse();
    expect($product->get_meta('external_id'))->toBe((string) $row['id']);

    $attrs = $product->get_attributes();
    expect($attrs)->toBeArray()->not->toBeEmpty();
});
```

### Проверка настроек WooCommerce

```php
it('uses ruble currency', function (): void {
    expect((string) get_option('woocommerce_currency'))->toBe('RUB');
    expect((string) get_option('woocommerce_default_country'))->toBe('RU');
    expect((string) get_option('woocommerce_price_num_decimals'))->toBe('2');
});
```

## Структура тестов

```
tests/
├── bootstrap.php          # Подключение WordPress
├── add-wp-cli.php         # Регистрация WP-CLI команд
├── data/
│   └── fixtures-v1/       # JSON-фикстуры
│       ├── products/
│       ├── categories/
│       └── variants/
└── includes/              # Активные тесты
    ├── BaseTests.php
    ├── ProductsTests.php
    └── SyncTests.php
```

## Что это даёт

| Проблема | Решение |
|----------|---------|
| Регрессии при изменении логики | Тесты ловят ошибки до релиза |
| Зависимость от внешнего API | Фикстуры дают стабильные входные данные |
| Ручная настройка WordPress | `wp-env` поднимает окружение одной командой |
| Сложный запуск тестов | WP-CLI + `Makefile` — короткий интерфейс |
| Загрязнение БД | Транзакции + rollback |
| Тесты не видят WordPress | `wp-load.php` загружает всё |

## Итог

Стек Pest + WP-CLI + `wp-env` даёт понятный workflow для тестирования WordPress-плагинов. Для простого плагина может показаться избыточным, но если внутри есть синхронизация данных, WooCommerce, внешние API и бизнес-логика — окупается быстро.

## Дальнейшие шаги

- [Unit-тесты с PHPUnit](./unit-tests-phpunit.md) — Классический подход с Composer и PHPUnit
- [Стратегия тестирования WordPress](../index.md) — Когда что тестировать
- [E2E-тесты с Playwright](./e2e-tests-playwright.md) — Тестирование UI и браузерных сценариев

## Материалы и источники

- [Автотесты плагина WordPress & WooCommerce через WP CLI + Pest (wpcraft.ru)](https://wpcraft.ru/blog/autotesting-pest-wp-cli)
- [Пример реализации: wooms (GitHub)](https://github.com/wpcraft-ru/wooms/)
- [Pest PHP Documentation](https://pestphp.com/docs)
- [WP-CLI Cookbook](https://make.wordpress.org/cli/handbook/)
- [@wordpress/env Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/)
