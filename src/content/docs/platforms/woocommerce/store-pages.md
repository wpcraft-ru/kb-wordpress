---
title: "WooCommerce: страницы магазина"
description: "Страницы WooCommerce — Shop, Cart, Checkout, My Account: назначение, кастомизация через блоки и настройка отображения товаров."
---

## Стандартные страницы WooCommerce

При установке WooCommerce автоматически создаёт 4 страницы:

| Страница | Путь | Назначение |
|---|---|---|
| Shop | `/shop/` | Каталог товаров |
| Cart | `/cart/` | Корзина |
| Checkout | `/checkout/` | Оформление заказа |
| My Account | `/my-account/` | Личный кабинет |

Найти их можно в **WooCommerce → Настройки → Advanced → Page setup**. Если страница не создалась — **WooCommerce → Status → Tools → Create default pages**.

## Shop (каталог товаров)

Главная страница магазина. Можно кастомизировать через Site Editor или кастомайзер:

- В Block-темах: **Appearance → Editor → Templates → Product Catalog**
- В классических темах: **Appearance → Customize → WooCommerce → Product Catalog**

**Product Collection block** — современный блок для вывода товаров с фильтрацией, сортировкой и пагинацией. Заменяет устаревшие шорткоды.

## Cart (корзина)

Страница с блоком Cart. Кастомизация ограничена — менять можно через:

- Классическую тему с шаблоном `cart/cart.php` (переопределение в child theme)
- Block-темы: редактирование Cart template в Site Editor

## Checkout (оформление)

Страница с блоком Checkout. Возможности кастомизации:

- **Block-темы:** внутренние блоки Checkout можно редактировать: поля, текст, дизайн
- **Классические темы:** переопределение `checkout/form-checkout.php`

### WooCommerce Blocks

Плагин WooCommerce Blocks добавляет набор блоков для страниц:

- **Cart block** — блок корзины
- **Checkout block** — блок оформления заказа
- **Product Collection** — современный вывод товаров
- **Filter blocks** — фильтры по цене, атрибутам, рейтингу
- **Mini Cart** — мини-корзина

## My Account (личный кабинет)

Содержит:

- Историю заказов
- Адреса доставки
- Управление платежами
- Детали аккаунта

Кастомизация — через endpoint-фильтры или переопределение шаблонов:

```php
// Добавить свой endpoint в My Account
add_action('init', function() {
    add_rewrite_endpoint('custom-section', EP_PAGES);
});

add_filter('woocommerce_account_menu_items', function($items) {
    $items['custom-section'] = 'Мой раздел';
    return $items;
});

add_action('woocommerce_account_custom-section_endpoint', function() {
    echo '<p>Содержимое кастомного раздела.</p>';
});
```

## Связанные страницы

- [Товары WooCommerce](./products.md)
- [Установка и первые шаги](./getting-started.md)

## Материалы и источники

- [WooCommerce pages (Shop, Cart, Checkout, My Account)](https://woocommerce.com/document/woocommerce-pages/)
- [Customizing cart and checkout pages](https://woocommerce.com/document/woocommerce-store-editing/customizing-cart-and-checkout/)
- [Product collection block](https://woocommerce.com/document/woocommerce-store-editing/customizing-shop-page-catalog/product-collection-block/)
- [WooCommerce blocks](https://woocommerce.com/document/woocommerce-blocks/)
- [Set up store pages (WordPress.com course)](https://wordpress.com/support/courses/build-your-store-with-woocommerce/set-up-store-pages/)
