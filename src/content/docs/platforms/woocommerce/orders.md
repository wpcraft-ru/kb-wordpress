---
title: "WooCommerce: управление заказами"
description: "Заказы в WooCommerce: статусы, управление, возвраты, email-уведомления и тестирование заказов."
---

## Статусы заказов

WooCommerce использует статусы для отслеживания жизненного цикла заказа:

| Статус | Описание |
|---|---|
| **Pending payment** | Ожидание оплаты — заказ создан, оплата не поступила |
| **Failed** | Платёж не прошёл или отклонён |
| **Processing** | Оплата получена, заказ в обработке |
| **Completed** | Заказ выполнен |
| **On Hold** | Требует подтверждения — например, проверка платежа |
| **Cancelled** | Отменён администратором или клиентом |
| **Refunded** | Возвращён — частично или полностью |
| **Draft** | Черновик заказа (создан вручную через админку) |

Переходы между статусами можно автоматизировать через настройки платёжных шлюзов.

## Управление заказами

Интерфейс: **WooCommerce → Orders**.

- **Просмотр заказа** — все детали: товары, адрес, способ оплаты и доставки
- **Изменение статуса** — выпадающий список в правой колонке
- **Заметки к заказу** — внутренние (private) и для клиента (customer)
- **Создать заказ вручную** — кнопка «Add Order» для телефонных или ручных заказов

### Поиск и фильтрация

Заказы можно фильтровать по:
- Статусу
- Дате
- Клиенту
- Товару (поиск по названию)
- Сумме

## Возвраты (Refunds)

Возврат делается из карточки заказа:
1. Открыть заказ
2. Нажать **Refund**
3. Указать количество возвращаемых товаров
4. Указать сумму возврата
5. **Refund manually** (отправка денег вне системы) или **Refund via WooPayments** (автоматический возврат через платёжный шлюз)

## Email-уведомления

WooCommerce отправляет email-уведомления о заказах. Настройка: **WooCommerce → Настройки → Emails**.

### Основные уведомления

| Уведомление | Получатель |
|---|---|
| New Order | Администратор |
| Cancelled Order | Администратор |
| Failed Order | Администратор |
| Order On-Hold | Клиент |
| Processing Order | Клиент |
| Completed Order | Клиент |
| Refunded Order | Клиент |
| Customer Invoice | Клиент |
| Customer Note | Клиент |
| Password Reset | Клиент |
| New Account | Клиент |

Каждое уведомление можно:
- Включить/отключить
- Настроить тему (subject) и заголовок
- Кастомизировать HTML-шаблон (переопределением в child theme)

## Тестирование заказов

Перед запуском протестируйте процесс заказа:

1. Включите тестовый режим платёжного шлюза
2. Добавьте товар в корзину
3. Пройдите оформление
4. Проверьте цепочку email-уведомлений
5. Измените статус → Completed → Refunded

## Связанные страницы

- [Приём платежей](./payments.md)
- [Запуск и расширение](./launch-extend.md)

## Материалы и источники

- [Managing orders](https://woocommerce.com/document/managing-orders/)
- [Order statuses](https://woocommerce.com/document/managing-orders/order-statuses/)
- [Refunding orders in WooCommerce](https://woocommerce.com/document/woocommerce-refunds/)
- [Email settings](https://woocommerce.com/document/configuring-woocommerce-settings/email/)
- [Manage orders (WordPress.com course)](https://wordpress.com/support/courses/build-your-store-with-woocommerce/manage-orders/)
