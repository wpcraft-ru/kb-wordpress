---
title: "База знаний по WordPress от wpcraft.ru"
description: "База знаний по WordPress на русском: установка, админка, контент, темы, плагины, безопасность, производительность и практические сниппеты."
---

# Разделы базы знаний по WordPress

## Основы WordPress

- [Глоссарий терминов WordPress](./basics/wordpress-glossary.md) — Словарь ключевых терминов: от админки и блоков до тем, плагинов и DNS.
- [Настройка WordPress: домен, хостинг, установка](./basics/wordpress-setup-domain-hosting-install.md) — Пошаговый сценарий первичного запуска WordPress-сайта.
- [Блог или сайт: что выбрать](./basics/blog-vs-website.md) — Разница между блогом и сайтом, как добавить блог к сайту.

## Создание сайтов

- [Создание сайтов](./create-websites/index.md) — Типовые решения и кастомная разработка.
- [Типовые сайты и проекты](./create-websites/website-types-and-projects.md) — Обзор 7 типов и быстрый выбор подходящего стека.
- [Корпоративный / имиджевый сайт](./create-websites/corporate-website.md) — Сайт для доверия, презентации услуг и входящих заявок.
- [B2C интернет-магазин](./create-websites/b2c-online-store.md) — Полный цикл онлайн-продаж: каталог, оплата, доставка.
- [B2C каталог-витрина (без онлайн-оплаты)](./create-websites/b2c-catalog-showcase.md) — Лидогенерация через каталог объектов/товаров.
- [B2B портал / оптовый каталог](./create-websites/b2b-portal-wholesale.md) — ЛК контрагентов, персональные цены, документы.
- [Лендинг / промо-сайт](./create-websites/landing-promo-site.md) — Одностраничный формат под рекламные кампании.
- [Блог / контентный проект / медиа](./create-websites/blog-content-media.md) — Контент как продукт: редактура, SEO, структура.
- [Сложное веб-приложение / личный кабинет / CRM](./create-websites/web-app-crm.md) — Системы с ролями, процессами и интеграциями.

## Платформы

- [Платформы разработки](./platforms/index.md) — WordPress, Laravel, Jamstack, Next.js и Astro: что это и когда выбирать.
  - [WordPress как платформа](./platforms/wordpress/index.md) — CMS для контентных сайтов, блогов и проектов с частыми правками.
  - [Laravel как платформа](./platforms/laravel.md) — PHP-фреймворк для кастомных веб-приложений и B2B-логики.
  - [Jamstack как архитектура](./platforms/jamstack.md) — pre-rendering, decoupling и API-first подход.
  - [Next.js как платформа](./platforms/nextjs.md) — React-фреймворк для headless и full-stack проектов.
  - [Astro как платформа](./platforms/astro.md) — content-first фронтенд для быстрых сайтов.

## Компоненты WordPress

- [Компоненты WordPress](./components/index.md) — Домен, хостинг и сервисы — ключевые компоненты инфраструктуры сайта на WordPress.
  - [Регистраторы доменов: сравнение](./components/domain/domain-registrars.md) — Международные и российские регистраторы, цены на .com и .ru, WHOIS Privacy, DNS.
  - [Типы хостинга](./components/hosting/hosting-types.md) — Shared, VPS, облачный и managed WordPress-хостинг: плюсы, минусы, для каких проектов.
  - [Критерии выбора хостинга](./components/hosting/hosting-criteria.md) — TTFB, uptime, технологии сервера, безопасность, поддержка, цены — чек-лист.
  - [Хостинг-провайдеры: сравнение](./components/hosting/hosting-providers.md) — Международные и российские провайдеры с ценами, тестами скорости и аптайма.
  - **Infrastructure as Code:**
    - [IaC для WordPress](./components/hosting/iac-wordpress.md) — Terraform, Pulumi, Ansible, Docker, Kubernetes: обзор инструментов и архитектур.
    - [Docker для WordPress](./components/hosting/docker-wordpress.md) — Локальная разработка и продакшен: Nginx, PHP-FPM, MySQL, Redis, HTTPS.
    - [CI/CD: GitHub Actions](./components/hosting/cicd-github-actions.md) — Автоматизация тестирования и деплоя без FTP.
  - [Сервисы для WordPress](./components/services/index.md) — Каталог из 41 сервиса: CDN, SEO, аналитика, email-маркетинг, автоматизация, dev-инструменты, CRO.
    - [CDN и производительность](./components/services/cdn-performance.md) — Cloudflare, Bunny.net, NitroPack, Yandex Cloud CDN, Selectel, VK Cloud.
    - [S3-провайдеры для WordPress](./components/services/s3-providers.md) — Объектные хранилища: зачем, архитектура, концепции, Yandex, Selectel, VK Cloud, AWS S3, Cloudflare R2, MinIO — цены, классы, сравнение.
    - [SEO и ключевые слова](./components/services/seo-tools.md) — Ahrefs, Semrush, SE Ranking, Rush Analytics, Keys.so, Serpstat.
    - [Аналитика и поведение](./components/services/analytics.md) — Яндекс.Метрика, GA4, Clarity, Hotjar, Roistat, Calltouch.
    - [Email-маркетинг](./components/services/email-marketing.md) — UniSender, SendPulse, Carrot Quest, Mailchimp, Brevo, HubSpot.
    - [Автоматизация и интеграции](./components/services/automation.md) — Albato, ApiMonster, Make, Zapier, n8n.
    - [Dev-инструменты](./components/services/dev-vcs-tools.md) — SourceCraft, GitVerse, GitFlic, GitHub, GitLab, Bitbucket, Gitea, Forgejo, GitRiver — сравнение российских, open-source и мировых платформ.
    - [Маркетинг, CRO и лидогенерация](./components/services/marketing-cro.md) — Envybox, CallbackHunter, Jivo, OptinMonster, VWO, Convert.

## AI и WordPress

- [AI и WordPress: обзор](./ai/index.md) — Обзор интеграции AI в экосистему: архитектура, инструменты, плагины и тренды.
- [AI-архитектура WordPress](./ai/wp-ai-architecture.md) — Abilities API, MCP Adapter, WP AI Client, Agent Skills — инфраструктура для AI-агентов.
- [WordPress MCP Adapter: практический запуск для self-hosted](./ai/wordpress-mcp-adapter.md) — Установка, публикация Abilities, подключение AI-клиентов и безопасность.
- [AI-инструменты для создания сайтов](./ai/ai-tools-wordpress.md) — AI Website Builder (.com) и opensource-альтернативы для self-hosted.
- [ИИ-инструменты для веб-разработки](./ai/ai-dev-tools.md) — Cursor, Copilot, v0, Claude Code и другие AI-инструменты (2026).
- [ИИ-команда агентов для WordPress](./ai/ai-agent-team.md) — Многоагентные AI-системы: Researcher, Writer, SEO, Editor, Support.
- [Тренды AI в WordPress](./ai/ai-trends.md) — 7 ключевых трендов и прогнозы на будущее.
- [Интеграция AI в WordPress](./ai/ai-integration.md) — Практическое руководство: плагины, API-ключи, риски.
- [Каталог AI-плагинов и инструментов](./ai/ai-plugins-and-tools.md) — Полный обзор AI-плагинов по категориям.
- [Реальные примеры AI на WordPress](./ai/ai-real-world.md) — 20 сайтов, использующих AI в production.

## Дизайн

- [Дизайн в WordPress](./design/index.md) — Полное руководство: Style Book, блочное мышление, композиция макетов, доступность, медиа-блоки.
- [WordPress для дизайнеров](./design/wordpress-for-designers.md) — Обзор возможностей: Block Editor, Style Book, паттерны, Site Editor, плагины.
- [Style Book: гид по дизайну](./design/style-book.md) — Цифровой style guide: как устроен, как использовать для визуального проектирования.
- [Иерархия блочной темы](./design/block-theme-hierarchy.md) — Архитектура: блоки → паттерны → template parts → шаблоны → тема.
- [Block-first мышление](./design/block-first-mindset.md) — Философия модульного дизайна: проектирование переиспользуемых компонентов.
- [Site Editor для прототипирования](./design/site-editor-prototyping.md) — Почему проектировать прямо в редакторе сайта — эффективно.
- [Доступность (a11y)](./design/accessibility.md) — WCAG 2.2 AA: цветовой контраст, типографика, навигация, alt text, плагины тестирования.
- [Настройки темы](./design/theme-settings.md) — Цвета, шрифты, типографика и макет в Global Styles.
- [Tailwind CSS v4 + daisyUI в блочной теме WordPress](./design/tailwind-daisyui-wordpress.md) — Практическая интеграция Tailwind+daisyUI в block theme с синхронизацией через theme.json.
- [DESIGN.md для WordPress](./design/design-md.md) — DESIGN.md как контракт дизайна для AI и связка с theme.json, Tailwind и daisyUI.
- [Impeccable: AI-дизайн для WordPress](./design/impeccable.md) — Open-source навык для AI-ассистентов: 23 команды, детектор антипаттернов, генерация DESIGN.md.
- [theme.json — основа дизайн-системы](./design/theme-json.md) — Единый конфиг для WordPress и WooCommerce: структура, design tokens, CSS-переменные, WooCommerce-блоки, lock down, border radius presets (WP 6.9+).
- [Композиция макетов](./design/layout-composition.md) — Group, Row/Stack, Columns: построение структуры страницы.
- [Отступы и размеры](./design/dimensions-spacing.md) — Padding, margin и block spacing: управление пространством.
- [Медиа-блоки](./design/media-blocks.md) — Галерея, Media & Text, Cover: работа с изображениями и видео.
- [Карусели и слайдеры](./design/carousel-slider.md) — MetaSlider, Smart Slider 3, Carousel Slider Block с учётом доступности.
- [Паттерны (Block Patterns)](./design/patterns/index.md) — Полное руководство: регистрация, PHP, шаблоны, block type, стартовые паттерны, block locking, источники.

## Интернет-маркетинг

- [Интернет-маркетинг](./marketing/index.md) — Обзор всех подвидов интернет-маркетинга: SEO, контент-маркетинг, PPC/CPC, CPA, AEO/GEO.
  - [Определение и основы](./marketing/internet-marketing.md) — Что такое интернет-маркетинг, направления, модель 4P, преимущества, метрики.
  - [SEO (поисковая оптимизация)](./marketing/seo.md) — Типы SEO, алгоритмы Google и Яндекса, тренды и ошибки 2026.
  - [Контент-маркетинг](./marketing/content-marketing.md) — Стратегия, форматы, каналы, пошаговый запуск, метрики эффективности.
  - [PPC и CPC](./marketing/ppc-cpc.md) — Реклама с оплатой за клик: модели, аукционы, оптимизация, формулы расчёта.
  - [CPA-маркетинг](./marketing/cpa.md) — Модель оплаты за действие: виды офферов, CPA-сети, метрики.
  - [AEO и GEO](./marketing/aeo-geo.md) — Оптимизация для AI-поиска: ChatGPT, Perplexity, Google AI Overviews.

## Руководства

- [Хостинг для WordPress: как выбрать](./how-to/wordpress-hosting.md) — Типы хостинга (shared, VPS, облачный, managed), критерии выбора, managed-альтернативы для self-hosted.
- [Типовые сайты и проекты](./how-to/website-types-and-projects.md) — 7 базовых сценариев: контекст, стек и бриф для выбора типа проекта.
- [Управление несколькими сайтами WordPress](./how-to/multiple-sites-management.md) — Multisite, MainWP, переключение между сайтами, перенос доменов.
- [Работа с разработчиком WordPress](./how-to/working-with-developer.md) — Как безопасно добавить разработчика, управлять правами и удалить доступ после работы.
- [Как изменить адрес сайта WordPress](./how-to/change-site-url.md) — Смена URL сайта: через админку, WP-CLI, wp-config.php или базу данных.
- [Мобильные приложения для WordPress](./how-to/mobile-apps.md) — Jetpack-приложение и альтернативы для управления сайтом с телефона.
- [Настройка S3-хранилища для WordPress](./how-to/s3-setup-wordpress.md) — Пошаговое руководство: выбор провайдера, бакет, IAM, плагин, миграция, CDN, проверка.

## FAQ

- [Домен и хостинг: в чём разница](./faq/domain-vs-hosting.md) — Простое объяснение: домен (адрес) vs хостинг (место хранения файлов).
- [Как вести базу знаний WordPress](./faq/knowledge-base-workflow.md) — Практический шаблон страницы: структура, связи и рабочие примеры.
- [WordPress.com vs WordPress.org: сравнение](./faq/wordpress-com-vs-org.md) — Подробная таблица различий: хостинг, безопасность, плагины, стоимость, поддержка.
- [cPanel и WordPress](./faq/cpanel-wordpress.md) — Объяснение: на WordPress.com нет cPanel, на self-hosted cPanel — стандартный инструмент управления хостингом.

## Консоль / Админка

- [Панель управления WordPress (`wp-admin`): базовая навигация](./console/wordpress-dashboard-wp-admin-basics.md) — Практическая навигация по админке и безопасная работа команды.
- [Admin Bar (панель инструментов WordPress)](./console/admin-bar.md) — Элементы тулбара, настройка видимости и практические рецепты.
- [Настройки обсуждения (комментарии)](./console/discussion-settings.md) — Модерация, уведомления, аватары, антиспам-плагины для комментариев.
- [Видимость сайта: управление приватностью](./console/privacy-settings.md) — Как скрыть сайт от поисковиков или сделать приватным через плагины.

## Контент

- [Страницы, записи, категории и теги: базовая модель контента](./content/pages-posts-and-taxonomies-basics.md) — Как структурировать контент без дублирования и хаоса.
- [Блочный редактор WordPress: добавление контента блоками](./content/wordpress-editor-blocks.md) — Gutenberg: блоки, Site Title, Post Content, CSS-классы, сочетания клавиш.
- [Меню в WordPress: создание, ссылки, выпадающие подменю](./content/menus.md) — Как создать меню, добавить ссылки на страницы, сделать выпадающие подменю.

## Плагины

- [Плагины WordPress: основы выбора и установки](./plugins/plugins-basics.md) — Как безопасно выбирать, устанавливать и управлять плагинами.
- [SEO-плагины WordPress: сравнение и выбор](./plugins/seo-plugins.md) — The SEO Framework, Rank Math, Yoast SEO, AIOSEO, SEOPress — функции, цены, производительность, Site Kit for Yandex.
- [WooCommerce: основы настройки интернет-магазина](./plugins/woocommerce-basics.md) — Быстрый старт: темы, товары, оплата, доставка, налоги.
- [Плагины членства (membership) для WordPress](./plugins/membership-plugins.md) — Создание membership-сайта: MemberPress, Simple Membership, курсы, форумы.
- [Плагины для S3-хранилищ WordPress](./plugins/s3-plugins.md) — Полное сравнение и гайды: S3 Uploads (Human Made), WP Offload Media (установка, CDN, CloudFront), Media Cloud, Next3 Offload, Infinite Uploads.

## WooCommerce

- [WooCommerce: полное руководство](./woocommerce/index.md) — От установки до запуска магазина: товары, оплата, доставка, налоги, заказы и расширения.
- [Установка и первые шаги](./woocommerce/getting-started.md) — 5 шагов: установка плагина, настройки, выбор темы.
- [Товары WooCommerce](./woocommerce/products.md) — 6 встроенных типов товаров и расширения: подписки, бронирования, наборы.
- [Приём платежей](./woocommerce/payments.md) — WooPayments, платёжные шлюзы, Apple Pay, Google Pay, fraud-защита.
- [Налоги](./woocommerce/taxes.md) — Настройка налоговых ставок, автоматические налоги, НДС для ЕС.
- [Доставка](./woocommerce/shipping.md) — Зоны, методы (flat rate, бесплатная, самовывоз), классы доставки.
- [Страницы магазина](./woocommerce/store-pages.md) — Shop, Cart, Checkout, My Account: кастомизация через блоки.
- [Управление заказами](./woocommerce/orders.md) — Статусы заказов, возвраты, email-уведомления.
- [Запуск и расширение](./woocommerce/launch-extend.md) — Чеклист запуска, аналитика, маркетинговые расширения.
- [Оптимизация производительности WooCommerce](./woocommerce/performance-optimization.md) — 8 шагов: кэширование, изображения, код, CDN, БД, темы, GZIP, мониторинг.
- [Лучшие темы для WooCommerce](./woocommerce/best-themes.md) — Сравнительный обзор: Blocksy, Astra, Shoptimizer, Kadence, Botiga, Storefront и другие с тестами скорости и ценами.

## Темы

- [Темы, child theme и Customizer: основы](./themes/themes-child-themes-customizer.md) — Выбор тем, как создать child theme и работать с Customizer без потери изменений.
- [Типы тем WordPress: block, classic, hybrid, universal](./themes/theme-types.md) — Сравнение типов тем: какой редактор, кастомизация и для каких задач.
- [Выбор и настройка темы](./themes/choose-and-setup-theme.md) — Как найти, установить, активировать и настроить тему после активации.
- [Site Editor: визуальное редактирование](./themes/site-editor.md) — Редактирование шапки, подвала, шаблонов и стилей без кода.
- [Шаблоны WordPress: создание, редактирование, удаление](./themes/templates.md) — Управление шаблонами: просмотр, сброс, удаление пользовательских шаблонов.
- [Customizer: полное руководство](./themes/customizer.md) — Все секции: идентификация сайта, цвета, контент-опции, меню, виджеты.
- [Кастомный CSS в WordPress](./themes/custom-css.md) — Три способа добавить CSS: Customizer, child theme, Site Editor + классы блоков.
- [Практики веб-дизайна для WordPress](./themes/design-best-practices.md) — Планирование структуры, навигация, изображения, доступность, производительность.

## Безопасность

- [Базовая безопасность WordPress для нового сайта](./security/wordpress-security-basics.md) — Минимальный security baseline для проекта на старте.
  - [Сервисы защиты сайтов и CDN: сравнение топ-10](./security/web-protection-services.md) — Сравнение десяти сервисов CDN и DDoS-защиты: Cloudflare, Yandex SWS, DDoS-Guard, NGENIX, Qrator и другие. Плюсы, минусы, тарифы, рекомендации для WordPress.

## Производительность

- [Оптимизация WordPress](./performance/optimization.md) — Комплексная оптимизация: хостинг, плагины, изображения, CDN, сжатие, база данных и масштабирование.
- [Кэширование WordPress](./performance/cache.md) — Виды кэширования: плагины, браузерный кэш, объектный кэш, серверный кэш — как выбрать и настроить.
- [Кэширование в WooCommerce](./performance/caching-woocommerce.md) — Настройка кэша для магазина: исключения, cookies, Varnish, популярные плагины.
- [PHP-оптимизация для WordPress](./performance/php-optimization.md) — Настройка PHP: версии, php.ini, лимиты памяти, таймауты, размеры загрузок и замена WP-Cron.

## QA и тестирование

- [QA и тестирование WordPress](./qa/index.md) — Полный раздел по обеспечению качества: автоматизированное тестирование, ручная проверка, доступность, производительность.
  - [Автоматическое тестирование](./qa/auto-testing/index.md) — Unit, интеграционные и E2E-тесты: когда какой вид применять, инструменты и best practices.
    - [QA и тестирование WordPress](./qa/index.md) — Стратегия тестирования: три подхода (Ice Cream Cone, Трофей, Пирамида), ручное тестирование, исследовательские сессии.
    - [Unit-тесты с PHPUnit](./qa/auto-testing/unit-tests-phpunit.md) — Полное руководство: Composer, `WP_UnitTestCase`, фабрика, тестирование CPT, GitHub Actions.
    - [Интеграционные тесты: Pest + WP-CLI](./qa/auto-testing/pest-wp-cli.md) — Стек Pest PHP + WP-CLI + `wp-env`: фикстуры, транзакции, Makefile.
    - [E2E-тесты с Playwright](./qa/auto-testing/e2e-tests-playwright.md) — Полное руководство: `wp-env`, Playwright, написание и запуск E2E-тестов.

## Шпаргалки и чек-листы

- [functions.php: базовые сниппеты](./cheatsheet/functions-php-essentials.md) — Подключение стилей/скриптов, регистрация меню, theme supports, виджеты.
- [WP_Query: рецепты запросов](./cheatsheet/wp-query-recipes.md) — Готовые шаблоны выборок: категории, мета-поля, CPT, дата, пагинация.
- [Хуки WordPress: шпаргалка](./cheatsheet/hooks-cheatsheet.md) — Топ actions и filters с примерами: save_post, the_content, pre_get_posts и другие.
- [Чек-лист запуска в продакшен](./cheatsheet/production-checklist.md) — Операционная готовность, безопасность, надёжность, производительность и расходы перед запуском.

## Юридические требования

- [Обязательные юридические страницы](./legal/required-pages.md) — Минимальный набор документов: Политика конфиденциальности и реквизиты компании.
- [Рекомендуемые юридические страницы](./legal/optional-pages.md) — Пользовательское соглашение, Публичная оферта, Политика cookies.
- [Требования по типам сайтов](./legal/by-website-type.md) — Матрица: какие документы нужны для магазина, SaaS, курсов, блога и других типов.
- [Технические аспекты реализации](./legal/implementation-checklist.md) — Как разместить юридические документы: размещение в подвале, чекбоксы согласия, cookie-баннер.
- [Последствия несоблюдения](./legal/consequences-and-risks.md) — Штрафы от Роскомнадзора, блокировка платежей, судебные разбирательства, репутационные риски.

### Шаблоны юридических документов

- [Каталог шаблонов](./legal/templates/index.md) — Готовые шаблоны для адаптации под ваш сайт.
- [Шаблон: Политика конфиденциальности](./legal/templates/privacy-policy-template.md) — Основной документ про обработку персональных данных (152-ФЗ).
- [Шаблон: Пользовательское соглашение](./legal/templates/terms-of-service-template.md) — Правила использования сайта и ограничение ответственности.
- [Шаблон: Публичная оферта](./legal/templates/public-offer-template.md) — Договор для продажи товаров и услуг (доставка, возврат, оплата).
- [Шаблон: Политика cookies](./legal/templates/cookie-policy-template.md) — Описание cookies и управление согласием на отслеживание.
- [Шаблон: Договор на разработку ПО (Agile/фриланс)](./legal/templates/contract-freelance.md) — Помесячный Agile-договор между самозанятым фрилансером и компанией-заказчиком с недельным review, авансом на следующий месяц и итоговой оплатой по результатам месяца.
- [Шаблон: Договор оказания услуг (общий)](./legal/templates/contract-services.md) — Универсальный договор с оформлением услуг через ТЗ. Внутри: сам договор + 3 шаблона ТЗ (на задачу, на диагностику, на разработку).

