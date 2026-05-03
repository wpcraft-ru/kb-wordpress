---
title: "Log"
description: "Хронология всех операций с базой знаний WordPress"
---

## [2026-05-03] ingest | S3-хранилища для WordPress

Массовый ingest по теме S3 для WordPress. 10 источников из интернета и wpcraft.ru.

**Raw-файлы (10):**
- `raw/2026/0503/wpcraft-s3-uploads-human-made.md`
- `raw/2026/0503/aws-best-practices-static-content-offload.md`
- `raw/2026/0503/aws-s3-bucket-creation.md`
- `raw/2026/0503/alexrusin-offload-wp-media-s3.md`
- `raw/2026/0503/infiniteuploads-store-images-s3.md`
- `raw/2026/0503/next3offload-upload-media-s3.md`
- `raw/2026/0503/deliciousbrains-wp-offload-media-s3-quickstart.md`
- `raw/2026/0503/wp-org-plugin-wp-offload-media-lite.md`
- `raw/2026/0503/wpcraft-highload-bigdata.md`
- `raw/2026/0503/wpcraft-cloud-hosting-wordpress-woocommerce.md`

**Создано (6 страниц):**
- `plugins/s3-storage.md` — Обзорная: зачем S3, архитектура, провайдеры
- `plugins/s3-uploads.md` — S3 Uploads (Human Made): open-source, WP-CLI, конфиг, signed URL
- `plugins/wp-offload-media.md` — WP Offload Media: UI, Lite/Pro, CloudFront, bulk offload
- `faq/s3-plugins-comparison.md` — Сравнение всех плагинов (S3 Uploads на первом месте)
- `how-to/s3-setup-wordpress.md` — Пошаговое руководство: провайдер, бакет, IAM, плагин, CDN
- `components/services/s3-providers.md` — Обзор S3-провайдеров (российские в топе: Yandex, Selectel, VK)

**Обновлено:**
- `index.md` — 6 новых записей в разделах Плагины, FAQ, Руководства, Компоненты
- `components/services/index.md` — раздел «Объектные хранилища (S3)»

## [2026-05-03] update | snippets → cheatsheet + production-checklist

- Директория `snippets/` переименована в `cheatsheet/` (3 файла: functions-php-essentials, hooks-cheatsheet, wp-query-recipes)
- Обновлены ссылки в `AGENTS.md`, `index.md`, `README.md`, `queries/how-to-create-page-template.md`
- Создана страница `cheatsheet/production-checklist.md` — чек-лист запуска WordPress в продакшен (адаптирован из Vercel Production Checklist, raw/2026/0503/)
- Секция «Сниппеты» в `index.md` и `README.md` переименована в «Шпаргалки и чек-листы`

## [2026-05-01] update | Перенос domain-vs-hosting в FAQ

Страница «Домен и хостинг: в чём разница» перенесена из `basics/` в `faq/` — лучше соответствует формату FAQ.

**Изменения:**
- Файл перемещён: `basics/domain-vs-hosting.md` → `faq/domain-vs-hosting.md`
- Обновлены ссылки в 6 файлах: `index.md`, `README.md`, `domain-registrars.md`, `hosting-types.md`, `change-site-url.md`, `wordpress-setup-domain-hosting-install.md`

## [2026-05-01] ingest | Сервисы для WordPress (raw/2025/1105)

Изучены 7 raw-файлов из `raw/2025/1105/` с обзором 41 сервиса в 7 категориях.

**Созданы страницы:**
- `components/services/cdn-performance.md` — Cloudflare, Bunny.net, NitroPack, Yandex Cloud CDN, Selectel, VK Cloud
- `components/services/seo-tools.md` — Ahrefs, Semrush, SE Ranking, Rush Analytics, Keys.so, Serpstat
- `components/services/analytics.md` — Яндекс.Метрика, GA4, Clarity, Hotjar, Roistat, Calltouch
- `components/services/email-marketing.md` — UniSender, SendPulse, Carrot Quest, Mailchimp, Brevo, HubSpot
- `components/services/automation.md` — Albato, ApiMonster, Make, Zapier, n8n
- `components/services/dev-tools.md` — GitHub, GitLab, Bitbucket, Gitea, VK Cloud
- `components/services/marketing-cro.md` — Envybox, CallbackHunter, Jivo, OptinMonster, VWO, Convert

**Обновлены:**
- `components/services/index.md` — полный каталог с навигацией по 7 категориям
- `components/index.md` — обновлена секция «Сервисы»
- `index.md` — добавлены все 7 подразделов сервисов
- `performance/optimization.md` — кросс-ссылка на `cdn-performance.md`

## [2026-05-01] ingest | Домены и хостинг из raw/2025/1104

Ingested 20 источников (en + ru) из `raw/2025/1104/` в разделы `components/domain` и `components/hosting`.

**Созданы страницы:**
- `components/domain/domain-registrars.md` — сравнение 10 международных + 3 российских регистраторов
- `components/hosting/hosting-types.md` — 4 типа хостинга с плюсами/минусами/шпаргалкой
- `components/hosting/hosting-criteria.md` — TTFB, uptime, технологии, безопасность, чек-лист
- `components/hosting/hosting-providers.md` — 10 международных + 10 российских провайдеров с ценами

**Обновлены страницы:**
- `components/index.md`, `components/domain/index.md`, `components/hosting/index.md` — каталоги подразделов
- `index.md` — раздел «Компоненты WordPress» с полным списком
- `how-to/wordpress-hosting.md` — кросс-ссылки на новые страницы
- `basics/domain-vs-hosting.md` — кросс-ссылки на новые страницы

---

## [2026-05-01] create: раздел Компоненты (components)

Создан новый раздел `components/` с подразделами:
- `components/domain/` — Домен
- `components/hosting/` — Хостинг
- `components/services/` — Сервисы

Добавлены заглушки index.md во все подразделы. Раздел добавлен в каталог index.md.

# Operations Log

## [2026-05-01] ingest | WooCommerce (raw/2025/1103)

- Источник: курс «Build your store with WooCommerce» с WordPress.com + документация WooCommerce.com
- **Создан раздел `woocommerce/`** с 9 страницами:
  - `woocommerce/index.md` — Обзор раздела
  - `woocommerce/getting-started.md` — Установка, настройка, первые шаги
  - `woocommerce/products.md` — 6 типов товаров + расширения (subscriptions, bookings, bundles)
  - `woocommerce/payments.md` — WooPayments, платёжные шлюзы, fraud-защита
  - `woocommerce/taxes.md` — Налоговые ставки, автоматические налоги, НДС ЕС
  - `woocommerce/shipping.md` — Зоны, методы доставки, классы
  - `woocommerce/store-pages.md` — Shop, Cart, Checkout, My Account
  - `woocommerce/orders.md` — Статусы, возвраты, email-уведомления
  - `woocommerce/launch-extend.md` — Чеклист запуска, аналитика, расширения
- **Адаптация .com → opensource:** удалены все упоминания WordPress.com-планов, тарифов, managed-сервисов. Оставлен только opensource-функционал WooCommerce.
- **Кросс-ссылки:** обновлены `plugins/woocommerce-basics.md`, `index.md`, `security/wordpress-security-basics.md`, `performance/optimization.md`
- **Обновлён `index.md`:** добавлен раздел «WooCommerce» (9 записей), обновлена запись в «Плагины»

## [2026-05-01] ingest | Дизайн в WordPress (raw/2025/1102)

- Источник: 25 уроков курса [Beginner WordPress Designer](https://learn.wordpress.org/course/beginner-wordpress-designer/) от learn.wordpress.org
- **Создан раздел `design/`** с 12 страницами:
  - `design/index.md` — Обзор раздела «Дизайн в WordPress»
  - `design/wordpress-for-designers.md` — Обзор возможностей WP для дизайнеров
  - `design/style-book.md` — Style Book как инструмент дизайна
  - `design/block-theme-hierarchy.md` — Иерархия блочной темы: блоки → паттерны → шаблоны
  - `design/block-first-mindset.md` — Философия блочного мышления
  - `design/site-editor-prototyping.md` — Site Editor для прототипирования
  - `design/accessibility.md` — Доступность (a11y): WCAG 2.2 AA, тестирование
  - `design/theme-settings.md` — Global Styles: цвета, шрифты, типографика, макет
  - `design/layout-composition.md` — Композиция: Group, Row, Stack, Columns
  - `design/dimensions-spacing.md` — Padding, margin, block spacing
  - `design/media-blocks.md` — Галерея, Media & Text, Cover
  - `design/carousel-slider.md` — Карусели и слайдеры через плагины
- **Источник:** learn.wordpress.org (официальный WordPress.org), адаптация .com не требуется
- **Пропущены дубликаты:** уроки 05–08 (знакомство с WP) дублируют существующие страницы в basics/ и plugins/
- **Кросс-ссылки добавлены** в 10 страниц (design ↔ themes, design ↔ design)
- **Обновлён `index.md`:** добавлен раздел «Дизайн» (12 записей)

## [2026-05-01] ingest | AI и WordPress (raw/2025/1101)

- Обработано 12 raw-файлов и 4 страницы с wpcraft.ru/ai
- Создан новый раздел **`ai/`** с 9 страницами:
  - `ai/index.md` — Обзорная страница раздела AI и WordPress
  - `ai/wp-ai-architecture.md` — AI-архитектура: Abilities API, MCP Adapter, WP AI Client, Agent Skills
  - `ai/ai-tools-wordpress.md` — AI-инструменты для создания сайтов (перенесён из `basics/` + дополнен)
  - `ai/ai-dev-tools.md` — ИИ-инструменты для веб-разработки (Cursor, Copilot, v0, Claude Code)
  - `ai/ai-agent-team.md` — ИИ-команда агентов для автоматизации контент-маркетинга
  - `ai/ai-trends.md` — 7 ключевых трендов AI в WordPress (2025–2026)
  - `ai/ai-integration.md` — Практическое руководство по интеграции AI
  - `ai/ai-plugins-and-tools.md` — Каталог AI-плагинов по категориям
  - `ai/ai-real-world.md` — 20 реальных сайтов с AI на WordPress
- **Перенесено:** `basics/ai-tools-wordpress.md` → `ai/ai-tools-wordpress.md` (файл удалён из basics/)
- **Обновлены кросс-ссылки:** `faq/wordpress-com-vs-org.md` — добавлена ссылка на `ai/ai-tools-wordpress`
- **Обновлён `index.md`:** удалена запись `basics/ai-tools-wordpress`, добавлен раздел «AI и WordPress» (9 записей)
- **Обновлён `astro.config.mjs`:** добавлен раздел сайдбара «AI и WordPress»

## [2026-05-01] ingest | Редакторы, темы, меню, CSS и консоль WordPress (raw/2025/1201)

- Обработано 27 raw-файлов из `raw/2025/1201/`. Все источники с WordPress.com, адаптированы под WordPress.org (self-hosted).
- Созданы **12 новых страниц**:

  **Темы (6 страниц):**
  - `themes/theme-types.md` — Типы тем: block, classic, hybrid, universal
  - `themes/site-editor.md` — Site Editor: визуальное редактирование всего сайта
  - `themes/templates.md` — Шаблоны: создание, редактирование, сброс, удаление
  - `themes/customizer.md` — Customizer: полное руководство (цвета, контент-опции, меню)
  - `themes/choose-and-setup-theme.md` — Выбор и настройка темы
  - `themes/custom-css.md` — Кастомный CSS: три способа + CSS-классы блоков

  **Контент (2 страницы):**
  - `content/wordpress-editor-blocks.md` — Блочный редактор: блоки, Site Title, Post Content, сочетания клавиш
  - `content/menus.md` — Меню: создание, ссылки, выпадающие подменю

  **Консоль (2 страницы):**
  - `console/discussion-settings.md` — Настройки обсуждения: комментарии, модерация, аватары
  - `console/privacy-settings.md` — Видимость сайта: приватность, Coming Soon, robots.txt

  **Руководства (1 страница):**
  - `how-to/change-site-url.md` — Как изменить адрес сайта: 4 способа

  **FAQ (1 страница):**
  - `faq/cpanel-wordpress.md` — cPanel и WordPress: .com vs self-hosted

- **Адаптировано .com → open-source:**
  - Custom CSS: на .com доступен с платных планов → на self-hosted доступен всегда
  - cPanel: на .com нет → на self-hosted стандартный инструмент
  - AI-ассистент меню: помечен как .com-only
  - Приватность: .com-фичи → opensource-плагины (Coming Soon, Maintenance Mode)
  - Смена адреса: .com-интерфейс → WP-CLI, wp-config.php, БД

- **Обновлены кросс-ссылки** в 5 существующих страницах:
  - `themes/themes-child-themes-customizer.md`
  - `content/pages-posts-and-taxonomies-basics.md`
  - `console/wordpress-dashboard-wp-admin-basics.md`
  - `themes/design-best-practices.md`
  - `basics/getting-started-with-wordpress-guide.md`

- **Обновлён `index.md`**: 12 новых записей в разделах Темы, Контент, Консоль, Руководства, FAQ

## [2026-04-28] init | WP Knowledge Base

- Создана структура репозитория
- Настроен Astro + Starlight
- Созданы index.md и log.md
- Написан AGENTS.md (LLM Wiki schema)

## [2026-04-28] ingest | Тестовая страница базы знаний

- Создана страница `core/knowledge-base-workflow.md` с frontmatter
- Добавлены рабочие PHP и JS примеры с пояснениями
- Страница добавлена в `index.md`

## [2026-04-28] ingest | Getting Started with WordPress

- Источник: `raw/Getting-Started-with-WordPress-260427.pdf`
- Созданы страницы:
  - `core/getting-started-with-wordpress-guide.md`
  - `core/wordpress-setup-domain-hosting-install.md`
  - `core/wordpress-dashboard-wp-admin-basics.md`
  - `core/pages-posts-and-taxonomies-basics.md`
  - `plugins/plugins-basics.md`
  - `themes/themes-child-themes-customizer.md`
  - ~~`core/plugins-themes-and-customizer-basics.md`~~ (разбита и перемещена)
  - `security/wordpress-security-basics.md`
- Обновлены `index.md`, `core/knowledge-base-workflow.md`

## [2026-04-28] ingest | WordPress 101

- Источник: `raw/wordpress-101-updated-260427.pdf`
- Создана страница `core/wordpress-101-guide.md`
- Усилены перекрестные связи с core/security страницами
- Обновлены `index.md`, `core/knowledge-base-workflow.md`

## [2026-04-28] update | Реорганизация таксономии разделов

- `core/plugins-themes-and-customizer-basics.md` разбита на два отдельных файла
- Создана `plugins/plugins-basics.md` — плагины (выбор, установка, жизненный цикл)
- Создана `themes/themes-child-themes-customizer.md` — темы, child theme, Customizer
- Обновлены ссылки в 6 страницах: `basics/knowledge-base-workflow.md`, `basics/wordpress-101-guide.md`, `basics/pages-posts-and-taxonomies-basics.md`, `basics/getting-started-with-wordpress-guide.md`, `basics/wordpress-dashboard-wp-admin-basics.md`, `security/wordpress-security-basics.md`
- Обновлён `index.md`: записи перенесены в разделы Плагины и Темы

## [2026-04-28] update | Реструктуризация папок: core → basics/console/content

- Папка `core/` переименована в `basics/` (основы WordPress)
- Создана папка `console/` — `wordpress-dashboard-wp-admin-basics.md` перемещён из `core/`
- Создана папка `content/` — `pages-posts-and-taxonomies-basics.md` перемещён из `core/`
- Обновлены ссылки во всех затронутых страницах (basics/, console/, content/, security/, plugins/, themes/)
- Обновлён `index.md`: раздел «Ядро WordPress» переименован в «Основы WordPress», добавлены разделы «Консоль / Админка» и «Контент»

## [2026-04-28] ingest | Сниппеты: functions.php, WP_Query, хуки

- Созданы 3 страницы-шпаргалки в `snippets/`:
  - `snippets/functions-php-essentials.md` — enqueue, theme support, меню, виджеты, body_class
  - `snippets/wp-query-recipes.md` — 10 рецептов WP_Query (CPT, мета, дата, пагинация)
  - `snippets/hooks-cheatsheet.md` — топ actions и filters с примерами
- Обновлён `index.md`: раздел «Сниппеты» заполнен тремя записями

## [2026-04-28] ingest | Performance: Cache, PHP Optimization, Optimization

- Источники: WordPress Developer Handbook
  - [Cache](https://developer.wordpress.org/advanced-administration/performance/cache/)
  - [PHP Optimization](https://developer.wordpress.org/advanced-administration/performance/php/)
  - [Optimization](https://developer.wordpress.org/advanced-administration/performance/optimization/)
- Созданы 3 страницы в `performance/`:
  - `cache.md` — плагины кэширования, браузерный кэш, объектный кэш (Redis/Memcached), серверный кэш (Varnish/OPcache)
  - `php-optimization.md` — версии PHP, php.ini (таймауты/память/загрузки), WP_MEMORY_LIMIT, замена WP-Cron
  - `optimization.md` — факторы производительности, хостинг, изображения, CDN, сжатие, БД, autoloaded-options, масштабирование
- Добавлены перекрёстные ссылки между всеми тремя страницами
- Обновлён `index.md`: раздел «Производительность» заполнен тремя записями

## [2026-04-28] update | SEO descriptions

- Обновлено `src/content/docs/index.md`: description в frontmatter расширен с учётом SEO meta description

## [2026-04-29] ingest | Юридические требования и шаблоны

- Источник: синтезированный материал о 152-ФЗ, Законе о ЗПП, требованиях Роскомнадзора
- Созданы 5 основных страниц в `legal/`:
  - `required-pages.md` — обязательный минимум: Политика конфиденциальности, реквизиты компании
  - `optional-pages.md` — рекомендуемые: Пользовательское соглашение, Публичная оферта, Политика cookies
  - `by-website-type.md` — матрица требований для магазина, SaaS, курсов, блога, лендинга, корпсайта, маркетплейса
  - `implementation-checklist.md` — технические аспекты: размещение в подвале, чекбоксы согласия, cookie-баннер, примеры кода
  - `consequences-and-risks.md` — штрафы, блокировка платежей, судебные разбирательства, GDPR, репутационные риски
- Созданы 4 готовых шаблона в `legal/templates/`:
  - `index.md` — каталог и рекомендации по использованию
  - `privacy-policy-template.md` — Политика конфиденциальности под 152-ФЗ (с таблицей сроков хранения и получателей)
  - `terms-of-service-template.md` — Пользовательское соглашение (обязательства, IP-права, модерация, разрешение споров)
  - `public-offer-template.md` — Публичная оферта (товары, услуги, подписка) — с информацией о доставке, возврате, гарантии
  - `cookie-policy-template.md` — Политика cookies с примерами cookie-баннера и JS-кода
- Обновлён `index.md`: добавлен раздел «Юридические требования» (5 страниц + подраздел с 5 шаблонами)
- Обновлён `log.md`: добавлена эта запись

## [2026-04-29] update | Шаблон договора переименован в contract-freelance.md

- Переименован `legal/templates/contract.md` → `legal/templates/contract-freelance.md`
- Уточнён frontmatter: теперь шаблон позиционируется как фриланс-договор (самозанятый исполнитель)
- Обновлены ссылки в `index.md` и `legal/templates/index.md`

## [2026-04-30] update | Удаление дублирующих H1 из всех страниц

- Правило «не дублировать заголовок» зафиксировано в AGENTS.md и всех 6 wiki-скиллах
- Удалены H1, дублирующие frontmatter `title`, из 22 страниц:
  - `basics/`: getting-started, wordpress-101, knowledge-base-workflow, wordpress-setup
  - `console/`, `content/`, `core/`, `plugins/`, `themes/`, `security/`
  - `snippets/`: functions-php, hooks, wp-query
  - `performance/`: cache, optimization, php-optimization
  - `legal/`: by-website-type, consequences, implementation-checklist, optional-pages, required-pages
  - `legal/templates/`: index, privacy-policy, terms-of-service, public-offer, cookie-policy
- Не тронуты: `index.md`, `log.md`, `404.md` (системные), `contract-freelance.md` (H1 ≠ title)
- Исправлена историческая запись в `log.md`

## [2026-04-29] update | Шаблон договора на разработку ПО

- Обновлён `legal/templates/contract-freelance.md`: шаблон переведён на помесячную Agile-модель работы
- Закреплены недельный обзор задач, месячная итерация, аванс как подтверждение бронирования следующего месяца и итоговая оплата как факт приёмки работ
- Уточнены предмет договора, переход исключительных прав, конфиденциальность, прекращение договора и формулировки акта
- Обновлены каталоги `legal/templates/index.md` и `index.md`: добавлена ссылка на шаблон договора

## [2026-04-30] update | Договор: добавлена система контроля версий (Git)

- Обновлён `legal/templates/contract-freelance.md`: Git добавлен как инструмент совместной работы наряду с трекером задач
- Изменённые пункты:
  - **1.4** — Git как инструмент учёта изменений исходного кода, версий и истории правок
  - **1.6** — Git добавлен в перечень мест фиксации результатов за месяц
  - **2.1.3** — отчёт формируется по данным трекера задач и Git
  - **4.1, 4.6** — Акт и перечень услуг определяются с учётом истории Git
  - **Приложение №1** — ведение Git добавлено в состав услуг (commit messages, читаемая история, синхронизация)
  - **Приложение №2 (Акт)** — добавлен раздел «Список изменений в Git за отчётный месяц»

## [2026-04-30] fix | Устранение 404 из-за `.md` в ссылках

- **Проблема**: 87 ссылок с `.md` в исходниках вики. Starlight строит маршруты без `.md`, а ссылки в HTML оставались с `.md` → 404.
- **Решение**: создан кастомный remark-плагин `src/remark-strip-md-links.mjs`, который при билде обрезает `.md` у относительных ссылок. Абсолютные URL (http/https) не трогаются.
- Плагин зарегистрирован в `astro.config.mjs` через `markdown.remarkPlugins`.
- Билд успешен, во всех выходных HTML-файлах `.md`-ссылок больше нет (кроме edit-ссылок на GitHub).

## [2026-05-01] ingest | Договор оказания услуг (общий) с шаблонами ТЗ внутри

- Создан `legal/templates/contract-services.md` — универсальный договор оказания услуг с оформлением через ТЗ. Всё в одном файле:
  - Основной договор (9 разделов: предмет, порядок оказания, стоимость, исключительные права, обязанности, ответственность, срок действия, заключительные положения, реквизиты)
  - Приложение № 1 — шаблон ТЗ на задачу (мелкие изолированные работы)
  - Приложение № 2 — шаблон ТЗ на диагностику (аудит, анализ, поиск причин)
  - Приложение № 3 — шаблон ТЗ на разработку (комплексные проекты с этапами, вехами и рисками)
- Обновлён `legal/templates/index.md`: раздел «Технические задания» убран, ТЗ описаны внутри договора
- Обновлён `index.md`: 4 записи заменены на 1
- Обновлён `log.md`: добавлена эта запись

## [2026-05-01] ingest | Пакетная интеграция материалов WordPress.com → open-source

- Обработано 23 raw-файла из `raw/2026/0501/`. Все источники с WordPress.com адаптированы под WordPress.org (self-hosted).
- Созданы **13 новых страниц**:

  **Основы WordPress:**
  - `basics/wordpress-glossary.md` — Глоссарий терминов WordPress
  - `basics/domain-vs-hosting.md` — Домен и хостинг: в чём разница
  - `basics/blog-vs-website.md` — Блог или сайт: что выбрать
  - `basics/ai-tools-wordpress.md` — AI-инструменты для WordPress (с пометкой .com-only)

  **Ядро WordPress (core/):**
  - `core/wordpress-com-vs-org.md` — Таблица сравнения WordPress.com vs WordPress.org
  - `core/wordpress-hosting.md` — Хостинг для WordPress: как выбрать (адаптировано с .com)
  - `core/multiple-sites-management.md` — Управление несколькими сайтами (Multisite, MainWP)
  - `core/working-with-developer.md` — Работа с разработчиком WordPress

  **Консоль:**
  - `console/admin-bar.md` — Admin Bar: элементы, настройка видимости

  **Плагины:**
  - `plugins/woocommerce-basics.md` — WooCommerce: основы настройки
  - `plugins/membership-plugins.md` — Плагины членства (membership)

  **Темы:**
  - `themes/design-best-practices.md` — Практики веб-дизайна для WordPress

  **Инструменты:**
  - `tools/mobile-apps.md` — Мобильные приложения для WordPress

- **5 материалов не созданы как отдельные страницы** (дубликаты или рекламные): `five-step-blog-setup.md`, `five-step-website-setup.md`, `courses-create-your-blog.md`, `courses-create-your-website.md`, `navigating-the-ecommerce-plan.md`
- **3 .com-only материала** помечены как справочные: `ai-website-builder.md` (в `basics/ai-tools-wordpress.md`), `onboarding-sessions.md` и `website-design-service.md` — без создания страниц
- **Обновлены кросс-ссылки** в 7 существующих страницах: `getting-started-with-wordpress-guide.md`, `wordpress-101-guide.md`, `wordpress-setup-domain-hosting-install.md`, `wordpress-dashboard-wp-admin-basics.md`, `plugins-basics.md`, `themes-child-themes-customizer.md`, `wordpress-security-basics.md`
- **Обновлён `index.md`**: новые разделы «Ядро WordPress» и «Инструменты», 16 новых записей
- **Создана папка `tools/`** для инструментов и утилит
- Обновлён `log.md`: добавлена эта запись

## [2026-05-01] update | Перенос в раздел FAQ

- Создана папка `faq/`
- Перенесены из `core/` → `faq/`:
  - `core/knowledge-base-workflow.md` → `faq/knowledge-base-workflow.md`
  - `core/wordpress-com-vs-org.md` → `faq/wordpress-com-vs-org.md`
- Обновлены ссылки в `index.md`, `basics/getting-started-with-wordpress-guide.md`, `basics/wordpress-101-guide.md`
- В `index.md` появился раздел «FAQ», `knowledge-base-workflow` убран из «Основы WordPress»

## [2026-05-01] update | Переименование core/ → how-to/ (Руководства)

- Папка `core/` переименована в `how-to/`
- Обновлены все ссылки `core/` → `how-to/` в 5 wiki-страницах: `domain-vs-hosting.md`, `wordpress-dashboard-wp-admin-basics.md`, `index.md`, `wordpress-security-basics.md`, `wordpress-setup-domain-hosting-install.md`
- В `index.md` раздел «Ядро WordPress» переименован в «Руководства»
- В `astro.config.mjs` добавлены разделы сайдбара: «Руководства» (how-to), «FAQ» (faq), «Инструменты» (tools)
- В `AGENTS.md` обновлена структура: `core/` → `how-to/`, добавлены `faq/` и `tools/`
- В `wiki-ingest/SKILL.md` обновлён placement heuristic: `core/` → `how-to/`, добавлен `faq/`

## [2026-05-01] update | Перенос mobile-apps в how-to, удаление tools/

- `tools/mobile-apps.md` → `how-to/mobile-apps.md`
- Папка `tools/` удалена (стала пустой)
- `index.md`: запись перенесена из «Инструменты» в «Руководства», раздел «Инструменты» удалён

## [2026-05-01] update | Удаление wordpress-101-guide.md

- Удалён `basics/wordpress-101-guide.md` (некачественная страница)
- Удалены ссылки на неё из 7 страниц: `index.md`, `getting-started-with-wordpress-guide.md`, `wordpress-setup-domain-hosting-install.md`, `wordpress-dashboard-wp-admin-basics.md`, `wordpress-security-basics.md`, `pages-posts-and-taxonomies-basics.md`, `faq/knowledge-base-workflow.md`
