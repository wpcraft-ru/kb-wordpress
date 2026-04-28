import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Algolia DocSearch will be added after approval
// import docsearch from "@astrojs/starlight-docsearch";

const SITE_URL = process.env.CNAME
  ? `https://${process.env.CNAME}`
  : "https://wpcraft-ru.github.io/wp-kb";

const BASE = process.env.CNAME ? "/" : "/wp-kb/";

export default defineConfig({
  site: SITE_URL,
  base: BASE,

  integrations: [
    starlight({
      title: "WP KB",
      description: "База знаний по WordPress",
      locales: {
        root: { label: "Русский", lang: "ru" },
      },

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/wpcraft-ru/wp-kb",
        },
      ],

      sidebar: [
        {
          label: "Ядро WordPress",
          collapsed: false,
          autogenerate: { directory: "core" },
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
          label: "Безопасность",
          collapsed: true,
          autogenerate: { directory: "security" },
        },
        {
          label: "Производительность",
          collapsed: true,
          autogenerate: { directory: "performance" },
        },
        {
          label: "Сниппеты",
          collapsed: true,
          autogenerate: { directory: "snippets" },
        },
        {
          label: "Запросы",
          collapsed: true,
          autogenerate: { directory: "queries" },
        },
      ],

      // Pagefind (local search) — built into Starlight by default
      // Will be replaced by Algolia DocSearch after approval:
      //
      // plugins: [
      //   docsearch({
      //     appId: import.meta.env.PUBLIC_ALGOLIA_APP_ID,
      //     apiKey: import.meta.env.PUBLIC_ALGOLIA_API_KEY,
      //     indexName: import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME,
      //   }),
      // ],
    }),
  ],
});
