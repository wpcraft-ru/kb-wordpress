# Introduction to theme.json
**Source:** https://developer.wordpress.org/themes/global-settings-and-styles/introduction-to-theme-json/
**Fetched:** 2026-05-04

---

`theme.json` is a configuration file that lets you define the global settings, styles, and more for your theme. The file works with both block and classic themes.

When building a block theme, `theme.json` may be the most important file in the entire theme. It is the foundational piece that trickles down to every other component.

Things you can do with `theme.json`:
- Enabling block features in the UI (color, typography, spacing controls)
- Configuring a custom color palette, duotone filters, background gradients
- Defining typographical features (font families, web fonts, etc.)
- Adding custom CSS custom properties
- Adjusting the overall design via the core styles system

Settings and styles configured in `theme.json` are reflected on both the front end and WordPress' built-in editors.

`theme.json` represents a "common language" that allows WordPress, your theme, plugins, and users to effectively communicate.

## theme.json Structure

```json
{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2,
	"settings": {},
	"styles": {},
	"customTemplates": {},
	"templateParts": {},
	"patterns": []
}
```

## Top-Level Properties

| Property | Description |
|----------|-------------|
| `version` | The theme.json schema version (currently 2) |
| `$schema` | JSON schema URL for editor hints and error reporting |
| `settings` | Block controls, presets, and configuration |
| `styles` | Colors, font sizes, custom CSS, and other styles for website and blocks |
| `customTemplates` | Metadata for custom templates in `/templates` folder |
| `templateParts` | Metadata for template parts in `/parts` folder |
| `patterns` | Array of pattern slugs from the Pattern Directory |

### Minimum theme.json

```json
{
	"version": 2
}
```

### Recommended (with schema)

```json
{
	"$schema": "https://schemas.wp.org/trunk/theme.json",
	"version": 2
}
```

Always keep up to date with the latest API version. Find it via the [theme.json Living Reference](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/).
