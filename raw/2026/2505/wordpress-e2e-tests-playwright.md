Getting started writing WordPress E2E Tests with Playwright – WordPress Developer Blog
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
Getting started writing WordPress E2E Tests with Playwright
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
# Getting started writing WordPress E2E Tests with Playwright
By [Róbert Mészáros](https://profiles.wordpress.org/meszarosrob/)
May 4, 2026
[Advanced](https://developer.wordpress.org/news/category/advanced/), [Tests](https://developer.wordpress.org/news/category/tests/), [Tools](https://developer.wordpress.org/news/category/tools/)
You have already seen how [namespaces and coding standards](https://developer.wordpress.org/news/2025/09/implementing-namespaces-and-coding-standards-in-wordpress-plugin-development/), and adding [automated unit tests](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/) can increase your confidence that your project works as intended. But there’s another layer worth adding: end-to-end (E2E) tests. They let you test your project from a different angle, covering cases that unit tests can’t.
In this article, you’ll learn how to set up Playwright for WordPress E2E testing and write tests that cover block variations, block patterns, and the front-end after setting things up with the REST API. The practical examples cover real-world scenarios, giving you a solid foundation you can adapt to cover your own project’s features.
Table of Contents
1. [What is E2E testing?](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#what-is-e2e-testing)
2. [Before you begin](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#before-you-begin)
1. [The project under test](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#the-project-under-test)
2. [Required tools](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#required-tools)
3. [Project setup](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#project-setup)
3. [Local environment setup with wp-env](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#local-environment-setup-with-wp-env)
4. [Playwright setup](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#playwright-setup)
1. [Installing dependencies](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#installing-dependencies)
2. [Adding a configuration file](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#adding-a-configuration-file)
3. [Verifying the setup](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#verifying-the-setup)
5. [Your first test](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#your-first-test)
1. [Test walkthrough](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#test-walkthrough)
2. [Running tests in UI Mode](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#running-tests-in-ui-mode)
6. [Testing the Book Reviews project](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#testing-the-book-reviews-project)
7. [Testing the Book Author block](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#testing-the-book-author-block)
1. [Planning the test](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#planning-the-test)
2. [Inserting the block](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#inserting-the-block)
3. [Verifying the block](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#verifying-the-block)
1. [Verifying the attributes](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#verifying-the-attributes)
2. [Verifying the functionality](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#verifying-the-functionality)
8. [Testing the Book Review Card pattern](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#testing-the-book-review-card-pattern)
1. [Inserting the pattern](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#inserting-the-pattern)
2. [Verifying the pattern](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#verifying-the-pattern)
9. [Testing the front-end and meta values](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#testing-the-front-end-and-meta-values)
1. [Creating the post via REST API](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#creating-the-post-via-rest-api)
2. [Verifying the front-end output](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#verifying-the-front-end-output)
10. [Further reading](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#further-reading)
## What is E2E testing?
E2E tests can be used for performance, accessibility, and visual testing, but most commonly they take the form of UI-driven functional tests, simulating the actions a user would take in a browser interacting with an application, e.g. WordPress.
Unlike [unit tests](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/), E2E tests are macro-level. Even when testing a specific feature, they examine how multiple components and layers of the application work together as a whole. This broader scope comes at a cost: E2E tests are slower and sometimes more fragile than unit tests. Because they interact with the full application stack, a change in any layer, the UI, network, or database, could break a test. They are therefore best used to cover critical user flows rather than every possible scenario.
The Gutenberg project has [used E2E tests extensively](https://make.wordpress.org/core/2019/06/27/introducing-the-wordpress-e2e-tests/) right from the beginning, as they lend themselves well to the nature of that project. Since then, they have [made their way into WordPress Core](https://make.wordpress.org/core/2020/08/07/e2e-end-to-end-testing-in-core-working-group-proposal/) as well, complementing the already extensive [PHPUnit](https://make.wordpress.org/core/handbook/testing/automated-testing/phpunit/) test suite.
## Before you begin
### The project under test
Before moving forward, make sure you are familiar with the [Building a book review site with Block Bindings](https://developer.wordpress.org/news/2024/05/building-a-book-review-site-with-block-bindings-part-1-custom-fields-and-block-variations/) series, as the tests in this article are based on the features built there.
It’s a two-part series and well worth reading from start to finish, as there’s a lot to learn from it. That said, skimming it is enough to follow along, even if you skip the more technical parts.
### Required tools
If you’d like to follow along with the coding examples, make sure you have Git, Node.js, and Docker installed. Docker is a [requirement for `wp-env`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#prerequisites), which will be used for the local WordPress environment setup.
If you need help installing any of these tools, refer to the [Block Development Environment](https://developer.wordpress.org/block-editor/getting-started/devenv/) guide.
### Project setup
To set up what [Justin Tadlock](https://profiles.wordpress.org/greenshady/) built, download or clone the Building a Book Review Site with Block Bindings [repository](https://github.com/wptrainingteam/tt4-book-reviews).
Start from the `master` branch, but if you ever get stuck you can view the [`feature/e2e-playwright-tests`](https://github.com/wptrainingteam/tt4-book-reviews/compare/master...feature/e2e-playwright-tests) branch to see the final code of the E2E tests added as part of this article.
Once you have the files locally, install the dependencies, which already include `wp-scripts` among other things, from within the project folder by running:
```
npm install
```
## Local environment setup with wp-env
To run the E2E tests, you need a WordPress environment up and running with everything installed and configured, in this case the TT4 Book Reviews child theme, along with the [Twenty Twenty-Four](https://wordpress.org/themes/twentytwentyfour/) parent theme, installed and active.
For a local WordPress environment, `wp-env` remains a solid choice, as it minimizes setup time, is maintained by the WordPress project itself, and integrates well with other WordPress tooling. That said, `wp-env` isn’t a strict requirement, and it’s also not uncommon to maintain a dedicated test site hosted on a server instead of a local installation.
To install `wp-env`, run:
```
npm install @wordpress/env@^10.39.0 --save-dev
```
Next, create a `.wp-env.json` configuration file with the following:
```
{
"$schema": "https://schemas.wp.org/trunk/wp-env.json",
"themes": [ "." ],
"lifecycleScripts": {
"afterStart": "THEME_SLUG=$(basename \"$PWD\"); for SERVICE in cli tests-cli; do wp-env run \"$SERVICE\" wp theme activate \"$THEME_SLUG\"; done"
}
}
```
This maps the current folder as a theme, and the [lifecycle script activates the theme](https://github.com/WordPress/gutenberg/issues/26766) on both the development and test environments that `wp-env` spins up.
Since the Twenty Twenty-Four theme is available by default in `wp-env`, no extra step is needed to install it.
Start the environment by running:
```
npx wp-env start
```
Once it has started, you should see output similar to:
```
WordPress development site started at http://localhost:8888
WordPress test site started at http://localhost:8889
MySQL is listening on port 32770
MySQL for automated testing is listening on port 32771
✔ Done! (in 29s 136ms)
```
If you get an error saying that port `8888` or `8889` is not available, it means another service is already using it. The simplest fix is to stop that service and restart it when you will need it later. Alternatively, you can configure `wp-env` to [use a different port](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#custom-port-numbers), but you will also need to update the `webServer` setting in the Playwright config below.
Many WordPress tools also assume a `wp-env` script is defined in `package.json`, including the default Playwright configuration that will be added in the next step. Add it by modifying your existing file:
```
{
"scripts": {
"start": "...",
"build": "...",
"wp-env": "wp-env"
},
"devDependencies": {
// ...
}
}
```
If it’s your first time using `wp-env` and you’d like to learn more, the [Get started with wp-env](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/) guide or the [Quick and easy local WordPress development with wp-env](https://developer.wordpress.org/news/2023/03/quick-and-easy-local-wordpress-development-with-wp-env/) article are both excellent places to begin.
## Playwright setup
For E2E testing, WordPress uses [Playwright](https://playwright.dev/), which is a reliable, modern, and widely adopted solution.
It isn’t the only option for E2E testing, though. WordPress [has used Puppeteer](https://make.wordpress.org/core/2022/03/23/migrating-wordpress-e2e-tests-to-playwright/) in the past, and some packages still exist for it, but for new projects, Playwright-based packages are always the way to go.
### Installing dependencies
In addition to the Playwright Test package, install the [End-To-End (E2E) Playwright test utils for WordPress library](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-e2e-test-utils-playwright/). This provides WordPress-specific conveniences that will make everything easier.
To install both, run:
```
npm install @playwright/test@^1.58.2 @wordpress/e2e-test-utils-playwright@^1.41.0 --save-dev
```
Playwright also requires [browser binaries and system dependencies](https://playwright.dev/docs/browsers#introduction) separate from the JavaScript package. The download may be several hundred megabytes, and since it installs system-level dependencies, it may ask for your root password.
Install them by running:
```
npx playwright install --with-deps
```
### Adding a configuration file
Playwright has many [configuration](https://playwright.dev/docs/test-configuration) options, but to get started you can use the [default configuration](https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/config/playwright.config.js) that `wp-scripts` exposes.
Create a `playwright.config.js` file and add the following:
```
export { default } from '@wordpress/scripts/config/playwright.config.js';
```
This is a solid starting point. Later, if you need to customize any defaults, for example, changing the location of your test files, you can extend the base configuration like this:
```
import { defineConfig } from '@playwright/test';
import baseConfig from '@wordpress/scripts/config/playwright.config';
export default defineConfig( {
...baseConfig,
testDir: './tests/e2e/', // Instead of the specs directory which is the default location
} );
```
It’s worth keeping in mind that the default configuration assumes the usage of `wp-env` and starts it automatically when the E2E tests are executed. If you’re using something besides `wp-env`, you’ll need to customize the default [`webServer`](https://playwright.dev/docs/test-webserver) configuration.
### Verifying the setup
At this point, everything is in place for writing your first test. To confirm the setup is working, run:
```
npx wp-scripts test-playwright
```
You should see a message indicating that no test files were found:
```
Error: No tests found
```
That’s expected, since you haven’t written any tests yet!
## Your first test
To get started, add a [sample test](https://github.com/WordPress/wordpress-develop/blob/trunk/tests/e2e/specs/hello.test.js) borrowed from the WordPress Core E2E test suite before writing anything project-specific. This test loads the WordPress Admin Dashboard and verifies that the “Welcome to WordPress” heading is displayed.
Create a new folder called `specs` and inside it, create a file named `main.spec.js` with the following content:
```
import { test, expect } from '@wordpress/e2e-test-utils-playwright';
test( 'Loads WordPress dashboard', async ( { admin, page } ) => {
await admin.visitAdminPage( '/' );
await expect(
page.getByRole( 'heading', { name: 'Welcome to WordPress', level: 2 } )
).toBeVisible();
} );
```
Run the test suite again:
```
npx wp-scripts test-playwright
```
This time, instead of an error, you should see the test pass:
```
Running 1 test using 1 worker
✓ 1 [chromium] › specs/main.spec.js:3:5 › Loads WordPress dashboard (831ms)
1 passed (2.1s)
```
### Test walkthrough
Every test has a name, in this case “Loads WordPress dashboard”, and its logic lives inside the callback passed to `test()`.
Test logic can typically be categorized into three parts: setting preconditions, performing actions, and verifying outcomes. This is commonly referred to as the Arrange, Act, and Assert (AAA) pattern. In practice, in E2E tests these steps may be interleaved or have action-assert cycles rather than a single linear sequence.
For the “Loads WordPress dashboard” test, the action is simply visiting the admin dashboard.
```
await admin.visitAdminPage( '/' );
```
Other checks could be imagined for the assertion, but if the “Welcome to WordPress” heading with level 2 is visible and you’re on the `/wp-admin/` URL, it’s a fair assumption that the page has fully loaded and you’re on the dashboard.
```
await expect(
page.getByRole( 'heading', { name: 'Welcome to WordPress', level: 2 } )
).toBeVisible();
```
This test also uses a WordPress-specific helper, `admin.visitAdminPage()`, provided by the WordPress E2E Test Utils package that you installed earlier.
These helpers can hide quite a lot of complexity and handle edge cases to make things easier. Here’s what the [functions](https://github.com/WordPress/gutenberg/blob/f4bc5afc378e8800a820a7d6637fcf4b26a0d7c8/packages/e2e-test-utils-playwright/src/admin/visit-admin-page.ts#L18) actually do behind the scenes:
```
export async function visitAdminPage(
this: Admin,
adminPath: string,
query?: string
) {
await this.page.goto(
join( 'wp-admin', adminPath ) + ( query ? `?${ query }` : '' )
);
// Handle upgrade required screen
if ( this.pageUtils.isCurrentURL( 'wp-admin/upgrade.php' ) ) {
// Click update
await this.page.click( '.button.button-large.button-primary' );
// Click continue
await this.page.click( '.button.button-large' );
}
if ( this.pageUtils.isCurrentURL( 'wp-login.php' ) ) {
throw new Error( 'Not logged in' );
}
const error = await this.getPageError();
if ( error ) {
throw new Error( 'Unexpected error in page content: ' + error );
}
}
```
Everything else in the “Loads WordPress dashboard” is standard Playwright API: `page.getByRole()` for selecting elements, referred to as [locators](https://playwright.dev/docs/locators), and `expect().toBeVisible()` for the [assertion](https://playwright.dev/docs/test-assertions) itself.
There’s one more thing worth calling out. Before the test ran, you were already authenticated as an administrator, which is why the dashboard is visible at all. This happens automatically when using the default WordPress tooling and configuration. This means all tests run from the perspective of a logged-in admin user.
That’s an important detail to keep in mind, since some scenarios require testing from a visitor’s perspective instead.
### Running tests in UI Mode
You can also run tests in what is referred to as UI Mode, which makes debugging and inspecting test behavior much easier. Run the same command with the `--ui` flag:
```
npx wp-scripts test-playwright --ui
```
This opens a new browser window with the full suite of tools UI Mode provides.
The UI is fairly intuitive, but if you’d like to learn about every feature in depth, the Playwright [UI Mode documentation](https://playwright.dev/docs/test-ui-mode) includes a video walkthrough as well.
Even if you’re a fan of the command line, it’s worth giving this a try!
## Testing the Book Reviews project
To keep the article to a reasonable length, only a few key areas of the [Building a Book Review Site with Block Bindings](https://developer.wordpress.org/news/2024/05/building-a-book-review-site-with-block-bindings-part-1-custom-fields-and-block-variations/) are covered, but hopefully once you’re done reading this, you’ll feel inspired to cover a few more scenarios on your own.
The areas covered are:
1. A test that checks whether the Paragraph block variations, such as Book Author, are registered, can be inserted, and produce the expected output when inserted.
2. A test that verifies whether a custom pattern is registered, can be inserted, and contains the correct blocks once inserted.
3. And to mix things up a bit, a test that verifies whether post meta values are correctly rendered on the front end once set.
## Testing the Book Author block
The TT4 Book Reviews child theme registers a block variation called Book Author.
This variation of the Paragraph block makes use of [block bindings](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-bindings/) and uses the value of the `themeslug_book_author` post meta key as its content.
For easy reference, here’s [how it was registered](https://developer.wordpress.org/news/2024/05/building-a-book-review-site-with-block-bindings-part-1-custom-fields-and-block-variations/#registering-variations-for-bound-blocks):
```
registerBlockVariation( 'core/paragraph', {
name: 'themeslug/book-author',
title: __( 'Book Author', 'themeslug' ),
description: __( 'Displays the book author.', 'themeslug' ),
category: 'widgets',
keywords: [ 'book', 'author' ],
icon: pencil,
scope: [ 'inserter' ],
attributes: {
metadata: {
bindings: {
content: {
source: 'core/post-meta',
args: {
key: 'themeslug_book_author',
},
},
},
},
placeholder: __( 'Book Author', 'themeslug' ),
},
example: {},
isActive: ( blockAttributes ) =>
'themeslug_book_author' ===
blockAttributes?.metadata?.bindings?.content?.args?.key,
} );
```
### Planning the test
A good starting point for any UI-driven functional E2E test is to imagine how you would test it manually, then note down each step in detail, and replicate those steps in code.
For example, you can verify that the Book Author block variation is registered and insertable by creating a new post, opening the block inserter, finding Book Author among the available blocks, and clicking on it to insert it.
If you can follow these steps and the block shows up in the editor, you can fairly confidently say that things are working as expected. However, this alone isn’t enough. You should also verify that the Book Author block does what it’s supposed to do, display the value of the post meta it is bound to.
There are different ways to go about this, but start by translating the steps above into code.
### Inserting the block
You could create a new test file under `/specs/`, but for simplicity, add a new test called “Inserts Book Author block” to `main.spec.js` for now. Here’s how it should look:
```
test( 'Inserts Book Author block', async ( { admin, page, editor } ) => {
await admin.createNewPost();
await page
.getByRole( 'button', {
name: 'Block Inserter',
} )
.click();
await page
.getByRole( 'region', { name: 'Block Library' } )
.getByRole( 'listbox', { name: 'Widgets' } )
.getByRole( 'option', { name: 'Book Author', exact: true } )
.click();
// Assertions
} );
```
If you run the tests in UI Mode, you should see Playwright performing each step and the results:
```
npx wp-scripts test-playwright --ui
```
First, it creates a new post using a [helper](https://github.com/WordPress/gutenberg/blob/trunk/packages/e2e-test-utils-playwright/src/admin/create-new-post.ts) from the WordPress E2E Test Utils package.
```
await admin.createNewPost();
```
Then it finds and selects elements on the page and clicks them, just as you would when testing manually.
```
await page
.getByRole( 'button', {
name: 'Block Inserter',
} )
.click();
await page
.getByRole( 'region', { name: 'Block Library' } )
.getByRole( 'listbox', { name: 'Widgets' } )
.getByRole( 'option', { name: 'Book Author', exact: true } )
.click();
```
There are many ways to select an element, including [CSS selectors and XPath](https://playwright.dev/docs/locators#locate-by-css-or-xpath), however, the WordPress best practices guide recommends [using accessible selectors](https://developer.wordpress.org/block-editor/contributors/code/testing-overview/e2e/#use-accessible-selectors).
Your browser’s developer tools likely have a feature for viewing the accessibility tree. For example, here’s how to switch to [Accessibility Tab](https://developer.chrome.com/docs/devtools/accessibility/reference#tab) or toggle the [Full accessibility tree](https://developer.chrome.com/blog/full-accessibility-tree/#full_accessibility_tree_in_devtools) on Chrome’s DevTools. This lets you easily see the roles and names of the elements.
When possible, stick to the recommended approach, though in practice that isn’t always feasible.
### Verifying the block
#### Verifying the attributes
One way to verify that the inserted block is using the block bindings and the `core/post-meta binding` source is to check whether it has the right attributes.
Manually, you could verify this by switching to the Code Editor and confirming that the block markup matches your expectations.
If all these attributes are present, it’s fair to assume the block will work as intended. If something isn’t working despite the attributes being correct, the issue likely would be in WordPress Core itself.
With Playwright you can do this by programmatically retrieving the block structure and comparing it against an expected structure. Here’s the code for it:
```
await expect.poll( editor.getBlocks ).toMatchObject( [
{
name: 'core/paragraph',
attributes: {
metadata: {
bindings: {
content: {
source: 'core/post-meta',
args: { key: 'themeslug_book_author' },
},
},
},
placeholder: 'Book Author',
},
},
] );
```
The [`poll`](https://playwright.dev/docs/test-assertions#expectpoll) is added for safety. Block insertion is asynchronous, and simply calling `expect( editor.getBlocks )` could potentially fail before the blocks are available. `poll` retries the callback until it passes or times out, which improves reliability.
#### Verifying the functionality
A different approach is to check whether the value stored in the `themeslug_book_author` post meta is actually displayed as the content of the block, rather than inspecting the attributes directly.
If you want to do this manually, you have to open the Editor settings, select the Post tab, find the Book Reviews panel, open it, and enter a value in the Author field.
Here’s how these steps translate to code:
```
await editor.openDocumentSettingsSidebar();
await page.getByRole( 'tab', { name: 'Post' } ).click();
await page
.getByRole( 'region', { name: 'Editor settings' } )
.getByRole( 'button', {
name: 'Book Review',
} )
.click();
await page
.getByRole( 'textbox', {
name: 'Author',
} )
.fill( 'Jane Austen' );
```
That’s quite a few steps just to set a single value.
Since for this test the goal isn’t to test the Author control itself, the value of the post meta can be set programmatically using [`wp.data.dispatch`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#dispatch).
Here’s how that looks together with the code that selects the block and checks the displayed content:
```
await page.evaluate( () =>
wp.data
.dispatch( 'core/editor' )
.editPost( { meta: { themeslug_book_author: 'Jane Austen' } } )
);
const bookAuthorBlock = editor.canvas.getByRole( 'document', {
name: 'Block: Paragraph',
} );
await expect( bookAuthorBlock ).toHaveText( 'Jane Austen' );
```
The [`evaluate`](https://playwright.dev/docs/api/class-page#page-evaluate) call is used to ensure the callback executes inside the page JavaScript context, so it can access the global `wp.data`.
You don’t even necessarily have to choose one approach over the other, you can keep both.
As you write more tests and read more on the subject, you’ll develop your own ideas of what works best for your project: where to draw the line, what feels like too much coverage, and what doesn’t feel robust enough.
For reference, here’s the entire “Inserts the Book Author block” test code together:
```
test( 'Inserts Book Author block', async ( { admin, page, editor } ) => {
await admin.createNewPost();
await page
.getByRole( 'button', {
name: 'Block Inserter',
} )
.click();
await page
.getByRole( 'region', { name: 'Block Library' } )
.getByRole( 'listbox', { name: 'Widgets' } )
.getByRole( 'option', { name: 'Book Author', exact: true } )
.click();
await expect.poll( editor.getBlocks ).toMatchObject( [
{
name: 'core/paragraph',
attributes: {
metadata: {
bindings: {
content: {
source: 'core/post-meta',
args: { key: 'themeslug_book_author' },
},
},
},
placeholder: 'Book Author',
},
},
] );
await page.evaluate( () =>
wp.data
.dispatch( 'core/editor' )
.editPost( { meta: { themeslug_book_author: 'Jane Austen' } } )
);
const bookAuthorBlock = editor.canvas.getByRole( 'document', {
name: 'Block: Paragraph',
} );
await expect( bookAuthorBlock ).toHaveText( 'Jane Austen' );
} );
```
If you run the test command at this point, you should see in the output that two tests have passed.
```
npx wp-scripts test-playwright
```
```
Running 2 tests using 1 worker
✓ 1 [chromium] › specs/main.spec.js:3:5 › Loads WordPress dashboard (869ms)
✓ 2 [chromium] › specs/main.spec.js:11:5 › Inserts Book Author block (2.6s)
2 passed (4.8s)
```
## Testing the Book Review Card pattern
You can test the other block variations similarly, but let’s see how you could test one of the patterns registered by the theme, the [Book Review Card](https://developer.wordpress.org/news/2024/06/building-a-book-review-site-with-block-bindings-part-2-queries-patterns-and-templates/#book-review-card).
This pattern makes use of all the registered block variations and arranges them in a specific layout, incorporating other blocks such as Columns, Group, and others.
Book Review Card pattern source
```
php
/**
* Title: Book Review Card
* Slug: themeslug/book-review-card
* Categories: themeslug-book-review
* Viewport Width: 1376
*/
?
⭐️
php esc_html_e( '/ 5 Stars', 'themeslug' ); ?
📃
php esc_html_e( 'Pages', 'themeslug' ); ?
php esc_html_e( '✍️ Written by', 'themeslug' ); ?
php esc_html_e( 'View on Goodreads <span→', 'themeslug' ); ?>
```
It’s entirely possible to test this pattern the same way the Book Author block was tested.
However, given the number of blocks it contains, the test code would be very repetitive and long. Thankfully, there’s an alternative approach that comes in handy in these situations, which you’ll see in a moment.
### Inserting the pattern
To check if the pattern is registered and insertable, you can apply the same principle as before.
Create a new test called “Insert Book Reviews pattern” in `main.spec.js` with the following code:
```
test( 'Inserts Book Review Card pattern', async ( { admin, page, editor } ) => {
await admin.createNewPost();
await page
.getByRole( 'button', {
name: 'Block Inserter',
} )
.click();
await page
.getByRole( 'tab', {
name: 'Patterns',
} )
.click();
await page.getByRole( 'tab', { name: 'Book Reviews' } ).click();
await page
.getByRole( 'listbox', { name: 'Book Reviews' } )
.getByRole( 'option', { name: 'Book Review Card' } )
.click();
// Assertions
} );
```
As with the block test, this creates a new post to start fresh, then locates the elements on the page and clicks on the pattern to insert it.
### Verifying the pattern
Since the pattern consists of multiple blocks, checking them separately would be tedious. To save time, use [snapshot testing](https://playwright.dev/docs/aria-snapshots) to verify the entire pattern at once, rather than checking each block individually.
Snapshots are representations of a state, element, or some data captured at a given moment, saved and then used for comparison.
All you have to do is select the outermost element of the pattern, the one that wraps the rest, and use the `toMatchAriaSnapshot` assertion:
```
const bookReviewCardPattern = editor.canvas.getByRole( 'document', {
name: 'Block: Columns',
} );
await expect( bookReviewCardPattern ).toMatchAriaSnapshot();
```
If you run `test-playwright` at this point, you’ll get an error because snapshots have to be generated first:
```
Running 3 tests using 1 worker
✓ 1 [chromium] › specs/main.spec.js:3:5 › Loads WordPress dashboard (896ms)
✓ 2 [chromium] › specs/main.spec.js:11:5 › Inserts Book Author block (2.6s)
✘ 3 [chromium] › specs/main.spec.js:56:5 › Inserts Book Review Card pattern (8.0s)
1) [chromium] › specs/main.spec.js:56:5 › Inserts Book Review Card pattern ───────────────────────
Error: A snapshot doesn't exist at specs/__snapshots__/Inserts-Book-Review-Card-pattern-1-chromium.aria.yml, writing actual.
80 | } );
81 |
> 82 | await expect( bookReviewCardPattern ).toMatchAriaSnapshot();
| ^
83 | } );
84 |
1 failed
[chromium] › specs/main.spec.js:56:5 › Inserts Book Review Card pattern ────────────────────────
2 passed (13.0s)
```
If you are using the UI Mode, you should see under the Errors panel:
Once you’ve made sure that the pattern is correct, you can save the snapshot using the usual command with the `--update-snapshots` flag:
```
npx wp-scripts test-playwright --update-snapshots
```
After running it, a new file should appear at `/specs/__snapshots__/Inserts-Book-Review-Card-pattern-1-chromium.yml` containing the accessibility tree representation in YAML format:
```
- 'document "Block: Columns"':
- 'document "Block: Column (1 of 2)"':
- 'document "Block: Featured Image"':
- button "Add a featured image"
- 'document "Block: Column (2 of 2)"':
- 'document "Block: Stack"':
- 'document "Block: Row"':
- 'document "Block: Paragraph"'
- document "Empty themeslug_book_rating; start writing to edit its value"
- 'document "Block: Paragraph"'
- 'document "Block: Row"':
- 'document "Block: Paragraph"':
- strong: 📃
- document "Empty themeslug_book_length; start writing to edit its value"
- 'document "Block: Paragraph"'
- 'document "Block: Row"':
- 'document "Block: Paragraph"'
- document "Empty themeslug_book_author; start writing to edit its value"
- 'document "Block: Buttons"':
- 'document "Block: Book Goodreads Button"':
- textbox "Button text"
- 'document "Block: Pullquote"':
- blockquote:
- textbox "Pullquote text"
```
Now, run the test command without the flag to compare the pattern’s output with the snapshot:
```
npx wp-scripts test-playwright
```
Only use `--update-snapshots` when you intentionally want to update the snapshots!
For reference, here’s the complete “Inserts Book Reviews pattern” test:
```
test( 'Inserts Book Review Card pattern', async ( { admin, page, editor } ) => {
await admin.createNewPost();
await page
.getByRole( 'button', {
name: 'Block Inserter',
} )
.click();
await page
.getByRole( 'tab', {
name: 'Patterns',
} )
.click();
await page.getByRole( 'tab', { name: 'Book Reviews' } ).click();
await page
.getByRole( 'listbox', { name: 'Book Reviews' } )
.getByRole( 'option', { name: 'Book Review Card' } )
.click();
const bookReviewCardPattern = editor.canvas.getByRole( 'document', {
name: 'Block: Columns',
} );
await expect( bookReviewCardPattern ).toMatchAriaSnapshot();
} );
```
At this point you have three tests, and all should pass.
```
npx wp-scripts test-playwright
```
```
Running 3 tests using 1 worker
✓ 1 [chromium] › specs/main.spec.js:3:5 › Loads WordPress dashboard (848ms)
✓ 2 [chromium] › specs/main.spec.js:11:5 › Inserts Book Author block (2.8s)
✓ 3 [chromium] › specs/main.spec.js:56:5 › Inserts Book Review Card pattern (3.1s)
3 passed (7.7s)
```
## Testing the front-end and meta values
To test that the blocks are displaying the post meta values on the front end, you need to both insert the blocks or the pattern and set the meta values.
Doing this step by step through the Editor would result in a lot of code. If how the post was created and the set up isn’t important to the test itself, it’s worth considering a shortcut.
### Creating the post via REST API
A good shortcut is using the REST API to create a post, adding the necessary metadata for the pattern (author, rating, length, and Goodreads URL). This method bypasses the editor UI entirely.
To create a new post, there’s a dedicated helper called [`requestUtils.createPost()`](https://github.com/WordPress/gutenberg/blob/trunk/packages/e2e-test-utils-playwright/src/request-utils/posts.ts), but you could also interact with the [posts](https://developer.wordpress.org/rest-api/reference/posts/) or any endpoint directly.
Once again, create a new test in the `main.specs.js` and add the following setup part:
```
test( 'Displays book review meta on the frontend', async ( {
page,
requestUtils,
} ) => {
const newPost = await requestUtils.createPost( {
status: 'publish',
title: 'Emma',
content: '',
meta: {
themeslug_book_author: 'Jane Austen',
themeslug_book_rating: '5',
themeslug_book_length: '477',
themeslug_book_goodreads_url:
'https://www.goodreads.com/book/show/6969.Emma',
},
} );
await page.goto( `?p=${ newPost.id }` );
// Assertions
} );
```
### Verifying the front-end output
You may have already guessed what will happen in the assertion part. It’s a matter of selecting the elements and verifying their state.
Here’s the code for the assertion part:
```
await expect( page.getByText( '5 / 5 Stars' ) ).toBeVisible();
await expect( page.getByText( '477 Pages' ) ).toBeVisible();
await expect( page.getByText( 'Written by Jane Austen' ) ).toBeVisible();
await expect(
page.getByRole( 'link', { name: 'View on Goodreads' } )
).toHaveAttribute(
'href',
'https://www.goodreads.com/book/show/6969.Emma'
);
```
This is one of those cases where it isn’t possible to use an accessibility locator such as [`getByRole`](https://playwright.dev/docs/locators#locate-by-role), as, for example, the HTML for the “5 / 5 Stars” part looks like this:
```
⭐️
5
/ 5 Stars
```
The containing `div` is a [non-semantic element](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles), and the text itself is spread across multiple `p` tags.
With all that said, here’s the complete “Displays book review meta on the frontend” test:
```
test( 'Displays book review meta on the frontend', async ( {
page,
requestUtils,
} ) => {
const newPost = await requestUtils.createPost( {
status: 'publish',
title: 'Emma',
content: '',
meta: {
themeslug_book_author: 'Jane Austen',
themeslug_book_rating: '5',
themeslug_book_length: '477',
themeslug_book_goodreads_url:
'https://www.goodreads.com/book/show/6969.Emma',
},
} );
await page.goto( `?p=${ newPost.id }` );
await expect( page.getByText( '5 / 5 Stars' ) ).toBeVisible();
await expect( page.getByText( '477 Pages' ) ).toBeVisible();
await expect( page.getByText( 'Written by Jane Austen' ) ).toBeVisible();
await expect(
page.getByRole( 'link', { name: 'View on Goodreads' } )
).toHaveAttribute(
'href',
'https://www.goodreads.com/book/show/6969.Emma'
);
} );
```
If you run the tests one final time, you should see all of them passing.
```
npx wp-scripts test-playwright
```
```
Running 4 tests using 1 worker
✓ 1 [chromium] › specs/main.spec.js:3:5 › Loads WordPress dashboard (848ms)
✓ 2 [chromium] › specs/main.spec.js:11:5 › Inserts Book Author block (2.8s)
✓ 3 [chromium] › specs/main.spec.js:56:5 › Inserts Book Review Card pattern (3.1s)
✓ 4 [chromium] › specs/main.spec.js:85:5 › Displays book review meta on the frontend (413ms)
4 passed (8.4s)
```
## Further reading
Hopefully this article has shown that, once the setup is out of the way, writing basic E2E tests is more approachable than it might seem, and that a handful of core concepts can take you surprisingly far.
That said, there’s plenty more to explore, and this article only scratches the surface.
The [Playwright documentation](https://playwright.dev/docs/intro) is comprehensive yet accessible at all levels. A good starting point is the [Writing Tests](https://playwright.dev/docs/writing-tests) page, which covers a few more actions and assertions beyond what’s been discussed here.
From there, it’s worth learning how to organize tests across multiple files and groups, and how you can simplify things with [test hooks](https://playwright.dev/docs/writing-tests#using-test-hooks), which are executed before and after each test. The Playwright [best practices](https://playwright.dev/docs/best-practices) guide and WordPress [Core’s own recommendations](https://developer.wordpress.org/block-editor/contributors/code/testing-overview/e2e/) are both worth reading as your test suite grows.
For real-world examples, the [E2E tests Gutenberg provides for Core blocks](https://github.com/WordPress/gutenberg/tree/trunk/test/e2e/specs/editor/blocks) is a great source of inspiration. The [E2E Playwright test utils for WordPress source](https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-test-utils-playwright/src) is also worth browsing to discover the full range of available helpers.
Once your tests grow, [fixtures](https://playwright.dev/docs/test-fixtures) offer a clean way to extract reusable logic out of individual tests. There’s also dedicated guidance on [setting up CI](https://playwright.dev/docs/ci-intro) if you want to run tests on every commit or PR.
Finally, if you’re curious about where things are heading, keep an eye on [Test Agents](https://playwright.dev/docs/test-agents), or if you’d prefer a lower-code approach, Playwright can also [generate tests](https://playwright.dev/docs/codegen) for you.
*Props to [@greenshady](https://profiles.wordpress.org/greenshady/) and [@bph](https://profiles.wordpress.org/bph/) for their reviews.*
**Share the post:**
* [Share on Mastodon (Opens in new window)Mastodon](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/?share=mastodon&nb=1)
* [Share on LinkedIn (Opens in new window)LinkedIn](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/?share=linkedin&nb=1)
* [Share on X (Opens in new window)X](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/?share=x&nb=1)
* [Share on Bluesky (Opens in new window)Bluesky](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/?share=bluesky&nb=1)
* Share on Mail (Opens in new window)Mail
* [Share on Reddit (Opens in new window)Reddit](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/?share=reddit&nb=1)
* [Share on Tumblr (Opens in new window)Tumblr](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/?share=tumblr&nb=1)
* [Share on Telegram (Opens in new window)Telegram](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/?share=telegram&nb=1)
* [Share on WhatsApp (Opens in new window)WhatsApp](https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/?share=whatsapp&nb=1)
**Categories:** [Advanced](https://developer.wordpress.org/news/category/advanced/), [Tests](https://developer.wordpress.org/news/category/tests/), [Tools](https://developer.wordpress.org/news/category/tools/)
**Tags:** [Automated testing](https://developer.wordpress.org/news/tag/automated-testing/), [E2E](https://developer.wordpress.org/news/tag/e2e/)
### Leave a Reply [Cancel reply](/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/#respond)
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
