# Google Stitch Open-Sources DESIGN.md: The Spec That Makes AI Agents Consistent With Your Brand
**Source:** https://pasqualepillitteri.it/en/news/1251/google-stitch-design-md-open-source-spec-2026
**Fetched:** 2026-05-04

---

Last night, April 21, 2026, Google Labs published the draft specification of DESIGN.md as an open-source project. This isn't just another release of an internal tool: it's an attempt to turn a markdown file into an industry standard for describing design systems to AI agents.

> Today, we're open-sourcing the draft specification for DESIGN.md, so it can be used across any tool or platform.
> — Stitch by Google, April 21, 2026

## What DESIGN.md Is and Why It Really Matters

DESIGN.md is a markdown file that describes your brand's visual rules in a format AI agents can read deterministically. Drop it into the project root, the way you'd do with a README, and every compatible tool uses it to generate interfaces consistent with your visual identity.

The comparison with README.md is explicit — just as README explains the project to new contributors, DESIGN.md explains the design system to AI agents writing UI code.

The difference from a traditional design system is subtle but important:
- A design system in Figma or Storybook lives inside a proprietary tool
- CSS variables live in style files and struggle to escape them
- **DESIGN.md is born tool-neutral**: it's text, it's Git-versionable, and any human can read it

Google incubated it inside Stitch (launched May 2025) and opened the spec under Apache 2.0 license — the bet is that the format becomes a de facto standard, like OpenAPI did for REST APIs.

## The Nine Standard Sections

1. **Visual Theme & Atmosphere** — overall visual tone, brand's aesthetic intent
2. **Color Palette & Roles** — colors with semantic roles (primary, surface, accent, error)
3. **Typography Rules** — font families, scales, weights, line heights
4. **Component Stylings** — patterns for buttons, cards, forms, navigation with variants
5. **Layout Principles** — grids, breakpoints, base spacing
6. **Depth & Elevation** — shadows, z-index, visual stratification
7. **Do's and Don'ts** — explicit rules about what is allowed and what isn't
8. **Responsive Behavior** — how to adapt across desktop, tablet, mobile
9. **Agent Prompt Guide** — **the real novelty** — explicit instructions for AI agents

## Ready-to-Use Example

```markdown
# DESIGN.md

## Visual Theme & Atmosphere
Modern, minimal, professional. Warm neutrals with one strong accent.

## Color Palette & Roles
- Primary: #0099e5
- Primary Dark: #0077b3
- Surface: #f5f2ea
- Background: #e5e1d7
- Ink: #1a1a1a
- Success: #2e8b57
- Warning: #b8860b
- Error: #c0392b

## Typography Rules
- Font Family: Inter, system-ui, sans-serif
- Heading 1: 48px / 700 / 1.1
- Heading 2: 32px / 600 / 1.2
- Body: 16px / 400 / 1.6
- Caption: 13px / 500 / 1.4

## Component Stylings
- Button: border-radius 10px, padding 12px 24px, shadow offset 4px
- Card: border-radius 12px, border 2px solid ink, shadow #bcb8ae
- Input: border 1px solid #9a968c, focus ring 2px primary

## Do's and Don'ts
- DO use the primary color only for interactive elements
- DO maintain 4.5:1 contrast ratio on text
- DON'T introduce colors outside the palette
- DON'T use drop shadows above 8px offset

## Agent Prompt Guide
When generating UI, always:
1. Reference this file before writing code
2. Validate color choices against WCAG AA
3. Apply the spacing scale (4, 8, 16, 24, 32)
```

The full file usually stays under 200 lines.

## Integration With Claude Code, Cursor, and Copilot

### Claude Code
Save DESIGN.md in project root. Add to CLAUDE.md:
```markdown
## Design System
Always refer to DESIGN.md when generating UI components.
- Use only colors, fonts, and spacing defined in DESIGN.md
- Match component states to the patterns described there
- Never introduce values outside the documented scale
- Validate accessibility against the Do's and Don'ts section
```

### Cursor
File gets included through project rules automatically.

### GitHub Copilot Workspace
DESIGN.md is read at the first prompt and used as a guardrail for every generation.

### Why It Works Better Than a Long Prompt
- AI agents follow explicit rules instead of inferring them
- The file is versioned in pull requests
- The designer edits DESIGN.md and every agent updates automatically
- Zero proprietary tools needed

## Compatibility With W3C Design Tokens and Tailwind

Tokens follow the W3C Design Token Community Group (DTCG) standard. You can export:
- `tokens.json` — W3C DTCG compatible
- `tailwind.config.js` — ready for Tailwind projects
- CSS variables, SCSS, etc.

The pipeline: Stitch generates DESIGN.md → commit to repo → export tokens → build tools turn into CSS variables, Tailwind, etc.

## DESIGN.md vs. Figma

| Aspect | DESIGN.md | Figma Tokens |
|--------|-----------|-------------|
| Format | Open text-based markdown | Proprietary system |
| Portability | Universal, Git-friendly | Tied to Figma |
| AI Readability | Optimized for agents | Not primary |
| Real-time Collaboration | Absent | Excellent |
| Permissions and Roles | Managed via Git | Native granular |
| Plugin Ecosystem | Growing | Mature |

**Emerging hybrid workflow:** Stitch + DESIGN.md for ideation, prototyping, design-to-code; Figma for refinement, collaboration, final polishing.

## Criticism and Limits

1. **Governance** — Main maintenance at Google Labs. No independent committee yet (like W3C or OpenAPI Initiative).
2. **Team features** — Figma has granular permissions, comments, branching. DESIGN.md delegates to Git, which wasn't built for designer workflow.
3. **Gemini coupling** — Gemini reads DESIGN.md as natural language, applies with probabilistic judgment, not rule-based precision. It's a guidance layer, not an enforcement layer.

**Warning:** DESIGN.md does not replace automated visual tests or CSS linters. It's a semantic contract, not a compiler. For strict compliance you still need a pipeline that validates generated code against deterministic rules.

## FAQ

**Can I use DESIGN.md without Google Stitch?** Yes. Apache 2.0 license. Write by hand, commit to GitHub, have any compatible agent consume it.

**Does it replace Figma?** No. Hybrid workflow: both coexist covering different phases.

**License?** Apache 2.0. Open to contributions. Currently maintained by Google Labs, goal is broader governance.

**How to integrate with Claude Code?** Save in project root, reference in CLAUDE.md.
