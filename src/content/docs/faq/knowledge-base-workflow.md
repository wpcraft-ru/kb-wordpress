---
title: "Как вести базу знаний WordPress"
description: "Практический шаблон страницы: структура, правила связей и минимальные примеры кода."
---

Эта страница фиксирует минимальный стандарт для новых материалов в wiki:

- Четкий scope: одна страница = одна тема.
- Краткое описание в frontmatter (`title`, `description`).
- Внутренние ссылки только относительные Markdown-ссылки.
- Примеры должны быть рабочими и проверяемыми.

## Минимальный шаблон страницы

1. Опишите задачу в 2-4 предложениях.
2. Добавьте рабочий пример PHP.
3. Добавьте рабочий пример JS, если тема затрагивает фронтенд или редактор.
4. Добавьте раздел "Связанные страницы".

## Пример PHP: фильтрация контента

Ниже пример безопасного добавления обертки к контенту записи только в основном цикле.

```php
add_filter('the_content', function ($content) {
    if (!is_singular('post') || !in_the_loop() || !is_main_query()) {
        return $content;
    }

    return '<section class="kb-content">' . $content . '</section>';
});
```

Что делает код:
- Не изменяет контент в побочных запросах.
- Работает только для одиночной записи типа `post`.
- Возвращает исходный контент без побочных эффектов.

## Пример JS: поведение в Gutenberg

Пример показывает, как добавить служебный CSS-класс к `core/paragraph` в редакторе блоков.

```js
wp.hooks.addFilter(
  'blocks.getBlockDefaultClassName',
  'wp-knowledge/paragraph-class',
  function (className, blockName) {
    if (blockName !== 'core/paragraph') {
      return className;
    }

    return className + ' kb-paragraph';
  }
);
```

Что делает код:
- Проверяет тип блока до модификации.
- Добавляет предсказуемый класс для дальнейшей стилизации.
- Не затрагивает другие core-блоки.

## Связанные страницы

- [Index](../index.md)
- [Log](../log.md)
- [Настройка WordPress: домен, хостинг, установка](../basics/wordpress-setup-domain-hosting-install.md)
- [Панель управления WordPress (`wp-admin`): базовая навигация](../console/wordpress-dashboard-wp-admin-basics.md)
- [Страницы, записи, категории и теги: базовая модель контента](../content/pages-posts-and-taxonomies-basics.md)
- [Плагины WordPress: основы выбора и установки](../plugins/plugins-basics.md)
- [Темы, child theme и Customizer: основы](../themes/themes-child-themes-customizer.md)
- [Базовая безопасность WordPress для нового сайта](../security/wordpress-security-basics.md)
