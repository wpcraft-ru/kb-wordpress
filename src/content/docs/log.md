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
