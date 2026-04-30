/**
 * Remark plugin: strips `.md` from relative links.
 *
 * Starlight resolves `/foo/bar.md` → route `/foo/bar/`, so inline
 * `[link](./page.md)` in a Markdown file produces a broken href.
 * This plugin rewrites such links to `[link](./page)` at build time.
 *
 * - Only affects relative links ending in `.md`
 * - Leaves absolute URLs (http/https) untouched
 * - Leaves anchor-only links (#section) untouched
 * - Leaves non-.md links untouched
 */

import { visit } from "unist-util-visit";

export function remarkStripMdLinks() {
  return (tree) => {
    visit(tree, "link", (node) => {
      const url = node.url;
      if (!url) return;

      // Skip absolute URLs
      if (/^https?:\/\//i.test(url)) return;
      // Skip anchor-only links
      if (url.startsWith("#")) return;
      // Skip non-.md links
      if (!url.endsWith(".md")) return;

      // Strip the .md extension
      node.url = url.slice(0, -3);
    });
  };
}
