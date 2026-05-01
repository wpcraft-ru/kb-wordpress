/**
 * Remark plugin: strips `.md` from relative links and adjusts path depth.
 *
 * Starlight resolves `/foo/bar.md` → route `/foo/bar/` (adds one directory level),
 * so a relative link `[link](./page.md)` from `bar.md` would resolve to
 * `/foo/bar/page` instead of `/foo/page`. This plugin:
 *   1. Strips the `.md` extension
 *   2. Prepends `../` for non-index.md pages (to undo the extra depth)
 *
 * Examples (from `woocommerce/getting-started.md`):
 *   - `./products.md`    → `../products`
 *   - `./dir/index.md`   → `../dir/`
 *
 * Examples (from `woocommerce/index.md` — no depth adjustment needed):
 *   - `./products.md`    → `./products`
 *   - `./store-pages.md` → `./store-pages`
 *
 * Rule for source .md files:
 *   ALWAYS write links with `.md` extension — VS Code & GitHub need it.
 *   This plugin strips it at build time so the production site works.
 *
 * - Only affects relative links ending in `.md`
 * - Leaves absolute URLs (http/https) untouched
 * - Leaves anchor-only links (#section) untouched
 * - Leaves non-.md links untouched
 */

import { visit } from "unist-util-visit";

export function remarkStripMdLinks() {
  return (tree, file) => {
    // Starlight turns `foo.md` → `foo/index.html` (served at `/foo/`),
    // adding one level of directory depth. Relative links from such pages
    // must go up one extra level. `index.md` pages don't need adjustment.
    const filePath = file.path || (file.history && file.history[0]) || "";
    const isNotIndex = filePath
      ? !filePath.endsWith("/index.md") && !filePath.endsWith("\\index.md")
      : false; // safe fallback: don't adjust depth if we can't determine file type

    visit(tree, "link", (node) => {
      const url = node.url;
      if (!url) return;

      // Skip absolute URLs
      if (/^https?:\/\//i.test(url)) return;
      // Skip anchor-only links
      if (url.startsWith("#")) return;
      // Skip non-.md links
      if (!url.endsWith(".md")) return;

      let newUrl;

      // Strip `index.md` entirely (keeping the trailing /)
      if (url.endsWith("/index.md")) {
        newUrl = url.slice(0, -"index.md".length);
      } else {
        // Strip the .md extension
        newUrl = url.slice(0, -3);
      }

      // For non-index files: account for the extra directory depth
      // that Astro/Starlight introduces (foo.md → /foo/ route).
      // ./products.md → ../products,  ../x.md → ../../x, etc.
      if (isNotIndex && !newUrl.startsWith("/")) {
        // Strip leading ./ if present, then prepend ../
        newUrl = "../" + newUrl.replace(/^\.\//, "");
      }

      node.url = newUrl;
    });
  };
}
