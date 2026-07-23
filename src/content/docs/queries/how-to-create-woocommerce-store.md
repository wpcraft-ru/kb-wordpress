---
title: "Как создать интернет-магазин на WordPress: полный маршрут"
description: "Пошаговый план создания интернет-магазина на self-hosted WordPress + WooCommerce: от хостинга и домена до оплаты, налогов и юридических страниц."
---

## Общая схема

Создание интернет-магазина на self-hosted WordPress требует 8 шагов, охватывающих хостинг, домен, установку WooCommerce, товары, оплату, доставку, налоги, безопасность и юрлицо.

База знаний покрывает тему в разделе **[WooCommerce: полное руководство](../platforms/woocommerce/index.md)** (9 страниц) и смежных разделах.

## Шаг 1: Подготовить базу

Перед установкой WooCommerce нужен работающий WordPress-сайт.

| Компонент | Что нужно | Где почитать |
|---|---|---|
| **Домен** | Зарегистрировать у reg.ru, beget.ru, Namecheap | [Как зарегистрировать домен для WordPress](../domains/register-domain/) |
| **Хостинг** | PHP 8.0+, MySQL 5.7+, memory limit ≥ 256MB, SSD/NVMe | [Хостинг для WordPress: как выбрать](../how-to/wordpress-hosting/) |
| **SSL** | Обязателен для приёма платежей | [SSL и HTTPS для домена](../domains/ssl-https/) |
| **WordPress** | Установлен и настроен | [Как установить WordPress?](../faq/how-to-install-wordpress.md) |

## Шаг 2: Установить WooCommerce

Источник: **[WooCommerce: установка и первые шаги](../platforms/woocommerce/getting-started.md)**

1. **Админка → Плагины → Добавить новый** → «WooCommerce» → Установить → Активировать
2. Альтернативно через WP-CLI: `wp plugin install woocommerce --activate`
3. Пройти **Setup Wizard** (или настроить вручную через WooCommerce → Настройки)

**Базовые настройки:**
- Store Address, страны продаж и доставки
- Валюта (₽ для РФ)
- Permalink → `Post name` (обязательно)

## Шаг 3: Выбрать тему

Источник: **[WooCommerce: установка и первые шаги](../platforms/woocommerce/getting-started.md)**

- **Storefront** — официальная бесплатная тема WooCommerce
- Block/FSE-темы с поддержкой WooCommerce-блоков
- Сторонние темы — проверять метку «WooCommerce compatible»

WooCommerce автоматически создаёт страницы: Shop, Cart, Checkout, My Account.

## Шаг 4: Добавить товары

Источник: **[Товары WooCommerce: типы и управление](../platforms/woocommerce/products.md)**

**6 встроенных типов товаров:**

| Тип | Назначение |
|---|---|
| Simple | Обычный физический товар |
| Variable | С вариантами (размер, цвет) — каждый со своим SKU и ценой |
| Grouped | Набор из существующих товаров |
| External/Affiliate | Партнёрская ссылка на другой сайт |
| Virtual | Услуги без доставки |
| Downloadable | Цифровые файлы (PDF, MP3, софт) |

**Платные расширения:** Subscriptions (подписки), Bookings (бронирования), Product Bundles (наборы), Memberships (членство).

## Шаг 5: Настроить оплату

Источник: **[WooCommerce: приём платежей](../platforms/woocommerce/payments.md)**

- **WooPayments** — официальное решение: карты, Apple Pay, Google Pay, Klarna. Управление из админки, встроенная fraud-защита.
- **Для РФ** (из [WooCommerce: основы настройки](../plugins/woocommerce-basics.md)): Robokassa, YooKassa (ЮMoney), CloudPayments, Tinkoff
- Альтернативы: Stripe, PayPal, Authorize.Net, Square

Перед запуском — протестировать в тестовом режиме!

## Шаг 6: Настроить налоги и доставку

Источники: [Налоги](../platforms/woocommerce/taxes.md), [Доставка](../platforms/woocommerce/shipping.md)

- **Налоги:** включить в WooCommerce → Настройки → Налог. Настроить ставки (20%, 10%, 0%, без НДС)
- **Доставка:** зоны по географии, методы — flat rate, бесплатно, самовывоз, Почта России

## Шаг 7: Безопасность и юридические документы

Источники: [Базовая безопасность](../security/wordpress-security-basics.md), [Юридические требования по типам сайтов](../legal/by-website-type.md)

**Для интернет-магазина обязательно:**
- ✅ Политика конфиденциальности + Реквизиты компании
- ✅ **Публичная оферта** с условиями доставки и возврата
- ✅ Политика cookies
- ✅ HTTPS (SSL) для приёма платежей
- ⚠️ Онлайн-касса (54-ФЗ для РФ) — интеграция через платёжный шлюз

## Шаг 8: Запуск

Источник: **[WooCommerce: запуск и расширение](../platforms/woocommerce/launch-extend.md)**

- Переключить платежи из тестового режима в боевой
- Настроить email-уведомления о заказах
- Подключить аналитику (Google Analytics через Site Kit)
- Маркетинг: купоны, email-рассылки (MailPoet, Unisender)

## Что покрыто вики, а что нет

| Покрыто ✅ | Не покрыто ❌ |
|---|---|
| Установка и первые шаги | Российские платёжные шлюзы детально |
| 6 типов товаров | Онлайн-кассы и 54-ФЗ |
| WooPayments, Stripe, PayPal | Документооборот (счета-фактуры, УПД) |
| Налоги, доставка, заказы | Интеграция с Честный Знак, Меркурий |
| Безопасность и юр. страницы | Сравнение с конкурентами (Tilda, Shopify) |
| Запуск и расширение | Мультиязычность магазина (WPML) |

## Материалы и источники

- [WooCommerce: полное руководство](../platforms/woocommerce/index.md)
- [WooCommerce: установка и первые шаги](../platforms/woocommerce/getting-started.md)
- [Товары WooCommerce: типы и управление](../platforms/woocommerce/products.md)
- [WooCommerce: приём платежей](../platforms/woocommerce/payments.md)
- [WooCommerce: основы настройки интернет-магазина](../plugins/woocommerce-basics.md)
- [Базовая безопасность WordPress](../security/wordpress-security-basics.md)
- [Юридические требования по типам сайтов](../legal/by-website-type.md)
