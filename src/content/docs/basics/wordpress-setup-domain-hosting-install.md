---
title: "Настройка WordPress: домен, хостинг, установка"
description: "Пошаговая схема запуска нового WordPress-сайта: выбор домена, хостинга, установка и первичная проверка."
---

## Базовый сценарий

1. Зарегистрировать домен.
2. Выбрать WordPress-совместимый хостинг.
3. Установить WordPress (автоинсталлятор или ручной путь).
4. Проверить вход в `wp-admin`.
5. Выполнить первичную настройку (`site title`, timezone, permalink, users).

## Критичные решения на старте

- Где хостится сайт: managed WordPress или универсальный VPS/shared.
- Кто владеет доступами к домену и DNS.
- Как строится backup-policy и восстановление.

## PHP пример: принудительный HTTPS для фронтенда

```php
add_action('template_redirect', function () {
    if (is_admin() || wp_doing_ajax()) {
        return;
    }

    if (!is_ssl()) {
        wp_safe_redirect('https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'], 301);
        exit;
    }
});
```

Что делает код:
- Перенаправляет фронтенд-трафик на HTTPS.
- Не ломает админку и ajax-запросы.

## JS пример: проверка доступности базовых страниц после деплоя

```js
const mustHavePaths = ['/about/', '/contact/'];

Promise.all(
  mustHavePaths.map((path) => fetch(path, { method: 'HEAD' }))
).then((responses) => {
  responses.forEach((res, index) => {
    console.log(mustHavePaths[index], res.status);
  });
});
```

Что делает код:
- Дает простой smoke-check после первичного запуска.
- Быстро выявляет отсутствующие страницы/редиректы.

## Связанные страницы

- [Домен и хостинг: в чём разница](../faq/domain-vs-hosting.md)
- [Хостинг для WordPress: как выбрать](../how-to/wordpress-hosting.md)
- [Блог или сайт: что выбрать](./blog-vs-website.md)
- [Панель управления WordPress (`wp-admin`): базовая навигация](../console/wordpress-dashboard-wp-admin-basics.md)
- [Практики веб-дизайна для WordPress](../themes/design-best-practices.md)
- [Создание сайта на WordPress: Beget](./create-website/wordpress-on-beget.md) — VPS через Marketplace
- [Создание сайта на WordPress: Timeweb](./create-website/wordpress-on-timeweb.md) — Ручная и автоустановка
