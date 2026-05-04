# DESIGN.md — Исследовательская подборка

**Дата:** 2026-05-04  
**Тема:** Практика использования DESIGN.md файлов для AI-агентов

---

## 1. Что такое DESIGN.md

DESIGN.md — это markdown-файл, описывающий дизайн-систему в формате, который AI-агенты могут читать и применять для генерации UI. Концепция появилась в Google Stitch (2025) и была стандартизирована как open-source спецификация в апреле 2026 (google-labs-code/design.md).

Файл комбинирует:
- **YAML front matter** — машинно-читаемые design-токены (цвета, типографика, отступы)
- **Markdown body** — человеко-читаемое обоснование и правила применения

### Для чего нужен
- Решает проблему «галлюцинаций дизайна» у AI-агентов (непоследовательные цвета, шрифты, отступы между промптами)
- Даёт единый источник истины для визуальной идентичности
- Работает с Claude Code, Cursor, v0, Lovable, Stitch и другими AI-инструментами

### Аналогии
| Файл | Читает | Описывает |
|------|--------|-----------|
| AGENTS.md | Coding agents | Как строить проект |
| DESIGN.md | Design agents | Как должен выглядеть проект |
| README.md | Люди | Что делает проект |

---

## 2. Официальная спецификация Google (google-labs-code/design.md)

**Репозиторий:** https://github.com/google-labs-code/design.md  
**Версия:** alpha  
**CLI:** `npx @google/design.md`

### Структура файла

**YAML front matter (токены):**
```yaml
---
name: Heritage
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 3rem
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
---
```

**Markdown sections (в порядке):**
1. Overview / Brand & Style
2. Colors
3. Typography
4. Layout / Layout & Spacing
5. Elevation & Depth
6. Shapes
7. Components
8. Do's and Don'ts

### Типы токенов
- **Color:** `#` + hex (sRGB), напр. `"#1A1C1E"`
- **Dimension:** number + unit, напр. `48px`, `-0.02em`
- **Token Reference:** `{path.to.token}`, напр. `{colors.primary}`
- **Typography:** object с fontFamily, fontSize, fontWeight, lineHeight, letterSpacing

### CLI команды
```bash
# Линтинг + проверка WCAG контраста
npx @google/design.md lint DESIGN.md

# Сравнение версий
npx @google/design.md diff DESIGN.md DESIGN-v2.md

# Экспорт в Tailwind / DTCG
npx @google/design.md export --format json-tailwind DESIGN.md > tailwind.theme.json
npx @google/design.md export --format css-tailwind DESIGN.md > theme.css
npx @google/design.md export --format dtcg DESIGN.md > tokens.json

# Вывод спецификации
npx @google/design.md spec
```

### Линтер — 7 правил
| Rule | Severity | Что проверяет |
|------|----------|---------------|
| broken-ref | error | Несуществующие токен-ссылки |
| missing-primary | warning | Нет primary цвета |
| contrast-ratio | warning | WCAG AA контраст < 4.5:1 |
| orphaned-tokens | warning | Токены определены, но не используются |
| token-summary | info | Сводка по токенам |
| missing-sections | info | Отсутствуют optional-секции |
| missing-typography | warning | Есть цвета, но нет типографики |
| section-order | warning | Секции вне канонического порядка |

---

## 3. TypeUI — генератор DESIGN.md / SKILL.md

**Репозиторий:** https://github.com/bergside/typeui  
**Сайт:** https://www.typeui.sh  
**Лицензия:** MIT (базовый), Pro-версия за деньги

### Что делает
CLI-инструмент для генерации, обновления и скачивания SKILL.md / DESIGN.md файлов с дизайн-системами.

### Команды
```bash
npx typeui.sh generate           # Интерактивная генерация с нуля
npx typeui.sh generate --format design  # В формате DESIGN.md
npx typeui.sh update             # Обновление существующего файла
npx typeui.sh list               # Список доступных дизайн-скиллов
npx typeui.sh pull [slug]        # Скачивание из реестра
npx typeui.sh randomize          # Полностью рандомная дизайн-система
npx typeui.sh generate --dry-run  # Превью без записи файлов
```

### Поддерживаемые провайдеры
Cursor, Claude Code, Codex, OpenCode, Gemini CLI, Mistral Vibe

### Секции генерируемого файла
1. Mission — цель дизайн-системы
2. Brand — контекст продукта и бренда
3. Style Foundations — визуальные токены (стиль, типографика, цвета, отступы)
4. Accessibility — стандарты доступности
5. Writing Tone — тон текстов
6. Rules: Do — обязательные практики
7. Rules: Don't — антипаттерны
8. Expected Behavior — ожидаемое поведение при принятии решений
9. Guideline Authoring Workflow — процесс создания гайдлайнов
10. Required Output Structure — формат ответа
11. Component Rule Expectations — детали компонентов
12. Quality Gates — критерии качества
13. Example Constraint Language — стандартизация формулировок

### Интерактивные шаги генерации
1. **Product basics** — название, описание бренда
2. **Visual style** — пресеты (modern, minimal, clean, bold, playful, enterprise и т.д.)
3. **Typography** — масштаб, UI-шрифт, display-шрифт, mono-шрифт, веса
4. **Color palette** — роли + hex-значения
5. **Spacing** — масштаб (4/8/12/16/24/32, 8pt baseline, compact/comfortable)
6. **Components** — семейства (buttons, inputs, cards, tables, modals, navigation...)
7. **Accessibility** — WCAG 2.2 AA, keyboard-first, focus states, reduced-motion...
8. **Writing tone** — concise, confident, helpful, professional...
9. **Rules** — do/don't

### 48 дизайн-скиллов
Spacious, Neumorphism, Professional, Modern, Energetic, Tetris, Fantasy, Glassmorphism, Creative, Expressive, Paper, Corporate, Dithered, Storytelling, Luxury, Elegant, Cosmic, Clean, Colorful, Levels (indiehacker/Pieter Levels style), Vibrant, Premium, Neon, Bento, Sleek, Vintage, Pacman, Futuristic, Retro, Dramatic, Minimal, Perspective + ещё ~16

---

## 4. awesome-design-md (VoltAgent)

**Репозиторий:** https://github.com/voltagent/awesome-design-md  
**Сайт:** https://getdesign.md  
**Лицензия:** MIT

### Что это
Коллекция готовых DESIGN.md файлов, извлечённых из реальных сайтов. Более 50 брендов.

### Структура каждого DESIGN.md
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

### Дополнительно к каждому DESIGN.md
- `preview.html` — визуальный каталог цветов, типографики, кнопок, карточек
- `preview-dark.html` — тот же каталог с тёмной темой

### Категории брендов
**AI & ML:** Claude, Cohere, ElevenLabs, Minimax, Mistral AI, Ollama, OpenCode AI, Replicate, RunwayML, Together AI, VoltAgent, xAI

**Developer Tools:** Cursor, Expo, Lovable, Raycast, Superhuman, Vercel, Warp

**Infra & Data:** ClickHouse, Composio, HashiCorp, MongoDB, PostHog, Sanity, Sentry, Supabase

**SaaS:** Cal.com, Intercom, Linear, Mintlify, Notion, Resend, Zapier, Airtable

**Design Tools:** Clay, Figma, Framer, Miro, Webflow

**Fintech & Crypto:** Binance, Coinbase, Kraken, Mastercard, Revolut, Stripe, Wise

**E-commerce & Retail:** Airbnb, Meta, Nike, Shopify, Starbucks

**Big Tech:** Apple, IBM, NVIDIA, Pinterest, PlayStation, SpaceX, Spotify, The Verge, Uber, Vodafone, WIRED

**Automotive:** BMW, BMW M, Bugatti, Ferrari, Lamborghini, Renault, Tesla

---

## 5. Google Stitch

**Сайт:** https://stitch.withgoogle.com  
**Документация:** https://stitch.withgoogle.com/docs/design-md/

### Как работает
Stitch автоматически загружает DESIGN.md перед каждой генерацией. Gemini получает промпт + содержимое файла как контекст.

### Возможности
- Автогенерация DESIGN.md из описательного промпта
- Обновление файла при изменении дизайна
- Ручное редактирование (обычный markdown)

---

## 6. Лучшие практики (best practices)

### Из designproject.io:
1. **Начинать с реального продукта** — скриншоты 5 экранов, реальные hex-значения из кода
2. **Писать файл в репозитории** — `/design.md` в корне, не в Notion
3. **Co-author с инженерами** — дизайн-спек не является дизайн-доставкой, это общий контракт
4. **Don'ts важнее Do's** — каждая плохая генерация AI → новый don't в файле
5. **Тестировать с AI-инструментами** — генерировать с файлом и без, сравнивать

### Из Department of Product:
- Файл разделяет "what" (токены для машин) и "why" (prose для суждений)
- Токены = точные значения (hex, px). Prose = контекст для edge cases
- Роль дизайна меняется: больше фокус на дизайн-системы, меньше на pixel-perfect

### Из Addy Osmani (My LLM Coding Workflow):
- Claude Skills как эволюция DESIGN.md — модульные, переиспользуемые инструкции
- Frontend-design skill решает проблему "фиолетового AI-эстетика"
- Контекст — король: больше upstream-контекста = меньше правок downstream

### Общие рекомендации:
- **Конкретные значения**, не диапазоны: "button radius: 8px always", не "6-12px"
- **Явные don'ts**: "no full-uppercase headers", "no two primary buttons per view"
- **Семантические имена токенов**: primary.900, not just "blue"
- **Git-версионирование** — отслеживание изменений через коммиты/PR

---

## 7. Другие инструменты и ресурсы

### Генераторы
- **Banani AI** — AI UI editor, автоматически генерирует/обновляет design.md; есть MCP-сервер
- **TypeUI** — CLI генератор (описан выше)
- **DESIGNmd.ai** — платформа с 100+ бесплатными дизайн-системами, теги: dark, saas, minimal, fintech

### Связанные концепции
- **W3C Design Tokens Format** — стандарт для токенов; DESIGN.md экспортирует в DTCG
- **Style Dictionary (Amazon)** — кросс-платформенная генерация токенов
- **Claude Skills** — модульные инструкции для Claude Code
- **AGENTS.md** — аналог для coding-агентов

### Статьи
- [Department of Product — DESIGN.md Explained](https://departmentofproduct.substack.com/p/designmd-explained-the-format-reshaping) — глубокий разбор формата и его влияния
- [Addy Osmani — My LLM Coding Workflow](https://addyosmani.com/blog/ai-coding-workflow/) — DESIGN.md в контексте AI-кодирования
- [designproject.io — design.md file guide](https://designproject.io/blog/design-md-file/) — практическое руководство
- [Banani — What Is Design.md](https://www.banani.co/blog/design-md-guide) — обзор с примерами
- [MindStudio — Google Stitch Design.md](https://www.mindstudio.ai/blog/what-is-google-stitch-design-md-file/) — как Stitch использует файл

---

## 8. Структура идеального DESIGN.md (рекомендация)

```markdown
---
name: <Product Name>
version: alpha
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  accent: "#B8422E"
  neutral: "#F7F5F2"
  success: "#2E7D32"
  warning: "#F9A825"
  danger: "#C62828"
  surface: "#FFFFFF"
  surface-alt: "#F8F9FA"
typography:
  display-xl: { fontFamily: "Space Grotesk", fontSize: 3.5rem, fontWeight: 700 }
  h1: { fontFamily: "Inter", fontSize: 2.25rem, fontWeight: 700 }
  body-md: { fontFamily: "Inter", fontSize: 1rem, fontWeight: 400 }
  label-sm: { fontFamily: "Inter", fontSize: 0.75rem, fontWeight: 500 }
rounded:
  sm: 4px
  md: 8px
  lg: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
---

## Overview
<3-5 предложений о продукте, аудитории, тоне>

## Colors
<Описание палитры с правилами использования>

## Typography
<Иерархия шрифтов с правилами>

## Layout
<Сетка, отступы, whitespace>

## Elevation & Depth
<Система теней, слои>

## Components
<Детали кнопок, карточек, инпутов с состояниями>

## Do's and Don'ts
### Do
- <правило>

### Don't
- <антипаттерн>
```

---

## 9. Применение для WordPress (wpcraft.ru)

Из заметки на wpcraft.ru/catalog/awesome-design-md:
- Файлы можно использовать для генерации UI через AI-агентов при создании WordPress-тем
- DESIGN.md работает как готовое руководство по типографике, цветам, компонентам бренда
- Стандартизированный формат для AI-промптов в контексте WordPress-разработки

---

## Источники

1. https://github.com/google-labs-code/design.md — Официальная спецификация
2. https://stitch.withgoogle.com/docs/design-md/overview — Документация Google Stitch
3. https://github.com/bergside/typeui — TypeUI CLI
4. https://www.typeui.sh/docs/generate-skills — Документация TypeUI
5. https://www.typeui.sh/blog/design-skills-for-claude — 48 дизайн-скиллов
6. https://github.com/voltagent/awesome-design-md — Коллекция DESIGN.md
7. https://wpcraft.ru/catalog/awesome-design-md — Заметка wpcraft
8. https://departmentofproduct.substack.com/p/designmd-explained-the-format-reshaping — Department of Product
9. https://designproject.io/blog/design-md-file/ — designproject.io гайд
10. https://addyosmani.com/blog/ai-coding-workflow/ — Addy Osmani
11. https://www.banani.co/blog/design-md-guide — Banani обзор
12. https://www.mindstudio.ai/blog/what-is-google-stitch-design-md-file/ — MindStudio
