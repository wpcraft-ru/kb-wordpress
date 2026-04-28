# WP Knowledge

База знаний по WordPress на основе официальных источников с модерацией от опытных специалистов.

## Стек
- **Repo:** https://github.com/wpcraft-ru/wp-kb
- **SSG:** Astro + Starlight
- **Хостинг:** GitHub Pages
- **Поиск:** Pagefind (локальный) → Algolia DocSearch (после одобрения)
- **Управление:** OpenClaw skill `llm-wiki`

## Структура

```
wp-knowledge/
├── raw/                    # Immutable источники
├── src/content/docs/       # Wiki pages (LLM пишет и поддерживает)
├── AGENTS.md               # LLM Wiki schema
├── astro.config.mjs        # Конфиг сайта
└── .github/workflows/      # CI/CD
```

## Команды

```bash
npm install
npm run dev       # Локальный сервер
npm run build     # Сборка сайта
npm run preview   # Предпросмотр сборки
```

## Лицензия

MIT
