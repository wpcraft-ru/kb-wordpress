import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Algolia DocSearch will be added after approval
// import docsearch from "@astrojs/starlight-docsearch";

const isProd = process.env.NODE_ENV === 'production';

const SITE_URL = process.env.CNAME
  ? `https://${process.env.CNAME}`
  : "https://wpcraft-ru.github.io/kb-wordpress";

const BASE = process.env.CNAME ? "/" : (isProd ? "/kb-wordpress" : "/");

export default defineConfig({
  site: SITE_URL,
  base: BASE,

  integrations: [
    starlight({
      title: "База знаний WordPress",
      description: "Практическая база знаний по WordPress: установка, админка, темы, плагины, безопасность, производительность и готовые сниппеты на русском.",
      components: {
        Sidebar: "starlight-theme-obsidian/overrides/Sidebar.astro",
        PageFrame: "starlight-theme-obsidian/overrides/PageFrame.astro",
        Pagination: "starlight-theme-obsidian/overrides/Pagination.astro",
        ThemeSelect: "starlight-theme-obsidian/overrides/ThemeSelect.astro",
      },
      customCss: [
        "starlight-theme-obsidian/styles/layers.css",
        "starlight-theme-obsidian/styles/theme.css",
        "starlight-theme-obsidian/styles/centered-reading.css",
        "starlight-theme-obsidian/styles/common.css",
      ],
      locales: {
        root: { label: "Русский", lang: "ru" },
      },
      editLink: {
        baseUrl: 'https://github.com/wpcraft-ru/kb-wordpress/tree/main',
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/wpcraft-ru/kb-wordpress",
        },
      ],

      sidebar: [
        {
          label: "Основы WordPress",
          collapsed: false,
          autogenerate: { directory: "basics" },
        },
        {
          label: "Контент",
          collapsed: false,
          autogenerate: { directory: "content" },
        },
        {
          label: "Админка",
          collapsed: true,
          autogenerate: { directory: "console" },
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
