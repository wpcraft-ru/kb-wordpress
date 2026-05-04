# 48 Design Skills for Claude and Other AI Coding Agents
**Source:** https://www.typeui.sh/blog/design-skills-for-claude
**Fetched:** 2026-05-04

---

If you have used AI coding agents to build a website, you already know the problem. You prompt Claude Code or Cursor to build a landing page, and it looks fine. You prompt it again for a pricing section, and the spacing is off. By the third prompt, the fonts are different, the button styles have drifted, and you are spending more time fixing design inconsistencies than actually building.

Design skills solve this by giving your AI agent a single source of truth for how your interface should look and behave.

## What are design skills?

A design skill is a structured markdown file that encodes design system rules — typography scales, color tokens, spacing rhythms, component anatomy, interaction states, and accessibility requirements — in a format that AI coding agents can read and follow.

Each skill file covers:
- Visual style and brand tone
- Typography scale and font choices
- Color palette with semantic tokens
- Spacing and density modes
- Component families (buttons, inputs, cards, tables, navigation, modals, and dozens more)
- Accessibility standards (WCAG 2.2 AA)
- Do and don't rules

## How design skills work with TypeUI

```bash
npx typeui.sh pull [name]
```

This drops a skill.md file into your project that works with Claude Code, Cursor, Codex CLI, Gemini CLI, and any agent that reads markdown instructions.

Once installed, the agent picks up the skill file automatically and applies the design system to everything it builds.

## All 48 Design Skills

1. **Spacious** — Generous whitespace, airy layouts, content-heavy applications
2. **Neumorphism** — Soft extruded look, tactile quality, dashboards/control panels
3. **Professional** — Clean, trustworthy, business applications and productivity tools
4. **Modern** — Soft shadows, rounded corners, clean interfaces, versatile all-rounder
5. **Energetic** — Vivid colors, dynamic shapes, fitness apps/gaming/events
6. **Tetris** — Modular grid-based, geometric components, portfolio/creative agencies
7. **Fantasy** — Mystical elements, ornate borders, gaming/storytelling
8. **Glassmorphism** — Liquid glass effects, frosted backgrounds, dark mode + gradients
9. **Creative** — Breaks traditional grid, innovative interactions, agency sites
10. **Expressive** — Personality-driven, rich contrast, bold typography, media/lifestyle
11. **Paper** — Clean tactile style, soft shadows, note-taking/documentation apps
12. **Corporate** — Structured, professional, enterprise dashboards/B2B
13. **Dithered** — Pixel-like textures, retro character, indie projects/creative studios
14. **Storytelling** — Emotion and flow, visual hierarchy, landing pages/marketing
15. **Luxury** — Rich textures, metallic accents, high-end brands
16. **Elegant** — Graceful, polished, between Luxury and Minimal, fashion/portfolios
17. **Cosmic** — Deep-space tones, luminous accents, AI tools/data visualization
18. **Clean** — Minimal, distraction-free, content-first products
19. **Colorful** — Vibrant palettes, bold contrasts, children's/creative/community apps
20. **Levels** — Indiehacker-lean, ship-fast, bold no-fluff UI (Pieter Levels style)
21. **Vibrant** — Bold bright colors, playful gradients, social/marketplaces/consumer
22. **Premium** — High-end, refined typography, tech/fintech (banking/investment)
23. **Neon** — Dark-mode, glowing borders, cyberpunk, gaming/developer tools
24. **Bento** — Clean modular card blocks, feature pages/dashboards/product overviews
25. **Sleek** — Streamlined, polished, developer tools/analytics/tech products
26. **Vintage** — Nostalgic, muted palettes, artisan brands/restaurants/photography
27. **Pacman** — Arcade-inspired, 8-bit, vivid primary colors, game studios
28. **Futuristic** — Sleek interfaces, glowing accents, sci-fi UI, AI products/space-tech
29. **Retro** — Nostalgic web aesthetics, pixelated details, personal blogs/indie projects
30. **Dramatic** — Bold contrast, striking typography, product launches/media sites
31. **Minimal** — Stripped-down, every element justifies existence, personal sites/writing
32. **Perspective** — Depth and direction, angled layouts, architecture/3D products
