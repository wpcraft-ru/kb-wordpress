---
title: "functions.php: базовые сниппеты"
description: "Шпаргалка по functions.php: подключение стилей и скриптов, регистрация меню, поддержка миниатюр, виджетов и других возможностей темы."
---

`functions.php` — главный файл темы для регистрации функциональности.
Помещается в корень папки темы: `wp-content/themes/your-theme/functions.php`.

## 1. Правильное подключение стилей и скриптов

```php
add_action( 'wp_enqueue_scripts', function () {
    // Основной CSS темы
    wp_enqueue_style(
        'theme-style',          // хэндл
        get_stylesheet_uri(),   // путь к style.css
        [],                     // зависимости
        wp_get_theme()->get('Version')
    );

    // Подключить Bootstrap из CDN
    wp_enqueue_style(
        'bootstrap',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        [],
        '5.3.0'
    );

    // Основной JS-файл темы (в футере)
    wp_enqueue_script(
        'theme-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [ 'jquery' ],           // зависимость от jQuery
        '1.0.0',
        true                    // в подвале
    );
} );
```

> Используйте `get_stylesheet_directory_uri()` для child theme, `get_template_directory_uri()` для parent theme.

## 2. Передать PHP-данные в JavaScript

```php
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_script( 'theme-main', get_template_directory_uri() . '/assets/js/main.js', [], '1.0.0', true );

    wp_localize_script( 'theme-main', 'themeData', [
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'theme_nonce' ),
        'homeUrl' => home_url(),
    ] );
} );
```

В JS доступно как `themeData.ajaxUrl`, `themeData.nonce` и т.д.

## 3. Поддержка возможностей темы (theme support)

```php
add_action( 'after_setup_theme', function () {
    // Автоматически добавить тег <title>
    add_theme_support( 'title-tag' );

    // Миниатюры постов
    add_theme_support( 'post-thumbnails' );

    // HTML5-разметка для форм, галерей и т.д.
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );

    // Пользовательский логотип
    add_theme_support( 'custom-logo', [
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ] );

    // Кастомный размер миниатюры
    add_image_size( 'hero-image', 1200, 600, true ); // crop = true
} );
```

## 4. Регистрация меню навигации

```php
add_action( 'after_setup_theme', function () {
    register_nav_menus( [
        'primary'   => __( 'Основное меню', 'textdomain' ),
        'secondary' => __( 'Дополнительное меню', 'textdomain' ),
        'footer'    => __( 'Меню подвала', 'textdomain' ),
    ] );
} );
```

Вывод в шаблоне:

```php
wp_nav_menu( [
    'theme_location' => 'primary',
    'container'      => 'nav',
    'container_class'=> 'main-nav',
    'menu_class'     => 'nav-list',
    'depth'          => 2,
] );
```

## 5. Регистрация областей виджетов (sidebar)

```php
add_action( 'widgets_init', function () {
    register_sidebar( [
        'name'          => __( 'Боковая колонка', 'textdomain' ),
        'id'            => 'sidebar-main',
        'description'   => __( 'Основная боковая колонка', 'textdomain' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ] );
} );
```

## 6. Изменить количество записей в поиске

```php
add_action( 'pre_get_posts', function ( WP_Query $query ) {
    if ( $query->is_search() && ! is_admin() && $query->is_main_query() ) {
        $query->set( 'posts_per_page', 20 );
    }
} );
```

## 7. Убрать версию WordPress из source-кода

```php
add_filter( 'the_generator', '__return_empty_string' );
remove_action( 'wp_head', 'wp_generator' );
```

## 8. Добавить класс к body в зависимости от шаблона

```php
add_filter( 'body_class', function ( array $classes ): array {
    if ( is_singular( 'product' ) ) {
        $classes[] = 'single-product-page';
    }
    return $classes;
} );
```

## Связанные страницы

- [Темы, child theme и Customizer: основы](../themes/themes-child-themes-customizer.md)
- [Хуки WordPress: шпаргалка](./hooks-cheatsheet.md)
- [WP_Query: рецепты запросов](./wp-query-recipes.md)
