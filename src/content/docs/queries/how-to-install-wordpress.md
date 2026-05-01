---
title: "Как установить WordPress: способы и пробелы в вики"
description: "Установка WordPress: автоинсталлятор, ручной метод, WP-CLI, локальная разработка. Что покрыто вики, а что нет."
---

## О чём этот запрос

«Как установить WordPress» — основной вопрос новичков. Вики даёт общую схему, но **ни один конкретный способ установки не описан детально**. Ниже — что есть и каких страниц не хватает.

## Что есть в вики

### Общая схема (5 шагов)

Источник: **[Настройка WordPress: домен, хостинг, установка](../basics/wordpress-setup-domain-hosting-install.md)**

1. Зарегистрировать домен
2. Выбрать WordPress-совместимый хостинг
3. Установить WordPress («автоинсталлятор или ручной путь»)
4. Проверить вход в `wp-admin`
5. Выполнить первичную настройку (site title, timezone, permalink, users)

> Шаг 3 не раскрыт — ни автоинсталлятор, ни ручной метод не описаны.

### Хостинг с автоустановкой

Источник: **[Хостинг для WordPress: как выбрать](../how-to/wordpress-hosting.md)**

Рекомендованные провайдеры:
- **TimeWeb** — автоустановка WordPress
- **Beget** — недорогой shared
- **VDSina**, **FirstVDS** — VPS

Требования: PHP 8.0+, MySQL 5.7+, SSL (Let's Encrypt).

### Домен и SSL

Источник: **[Домен и хостинг: в чём разница](../basics/domain-vs-hosting.md)**

- Домен зарегистрировать у регистратора
- Хостинг выбрать и оплатить
- SSL-сертификат (Let's Encrypt)
- Привязать домен к хостингу через NS-серверы

### Единственный пример WP-CLI (для плагина)

Источник: **[WooCommerce: установка и первые шаги](../woocommerce/getting-started.md)**

```bash
wp plugin install woocommerce --activate
```

WP-CLI есть, но для плагина, не для ядра WordPress.

## Что НЕ покрыто вики ❌

| Способ установки | Статус | Что нужно |
|---|---|---|
| Автоинсталлятор (Softaculous, Installatron) | ❌ | Пошаговое руководство в панели хостинга |
| Ручная установка (FTP + БД) | ❌ | Скачивание .zip с wordpress.org, `wp-config.php`, `install.php` |
| WP-CLI: `wp core download` + `wp core install` | ❌ | Команды с параметрами БД, URL, admin |
| Локальная разработка (Local, MAMP, XAMPP) | ❌ | Сравнение инструментов, установка |
| Настройка `wp-config.php` | ❌ | `DB_NAME`, `DB_USER`, `DB_HOST`, ключи безопасности |
| Docker / контейнерная установка | ❌ | `docker-compose.yml` с WordPress + MySQL |

## Сводка

| Компонент | Покрытие | Комментарий |
|---|---|---|
| Общий план (5 шагов) | ✅ | Слишком высокоуровнево, без деталей |
| Выбор хостинга | ✅ | Типы, критерии, провайдеры |
| Домен и SSL | ✅ | В разных страницах |
| Конкретные способы установки | ❌ | Ни один не описан |

## Предложения по ingest

Базовая страница установки WordPress — фундаментальный пробел. Рекомендуемые источники:

- [WordPress.org: Installation guide](https://wordpress.org/documentation/article/install-wordpress/)
- [WP-CLI: Installing WordPress](https://developer.wordpress.org/cli/commands/core/install/)

## Материалы и источники

- [Настройка WordPress: домен, хостинг, установка](../basics/wordpress-setup-domain-hosting-install.md)
- [Хостинг для WordPress: как выбрать](../how-to/wordpress-hosting.md)
- [Домен и хостинг: в чём разница](../basics/domain-vs-hosting.md)
- [WooCommerce: установка и первые шаги](../woocommerce/getting-started.md)
