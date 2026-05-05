How to add automated unit tests to your WordPress plugin – WordPress Developer Blog
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
How to add automated unit tests to your WordPress plugin
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
# How to add automated unit tests to your WordPress plugin
By [David Perez](https://profiles.wordpress.org/davidperez/)
December 16, 2025
[Advanced](https://developer.wordpress.org/news/category/advanced/), [Plugins](https://developer.wordpress.org/news/category/plugins/), [Tools](https://developer.wordpress.org/news/category/tools/)
When you are developing WordPress plugins, ensuring code quality is not only best practice—it’s a necessity for building robust and reliable plugins. You’ll find that users have various environments with different WordPress versions, PHP configurations, and setups involving various themes and related plugins. Without a reliable verification system in place, you can easily run into unexpected errors. In future versions, you could also introduce regressions and cause issues in parts that were previously working.
Incorporating tests into your workflow prevents regressions and ensures stability and builds confidence with every new release.
In this tutorial, you’ll learn step by step how to add automated unit tests to your WordPress plugin—from setting up the environment to integrating with GitHub to run tests automatically.
Table of Contents
1. [What are unit tests, and why use them in WordPress?](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#what-are-unit-tests-and-why-use-them-in-wordpress)
1. [Difference to other types of tests](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#difference-to-other-types-of-tests)
2. [Advantages of running tests in WordPress](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#advantages-of-running-tests-in-wordpress)
2. [Set up your test environment on your computer](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#set-up-your-test-environment-on-your-computer)
3. [Setting up your plugin with Unit Tests](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#setting-up-your-plugin-with-unit-tests)
1. [Getting your existing plugin ready for tests](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#getting-your-existing-plugin-ready-for-tests)
2. [Installing Composer dependencies for testing](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#installing-composer-dependencies-for-testing)
3. [Ignoring test files in Git](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#ignoring-test-files-in-git)
4. [Creating composer test scripts](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#creating-composer-test-scripts)
5. [Creating the WordPress testing environment](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#creating-the-wordpress-testing-environment)
6. [Running your first Unit Test](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#running-your-first-unit-test)
7. [Do you experience this error when running the tests?](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#do-you-experience-this-error-when-running-the-tests)
4. [Assert functions](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#assert-functions)
5. [Writing your first test](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#writing-your-first-test)
6. [Testing our plugin functionality](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#testing-our-plugin-functionality)
1. [The test class and why it extends WP\_UnitTestCase](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#the-test-class-and-why-it-extends-wp-unittestcase)
2. [setUp() — preparing the environment for each test](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#setup-preparing-the-environment-for-each-test)
3. [test\_book\_post\_type\_is\_registered() — basic existence check](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#test-book-post-type-is-registered-basic-existence-check)
4. [test\_book\_post\_type\_is\_public() — inspecting post type properties](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#test-book-post-type-is-public-inspecting-post-type-properties)
5. [test\_can\_create\_book\_post() — creating and validating a post of the CPT](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#test-can-create-book-post-creating-and-validating-a-post-of-the-cpt)
6. [Putting it together — what these tests guarantee](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#putting-it-together-what-these-tests-guarantee)
7. [Completing your unit tests](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#completing-your-unit-tests)
1. [Install plugin dependencies like WooCommerce](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#install-plugin-dependencies-like-woocommerce)
2. [Setting up automated tests in GitHub](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#setting-up-automated-tests-in-github)
8. [Conclusion](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#conclusion)
## What are unit tests, and why use them in WordPress?
Unit tests automatically verify whether a specific part of your code—usually a function or method—works exactly as expected. The idea is to isolate that “unit” from the rest of the system to ensure its behavior is correct under all circumstances that you can imagine. In addition, this unit can receive different types of inputs to verify the expected output. These inputs may be valid data, or you can use invalid data to see how your function behaves. That helps you avoid triggering a fatal error, something that would otherwise cause improper behavior in your plugin.
In WordPress plugin development, unit tests help you verify your functions, classes, and hooks fulfill their purpose—even after introducing changes to the code. This is especially important because a plugin can run in very different environments: different versions of WordPress, multiple PHP configurations, and endless combinations of other plugins and themes.
### Difference to other types of tests
It is important to know the different types of tests you can perform to understand the scope and what you can do in each of them.
* **Unit tests:** individual parts of the code are tested in isolation, without relying on external elements.
* **Integration tests:** verify that different parts of the system work well together, for example, your plugin and the WordPress database. These are the tests that we are going to cover in this article.
* **Functional tests:** evaluate the behavior of the system from the user’s perspective.
### Advantages of running tests in WordPress
Working with tests is an advanced way of developing software with multiple advantages:
* **They prevent regressions:** If you update your plugin and break a function that used to work, unit tests will immediately let you know before you release the new version of your plugin.
* **Increase reliability and confidence:** You can launch new versions with greater peace of mind, knowing that your key functions are verified.
* **Make maintenance easier:** When someone else collaborates on development, they can know if their change breaks something before publishing it.
* **Improve code quality:** Writing tests forces you to think about cleaner, reusable, and easier-to-debug functions.
* **Improve user perception:** Errors are prevented by the developer in the code, rather than being found by the users.
* **They help you document your code.** They are a good reference for understanding it. You will see what to expect when your function runs with test data.
In conclusion, unit tests in WordPress are not a luxury but an investment in stability and professionalism. In such a diverse ecosystem, they help ensure that your plugin works both today and tomorrow.
## Set up your test environment on your computer
Integration tests are often the best approach for WordPress code because they test the code within a real WordPress environment, not just in isolation.
To run integration tests, you need to create an environment based on a clean WordPress installation, with the necessary dependencies such as PHP, MySQL, and Subversion.
Currently, there are two ways to set up our environment for development tests:
* NPM and Docker (wp-env)
* Composer
Following this tutorial, you will use the [Composer](https://getcomposer.org/) option. It’s more straightforward and faster when running the tests.
For Composer, you need [PHP](https://www.php.net/) and [MySQL](https://www.mysql.com/) installed on your computer, with a database named wordpres\_tests and the username and password set to root.
You’ll also need [SVN](https://subversion.apache.org/packages.html) to download the files correctly, as the installation tests are run using SVN. A new version of Git is coming, but it’s not available yet. Finally, you will need to use the [WordPress CLI](https://wp-cli.org/) to create test files in our plugin.
## Setting up your plugin with Unit Tests
This guide is based on running tests with [PHPUnit](https://phpunit.de/index.html), installed in the repository itself via Composer. It is the easiest way for developers to share the same environment when developing the plugin.
You can use the following [plugin example](https://github.com/wptrainingteam/plugin-unit-tests/) as a starting point for this tutorial. [Clone it from its repository](https://github.com/wptrainingteam/plugin-unit-tests/) and apply the instructions in this article to it.
I’d recommend that while you write the unit tests, you follow this plugin example as you read the tutorial. That will give you a practical idea of how to implement unit tests in your plugin.
### Getting your existing plugin ready for tests
Use a WordPress CLI command to configure your plugin to install the initial files needed to run tests. Replace `plugin-name` with yours.
```
wp scaffold plugin-tests plugin-name --ci=github
```
When running [the command](https://developer.wordpress.org/cli/commands/scaffold/plugin-tests/), the following files are added to your plugin folder:
* `.github/workflows/phpunit.yml` → Integration with GitHub Actions.
* `bin/install-wp-tests.sh` → Bash script that sets up the testing environment.
* `phpunit.xml.dist` → PHPUnit configuration.
* `tests/bootstrap.php` → Loads WordPress, configuration, and plugins before the tests. Here we can define environment constants.
* `tests/test-sample.php` → Sample test.
### Installing Composer dependencies for testing
You also need PHPUnit in your repository. You install it using Composer.
```
composer require --dev yoast/phpunit-polyfills:^1.0 wp-phpunit/wp-phpunit:^6.3
```
This installs:
* [**WP-PHPUNIT**](https://github.com/wp-phpunit/wp-phpunit). An implementation of the WordPress testing environment using PHPUnit. It’s an unofficial, community-maintained fork that makes it easier to run tests without having to manually clone the entire WordPress core.
* [**PHPUNIT-Polyfills**](https://github.com/Yoast/PHPUnit-Polyfills). A library created by Yoast to provide compatibility across multiple PHPUnit versions and different PHP versions.
### Ignoring test files in Git
And since you will have the repository in Git, you want to add folders and files that you don’t want to appear to your .gitignore file:
```
.phpunit.result.cache
vendor/
```
### Creating composer test scripts
Composer **scripts** are custom commands that you can define in your project’s `composer.json` file. They let you automate common tasks.
Add the commands for running tests and setting up the environment to make your work easier. Customize `test-install` with the [credentials needed](https://make.wordpress.org/cli/handbook/how-to/plugin-unit-tests/#3-initialize-the-testing-environment-locally).
```
"scripts": {
"test": "phpunit",
"test-install": "bash bin/install-wp-tests.sh wordpress_test root 'root' 127.0.0.1 latest"
}
```
What does that sentence mean?
`bash bin/install-wp-tests.sh wordpress_test root 'root' 127.0.0.1 latest`
It means installing a WordPress installation for testing purposes.
* Database: wordpress\_test
* Username: root
* Password: root
* Host: localhost
* WordPress version: latest
### Creating the WordPress testing environment
Now you run your script to install the WordPress testing environment so you can create tests.
```
composer test-install
```
The files will have been created in your repository, but before running the tests, I recommend making adjustments to prevent errors later on.
Customize the `phpunit.xml.dist` file and remove `prefix="test-"` from the line, since depending on the version it may cause conflicts and errors. In addition, create a subfolder to keep the tests in `tests/Unit/`. You can customize this structure as you like.
```
./tests/Unit/
```
Move the `test-example.php` file you should have under the /tests folder to the /Unit subfolder.
Finally, add these lines at the beginning of the bootstrap file. They define a constant where you’ll store the input data and also help prevent errors with the `WP_CORE_DIR` constant.
```
define( 'TESTS_PLUGIN_DIR', dirname( __DIR__ ) );
define( 'UNIT_TESTS_DATA_PLUGIN_DIR', TESTS_PLUGIN_DIR . '/tests/Data/' ); // Customize.
// Define WP_CORE_DIR if not already defined
if ( ! defined( 'WP_CORE_DIR' ) ) {
$_wp_core_dir = getenv( 'WP_CORE_DIR' );
if ( ! $_wp_core_dir ) {
$_wp_core_dir = rtrim( sys_get_temp_dir(), '/\\' ) . '/wordpress';
}
define( 'WP_CORE_DIR', $_wp_core_dir );
}
```
### Running your first Unit Test
At last! Now you are ready to run the tests in your WordPress plugin:
```
composer test
```
Result:
```
PHPUnit 9.6.24 by Sebastian Bergmann and contributors.
1 / 1 (100%)
Time: 00:00.005, Memory: 42.50 MB
OK (1 test, 1 assertion)
```
Congratulations! You have installed the unit test and run the first test in your plugin!
### Do you experience this error when running the tests?
If you get this error when running tests, you can usually fix it by reinitializing all the folders and running the install process again. That usually solves the problem.
*Could not find /wordpress-tests-lib/includes/functions.php, have you run bin/install-wp-tests.sh?*
This happens when the temporary WordPress installation is incomplete. Delete the folders and run the installation again.
When you run the test environment installation, it tells you the directory where WordPress is installed. For example, I have: `/var/folders/kk/6287m8gj09xdkt2zgz432zhr0000gn/T/`
You’ll need to delete the `wordpress-tests-lib` and `wordpress` folders from this location and then re-run the installation.
```
rm -rfv /var/folders/kk/6287m8gj09xdkt2zgz432zhr0000gn/T/wordpress-tests-lib/
rm -rfv /var/folders/kk/6287m8gj09xdkt2zgz432zhr0000gn/T/wordpress/
composer test-install
```
## Assert functions
You already have the environment set up in your plugin, and now it’s time to develop. Generate data for your functions, run them, and verify that the expected results are correct. To check those results, you can use [PHPUnit’s assert functions](https://docs.phpunit.de/en/10.5/assertions.html).
Here are the most common **assert functions** you’ll use in PHPUnit:
* **assertTrue($condition)** → Checks that a condition is true.
* **assertFalse($condition)** → Checks that a condition is false.
* **assertEquals($expected, $actual)** → Verifies that two values are equal (non-strict).
* **assertSame($expected, $actual)** → Verifies that two values are the same (strict: type and value).
* **assertNotEquals($expected, $actual)** → Verifies that two values are not equal.
* **assertNotSame($expected, $actual)** → Verifies that two values are not the same (strict).
* **assertNull($variable)** → Checks that a variable is null.
* **assertNotNull($variable)** → Checks that a variable is not null.
* **assertEmpty($variable)** → Checks that a variable is empty.
* **assertNotEmpty($variable)** → Checks that a variable is not empty.
* **assertCount($expectedCount, $array)** → Checks that an array (or countable) has the expected number of elements.
* **assertContains($needle, $haystack)** → Checks that a value exists within an array or string.
* **assertNotContains($needle, $haystack)** → Checks that a value does not exist within an array or string.
* **assertInstanceOf($class, $object)** → Verifies that an object is an instance of a given class.
* **assertIsArray($variable)**, **assertIsString($variable)**, **assertIsInt($variable)**, etc. → Type assertions.
* **assertGreaterThan($expected, $actual)** → Checks that a value is greater than another.
* **assertLessThan($expected, $actual)** → Checks that a value is less than another.
These are the most frequently used, but PHPUnit provides many more for specialized cases.
I recommend running the functions with both correct input data and incorrect or missing data. This way, your functions become more robust and are prepared for different types of input. No user likes to see a fatal error when using a plugin.
## Writing your first test
In our plugin example, we can [write assertions for this function](https://github.com/wptrainingteam/plugin-unit-tests/blob/9a74ad0f44d7a89186756661d03da986f5693e36/includes/functions-to-test.php#L48) that is in our plugin:
```
function plunit_sum( $a, $b ) {
return $a + $b;
}
```
Write something like this and add it to your test file. In our example, we’re placing it in `tests/Unit/test-example.php`.And write some like this, and you will need to add it to your tests file. I our example we are using:
```
function test_sum_without_errors( $a, $b ) {
$sum = plunit_sum( 4, 2 );
$this->assertEquals( 6, $sum );
}
```
This test will pass. This is the ideal situation, but what if the user enters a string instead of a number? We can create an example that incorporates all the errors that our function could encounter.
```
function test_sum_with_errors( $a, $b ) {
$sum = plunit_sum( 'hello', 2 );
$this->assertEquals( 0, $sum );
}
```
When a function receives incorrect or unexpected data, our unit tests should catch that. The purpose of the test is to ensure that the function behaves correctly even when given invalid input — for example, by returning an error, throwing an exception, or safely handling the value instead of failing silently.
Each time you want to run a test, you will need to run the test.
```
composer test
```
But let’s make some more interesting tests….
## Testing our plugin functionality
In our plugin, we have [registered a custom post type](https://github.com/wptrainingteam/plugin-unit-tests/blob/main/includes/register-cpt-book.php), and we want to make sure that it is registered correctly and that you can create a post for this post type.
```
php
/**
* Integration tests for the Book custom post type.
*/
class Test_Book_CPT extends WP_UnitTestCase {
public function setUp(): void {
parent::setUp();
// Make sure our CPT is registered before each test.
mtp_register_cpt_book();
flush_rewrite_rules();
}
public function test_book_post_type_is_registered() {
$this-assertTrue( post_type_exists( 'book' ), 'The "book" post type should be registered.' );
}
public function test_book_post_type_is_public() {
$post_type_obj = get_post_type_object( 'book' );
$this->assertNotNull( $post_type_obj );
$this->assertTrue( $post_type_obj->public );
$this->assertTrue( $post_type_obj->show_ui );
}
public function test_can_create_book_post() {
$post_id = self::factory()->post->create(
array(
'post_type' => 'book',
'post_title' => 'Test Book',
)
);
$this->assertIsInt( $post_id );
$this->assertSame( 'book', get_post_type( $post_id ) );
$this->assertSame( 'Test Book', get_the_title( $post_id ) );
}
}
```
This test class verifies that our plugin’s **Book** custom post type (CPT) is registered correctly, is public, shows up in the admin UI, and that we can create posts of that type. We’ll walk through the structure and each test so the reader understands what behavior is being asserted and which WP test helpers are used.
### The test class and why it extends `WP_UnitTestCase`
```
php
class Test_Book_CPT extends WP_UnitTestCase {
...
}</code
```
We extend `WP_UnitTestCase` because it provides PHPUnit assertions plus WordPress-specific helpers and test isolation features. That means we can use familiar PHPUnit methods like `$this->assertTrue()` and WordPress test utilities such as the `factory()` object for creating posts, users, terms, etc. Extending `WP_UnitTestCase` also ensures each test runs inside the WordPress testing environment (fixtures, DB transaction handling, and so on).
### `setUp()` — preparing the environment for each test
```
public function setUp(): void {
parent::setUp();
// Make sure our CPT is registered before each test.
mtp_register_cpt_book();
flush_rewrite_rules();
}
```
`setUp()` runs **before every single test** in the class. That guarantees a consistent starting point and avoids test interdependence. In this case we:
* Call `parent::setUp()` to let the base class perform its own setup (important).
* Call `mtp_register_cpt_book()` to ensure the plugin function that registers the book CPT runs. Tests often run in isolation without the normal plugin bootstrap order, so explicitly calling the registration function makes the CPT available to the assertions below.
* Call `flush_rewrite_rules()` to refresh WordPress rewrite rules. When testing registered post types, flushing rewrite rules ensures URL endpoints and rewrite-related flags are up to date; it’s a defensive step so tests that rely on registration state aren’t affected by stale rewrite rules.
Tip: if your tests register global state beyond CPTs you may also want a `tearDown()` to unregister or clean things up, but often `WP_UnitTestCase` handles DB cleanup for created posts.
### `test_book_post_type_is_registered()` — basic existence check
```
public function test_book_post_type_is_registered() {
$this->assertTrue( post_type_exists( 'book' ), 'The "book" post type should be registered.' );
}
```
What it does:
* Uses WordPress helper `post_type_exists( 'book' )` which returns true when a post type with slug book exists.
* Uses PHPUnit assertion `$this->assertTrue()` to fail the test if the CPT is missing.
Why this matters:
* This is the simplest and most fundamental assertion — if the post type isn’t registered, the rest of the plugin features depending on it can’t work.
### `test_book_post_type_is_public()` — inspecting post type properties
```
public function test_book_post_type_is_public() {
$post_type_obj = get_post_type_object( 'book' );
$this->assertNotNull( $post_type_obj );
$this->assertTrue( $post_type_obj->public );
$this->assertTrue( $post_type_obj->show_ui );
}
```
What it does:
* Calls `get_post_type_object('book')` to retrieve the full post type object (an stdClass with registration args).
* Asserts the object is not null (extra safety).
* Asserts `$post_type_obj->public` is `true` — meaning the CPT is intended to be publicly queryable.
* Asserts `$post_type_obj->show_ui` is `true` — meaning the CPT appears in the admin UI (menu/screens).
Why this matters:
* Registering a CPT is not enough — the registration arguments determine visibility and behavior. These assertions confirm the CPT will show up in the admin and behave like a normal public post type.
### `test_can_create_book_post()` — creating and validating a post of the CPT
```
public function test_can_create_book_post() {
$post_id = self::factory()->post->create(
array(
'post_type' => 'book',
'post_title' => 'Test Book',
)
);
$this->assertIsInt( $post_id );
$this->assertSame( 'book', get_post_type( $post_id ) );
$this->assertSame( 'Test Book', get_the_title( $post_id ) );
}
```
What it does:
* Uses the WordPress test factory `self::factory()->post->create()` to create a post in the test database. `factory()` is convenient because it bypasses the normal admin flows and directly inserts a post record.
* Checks that the returned `$post_id` is an integer (a created post id).
* Verifies `get_post_type($post_id)` returns `'book'`, confirming the created post has the correct type.
* Verifies `get_the_title($post_id)` equals the supplied title `'Test Book'`.
Why this matters:
* Confirms end-to-end that the CPT can actually be used: posts can be created of that type and their data is stored and retrievable as expected.
### Putting it together — what these tests guarantee
Together these three tests verify:
1. The book CPT is registered.
2. The CPT has the expected visibility and admin UI flags.
3. You can create and retrieve posts of type `book`.
These checks are lightweight, easy to maintain, and catch common mistakes (typos in registration slug, wrong `public/show_ui` flags, or registration that never runs during plugin bootstrap).
You can automate everything we have learned with AI. You can use [these instructions to create tests](https://gist.github.com/davidperezgar/67bac62ed8ddca3f5d48df59dc14c190) for your plugins in a straightforward way. You only need to download the file with the instructions, add it to the AI chat in your favorite IDE, and it will apply all the previous instructions and even suggest some unit tests.
## Completing your unit tests
### Install plugin dependencies like WooCommerce
If you need to run tests and your plugin has dependencies, you’ll need to add the plugin installation in `install-wp-tests.sh` and also load it in `_manually_load_plugin`.
Let’s go through an example of adding the WooCommerce plugin to your tests. In the `bin/install-wp-tests.sh` file, before the `install_wp` line, add the lines required to download the WooCommerce plugin as a dependency.
```
# Installs WooCommerce plugin in the test environment
install_woocommerce() {
local PLUGIN_DIR="$WP_CORE_DIR/wp-content/plugins"
mkdir -p "$PLUGIN_DIR"
WOOCOMMERCE_URL="https://downloads.wordpress.org/plugin/woocommerce.zip"
download "$WOOCOMMERCE_URL" "$TMPDIR/woocommerce.zip"
unzip -q "$TMPDIR/woocommerce.zip" -d "$TMPDIR/"
rm -rf "$PLUGIN_DIR/woocommerce"
mv "$TMPDIR/woocommerce" "$PLUGIN_DIR/woocommerce"
echo "WooCommerce plugin installed successfully."
}
```
And after the `install_wp` line, add the `install_woocommerce` function so that it runs right after WordPress has been installed.
And we’ll also need to include it in your bootstrap `tests/bootstrap.php` inside the `_manually_load_plugin` function:
```
// Load WooCommerce first from the standard WordPress plugins directory
require_once WP_CORE_DIR . '/wp-content/plugins/woocommerce/woocommerce.php';
```
### Setting up automated tests in GitHub
In the configuration file located at `.github/workflows/testing.yml`, review the setup and check that the main branch of your repository is correct. If not, you’ll need to update the YAML file:
```
on:
pull_request:
branches:
- trunk
```
Replace trunk with your repository’s main branch.
I also recommend updating the PHP setup lines, as the scaffold sometimes gives an error related to the PHP version. Another thing to note is that the CI in GitHub does not include SVN, so you’ll need to have SVN installed manually, since it’s not included by default.
```
- name: Setup PHP
uses: shivammathur/setup-php@v2
with:
php-version: ${{ matrix.php-version }}
tools: phpunit-polyfills:1.1
extensions: mbstring, xml, zip, intl, pdo, mysql
coverage: none
- name: Install SVN
run: sudo apt-get update && sudo apt-get install -y subversion
```
## Conclusion
Automated unit testing is an essential practice for modern WordPress plugin development. Beyond preventing regressions, it strengthens code quality, improves maintainability, and builds confidence when releasing new versions. By integrating PHPUnit, Composer, and GitHub Actions into your workflow, you ensure that your plugins remain reliable across diverse environments and future updates. Ultimately, unit tests are not just a technical enhancement—they represent a commitment to stability, professionalism, and delivering a better experience to every user.
*Props to [@milana\_cap](https://profiles.wordpress.org/milana_cap/), [@bph](https://profiles.wordpress.org/bph/), [@greenshady](https://profiles.wordpress.org/greenshady/), [@juanmaguitar](https://profiles.wordpress.org/juanmaguitar/), and [@areziaal](https://profiles.wordpress.org/areziaal/) for reviewing this article and offering feedback.*
**Share the post:**
* [Share on Mastodon (Opens in new window)Mastodon](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?share=mastodon&nb=1)
* [Share on LinkedIn (Opens in new window)LinkedIn](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?share=linkedin&nb=1)
* [Share on X (Opens in new window)X](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?share=x&nb=1)
* [Share on Bluesky (Opens in new window)Bluesky](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?share=bluesky&nb=1)
* Share on Mail (Opens in new window)Mail
* [Share on Reddit (Opens in new window)Reddit](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?share=reddit&nb=1)
* [Share on Tumblr (Opens in new window)Tumblr](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?share=tumblr&nb=1)
* [Share on Telegram (Opens in new window)Telegram](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?share=telegram&nb=1)
* [Share on WhatsApp (Opens in new window)WhatsApp](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?share=whatsapp&nb=1)
**Categories:** [Advanced](https://developer.wordpress.org/news/category/advanced/), [Plugins](https://developer.wordpress.org/news/category/plugins/), [Tools](https://developer.wordpress.org/news/category/tools/)
**Tags:** [Automated testing](https://developer.wordpress.org/news/tag/automated-testing/)
## 9 responses to “How to add automated unit tests to your WordPress plugin”
1. [Per Søderlind](https://profiles.wordpress.org/pers/)
[December 16, 2025](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#comment-20614)
Very nice and needed article!
I use Brain Monkey for my unit tests <https://giuseppe-mazzapica.gitbook.io/brain-monkey/wordpress-specific-tools/wordpress-why-bother>.
.. and I let AI write the tests.
[Reply](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?replytocom=20614#respond)
2. [Jon Surrell](https://profiles.wordpress.org/jonsurrell/)
[December 16, 2025](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#comment-20615)
WordPress 6.9 introduced a new assertion, [`assertEqualHTML()`](https://make.wordpress.org/core/2025/11/21/updates-to-the-html-api-in-6-9/#no-more-hard-coding-HTML-string-assertions-in-unit-tests).
It’s a great addition for unit tests dealing with HTML. It avoiding many of the issues that can occur with simple HTML string comparison and provides a more readable diff in case of failure.
[Reply](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?replytocom=20615#respond)
1. [David Perez](https://profiles.wordpress.org/davidperez/)
[January 23, 2026](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#comment-21159)
That’s a nice suggestion — I’ll definitely use it!
[Reply](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?replytocom=21159#respond)
3. paul
[December 17, 2025](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#comment-20617)
Actually, if you look at the WP test case class, it uses `set\_up` not `setUp`
<https://core.trac.wordpress.org/browser/trunk/tests/phpunit/includes/abstract-testcase.php#L102>
[Reply](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?replytocom=20617#respond)
1. Fred
[January 1, 2026](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#comment-20694)
Thanks, Paul. I’ve been struggling with that. Haven’t tested it yet, but it makes sense.
How did you get past undefined WP\_CORE\_DIR?
[Reply](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?replytocom=20694#respond)
2. fred
[January 1, 2026](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#comment-20695)
Hi: Still doesn’t resolve the issue:
“`Error: Call to undefined method PHPUnit\Util\Test::parseTestMethodAnnotations()“`
Thanks anyway!
[Reply](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?replytocom=20695#respond)
4. Oberon
[January 20, 2026](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#comment-20899)
Thanks for your tutorial. According to the article, I have created a WordPress testing skill. I hope it can be helpful.
<https://github.com/oberonlai/wp-plugin-dev-init>
[Reply](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?replytocom=20899#respond)
5. Andy
[January 23, 2026](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#comment-21154)
Great post @davidperez , very nice explanations/advice.
One thing I don’t agree with is that it seems to suggest to ignore all the testing goodies in WP core. Also to install PHP and MySQL on the local machine which seems to be able to cause security problems?
IMHO it will be much better to configure the plugin to re-use the way WP core does testing. Not only PHPUnit, but also WPCS, linting, etc. That way if a test fails because of a change in core, it would be easier to find it, and even make a patch for it. It would also mean the testing environment is more secure (uses Docker) and the PHPUnit tests can reuse some of the tools in core. Finally it won’t probably need much maintenance as core’s settings and tools are maintained regularly.
[Reply](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?replytocom=21154#respond)
1. [David Perez](https://profiles.wordpress.org/davidperez/)
[January 23, 2026](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#comment-21158)
Hello Andy,
Thanks.
This is the first article to be used for testing purposes. You can certainly go further, and that’s the objective. Start conducting tests and make use of more WordPress functions. I didn’t cover lint and WPCS as these would require another article. Another test that I usually use in my plugins and that is very helpful is PHPStan.
[Reply](https://developer.wordpress.org/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/?replytocom=21158#respond)
### Leave a Reply [Cancel reply](/news/2025/12/how-to-add-automated-unit-tests-to-your-wordpress-plugin/#respond)
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
