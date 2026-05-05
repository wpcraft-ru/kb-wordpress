import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";
import { remarkStripMdLinks } from "./src/remark-strip-md-links.mjs";

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

  markdown: {
    remarkPlugins: [remarkStripMdLinks],
  },

  integrations: [
    starlight({
      title: "База знаний WordPress",
      description: "Практическая база знаний по WordPress: установка, админка, темы, плагины, безопасность, производительность и готовые сниппеты на русском.",
      head: [
        // Favicon
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            href: "/kb/favicon.png",
          },
        },
        // Yandex.Metrika counter
        {
          tag: "script",
          attrs: { type: "text/javascript" },
          content: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(27160562, 'init', {webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `,
        },
        {
          tag: "noscript",
          content: '<div><img src="https://mc.yandex.ru/watch/27160562" style="position:absolute; left:-9999px;" alt="" /></div>',
        },
      ],
      components: {
        Sidebar: "starlight-theme-obsidian/overrides/Sidebar.astro",
        PageFrame: "starlight-theme-obsidian/overrides/PageFrame.astro",
        PageSidebar: "./src/components/PageSidebar.astro",
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
        {
          icon: "telegram",
          label: "Telegram",
          href: "https://t.me/wp_bbot",
        },
        {
          icon: 'external',
          label: 'Сайт WPCraft',
          href: 'https://wpcraft.ru/contacts',
        },
      ],

      sidebar: [
        {
          label: "Основы",
          collapsed: false,
          autogenerate: { directory: "basics" },
        },
        {
          label: "Контент",
          collapsed: false,
          autogenerate: { directory: "content" },
        },
        {
          label: "Консоль",
          collapsed: true,
          autogenerate: { directory: "console" },
        },
        {
          label: "Искусственный интеллект",
          collapsed: false,
          autogenerate: { directory: "ai" },
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
          label: "Дизайн",
          collapsed: true,
          autogenerate: { directory: "design" },
        },
        {
          label: "WooCommerce",
          collapsed: true,
          autogenerate: { directory: "woocommerce" },
        },
        {
          label: "Компоненты",
          collapsed: true,
          autogenerate: { directory: "components" },
        },
        {
          label: "Производительность",
          collapsed: true,
          autogenerate: { directory: "performance" },
        },
        {
          label: "Шпаргалки и чек-листы",
          collapsed: true,
          autogenerate: { directory: "cheatsheet" },
        },
        {
          label: "Руководства",
          collapsed: true,
          autogenerate: { directory: "how-to" },
        },
        {
          label: "FAQ",
          collapsed: true,
          autogenerate: { directory: "faq" },
        },
        {
          label: "Юридические составляющие",
          collapsed: true,
          autogenerate: { directory: "legal" },
        },
        {
          label: "QA",
          collapsed: true,
          autogenerate: { directory: "qa" },
        },
        {
          label: "Безопасность",
          collapsed: true,
          autogenerate: { directory: "security" },
        },
      ],

      plugins: [starlightAutoSidebar()],

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
