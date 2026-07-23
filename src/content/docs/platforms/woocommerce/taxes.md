---
title: "WooCommerce: настройка налогов"
description: "Налоги в WooCommerce: ставки, автоматические налоги, НДС для ЕС, настройка для разных юрисдикций."
---

## Базовая настройка

Включение налогов:

1. **WooCommerce → Настройки → General → Enable taxes**
2. Перейти на вкладку **Tax**

### Основные опции

| Параметр | Значение |
|---|---|
| Prices entered with tax | Yes — если цены вводятся с учётом налога |
| Calculate tax based on | Shipping address / Billing address / Store base address |
| Shipping tax class | Ставка налога для доставки |
| Rounding | Округлять налог на уровне позиции или всего заказа |
| Display prices | С налогом или без в каталоге/корзине/чеке |

## Налоговые ставки

Настраиваются в **WooCommerce → Настройки → Tax → Standard rates** (и дополнительные классы).

Для каждой ставки задаётся:

- **Country Code** — код страны (ISO 3166)
- **State Code** — код штата/региона
- **ZIP/Postcode** — диапазон индексов (например, `10001...10099`)
- **City** — город
- **Rate %** — процентная ставка
- **Tax name** — название налога для чеков
- **Priority** — приоритет при пересечении правил
- **Compound** — составной налог (налог на налог)

### Импорт/экспорт ставок

CSV-файл со ставками можно импортировать через кнопку **Import CSV** на странице ставок.

## Автоматические налоги: WooCommerce Tax

Плагин [WooCommerce Tax](https://woocommerce.com/products/tax/) (бесплатно) автоматически рассчитывает налоги:

- Определяет ставки на основе адреса покупателя
- Поддерживает США (state + local), Канаду, ЕС, Великобританию, Австралию
- Обновляет ставки автоматически

## НДС для стран ЕС

Для цифровых товаров, продаваемых в ЕС, действуют особые правила:

- НДС взимается по ставке страны **покупателя**
- Требуется валидация VAT-номера для B2B-продаж
- Плагин [EU VAT Number](https://woocommerce.com/products/eu-vat-number/) помогает с валидацией

Подробнее: [Setting up EU VAT rates for digital products](https://woocommerce.com/document/setting-up-eu-vat-rates-for-digital-products/).

## PHP-пример: кастомная налоговая ставка

```php
add_filter('woocommerce_find_rates', function($matched_tax_rates, $country, $state, $postcode, $city, $tax_class) {
    // Дополнительная ставка 5% для конкретного региона
    if ($country === 'US' && $state === 'NY') {
        $matched_tax_rates['custom_ny'] = [
            'rate'     => 5.0,
            'label'    => 'NY Special Tax',
            'shipping' => 'yes',
            'compound' => 'no',
        ];
    }
    return $matched_tax_rates;
}, 10, 6);
```

## Связанные страницы

- [Приём платежей](./payments.md)
- [Управление заказами](./orders.md)

## Материалы и источники

- [Setting up taxes in WooCommerce](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/)
- [How taxes work in WooCommerce](https://woocommerce.com/document/how-taxes-work-in-woocommerce/)
- [WooCommerce Tax guide](https://woocommerce.com/document/woocommerce-shipping-and-tax/woocommerce-tax/)
- [Collect sales tax (WordPress.com course)](https://wordpress.com/support/courses/build-your-store-with-woocommerce/collect-sales-tax/)
