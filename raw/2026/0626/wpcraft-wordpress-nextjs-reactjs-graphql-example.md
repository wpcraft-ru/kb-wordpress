# WordPress NextJS, ReactJS & GraphQL: пример разработки проекта

> Источник: https://wpcraft.ru/blog/wordpress-nextjs
> Извлечено: 2026-06-26

## TL;DR
- Бэкенд: WordPress + GraphQL
- Фронтенд: Next.js + TypeScript
- Деплой: Vercel
- GitHub PRs preview

## Бэкенд: WordPress + GraphQL
- Готовый сайт на WordPress (или с нуля за 5 минут)
- Плагин WPGraphQL (установка за 5 минут)
- GraphiQL IDE для тестирования запросов
- Query Composer — графический редактор запросов

## Фронтенд: Next.js + TypeScript

```bash
npx create-next-app@latest --typescript
npm run dev  # localhost:3000
```

### GraphQL запрос
```graphql
query FavoriteBlogs {
  posts(first: 5) {
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

- Лимит по умолчанию: 10 постов
- Максимум: 100 постов (для больших объемов — пагинация)

### TypeScript интерфейсы
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

### Fetch-обёртка
```ts
// wp-api.ts
async function fetchData(query: string) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch('https://site.com/graphql', {
    headers,
    method: 'POST',
    body: JSON.stringify({ query }),
  });
  return (await res.json()).data;
}

export async function getPosts() {
  const data = await fetchData(`...`);
  return data.posts.nodes as IPostPreview[];
}
```

## Стратегии генерации

### SSR — getServerSideProps
- Генерация на каждый запрос
- Подходит для персонализированного контента

### SSG — getStaticProps + getStaticPaths
```ts
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map(post => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const post = await getPostBySlug(slug);
  return { props: { post } };
};
```
- Если 200 постов → 201 страница при сборке

## Деплой: GitHub + Vercel
1. Пуш в GitHub
2. Import репозитория в Vercel
3. Auto-deploy при пуше в main
4. Preview deploy для каждого PR

## Плюсы и минусы

**Преимущества:**
- Очень быстрый сайт (ISR NextJS)
- Верстка на ReactJS удобнее PHP
- SEO лучше чистого ReactJS

**Недостатки:**
- Затраты на разработку выше
- Контент меняется через код, не в реальном времени