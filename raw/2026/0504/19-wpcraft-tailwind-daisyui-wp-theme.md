# Как использовать Tailwind CSS v4 и daisyUI в WordPress-теме на блоках
**Source:** https://wpcraft.ru/blog/how-to-use-tailwind-css-and-daisyui-in-a-block-based-wordpress-theme
**Fetched:** 2026-05-04

---

Блочные темы WordPress делают создание современных сайтов проще. Но если вы разработчик, который любит Tailwind CSS, возникает вопрос: как подключить их к блочной WordPress-теме?

Также будем использовать daisyUI — чтобы получить максимально готовые компоненты и простые стили, пригодные для использования с шаблонами на HTML & PHP.

## Подготовка проекта

```bash
npm init -y
npm install tailwindcss@latest @tailwindcss/cli@latest daisyui@latest
```

## style.css

```css
/*
Theme Name: @ app
Template: blocksy
Version: 0.250903
*/

@import "tailwindcss" source(none);
@source "./public/*.{html,js}";
@source "./woocommerce/**/*.{php}";
@source "./blocks/**/*.{php}";
@plugin "daisyui";
```

- `@source` — указывает, где Tailwind искать используемые классы (PHP-шаблоны, блоки)
- `@plugin "daisyui"` — подключает готовые компоненты

## Скрипты сборки

```json
"scripts": {
  "css:watch": "npx @tailwindcss/cli -i style.css -o tw.css --watch",
  "css:build": "npx @tailwindcss/cli -i style.css -o tw.css"
}
```

`style.css` компилируется в `tw.css`.

## Подключение в WordPress

```php
add_action('wp_enqueue_scripts', function(){
    wp_enqueue_style(
        'app',
        get_theme_file_uri('tw.css'),
        [],
        filemtime(get_theme_file_path('tw.css'))
    );
});
```

## Запуск

```bash
# Разработка
npm run css:watch

# Продакшен (с очисткой и минимизацией)
npm run css:build
```

## Использование в блоках

```html
<div class="p-6 bg-base-200 rounded-lg">
  <h2 class="text-2xl font-bold mb-4">Привет, Tailwind + DaisyUI!</h2>
  <button class="btn btn-primary">Нажми меня</button>
</div>
```

`bg-base-200` и `btn btn-primary` — daisyUI классы; `p-6`, `rounded-lg`, `mb-4` — Tailwind утилиты. Работают вместе без конфликтов.

## Полный пример с кастомной темой daisyUI

```css
@import "tailwindcss" source(none);
@source "./public/*.{html,js}";
@source "./woocommerce/**/*.{php}";
@source "./blocks/**/*.{php}";
@plugin "daisyui";

@plugin "daisyui/theme" {
  name: "corporate";
  default: true;
  prefersdark: false;
  color-scheme: "light";
  --color-base-100: oklch(100% 0 0);
  --color-base-200: oklch(93% 0 0);
  --color-base-300: oklch(86% 0 0);
  --color-base-content: oklch(22.389% 0.031 278.072);
  --color-primary: oklch(58% 0.158 241.966);
  --color-primary-content: oklch(100% 0 0);
  --color-secondary: oklch(55% 0.046 257.417);
  --color-secondary-content: oklch(100% 0 0);
  --color-accent: oklch(60% 0.118 184.704);
  --color-accent-content: oklch(100% 0 0);
  --color-neutral: oklch(0% 0 0);
  --color-neutral-content: oklch(100% 0 0);
  --color-info: oklch(60% 0.126 221.723);
  --color-info-content: oklch(100% 0 0);
  --color-success: oklch(62% 0.194 149.214);
  --color-success-content: oklch(100% 0 0);
  --color-warning: oklch(85% 0.199 91.936);
  --color-warning-content: oklch(0% 0 0);
  --color-error: oklch(70% 0.191 22.216);
  --color-error-content: oklch(0% 0 0);
  --radius-selector: 0.25rem;
  --radius-field: 0.25rem;
  --radius-box: 0.25rem;
  --size-selector: 0.25rem;
  --size-field: 0.28125rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}
```

## Генератор тем daisyUI

Откройте [daisyui.com/theme-generator/](https://daisyui.com/theme-generator/) — настраиваете цвета и получаете:
- Готовую тему в формате CSS-переменных
- JSON-конфиг темы для daisyUI
- Возможность адаптировать стили под тему WordPress

## Итог

Что даёт связка Tailwind v4 + DaisyUI в блочной WP-теме:
- Чистый и оптимизированный CSS (tw.css)
- Все утилитарные классы Tailwind
- Готовые UI-компоненты из DaisyUI
- Удобный workflow для разработки

**Перевод:** [ddev.app](https://ddev.app/blog/how-to-use-tailwind-css-v4-and-daisyui-in-a-block-based-wordpress-theme/)
