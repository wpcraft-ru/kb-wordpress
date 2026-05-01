---
title: "Log"
description: "Хронология всех операций с базой знаний WordPress"
---

# Operations Log

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
