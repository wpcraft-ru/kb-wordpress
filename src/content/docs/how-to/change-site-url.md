---
title: "Как изменить адрес сайта WordPress"
description: "Смена URL сайта в WordPress: через админку, WP-CLI, wp-config.php или базу данных — безопасные способы."
---

## Что такое адрес сайта

Два ключевых URL в WordPress:

- **Адрес WordPress (Site Address / `WP_SITEURL`)** — где находятся файлы WordPress.
- **Адрес сайта (Home Address / `WP_HOME`)** — URL, который посетители набирают в браузере.

Обычно они совпадают. Но могут различаться (например, WordPress в подпапке, а сайт на корневом домене).

## Способ 1: Через админку (рекомендуемый)

1. **Настройки → Общие**.
2. Измените поля:
   - **Адрес WordPress (URL)** — `https://новый-домен.com/wp`
   - **Адрес сайта (URL)** — `https://новый-домен.com`
3. Нажмите **Сохранить**.

> После смены адреса вы выйдете из админки — зайдите по новому URL.

**Важно:** если набираете вручную — не ошибетесь в протоколе (`http` vs `https`) и наличии `/` в конце.

## Способ 2: Через WP-CLI

```bash
# Поиск и замена старого домена на новый
wp search-replace '//старый-домен.com' '//новый-домен.com' --all-tables --precise

# Очистка кэша
wp cache flush
wp rewrite flush
```

## Способ 3: Через wp-config.php

Добавьте константы в `wp-config.php` (перед `/* That's all, stop editing! */`):

```php
define('WP_HOME', 'https://новый-домен.com');
define('WP_SITEURL', 'https://новый-домен.com');
```

Этот способ **переопределяет** значения из базы данных. Удобно, если не можете зайти в админку.

## Способ 4: Через базу данных (прямой SQL)

```sql
UPDATE wp_options
SET option_value = 'https://новый-домен.com'
WHERE option_name IN ('siteurl', 'home');
```

Выполнять через phpMyAdmin, Adminer или командную строку MySQL.

## Что проверить после смены адреса

1. **SSL-сертификат** — должен быть выпущен на новый домен.
2. **Поиск и замена в контенте** — старые ссылки в текстах записей:
   ```bash
   wp search-replace '//старый-домен.com' '//новый-домен.com' --all-tables
   ```
3. **Редиректы** — настройте 301 редирект со старого домена на новый (через `.htaccess` или хостинг): 
   ```apache
   RewriteEngine On
   RewriteCond %{HTTP_HOST} ^старый-домен\.com$ [NC]
   RewriteRule ^(.*)$ https://новый-домен.com/$1 [R=301,L]
   ```
4. **Google Search Console** — добавьте новый домен и настройте смену адреса.
5. **Внешние ссылки** — обновите URL в соцсетях, email-подписях, визитках.

## Бесплатный поддомен

> На WordPress.com вы получаете бесплатный поддомен `yourgroovysite.wordpress.com`, который можно сменить. На self-hosted WordPress вы оплачиваете домен самостоятельно через регистратора. Бесплатных поддоменов нет — это стоимость хостинга/домена.

## Связанные страницы

- [Настройка WordPress: домен, хостинг, установка](../basics/wordpress-setup-domain-hosting-install.md)
- [Домен и хостинг: в чём разница](../faq/domain-vs-hosting.md)
- [Хостинг для WordPress: как выбрать](./wordpress-hosting.md)

## Материалы и источники

- [WordPress.com: Edit a site address](https://wordpress.com/support/changing-site-address/)
