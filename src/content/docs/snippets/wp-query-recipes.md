---
title: "WP_Query: рецепты запросов"
description: "Готовые рецепты WP_Query: запросы по категории, тегу, метаполю, дате, кастомному типу записи, с пагинацией и сортировкой."
---

`WP_Query` — основной класс для выборки записей в WordPress.
Всегда сбрасывайте запрос через `wp_reset_postdata()` после кастомного цикла.

## Базовый шаблон цикла

```php
$query = new WP_Query( [ /* аргументы */ ] );

if ( $query->have_posts() ) {
    while ( $query->have_posts() ) {
        $query->the_post();
        // the_title(), the_content(), get_the_ID() ...
    }
    wp_reset_postdata();
}
```

## 1. Записи из категории с пагинацией

```php
$paged = get_query_var( 'paged' ) ?: 1;

$query = new WP_Query( [
    'cat'            => 5,               // ID категории
    'posts_per_page' => 10,
    'paged'          => $paged,
    'orderby'        => 'date',
    'order'          => 'DESC',
] );
```

Вывод пагинации:

```php
echo paginate_links( [
    'total'   => $query->max_num_pages,
    'current' => $paged,
] );
```

## 2. Записи по тегу (slug)

```php
$query = new WP_Query( [
    'tag'            => 'wordpress',
    'posts_per_page' => 6,
] );
```

## 3. Кастомный тип записи (CPT)

```php
$query = new WP_Query( [
    'post_type'      => 'product',
    'post_status'    => 'publish',
    'posts_per_page' => -1,         // все записи
    'orderby'        => 'title',
    'order'          => 'ASC',
] );
```

## 4. Запрос по мета-полю

```php
$query = new WP_Query( [
    'post_type'  => 'post',
    'meta_query' => [
        [
            'key'     => 'featured',
            'value'   => '1',
            'compare' => '=',
        ],
    ],
] );
```

### Диапазон числовых значений

```php
$query = new WP_Query( [
    'post_type'  => 'product',
    'meta_query' => [
        [
            'key'     => 'price',
            'value'   => [ 100, 500 ],
            'compare' => 'BETWEEN',
            'type'    => 'NUMERIC',
        ],
    ],
] );
```

## 5. Несколько категорий (OR / AND)

```php
// Записи из категории 3 ИЛИ 7
$query = new WP_Query( [
    'category__in'   => [ 3, 7 ],
    'posts_per_page' => 10,
] );

// Записи, которые принадлежат категориям 3 И 7 одновременно
$query = new WP_Query( [
    'category__and'  => [ 3, 7 ],
    'posts_per_page' => 10,
] );
```

## 6. Записи за последние N дней

```php
$query = new WP_Query( [
    'date_query' => [
        [
            'after'     => '30 days ago',
            'inclusive' => true,
        ],
    ],
    'posts_per_page' => 10,
] );
```

## 7. Исключить текущую запись (например, в блоке «Похожие»)

```php
$query = new WP_Query( [
    'post_type'      => get_post_type(),
    'posts_per_page' => 4,
    'post__not_in'   => [ get_the_ID() ],
    'orderby'        => 'rand',
] );
```

## 8. Поиск по заголовку (LIKE)

```php
$query = new WP_Query( [
    'post_type'   => 'post',
    'title_filter'=> 'WordPress', // Не нативный параметр — нужен фильтр ниже
] );

// Фильтр для поддержки title_filter
add_filter( 'posts_where', function ( string $where, WP_Query $q ): string {
    $title = $q->get( 'title_filter' );
    if ( $title ) {
        global $wpdb;
        $where .= ' AND ' . $wpdb->posts . '.post_title LIKE \'%' . esc_sql( $wpdb->esc_like( $title ) ) . '%\'';
    }
    return $where;
}, 10, 2 );
```

## 9. Сортировка по мета-полю (числовому)

```php
$query = new WP_Query( [
    'post_type'  => 'product',
    'meta_key'   => 'price',
    'orderby'    => 'meta_value_num',
    'order'      => 'ASC',
    'meta_query' => [
        [
            'key'  => 'price',
            'type' => 'NUMERIC',
        ],
    ],
] );
```

## 10. get_posts() — быстрая альтернатива для простых выборок

```php
$posts = get_posts( [
    'numberposts' => 5,
    'category'    => 3,
    'orderby'     => 'date',
    'order'       => 'DESC',
] );

foreach ( $posts as $post ) {
    setup_postdata( $post );
    the_title();
}
wp_reset_postdata();
```

> `get_posts()` не запускает основной цикл и не поддерживает пагинацию. Подходит для виджетов и шорткодов.

## Связанные страницы

- [Страницы, записи, категории и теги: базовая модель контента](../content/pages-posts-and-taxonomies-basics.md)
- [functions.php: базовые сниппеты](./functions-php-essentials.md)
- [Хуки WordPress: шпаргалка](./hooks-cheatsheet.md)
