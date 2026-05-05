Автотесты плагина WordPress & WooCommerce через WP CLI + Pest как в Laravel | WP Craft
[Перейти к сути](#main)
Ничего не найдено
[Вход](/my/)
[Помощь с сайтом](https://wpcraft.ru/services)
* [Главное](/)
* [База знаний](https://wpcraft.ru/kb/)
* [Клуб про WP & Woo](https://wpcraft.ru/club-wordpress-woocommerce)
* [Свобода WordPress](https://wpcraft.ru/free-wordpress-woocommerce)
* [Услуги WordPress](https://wpcraft.ru/services)
* [Консультация](https://wpcraft.ru/services/ask)
* [Блог](https://wpcraft.ru/blog)
* [Контакты](https://wpcraft.ru/contacts)
* [Написать в Телеграм](https://t.me/wpcraftbot)
* [Подписаться на Телеграм](https://t.me/wpcraft)
Поиск
[Помощь с сайтом](https://wpcraft.ru/services)
* [Клуб](https://wpcraft.ru/club-wordpress-woocommerce)
* [Услуги](https://wpcraft.ru/services)
* [Проекты](https://wpcraft.ru/projects)
* [Решения](https://wpcraft.ru/use-cases)
* [Каталог](https://wpcraft.ru/catalog)
* [Контакты](https://wpcraft.ru/contacts)
[Вход](/my/)
* [База знаний](https://wpcraft.ru/kb-wordpress-woocommerce)
* [ИИ ассистент](https://wpcraft.ru/bot-wordpress-woocommerce)
* [Нейросети + ИИ](https://wpcraft.ru/ai)
* [Сайты WordPress](https://wpcraft.ru/wordpress)
* [Магазины WooCommerce](https://wpcraft.ru/woocommerce)
* [Веб-разработка](https://wpcraft.ru/web)
* [HL&BD](https://wpcraft.ru/highload-bigdata)
* [Хостинг](https://wpcraft.ru/hosting-wordpress-woocommerce)
* [Блоки](https://wpcraft.ru/block-based-websites)
* [Кейсы](https://wpcraft.ru/showcase)
* [Мониторинг сайта](https://wpcraft.ru/website-monitoring-wordpress-woocommerce)
* [Отзывы](https://wpcraft.ru/reviews-wordpress-woocommerce)
* [Лучшие агентства](https://wpcraft.ru/wordpress-agency)
Меню
[WPCraft](https://wpcraft.ru/)/[Блог](https://wpcraft.ru/blog)/[Статьи & Исследования](https://wpcraft.ru/blog/category/articles)/[Сниппеты](https://wpcraft.ru/blog/category/articles/snippets)
* [WPCraft](https://wpcraft.ru/blog/author/root)
* 24.04.2026
* 28.04.2026
* [WooCommerce](https://wpcraft.ru/blog/category/development/woocommerce), [WordPress](https://wpcraft.ru/blog/category/development/wordpress), [Как сделать](https://wpcraft.ru/blog/category/articles/how-to), [Кейсы](https://wpcraft.ru/blog/category/cases), [Компоненты](https://wpcraft.ru/blog/category/includes/components), [Разработка & Интеграция](https://wpcraft.ru/blog/category/development), [Сниппеты](https://wpcraft.ru/blog/category/articles/snippets)
# Автотесты плагина WordPress & WooCommerce через WP CLI + Pest как в Laravel
В Laravel тесты запускаются удобно. Захотелось того же для [WordPress](https://wpcraft.ru/wordpress)-плагинов — с Pest, WP CLI и живым окружением. Разобрался, собрал стек, делюсь.
## Зачем тестировать WordPress-плагин
Пока плагин маленький, хватает ручной проверки: установил, кликнул, посмотрел. Но когда внутри появляется бизнес-логика, синхронизация данных, настройки [WooCommerce](https://wpcraft.ru/woocommerce), внешние API и несколько режимов работы — ручное тестирование перестаёт работать.
Регрессии проникают в релизы не из-за невнимательности разработчика. Причина — слишком много состояний, которые нужно держать в голове:
* настройки плагина;
* версии WordPress, PHP и [WooCommerce](https://wpcraft.ru/woocommerce);
* товары, вариации, категории, атрибуты и meta-поля;
* ответы внешнего API;
* старые данные в базе;
* edge cases, которые редко проверяются руками.
Автотесты решают это системно: после каждого изменения в коде вы знаете, что ключевые сценарии не сломались.
[Пример реализации](https://github.com/wpcraft-ru/wooms/)
## Стек
Инструмент
Роль
`@wordpress/env`
Изолированное Docker-окружение с WordPress
Docker
Контейнеры для WordPress, PHP и базы данных
Composer
PHP-зависимости проекта
Pest PHP
Лаконичный синтаксис тестов поверх PHPUnit
WP-CLI
Единая точка входа для запуска тестов внутри WordPress
`Makefile`
Короткие команды для повседневной работы
Тесты запускаются в живом WordPress-окружении, но остаются воспроизводимыми и управляемыми.
## 1. Локальное окружение: `wp-env`
`@wordpress/env` — официальный инструмент WordPress для локальной разработки. Под капотом Docker: поднимает WordPress без ручной настройки PHP, MySQL, nginx.
Минимальный конфиг:
```
{
"core": null,
"phpVersion": "8.3",
"plugins": [
".",
""
],
"port": 8888,
"config": {
"WP_DEBUG": true,
"WP_DEBUG_LOG": true,
"WP_DEBUG_DISPLAY": false,
"SCRIPT_DEBUG": true
}
}
```
Детали конфига:
* `"core": null` — актуальная стабильная версия WordPress;
* `"phpVersion": "8.3"` — версия PHP зафиксирована явно;
* `"."` в `plugins` — текущий плагин монтируется прямо из рабочей директории;
* WooCommerce подключается как зависимость, если плагин работает с магазином;
* `WP_DEBUG_LOG` пишет ошибки в лог, а не показывает их в браузере.
Запуск:
```
npx wp-env start
```
После запуска WordPress доступен локально, плагин уже в окружении.
## 2. Composer-зависимости
Composer нужен не только для production-зависимостей, но и для тестового инструментария: Pest, отладка, пакеты для работы с WordPress.
```
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
Пакет
Зачем
`pestphp/pest`
Фреймворк для написания и запуска тестов
`roots/wordpress`
WordPress core как Composer-зависимость
`wp-cli/wp-cli`
CLI-инфраструктура для команд внутри WordPress
`brain/monkey`
Моки WordPress-хуков и функций для unit-тестов
`symfony/var-dumper`
Удобная отладка во время разработки
Установка внутри контейнера:
```
npx wp-env run cli --env-cwd=wp-content/plugins/wooms composer install
```
Если директория плагина другая — подставьте свой путь.
## 3. Pest PHP вместо PHPUnit
Pest — современный тестовый фреймворк для PHP, работает поверх PHPUnit, но с более коротким и читаемым синтаксисом.
Простой тест:
```
php
it('loads wordpress core functions', function (): void {
expect(function_exists('get_post'))-toBeTrue();
$posts = get_posts();
expect($posts)->toBeArray();
});
```
Тесты читаются почти как обычное описание поведения:
* `it('does something', function () { ... })`;
* `expect($value)->toBeArray()`;
* `beforeEach()` и `afterEach()` для подготовки и очистки;
* датасеты для проверки нескольких вариантов входных данных.
## 4. `phpunit.xml`: конфигурация тест-сьюта
Поскольку Pest работает поверх PHPUnit, общая конфигурация задаётся через `phpunit.xml`.
```
xml version="1.0"?
./tests/includes/
```
Детали конфига:
* `bootstrap="tests/bootstrap.php"` — файл, загружаемый перед тестами;
* `./tests/includes/` — директория с тестами;
* `APP_ENV=testing` — явный тестовый режим.
## 5. `bootstrap.php`: подключаем WordPress
Чтобы тестировать плагин внутри реального WordPress, перед запуском тестов загружаем `wp-load.php`.
```
php
declare(strict_types=1);
$wpLoadPath = '/var/www/html/wp-load.php';
if (! file_exists($wpLoadPath)) {
throw new RuntimeException("WordPress bootstrap file not found at: {$wpLoadPath}");
}
require_once $wpLoadPath;
</code
```
После этого в тестах доступны:
* функции WordPress: `get_posts()`, `get_option()`, `update_option()`;
* глобальный `$wpdb`;
* функции WooCommerce: `wc_get_product()`, `wc_get_order()`;
* функции и классы самого плагина.
Это уже не чистые unit-тесты, а integration-тесты: они проверяют, как код работает внутри настоящего WordPress-окружения.
## 6. WP-CLI: единая точка входа для тестов
Запускать Pest напрямую внутри контейнера можно, но команды быстро становятся длинными. Удобнее — WP-CLI команда `wp test:wooms`.
Регистрация команды:
```
php
if (defined('WP_CLI') && WP_CLI && class_exists('WP_CLI')) {
WP_CLI::add_command('test:wooms', RunWoomsTestsCommand::class, [
'shortdesc' = 'Run plugin tests using Pest.',
]);
}
```
Класс команды:
```
php
class RunWoomsTestsCommand
{
public function __invoke($args, $assoc_args)
{
$plugin_path = dirname(__DIR__.'..');
$pest_binary = $plugin_path.'/vendor/bin/pest';
if (! file_exists($pest_binary)) {
WP_CLI::error(sprintf('Pest binary was not found at %s.', $pest_binary));
}
$php_binary = defined('PHP_BINARY') ? PHP_BINARY : 'php';
$forwarded_args = $args;
foreach ($assoc_args as $key = $value) {
$forwarded_args[] = true === $value
? sprintf('--%s', $key)
: sprintf('--%s=%s', $key, (string) $value);
}
$command_parts = array_merge(
[
escapeshellarg($php_binary),
escapeshellarg($pest_binary),
'--colors=always',
],
array_map('escapeshellarg', $forwarded_args)
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
```
# Полный прогон
npx wp-env run cli wp test:wooms
# Фильтр по имени теста
npx wp-env run cli wp test:wooms --filter="loads wordpress core functions"
# Конкретный файл
npx wp-env run cli wp test:wooms tests/includes/ProductsTests.php
```
## 7. `Makefile`: короткие команды
Когда в проекте Docker, `wp-env`, Composer, WP-CLI и тесты, `Makefile` не добавляет магии, но экономит время на наборе длинных команд.
```
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
npx wp-env run cli wp test:wooms
```
Использование:
* `make start` — поднять окружение;
* `make stop` — остановить контейнеры;
* `make cli` — shell внутри контейнера;
* `make test` — запустить тесты.
## 8. Фикстуры вместо реального API
Если плагин синхронизирует данные с внешним сервисом (например, МойСклад), не стоит ходить в API при каждом прогоне тестов. Это замедляет тесты, делает их нестабильными и зависимыми от сети.
Сохраните реальные JSON-ответы в фикстуры:
```
tests/data/fixtures-v1/
├── products/
├── categories/
└── variants/
```
Теперь тесты проверяют бизнес-логику на стабильных входных данных:
* парсинг ответа API;
* создание или обновление товаров;
* работа с категориями;
* синхронизация атрибутов;
* обработка edge cases.
Проверка фикстуры:
```
php
it('has available and valid fixtures v1', function (): void {
$productsFixture = __DIR__.'/../data/fixtures-v1/products/first-100.json';
expect(file_exists($productsFixture))-toBeTrue();
$payload = json_decode((string) file_get_contents($productsFixture), true);
expect($payload)->toBeArray();
expect($payload['rows'] ?? [])->not->toBeEmpty();
$firstRow = $payload['rows'][0] ?? [];
expect($firstRow['id'] ?? '')->not->toBe('');
expect($firstRow['meta']['type'] ?? '')->toBe('product');
expect($firstRow['salePrices'] ?? [])->not->toBeEmpty();
});
```
## 9. Примеры тестов
### Smoke-тест: WordPress, WooCommerce и плагин загрузились
```
php
it('loads WooMS plugin and WooCommerce', function (): void {
expect(function_exists('WooMS\\request'))-toBeTrue();
expect(function_exists('wc_get_product'))->toBeTrue();
expect(class_exists('WooCommerce'))->toBeTrue();
});
```
Быстрая проверка: окружение поднялось, WordPress загрузился, WooCommerce доступен, плагин активен.
### Интеграционный тест синхронизации продукта
```
php
it('syncs products with attributes when sync option is enabled', function (): void {
\WooMS\Settings::setValue('wooms_attributes_sync_enabled', 1);
$rows = getProductsWithAttributesFixtureRows();
$row = $rows[0];
$productId = \WooMS\Products\product_update($row, []);
expect($productId)-toBeInt()->toBeGreaterThan(0);
$product = wc_get_product($productId);
expect($product)->not->toBeFalse();
expect($product->get_meta('wooms_id'))->toBe((string) $row['id']);
$productAttributes = $product->get_attributes();
expect($productAttributes)->toBeArray()->not->toBeEmpty();
});
```
Тест проверяет реальное поведение плагина: включает настройку синхронизации атрибутов, берёт продукт из фикстуры, запускает логику обновления товара, проверяет созданный WooCommerce-продукт, связь с исходным ID и атрибуты товара.
### Проверка настроек WooCommerce
```
php
it('uses ruble currency in seeded WooCommerce settings', function (): void {
expect((string) get_option('woocommerce_currency'))-toBe('RUB');
expect((string) get_option('woocommerce_default_country'))->toBe('RU');
expect((string) get_option('woocommerce_price_num_decimals'))->toBe('2');
});
```
Полезно, если перед тестами выполняется seeding базовых настроек магазина: быстрая проверка, что окружение в ожидаемом состоянии.
## 10. Транзакции: тесты без загрязнения базы
Интеграционные тесты создают товары, категории, meta-поля, настройки и связи в базе. Без очистки следующие тесты начинают зависеть от результатов предыдущих.
Способ сохранить базу чистой — оборачивать каждый тест в транзакцию и откатывать изменения после выполнения:
```
php
beforeEach(function (): void {
global $wpdb;
$wpdb-query('START TRANSACTION');
});
afterEach(function (): void {
global $wpdb;
$wpdb->query('ROLLBACK');
});
```
Особенно полезно, когда тест создаёт реальные записи в WordPress и WooCommerce. После теста база возвращается в исходное состояние.
> Транзакции работают не во всех сценариях одинаково. Если код делает собственные commit, использует отдельные соединения или внешние побочные эффекты, нужна дополнительная очистка данных.
## 11. Структура тестов в проекте
```
tests/
├── bootstrap.php # Подключение WordPress
├── add-wp-cli.php # Регистрация WP-CLI команд
├── data/
│ └── fixtures-v1/ # JSON-фикстуры из внешнего API
│ ├── products/
│ ├── categories/
│ └── variants/
└── includes/ # Активные Pest-тесты
├── BaseTests.php
├── ProductsTests.php
└── ProductsAndAttrubutesTests.php
```
Структура разделяет инфраструктуру, фикстуры и тестовые сценарии.
## Что это даёт
Проблема
Решение
Регрессии при изменении логики синхронизации
Тесты ловят ошибки до релиза
Зависимость от реального API
Фикстуры дают стабильные входные данные
Ручная настройка WordPress
`wp-env` поднимает окружение одной командой
Сложный запуск тестов внутри контейнера
WP-CLI команда и `Makefile` дают короткий интерфейс
Загрязнение базы после тестов
Транзакции и rollback возвращают БД в исходное состояние
Тесты не видят реальный WordPress-контекст
`wp-load.php` загружает WordPress, WooCommerce и сам плагин
## Итог
Связка `@wordpress/env` + Docker + Composer + Pest PHP + WP-CLI даёт понятный и воспроизводимый workflow для разработки WordPress-плагина.
Для простого плагина это может показаться избыточным. Но если внутри есть синхронизация данных, WooCommerce, внешние API и бизнес-логика, такой стек быстро окупается:
* разработчик быстрее проверяет изменения;
* новые участники быстрее поднимают проект;
* регрессии ловятся до релиза;
* тестовые данные не зависят от внешнего API;
* окружение можно воспроизвести локально и в CI.
Если делаете похожий проект, забирайте подход целиком. Ни одной строчки кода настраивать вручную не нужно — всё уже собрано и работает.
Метки
[# Автотестирование](https://wpcraft.ru/blog/tag/avtotestirovanie)
WPCraft
## Связанное
### [Стратегия тестирования: пишите тесты, не много, но в основном интеграционные](https://wpcraft.ru/blog/strategiya-testirovaniya-pishite-testy-ne-mnogo-no-v-osnovnom-integraczionnye)
* [Agile](https://wpcraft.ru/blog/category/development/agile), [TALL stack](https://wpcraft.ru/blog/category/development/tall-stack), [WooCommerce](https://wpcraft.ru/blog/category/development/woocommerce), [WordPress](https://wpcraft.ru/blog/category/development/wordpress), [Безопасность](https://wpcraft.ru/blog/category/articles/security), [Как сделать](https://wpcraft.ru/blog/category/articles/how-to), [Компоненты](https://wpcraft.ru/blog/category/includes/components)
### [Тестирование WordPress — авто тесты, unit, интеграционные, e2e/UI …](https://wpcraft.ru/blog/unit-tests-wordpress)
* [Как сделать](https://wpcraft.ru/blog/category/articles/how-to), [Обзоры](https://wpcraft.ru/blog/category/articles/overview), [Разработка & Интеграция](https://wpcraft.ru/blog/category/development)
## Ответить[Отменить ответ](/blog/autotesting-pest-wp-cli#respond)
Ваш адрес email не будет опубликован. Обязательные поля помечены \*
Имя \*
Email \*
Оставьте свой комментарий \*
Отправить комментарий
### Рубрики
* [Кейсы](https://wpcraft.ru/blog/category/cases)
* [Новости & Дайджест](https://wpcraft.ru/blog/category/news)
* [Разработка & Интеграция](https://wpcraft.ru/blog/category/development)
+ [Agile](https://wpcraft.ru/blog/category/development/agile)
+ [Gutenberg](https://wpcraft.ru/blog/category/development/gutenberg)
+ [JAM-stack](https://wpcraft.ru/blog/category/development/jam-stack)
+ [TALL stack](https://wpcraft.ru/blog/category/development/tall-stack)
+ [WooCommerce](https://wpcraft.ru/blog/category/development/woocommerce)
+ [WordPress](https://wpcraft.ru/blog/category/development/wordpress)
+ [Веб дизайн](https://wpcraft.ru/blog/category/development/web-design)
* [Составляющие](https://wpcraft.ru/blog/category/includes)
+ [Компоненты](https://wpcraft.ru/blog/category/includes/components)
+ [Плагины](https://wpcraft.ru/blog/category/includes/wordpress-plugins)
+ [Сервисы](https://wpcraft.ru/blog/category/includes/services)
+ [Темы](https://wpcraft.ru/blog/category/includes/wordpress-themes)
* [Статьи & Исследования](https://wpcraft.ru/blog/category/articles)
+ [Аналитика](https://wpcraft.ru/blog/category/articles/analitika)
+ [Безопасность](https://wpcraft.ru/blog/category/articles/security)
+ [Как сделать](https://wpcraft.ru/blog/category/articles/how-to)
+ [Мнения](https://wpcraft.ru/blog/category/articles/mneniya)
+ [Нейросети + AI (ИИ)](https://wpcraft.ru/blog/category/articles/ai)
+ [Обзоры](https://wpcraft.ru/blog/category/articles/overview)
+ [Ошибки](https://wpcraft.ru/blog/category/articles/errors)
+ [Подборки](https://wpcraft.ru/blog/category/articles/collections)
+ [Продвижение сайта](https://wpcraft.ru/blog/category/articles/website-promotion)
+ [Сниппеты](https://wpcraft.ru/blog/category/articles/snippets)
+ [Сравнения](https://wpcraft.ru/blog/category/articles/sravneniya)
+ [Ускорение сайта](https://wpcraft.ru/blog/category/articles/website-performance)
+ [ЧаВО](https://wpcraft.ru/blog/category/articles/faq)
[headless CMS](https://wpcraft.ru/blog/tag/headless-cms)
[NextJS](https://wpcraft.ru/blog/tag/nextjs)
[WordPress 7.0](https://wpcraft.ru/blog/tag/wordpress-7-0)
[Избранное](https://wpcraft.ru/blog/tag/favorites)
[Кеширование](https://wpcraft.ru/blog/tag/cache-wordpress)
[Локальное окружение и разработка](https://wpcraft.ru/blog/tag/local-environment-and-development-wordpress-woocommerce)
[Примеры сайтов на базе WordPress](https://wpcraft.ru/blog/tag/wordpress-websites-examples)
[Сеть сайтов - MultiSite](https://wpcraft.ru/blog/tag/wordpress-multisite)
[Управление сайтом](https://wpcraft.ru/blog/tag/website-management)
[Хостинг и сервера](https://wpcraft.ru/blog/tag/hosting)
[Хуки (actions + filters + events)](https://wpcraft.ru/blog/tag/wp-hooks)
[Чек-листы](https://wpcraft.ru/blog/tag/checklists)
**Клуб WPCraft**
* лучшие мировые практики и паттерны
* премиум темы и плагины - бесплатно
* экспертная помощь от опытных практиков
**Лучшие хостинги**
* для сайтов на WordPress и WooCommerce
* рейтинг от опытных разработчиков
* решения проверенные временем
**Помощь с сайтом**
* консультации и диагностика
* техническая поддержка
* управление сайтом
## Разработка современных и удобных сайтов на базе WordPress & WooCommerce
Лучшие мировые практики, которые помогают вывести сайты на качественно новый уровень.
[Подписаться: Telegram](https://t.me/wpcraft)
## [Консультация специалиста](https://wpcraft.ru/services/ask)
1 час общения с опытным специалистом, заменяет месяцы и иногда годы потерянного времени и денег
[Консультация 1 час](https://wpcraft.ru/services/ask)
[Премиум клуб WPCraft](https://wpcraft.ru/club-wordpress-woocommerce/?ref=footer)
### Услуги
* [Консультация](https://wpcraft.ru/services/ask)
* [Диагностика сайта](https://wpcraft.ru/services/troubleshooting)
* [Ускорение сайта](https://wpcraft.ru/services/page-speed-cwvs-wordpress-woocommerce)
* [Управление сайтом](https://wpcraft.ru/services/managed-wordpress-woocommerce)
* [Разработка сайта](https://wpcraft.ru/services/development-wordpress-woocommerce)
### Проекты
* [WordPress](https://wpcraft.ru/wordpress)
* [WooCommerce](https://wpcraft.ru/woocommerce)
* [Решения](https://wpcraft.ru/use-cases)
* [Плагины](https://wpcraft.ru/wordpress/plugins)
* [База знаний](https://wpcraft.ru/kb/)
* [Мониторинг сайта](https://wpcraft.ru/website-monitoring-wordpress-woocommerce)
* [Бесплатно WordPress](https://wpcraft.ru/free-wordpress-woocommerce)
* [Дайджест](https://wpcraft.ru/digest)
### Контакты
* Email:
m@wpcraft.ru
* Website:
[wpcraft.ru](https://wpcraft.ru)
[Написать в Телеграм](https://t.me/wpcraftbot)
[Контакты](https://wpcraft.ru/contacts/)
WP Craft © 2026
* [llms.txt](/llms.txt)
* [Блог](https://wpcraft.ru/blog)
* [О сайте](https://wpcraft.ru/about)
* [Цены](https://wpcraft.ru/pricing)
* [Правила](https://wpcraft.ru/legal)
