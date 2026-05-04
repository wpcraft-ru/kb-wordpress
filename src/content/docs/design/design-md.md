---
title: "DESIGN.md"
description: "Как использовать DESIGN.md как upstream-спецификацию и синхронизировать ее с theme.json, Tailwind CSS v4 и daisyUI в WordPress-темах."
---

## Что такое DESIGN.md в контексте WordPress

DESIGN.md - это текстовая спецификация дизайн-системы для AI-агентов: токены (цвета, типографика, отступы, радиусы) + правила применения (Do/Don't, поведение компонентов, responsive-ограничения).

Для WordPress-проектов удобная модель такая:

- DESIGN.md = источник намерений и токенов для генерации UI и кода.
- theme.json = источник исполнения внутри темы WordPress.
- Tailwind/daisyUI = утилитарный и компонентный слой для кастомных шаблонов и блоков.

Такой слой позволяет избежать ситуации, когда агент генерирует красивые, но несогласованные между собой экраны.

## Минимальная структура DESIGN.md

Практически полезный файл обычно содержит:

1. YAML front matter с токенами.
2. Секции с правилами применения: цвета, типографика, компоненты, layout, ограничения.

Ниже в markdown-части добавляйте:

- правила использования primary/accent (где можно и где нельзя);
- требования контраста (WCAG 2.2 AA);
- ограничения для отступов/радиусов (не использовать произвольные значения);
- явные антипаттерны (например, не более одной primary-кнопки в одном hero-блоке).

Пример минимального DESIGN.md:

```md
---
name: WordPress Design System - DESIGN.md
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards.
colors:
	primary: "#2563EB"
	secondary: "#14B8A6"
	surface: "#FFFFFF"
	background: "#F8FAFC"
	text: "#0F172A"
	success: "#16A34A"
	warning: "#D97706"
	error: "#DC2626"
spacing:
	xs: 4px
	sm: 8px
	md: 16px
	lg: 24px
rounded:
	sm: 6px
	md: 10px
typography:
	h1:
		fontFamily: Inter
		fontSize: 2.25rem
		fontWeight: 700
	body:
		fontFamily: Inter
		fontSize: 1rem
		fontWeight: 400
---

# WordPress Design System - DESIGN.md

## Mission
Согласованный интерфейс для WordPress-темы: быстрый рендер, предсказуемые компоненты и единые токены в DESIGN.md, theme.json и Tailwind.

## Brand
- Product/brand: WPCraft
- Audience: владельцы контентных сайтов и small business
- Product surface: marketing site + блог + лендинги

## Style Foundations
- Visual style: clean, editorial, calm contrast
- Typography scale: h1/body из front matter
- Color palette: semantic tokens из colors (primary/surface/text/success/warning/error)
- Spacing scale: xs/sm/md/lg
- Radius/shadow/motion tokens: rounded.sm, rounded.md

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required
- Focus-visible rules required
- Contrast constraints required

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Define all required states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior and edge-case handling.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule uses "must".
- Every recommendation uses "should".
- Every accessibility rule is testable in implementation.
- Prefer system consistency over local visual exceptions.
```



## Маппинг DESIGN.md -> theme.json -> daisyUI (Tailwind CSS)

Одна и та же семантика должна быть сохранена во всех слоях:

| Семантика | DESIGN.md | theme.json | Tailwind v4 | daisyUI |
|---|---|---|---|---|
| Основной брендовый цвет | `colors.primary` | `settings.color.palette.primary` | `@theme --color-primary` | `--color-primary` |
| Цвет текста | `colors.text` | `settings.color.palette.contrast` + `styles.color.text` | `--color-ink`/`--color-base-content` | `--color-base-content` |
| Фон поверхности | `colors.surface` | `settings.color.palette.base` + `styles.color.background` | `--color-surface` | `--color-base-100` |
| Радиус кнопок/полей | `rounded.sm/md` | `styles.elements.button.border.radius` | `--radius-*` | `--radius-selector/field/box` |
| Базовый шаг отступов | `spacing.*` | `settings.spacing.spacingSizes` | `--spacing-*` | косвенно через Tailwind spacing |

Ключевая идея: semantic first. Не переносите в WordPress и Tailwind названия вида blue-500 как бизнес-смысл; храните смысловые роли (primary, surface, success, error).

## Пример синхронизации через theme.json

```json
{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {
		"color": {
			"palette": [
				{ "slug": "primary", "name": "Primary", "color": "#2563EB" },
				{ "slug": "surface", "name": "Surface", "color": "#FFFFFF" },
				{ "slug": "contrast", "name": "Contrast", "color": "#0F172A" },
				{ "slug": "success", "name": "Success", "color": "#16A34A" },
				{ "slug": "warning", "name": "Warning", "color": "#D97706" },
				{ "slug": "error", "name": "Error", "color": "#DC2626" }
			]
		},
		"spacing": {
			"spacingSizes": [
				{ "slug": "xs", "name": "XS", "size": "4px" },
				{ "slug": "sm", "name": "SM", "size": "8px" },
				{ "slug": "md", "name": "MD", "size": "16px" },
				{ "slug": "lg", "name": "LG", "size": "24px" }
			]
		}
	},
	"styles": {
		"color": {
			"background": "var(--wp--preset--color--surface)",
			"text": "var(--wp--preset--color--contrast)"
		},
		"elements": {
			"button": {
				"border": { "radius": "10px" },
				"color": {
					"background": "var(--wp--preset--color--primary)",
					"text": "#FFFFFF"
				}
			}
		}
	}
}
```

## Tailwind и daisyUI как исполняющий слой

```css
@import "tailwindcss" source(none);
@source "./templates/**/*.{html,php}";
@source "./parts/**/*.{html,php}";
@source "./blocks/**/*.{php,html}";

@theme {
	--color-primary: #2563EB;
	--color-success: #16A34A;
	--color-warning: #D97706;
	--color-error: #DC2626;
	--spacing-sm: 8px;
	--spacing-md: 16px;
	--radius-md: 10px;
}

@plugin "daisyui" {
	themes: corporate --default;
}

@plugin "daisyui/theme" {
	name: "corporate";
	default: true;
	--color-primary: #2563EB;
	--color-success: #16A34A;
	--color-warning: #D97706;
	--color-error: #DC2626;
	--radius-selector: 0.625rem;
	--radius-field: 0.625rem;
	--radius-box: 0.75rem;
}
```

## Подключение стилей в теме WordPress

```php
add_action('wp_enqueue_scripts', function () {
		wp_enqueue_style(
				'theme-tw',
				get_theme_file_uri('tw.css'),
				[],
				filemtime(get_theme_file_path('tw.css'))
		);
});
```

Этот вариант гарантирует cache busting по времени изменения файла и одинаковые стили после деплоя.

## Практический workflow для команды

1. Обновляете DESIGN.md (токены + правила).
2. Синхронизируете токены в `theme.json` (palette, spacing, typography, элементы).
3. Синхронизируете слой Tailwind/daisyUI (`@theme` и `@plugin "daisyui/theme"`).
4. Проверяете блок-редактор и фронтенд на согласованность (цвета, контраст, состояния кнопок).
5. Коммитите изменения одним набором, чтобы не расходились токены и реализация.

## Где DESIGN.md не заменяет WordPress

- DESIGN.md не заменяет `theme.json`, а дополняет его.
- DESIGN.md не решает специфичные для WP задачи: шаблоны (`customTemplates`), template parts, style variations.
- Для строгого контроля нужны тесты и линтинг, а не только текстовая спецификация.

## Связанные страницы

- [Tailwind CSS и daisyUI в блочной теме WordPress](./tailwind-daisyui-wordpress.md)
- [Настройки темы: цвета, шрифты, типографика, макет](./theme-settings.md)
- [Кастомный CSS в WordPress](../themes/custom-css.md)

## Материалы и источники

- [google-labs-code/design.md](https://github.com/google-labs-code/design.md)
- [Google Stitch: DESIGN.md overview](https://stitch.withgoogle.com/docs/design-md/overview)
- [Tailwind CSS theme variables](https://tailwindcss.com/docs/theme)
- [daisyUI themes](https://daisyui.com/docs/themes/)
- [WordPress: Introduction to theme.json](https://developer.wordpress.org/themes/global-settings-and-styles/introduction-to-theme-json/)
- [WordPress: theme.json settings](https://developer.wordpress.org/themes/global-settings-and-styles/settings/)
- [WordPress: theme.json styles](https://developer.wordpress.org/themes/global-settings-and-styles/styles/)
- [WordPress: custom templates, template parts, patterns, style variations](https://developer.wordpress.org/themes/global-settings-and-styles/custom-templates/)
