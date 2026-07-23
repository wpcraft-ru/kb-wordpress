---
title: "Headless WordPress с Next.js: создание сайта на Jamstack"
description: "Создание сайта на архитектуре Headless CMS: WordPress как бэкенд, Next.js как фронтенд, деплой на Vercel. REST API vs WPGraphQL, SSG/SSR/ISR, ACF, Edge Cache."
---

## Что такое Headless WordPress

Headless CMS — архитектура, при которой WordPress используется **исключительно как бэкенд** для управления данными и контентом, а фронтенд создаётся с помощью JAMstack-технологий, в первую очередь — **Next.js** (фреймворк на базе React).

В традиционной архитектуре WordPress отвечает и за управление контентом, и за его отображение (через систему тем и плагинов). Headless-подход разделяет эти функции:

- **WordPress** → система управления контентом, предоставляет данные через API
- **Next.js** → самостоятельное фронтенд-приложение: роутинг, лейауты, компоненты, пользовательский опыт

Взаимодействие происходит через **GraphQL API** (плагин WPGraphQL) или **REST API**.

## Преимущества headless-подхода

- **Высокая производительность.** Next.js генерирует статические страницы (SSG) на этапе сборки. Для динамического контента — инкрементальная статическая регенерация (ISR), обновляющая страницы в фоновом режиме без полной пересборки.
- **Повышенная безопасность.** БД и админ-панель WordPress изолированы от публичного фронтенда.
- **Масштабируемость.** Сайт на Vercel раздаётся через глобальный CDN, выдерживает пиковые нагрузки.
- **Гибкость.** WordPress становится единым источником данных для веб-сайта, мобильного приложения, IoT и т.д.
- **SEO.** Next.js генерирует crawlable HTML, метаданные, sitemaps — всё настраивается на уровне фронтенда.

## Вызовы и компромиссы

- **Тема WordPress исчезает.** Page builders, плагины кэширования, контактные формы, `wp_head()` и `wp_footer()` — перестают работать или требуют перестройки.
- **Preview усложняется.** Редакторы теряют прямую связь «редактирование → просмотр». Требуются preview routes с аутентификацией и доступ к черновикам через API.
- **Операционная сложность:** два деплой-пайплайна, два хостинга, два слоя кэша, две системы мониторинга.
- **Безопасность смещается.** API, webhooks, preview endpoints, токены и pipeline secrets требуют отдельного внимания.
- **Актуальность контента.** Без ISR или webhooks изменения в WordPress не сразу видны на сайте.

## REST API или WPGraphQL

| Критерий | REST API | WPGraphQL |
|----------|----------|-----------|
| Простота | Выше (стандартные эндпоинты) | Ниже (требуется GraphQL-запрос) |
| Вложенные данные | Несколько запросов | Один запрос |
| Производительность | Over-fetching / under-fetching | Только нужные поля |
| ACF | Show in REST API в настройках полей | Плагин WPGraphQL for ACF |
| Когда лучше | Блоги, маркетинговые сайты | CPT, сложные связи, кастомные поля |

Для ACF: если включить **Show in REST API** в настройках группы полей, данные появляются в JSON под объектом `acf` — не нужен `register_rest_field()`.

## Пошаговая настройка

### 1. Бэкенд: WordPress + WPGraphQL

- Установите WordPress на любом хостинге ([Beget](./wordpress-on-beget.md), [Timeweb](./wordpress-on-timeweb.md), [REG.RU](./wordpress-on-regru.md) или [Yandex Cloud](./wordpress-on-yandex-cloud.md)).
- Установите плагин **WPGraphQL**. После активации API доступен по адресу `ваш-сайт.com/graphql`.
- (Опционально) **WPGatsby** — добавляет отслеживание изменений контента, полезен и для Next.js.
- Проверьте API через встроенную **GraphiQL IDE** (админка → GraphQL → GraphiQL IDE).

### 2. Фронтенд: Next.js + TypeScript

Создайте проект:

```bash
npx create-next-app@latest --typescript
# или с готовым шаблоном для WordPress:
npx create-next-app --example cms-wordpress my-wordpress-app
```

Настройте переменную окружения в `.env.local`:

```env
WORDPRESS_API_URL=https://ваш-сайт.com/graphql
```

### 3. GraphQL-запросы

Сформировать запрос можно через **Query Composer** в админке WordPress. Пример запроса для получения постов:

```graphql
query GetPosts {
  posts(first: 5, where: { categoryName: "development" }) {
    nodes {
      slug
      title
      excerpt
      date
      featuredImage {
        node { sourceUrl }
      }
    }
  }
}
```

> Лимит по умолчанию — 10 постов, максимум — 100. Для больших объёмов используйте пагинацию.

### 4. TypeScript-интерфейсы

```ts
// types.ts
export interface IPostPreview {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: { node: { sourceUrl: string } };
  date: string;
}

export interface IPost extends IPostPreview {
  content: string;
}
```

### 5. Fetch-обёртка

```ts
// wp-api.ts
async function fetchData(query: string) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch('https://ваш-сайт.com/graphql', {
    headers,
    method: 'POST',
    body: JSON.stringify({ query }),
  });
  return (await res.json()).data;
}

export async function getPosts() {
  const data = await fetchData(`...`); // ваш GraphQL-запрос
  return data.posts.nodes as IPostPreview[];
}
```

### 6. Маршрутизация

- `pages/index.tsx` — главная страница (роут `/`)
- `pages/[slug].tsx` — страница поста (роут `/my-post-slug`)
- `pages/blog/index.tsx` и `pages/blog/[slug].tsx` — если посты на `/blog/`

## Стратегии рендеринга в Next.js

### SSG (Static Site Generation)

```ts
// pages/index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};

// pages/[slug].tsx — нужно getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map(post => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPostBySlug(context.params?.slug as string);
  return { props: { post } };
};
```

**Когда использовать:** редко меняющийся контент — лендинги, документация, старые посты. HTML генерируется на этапе сборки, страницы летают.

**Минус:** изменения в WordPress не видны до следующей сборки.

### SSR (Server-Side Rendering)

```ts
export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
```

**Когда использовать:** персонализированный контент, аутентифицированные страницы, поиск. Гарантирует свежие данные, но каждый запрос долбится до WordPress API.

### ISR (Incremental Static Regeneration) — оптимальный выбор

```ts
export async function getStaticProps() {
  const allPosts = await getPostsForHome();
  return {
    props: { allPosts },
    revalidate: 10, // пересборка раз в 10 секунд
  };
}
```

**Два паттерна ISR:**

1. **Time-based** — `revalidate` в `getStaticProps`, страница обновляется с заданной периодичностью
2. **On-demand** — WordPress отправляет webhook в Next.js, который ревалидирует конкретный путь или тег кэша

Workflow on-demand ISR: редактор → публикация → webhook → валидация секрета → ревалидация пути → свежий контент

**Гибридный рендеринг (best practice):** статика + кэш где возможно, ISR для CMS-контента, SSR только для данных в момент запроса.

## ACF в headless-архитектуре

Advanced Custom Fields отлично вписывается в headless-схему:

- Включите **Show in REST API** в настройках группы полей → данные появляются в JSON под `acf`
- Для WPGraphQL используйте плагин **WPGraphQL for Advanced Custom Fields**
- ACF PRO добавляет **Repeater**, **Flexible Content**, **Options Pages** — всё доступно через API

**Правило:** чистый API-ответ начинается с чистой модели контента. Спроектируйте структуру в ACF до того, как писать компоненты Next.js.

## Деплой на Vercel

1. Загрузите проект на **GitHub / GitLab / Bitbucket**
2. Импортируйте репозиторий в **Vercel** (Vercel автоматически определяет Next.js)
3. Добавьте **Environment Variables** (`WORDPRESS_API_URL`)
4. Нажмите **Deploy** — каждое изменение в основной ветке запускает автосборку

**PR previews:** при создании Pull Request Vercel автоматически собирает preview-версию с уникальным URL — можно тестировать перед merge.

## Edge Cache

Edge Cache реплицирует статические страницы на граничные серверы CDN, расположенные географически близко к пользователям. Преимущества:

- Минимальная задержка (контент с ближайшего сервера)
- Автоматическая масштабируемость
- Высокая отказоустойчивость
- ISR обновляет контент без редеплоя (<500 мс по Edge)
- Снижение нагрузки на WordPress-сервер

## Хостинг-стратегии

| Параметр | Раздельная | Консолидированная |
|----------|-----------|-------------------|
| WordPress | Managed PHP-хостинг | WP Engine Headless Platform |
| Next.js | Vercel / Netlify | Там же |
| Гибкость | Высокая | Ниже (vendor lock-in) |
| Сложность | Выше (2 платформы) | Ниже (всё в одном) |
| Кому подходит | Крупные команды | Малые команды |

Самый распространённый подход — WordPress на PHP-хостинге (Beget, Timeweb и т.д.), Next.js на Vercel, связь через WPGraphQL.

## Стартовые шаблоны и фреймворки

- **[next-wp](https://next-wp.com/)** — простой старт для REST API
- **[gregrickaby/nextjs-wordpress](https://github.com/gregrickaby/nextjs-wordpress)** — production-ready для WPGraphQL (CPT, preview, revalidation, SEO)
- **[Faust.js](https://faustjs.org/)** — WordPress-фокусированный тулкит (previews, аутентификация, template hierarchy)

> Шаблоны решают задачи настройки, но не архитектуры контента. Успех проекта упирается в то, как структурирован контент внутри WordPress.

## Материалы и источники

- [Использование Headless WordPress с Next.js и Vercel — wpcraft.ru](https://wpcraft.ru/blog/headless-cms-wordpress-next-js-vercel)
- [WordPress NextJS, ReactJS & GraphQL: пример разработки проекта — wpcraft.ru](https://wpcraft.ru/blog/wordpress-nextjs)
- [How Headless WordPress Works with Next.js — ACF Blog](https://www.advancedcustomfields.com/blog/nextjs-wordpress/)
