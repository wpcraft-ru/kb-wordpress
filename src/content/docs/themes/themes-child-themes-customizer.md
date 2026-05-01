---
title: "Темы, child theme и Customizer: основы"
description: "Как выбирать и менять темы WordPress, зачем нужен child theme и как работать с Customizer без потери изменений."
---

## Что такое тема

Тема = внешний вид и шаблоны вывода. Тема определяет дизайн, вёрстку и структуру страниц.
Устанавливается из `Внешний вид → Темы`.

## Parent theme vs Child theme

| | Parent theme | Child theme |
|---|---|---|
| Назначение | Основная логика и дизайн | Слой кастомизации поверх parent |
| Правки | Теряются при обновлении | Сохраняются при обновлении parent |
| Когда создавать | — | Всегда, если планируете редактировать тему |

**Правило**: не редактировать файлы parent theme напрямую — изменения сотрутся при обновлении.

## Как создать child theme

1. Создать папку `wp-content/themes/my-child-theme/`.
2. Добавить `style.css` с заголовком:

```css
/*
 Theme Name: My Child Theme
 Template: twentytwentyfour
 Version: 1.0.0
*/
```

3. Добавить `functions.php` с подключением стилей:

```php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'child-theme-style',
        get_stylesheet_uri(),
        [],
        wp_get_theme()->get('Version')
    );
});
```

Что делает код:
- Подключает стили child theme через стандартный хук `wp_enqueue_scripts`.
- Версия темы используется как cache-buster — при изменении стилей браузер не берёт кешированную версию.

4. Активировать child theme в `Внешний вид → Темы`.

## Customizer (`wp-admin/customize.php`)

Customizer — визуальный редактор с предпросмотром изменений в реальном времени.
Доступ: `Внешний вид → Настроить`.

Типичные настройки через Customizer:
- Название и описание сайта
- Цветовая схема
- Шапка и подвал
- Меню и виджеты
- CSS-правки (Дополнительный CSS)

## JS: проверка доступности Customizer API

```js
if (window.wp && window.wp.customize) {
    console.log('Customizer API доступен');
}
```

Что делает код:
- Проверяет наличие Customizer API на текущем экране.
- Полезно при отладке кастомных controls или превью.

## Связанные страницы

- [Плагины WordPress: основы выбора и установки](../plugins/plugins-basics/)
- [Базовая безопасность WordPress для нового сайта](../security/wordpress-security-basics/)
- [Настройка WordPress: домен, хостинг, установка](../basics/wordpress-setup-domain-hosting-install/)
- [Практики веб-дизайна для WordPress](./design-best-practices)
