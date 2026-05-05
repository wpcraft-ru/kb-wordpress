What’s new for developers? (March 2026) – WordPress Developer Blog
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
What’s new for developers? (March 2026)
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
# What’s new for developers? (March 2026)
By [Birgit Pauli-Haack](https://profiles.wordpress.org/bph/)
March 10, 2026
[AI](https://developer.wordpress.org/news/category/ai/), [Plugins](https://developer.wordpress.org/news/category/plugins/), [Themes](https://developer.wordpress.org/news/category/themes/), [Tools](https://developer.wordpress.org/news/category/tools/)
The release cycle for WordPress 7.0 is rapidly advancing. The latest [Gutenberg release (22.6)](https://make.wordpress.org/core/2026/02/25/whats-new-in-gutenberg-22-6-25-february/) has rounded up the features slated for 7.0, and the Release Candidate (RC1) is scheduled for March 19, 2026. The official Field Guide is also currently in development. [WordPress 7.0 Beta 3](https://wordpress.org/news/2026/03/wordpress-7-0-beta-3/) is now available for testing. The test team encourages participation and has published [a helpful guide](https://make.wordpress.org/test/2026/02/20/help-test-wordpress-7-0/), including summaries and videos, to help users become familiar with the new features.
Make sure you update immediately to the security-only minor release [WordPress 6.9.2](https://wordpress.org/news/2026/03/wordpress-6-9-2-release/) from today (10 March). It patches ten vulnerabilities: a blind SSRF, a PoP-chain weakness in the HTML API and Block Registry, regex DoS in numeric character references, stored XSS in nav menus and via the `data-wp-bind` directive, an AJAX authorization bypass, a PclZip path traversal, and an XXE in the bundled getID3 library—now also patched upstream.
**Update March 12:** In the meantime [WordPress 6.9.3 + 7.0 Beta 4](https://wordpress.org/news/2026/03/wordpress-6-9-3-and-7-0-beta-4/), and then [version 6.9.4](https://wordpress.org/news/2026/03/wordpress-6-9-4-release/) were released.
Table of Contents
1. [Highlights](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#highlights)
1. [Real-time Collaboration (RTC) coming to WordPress 7.0](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#real-time-collaboration-rtc-coming-to-wordpress-7-0)
2. [AI provider packages in the plugin directory](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#ai-provider-packages-in-the-plugin-directory)
3. [In-Editor revisions: visual change tracking](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#in-editor-revisions-visual-change-tracking)
2. [Plugins and tools](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#plugins-and-tools)
1. [Iframed post editor punted WordPress 7.1](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#iframed-post-editor-punted-wordpress-7-1)
2. [New WP CLI wp block and ability commands](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#new-wp-cli-wp-block-and-ability-commands)
3. [phpMyAdmin support in wp-env Playground runtime](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#phpmyadmin-support-in-wp-env-playground-runtime)
4. [Global Styles custom CSS now honors block-defined feature selectors](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#global-styles-custom-css-now-honors-block-defined-feature-selectors)
5. [Work on UI package and components continues](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#work-on-ui-package-and-components-continues)
3. [Themes](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#themes)
1. [Icon block](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#icon-block)
2. [Navigation overlays patterns](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#navigation-overlays-patterns)
3. [ContentOnly pattern editing](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#contentonly-pattern-editing)
4. [Gallery lightbox now supports image navigation](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#gallery-lightbox-now-supports-image-navigation)
5. [Text align support expanded](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#text-align-support-expanded)
4. [Resources](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#resources)
1. [First Dev Notes for WordPress 7.0](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#first-dev-notes-for-wordpress-7-0)
2. [Developer blog](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#developer-blog)
3. [External tools](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#external-tools)
## Highlights
### Real-time Collaboration (RTC) coming to WordPress 7.0
The underlying technical plumbing for RTC is now solved ahead of Beta 4. The implementation uses an HTTP polling sync provider, replacing unreliable WebRTC for universal compatibility across hosting environments. CRDT (Conflict-free Replicated Data Type) update data is stored persistently using post\_meta on a special internal post type (`wp_sync_storage`). The sync provider architecture is designed so that the storage and transport layer can be swapped out. Updates are periodically compacted, and requests are batched. Client-side Gutenberg code initially limits simultaneous collaborators to two, but hosts can add a different provider or adjust defaults via a wp-config constant. The decision to enable RTC by default will be finalized around RC2. See also the [accompanying Dev Note](https://make.wordpress.org/core/2026/03/10/real-time-collaboration-in-the-block-editor/).
### AI provider packages in the plugin directory
WordPress 7.0 will introduce a Connector feature built around the [php-ai-client package](https://packagist.org/packages/wordpress/php-ai-client), a shared PHP library for standard AI service communication. Three provider packages are now available in the Plugin Directory: one each for [OpenAI](https://wordpress.org/plugins/openai-provider/), [Google](https://wordpress.org/plugins/google-ai-provider/), and [Anthropic](https://wordpress.org/plugins/anthropic-ai-provider/). This structure allows developers to write features once against the shared interface, making provider switching a simple configuration change.
The [Connectors screen](https://github.com/WordPress/gutenberg/pull/75833) will land in Core, establishing credentials storage and provider selection as platform-level infrastructure.
### In-Editor revisions: visual change tracking
The block editor’s revisions panel now offers a [visual way to track changes](https://github.com/WordPress/gutenberg/pull/75049) directly in the document inspector. Color-coded overlays indicate changes: green outlines for added blocks, red for removed blocks, and yellow for blocks with modified settings. For text content, added text is green/underlined, removed text is red/Strikethrough, and format-only changes receive a yellow outline. This overlay can be toggled off. The feature uses a two-step process—a quick check for changed blocks, followed by a full rich-text comparison only on flagged blocks—and uses currentColor for theme-compatible coloring.
## Plugins and tools
Several Dev Notes have been published to give developers and agencies time to prepare for the new version. (see [Ressources section](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/#first-dev-notes-for-wordpress-7-0)) The final list of Dev notes will be published with the Field Guide after Release Candidate1.
### Iframed post editor punted WordPress 7.1
The “Always-iframed post editor,” covered in [What’s new for Developer (February 2026)](https://developer.wordpress.org/news/2026/02/whats-new-for-developers-february-2026/#always-iframed-post-editor), has been punted to Core WordPress 7.1. However, the Gutenberg plugin will still iframe the post editor blocks. [More details are available](https://make.wordpress.org/core/2026/02/24/iframed-editor-changes-in-wordpress-7-0/).
### New WP CLI wp block and ability commands
The WP-CLI team is developing a new set of commands (`wp block`) for read-only access to block entities, with an exception for exporting patterns and templates. An additional set of [ability commands](https://developer.wordpress.org/cli/commands/ability/) is also in development. These packages are ahead of WP-CLI v3.0 and available as dev dependencies for testing:
```
wp package install wp-cli/block-command:dev-main
wp package install wp-cli/ability-command:dev-main
```
Or via Composer
```
composer require wp-cli/block-command:dev-main --dev
composer require wp-cli/ability-command:dev-main --dev
```
or you could just use:
```
wp cli update --nightly
```
The team is targeting a 3.0 stable release for the end of March.
### phpMyAdmin support in wp-env Playground runtime
The wp-env Playground runtime now [supports phpMyAdmin](https://github.com/WordPress/gutenberg/pull/75532), reaching feature parity with the Docker runtime. You can enable it by adding a boolean options to your `.wp-env.json` configuration.
```
{
"phpmyadmin": true,
"runtime": "playground"
}
```
When enabled, phpMyAdmin is accessible at `http://localhost:8888/phpmyadmin`, and wp-env status will display the URL.
### Global Styles custom CSS now honors block-defined feature selectors
The block selectors API, which allows block authors to define feature-specific CSS targets in `block.json`, is now honored by the “[Additional CSS” feature in Global Styles](https://github.com/WordPress/gutenberg/pull/75799). This change allows a block to declare a selectors.css entry in its block.json to point custom CSS at a specific inner element (e.g., inner content, an image, or an ), giving precise control over theme-level custom CSS.Work on UI and Components Continues
### Work on UI package and components continues
The UI package continues to be developed with additional primitives and features, [supporting the Admin redesign](https://github.com/WordPress/gutenberg/issues/71196). Components recently added include:
* [IconButton component](https://github.com/WordPress/gutenberg/pull/74697)
* [Add a minimum switch](https://github.com/WordPress/gutenberg/pull/75133) to the Button component
* [Textarea primitive component](https://github.com/WordPress/gutenberg/pull/74707)
* [Tabs component](https://github.com/WordPress/gutenberg/pull/74652)
* [Dialog component](https://github.com/WordPress/gutenberg/pull/75183)
[Use semantic dimension tokens](https://github.com/WordPress/gutenberg/pull/74557).
## Themes
### Icon block
Designers can now utilize [a new Icon block](https://github.com/WordPress/gutenberg/pull/71227) to add SVG icons from a pre-selected library. This is backed by the new server-side SVG Icon Registration API. A REST endpoint is available at `/wp/v2/icons` for searching and filtering. The initial doesn’t allow registering third-party icon collections and draws from the `wordpress/icons` package. Extensibility for third-party icon registration is planned for the future, likely in 7.1, following further development on the Icon registry API architecture. The initial set draws from the `wordpress/icons` package.
### Navigation overlays patterns
Navigation blocks now feature customizable overlays, giving users full control over mobile menus. The feature is no longer experimental and will ship with WordPress 7.0. A **Create overlay** button guides the setup, offering patterns for various designs.
The details are available in the following PRs:
* [Remove experiment](https://github.com/WordPress/gutenberg/pull/74968#top)
* [Add Create Overlay button](https://github.com/WordPress/gutenberg/pull/74971#top)
* [Update overlay template part naming to ‘Navigation Overlay’](https://github.com/WordPress/gutenberg/pull/75564#top)
* [Filter navigation category patterns to only show in navigation-overlay template part context](https://github.com/WordPress/gutenberg/pull/75276#top)
### ContentOnly pattern editing
For WordPress 7.0, Patterns now default to [Content-Only editing mode](https://github.com/WordPress/gutenberg/issues/73775). This mode presents fields organized with block icons and grouped attributes in flyout menus, reducing design clutter for content creators. Rich text formatting works inline without interruption from the toolbar. When structural edits are needed, detaching a pattern restores full block access.
Administrators can opt out of Content-Only mode for unsynced patterns using the new `disableContentOnlyForUnsyncedPatterns` setting via PHP filter or JavaScript dispatch.
```
add_filter( 'block_editor_settings_all', function( $settings ) {
$settings['disableContentOnlyForUnsyncedPatterns'] = true;
return $settings;
} );
```
```
wp.data.dispatch( 'core/block-editor' ).updateSettings( {
disableContentOnlyForUnsyncedPatterns: true,
} );
```
### Gallery lightbox now supports image navigation
The lightbox feature in the Gallery block has been [extended to support navigation](https://github.com/WordPress/gutenberg/pull/62906) between images using back/next buttons and arrow keys. Images with lightbox disabled are automatically skipped.
### Text align support expanded
Eight blocks have been migrated to the standardized text-align block support:
* [Author Biography](https://github.com/WordPress/gutenberg/pull/74997)
* [Post Author Name](https://github.com/WordPress/gutenberg/pull/75109)
* [Post Comments Count](https://github.com/WordPress/gutenberg/pull/75321)
* [Post Comments Form](https://github.com/WordPress/gutenberg/pull/75322)
* [Post Comments Link](https://github.com/WordPress/gutenberg/pull/75332)
* [Post Terms](https://github.com/WordPress/gutenberg/pull/75545)
* [Post Time to Read](https://github.com/WordPress/gutenberg/pull/75541)
* [Term Description](https://github.com/WordPress/gutenberg/pull/75542)
## Resources
### First Dev Notes for WordPress 7.0
* [Breadcrumb block filters](https://make.wordpress.org/core/2026/03/04/breadcrumb-block-filters/): Learn how to use the two new PHP filters to customize breadcrumb trail items and taxonomy/term preferences.
* [Customizable Navigation Overlays](https://make.wordpress.org/core/2026/03/04/customisable-navigation-overlays-in-wordpress-7-0/): Theme developers learn how to register and bundle the new navigation-overlay template part area for fully customizable mobile navigation overlays.
* [Changes to the Interactivity API](https://make.wordpress.org/core/2026/03/04/changes-to-the-interactivity-api-in-wordpress-7-0/): The new `watch()` function and server-side `state.url` population enable cleaner patterns for side effects and navigation tracking. Note that `state.navigation` is now deprecated.
* [DataViews, DataForm, et al.](https://make.wordpress.org/core/2026/03/04/dataviews-dataform-et-al-in-wordpress-7-0/) : A substantial API update introduces new layouts, validation rules, grouping options, and picker improvements affecting plugins using `wordpress/dataviews`.
* [PHP-only block registration](https://make.wordpress.org/core/2026/03/03/php-only-block-registration/): You can now register a fully functional block with only PHP using the new `autoRegister` support flag—no JavaScript required.
* [Pseudo-element support for blocks and their variations in theme.json](https://make.wordpress.org/core/2026/03/09/pseudo-element-support-for-blocks-and-their-variations-in-theme-json/): Theme developers can now style :hover, :focus, :focus-visible, and :active states directly on blocks and their style variations in theme.json, removing the need for custom CSS.
* [Real-Time Collaboration in the Block Editor](https://make.wordpress.org/core/2026/03/10/real-time-collaboration-in-the-block-editor/): Essential reading for plugin developers: learn how classic meta boxes disable collaboration mode, how to use the sync.providers filter to customize the Yjs transport layer, and how to avoid common pitfalls like local state drift and unintended block insertion side effects.
### Developer blog
Two new blog posts landed on the Developer Blog in the past month. If you haven’t read them already, now’s the time:
* [A better way to test HTML in WordPress with assertEqualHTML()](https://developer.wordpress.org/news/2026/02/a-better-way-to-test-html-in-wordpress-with-assertequalhtml/)
* [How to add custom entries to the editor Preview dropdown](https://developer.wordpress.org/news/2026/02/how-to-add-custom-entries-to-the-editor-preview-dropdown/)
Never want to miss an article again? [Subscribe to the WordPress Developer Blog](https://developer.wordpress.org/news/subscribe/)
### External tools
[Yjs](http://yjs.dev/) is the engine powering WordPress’s long-awaited real-time collaborative editing.
*Props to [@greenshady](https://profiles.wordpress.org/greenshady/) and [@psykro](https://profiles.wordpress.org/psykro/) for reviewing this article.*
**Share the post:**
* [Share on Mastodon (Opens in new window)Mastodon](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/?share=mastodon&nb=1)
* [Share on LinkedIn (Opens in new window)LinkedIn](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/?share=linkedin&nb=1)
* [Share on X (Opens in new window)X](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/?share=x&nb=1)
* [Share on Bluesky (Opens in new window)Bluesky](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/?share=bluesky&nb=1)
* Share on Mail (Opens in new window)Mail
* [Share on Reddit (Opens in new window)Reddit](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/?share=reddit&nb=1)
* [Share on Tumblr (Opens in new window)Tumblr](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/?share=tumblr&nb=1)
* [Share on Telegram (Opens in new window)Telegram](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/?share=telegram&nb=1)
* [Share on WhatsApp (Opens in new window)WhatsApp](https://developer.wordpress.org/news/2026/03/whats-new-for-developers-march-2026/?share=whatsapp&nb=1)
**Categories:** [AI](https://developer.wordpress.org/news/category/ai/), [Plugins](https://developer.wordpress.org/news/category/plugins/), [Themes](https://developer.wordpress.org/news/category/themes/), [Tools](https://developer.wordpress.org/news/category/tools/)
**Tags:** [Monthly Roundups](https://developer.wordpress.org/news/tag/roundup/)
### Leave a Reply [Cancel reply](/news/2026/03/whats-new-for-developers-march-2026/#respond)
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
