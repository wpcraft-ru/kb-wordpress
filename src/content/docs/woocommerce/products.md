---
title: "Товары WooCommerce: типы и управление"
description: "6 встроенных типов товаров WooCommerce — simple, variable, grouped, external, virtual, downloadable — и расширения: subscriptions, bookings, bundles."
---

## Встроенные типы товаров

WooCommerce из коробки поддерживает 6 типов товаров. Каждый определяет поведение товара: доставку, инвентаризацию и способ покупки.

### Simple product (простой товар)

Базовый физический товар без вариантов (размеров, цветов). Подходит для книг, электроники, единичных предметов.

- Одна цена (обычная + скидочная)
- Управление складом, SKU, вес и размеры
- Linked Products: кросс-сейлы (cross-sells) и допродажи (upsells)
- Атрибуты и отзывы

### Variable product (вариативный товар)

Товар с вариантами: размер, цвет, материал и т.д. Каждый вариант — свой SKU, цена, вес и уровень запасов.

**Создание:**
1. Выбрать «Variable product» в выпадающем меню Product Data
2. Вкладка Attributes → добавить атрибуты (например, Color: Red | Blue | Green)
3. Вкладка Variations → сгенерировать варианты

### Grouped product (сгруппированный товар)

Коллекция существующих простых товаров. Покупатель может выбрать один или несколько товаров из группы.

- Не имеет собственной цены
- Настроить во вкладке Linked Products → Grouped products
- Пример: комплект мебели (кресло + диван)

### External/Affiliate product (внешний/партнёрский товар)

Товар, продающийся на другом сайте. Кнопка «Add to Cart» заменяется на «Buy Now» с переходом по внешней ссылке.

- Подходит для affiliate-маркетинга
- Можно комбинировать с другими типами товаров

### Virtual product (виртуальный товар)

Товар без физической доставки. Скрываются поля доставки. Пример: услуги (консультации, страховка), планы обслуживания.

### Downloadable product (загружаемый товар)

Цифровой товар с файлом для скачивания: электронные книги, шаблоны, MP3, софт.

- Чекбокс «Downloadable» добавляет поле для URL файла
- Настройка лимита скачиваний и срока действия ссылки

**Виртуальный + Загружаемый** — товар, который не доставляется и содержит файл (например, программное обеспечение).

## Добавление товара: пошагово

1. **Products → Add New**
2. Заголовок и описание товара
3. Блок **Product data**: выбрать тип, цену, инвентарь, доставку
4. **Product short description** (краткое описание для каталога)
5. **Product image** + **Product gallery**
6. Категории и теги товара
7. Опубликовать

## Расширенные типы (через плагины)

### Subscriptions (подписки)

Плагин [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/). Регулярные платежи: ежемесячно, ежегодно. Настройка trial-периода и sign-up fee.

### Bookings (бронирования)

Плагин [WooCommerce Bookings](https://woocommerce.com/products/woocommerce-bookings/). Бронирование на дату и время: отели, рестораны, аренда.

### Product Bundles (наборы)

Плагин [Product Bundles](https://woocommerce.com/products/product-bundles/). Персонализированные наборы, скидки за комплект, динамическое ценообразование.

### Memberships (членство)

Ограничение доступа к контенту по подписке. Видео, статьи, ресурсы — доступны только участникам.

## Связанные страницы

- [Управление заказами](./orders.md)
- [Страницы магазина](./store-pages.md)

## Материалы и источники

- [How to Add a WooCommerce Product](https://woocommerce.com/document/managing-products/add-product/)
- [WooCommerce product types explained](https://woocommerce.com/posts/product-types-explained/)
- [Variable product documentation](https://woocommerce.com/document/variable-product/)
- [Virtual and downloadable products](https://woocommerce.com/document/managing-products/virtual-downloadable/)
- [Add products (WordPress.com course)](https://wordpress.com/support/courses/build-your-store-with-woocommerce/add-products/)
