What’s new for developers? (February 2026) – WordPress Developer Blog
* [Showcase](https://wordpress.org/showcase/)
* [Plugins](https://wordpress.org/plugins/)
* [Themes](https://wordpress.org/themes/)
* [Hosting](https://wordpress.org/hosting/)
* [News](https://wordpress.org/news/)
* Resources
+ [Learn WordPress](https://learn.wordpress.org/)
+ [Documentation](https://wordpress.org/documentation/)
+ [Education](https://wordpress.org/education/)
+ [Forums](https://wordpress.org/support/forums/)
+ [Developers](https://developer.wordpress.org/)
+ [Blocks](https://wordpress.org/blocks/)
+ [Patterns](https://wordpress.org/patterns/)
+ [Photos](https://wordpress.org/photos/)
+ [Openverse ↗︎](https://openverse.org/)
+ [WordPress.tv ↗︎](https://wordpress.tv/)
* About
+ [About WordPress](https://wordpress.org/about/)
+ [Make WordPress](https://make.wordpress.org/)
+ [Events](https://events.wordpress.org/)
+ [Five for the Future](https://wordpress.org/five-for-the-future/)
+ [Enterprise](https://wordpress.org/enterprise/)
+ [Gutenberg ↗︎](https://wordpress.org/gutenberg/)
+ [Job Board ↗︎](https://jobs.wordpress.net/)
+ [Swag Store ↗︎](https://mercantile.wordpress.org/)
* [Get WordPress](https://wordpress.org/download/)
Search in WordPress.org
[Get WordPress](https://wordpress.org/download/)
[WordPress Developer Blog](https://developer.wordpress.org/news)
What’s new for developers? (February 2026)
* [Snippets](https://developer.wordpress.org/news/snippets/)
* Categories
+ [Blocks](https://developer.wordpress.org/news/category/blocks/)
+ [Concepts](https://developer.wordpress.org/news/category/concepts/)
+ [Common APIs](https://developer.wordpress.org/news/category/common-apis/)
+ [Design](https://developer.wordpress.org/news/category/design/)
+ [Playground](https://developer.wordpress.org/news/category/playground/)
+ [Plugins](https://developer.wordpress.org/news/category/plugins/)
+ [Themes](https://developer.wordpress.org/news/category/themes/)
* About
+ [About this site](https://developer.wordpress.org/news/about/)
+ [Updates](https://developer.wordpress.org/news/category/updates/)
+ [How to contribute](https://developer.wordpress.org/news/how-to-contribute/)
+ [Tips and guidelines](https://developer.wordpress.org/news/tips-and-guidelines-for-writers/)
* [Subscribe](https://developer.wordpress.org/news/subscribe/)
* [Developer Resources](https://developer.wordpress.org/)
* [Snippets](https://developer.wordpress.org/news/snippets/)
* Categories
+ [Blocks](https://developer.wordpress.org/news/category/blocks/)
+ [Concepts](https://developer.wordpress.org/news/category/concepts/)
+ [Common APIs](https://developer.wordpress.org/news/category/common-apis/)
+ [Design](https://developer.wordpress.org/news/category/design/)
+ [Playground](https://developer.wordpress.org/news/category/playground/)
+ [Plugins](https://developer.wordpress.org/news/category/plugins/)
+ [Themes](https://developer.wordpress.org/news/category/themes/)
* About
+ [About this site](https://developer.wordpress.org/news/about/)
+ [Updates](https://developer.wordpress.org/news/category/updates/)
+ [How to contribute](https://developer.wordpress.org/news/how-to-contribute/)
+ [Tips and guidelines](https://developer.wordpress.org/news/tips-and-guidelines-for-writers/)
* [Subscribe](https://developer.wordpress.org/news/subscribe/)
* [Developer Resources](https://developer.wordpress.org/)
# What’s new for developers? (February 2026)
By [Justin Tadlock](https://profiles.wordpress.org/greenshady/)
February 10, 2026
[AI](https://developer.wordpress.org/news/category/ai/), [Blocks](https://developer.wordpress.org/news/category/blocks/), [Playground](https://developer.wordpress.org/news/category/playground/), [Plugins](https://developer.wordpress.org/news/category/plugins/), [Themes](https://developer.wordpress.org/news/category/themes/)
WordPress 7.0 Beta 1 is fast approaching. That means the mad rush to get everything into Gutenberg and Core before the February 19th deadline is in full swing. The last couple of Gutenberg releases (22.4 and 22.5) shipped with a ton of new features.
And, as always, the monthly roundup is available to help you catch up.
In other news, [WordPress 6.9.1](https://wordpress.org/news/2026/02/wordpress-6-9-1-maintenance-release/) shipped on February 3, 2026 with 49 bug fixes. If you haven’t done so already, be sure to upgrade to the latest version.
Now, let’s get back to upcoming features. Be sure to test with WordPress trunk and the latest version of the Gutenberg plugin active. You can also [test the latest updates via Playground](https://playground.wordpress.net/?wp=nightly&plugin=gutenberg).
Table of Contents
1. [Highlights](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#highlights)
1. [Always-iframed post editor](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#always-iframed-post-editor)
2. [Viewport-based block visibility](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#viewport-based-block-visibility)
3. [Per-block instance custom CSS](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#per-block-instance-custom-css)
2. [Plugins & Tools](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#plugins-tools)
1. [WordPress Studio CLI updates](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#wordpress-studio-cli-updates)
2. [AI and agent features](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#ai-and-agent-features)
3. [UI Primitives and Components](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#ui-primitives-and-components)
4. [Anchor support for dynamic blocks](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#anchor-support-for-dynamic-blocks)
3. [Themes](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#themes)
1. [Text supports improved for multiple blocks](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#text-supports-improved-for-multiple-blocks)
2. [AI-generated images allowed in theme directory](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#ai-generated-images-allowed-in-theme-directory)
3. [Default link styles removed](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#default-link-styles-removed)
4. [Breadcrumbs block updates](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#breadcrumbs-block-updates)
5. [Extra divs removed from blocks in the editor](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#extra-divs-removed-from-blocks-in-the-editor)
6. [Gallery caption background blur](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#gallery-caption-background-blur)
7. [Pullquote block reinstated](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#pullquote-block-reinstated)
8. [Aspect ratios for Image blocks at all alignments](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#aspect-ratios-for-image-blocks-at-all-alignments)
9. [Tabs block restructured](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#tabs-block-restructured)
10. [Navigation and overlays](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#navigation-and-overlays)
11. [Other notable block changes](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#other-notable-block-changes)
4. [Playground](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#playground)
5. [Notable user-facing changes](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#notable-user-facing-changes)
6. [Resources](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#resources)
1. [Developer Blog](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#developer-blog)
## Highlights
### Always-iframed post editor
This has changed since this post was published. The post editor will always be iframed unless there is a block inserted into the content with an API version lower than 3. For more information, read [Iframed Editor Changes in WordPress 7.0](https://make.wordpress.org/core/2026/02/24/iframed-editor-changes-in-wordpress-7-0/).
For several years, every block-based editor has existed in an iframe. This has had the benefit of separating UI styles from block and theme styles. However, blocks using version 2 of the block API triggered the post editor (but not the template and site editors) to use the old non-iframed editor. This has led to an inconsistent experience for users and extenders.
In WordPress 7.0, the post editor will always be iframed, regardless of the API version of the block.
For the most part, this should not negatively impact the user experience. However, there are potential edge cases where some blocks may rely on the global document in JavaScript or CSS that may need to be updated.
The reasons for this change were [announced nearly five years ago](https://make.wordpress.org/core/2021/06/29/blocks-in-an-iframed-template-editor/) and [reiterated prior to the WordPress 6.9 release](https://make.wordpress.org/core/2025/11/12/preparing-the-post-editor-for-full-iframe-integration/). To ensure your blocks are updated and working correctly, check out the [migration guide in the handbook](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-api-versions/block-migration-for-iframe-editor-compatibility/).
### Viewport-based block visibility
The Block Visibility feature landed in WordPress 6.9 with the ability to hide a block from appearing on the front end. Version 7.0 is slated to include [viewport-based visibility controls](https://github.com/WordPress/gutenberg/pull/74839), building up that initial foundation.
To follow along with the progress of both the UI and the underlying code, check out these tickets:
* [Refactor metadata to use nested structure](https://github.com/WordPress/gutenberg/pull/74602)
* [Create selectors for block visibility in current viewport](https://github.com/WordPress/gutenberg/pull/74517)
* [Render blocks when hidden at all viewports](https://github.com/WordPress/gutenberg/pull/74679)
* [Add rules to hide on viewport size](https://github.com/WordPress/gutenberg/pull/74379)
* [Add viewport modal and controls UI](https://github.com/WordPress/gutenberg/pull/74249)
* [Add visibility notice for hidden blocks in the block inspector](https://github.com/WordPress/gutenberg/pull/74180)
### Per-block instance custom CSS
Gutenberg 22.5 brings custom CSS [support to individual block instances](https://github.com/WordPress/gutenberg/pull/73959). Under the **Advanced → Additional CSS** block sidebar control, you can add CSS specific to that single instance of a block. A `.has-custom-css` [CSS class is also added](https://github.com/WordPress/gutenberg/pull/74969) dynamically in both the editor and on the front end when a block has CSS.
This feature is one of those double-edged swords, being both useful for one-off changes and also creating later management headaches. There’s an open [ticket discussing an indicator](https://github.com/WordPress/gutenberg/issues/75236) when a block has custom CSS attached to it. In most cases, you’ll likely want to rely on keeping your styles at the global level or use block style variations to keep your code base cleaner.
## Plugins & Tools
### WordPress Studio CLI updates
[Version 1.7.0](https://github.com/Automattic/studio/releases/tag/v1.7.0) of WordPress Studio saw substantial updates to its command line tools. You can now control nearly every feature—other than Sync—directly from the command lines. This means that it will work well with AI-assisted development tools, such as Claude Code and Cursor.
### AI and agent features
The [AI Experiments plugin](https://wordpress.org/plugins/ai/) has been updated to add several improvements:
* [Excerpt Generation](https://github.com/WordPress/ai/pull/96): AI-powered post summaries now integrate directly with WordPress, with an [experimental editor interface](https://github.com/WordPress/ai/pull/143) for generating excerpts.
* [Abilities Explorer](https://github.com/WordPress/ai/pull/63): New admin screen that shows all registered AI capabilities in one place, letting you view and test available features.
* [Content Summarization](https://github.com/WordPress/ai/pull/136) and [Image Generation](https://github.com/WordPress/ai/pull/134): Backend API support added for these experiments (there’s no UI yet, but the foundation is ready).
* [Improved Documentation](https://github.com/WordPress/ai/pull/135): Expanded readme with better onboarding content and clearer setup instructions.
* [Playground Preview](https://github.com/WordPress/ai/pull/144): Automated preview builds for testing changes directly in WordPress Playground.
### UI Primitives and Components
The WordPress UI package received a significant update with the addition of several components and primitives designed to help developers build more consistent and accessible interfaces:
* A new dropdown/select menu component for creating [standardized select controls](https://github.com/WordPress/gutenberg/pull/74661).
* A [tooltip component](https://github.com/WordPress/gutenberg/pull/74625) for displaying helpful hints when users hover over elements.
* The building blocks for [creating form fields](https://github.com/WordPress/gutenberg/pull/74190) with consistent styling and behavior.
* A component that hides content [from visual display](https://github.com/WordPress/gutenberg/pull/74189) while keeping it accessible to assistive technologies.
* A [standardized button component](https://github.com/WordPress/gutenberg/pull/74415) for creating consistent interactive elements.
* Building blocks for grouping [related form controls](https://github.com/WordPress/gutenberg/pull/74296) together (fieldsets).
* A component for [displaying icons](https://github.com/WordPress/gutenberg/pull/74311) consistently throughout your WordPress interface.
* A building block for creating consistent [layouts around input fields](https://github.com/WordPress/gutenberg/pull/74313).
* A basic building block for [creating text input fields](https://github.com/WordPress/gutenberg/pull/74615) with standardized appearance and functionality.
### Anchor support for dynamic blocks
Anchor (`id` attribute) support now [works for dynamic blocks](https://github.com/WordPress/gutenberg/pull/74183). The reference is always saved in the block comment delimiter, which allows it to be rendered on the front end dynamically. The change also updates most dynamic Core blocks to include support.
## Themes
### Text supports improved for multiple blocks
[Heading](https://github.com/WordPress/gutenberg/pull/74383), [Verse](https://github.com/WordPress/gutenberg/pull/74724), and several comment-related blocks ([Author Name](https://github.com/WordPress/gutenberg/pull/74068), [Content](https://github.com/WordPress/gutenberg/pull/74269), [Date](https://github.com/WordPress/gutenberg/pull/74599), [Edit Link](https://github.com/WordPress/gutenberg/pull/74720), [Reply Link](https://github.com/WordPress/gutenberg/pull/74760), and [Title](https://github.com/WordPress/gutenberg/pull/74945)) now fully support the `textAlign` feature. During the 7.0 cycle, contributors standardized text alignment and have been updating blocks across the board. Follow the [migration ticket](https://github.com/WordPress/gutenberg/issues/60763) to follow along.
[Text indent support was added](https://github.com/WordPress/gutenberg/pull/73114) in an initial pull request to get the long-requested indentation feature added to the Block Editor. The current style is limited to a specific type of indentation (first paragraph not indented but subsequent ones are). The initial implementation lacked enough cross-language support, and more [options for handling indentation](https://github.com/WordPress/gutenberg/pull/74889) will land in Gutenberg 22.6.
The Paragraph block also gained `textColumns` support, which allows you to turn a single paragraph into [multiple columns of text](https://github.com/WordPress/gutenberg/pull/74656).
### AI-generated images allowed in theme directory
A discussion kicked off last year over whether AI-generated images could be bundled with themes in the directory. Eventually, WordPress Executive Director Mary Hubbard [advised to move forward](https://themes.trac.wordpress.org/ticket/234012#comment:24) with their allowance:
> AI-generated images can be used if they are explicitly disclosed and licensed in a GPL-compatible way. If the author declares this, I don’t see an issue in moving it forward.
The Themes Team solidified that decision during its [January 27, 2026 team meeting](https://make.wordpress.org/themes/2026/01/27/themes-team-meeting-agendas-for-january-27-2026/).
### Default link styles removed
Previously, the default WordPress `theme.json` file added an underline as the default text-decoration on link elements. Since this is already the browser default, it was redundant. This [has now been removed](https://github.com/WordPress/gutenberg/pull/74901) and should not impact most themes, but it’s worth checking just to be sure.
### Breadcrumbs block updates
The Breadcrumbs block is still receiving some fine-tuning as it gears up for the WordPress 7.0 release. The latest changes include:
* `theme.json` [block schema support](https://github.com/WordPress/gutenberg/pull/74227)
* Applies `post_type_archive_title` filters when showing [the post type archive title](https://github.com/WordPress/gutenberg/pull/73966)
* A new `block_core_breadcrumbs_items` [filter hook](https://github.com/WordPress/gutenberg/pull/74169) for overwriting the final array
* [Passes the post ID](https://github.com/WordPress/gutenberg/pull/74170) as an argument to the existing `block_core_breadcrumbs_post_type_settings` hook
### Extra divs removed from blocks in the editor
[Gutenberg 22.4 introduced](https://github.com/WordPress/gutenberg/pull/74228) a new `HtmlRenderer` component, which renders HTML content as React elements with optional wrapper props. For theme authors, this means that several blocks will no longer have an extra wrapping in the editor, allowing for consistent styling with the front end.
Blocks which have now been fixed are:
* [Archives](https://github.com/WordPress/gutenberg/pull/74255)
* [Calendar](https://github.com/WordPress/gutenberg/pull/74271)
* [Latest Comments](https://github.com/WordPress/gutenberg/pull/74277)
* [RSS](https://github.com/WordPress/gutenberg/pull/74272)
* [Tag Cloud](https://github.com/WordPress/gutenberg/pull/74228)
### Gallery caption background blur
The [caption background blur](https://github.com/WordPress/gutenberg/pull/74063) for Gallery Image captions has been changed from a max height of `40%` to `3em`. This could impact custom styles, so be sure to check its output with your theme.
The original proposal was to move the background to the element itself, but that proved problematic with some image dimensions.
### Pullquote block reinstated
The Pullquote block was [deprecated in Gutenberg 22.2](https://github.com/WordPress/gutenberg/pull/73228) in favor of pushing users toward the Quote block. However, after a [lengthy discussion](https://github.com/WordPress/gutenberg/issues/11610) with lots of community feedback, contributors realized these two blocks are semantically different and are for entirely different use cases. The [block has been reinstated](https://github.com/WordPress/gutenberg/pull/75122%5C) with no plans for deprecation as of now.
There is still an [ongoing discussion](https://github.com/WordPress/gutenberg/issues/20606) to address the Quote and Pullquote block’s markup and ensure they are semantically valid HTML and accessible.
### Aspect ratios for Image blocks at all alignments
In WordPress 6.9 and earlier, you were unable to define an aspect ratio for an Image block when it was set to wide or full alignment. This meant registering custom image sizes (technically, *resolutions*) and using them as *faux* aspect ratios. In WordPress 7.0, you’ll be able to correctly set wide and full-width images [to any registered aspect ratio](https://github.com/WordPress/gutenberg/pull/74519).
### Tabs block restructured
The Tabs block has undergone a [significant refactoring](https://github.com/WordPress/gutenberg/pull/74412) based on feedback from Core contributors. The block now has multiple inner blocks, giving you much more control over styling its output.
The outer Tabs block now has a nested structure:
* Tabs Menu
+ Tabs Menu Item
* Tab Panels
+ Tab
The change also removes the Button and Link styles present in earlier versions. This will make it easier for you if you were previously disabling those styles or restyling them to match your design.
### Navigation and overlays
The Navigation Overlay feature continues to improve. The last two Gutenberg releases added several important updates and fixes:
* [Sidebar previews](https://github.com/WordPress/gutenberg/pull/74780) for overlays.
* [Default pattern inserted](https://github.com/WordPress/gutenberg/pull/74650) on overlay creation, which now [has a background](https://github.com/WordPress/gutenberg/pull/74659).
* Updated [control labels](https://github.com/WordPress/gutenberg/pull/74690).
* New Navigation blocks now default to [always show overlays](https://github.com/WordPress/gutenberg/pull/74890).
* New overlay patterns for [centered navigation](https://github.com/WordPress/gutenberg/pull/74861), [centered nav with info](https://github.com/WordPress/gutenberg/pull/74862), [with accent background](https://github.com/WordPress/gutenberg/pull/74849), and [with black background](https://github.com/WordPress/gutenberg/pull/74847).
* Navigation blocks within overlays [no longer use](https://github.com/WordPress/gutenberg/pull/74764) a tag.
* Submenu colors are no longer [applied to custom overlays](https://github.com/WordPress/gutenberg/pull/74544).
* Themes can define the overlay attribute [without the theme slug](https://github.com/WordPress/gutenberg/pull/74119).
* The Navigation block has a new option to [always toggle submenus open](https://github.com/WordPress/gutenberg/pull/74653).
### Other notable block changes
* You can now [exclude terms](https://github.com/WordPress/gutenberg/pull/73790) (e.g., categories, tags) via the Query Loop block controls.
* On the front-end only, the Paragraph block now has a `.wp-block-paragraph` class. [This change](https://github.com/WordPress/gutenberg/pull/71207) doesn’t affect global styles, which still uses the `p` selector.
* The [Verse block utilizes](https://github.com/WordPress/gutenberg/pull/74722) `border-box` for its `box-sizing`, which should make it easier to style without additional custom CSS.
## Playground
Playground [removed support for PHP 7.2 and 7.3](https://make.wordpress.org/playground/2026/01/16/wordpress-playground-removes-support-for-php-7-2-and-7-3/) and bundled several updates for iOS and Safari in the past month. The [docs were also translated to Bengali](https://github.com/WordPress/wordpress-playground/pull/3207).
`wp-env` now [supports the Playground runtime](https://make.wordpress.org/playground/2026/02/06/wp-env-now-runs-wordpress-with-playground-runtime/). By default, it requires Docker to be installed on your machine, which can be an additional hurdle to getting started with WordPress development. Now, with one command, you can run local development with Playground instead:
```
npx @wordpress/env start --runtime=playground
```
If you haven’t read it already, be sure to check out [Streamlining block theme development with WordPress Playground and Github](https://developer.wordpress.org/news/2026/01/streamlining-block-theme-development-with-wordpress-playground-and-github/) right here on the Developer Blog.
## Notable user-facing changes
A couple of items that are more geared toward the user experience are worth looking at as an extender.
View transitions will be [integrated into the WordPress admin](https://core.trac.wordpress.org/ticket/64470) in 7.0, enabling smooth transitions between screens. There is an [open ticket](https://core.trac.wordpress.org/ticket/64471) to bring this to the front end, but until it is included, you can use the [View Transitions plugin](https://wordpress.org/plugins/view-transitions/).
Each heading level (H1-H6) is now [registered as a block variation](https://github.com/WordPress/gutenberg/pull/73823) on the Heading block. These do not appear in the inserter, but the change does add icons to the block’s sidebar for transforming it between variations.
## Resources
### Developer Blog
Three new blog posts landed on the Developer Blog in the past month. If you haven’t read them already, now’s the time:
* [How to use DataForm to create plugin settings pages](https://developer.wordpress.org/news/2026/01/how-to-use-dataform-to-create-plugin-settings-pages/)
* [Streamlining block theme development with WordPress Playground and GitHub](https://developer.wordpress.org/news/2026/01/streamlining-block-theme-development-with-wordpress-playground-and-github/)
* [From Abilities to AI Agents: Introducing the WordPress MCP Adapter](https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter/)
*Props to [@ndiego](https://profiles.wordpress.org/ndiego/), [@fellyph](https://profiles.wordpress.org/fellyph/), [@welcher](https://profiles.wordpress.org/welcher/), and [@bph](https://profiles.wordpress.org/bph/) for contributing to and/or reviewing this article.*
**Share the post:**
* [Share on Mastodon (Opens in new window)Mastodon](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/?share=mastodon&nb=1)
* [Share on LinkedIn (Opens in new window)LinkedIn](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/?share=linkedin&nb=1)
* [Share on X (Opens in new window)X](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/?share=x&nb=1)
* [Share on Bluesky (Opens in new window)Bluesky](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/?share=bluesky&nb=1)
* Share on Mail (Opens in new window)Mail
* [Share on Reddit (Opens in new window)Reddit](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/?share=reddit&nb=1)
* [Share on Tumblr (Opens in new window)Tumblr](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/?share=tumblr&nb=1)
* [Share on Telegram (Opens in new window)Telegram](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/?share=telegram&nb=1)
* [Share on WhatsApp (Opens in new window)WhatsApp](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/?share=whatsapp&nb=1)
**Categories:** [AI](https://developer.wordpress.org/news/category/ai/), [Blocks](https://developer.wordpress.org/news/category/blocks/), [Playground](https://developer.wordpress.org/news/category/playground/), [Plugins](https://developer.wordpress.org/news/category/plugins/), [Themes](https://developer.wordpress.org/news/category/themes/)
**Tags:** [Monthly Roundups](https://developer.wordpress.org/news/tag/roundup/)
### Leave a Reply [Cancel reply](/news/2026/02/whats-new-for-developers-february-2026/#respond)
Your email address will not be published. Required fields are marked \*
Comment \*
Name \*
Email \*
Website
Save my name, email, and website in this browser for the next time I comment.
Notify me of follow-up comments by email.
Notify me of new posts by email.
Δ
## Have an idea for a new post?
### [Learn how to contribute](https://developer.wordpress.org/news/how-to-contribute/)
Share your knowledge with fellow WordPress developers.
### [Review tips and guidelines](https://developer.wordpress.org/news/tips-and-guidelines-for-writers/)
Everything you need to know about writing for the Blog.
## Subscribe to the Blog
Email Address
Subscribe
Join 1,861 other subscribers
* [About](https://wordpress.org/about/)
* [News](https://wordpress.org/news/)
* [Hosting](https://wordpress.org/hosting/)
* [Privacy](https://wordpress.org/about/privacy/)
* [Showcase](https://wordpress.org/showcase/)
* [Themes](https://wordpress.org/themes/)
* [Plugins](https://wordpress.org/plugins/)
* [Patterns](https://wordpress.org/patterns/)
* [Learn](https://learn.wordpress.org/)
* [Documentation](https://wordpress.org/documentation/)
* [Developers](https://developer.wordpress.org/)
* [WordPress.tv ↗](https://wordpress.tv/)
* [Get Involved](https://make.wordpress.org/)
* [Events](https://events.wordpress.org/)
* [Donate ↗](https://wordpressfoundation.org/donate/)
* [Five for the Future](https://wordpress.org/five-for-the-future/)
* [WordPress.com ↗](https://wordpress.com/?ref=wporg-footer)
* [Matt ↗](https://ma.tt/)
* [bbPress ↗](https://bbpress.org/)
* [BuddyPress ↗](https://buddypress.org/)
* [Visit our X (formerly Twitter) account](https://www.x.com/WordPress)
* [Visit our Bluesky account](https://bsky.app/profile/wordpress.org)
* [Visit our Mastodon account](https://mastodon.world/%40WordPress)
* [Visit our Threads account](https://www.threads.net/%40wordpress)
* [Visit our Facebook page](https://www.facebook.com/WordPress/)
* [Visit our Instagram account](https://www.instagram.com/wordpress/)
* [Visit our LinkedIn account](https://www.linkedin.com/company/wordpress)
* [Visit our TikTok account](https://www.tiktok.com/%40wordpress)
* [Visit our YouTube channel](https://www.youtube.com/wordpress)
* [Visit our Tumblr account](https://wordpress.tumblr.com/)
The WordPress® trademark is the intellectual property of the WordPress Foundation.
Close
PreviousNext
