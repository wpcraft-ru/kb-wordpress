---
name: wiki-ingest
description: Use when adding a new source (file or URL) into the WP Knowledge wiki with synthesis, cross-linking, index updates, and log bookkeeping.
---

# Wiki Ingest

Compile a new source into the persistent wiki.

## Pre-condition

1. Read `src/content/docs/index.md` first.
2. Read related existing pages before writing.
3. Confirm source location:
   - **Local:** `raw/YYYY/MMDD/filename.{md,pdf}` — date-organized, immutable
   - **URL:** fetch with `summarize "URL" --extract --format md` (primary), fallback to `web_fetch` or `skills/jina-ai/extract.mjs`
4. If source is a URL, extract and save it to `raw/YYYY/MMDD/` (using current date), then ingest from that local copy.

## Process

1. Read the source fully.
2. Present key takeaways to user before writing:
- 3-5 main points.
- What to emphasize/de-emphasize.
- Potential contradictions with existing pages.
3. Create or update relevant pages in the correct category folder.
4. Add or update cross-references in both directions.
5. Update `src/content/docs/index.md` entries.
6. Append `src/content/docs/log.md`:
   - `## [YYYY-MM-DD] ingest | <source title>`
7. Report all touched files.

## Placement Heuristic

- Core concepts -> `core/`
- Plugin-specific -> `plugins/`
- Theme-specific -> `themes/`
- Security -> `security/`
- Performance -> `performance/`
- Reusable recipes -> `snippets/`

If none fit, propose a new category before creating it.

## Quality Bar

- Wiki content in ru-RU.
- No copy-paste dumps from source; synthesize.
- Every new page has frontmatter (`title`, `description`).
- Do NOT start pages with an `# H1` heading; Starlight renders frontmatter `title` as H1. Start content from `##`.
- Backlink pass is mandatory.

## Done Criteria

- Pages created/updated.
- Cross-links reconciled.
- `index.md` updated.
- `log.md` appended.
