---
title: "Панель управления WordPress (`wp-admin`): базовая навигация"
description: "Краткий обзор Admin Menu, Toolbar и ключевых экранов `wp-admin` для ежедневной работы контент-команды."
---

## Что важно освоить в первую очередь

- Admin Menu: Posts, Pages, Appearance, Plugins, Users, Settings.
- Toolbar/Admin Bar: быстрый переход между фронтендом и админкой.
- Dashboard widgets: обзор обновлений, комментариев и черновиков.

## Операционные правила

1. Все контентные операции делать из ролей с минимально необходимыми правами.
2. Обновления плагинов/тем выполнять после backup.
3. Не смешивать редакционные задачи и системные настройки в одном процессе.

## PHP пример: убираем виджет "быстрый черновик" у редакторов

```php
add_action('wp_dashboard_setup', function () {
    if (current_user_can('editor') && !current_user_can('administrator')) {
        remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
    }
});
```

Что делает код:
- Упрощает dashboard для роли editor.
- Снижает риск случайных действий в интерфейсе.

## JS пример: визуальное выделение окружения в админке

```js
document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('wp-admin')) {
    return;
  }

  document.body.style.borderTop = '4px solid #c2410c';
});
```

Что делает код:
- Добавляет заметный маркер окружения (например, staging).
- Уменьшает риск правок не в том окружении.

## Связанные страницы

- [Глоссарий терминов WordPress](../basics/wordpress-glossary.md)
- [Admin Bar (панель инструментов WordPress)](./admin-bar.md)
- [Страницы, записи, категории и теги: базовая модель контента](../content/pages-posts-and-taxonomies-basics.md)
- [Плагины WordPress: основы выбора и установки](../plugins/plugins-basics.md)
- [Темы, child theme и Customizer: основы](../themes/themes-child-themes-customizer.md)
- [Настройки обсуждения (комментарии)](./discussion-settings.md)
- [Видимость сайта: приватность](./privacy-settings.md)
- [Управление несколькими сайтами WordPress](../how-to/multiple-sites-management.md)
