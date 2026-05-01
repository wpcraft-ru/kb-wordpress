---
title: "Admin Bar (панель инструментов WordPress)"
description: "Обзор Admin Bar в self-hosted WordPress: элементы, настройка видимости и управление."
---

## Что такое Admin Bar

Admin Bar (Toolbar, панель инструментов) — это тёмная полоса в верхней части экрана, которая отображается, когда вы вошли в систему WordPress. Посетители сайта её не видят.

## Элементы Admin Bar (слева направо)

- **W-логотип (инфо о WordPress)** — ссылки на документацию .org, форумы поддержки, обратную связь
- **Название сайта** — переход на главную страницу сайта
- **+ Добавить** — быстро создать запись, медиафайл, страницу или пользователя
- **Комментарии** — последние комментарии (если активны)
- **Внешний вид** — быстрый доступ к темам, Customizer, редактору, меню, виджетам
- **Плагины** — быстрый доступ к плагинам (для администраторов)
- **Пользователи** — профиль, выход
- **Поиск** — поиск по контенту сайта

> Набор элементов зависит от установленных плагинов и прав пользователя.

## Доступность

Admin Bar виден только авторизованным пользователям. Посетители сайта его не видят. По умолчанию отображается и во фронтенде, и в админке.

## Как показать/скрыть Admin Bar

### Для текущего пользователя

1. Пользователи → Ваш профиль
2. Снимите или поставьте галку «Показывать верхнюю панель при просмотре сайта»
3. Сохраните

### Через код (отключить для всех)

```php
add_filter('show_admin_bar', '__return_false');
```

### Через код (скрыть для всех кроме администраторов)

```php
add_filter('show_admin_bar', function ($show) {
    return current_user_can('administrator') ? $show : false;
});
```

## JS пример: добавить индикатор окружения в Admin Bar

```js
document.addEventListener('DOMContentLoaded', () => {
  const adminBar = document.getElementById('wpadminbar');
  if (!adminBar) return;

  const badge = document.createElement('span');
  badge.textContent = 'STAGING';
  badge.style.cssText = 'background:#e67e22;color:#fff;padding:2px 8px;margin-left:8px;font-size:11px;border-radius:2px';

  const siteName = adminBar.querySelector('#wp-admin-bar-site-name .ab-item');
  if (siteName) siteName.appendChild(badge);
});
```

Что делает код:
- Добавляет оранжевый бейдж «STAGING» в Admin Bar, чтобы не перепутать тестовый и боевой сайты.

## Материалы и источники

- [Admin Bar — оригинальная статья](https://wordpress.com/support/admin-bar/)
