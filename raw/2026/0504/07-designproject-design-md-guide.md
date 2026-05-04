# design.md file: how to write a design system AI agents actually follow
**Source:** https://designproject.io/blog/design-md-file/
**Fetched:** 2026-05-04

---

Every AI design tool ships with the same pitch: "describe your UI, get a design." Then you use it, and it hands you back a screen with the wrong colors, rounded corners that don't match, and buttons that look nothing like your brand. **The tool isn't the problem. You never gave it the brief.**

A design.md file is the brief. It's a plain-text version of your design system, written specifically for AI agents to read and apply.

## What is a design.md file?

A markdown document that describes a product's design system — colors, typography, spacing, components, and rules — in a format AI agents can read and apply when generating UI.

Sometimes called a DMD file, design system markdown, or AI design spec.

In practice, a design.md file looks like:
- A top-level description of the product, tone, and design principles
- Color tokens with hex values and usage rules (primary, secondary, semantic)
- Typography specs (font families, sizes, weights, line heights)
- Component rules (button radii, input states, card patterns)
- A list of explicit don'ts

### design.md vs. Figma design system
A Figma design system is optimized for humans. A design.md file is optimized for agents. Both can coexist — the design.md is often a distilled, text-native mirror of the Figma library.

### design.md vs. design tokens JSON
Design tokens are machine-readable values. A design.md file wraps tokens in context and rules. Tokens tell an agent what values exist; a design.md tells it when to use them and when not to.

### design.md vs. a style guide PDF
A PDF style guide is a reference document. A design.md is a live instruction file. AI agents can read markdown directly; they can't practically parse a branded PDF.

## Why design.md matters

When tested Google Stitch on a real brand without a design.md, it invented a green color palette for a design system that has no green. When pasted in the design.md, it corrected the typography to the right font family on the first try.

If you build one well, you get:
- **Consistent output across tools** — same design.md works in Claude Code, Cursor, v0, Lovable
- **Better prompts, fewer iterations** — explicit don'ts cut bad generations dramatically
- **Real alignment with engineering** — a shared, living file beats a Figma library nobody opens

## What goes inside a design.md file

### 1. Product and principles
Open with 3-5 sentences on what the product is, who it's for, and the tone. Then list 3-5 design principles.

### 2. Color tokens with usage rules
List every color token with its hex, its role, and when to use it. Example: "primary.900 — used only for the highest-emphasis action on a screen. Never two per view."

### 3. Typography rules, not just a type scale
List the type styles by name and purpose: display/xl — page titles only, body/md — default paragraph text, label/sm — form labels and metadata.

### 4. Component and layout rules
Pin the rules. Button radius: 8px, always. Card padding: 24px, always. Form field height: 40px. Write them as absolutes, not ranges.

### 5. The don'ts section
**This was the single biggest accuracy improvement across every AI tool tested.** Fewer re-prompts. The don'ts pulled more weight than the do's.

## How to write a design.md

1. **Start from your real product, not an aspiration** — screenshot five core screens, pull actual values from code
2. **Write it in the repo, not in Notion** — /design.md at the root
3. **Co-author with engineering from the start** — it's a shared contract, not a design deliverable
4. **Lead with don'ts, not just do's** — walk through real AI generations and write a don't for each bad output
5. **Test it with the AI tools you actually use** — generate a simple screen with and without, compare

## Tools
- W3C Design Tokens format — emerging standard for token structure
- Style Dictionary by Amazon — generates tokens across platforms
- Claude Code's CLAUDE.md pattern — design.md can sit alongside CLAUDE.md in the repo
