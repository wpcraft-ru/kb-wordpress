# AGENTS.md — WP Knowledge Base

LLM Wiki schema for the WordPress knowledge base.

## Wiki Structure

```
wp-knowledge/
├── raw/                       # Immutable source documents — READ ONLY
│   ├── articles/              # Saved articles, blog posts
│   └── assets/                # Screenshots, images
├── src/content/docs/          # ★ WIKI PAGES — you write and maintain these
│   ├── index.md               # Catalog of all pages (update on every ingest)
│   ├── log.md                 # Chronological operations log (append on every operation)
│   ├── core/                  # WordPress core concepts
│   ├── plugins/               # Plugin-specific knowledge
│   ├── themes/                # Theme development
│   ├── security/              # Security best practices
│   ├── performance/           # Performance optimization
│   ├── snippets/              # Code snippets and recipes
│   └── queries/               # Filed answers from user queries
├── AGENTS.md                  # This file — wiki schema
├── astro.config.mjs           # Starlight + Algolia config
└── package.json
```

## Page Format

Every wiki page (except index.md and log.md) starts with Starlight-compatible frontmatter:

```yaml
---
title: "Page Title"
description: "One-line summary of this page"
---
```

Starlight automatically reads `title` and `description` for:
- Page heading
- Meta description tag
- Site search indexing
- Pagefind / Algolia

**Important:** Do NOT start pages with an `# H1` heading that duplicates the frontmatter `title`. Starlight already renders the `title` as the page's H1. Start content directly with `##` level headings.

### Cross-References

Use standard Markdown relative links for cross-references — NOT Wikilinks:

```markdown
[Filters](../core/filters.md)
```

Starlight resolves these to proper URLs at build time.

### Code Blocks

Use fenced code blocks with language:

```php
add_filter('the_content', function($content) {
    return '<div class="wrapper">' . $content . '</div>';
});
```

## Operations

### Ingest

When asked to ingest a source:

1. **Read the source** from `raw/` or provided URL
2. **Read `src/content/docs/index.md`** to understand current wiki structure
3. **Discuss key takeaways** with the user before writing
4. **Create/update pages** in the appropriate `src/content/docs/` subdirectory:
   - If it's a core concept → `core/`
   - If it's about a specific plugin → `plugins/`
   - If it's a code recipe → `snippets/`
   - If a new category is needed → propose it to the user
5. **Update `src/content/docs/index.md`** — add entry with relative link + one-line summary
6. **Append to `src/content/docs/log.md`**: `## [YYYY-MM-DD] ingest | Title`
7. **Add cross-references** in related existing pages (links back to the new page)
8. **Report**: list all files created/modified

A single source typically touches 5-15 wiki pages. Don't be lazy — update everything relevant.

### Query

When asked a question against the wiki:

1. **Read `src/content/docs/index.md`** to find relevant pages
2. **Read the relevant pages** — don't guess, actually read them
3. **Synthesize a complete answer** with citations to specific pages
4. **Ask the user** if the answer should be filed back into the wiki
5. If yes → create a new page in `queries/`, update `index.md`, append to `log.md`

### Lint

When asked to lint the wiki:

1. **Scan all pages** in `src/content/docs/` (excluding `index.md` and `log.md`)
2. **Check for**:
   - Contradictions between pages (e.g. plugin/acf.md vs plugin/acf-pro.md)
   - Broken relative links (links to non-existent pages)
   - Orphan pages with no inbound links from other pages
   - Missing cross-references (pages that should link to each other but don't)
   - Outdated information (e.g. mentions of WP versions older than current)
   - Pages missing `description` in frontmatter
   - Important concepts mentioned but lacking their own page
3. **Report findings** with specific file paths and suggested fixes
4. **Append to `log.md`**: `## [YYYY-MM-DD] lint | N issues found`

### Update

When asked to update existing wiki content:

1. **Identify affected pages** from new information or lint findings
2. **Propose changes with source attribution** before writing (what changes and why)
3. **Apply updates** to target pages and related linked pages if consistency requires it
4. **Update `src/content/docs/index.md`** if page summary meaning changed
5. **Append to `src/content/docs/log.md`**: `## [YYYY-MM-DD] update | Topic`

## Skills (Workspace)

These skills are available in this repository under `.agents/skills/`:

- `llm-wiki` — umbrella/orchestrator for full LLM Wiki workflow in this repo
- `wiki-init` — bootstrap/repair wiki structure and conventions
- `wiki-ingest` — ingest source into pages + cross-links + index/log updates
- `wiki-query` — answer strictly from wiki pages, optionally file to `queries/`
- `wiki-lint` — run health audit (contradictions, links, orphans, stale sections)
- `wiki-update` — revise existing pages with source-backed updates and consistency sweep

### Skill Routing

Use this mapping for task routing:

- "initialize/fix wiki structure" → `wiki-init`
- "ingest article/source" → `wiki-ingest`
- "answer from wiki" → `wiki-query`
- "lint wiki" → `wiki-lint`
- "apply new facts/fix outdated pages" → `wiki-update`
- "run end-to-end wiki maintenance" → `llm-wiki` (then route internally)

### Shared Skill Invariants

All wiki skills must enforce:

1. Read `src/content/docs/index.md` before query/update work
2. Never modify `raw/` documents
3. Keep `index.md` and `log.md` synchronized with operations
4. Maintain bidirectional cross-references where relevant
5. Keep wiki content in ru-RU and include required frontmatter (`title`, `description`)

## General Rules

- **Language**: All wiki content in Russian (ru-RU)
- **Tone**: Technical, точный, без воды
- **Code examples**: Always include working PHP/JS code with explanations
- **Sources**: When ingesting, preserve links to original sources
- **index.md format**: `- [Page Title](relative/path.md) — One-line summary`
- **log.md format**: `## [YYYY-MM-DD] operation | Title` followed by brief notes

## When New Categories Emerge

If content doesn't fit existing directories, propose a new one to the user before creating it. Example categories that might emerge: `hosting/`, `multisite/`, `block-editor/`, `cli/`.
