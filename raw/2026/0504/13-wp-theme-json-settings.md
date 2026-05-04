# WordPress theme.json — Settings Reference
**Source:** https://developer.wordpress.org/themes/global-settings-and-styles/settings/
**Source:** https://developer.wordpress.org/themes/global-settings-and-styles/settings/settings-reference/
**Fetched:** 2026-05-04

---

## Settings Property Structure

```json
{
	"version": 2,
	"settings": {
		"appearanceTools": false,
		"border": {},
		"color": {},
		"custom": {},
		"dimensions": {},
		"layout": {},
		"position": {},
		"shadow": {},
		"spacing": {},
		"typography": {},
		"useRootPaddingAwareAlignments": false,
		"blocks": {}
	}
}
```

## Complete Settings Reference

### appearanceTools
| Property | Type | Default |
|----------|------|---------|
| `appearanceTools` | boolean | `false` |

Catchall for enabling multiple design-related settings at once. Equivalent to enabling: border (color/radius/style/width), color.link, dimensions.minHeight, position.sticky, spacing (blockGap/margin/padding), typography.lineHeight.

### border
| Property | Type | Default |
|----------|------|---------|
| `color` | boolean | `false` |
| `radius` | boolean | `false` |
| `style` | boolean | `false` |
| `width` | boolean | `false` |

Enabling any one of color/style/width automatically enables the other two.

### color
| Property | Type | Default | Object Props |
|----------|------|---------|--------------|
| `background` | boolean | `true` | — |
| `custom` | boolean | `true` | — |
| `customDuotone` | boolean | `true` | — |
| `customGradient` | boolean | `true` | — |
| `defaultDuotone` | boolean | `true` | — |
| `defaultGradients` | boolean | `true` | — |
| `defaultPalette` | boolean | `true` | — |
| `duotone` | array | `[]` | `colors`, `name`, `slug` |
| `gradients` | array | `[]` | `gradient`, `name`, `slug` |
| `link` | boolean | `false` | — |
| `palette` | array | `[]` | `color`, `name`, `slug` |
| `text` | boolean | `true` | — |

**Custom color palette example:**
```json
{
	"settings": {
		"color": {
			"palette": [
				{
					"slug": "primary",
					"color": "#1A73E8",
					"name": "Primary"
				},
				{
					"slug": "secondary",
					"color": "#34A853",
					"name": "Secondary"
				}
			]
		}
	}
}
```

**Custom gradient example:**
```json
{
	"settings": {
		"color": {
			"gradients": [
				{
					"slug": "custom-gradient",
					"gradient": "linear-gradient(135deg, #1A73E8 0%, #34A853 100%)",
					"name": "Blue to Green"
				}
			]
		}
	}
}
```

### custom
| Property | Type | Default |
|----------|------|---------|
| `custom.<custom>` | any | — |

An object for adding custom settings, output as CSS custom properties: `--wp--custom--<key>`.

```json
{
	"settings": {
		"custom": {
			"color-brand": "#ff0000",
			"spacing-large": "100px"
		}
	}
}
```

### dimensions
| Property | Type | Default |
|----------|------|---------|
| `minHeight` | boolean | `false` |

### layout
| Property | Type | Default |
|----------|------|---------|
| `contentSize` | string | `""` |
| `wideSize` | string | `""` |

Content and wide alignment widths.

### lightbox (WP 6.4+)
| Property | Type | Default |
|----------|------|---------|
| `allowEditing` | boolean | `true` |
| `enabled` | boolean | `false` |

### position
| Property | Type | Default |
|----------|------|---------|
| `sticky` | boolean | `false` |

### shadow
| Property | Type | Default | Object Props |
|----------|------|---------|--------------|
| `defaultPresets` | boolean | `true` | — |
| `presets` | array | `[]` | `name`, `shadow`, `slug` |

### spacing
| Property | Type | Default | Object Props |
|----------|------|---------|--------------|
| `blockGap` | boolean\|null | `null` | — |
| `customSpacingSize` | boolean | `true` | — |
| `margin` | boolean | `false` | — |
| `padding` | boolean | `false` | — |
| `spacingScale` | object | `{}` | `operator`, `increment`, `steps`, `mediumStep`, `unit` |
| `spacingSizes` | array | `[]` | `name`, `size`, `slug` |
| `units` | array | `["px","em","rem","vh","vw","%"]` | — |

**Spacing Scale defaults:**
```json
{
	"spacingScale": {
		"operator": "*",
		"increment": 1.5,
		"steps": 7,
		"mediumStep": 1.5,
		"unit": "rem"
	}
}
```

Generates CSS custom properties:
| Property | Value | Label |
|----------|-------|-------|
| `--wp-preset--spacing--20` | `0.44rem` | 2X-Small |
| `--wp-preset--spacing--30` | `0.67rem` | X-Small |
| `--wp-preset--spacing--40` | `1rem` | Small |
| `--wp-preset--spacing--50` | `1.5rem` | Medium |
| `--wp-preset--spacing--60` | `2.25rem` | Large |
| `--wp-preset--spacing--70` | `3.38rem` | X-Large |
| `--wp-preset--spacing--80` | `5.06rem` | 2X-Large |

**Custom spacing sizes:**
```json
{
	"settings": {
		"spacing": {
			"spacingSizes": [
				{ "slug": "sm", "size": "8px", "name": "Small" },
				{ "slug": "md", "size": "16px", "name": "Medium" },
				{ "slug": "lg", "size": "24px", "name": "Large" }
			]
		}
	}
}
```

### typography
| Property | Type | Default | Object Props |
|----------|------|---------|--------------|
| `customFontSize` | boolean | `true` | — |
| `dropCap` | boolean | `true` | — |
| `fontFamilies` | array | `[]` | `fontFace`, `fontFamily`, `name`, `slug` |
| `fontSizes` | array | `[]` | `fluid`, `name`, `size`, `slug` |
| `fontStyle` | boolean | `true` | — |
| `fontWeight` | boolean | `true` | — |
| `fluid` | boolean | `false` | — |
| `letterSpacing` | boolean | `true` | — |
| `lineHeight` | boolean | `false` | — |
| `textColumns` | boolean | `false` | — |
| `textDecoration` | boolean | `true` | — |
| `textTransform` | boolean | `true` | — |
| `writingMode` | boolean | `false` | — |

**Font family registration (system fonts):**
```json
{
	"settings": {
		"typography": {
			"fontFamilies": [
				{
					"name": "Primary",
					"slug": "primary",
					"fontFamily": "Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif"
				},
				{
					"name": "Secondary",
					"slug": "secondary",
					"fontFamily": "system-ui, sans-serif"
				}
			]
		}
	}
}
```

**Web font registration (bundled with theme):**
```json
{
	"settings": {
		"typography": {
			"fontFamilies": [
				{
					"name": "Open Sans",
					"slug": "open-sans",
					"fontFamily": "'Open Sans', sans-serif",
					"fontFace": [
						{
							"fontFamily": "Open Sans",
							"fontWeight": "300 800",
							"fontStyle": "normal",
							"fontStretch": "normal",
							"src": ["file:./assets/fonts/open-sans.woff2"]
						}
					]
				}
			]
		}
	}
}
```

Generates CSS custom properties: `--wp--preset--font-family--{slug}`

**Font size presets:**
```json
{
	"settings": {
		"typography": {
			"fontSizes": [
				{ "slug": "small", "size": "0.875rem", "name": "Small" },
				{ "slug": "medium", "size": "1rem", "name": "Medium" },
				{ "slug": "large", "size": "1.25rem", "name": "Large" },
				{ "slug": "x-large", "size": "2.25rem", "name": "Extra Large" }
			]
		}
	}
}
```

**Fluid typography:** Set `"fluid": true` at the typography level or per-size. Uses `clamp()` for responsive scaling.

### useRootPaddingAwareAlignments
| Property | Type | Default |
|----------|------|---------|
| `useRootPaddingAwareAlignments` | boolean | `false` |

Works with `styles.spacing.padding` for root-level padding.

### blocks
Object for configuring per-block settings. Uses namespace/slug format (e.g., `core/button`).

```json
{
	"settings": {
		"blocks": {
			"core/button": {
				"color": { "palette": true },
				"spacing": { "padding": true }
			}
		}
	}
}
```
