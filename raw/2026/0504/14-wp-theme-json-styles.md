# WordPress theme.json — Styles
**Source:** https://developer.wordpress.org/themes/global-settings-and-styles/styles/
**Source:** https://developer.wordpress.org/themes/global-settings-and-styles/styles/applying-styles/
**Fetched:** 2026-05-04

---

The `styles` property lets you configure settings at the global level, for individual elements, and individual blocks. WordPress supports a standard subset of CSS, plus custom CSS.

**Recommendation:** Use `styles` for standard WordPress features when possible — this allows users to customize via Appearance > Editor > Styles without CSS specificity issues.

## Style Levels

1. **Root (global)** — styles on `<body>`, cascade to everything
2. **Elements** — HTML elements (button, heading, link, cite, caption)
3. **Blocks** — specific blocks (core/button, core/image, etc.)

## Basic Structure

```json
{
	"version": 2,
	"styles": {
		"color": {
			"text": "#000000",
			"background": "#ffffff"
		},
		"elements": {},
		"blocks": {}
	}
}
```

## Styling the Root Element

Styles applied directly to the `<body>` tag. These are global defaults.

```json
{
	"styles": {
		"color": {
			"text": "#000000",
			"background": "#f5f1ea"
		},
		"typography": {
			"fontFamily": "var(--wp--preset--font-family--primary)",
			"fontSize": "1rem"
		},
		"spacing": {
			"padding": {
				"top": "0",
				"right": "1.5rem",
				"bottom": "0",
				"left": "1.5rem"
			}
		}
	}
}
```

## Styling Elements

Standard HTML elements that can be styled:

| Element | Maps to |
|---------|---------|
| `button` | `<button>`, button-like links |
| `caption` | `<figcaption>` |
| `cite` | `<cite>` element |
| `heading` | `<h1>` through `<h6>` (all) |
| `h1` - `h6` | Individual heading levels |
| `link` | `<a>` tag |

```json
{
	"styles": {
		"elements": {
			"button": {
				"color": {
					"text": "#ffffff",
					"background": "#aa3f33"
				},
				":hover": {
					"color": {
						"background": "#822f27"
					}
				}
			},
			"link": {
				"color": {
					"text": "#1A73E8"
				},
				":hover": {
					"color": {
						"text": "#1557B0"
					}
				}
			},
			"heading": {
				"typography": {
					"fontFamily": "var(--wp--preset--font-family--heading)",
					"fontWeight": "700"
				}
			}
		}
	}
}
```

### Pseudo-classes Supported
- `:hover`, `:focus`, `:active`, `:visited` (for button and link elements)

## Styling Blocks

Target specific blocks using `namespace/slug` format:

```json
{
	"styles": {
		"blocks": {
			"core/image": {
				"border": { "radius": "6px" }
			},
			"core/code": {
				"color": {
					"text": "#ffffff",
					"background": "#000000"
				}
			},
			"core/quote": {
				"border": {
					"color": "#1A73E8",
					"width": "2px"
				},
				"spacing": {
					"padding": { "left": "1.5rem" }
				}
			}
		}
	}
}
```

### Styling nested elements in blocks

```json
{
	"styles": {
		"blocks": {
			"core/pullquote": {
				"typography": { "fontSize": "2.25rem" },
				"elements": {
					"cite": {
						"typography": { "fontSize": "max(50%, 1.5rem)" }
					}
				}
			}
		}
	}
}
```

### Block style variations (WP 6.2+)

Customize core block style variations (e.g., Button's Outline style):

```json
{
	"styles": {
		"blocks": {
			"core/button": {
				"variations": {
					"outline": {
						"border": {
							"color": "currentColor",
							"style": "solid",
							"width": "2px"
						}
					}
				}
			}
		}
	}
}
```

## Using Presets in Styles

Reference presets defined in `settings`:

```json
{
	"styles": {
		"color": {
			"background": "var(--wp--preset--color--primary)",
			"text": "var(--wp--preset--color--contrast)"
		},
		"typography": {
			"fontFamily": "var(--wp--preset--font-family--body)",
			"fontSize": "var(--wp--preset--font-size--medium)"
		},
		"spacing": {
			"padding": "var(--wp--preset--spacing--40)"
		}
	}
}
```

Short syntax also works: `var:preset|color|primary`
