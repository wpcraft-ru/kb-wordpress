---
title: "Как установить WordPress?"
description: "Три способа установки WordPress: автоустановка на хостинге, WP-CLI и ручной метод — пошагово со ссылками на вики."
---

## Краткий ответ

WordPress устанавливается тремя способами: автоустановка в панели хостинга (самый простой), через WP-CLI (для разработчиков) или вручную (FTP + база данных). Перед установкой нужны домен и хостинг — подробнее в [Настройка WordPress: домен, хостинг, установка](../basics/wordpress-setup-domain-hosting-install.md).

## Способ 1: Автоустановка на хостинге

1. Выберите хостинг с автоустановкой WordPress — [Хостинг для WordPress](../how-to/wordpress-hosting.md): TimeWeb, Beget
2. В панели хостинга найдите **Автоустановка ПО** (Softaculous / Installatron)
3. Выберите WordPress → **Установить**
4. Укажите домен, логин и пароль администратора
5. Нажмите **Установить**

Готово — WordPress установлен.

## Способ 2: WP-CLI

```bash
# Скачать WordPress
wp core download

# Создать wp-config.php
wp config create --dbname=имя_бд --dbuser=пользователь --dbpass=пароль --dbhost=localhost

# Установить
wp core install --url=example.com --title="Мой сайт" --admin_user=admin --admin_password=пароль --admin_email=email@example.com
```

WP-CLI упомянут в вики: [WooCommerce: установка](../woocommerce/getting-started.md), [Смена URL](../how-to/change-site-url.md), [Шаблоны](../themes/templates.md).

## Способ 3: Ручная установка

1. Скачайте WordPress с [wordpress.org](https://wordpress.org/download/)
2. Загрузите файлы на хостинг через FTP
3. Создайте базу данных MySQL в панели хостинга
4. Переименуйте `wp-config-sample.php` → `wp-config.php`, заполните `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`
5. Откройте сайт в браузере — запустится `install.php`

## После установки

- Проверьте вход в `wp-admin`
- Настройте: Site Title, Timezone, Permalink (рекомендуется `Post name`)
- Подробнее: [Панель управления WordPress](../console/wordpress-dashboard-wp-admin-basics.md)

## Материалы и источники

- [Настройка WordPress: домен, хостинг, установка](../basics/wordpress-setup-domain-hosting-install.md)
- [Хостинг для WordPress: как выбрать](../how-to/wordpress-hosting.md)
- [Домен и хостинг: в чём разница](../basics/domain-vs-hosting.md)
