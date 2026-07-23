---
title: "WooCommerce: приём платежей"
description: "Настройка оплаты в WooCommerce: WooPayments, платёжные шлюзы, Apple Pay, Google Pay, fraud-защита и тестирование."
---

## Встроенные способы оплаты

WooCommerce из коробки поддерживает:

- **Direct bank transfer (BACS)** — прямой банковский перевод
- **Check payments** — оплата чеком
- **Cash on delivery (COD)** — наложенный платёж

Эти методы не требуют дополнительных плагинов, настраиваются в **WooCommerce → Настройки → Payments**.

## WooPayments

[WooPayments](https://woocommerce.com/document/woopayments/) — официальное платёжное решение от WooCommerce. Бесплатный плагин, комиссия только за транзакции.

**Что принимает:**
- Кредитные/дебетовые карты (Visa, Mastercard, Amex и др.)
- Apple Pay и Google Pay
- Buy Now, Pay Later (Klarna, Afterpay)
- Локальные методы: iDEAL, SEPA, Bancontact и др.

**Преимущества:**
- Управление платежами прямо из админки WordPress
- Возвраты и частичные возвраты в интерфейсе WooCommerce
- Встроенная fraud-защита (бесплатно)

### Установка WooPayments

1. Установить плагин из репозитория WordPress.org или через WooCommerce → Extensions
2. Пройти верификацию (KYC) — потребуются данные о бизнесе
3. Активировать нужные методы оплаты

### Тестирование

Перед запуском включите **тестовый режим** (WooPayments → Settings → Test mode). Используйте [тестовые карты](https://woocommerce.com/document/woopayments/testing-and-troubleshooting/testing/) для проверки.

## Другие платёжные шлюзы

WooCommerce поддерживает [сотни платёжных шлюзов](https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/):

| Шлюз | Особенности |
|---|---|
| Stripe | Бесплатный плагин, глобальное покрытие |
| PayPal | Бесплатный плагин, высокая узнаваемость |
| Authorize.Net | Для клиентов из США |
| Square | Синхронизация с офлайн-продажами (POS) |
| Mercado Pago | Латинская Америка |

## Fraud-защита

WooPayments включает бесплатную защиту от мошенничества. Дополнительно можно использовать:

- **Fraud prevention** в настройках WooPayments — автоматическая блокировка подозрительных транзакций
- **3D Secure** — дополнительная проверка для карт
- Ручная проверка заказов с высоким риском

## Связанные страницы

- [Управление заказами](./orders.md)
- [Запуск и расширение](./launch-extend.md)

## Материалы и источники

- [WooPayments documentation](https://woocommerce.com/document/woopayments/)
- [WooPayments startup guide](https://woocommerce.com/document/woopayments/startup-guide/)
- [WooPayments fraud protection](https://woocommerce.com/document/woopayments/fraud-and-disputes/fraud-protection/)
- [Testing WooPayments](https://woocommerce.com/document/woopayments/testing-and-troubleshooting/testing/)
- [Set up payments (WordPress.com course)](https://wordpress.com/support/courses/build-your-store-with-woocommerce/set-up-payments/)
