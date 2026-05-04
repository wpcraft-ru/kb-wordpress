# google-labs-code/design.md
**Source:** https://github.com/google-labs-code/design.md
**Fetched:** 2026-05-04

---

A format specification for describing a visual identity to coding agents. DESIGN.md gives agents a persistent, structured understanding of a design system.

A DESIGN.md file combines machine-readable design tokens (YAML front matter) with human-readable design rationale (markdown prose). Tokens give agents exact values. Prose tells them why those values exist and how to apply them.

```yaml
---
name: Heritage
colors:
 primary: "#1A1C1E"
 secondary: "#6C7278"
 tertiary: "#B8422E"
 neutral: "#F7F5F2"
typography:
 h1:
 fontFamily: Public Sans
 fontSize: 3rem
 body-md:
 fontFamily: Public Sans
 fontSize: 1rem
 label-caps:
 fontFamily: Space Grotesk
 fontSize: 0.75rem
rounded:
 sm: 4px
 md: 8px
spacing:
 sm: 8px
 md: 16px
---
```

## Overview

Architectural Minimalism meets Journalistic Gravitas. The UI evokes a premium matte finish — a high-end broadsheet or contemporary gallery.

## Colors

The palette is rooted in high-contrast neutrals and a single accent color.

- **Primary (#1A1C1E):** Deep ink for headlines and core text.
- **Secondary (#6C7278):** Sophisticated slate for borders, captions, metadata.
- **Tertiary (#B8422E):** "Boston Clay" — the sole driver for interaction.
- **Neutral (#F7F5F2):** Warm limestone foundation, softer than pure white.

An agent that reads this file will produce a UI with deep ink headlines in Public Sans, a warm limestone background, and Boston Clay call-to-action buttons.

Validate a DESIGN.md against the spec, catch broken token references, check WCAG contrast ratios, and surface structural findings — all as structured JSON that agents can act on.

```bash
npx @google/design.md lint DESIGN.md
```

```json
{
 "findings": [
 {
 "severity": "warning",
 "path": "components.button-primary",
 "message": "textColor (#ffffff) on backgroundColor (#1A1C1E) has contrast ratio 15.42:1 — passes WCAG AA."
 }
 ],
 "summary": { "errors": 0, "warnings": 1, "info": 1 }
}
```

Compare two versions of a design system to detect token-level and prose regressions:

```bash
npx @google/design.md diff DESIGN.md DESIGN-v2.md
```

```json
{
 "tokens": {
 "colors": { "added": ["accent"], "removed": [], "modified": ["tertiary"] },
 "typography": { "added": [], "removed": [], "modified": [] }
 },
 "regression": false
}
```

The full DESIGN.md spec lives at [docs/spec.md](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md).

## Format Structure

A DESIGN.md file has two layers:

- **YAML front matter** — Machine-readable design tokens, delimited by `---` fences at the top of the file.
- **Markdown body** — Human-readable design rationale organized into `##` sections.

The tokens are the normative values. The prose provides context for how to apply them.

```yaml
version: <string> # optional, current: "alpha"
name: <string>
description: <string> # optional
colors:
 <token-name>: <Color>
typography:
 <token-name>: <Typography>
rounded:
 <scale-level>: <Dimension>
spacing:
 <scale-level>: <Dimension | number>
components:
 <component-name>:
 <token-name>: <string | token reference>
```

### Token Types

| Type | Format | Example |
|------|--------|---------|
| Color | # + hex (sRGB) | "#1A1C1E" |
| Dimension | number + unit (px, em, rem) | 48px, -0.02em |
| Token Reference | {path.to.token} | {colors.primary} |
| Typography | object with fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, fontFeature, fontVariation | See example above |

### Section Order

| # | Section | Aliases |
|---|---------|---------|
| 1 | Overview | Brand & Style |
| 2 | Colors | |
| 3 | Typography | |
| 4 | Layout | Layout & Spacing |
| 5 | Elevation & Depth | Elevation |
| 6 | Shapes | |
| 7 | Components | |
| 8 | Do's and Don'ts | |

### Components

Components map a name to a group of sub-token properties:

```yaml
components:
 button-primary:
 backgroundColor: "{colors.tertiary}"
 textColor: "{colors.on-tertiary}"
 rounded: "{rounded.sm}"
 padding: 12px
 button-primary-hover:
 backgroundColor: "{colors.tertiary-container}"
```

Valid component properties: backgroundColor, textColor, typography, rounded, padding, size, height, width.

Variants (hover, active, pressed) are expressed as separate component entries with a related key name.

### Forward Compatibility

| Scenario | Behavior |
|----------|----------|
| Unknown section heading | Preserve; do not error |
| Unknown color token name | Accept if value is valid |
| Unknown typography token name | Accept as valid typography |
| Unknown component property | Accept with warning |
| Duplicate section heading | Error; reject the file |

## CLI

```bash
npm install @google/design.md
# or
npx @google/design.md lint DESIGN.md
```

### Commands

**Lint:**
```bash
npx @google/design.md lint DESIGN.md
npx @google/design.md lint --format json DESIGN.md
cat DESIGN.md | npx @google/design.md lint -
```

**Diff:**
```bash
npx @google/design.md diff DESIGN.md DESIGN-v2.md
```

**Export:**
```bash
npx @google/design.md export --format json-tailwind DESIGN.md > tailwind.theme.json
npx @google/design.md export --format css-tailwind DESIGN.md > theme.css
npx @google/design.md export --format dtcg DESIGN.md > tokens.json
```

**Spec:**
```bash
npx @google/design.md spec
npx @google/design.md spec --rules
npx @google/design.md spec --rules-only --format json
```

## Linter Rules

| Rule | Severity | What it checks |
|------|----------|----------------|
| broken-ref | error | Token references ({colors.primary}) that don't resolve |
| missing-primary | warning | Colors defined but no primary color exists |
| contrast-ratio | warning | backgroundColor/textColor pairs below WCAG AA (4.5:1) |
| orphaned-tokens | warning | Color tokens defined but never referenced by components |
| token-summary | info | Summary of token counts per section |
| missing-sections | info | Optional sections absent when other tokens exist |
| missing-typography | warning | Colors exist but no typography tokens |
| section-order | warning | Sections out of canonical order |

## Programmatic API

```javascript
import { lint } from '@google/design.md/linter';

const report = lint(markdownString);
console.log(report.findings); // Finding[]
console.log(report.summary); // { errors, warnings, info }
console.log(report.designSystem); // Parsed DesignSystemState
```

DESIGN.md tokens are inspired by the W3C Design Token Format. Export formats:
- **json-tailwind** — Tailwind v3 theme.extend config
- **css-tailwind** — Tailwind v4 @theme { ... } block with CSS custom properties
- **dtcg** — W3C Design Tokens Format Module

**Status:** alpha. Spec, token schema, and CLI under active development.
