---
title: "Страницы, записи, категории и теги: базовая модель контента"
description: "Практическая схема, как разводить контент по Pages/Posts и использовать категории/теги без хаоса в структуре сайта."
---

## Базовая модель

- Pages: статичные разделы сайта (о компании, контакты, политика).
- Posts: публикации блога, новости, материалы с хронологией.
- Categories: иерархия тем.
- Tags: плоские метки для дополнительных срезов.

## Правила структуры

1. У страницы должен быть стабильный URL и понятный template.
2. Записи публикуются с категориями, теги используются умеренно.
3. Не создавать дублирующие категории с близкими названиями.

## PHP пример: регистрируем пользовательскую таксономию для кейсов

```php
add_action('init', function () {
    register_taxonomy('case_topic', ['post'], [
        'label' => 'Case Topics',
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'case-topic'],
    ]);
});
```

Что делает код:
- Добавляет управляемую тематическую классификацию.
- Открывает таксономию для Gutenberg и REST.

## JS пример: подсчет длины заголовка записи в редакторе

```js
function titleLengthHint(title) {
  const length = title.trim().length;
  return length >= 30 && length <= 70;
}

console.log(titleLengthHint('Как настроить WordPress для малого бизнеса'));
```

Что делает код:
- Помогает оценить читаемость/SEO-пригодность заголовка.
- Может быть встроен в editorial checklist.

## Связанные страницы

- [Панель управления WordPress (`wp-admin`): базовая навигация](../console/wordpress-dashboard-wp-admin-basics/)
- [Плагины WordPress: основы выбора и установки](../plugins/plugins-basics/)
- [Темы, child theme и Customizer: основы](../themes/themes-child-themes-customizer/)
