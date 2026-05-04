# What Is Design.md and How to Use It (With Examples)
**Source:** https://www.banani.co/blog/design-md-guide
**Fetched:** 2026-05-04

---

Design MD is a markdown file that captures all the visual rules that AI coding agents or AI builders use to build consistent user interfaces, including colors, typography, spacing, and component patterns.

Instead of prompting an agent like Claude or Cursor with vague instructions like "make it look modern and clean," you drop a design.md file into your project root. Agents have access to it and automatically apply your exact styles to everything it designs.

## What's inside a Design.md

- **Colors:** Primary palettes, neutral scales, and semantic colors with exact hex codes and usage guidance
- **Typography:** Font families, size scales, weights, and line heights
- **Spacing:** Base unit (usually 4px or 8px) and scale values
- **Components:** Specific styling rules for buttons, inputs, and cards
- **Elevation:** Shadow values and depth cues

## Minimal Example

```markdown
## Colors
- **Primary** (#1A73E8): Main brand color for buttons and links
- **Background** (#FFFFFF): Page background
- **Surface** (#F8F9FA): Cards and elevated surfaces
- **Text Primary** (#202124): Main text color

## Typography
- **Heading 1**: Inter, 32px, 700 weight
- **Body**: Inter, 16px, 400 weight

## Components
- **Buttons**: Primary filled (bg #1A73E8, white text, 8px radius)
- **Cards**: White bg, 1px solid #E8EAED border, 12px radius
```

## Resources

### awesome-design-md repo
https://github.com/VoltAgent/awesome-design-md — curated collection of Design.md files. Brands: Claude, Vercel, Stripe, Linear, Airbnb.

### DESIGNmd.ai
https://designmd.ai/ — community platform hosting over 100 free design systems. Browse by tags: "dark", "saas", "minimal", "fintech".

## How to use Design.md

### Manual method
1. Download a Design.md file or write your own
2. Drop into project root, next to agents.md or claude.md
3. Prompt: "Build a pricing page and use the @DESIGN.md file for all styling decisions"

### Banani AI
Banani automatically generates and updates design.md files while you're generating designs. Has MCP server for coding agents.

## Creators of Design.md
The vibe coding community started experimenting with moving stylistic preferences into a separate md instruction file. In March 2026, Google added it as part of their AI design tool, Google Stitch.

## Should I use design.md?
It solves a big issue of vibe coding: generic sloppy design styles to which all coding agents default to. It takes thirty seconds to download a file and drop it into your project. The resulting improvement in UI consistency is immediate and obvious.
