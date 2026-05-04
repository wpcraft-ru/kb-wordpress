# TypeUI — CLI для генерации DESIGN.md / SKILL.md
**Source:** https://github.com/bergside/typeui
**Fetched:** 2026-05-04

---

TypeUI is an open-source command line interface (CLI) that generates, updates, and can download SKILL.md or DESIGN.md files with design system specifications to instruct agentic tools and LLM's to use a certain design when building interfaces.

## Quick Start

```bash
npx typeui.sh --help
```

Browse all design skills: https://www.typeui.sh/design-skills

## Commands

| Command | Description |
|---------|-------------|
| `generate` | Interactive prompts, choose SKILL.md or DESIGN.md, generate output |
| `update` | Update existing output files |
| `pull <slug>` | Pull registry file from bergside/awesome-design-skills |
| `list` | Show available registry specs, then pull one |
| `randomize` | Generate fully randomized design system |

```bash
npx typeui.sh generate
npx typeui.sh generate --format design
npx typeui.sh generate --providers cursor,claude-code
npx typeui.sh generate --dry-run
npx typeui.sh randomize
npx typeui.sh randomize --format design
npx typeui.sh list
npx typeui.sh pull [slug]
npx typeui.sh pull [slug] --format design
npx typeui.sh list --format design
```

## Provider Selection

Universal path `.agents/skills/design-system/SKILL.md` is always included. Additional targets:
- Cursor
- Claude Code
- Codex
- OpenCode
- Gemini CLI
- Mistral Vibe

## Interactive Generation Steps

### 1. Product basics
- Product name — title in generated file
- Brand summary — short description

### 2. Visual style
Multi-select from presets: modern, minimal, clean, high-contrast, bold, playful, editorial, data-dense, enterprise, premium. Custom values supported.

### 3. Typography
- Scale strategy: fixed (12/14/16/20/24/32), mobile-first compact, desktop-first expressive
- Primary UI font (Google Fonts): Inter, Roboto, Poppins, DM Sans, etc.
- Display/heading font: Space Grotesk, Playfair Display, Bebas Neue, etc.
- Monospace font: JetBrains Mono, Fira Code, Source Code Pro, etc.
- Font weights: 100–900 multi-select

### 4. Color palette
- Palette guidance: primary, secondary, neutral, success, warning, danger, info, surface/subtle, dark mode parity
- Token values: hex for primary, secondary, success, warning, danger, surface, text

### 5. Spacing
Scales: 4/8/12/16/24/32, 2/4/8/12/16/24/32/48, 8pt baseline grid, compact density, comfortable density

### 6. Components
Buttons, inputs, forms, cards, tables, modals, navigation, and more. Custom supported.

### 7. Accessibility
WCAG 2.2 AA, keyboard-first, visible focus states, semantic HTML before ARIA, screen-reader tested labels, reduced-motion, 44px+ touch targets, high-contrast support

### 8. Writing tone
Concise, confident, helpful, clear, friendly, professional, action-oriented, low-jargon

### 9. Rules
- Do rules — mandatory practices
- Don't rules — anti-patterns

## Generated File Sections

| Section | Purpose |
|---------|---------|
| Mission | Design-system objective and expected output quality |
| Brand | Product context and brand direction |
| Style Foundations | Core visual tokens (style, typography, colors, spacing) |
| Accessibility | Standards and non-negotiable requirements |
| Writing Tone | Tone/style for generated guidance language |
| Rules: Do | Required implementation practices |
| Rules: Don't | Anti-patterns and prohibited behaviors |
| Expected Behavior | Decision-making and trade-off expectations |
| Guideline Authoring Workflow | Ordered process for producing guidelines |
| Required Output Structure | Response format for consistency |
| Component Rule Expectations | Interaction/state details in components |
| Quality Gates | Validation criteria (clarity, testability, consistency) |
| Example Constraint Language | Standardized wording (must vs should) |

## License
MIT (CLI + public registry). Pro version available with enhanced design skill files and private Discord.
