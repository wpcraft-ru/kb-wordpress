# daisyUI Themes
**Source:** https://daisyui.com/docs/themes/
**Fetched:** 2026-05-04

---

daisyUI comes with 35 built-in themes that instantly transform your website's entire look. You can also create custom themes or customize built-in ones.

## Configuration

```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
```

- `themes` — comma-separated list of theme names
- `--default` flag — sets default theme
- `--prefersdark` flag — sets default for dark mode (`prefers-color-scheme: dark`)

## Built-in Themes (35 total)

light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, caramellatte, abyss, silk

### Enable all themes
```css
@plugin "daisyui" {
  themes: all;
}
```

### Disable all themes
```css
@plugin "daisyui" {
  themes: false;
}
```

## Using a Theme

Set via `data-theme` attribute:
```html
<html data-theme="cupcake"></html>
```

### Theme per section
```html
<html data-theme="dark">
  <div data-theme="light">
    Light theme section
    <span data-theme="retro">Retro nested!</span>
  </div>
</html>
```

No limit on nesting depth.

## Custom Theme

```css
@plugin "daisyui/theme" {
  name: "mytheme";
  default: true;
  prefersdark: false;
  color-scheme: light;

  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: oklch(20% 0.05 240);
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --color-secondary: oklch(70% 0.25 200);
  --color-secondary-content: oklch(98% 0.01 200);
  --color-accent: oklch(65% 0.25 160);
  --color-accent-content: oklch(98% 0.01 160);
  --color-neutral: oklch(50% 0.05 240);
  --color-neutral-content: oklch(98% 0.01 240);
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(65% 0.25 140);
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: oklch(65% 0.3 30);
  --color-error-content: oklch(98% 0.01 30);

  --radius-selector: 1rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;

  --size-selector: 0.25rem;
  --size-field: 0.25rem;

  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

### Color Roles (semantic)
- `base-100/200/300` — background layers (lightest → darkest)
- `base-content` — text on base backgrounds
- `primary/secondary/accent` — brand colors + their `-content` variants
- `neutral` — muted/neutral + `-content`
- `info/success/warning/error` — state colors + their `-content` variants

### Non-color tokens
- `--radius-selector` / `--radius-field` / `--radius-box` — border radii
- `--size-selector` / `--size-field` — base sizes
- `--border` — border width
- `--depth` — depth/shadow level
- `--noise` — noise texture overlay

## Customize Existing Theme

Override specific values, rest inherited from original:
```css
@plugin "daisyui/theme" {
  name: "light";
  default: true;
  --color-primary: blue;
  --color-secondary: teal;
}
```

## Theme-Specific Custom Styles

```css
[data-theme="light"] {
  .my-btn { background-color: #1EA1F1; border-color: #1EA1F1; }
}
```

## Tailwind dark: Selector for Specific Themes

```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: winter --default, night --prefersdark;
}

@custom-variant dark (&:where([data-theme=night], [data-theme=night] *));
```

Now `dark:p-20` applies only when `night` theme is active.
