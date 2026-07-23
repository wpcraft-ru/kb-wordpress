---
title: "Оптимизация производительности WooCommerce"
description: "8 шагов оптимизации магазина: кэширование, изображения, минификация кода, CDN, база данных, темы и плагины, GZIP, мониторинг."
---

# Оптимизация производительности WooCommerce

Гайд по оптимизации производительности WooCommerce-магазина для разработчиков. Покрывает кэширование, изображения, код, CDN, базу данных и мониторинг.

Связанные страницы:
- [Кэширование в WooCommerce](./caching-woocommerce.md) — детальная настройка кэша
- [Оптимизация WordPress](./optimization.md) — общая оптимизация WP
- [Кэширование WordPress](./cache.md) — виды кэширования

## Шаг 1. Кэширование

### Серверное кэширование

Включите через хостинг-провайдера или настройте напрямую:
- **Varnish** — HTTP-акселератор
- **NGINX FastCGI Cache** — кэш на уровне веб-сервера
- **Redis** — объектный кэш

### Кэширующие плагины WordPress

- [WP Rocket](https://wp-rocket.me/) — включает поддержку WooCommerce «из коробки»
- [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)
- [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/)

### Кэширование специфичное для WooCommerce

Динамические страницы (корзина, чекаут, личный кабинет) **не должны кэшироваться**. WP Rocket включает встроенную поддержку WooCommerce. Подробная конфигурация: [Кэширование в WooCommerce](./caching-woocommerce.md).

## Шаг 2. Оптимизация изображений

1. **Правильный формат:** JPEG для фото, PNG для графики с прозрачностью
2. **Сжатие:** TinyPNG, ShortPixel — сжимайте перед загрузкой
3. **Lazy loading:** откладывайте загрузку изображений до появления в viewport. Большинство плагинов кэширования включают lazy loading
4. **Responsive images:** убедитесь, что тема отдаёт подходящий размер для разных устройств

## Шаг 3. Минификация и оптимизация кода

1. **Плагины:** Autoptimize, WP Rocket, W3 Total Cache
2. **Критический CSS:** комбинируйте и инлайньте критический CSS
3. **Отложенная загрузка JS:** используйте `defer` для некритического JavaScript

## Шаг 4. CDN (Content Delivery Network)

CDN раздаёт статические ресурсы (изображения, CSS, JS) с ближайших к пользователю серверов.

**Провайдеры:** Cloudflare, Fastly, Amazon CloudFront. Подробное сравнение: [CDN и производительность](../../components/services/cdn-performance.md).

## Шаг 5. Оптимизация базы данных

1. **Плагины:** WP-Optimize, WP-Sweep, Advanced Database Cleaner
2. **Регулярная очистка:**
   - Спам-комментарии
   - Ревизии записей
   - Просроченные transients (критично для WooCommerce — transients активно используются для кэширования данных)
3. **Оптимизация таблиц:** через плагин или `OPTIMIZE TABLE` в MySQL

## Шаг 6. Высокопроизводительные темы и плагины

1. **Тема:** выбирайте lightweight-тему, оптимизированную для WooCommerce
2. **Аудит плагинов:** используйте [Query Monitor](https://wordpress.org/plugins/query-monitor/) или WP Hive для анализа влияния плагинов на производительность

## Шаг 7. GZIP-сжатие

Снижает размер HTML, CSS, JS перед передачей браузеру.

**Способы включения:**
- Через плагин (WP Rocket, W3 Total Cache)
- Через `.htaccess` (Apache) или `nginx.conf` (NGINX)

### Пример для `.htaccess`

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript
    AddOutputFilterByType DEFLATE application/javascript application/json
</IfModule>
```

## Шаг 8. Мониторинг и анализ

### Тестирование производительности

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Непрерывный мониторинг

- **New Relic** — детальная производительность сервера и приложения
- **Uptime Robot** — доступность и время ответа

## Бенчмарки для расширений WooCommerce

При разработке собственных расширений для WooCommerce ориентируйтесь на **Chrome Core Web Vitals "Performance" score ≥ 90** на простом WooCommerce-сайте. Тестируйте с [Chrome Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/).

**Стратегии для разработчиков расширений:**
- Условная загрузка скриптов и стилей (только на нужных страницах)
- Эффективные запросы к БД (индексы, минимальная выборка)
- Lazy loading контента расширения
- Тестирование с включённым/выключенным расширением
- Совместимость с кэширующими решениями

## Материалы и источники

- [Optimize store performance](https://developer.woocommerce.com/docs/best-practices/performance/performance-optimization/) — официальная документация WooCommerce (источник)
- [Performance best practices for extensions](https://developer.woocommerce.com/docs/best-practices/performance/performance-best-practices/) — best practices для разработчиков (источник)
- [Кэширование в WooCommerce](./caching-woocommerce.md)
- [Оптимизация WordPress](./optimization.md)
- [CDN и производительность](../../components/services/cdn-performance.md)
