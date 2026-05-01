---
title: "Кастомный CSS в WordPress"
description: "Как добавить произвольный CSS в WordPress: через Customizer, child theme, Site Editor — с примерами и поддержкой."
---

## Способы добавить CSS в WordPress

На self-hosted WordPress.org нет ограничений на добавление CSS. Доступны три основных способа:

| Способ | Где | Когда использовать |
|---|---|---|
| **Additional CSS в Customizer** | Внешний вид → Настройка → Дополнительный CSS | Быстрые стили, не требующие child theme |
| **Child theme `style.css`** | Файлы темы | Системный подход, переживает обновления |
| **Глобальные стили в Site Editor** | Внешний вид → Редактор сайта → Стили | Блочные темы, визуальный редактор |

> В WordPress.com custom CSS доступен только на платных тарифах. На self-hosted ограничений нет.

## Additional CSS в Customizer

Самый простой способ для классических тем:

1. **Внешний вид → Настройка → Дополнительный CSS**.
2. Вставьте CSS-код.
3. Предпросмотр обновляется мгновенно.
4. Нажмите **Опубликовать**.

```css
/* Пример: изменить цвет заголовков */
h1, h2, h3 {
    color: #1a73e8;
}

/* Пример: скрыть мета-информацию на страницах */
.page .entry-meta {
    display: none;
}
```

**Плюсы:** не нужен child theme, мгновенный предпросмотр.
**Минусы:** CSS хранится в базе данных, не в файлах темы.

## CSS в Child Theme

Для системного подхода создайте child theme и добавьте стили в `style.css`:

```css
/*
 Theme Name: My Child Theme
 Template: twentytwentyfour
 Version: 1.0.0
*/

/* Ваши стили ниже */
.site-header {
    background: #f5f5f5;
    border-bottom: 3px solid #333;
}
```

**Плюсы:** CSS в системе контроля версий, переживает обновление parent theme.
**Минусы:** требует создания child theme.

## CSS-классы для отдельных блоков

В WordPress Editor можно добавить произвольный CSS-класс любому блоку:

1. Выделите блок в редакторе.
2. В боковой панели → **Дополнительно**.
3. В поле **Дополнительные классы CSS** введите имя класса (без точки).
4. Пропишите стили в Customizer или child theme:

```css
.my-custom-box {
    background: #e8f5e9;
    border-left: 4px solid #4caf50;
    padding: 1rem;
}
```

**Советы по CSS-классам блоков:**
- Давайте осмысленные имена: `.feature-card`, а не `.box1`.
- Используйте префиксы, чтобы избежать конфликтов: `.mytheme-hero`.
- Не переопределяйте системные классы WordPress — добавляйте свои.

## Где искать помощь с CSS

Если вы не уверены в CSS-решении:

1. **Инструменты разработчика в браузере** (F12) — для инспектирования текущих стилей и экспериментов.
2. **Форумы WordPress.org** — сообщество помогает с CSS-задачами.
3. **Stack Overflow** — тег [wordpress] + [css].
4. **Официальная документация CSS** — MDN Web Docs (developer.mozilla.org).

> Прежде чем писать CSS, проверьте, нет ли встроенной настройки. Многие темы позволяют менять цвета, шрифты и отступы без кода — через Site Editor или Customizer.

## Связанные страницы

- [Темы, child theme и Customizer: основы](./themes-child-themes-customizer.md)
- [Customizer: полное руководство](./customizer.md)
- [Site Editor: визуальное редактирование](./site-editor.md)
- [Блочный редактор: добавление контента блоками](../content/wordpress-editor-blocks.md)

## Материалы и источники

- [WordPress.com: Add custom CSS](https://wordpress.com/support/editing-css/)
- [WordPress.com: Get help with CSS](https://wordpress.com/support/editing-css/css-support/)
- [WordPress.com: Add additional CSS classes to blocks](https://wordpress.com/support/wordpress-editor/adding-additional-css-classes-to-blocks/)
