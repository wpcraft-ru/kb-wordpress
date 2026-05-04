# DESIGN.md Explained — The Format Reshaping How AI Builds UI
**Source:** https://departmentofproduct.substack.com/p/designmd-explained-the-format-reshaping
**Fetched:** 2026-05-04

---

Google has announced that it is officially open-sourcing its DESIGN.md format — a standardized specification originally developed for its own design tool, Stitch.

The spec turns design systems into something "agent-native" and interoperable, with some arguing that it will form the basis of the future of design.

Some predictions argue that design is "the first AI casualty" — larger companies may not backfill design roles as product teams use centralized design systems that feed into AI tools to generate UI and prototypes on demand.

## What is DESIGN.md?

DESIGN.md is a plain-text file that gives your AI agents a structured, persistent understanding of an entire design system. In many ways, it's almost like a design counterpart to README.md files.

After they were initially released as part of Stitch almost a year ago, the format started to pop-up outside of Google's own tools. Developers began to write their own versions. But Google's new open-source specification standardizes the format for the first time.

## Structure

Every DESIGN.md has two parts living in the same file:

1. **YAML front matter** — machine-readable design tokens (exact hex codes, font sizes, spacing values, corner radii, component styles)
2. **Markdown body** — human-readable rationale explaining why those values exist and how to apply them

The file format separates the "what" from the "why."

### Why this is powerful

The **"what" (tokens)** is for machines. A coding agent doesn't need to know that primary is "Golden Retriever orange" evoking joyful energy. It needs a hex code like #855300. A hex code is precise, unambiguous, executable.

The **"why" (prose)** is for judgment calls. When a situation arises that the tokens don't cover (edge case, new component type, unexpected layout constraint), an agent needs context to make a decision that stays on-brand:

"The brand personality is optimistic, trustworthy, and active"
"never crowd elements"

These instructions can't be tokenised but can guide a decision. They fill the gaps and help the agent make design decisions that fit with the wider system.

## Practical Implications

For product teams, the adoption of DESIGN.md has potentially significant, practical implications. The format allows product teams to separate machine-executable design values from the contextual rationale that guides judgment calls in ambiguous situations.
