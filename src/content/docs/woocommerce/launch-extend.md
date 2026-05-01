---
title: "WooCommerce: запуск и расширение"
description: "Запуск магазина WooCommerce: чеклист, аналитика, Google Analytics, маркетинговые расширения и поддержка."
---

## Чеклист перед запуском

- [ ] Все товары добавлены с корректными ценами, SKU и изображениями
- [ ] Категории товаров настроены
- [ ] Платёжный шлюз протестирован в тестовом режиме
- [ ] Доставка настроена: зоны, методы, классы
- [ ] Налоги настроены (или автоматизированы через WooCommerce Tax)
- [ ] Страницы Shop, Cart, Checkout, My Account работают корректно
- [ ] Email-уведомления протестированы
- [ ] Сайт на HTTPS (SSL-сертификат для безопасного приёма платежей)
- [ ] Permalink — не Plain (любая структура, кроме дефолтной)
- [ ] Страницы Privacy Policy и Terms of Service созданы (WooCommerce добавляет чекбокс согласия на чеке)
- [ ] Базовая SEO-оптимизация: title, meta description главных страниц
- [ ] Аналитика подключена

## Аналитика и отчёты

**WooCommerce → Analytics** — встроенная аналитика:

- **Revenue** — общая выручка
- **Orders** — количество заказов
- **Products** — отчёт по проданным товарам
- **Categories** — продажи по категориям
- **Coupons** — эффективность купонов
- **Taxes** — отчёт по налогам
- **Stock** — складские запасы

### Google Analytics

Плагин [Google Analytics for WooCommerce](https://woocommerce.com/products/woocommerce-google-analytics/) добавляет enhanced ecommerce-трекинг: просмотры товаров, добавление в корзину, транзакции.

## Расширения и маркетинг

### Ключевые категории расширений

| Категория | Что даёт |
|---|---|
| [Маркетинг](https://woocommerce.com/product-category/woocommerce-extensions/marketing-extensions/) | Email-рассылки, CRM, автоматизация, реклама |
| [Мерчандайзинг](https://woocommerce.com/product-category/woocommerce-extensions/merchandising/) | Подписки, бронирования, наборы, цены |
| [Конверсия](https://woocommerce.com/product-category/woocommerce-extensions/conversion/) | Апсейлы, брошенные корзины, отзывы |
| [Доставка](https://woocommerce.com/product-category/woocommerce-extensions/shipping-delivery-and-fulfillment/) | Live-тарифы, печать меток, отслеживание |

### Топ-расширения для новых магазинов

- **WooCommerce Subscriptions** — регулярные платежи
- **WooCommerce Bookings** — бронирование услуг
- **Product Add-Ons** — дополнительные опции к товарам
- **WooCommerce Memberships** — ограничение контента
- **Mailchimp for WooCommerce** — синхронизация с email-рассылками

## Производительность магазина

WooCommerce-магазин создаёт нагрузку на сервер. Рекомендации:

- Кэширующий плагин с исключением страниц Cart, Checkout, My Account
- PHP 8.0+ и MySQL 5.7+
- CDN для изображений товаров
- Ленивая загрузка галерей товаров
- См. [Оптимизация WordPress](../performance/optimization.md)

## Связанные страницы

- [Установка и первые шаги](./getting-started.md)
- [Управление заказами](./orders.md)
- [Приём платежей](./payments.md)

## Материалы и источники

- [The ultimate ecommerce website launch checklist](https://woocommerce.com/posts/ecommerce-website-launch-checklist/)
- [WooCommerce Analytics](https://woocommerce.com/document/woocommerce-analytics/)
- [Google Analytics for WooCommerce](https://woocommerce.com/products/woocommerce-google-analytics/)
- [WooCommerce Marketplace](https://woocommerce.com/products/)
- [Launch and extend your store (WordPress.com course)](https://wordpress.com/support/courses/build-your-store-with-woocommerce/launch-extend/)
