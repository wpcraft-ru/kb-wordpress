# How Headless WordPress Works with Next.js (ACF Blog)

> Источник: https://www.advancedcustomfields.com/blog/nextjs-wordpress/
> Извлечено: 2026-06-26

## Key Points

1. Headless WordPress использует WordPress как CMS, а Next.js — как фронтенд
2. Большинство проектов выбирают между REST API и WPGraphQL (WPGraphQL — для сложных структур)
3. ISR — лучшая стратегия рендеринга для контентных сайтов
4. Главный компромисс — добавленная сложность (деплой, хостинг, preview, кэш, безопасность)
5. Успешный headless-проект начинается с хорошо спроектированной модели контента (ACF)

## Как WordPress и Next.js общаются

WordPress остаётся CMS, Next.js становится фронтендом.
- Редакторы работают как обычно (wp-admin, посты, медиа, ACF)
- WordPress больше не рендерит публичный сайт
- Next.js: роутинг, лейауты, компоненты, производительность
- Связь: через API

### REST API vs WPGraphQL
- REST API — простые блоги, маркетинговые сайты
- WPGraphQL — сложные связи, CPT, вложенный контент

### ACF + REST API
- Поле Show in REST API в настройках группы полей
- Данные появляются в JSON под объектом `acf`
- Не нужен `register_rest_field()`

## Дополнительные задачи (кроме получения контента)
- Кэширование API-запросов
- Webhooks для уведомления Next.js об изменениях
- Preview для редакторов
- Оптимизация медиа
- SEO-метаданные через Next.js
- Редиректы вне темы WordPress
- XML sitemaps через фронтенд

## 4 причины перехода на headless

1. **Контроль над UX:** React, TypeScript, компоненты, дизайн-системы
2. **WordPress как контент-платформа:** один источник контента для нескольких фронтендов
3. **Производительность:** pre-rendered HTML вместо динамической генерации
4. **SEO:** crawlable HTML, метаданные, sitemaps, canonical — всё через Next.js

## Стратегии рендеринга Next.js

### SSG
- Для редко меняющегося контента (лендинги, документация, кейсы)
- Плюс: скорость (HTML готов до запроса)
- Минус: изменения требуют пересборки

### SSR
- Генерация в момент запроса
- Для: аутентификация, персонализация, поиск
- Минус: зависимость от латентности WordPress API

### ISR (оптимальный выбор)
- Статические страницы + автообновление
- **Time-based ISR:** revalidate каждые N секунд
- **On-demand ISR:** WordPress → webhook → Next.js revalidation
- Workflow: редактор → webhook → валидация секрета → ревалидация пути/тега → свежий контент

### Гибридный рендеринг (best practice)
- Статика + кэш где возможно
- ISR для CMS-контента
- SSR только где нужны данные в момент запроса

## Вызовы headless WordPress с Next.js

### Тема WordPress исчезает
- Всё, что полагалось на тему, нужно пересобрать
- Page builders, плагины кэширования, контактные формы, wp_head(), wp_footer() — ломаются

### Preview усложняется
- Редакторы теряют прямую связь «редактирование → просмотр»
- Нужны preview routes, аутентификация, доступ к черновикам через API

### Операционная сложность
- Два деплой-пайплайна
- Два хостинга
- Два слоя кэша
- Две системы мониторинга

### Безопасность смещается
- Новые зоны внимания: API, webhooks, preview endpoints, токены
- При зрелых практиках — net benefit

### Актуальность контента
- Без ISR/webhooks изменения не сразу видны
- On-demand revalidation решает эту проблему

## Стартовые шаблоны

- **next-wp** — простые REST API проекты
- **gregrickaby/nextjs-wordpress** — production-ready для WPGraphQL (CPT, поля, preview, revalidation)
- **Faust.js** — WordPress-фокусированный тулкит (preview, аутентификация, template hierarchy)

## Хостинг и деплой

### Раздельная архитектура (стандарт)
- WordPress: managed PHP (Beget, Timeweb, etc.)
- Next.js: Vercel или Netlify
- WordPress API URL в env variables
- Webhooks для ISR

### Консолидированная платформа (WP Engine Headless)
- WordPress + Node.js на одной платформе
- Faust.js, WPGraphQL, staging, preview environments
- Меньше vendor sprawl, но больше vendor lock-in

### Вывод
- Малые команды → консолидация (меньше движущихся частей)
- Крупные команды → раздельная архитектура (больше гибкости)

## Content-first: ACF для headless

1. Выберите API (REST или WPGraphQL)
2. Выберите стратегию рендеринга (SSG, SSR, ISR)
3. Выберите модель хостинга (раздельная или консолидированная)
4. **Спроектируйте модель контента в WordPress через ACF**

ACF PRO добавляет: Repeater, Flexible Content, Options Pages