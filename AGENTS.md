# AGENTS.md — WP Knowledge Base

LLM Wiki schema for the WordPress knowledge base.

> **⚠️ FETCH RULE:** Для получения ЛЮБОГО контента с URL всегда используй `summarize "URL" --extract --format md`. Не используй `web_fetch`, `browser`, или другие инструменты для первичного извлечения — только `summarize`. Fallback: `web_fetch` допустим только если `summarize` упал с ошибкой.

## Wiki Structure

```
wp-knowledge/
├── raw/                       # Immutable source documents — READ ONLY
│   └── YYYY/                  # Year (e.g. 2026)
│       └── MMDD/              # Month + Day (e.g. 0501 = May 1)
│           └── file.{md,pdf}  # Source files
├── src/content/docs/          # ★ WIKI PAGES — you write and maintain these
│   ├── plugins/               # Plugin-specific knowledge
│   ├── themes/                # Theme development
│   ├── security/              # Security best practices
│   ├── performance/           # Performance optimization
│   ├── snippets/              # Code snippets and recipes
│   ├── queries/               # Filed answers from user queries
│   ├── how-to/                # Руководства (how-to guides)
│   ├── faq/                   # FAQ и сравнения
│   ├── index.md               # Catalog of all pages (update on every ingest)
│   └── log.md                 # Chronological operations log (append on every operation)
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

### Источники (Source Attribution)

Каждая wiki-страница должна заканчиваться секцией **«Материалы и источники»**:

```md
## Материалы и источники

- [Оригинальная статья](https://wordpress.com/support/...)
```

- Ссылка на оригинальный URL (из frontmatter `source` raw-файла)
- Если страница собрана из нескольких источников — перечислить все

### Code Blocks

Use fenced code blocks with language:

```php
add_filter('the_content', function($content) {
    return '<div class="wrapper">' . $content . '</div>';
});
```

## Operations

### WordPress.com → Open-Source Adaptation

**База знаний фокусируется на WordPress open-source (self-hosted WordPress.org).**

Многие источники (особенно с wordpress.com/support) описывают платный сервис WordPress.com. При ingest таких материалов:

**Что адаптировать:**
- **Планы/цены WordPress.com** → заменить на информацию о стоимости self-hosted (хостинг, домен, SSL)
- **Managed hosting (бэкапы, безопасность, обновления)** → отметить, что на self-hosted это делается самостоятельно или через плагины
- **AI Website Builder, Express Design Service** → пометить как .com-only фичи, не имеющие прямого opensource-аналога
- **Бесплатный поддомен .wordpress.com** → любой домен при self-hosted
- **Happiness Engineers, 24/7 support** → форумы WordPress.org, саппорт хостинга, плагинов/тем
- **Встроенные функции (Stats, Newsletter, Writing Prompts)** → предложить opensource-аналоги (плагины)
- **Onboarding sessions** → пометить как .com-only

**Что сохранять без изменений:**
- Концепции WordPress (posts, pages, blocks, themes, plugins) — одинаковы для .com и .org
- Информацию о плагинах и темах (если доступны в .org репозитории)
- Технические руководства (CSS, PHP, WP-CLI, GitHub Deployments)
- WooCommerce — работает одинаково

**Адаптация через web_search:**
Если не уверен в opensource-эквиваленте — используй `web_search` для уточнения. Например:
- «WordPress open source alternative to Jetpack Stats»
- «free WordPress plugin for automated backups»
- «WordPress.org security best practices without managed hosting»

**Маркировка .com-only:**
Если функция существует только на WordPress.com — явно помечай: «⚠️ Только WordPress.com». Не удаляй информацию, но чётко обозначай границы применимости.

### Source Extraction

When fetching a URL for ingest, use tools in priority order:

1. **Primary:** `summarize "URL" --extract --format md` — best image/media preservation
2. **Fallback:** `web_fetch` with `extractMode: "markdown"`
3. **Last resort:** `skills/jina-ai/extract.mjs <URL>` — for Cloudflare-protected sites

Save extracted content to `raw/YYYY/MMDD/` before ingesting.

### Ingest

When asked to ingest a source:

0. **Fetch the source** — use extraction tools above if URL, save to `raw/YYYY/MMDD/`
1. **Read the source** from `raw/YYYY/MMDD/` or provided URL
2. **Adapt .com → open-source** — если источник с WordPress.com, адаптируй согласно правилам выше
3. **Read `src/content/docs/index.md`** to understand current wiki structure
4. **Discuss key takeaways** with the user before writing
5. **Create/update pages** in the appropriate `src/content/docs/` subdirectory:
   - If it's a core concept → `how-to/`
   - If it's a FAQ/comparison → `faq/`
   - If it's about a specific plugin → `plugins/`
   - If it's a code recipe → `snippets/`
   - If a new category is needed → propose it to the user
   - **Every page must include «Материалы и источники»** at the bottom: link to original URL(s)
6. **Update `src/content/docs/index.md`** — add entry with relative link + one-line summary
7. **Append to `src/content/docs/log.md`**: `## [YYYY-MM-DD] ingest | Title`
8. **Add cross-references** in related existing pages (links back to the new page)
9. **Report**: list all files created/modified

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
- `summarize` — install and use the `summarize` CLI for web content extraction to Markdown
- `wiki-init` — bootstrap/repair wiki structure and conventions
- `wiki-ingest` — ingest source into pages + cross-links + index/log updates
- `wiki-query` — answer strictly from wiki pages, optionally file to `queries/`
- `wiki-lint` — run health audit (contradictions, links, orphans, stale sections)
- `wiki-update` — revise existing pages with source-backed updates and consistency sweep

### Skill Routing

Use this mapping for task routing:

- "install/setup/use summarize tool" → `summarize`
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

- **Ссылки в исходниках — всегда с `.md`:** все относительные ссылки на wiki-страницы (`[text](./path/page.md)`) пишутся с расширением `.md`. Для index-файлов каталогов — `./category/index.md`. Это нужно для работы ссылок в VS Code и GitHub. Плагин `remarkStripMdLinks` при сборке Astro сам уберёт `.md` и `/index.md`, скорректирует глубину путей и добавит `target="_blank"` на все внешние ссылки. НИКОГДА не пиши ссылки без `.md`, НИКОГДА не пиши ссылки с `/` в конце вместо `.md`.
- **Focus:** База знаний про **WordPress open-source (WordPress.org / self-hosted)**. Материалы с WordPress.com адаптировать: заменять .com-специфичные фичи на opensource-аналоги, помечать .com-only функции.
- **Language**: All wiki content in Russian (ru-RU)
- **Tone**: Technical, точный, без воды
- **Code examples**: Always include working PHP/JS code with explanations
- **Sources**: When ingesting, preserve links to original sources
- **index.md format**: `- [Page Title](relative/path.md) — One-line summary`
- **log.md format**: `## [YYYY-MM-DD] operation | Title` followed by brief notes
- **README.md sync**: При ЛЮБОМ изменении `src/content/docs/index.md` (добавление/удаление/переименование страниц) — синхронизируй оглавление в `README.md` в секцию `## Оглавление`. Ссылки в README должны быть с префиксом `src/content/docs/` (от корня репо), чтобы работали в VS Code и GitHub. Ссылки в index.md — относительные (`./category/page.md`) для Starlight.

## When New Categories Emerge

If content doesn't fit existing directories, propose a new one to the user before creating it. Example categories that might emerge: `hosting/`, `multisite/`, `block-editor/`, `cli/`.
