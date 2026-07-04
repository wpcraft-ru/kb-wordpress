---
name: wiki-ingest
description: Use when adding a new source (file or URL) into the WP Knowledge wiki with synthesis, cross-linking, index updates, and log bookkeeping.
---

# Wiki Ingest

Compile a new source into the persistent wiki. **База знаний сфокусирована на WordPress open-source.** Источники с WordPress.com требуют адаптации.

## WordPress.com → Open-Source Adaptation

При ingest источников с wordpress.com/support:

- **Адаптировать:** планы/цены → self-hosted стоимость; managed хостинг → самостоятельное управление; .com-фичи → opensource-аналоги
- **Пометить .com-only:** AI Website Builder, Express Design Service, onboarding sessions — явно указать «⚠️ Только WordPress.com»
- **Сохранять:** концепции WordPress, плагины/темы из .org, технические руководства, WooCommerce
- **Уточнять через web_search:** если не уверен в opensource-эквиваленте

## Pre-condition

0. **⚠️ Всегда `summarize` для URL:** `summarize "URL" --extract --format md`. Не используй `web_fetch` или `browser`.
1. Read `src/content/docs/index.md` first.
2. Read related existing pages before writing.

## Step 1 — Inbox Sweep

Перед началом обработки проверить папку `inbox/` на наличие новых материалов:

1. `ls inbox/` — если в папке есть файлы (кроме `.gitignore` и `.DS_Store`), обработать каждый:
   - Для каждого файла определить текущую дату в формате `YYYY/MMDD` (например, `2026/0703`).
   - Создать папку `raw/YYYY/MMDD/` если её ещё нет.
   - Переместить файл из `inbox/` в `raw/YYYY/MMDD/` (командой `mv`).
   - Запомнить список перемещённых файлов — они станут источниками для Step 2.
2. Если в `inbox/` пусто — источник берётся из аргумента вызова (URL или путь к уже существующему raw-файлу).
3. **Для URL-источников:** `summarize "URL" --extract --format md`, сохранить результат в `raw/YYYY/MMDD/filename.md` (использовать текущую дату), затем ингестить из этой локальной копии. Fallback: `web_fetch` или `skills/jina-ai/extract.mjs` — только если `summarize` упал.

## Step 2 — Ingest Process

1. Read the source fully.
2. **Adapt .com → open-source** — если источник с WordPress.com, адаптируй контент (см. секцию выше). Используй web_search для уточнения opensource-эквивалентов.
3. Present key takeaways to user before writing:
   - 3-5 main points.
   - What to emphasize/de-emphasize.
   - Potential contradictions with existing pages.
4. Create or update relevant pages in the correct category folder.
5. Add or update cross-references in both directions.
6. Update `src/content/docs/index.md` entries.

## Step 3 — Log Entry

Append в `CHANGELOG.md` (в корне репозитория `kb/`) запись в формате:

```md
## [YYYY-MM-DD] ingest | <source title>

**Источники:** `raw/YYYY/MMDD/`
- `raw/YYYY/MMDD/file1.md` → `category/page1.md`
- `raw/YYYY/MMDD/file2.md` → `category/page2.md`

**Создано:**
- `category/page1.md` — краткое описание

**Обновлено:**
- `index.md` — что добавлено
- `category/index.md` — что добавлено

**Кросс-ссылки:** ...
```

Обязательно указать:
- Путь до raw-папки с источниками (`raw/YYYY/MMDD/`)
- Какие файлы попали в базу знаний и куда (маппинг raw → wiki-page)
- Список созданных и обновлённых wiki-страниц

## Step 4 — Report & Commit

После завершения ингеста:

1. **Показать список всех изменённых файлов** — отдельным блоком, сгруппированно:
   - Перемещённые из `inbox/` в `raw/`
   - Созданные wiki-страницы в `src/content/docs/`
   - Обновлённые wiki-страницы
   - Обновлённые `index.md`, `CHANGELOG.md`
2. **Предложить текст коммита** в формате:
   ```
   ingest: <краткое описание источников>

   Sources: raw/YYYY/MMDD/
   New pages: N
   Updated pages: N
   ```
3. **Спросить разрешения на коммит и пуш** в базу знаний. Не выполнять `git add`/`commit`/`push` без явного подтверждения пользователя.

## Placement Heuristic

- Core concepts -> `how-to/`
- FAQ/comparisons -> `faq/`
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
- **«Материалы и источники» обязательны:** каждая страница заканчивается ссылкой на оригинальный URL. Внешние ссылки автоматически получают `target="_blank"` при сборке — в исходниках пиши обычный markdown: `[текст](https://...)`.
- **Ссылки всегда с `.md`:** все относительные ссылки на wiki-страницы пиши с расширением `.md` (напр. `[text](./page.md)`). Для index-файлов: `./category/index.md`. НИКОГДА не пиши без `.md` или с `/` в конце. Плагин `remarkStripMdLinks` сам уберёт расширения при сборке.
- Backlink pass is mandatory.

## Done Criteria

- Inbox swept (files moved to `raw/YYYY/MMDD/`).
- Pages created/updated.
- Cross-links reconciled.
- `index.md` updated.
- `CHANGELOG.md` appended with raw→wiki mapping.
- Changed files list shown to user.
- Commit message proposed, user asked for permission to commit & push.
