---
title: "Как создать тему WordPress?"
description: "Два способа: child theme (рекомендуется для кастомизации) и тема с нуля — пошагово со ссылками на вики."
---

## Краткий ответ

«Создать тему» обычно означает **child theme** — дочернюю тему, которая наследует всё от родительской и позволяет безопасно вносить правки. Создание темы с нуля — для разработчиков, требует PHP, CSS и знания иерархии шаблонов.

## Способ 1: Child theme (рекомендуется)

Источник: **[Темы, child theme и Customizer](../themes/themes-child-themes-customizer.md)**

1. Создайте папку: `wp-content/themes/my-child-theme/`
2. Добавьте `style.css`:

```css
/*
 Theme Name: My Child Theme
 Template: twentytwentyfour
 Version: 1.0.0
*/
```

3. Добавьте `functions.php`:

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

4. Активируйте: **Внешний вид → Темы** → выберите child theme

> **Правило:** не редактируйте файлы parent theme — изменения сотрутся при обновлении. Child theme сохраняет все правки.

## Способ 2: Тема с нуля

Минимальный набор файлов для своей темы:

```
my-theme/
  style.css          ← заголовок темы + стили
  index.php          ← главный шаблон
  functions.php      ← хуки, поддержка возможностей
```

В `style.css` — обязательный заголовок:
```css
/*
 Theme Name: My Theme
 Version: 1.0.0
*/
```

Подробнее о типах тем и шаблонах:
- [Типы тем WordPress](../themes/theme-types.md) — block, classic, hybrid, universal
- [Шаблоны WordPress](../themes/templates.md) — создание через Site Editor
- [functions.php: базовые сниппеты](../snippets/functions-php-essentials.md) — theme support, скрипты

## Материалы и источники

- [Темы, child theme и Customizer: основы](../themes/themes-child-themes-customizer.md)
- [Типы тем WordPress](../themes/theme-types.md)
- [Шаблоны WordPress: создание, редактирование, удаление](../themes/templates.md)