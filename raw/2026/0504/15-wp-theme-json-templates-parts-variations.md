# WordPress theme.json — Templates, Parts, Patterns, Style Variations
**Source:** https://developer.wordpress.org/themes/global-settings-and-styles/custom-templates/
**Source:** https://developer.wordpress.org/themes/global-settings-and-styles/template-parts/
**Source:** https://developer.wordpress.org/themes/global-settings-and-styles/patterns/
**Source:** https://developer.wordpress.org/themes/global-settings-and-styles/style-variations/
**Fetched:** 2026-05-04

---

## Custom Templates

Register single post/page/CPT templates via the `customTemplates` property.

```json
{
	"version": 2,
	"customTemplates": [
		{
			"name": "content-canvas",
			"title": "Content Canvas",
			"postTypes": ["page", "post"]
		},
		{
			"name": "wide-landing",
			"title": "Wide Landing Page",
			"postTypes": ["page"]
		}
	]
}
```

**Properties:**
- `name` — filename without extension (must have `/templates/{name}.html`)
- `title` — human-readable title (translatable)
- `postTypes` — array of post type slugs (optional, defaults to `page`)

Template files go in the theme's `/templates` folder.

## Template Parts

Reusable sections registered via `templateParts`.

```json
{
	"version": 2,
	"templateParts": [
		{
			"area": "header",
			"name": "header",
			"title": "Header"
		},
		{
			"area": "footer",
			"name": "footer",
			"title": "Footer"
		},
		{
			"area": "uncategorized",
			"name": "sidebar",
			"title": "Sidebar"
		}
	]
}
```

**Properties:**
- `area` — `header`, `footer`, `uncategorized`, or custom
- `name` — filename without extension (must have `/parts/{name}.html`)
- `title` — human-readable title (translatable)

**Including in templates:**
```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

## Patterns

Bundle patterns from the WordPress Pattern Directory.

```json
{
	"version": 2,
	"patterns": [
		"hero-banner-with-overlap-images",
		"fullscreen-cover-image-gallery",
		"mixed-shape-gallery"
	]
}
```

Patterns are referenced by their slug from `wordpress.org/patterns/pattern/{slug}/`. They appear in the Patterns inserter under their assigned categories.

## Style Variations

Alternative versions of `theme.json` — essentially "skins" for your theme.

**Folder structure:**
```
/your-theme
	/styles
		/latte.json
		/swashbuckler.json
	/theme.json
```

**Variation file:**
```json
{
	"version": 2,
	"title": "Latte",
	"settings": {
		"color": {
			"palette": [
				{ "slug": "base", "color": "#F5E6D3", "name": "Base" },
				{ "slug": "contrast", "color": "#3D2B1F", "name": "Contrast" }
			]
		},
		"typography": {
			"fontFamilies": [
				{ "name": "Latte Font", "slug": "latte", "fontFamily": "Georgia, serif" }
			]
		}
	},
	"styles": {
		"color": {
			"background": "var(--wp--preset--color--base)",
			"text": "var(--wp--preset--color--contrast)"
		}
	}
}
```

Any setting or style from `theme.json` can be overridden in a variation.

**Key behavior:** When a user selects a style variation, the data is saved to the database as a user customization. Future updates to the variation file won't affect users who already saved it. Users must switch away and back to get updates.

**Style Variations vs. Child Themes:**
- Style variation: single JSON file, overrides theme.json only, data saved to DB
- Child theme: overrides everything from parent, data stays in files
- Style variations are best for design-only changes; child themes for structural changes
