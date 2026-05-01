---
title: "Хуки WordPress: шпаргалка"
description: "Топ actions и filters WordPress с короткими примерами: wp_head, init, save_post, the_content, wp_mail и другие."
---

Хуки — основной механизм расширения WordPress.

| Тип | Функция | Назначение |
|---|---|---|
| Action | `add_action($hook, $cb, $priority, $args)` | Выполнить код в нужный момент |
| Filter | `add_filter($hook, $cb, $priority, $args)` | Изменить данные перед использованием |

`$priority` по умолчанию `10`. Меньше — раньше, больше — позже.

---

## Actions: самые используемые

### `init` — регистрация CPT, таксономий, сессий

```php
add_action( 'init', function () {
    register_post_type( 'product', [
        'label'  => 'Товары',
        'public' => true,
        'supports' => [ 'title', 'editor', 'thumbnail' ],
        'menu_icon' => 'dashicons-cart',
        'has_archive' => true,
    ] );
} );
```

### `wp_enqueue_scripts` — скрипты и стили на фронтенде

```php
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'my-style', get_stylesheet_uri() );
} );
```

### `admin_enqueue_scripts` — скрипты только в админке

```php
add_action( 'admin_enqueue_scripts', function ( string $hook ) {
    if ( 'post.php' !== $hook && 'post-new.php' !== $hook ) {
        return; // только на экране редактора
    }
    wp_enqueue_script( 'my-admin-script', plugin_dir_url(__FILE__) . 'admin.js', [], '1.0' );
} );
```

### `wp_head` — вставить HTML в `<head>`

```php
add_action( 'wp_head', function () {
    echo '<meta name="theme-color" content="#2c3e50">';
} );
```

### `save_post` — действие при сохранении записи

```php
add_action( 'save_post', function ( int $post_id, WP_Post $post ) {
    // Пропустить автосохранение и revision
    if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) return;
    if ( wp_is_post_revision( $post_id ) ) return;
    if ( 'product' !== $post->post_type ) return;

    // Обновить мета-поле
    update_post_meta( $post_id, '_updated_at', current_time('mysql') );
}, 10, 2 );
```

### `wp_login` — событие входа пользователя

```php
add_action( 'wp_login', function ( string $user_login, WP_User $user ) {
    update_user_meta( $user->ID, 'last_login', current_time('mysql') );
}, 10, 2 );
```

### `template_redirect` — редиректы и проверки доступа

```php
add_action( 'template_redirect', function () {
    if ( is_singular( 'product' ) && ! is_user_logged_in() ) {
        wp_redirect( wp_login_url( get_permalink() ) );
        exit;
    }
} );
```

### `shutdown` — код в конце запроса

```php
add_action( 'shutdown', function () {
    // Логирование, очистка временных данных
} );
```

---

## Filters: самые используемые

### `the_content` — изменить HTML контента записи

```php
add_filter( 'the_content', function ( string $content ): string {
    if ( is_singular( 'post' ) ) {
        $content .= '<div class="share-block">Поделиться</div>';
    }
    return $content;
} );
```

### `the_title` — изменить заголовок

```php
add_filter( 'the_title', function ( string $title, int $id ): string {
    if ( get_post_type( $id ) === 'product' ) {
        return '🛒 ' . $title;
    }
    return $title;
}, 10, 2 );
```

### `excerpt_length` — длина автоматического excerpt

```php
add_filter( 'excerpt_length', function (): int {
    return 30; // слов
} );
```

### `excerpt_more` — «читать далее» после excerpt

```php
add_filter( 'excerpt_more', function (): string {
    return ' <a href="' . get_permalink() . '">→ Читать</a>';
} );
```

### `upload_mimes` — разрешить дополнительные типы файлов

```php
add_filter( 'upload_mimes', function ( array $mimes ): array {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
} );
```

### `login_redirect` — куда перенаправить после входа

```php
add_filter( 'login_redirect', function ( string $redirect, string $request, WP_User $user ): string {
    if ( in_array( 'administrator', (array) $user->roles, true ) ) {
        return admin_url();
    }
    return home_url( '/account/' );
}, 10, 3 );
```

### `wp_mail` — изменить отправителя писем

```php
add_filter( 'wp_mail_from', fn(): string => 'no-reply@example.com' );
add_filter( 'wp_mail_from_name', fn(): string => 'My Site' );
```

### `pre_get_posts` — модифицировать основной запрос

```php
add_action( 'pre_get_posts', function ( WP_Query $query ): void {
    if ( ! is_admin() && $query->is_main_query() && is_home() ) {
        $query->set( 'posts_per_page', 6 );
        $query->set( 'category__not_in', [ 5 ] ); // скрыть категорию 5
    }
} );
```

> `pre_get_posts` технически action, но работает как filter — изменяет объект `$query` до выполнения SQL.

### `body_class` — добавить классы к `<body>`

```php
add_filter( 'body_class', function ( array $classes ): array {
    if ( is_user_logged_in() ) {
        $classes[] = 'user-logged-in';
    }
    return $classes;
} );
```

---

## Приоритеты и удаление хуков

```php
// Запустить до стандартного (priority 10)
add_filter( 'the_content', 'my_early_filter', 5 );

// Запустить после стандартного
add_filter( 'the_content', 'my_late_filter', 20 );

// Удалить чужой хук (нужны совпадающие priority и количество аргументов)
remove_action( 'wp_head', 'wp_generator' );
remove_filter( 'the_content', 'wpautop' );
```

## Связанные страницы

- [functions.php: базовые сниппеты](./functions-php-essentials.md)
- [WP_Query: рецепты запросов](./wp-query-recipes.md)
- [Темы, child theme и Customizer: основы](../themes/themes-child-themes-customizer.md)
