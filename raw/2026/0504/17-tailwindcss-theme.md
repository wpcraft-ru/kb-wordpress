# Tailwind CSS — Theme Variables
**Source:** https://tailwindcss.com/docs/theme
**Fetched:** 2026-05-04

---

Using utility classes as an API for your design tokens.

## What are theme variables?

Theme variables are special CSS variables defined using the `@theme` directive that influence which utility classes exist in your project.

```css
@import "tailwindcss";
@theme {
  --color-mint-500: oklch(0.72 0.11 178);
}
```

Now `bg-mint-500`, `text-mint-500`, `fill-mint-500` utilities are available.

### Why @theme instead of :root?

Theme variables aren't just CSS variables — they also instruct Tailwind to **create new utility classes**. Use `@theme` for design tokens that map to utilities, `:root` for regular CSS variables without utility classes.

### Relationship to utility classes

Static utilities (`flex`, `object-cover`) are always available. Many others are **driven by theme variables** — they only exist because you defined them.

```css
@theme {
  --font-poppins: Poppins, sans-serif;
}
```
→ `font-poppins` utility becomes available.

### Relationship to variants

Some theme variables define **variants**, not utilities:
```css
@theme {
  --breakpoint-3xl: 120rem;
}
```
→ `3xl:` responsive variant becomes available.

## Theme Variable Namespaces

| Namespace | Generates |
|-----------|-----------|
| `--color-*` | Color utilities (bg-, text-, border-, etc.) |
| `--font-*` | Font family utilities (font-sans) |
| `--text-*` | Font size utilities (text-xl) |
| `--font-weight-*` | Font weight utilities (font-bold) |
| `--tracking-*` | Letter spacing (tracking-wide) |
| `--leading-*` | Line height (leading-tight) |
| `--breakpoint-*` | Responsive variants (sm:) |
| `--container-*` | Container query variants (@sm:) + size utilities |
| `--spacing-*` | Spacing and sizing (px-4, max-h-16) |
| `--radius-*` | Border radius (rounded-sm) |
| `--shadow-*` | Box shadows (shadow-md) |
| `--inset-shadow-*` | Inset box shadows |
| `--drop-shadow-*` | Drop shadow filters |
| `--blur-*` | Blur filters |
| `--perspective-*` | Perspective utilities |
| `--aspect-*` | Aspect ratio (aspect-video) |
| `--ease-*` | Transition timing (ease-out) |
| `--animate-*` | Animation utilities (animate-spin) |

## Customizing Your Theme

### Extending the default
```css
@import "tailwindcss";
@theme {
  --font-script: Great Vibes, cursive;
}
```

### Overriding a default value
```css
@theme {
  --breakpoint-sm: 30rem;
}
```

### Replacing an entire namespace
```css
@theme {
  --color-*: initial;
  --color-white: #fff;
  --color-purple: #3f3cbb;
}
```

### Completely custom theme (disable all defaults)
```css
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-lagoon: oklch(0.72 0.11 221.19);
}
```

### Defining animation keyframes
```css
@theme {
  --animate-fade-in-scale: fade-in-scale 0.3s ease-out;
  @keyframes fade-in-scale {
    0% { opacity: 0; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
  }
}
```

## Reference Types

### Namespace references (`@theme inline`)
Use `inline` to make utilities use the variable value directly instead of referencing the CSS variable:
```css
@theme inline {
  --font-sans: var(--font-inter);
}
```

### Static theme (`@theme static`)
Generate all CSS variables even if unused:
```css
@theme static {
  --color-primary: var(--color-red-500);
}
```

## Sharing Across Projects

Create a shared theme file and import it in each project:
```css
/* packages/brand/theme.css */
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-lagoon: oklch(0.72 0.11 221.19);
}
```

```css
/* app.css */
@import "tailwindcss";
@import "../brand/theme.css";
```

## Using Theme Variables in Custom CSS

All theme variables become regular CSS variables in `:root`:
```css
@layer components {
  .typography {
    p { font-size: var(--text-base); color: var(--color-gray-700); }
    h1 { font-size: var(--text-2xl--line-height); font-weight: var(--font-weight-semibold); }
  }
}
```
