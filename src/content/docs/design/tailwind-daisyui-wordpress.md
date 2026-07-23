---
title: "Tailwind CSS v4 + daisyUI в блочной теме WordPress"
description: "Практическая схема подключения Tailwind CSS и daisyUI в block theme WordPress с синхронизацией токенов через theme.json."
---

## Когда эта связка оправдана

Tailwind + daisyUI в WordPress полезны, когда нужно:

- ускорить верстку кастомных секций и блоков;
- сохранить единый дизайн между HTML/PHP-шаблонами и блочным редактором;
- управлять токенами централизованно через `theme.json` и согласованные CSS-переменные.

Для self-hosted WordPress этот стек не имеет платформенных ограничений: вы контролируете сборку, файлы темы и pipeline деплоя.

## Установка и сборка

```bash
npm init -y
npm install tailwindcss @tailwindcss/cli daisyui
```

Пример `style.css` для генерации `tw.css`:

```css
/*
Theme Name: My Block Theme
Version: 1.0.0
*/

@import "tailwindcss" source(none);
@source "./templates/**/*.{html,php}";
@source "./parts/**/*.{html,php}";
@source "./blocks/**/*.{php,html}";
@source "./woocommerce/**/*.{php,html}";

@plugin "daisyui" {
  themes: corporate --default, night --prefersdark;
}
```

Скрипты в `package.json`:

```json
{
  "scripts": {
    "css:watch": "npx @tailwindcss/cli -i style.css -o tw.css --watch",
    "css:build": "npx @tailwindcss/cli -i style.css -o tw.css --minify"
  }
}
```

## Подключение в WordPress (frontend + editor)

```php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'my-theme-tw',
        get_theme_file_uri('tw.css'),
        [],
        filemtime(get_theme_file_path('tw.css'))
    );
});

add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_style(
        'my-theme-tw-editor',
        get_theme_file_uri('tw.css'),
        [],
        filemtime(get_theme_file_path('tw.css'))
    );
});
```

Это уменьшает расхождения между редактором и фронтендом, особенно для utility-классов и daisyUI-компонентов.

## Как согласовать с theme.json

`theme.json` должен оставаться главным источником пресетов для блоков WordPress, а Tailwind/daisyUI - источником утилит и готовых компонентов.

Пример палитры и spacing в `theme.json`:

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary", "name": "Primary", "color": "#2563EB" },
        { "slug": "base", "name": "Base", "color": "#FFFFFF" },
        { "slug": "contrast", "name": "Contrast", "color": "#0F172A" }
      ]
    },
    "spacing": {
      "spacingSizes": [
        { "slug": "sm", "name": "Small", "size": "8px" },
        { "slug": "md", "name": "Medium", "size": "16px" },
        { "slug": "lg", "name": "Large", "size": "24px" }
      ]
    }
  }
}
```

Соответствующая тема daisyUI:

```css
@plugin "daisyui/theme" {
  name: "corporate";
  default: true;
  color-scheme: light;

  --color-base-100: #ffffff;
  --color-base-content: #0f172a;
  --color-primary: #2563eb;
  --color-primary-content: #ffffff;
  --color-success: #16a34a;
  --color-warning: #d97706;
  --color-error: #dc2626;

  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.75rem;
  --border: 1px;
}
```

## Переключение темы daisyUI на сайте

```js
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const select = document.querySelector('[data-theme-switcher]');
  const saved = localStorage.getItem('site-theme');

  if (saved) {
    root.setAttribute('data-theme', saved);
  }

  if (select) {
    select.addEventListener('change', (event) => {
      const nextTheme = event.target.value;
      root.setAttribute('data-theme', nextTheme);
      localStorage.setItem('site-theme', nextTheme);
    });
  }
});
```

В шаблоне:

```html
<select data-theme-switcher class="select select-bordered max-w-xs">
  <option value="corporate">Corporate</option>
  <option value="night">Night</option>
</select>
```

## Ошибки, которые чаще всего ломают интеграцию

1. Не указаны `@source` для PHP/HTML-файлов темы, из-за чего Tailwind вырезает нужные классы.
2. Токены в `theme.json` и daisyUI не синхронизированы по семантике (например, `primary` везде разный).
3. Подключение стилей только на фронтенде без `enqueue_block_editor_assets`.
4. Использование произвольных hex-значений в компонентах вместо роли из токенов.

## Связанные страницы

- [DESIGN.md для WordPress: контракт дизайна для AI, theme.json и Tailwind](./design-md.md)
- [Настройки темы: цвета, шрифты, типографика, макет](./theme-settings.md)
- [Кастомный CSS в WordPress](../themes/custom-css.md)

## Материалы и источники

- [Tailwind + daisyUI в блочной теме WordPress (wpcraft.ru)](https://wpcraft.ru/blog/how-to-use-tailwind-css-and-daisyui-in-a-block-based-wordpress-theme)
- [Tailwind CSS theme variables](https://tailwindcss.com/docs/theme)
- [daisyUI themes](https://daisyui.com/docs/themes/)
- [WordPress: Introduction to theme.json](https://developer.wordpress.org/themes/global-settings-and-styles/introduction-to-theme-json/)
- [WordPress: theme.json settings](https://developer.wordpress.org/themes/global-settings-and-styles/settings/)
- [WordPress: theme.json styles](https://developer.wordpress.org/themes/global-settings-and-styles/styles/)