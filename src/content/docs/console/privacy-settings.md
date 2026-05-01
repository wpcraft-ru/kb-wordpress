---
title: "Видимость сайта: управление приватностью в WordPress"
description: "Как сделать сайт приватным, скрытым от поисковиков или доступным по паролю — настройки видимости WordPress."
---

## Где находятся настройки

**Настройки → Чтение** → блок **Видимость сайта** (`/wp-admin/options-reading.php`).

## Три режима видимости

| Режим | Что делает |
|---|---|
| **Открыт для всех** | Сайт индексируется поисковиками, доступен всем |
| **Скрыть от поисковиков** | Запрещает индексацию через `robots.txt` / `noindex` |
| **Приватный** | Только авторизованные пользователи видят сайт |

### Скрытие от поисковиков

На self-hosted WordPress это **не гарантирует приватность**. Флаг `blog_public` в `wp_options` управляет только поисковыми системами. Любой, кто знает URL, сможет просматривать сайт.

Для реальной блокировки от поисковиков также проверьте:
- `robots.txt` — не заблокирован ли случайно.
- SEO-плагины (Yoast, Rank Math) — имеют свои настройки noindex.

### Приватный режим

На self-hosted WordPress нет встроенного режима «Coming Soon» или «Private» как на WordPress.com. Приватность достигается через:

**Вариант 1: плагины**
- **Coming Soon & Maintenance Mode** — бесплатный, показывает страницу-заглушку.
- **SeedProd** — конструктор Coming Soon / Maintenance страниц.
- **WP Maintenance Mode** — лёгкий плагин с таймером обратного отсчёта.

**Вариант 2: через `.htaccess` (для разработчиков)**

```apache
# Закрыть сайт паролем (требуется .htpasswd)
AuthType Basic
AuthName "Restricted Area"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

**Вариант 3: через `wp-config.php`**

```php
define('WP_MAINTENANCE_MODE', true);
```

## Предотвращение индексации

### robots.txt

```txt
User-agent: *
Disallow: /
```

Такой robots.txt **просит** роботов не индексировать сайт, но не запрещает доступ. Добросовестные поисковики выполнят просьбу.

### Мета-тег noindex

Добавьте через `wp_head` хук или SEO-плагин:

```php
add_action('wp_head', function() {
    if (!is_user_logged_in()) {
        echo '<meta name="robots" content="noindex, nofollow">';
    }
});
```

## Связанные страницы

- [Настройки обсуждения (комментарии) в WordPress](./discussion-settings.md)
- [Панель управления WordPress (`wp-admin`): базовая навигация](./wordpress-dashboard-wp-admin-basics.md)
- [Базовая безопасность WordPress для нового сайта](../security/wordpress-security-basics.md)

## Материалы и источники

- [WordPress.com: Control your site's visibility](https://wordpress.com/support/privacy-settings/)
