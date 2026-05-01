---
title: "Как перенести WordPress: 4 сценария миграции"
description: "Перенос WordPress-сайта: смена домена, миграция между хостингами, переход с WordPress.com на self-hosted, перенос домена между сайтами."
---

## О чём этот запрос

«Перенести WordPress» — неоднозначный запрос. Разбираем 4 основных сценария: что покрыто вики, что нет.

## Сценарий 1: Смена домена на том же хостинге

**Покрыто вики ✅**

Источник: **[Как изменить адрес сайта WordPress](../how-to/change-site-url.md)**

4 способа смены URL:
1. **Через админку** — Настройки → Общие → изменить поля WordPress URL и Site URL
2. **WP-CLI** — `wp search-replace '//старый-домен.com' '//новый-домен.com' --all-tables`
3. **wp-config.php** — константы `WP_HOME` и `WP_SITEURL`
4. **Прямой SQL** — `UPDATE wp_options SET option_value = ... WHERE option_name IN ('siteurl', 'home')`

После смены: поиск и замена старых ссылок, 301 редирект, Google Search Console, обновление внешних ссылок.

## Сценарий 2: Миграция между хостингами

**Покрыто вики частично ⚠️**

Источник: **[Управление несколькими сайтами WordPress](../how-to/multiple-sites-management.md)** — упомянуты плагины для клонирования.

### Способы миграции

| Способ | Инструмент | Сложность |
|---|---|---|
| Плагин | Duplicator, All-in-One WP Migration | Низкая |
| Ручной | FTP + phpMyAdmin + WP-CLI | Средняя |
| Панель хостинга | Встроенный перенос (есть у некоторых) | Низкая |

### Плагины для миграции

- **Duplicator** — создаёт пакет (файлы + БД), который разворачивается на новом хостинге
- **All-in-One WP Migration** — экспорт в один файл, импорт через админку нового сайта
- **WP Staging** — клонирование для staging-окружения

### Ручной метод (общий план)

1. Скопировать файлы через FTP/SFTP на новый сервер
2. Экспортировать БД через phpMyAdmin / WP-CLI (`wp db export`)
3. Импортировать БД на новом сервере
4. Обновить `wp-config.php` (новые данные БД)
5. `wp search-replace` для замены URL в БД
6. Проверить `.htaccess`, пермалинки, SSL

### После миграции

- Проверить, что сайт открывается по новому URL
- Настроить SSL на новом хостинге
- Проверить редиректы
- Убедиться, что админка работает

## Сценарий 3: Перенос с WordPress.com на self-hosted

**Покрыто вики частично ⚠️**

Источники: [WordPress.com vs WordPress.org](../faq/wordpress-com-vs-org.md), [Управление несколькими сайтами](../how-to/multiple-sites-management.md)

### Общий маршрут

1. **Экспорт контента** из WordPress.com: Tools → Export → All content (XML-файл)
2. **Настроить новый хостинг** — [Хостинг для WordPress](../how-to/wordpress-hosting.md)
3. **Установить WordPress** — [Настройка WordPress](../basics/wordpress-setup-domain-hosting-install/)
4. **Импорт контента** в self-hosted: Tools → Import → WordPress → загрузить XML
5. **Перенести домен** — если домен на .com, перенести к новому регистратору
6. **Настроить SSL** — Let's Encrypt на новом хостинге
7. **Настроить бэкапы и безопасность** — UpdraftPlus + Wordfence

### Что теряется при уходе с .com

| Функция .com | Self-hosted аналог |
|---|---|
| Managed-хостинг | Самостоятельный выбор хостинга |
| Автообновления | Встроено в WordPress |
| Бэкапы | UpdraftPlus + облако |
| 24/7 поддержка | Форумы .org, саппорт хостинга |
| Статистика | Google Analytics + Site Kit |
| Подписчики .com | Не переносятся (⚠️) |

Упомянуто в [.com vs .org FAQ](../faq/wordpress-com-vs-org.md): AI Website Builder, Express Design Service, Onboarding Sessions — ⚠️ только .com, не имеют opensource-аналогов.

## Сценарий 4: Перенос домена между сайтами

**Покрыто вики ✅**

Источник: **[Управление несколькими сайтами](../how-to/multiple-sites-management.md)**

1. Отвязать домен от старого сайта (DNS / панель хостинга)
2. Привязать к новому сайту (NS-серверы или A-запись)
3. Ждать DNS-пропагации (до 48 часов)

## Что покрыто вики, а что нет

| Сценарий | Покрыто | Отсутствует |
|---|---|---|
| Смена домена (тот же хостинг) | ✅ Полностью (4 способа) | — |
| Миграция между хостингами | ⚠️ Названы плагины | Пошаговая инструкция ручного переноса, чеклист проверки |
| .com → self-hosted | ⚠️ Экспорт/импорт упомянуты | Полный маршрут с шагами, судьба подписчиков, перенос домена .com |
| Перенос домена между сайтами | ✅ Упомянут | Детали DNS-настройки |

## Предложения по будущему ingest

- [Moving WordPress](https://developer.wordpress.org/advanced-administration/upgrade/migrating/) — официальная документация WordPress.org
- [Migrate from WordPress.com to WordPress.org](https://wpbeginner.com/wp-tutorials/how-to-properly-move-your-blog-from-wordpress-com-to-wordpress-org/) — руководство WPBeginner
- [WordPress.com: Move a domain to another site](https://wordpress.com/support/domains/move-a-domain-to-another-wordpress-com-site/)

## Материалы и источники

- [Как изменить адрес сайта WordPress](../how-to/change-site-url.md)
- [Управление несколькими сайтами WordPress](../how-to/multiple-sites-management.md)
- [WordPress.com vs WordPress.org: сравнение](../faq/wordpress-com-vs-org.md)
- [Хостинг для WordPress: как выбрать](../how-to/wordpress-hosting.md)
- [Настройка WordPress: домен, хостинг, установка](../basics/wordpress-setup-domain-hosting-install/)
