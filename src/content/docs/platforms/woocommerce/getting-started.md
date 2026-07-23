---
title: "WooCommerce: установка и первые шаги"
description: "5 шагов для запуска интернет-магазина на WooCommerce: установка плагина, настройки, выбор темы и WooCommerce-хостинг."
---

## Шаг 1: Установка WooCommerce

Плагин WooCommerce устанавливается как любой другой плагин WordPress:

1. **Админка → Плагины → Добавить новый**
2. Поиск: «WooCommerce»
3. Установить → Активировать

После активации запускается **мастер настройки** (Setup Wizard), который проведёт через базовую конфигурацию. Мастер можно пропустить и настроить всё вручную через **WooCommerce → Настройки**.

```bash
# Альтернативно — WP-CLI:
wp plugin install woocommerce --activate
```

## Шаг 2: Базовая конфигурация

### Общие настройки (WooCommerce → Настройки → General)

| Параметр | Что указать |
|---|---|
| Store Address | Физический адрес магазина (нужен для налогов и доставки) |
| Selling location(s) | Страны, в которые продаёте |
| Shipping location(s) | Страны, куда доставляете |
| Default customer location | Геолокация или базовая страна магазина |
| Enable taxes | Включить/отключить налоги |
| Enable coupons | Включить купоны |

### Валюта

Настраивается там же: код валюты, позиция символа, разделители тысяч и десятичных знаков.

## Шаг 3: Выбор темы

WooCommerce работает с большинством WordPress-тем. Для максимальной совместимости:

- **Storefront** — официальная тема WooCommerce (бесплатно в .org-репозитории)
- **Block-темы** — любые темы FSE с поддержкой WooCommerce-блоков
- **Сторонние темы** — проверять, что разработчик заявляет «WooCommerce compatible»

Тема должна корректно отображать страницы: Shop, Cart, Checkout, My Account.

## Шаг 4: Страницы магазина

WooCommerce автоматически создаёт страницы при установке:

- **Shop** (`/shop/`) — каталог товаров
- **Cart** (`/cart/`) — корзина
- **Checkout** (`/checkout/`) — оформление заказа
- **My Account** (`/my-account/`) — личный кабинет

Если страницы не создались: **WooCommerce → Status → Tools → Create default pages**.

## Шаг 5: Permalink

Важно: после активации WooCommerce проверьте, что **Настройки → Постоянные ссылки** используют любую структуру, кроме «Plain». Рекомендуется `Post name` (`/%postname%/`).

## WooCommerce и хостинг

WooCommerce требовательнее к ресурсам, чем обычный WordPress:

- **PHP 7.4+** (рекомендуется 8.0+)
- **MySQL 5.7+** или MariaDB 10.3+
- **Memory limit**: минимум 256 MB
- Некоторые хостинг-провайдеры предлагают тарифы «WooCommerce optimized»

## Связанные страницы

- [Товары WooCommerce](./products.md)
- [Приём платежей](./payments.md)
- [Страницы магазина](./store-pages.md)

## Материалы и источники

- [Start with WooCommerce in 5 steps](https://woocommerce.com/document/start-with-woocommerce-in-5-steps/)
- [Configuring WooCommerce settings](https://woocommerce.com/document/configuring-woocommerce-settings/)
- [Get started with Woo (WordPress.com course)](https://wordpress.com/support/courses/build-your-store-with-woocommerce/get-started-with-woo/)
