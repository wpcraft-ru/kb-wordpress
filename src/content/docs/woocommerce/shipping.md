---
title: "WooCommerce: настройка доставки"
description: "Доставка в WooCommerce: зоны, методы (flat rate, бесплатная, самовывоз), классы доставки и плагины для live-тарифов."
---

## Зоны доставки (Shipping Zones)

Зона доставки — географический регион со своими методами и тарифами. Настраивается в **WooCommerce → Настройки → Shipping → Shipping Zones**.

Каждая зона содержит:

- **Zone Name** — название (например, «Россия», «Москва», «Европа»)
- **Zone Regions** — страны, регионы, индексы
- **Shipping Methods** — методы доставки в этой зоне

Зоны обрабатываются сверху вниз: первый совпавший регион применяется к заказу. Всегда держите самую широкую зону (например, «Весь мир») внизу списка.

## Методы доставки

### Flat Rate (фиксированная ставка)

Одна или несколько фиксированных цен. Можно настроить стоимость на основе:

- Ставка за заказ
- Ставка за товар
- Ставка за класс доставки
- Процент от суммы заказа

```php
// Пример: кастомный расчёт flat rate
add_filter('woocommerce_flat_rate_shipping_add_rate', function($add_rate, $method) {
    // Добавляем $5 за каждый товар
    $items_count = WC()->cart->get_cart_contents_count();
    $method->cost = 10 + ($items_count * 5); // $10 база + $5/товар
    return true;
}, 10, 2);
```

### Free Shipping (бесплатная доставка)

Бесплатная доставка с условиями:

- При сумме заказа от ...
- С купоном на бесплатную доставку
- При обоих условиях одновременно
- Всегда бесплатно

### Local Pickup (самовывоз)

Клиент забирает заказ из магазина. Настраивается цена (обычно 0) и налогообложение.

## Классы доставки (Shipping Classes)

Классы доставки группируют товары со сходными условиями перевозки. Например:

- **Heavy** — тяжёлые товары с повышенным тарифом
- **Bulky** — крупногабаритные с отдельной ставкой
- **Standard** — всё остальное

Класс назначается товару в поле **Product Data → Shipping → Shipping class**. Методы доставки могут учитывать класс: например, «Flat Rate + $10 за товар класса Heavy».

## Живые тарифы: плагины

WooCommerce Shipping — официальный плагин для live-тарифов:

- Тарифы USPS, DHL, Canada Post в реальном времени
- Печать shipping labels прямо из админки
- Бесплатно для основного функционала

Другие плагины для доставки — [категория Shipping, Delivery and Fulfillment](https://woocommerce.com/product-category/woocommerce-extensions/shipping-delivery-and-fulfillment/).

## Стратегии доставки

| Стратегия | Когда использовать |
|---|---|
| Бесплатная доставка | Средний чек высокий, маржа позволяет включить стоимость доставки в цену |
| Flat rate | Простая модель, когда тарифы примерно одинаковы |
| Таблица ставок | Сложные условия: по весу, сумме, количеству |
| Live rates | Когда нужны точные тарифы перевозчиков |

## Связанные страницы

- [Товары WooCommerce](./products.md)
- [Управление заказами](./orders.md)

## Материалы и источники

- [Setting up shipping zones](https://woocommerce.com/document/setting-up-shipping-zones/)
- [Flat rate shipping](https://woocommerce.com/document/flat-rate-shipping/)
- [Free shipping](https://woocommerce.com/document/free-shipping/)
- [Local pickup](https://woocommerce.com/document/local-pickup/)
- [Product shipping classes](https://woocommerce.com/document/product-shipping-classes/)
- [Configure shipping (WordPress.com course)](https://wordpress.com/support/courses/build-your-store-with-woocommerce/configure-shipping/)
