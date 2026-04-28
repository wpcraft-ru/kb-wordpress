# RFC: LLM Wiki Knowledge Base — WordPress

**Status:** DRAFT  
**Author:** Aio + Анатолий  
**Date:** 2026-04-28  
**Repo:** `wp-knowledge`

---

## 1. Overview

Создать персональную базу знаний по WordPress, построенную на основе **LLM Wiki**. База знаний живёт в git-репозитории, автоматически генерирует статический сайт (Astro + Starlight), публикуется на GitHub Pages, использует Algolia для поиска, и пополняется/поддерживается через OpenClaw skill `llm-wiki`.

---

## 2. Что мы строим

```
┌──────────────────────────────────────────────────────┐
│                    OpenClaw (AI)                     │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │
│  │  Ingest  │  │  Query   │  │  Lint             │  │
│  │  (read   │  │  (search │  │  (health-check)   │  │
│  │  source, │  │  wiki,   │  │                   │  │
│  │  write   │  │  answer, │  │                   │  │
│  │  pages)  │  │  file)   │  │                   │  │
│  └────┬─────┘  └────┬─────┘  └────────┬──────────┘  │
│       │             │                 │              │
│       ▼             ▼                 ▼              │
│  ┌─────────────────────────────────────────────────┐ │
│  │              Git Repository                      │ │
│  │  raw/        src/content/docs/    AGENTS.md      │ │
│  │  (sources)   (wiki pages)        (schema)       │ │
│  └──────────────────────┬──────────────────────────┘ │
└─────────────────────────┼────────────────────────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │  Astro + Starlight    │
              │  (SSG — build)        │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │  GitHub Pages         │
              │  wp.ddpa.ru (optional)│
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │  Algolia DocSearch    │
              │  (search index)       │
              └───────────────────────┘
```

---

## 3. Repository Structure

```
wp-knowledge/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI: build + deploy to GitHub Pages
├── raw/                            # Immutable source documents
│   ├── articles/
│   │   └── wp-6-5-hooks-changes.md
│   ├── papers/
│   └── assets/
│       └── screenshots/
├── src/
│   ├── content/
│   │   └── docs/                   # ★ WIKI PAGES (LLM writes here)
│   │       ├── index.md            # Catalog of all pages
│   │       ├── log.md              # Chronological log
│   │       ├── core/               # Core WordPress concepts
│   │       │   ├── hooks.md
│   │       │   ├── filters.md
│   │       │   ├── actions.md
│   │       │   ├── rest-api.md
│   │       │   └── database.md
│   │       ├── plugins/            # Plugin-specific knowledge
│   │       │   ├── acf.md
│   │       │   ├── woocommerce.md
│   │       │   └── yoast-seo.md
│   │       ├── themes/             # Theme development
│   │       │   ├── block-themes.md
│   │       │   └── template-hierarchy.md
│   │       ├── security/
│   │       ├── performance/
│   │       ├── snippets/           # Code snippets & recipes
│   │       └── queries/            # Good answers filed back
│   └── content/
│       └── config.ts               # Starlight content collections
├── public/
│   ├── favicon.svg
│   └── CNAME                       # wp.ddpa.ru (optional custom domain)
├── AGENTS.md                       # LLM Wiki Schema
├── astro.config.mjs                # Starlight + Algolia config
├── package.json
└── README.md
```

---

## 4. Astro + Starlight — Site Generator

### 4.1 Why Starlight

- Нативный Markdown/MDX — wiki pages = site pages, один источник
- Sidebar, навигация, breadcrumbs, тёмная тема из коробки
- Pagefind (локальный поиск) пока не подключен Algolia
- `@astrojs/starlight-docsearch` — официальный плагин Algolia
- Zero JS на клиенте, мгновенная загрузка
- Анатолий уже знает Astro

### 4.2 astro.config.mjs

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import docsearch from "@astrojs/starlight-docsearch";

export default defineConfig({
  // GitHub Pages с кастомным доменом или <user>.github.io/<repo>
  site: "https://wp.ddpa.ru",
  base: "/",

  integrations: [
    starlight({
      title: "WP Knowledge",
      description: "Персональная база знаний по WordPress",
      defaultLocale: "ru",
      locales: {
        ru: { label: "Русский" },
      },
      sidebar: [
        {
          label: "Ядро WordPress",
          items: [
            { slug: "core/hooks" },
            { slug: "core/filters" },
            { slug: "core/actions" },
            { slug: "core/rest-api" },
            { slug: "core/database" },
          ],
        },
        {
          label: "Плагины",
          collapsed: true,
          autogenerate: { directory: "plugins" },
        },
        {
          label: "Темы",
          collapsed: true,
          autogenerate: { directory: "themes" },
        },
        {
          label: "Сниппеты",
          collapsed: true,
          autogenerate: { directory: "snippets" },
        },
        {
          label: "Безопасность",
          collapsed: true,
          autogenerate: { directory: "security" },
        },
        {
          label: "Производительность",
          collapsed: true,
          autogenerate: { directory: "performance" },
        },
      ],
      plugins: [
        docsearch({
          appId: import.meta.env.ALGOLIA_APP_ID,
          apiKey: import.meta.env.ALGOLIA_API_KEY,
          indexName: import.meta.env.ALGOLIA_INDEX_NAME,
        }),
      ],
    }),
  ],
});
```

> **Note:** Sidebar можно сделать полностью autogenerate (без ручного списка), тогда новые страницы автоматически появляются в навигации. Ручной список даёт контроль над порядком. Выбираем autogenerate для минимального трения при ingest.

### 4.3 package.json

```json
{
  "name": "wp-knowledge",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "dependencies": {
    "@astrojs/starlight": "^0.33.0",
    "@astrojs/starlight-docsearch": "^0.3.0",
    "astro": "^5.7.0"
  }
}
```

---

## 5. Algolia DocSearch — Search

### 5.1 Схема подключения

1. **Подать заявку** на [docsearch.algolia.com](https://docsearch.algolia.com/apply)
   - URL сайта: `https://wp.ddpa.ru` (или GitHub Pages URL)
   - Указать что это документация/база знаний
   - Email владельца домена (для верификации)

2. **Получить credentials:** `appId`, `apiKey` (search-only), `indexName`

3. **Добавить в `.env`:**
   ```
   ALGOLIA_APP_ID=XXX
   ALGOLIA_API_KEY=XXX
   ALGOLIA_INDEX_NAME=XXX
   ```

4. **Краулер Algolia** автоматически индексирует сайт после деплоя
   - Расписание: можно настроить weekly или запускать вручную
   - Альтернатива: триггерить краулер из GitHub Actions после деплоя через Algolia Crawler API

### 5.2 DocSearch vs самостоятельный индекс

| | DocSearch | Свой индекс |
|---|---|---|
| Стоимость | Бесплатно (open source / doc) | Free tier: 10K req/mo |
| Настройка краулера | Algolia хостит | Сам конфигурируешь |
| Кастомизация | Ограничена | Полная |
| Когда использовать | Публичный сайт | Приватный / больше контроля |

**Выбор:** DocSearch для начала. Если не одобрят заявку (бывает для маленьких сайтов) — переходим на свой краулер.

### 5.3 Fallback: Pagefind

Starlight включает Pagefind из коробки — локальный поиск без внешних сервисов. Работает пока не подключен Algolia. Можно оставить оба: Pagefind как fallback, DocSearch как primary.

---

## 6. GitHub Pages — Deployment

### 6.1 GitHub Actions workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:      # ручной запуск

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: "npm"
      - run: npm ci
      - run: npm run build
        env:
          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}
          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
          ALGOLIA_INDEX_NAME: ${{ secrets.ALGOLIA_INDEX_NAME }}
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - uses: actions/deploy-pages@v4
```

### 6.2 Настройка GitHub Pages

- Settings → Pages → Source: **GitHub Actions**
- Custom domain: `wp.ddpa.ru` (опционально)
  - В DNS: CNAME `wp` → `anatolii-iu.github.io`
  - В репозитории: файл `public/CNAME` с `wp.ddpa.ru`
- Enforce HTTPS: ✅

### 6.3 Без кастомного домена

URL будет `https://anatolii-iu.github.io/wp-knowledge/`  
Нужно установить `base: "/wp-knowledge/"` в `astro.config.mjs`

---

## 7. LLM Wiki Integration

### 7.1 AGENTS.md — Schema

Файл `AGENTS.md` в корне репозитория — это контракт для LLM. Он описывает:
- Структуру вики
- Формат страниц
- Правила ingest/query/lint

```markdown
# AGENTS.md — WP Knowledge Base

## Wiki Structure

- `raw/` — immutable source documents. Read only.
- `src/content/docs/` — wiki pages. You write and maintain these.
  - `index.md` — catalog of all pages. Update on every ingest.
  - `log.md` — chronological log. Append on every operation.
  - `core/` — WordPress core concepts
  - `plugins/` — plugin-specific knowledge
  - `themes/` — theme development
  - `security/` — security best practices
  - `performance/` — performance optimization
  - `snippets/` — code snippets and recipes
  - `queries/` — filed answers from queries

## Page Format

Every wiki page (except index.md and log.md) starts with frontmatter:

---
title: "Page Title"
description: "One-line summary"
tags: ["hooks", "actions"]
created: 2026-04-28
updated: 2026-04-28
sources: 0
---

## Markdown content here...

## Related pages — use [[wikilinks]] syntax

- Use Obsidian-compatible [[wikilinks]] for cross-references
- Starlight converts them to proper links at build time

## Operations

### Ingest
When asked to ingest a source:
1. Read the source from `raw/` or provided URL
2. Discuss key takeaways with the user
3. Create/update summary pages in appropriate `src/content/docs/` subdirectory
4. Update `src/content/docs/index.md` — add entry with link + one-line summary
5. Append entry to `src/content/docs/log.md`: `## [DATE] ingest | Title`
6. Update `updated` field in pages you modify
7. Add cross-references ([[wikilinks]]) in related pages
8. Increment `sources` count in frontmatter

### Query
When asked a question:
1. Read `src/content/docs/index.md` to find relevant pages
2. Read relevant pages and synthesize answer with citations
3. If answer is valuable, file it as new page in `queries/`
4. Update index.md with the new page
5. Append query to log.md

### Lint
When asked to lint:
1. Scan wiki for: contradictions, stale claims, orphan pages, missing cross-refs
2. Flag issues and suggest fixes
3. Update log.md with lint results
```

### 7.2 index.md — Catalog

```markdown
---
title: "Index"
description: "Каталог всех страниц базы знаний"
---

# WP Knowledge — Index

## Core
- [Hooks](core/hooks.md) — Система хуков WordPress: actions и filters
- [Filters](core/filters.md) — Фильтры: apply_filters, add_filter, приоритеты
- [Actions](core/actions.md) — Actions: do_action, add_action, порядок выполнения
- [REST API](core/rest-api.md) — WP REST API: endpoints, authentication, custom routes
- [Database](core/database.md) — Структура БД, $wpdb, мета-таблицы

## Plugins
- [ACF](plugins/acf.md) — Advanced Custom Fields: поля, группы, API
- [WooCommerce](plugins/woocommerce.md) — Хуки, шаблоны, производительность
- [Yoast SEO](plugins/yoast-seo.md) — SEO плагин: API, фильтры, sitemap

## Themes
- [Block Themes](themes/block-themes.md) — Разработка блоковых тем: theme.json, шаблоны
- [Template Hierarchy](themes/template-hierarchy.md) — Иерархия шаблонов WordPress

## Snippets
- (страницы добавляются автоматически при ingest)

## Queries
- (ответы из query filing)
```

### 7.3 log.md — Chronology

```markdown
---
title: "Log"
description: "Хронология всех операций с базой знаний"
---

# Operations Log

## [2026-04-28] init | WP Knowledge Base
- Создана структура репозитория
- Настроен Astro + Starlight
- Созданы index.md и log.md
```

---

## 8. OpenClaw Skill: `llm-wiki`

### 8.1 Skill Interface

```
llm-wiki --repo <path> <operation> [arguments]

Operations:
  ingest <source-path-or-url>    — Process a source into the wiki
  query  <question>              — Query the wiki and optionally file answer
  lint                           — Health-check the wiki
```

### 8.2 Skill Implementation (SKILL.md)

Файл: `skills/llm-wiki/SKILL.md`

```markdown
# llm-wiki

LLM Wiki — personal knowledge base manager for a persistent, compounding wiki between sources and chat.

## Parameters

- `repo` — path to the knowledge base repository (e.g., `~/projects/wp-knowledge`)
- `operation` — `ingest`, `query`, or `lint`
- `source` — path to source file or URL (for ingest)
- `question` — natural language question (for query)

## Operations

### ingest <source>
1. Read AGENTS.md in repo root for wiki schema and conventions
2. Read raw/<source> or fetch URL
3. Read index.md to understand existing wiki structure
4. Write summary page(s) in src/content/docs/ appropriate subdirectory
5. Update index.md with new entries
6. Append log.md
7. Update cross-references in related existing pages
8. Report: list of files created/modified

### query <question>
1. Read index.md to find relevant pages
2. Read relevant pages
3. Synthesize answer with citations
4. Ask user if answer should be filed back — if yes, create page in queries/
5. Update index.md and log.md

### lint
1. Scan all wiki pages
2. Check for: contradictions, stale data, orphan pages, missing cross-refs
3. Report findings with suggested fixes
```

---

## 9. Content Workflow — E2E

### 9.1 Ingest: добавить новую статью

```
User: "llm-wiki ingest raw/articles/wp-6-5-hooks.md"
  │
  ├─ LLM reads AGENTS.md (schema)
  ├─ LLM reads raw/articles/wp-6-5-hooks.md
  ├─ LLM reads index.md (current catalog)
  ├─ LLM writes:
  │   ├─ src/content/docs/core/hooks.md (update: новые хуки 6.5)
  │   └─ src/content/docs/core/wp-6-5.md (new: обзор версии)
  ├─ LLM updates:
  │   ├─ index.md (new entries)
  │   └─ log.md (ingest record)
  ├─ User reviews changes
  └─ User commits + pushes
       │
       └─ GitHub Actions: build → deploy → Algolia re-crawl
```

### 9.2 Query: задать вопрос

```
User: "llm-wiki query какие хуки срабатывают при сохранении поста"
  │
  ├─ LLM reads index.md
  ├─ LLM finds: core/hooks.md, core/actions.md
  ├─ LLM reads those pages
  ├─ LLM synthesizes answer:
  │   "save_post (до meta), wp_insert_post_data (до SQL),
  │    post_updated (после), updated_post_meta (для meta полей)"
  ├─ User: "сохрани как страницу"
  └─ LLM files → queries/post-save-hooks-order.md
       └─ Updates index.md + log.md
```

### 9.3 Lint: проверка здоровья

```
User: "llm-wiki lint"
  │
  ├─ LLM scans all pages
  ├─ Finds:
  │   ├─ core/rest-api.md ссылается на несуществующую страницу
  │   └─ plugins/acf.md противоречит plugins/acf-pro.md
  └─ Report: "2 issues found: broken link, contradiction"
```

---

## 10. Open Questions

| # | Вопрос | Варианты |
|---|--------|----------|
| 1 | Делать ли sidebar autogenerate или ручной? | Autogenerate для удобства — новые страницы появляются сами. Если нужен порядок — ручной. |
| 2 | Git commit делает LLM или человек? | Человек (по текущим правилам). LLM только пишет файлы. |
| 3 | Custom domain (`wp.ddpa.ru`) или GitHub Pages URL? | Custom domain удобнее, но требует DNS. GitHub Pages URL проще для старта. |
| 4 | Один Org repo или много per-project? | Отдельный репозиторий на каждую базу знаний. |
| 5 | Что если Algolia DocSearch не одобрят заявку? | Pagefind (локальный поиск, уже в Starlight) как постоянный fallback. Либо свой Algolia индекс. |

---

## 11. Implementation Plan

### Phase 1 — Scaffold (сейчас)
- [ ] Создать репозиторий `wp-knowledge` на GitHub
- [ ] Инициализировать Astro + Starlight (`npm create astro@latest -- --template starlight`)
- [ ] Настроить `astro.config.mjs`
- [ ] Создать структуру директорий
- [ ] Написать `AGENTS.md`
- [ ] Создать `index.md` и `log.md`

### Phase 2 — Deploy
- [ ] Настроить GitHub Actions workflow
- [ ] Настроить GitHub Pages
- [ ] Подтвердить что сайт собирается и публикуется

### Phase 3 — Search
- [ ] Подать заявку на Algolia DocSearch
- [ ] Установить `@astrojs/starlight-docsearch`
- [ ] Проверить поиск

### Phase 4 — OpenClaw Skill
- [ ] Создать `skills/llm-wiki/SKILL.md`
- [ ] Протестировать ingest с одной статьёй
- [ ] Протестировать query
- [ ] Протестировать lint

### Phase 5 — Maintenance
- [ ] Регулярно выполнять `llm-wiki lint`
- [ ] Поддерживать актуальность `index.md` и `log.md`

---

## 12. References

- [Starlight Docs](https://starlight.astro.build)
- [Starlight DocSearch Plugin](https://starlight.astro.build/guides/site-search/)
- [Algolia DocSearch](https://docsearch.algolia.com)
- [Astro GitHub Pages Deploy](https://docs.astro.build/en/guides/deploy/github/)
