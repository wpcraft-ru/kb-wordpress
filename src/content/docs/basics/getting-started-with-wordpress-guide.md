---
title: "Getting Started with WordPress: структурный конспект"
description: "Конспект книги Getting Started with WordPress: запуск сайта, панель управления, контент, плагины, темы и базовая безопасность."
---

Источник: `raw/Getting-Started-with-WordPress-260427.pdf`

## Что покрывает книга

Книга дает последовательный маршрут для новичка:
1. Что такое WordPress и почему он подходит для CMS-задач.
2. Выбор между WordPress.org и WordPress.com.
3. Базовый запуск: домен, хостинг, установка.
4. Работа в `wp-admin`: настройки, страницы, записи, медиа.
5. Расширение сайта через плагины и темы.
6. Базовые практики безопасности.

## Практический минимум после прочтения

- Определить модель хостинга и владения сайтом (self-hosted или managed).
- Включить читаемые permalink-структуры.
- Развести контент по страницам и записям.
- Сразу зафиксировать базовые правила безопасности и обновлений.

## PHP пример: безопасная регистрация меню навигации

```php
add_action('after_setup_theme', function () {
    register_nav_menus([
        'primary' => 'Primary Menu',
    ]);
});
```

Что делает код:
- Регистрирует меню в правильном lifecycle-хуке.
- Дает предсказуемую точку для вывода навигации в теме.

## JS пример: подсказка в админ-панели после входа

```js
document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('wp-admin')) {
    return;
  }

  console.info('WP Admin loaded: проверьте настройки, permalink и обновления.');
});
```

Что делает код:
- Выполняется только после готовности DOM.
- Не вмешивается в данные сайта, используется как легкий operational reminder.

## Связанные страницы

- [Настройка WordPress: домен, хостинг, установка](./wordpress-setup-domain-hosting-install/)
- [Глоссарий терминов WordPress](./wordpress-glossary)
- [WordPress.com vs WordPress.org: сравнение](../faq/wordpress-com-vs-org)
- [Домен и хостинг: в чём разница](./domain-vs-hosting)
- [Блог или сайт: что выбрать](./blog-vs-website)
- [Панель управления WordPress (`wp-admin`): базовая навигация](../console/wordpress-dashboard-wp-admin-basics/)
- [Плагины WordPress: основы выбора и установки](../plugins/plugins-basics/)
- [Темы, child theme и Customizer: основы](../themes/themes-child-themes-customizer/)
- [Базовая безопасность WordPress для нового сайта](../security/wordpress-security-basics/)
- [Как вести базу знаний WordPress](../faq/knowledge-base-workflow/)
