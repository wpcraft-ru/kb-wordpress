---
title: "Оптимизация WordPress"
description: "Комплексная оптимизация производительности WordPress: хостинг, плагины, изображения, CDN, сжатие, база данных и масштабирование."
---

Оптимизировать WordPress нужно на любом уровне — от блога на shared-хостинге до высоконагруженного проекта. Если нужен быстрый результат — начните с [кэширования](./cache.md).

Далее — системный подход к оптимизации по всем направлениям.

## Факторы производительности

На скорость WordPress влияют:

- **Хостинг** — тип и конфигурация сервера
- **Конфигурация WordPress** — плагины, тема, настройки
- **Версии ПО** — PHP, MySQL, веб-сервер
- **Контент** — количество и размер изображений, скриптов, стилей
- **Трафик** — объём и характер нагрузки
- **География** — расстояние от сервера до посетителей
- **Статика** — вынос медиа в [S3-хранилище](../plugins/s3-storage.md) освобождает сервер и ускоряет отдачу

## Хостинг

### Типы хостинга и возможности оптимизации

| Тип хостинга | Доступные рычаги |
|-------------|-------------------|
| **Shared** | Плагины кэширования, оптимизация изображений, CDN |
| **Managed** | Ограниченный выбор плагинов, встроенное кэширование |
| **VPS / Dedicated** | Полный контроль: серверный кэш, PHP, MySQL, Nginx/Apache |

На VPS/Dedicated к общим методам добавляются: серверный кэш, тонкая настройка ПО и Content Offloading.

Для WooCommerce-магазинов требования к хостингу выше: PHP 8.0+, memory limit ≥ 256MB, SSD/NVMe обязательно. Подробнее — в разделе [WooCommerce: запуск и расширение](../woocommerce/launch-extend.md).

### Аппаратные характеристики

- Количество и частота процессоров
- Объём оперативной памяти
- Тип диска (NVMe > SSD > HDD)
- Канал связи

Хостинг-провайдеры предлагают более высокую производительность за более высокую цену.

### Географическая дистанция

Расстояние между сервером и посетителем влияет на latency. **CDN** решает эту проблему, размещая копии статических файлов в разных регионах.

### Характер нагрузки

- Легитимный трафик (всплески посещений)
- Brute-force атаки на `/wp-login.php`
- Хотлинкинг изображений с других сайтов
- DoS/DDoS атаки

Выявление и блокировка вредного трафика — часть стратегии оптимизации.

## Оптимизация WordPress

### Плагины

Каждый активный плагин добавляет PHP-код, который выполняется при каждом запросе:

```bash
# Измерение влияния плагинов через WP-CLI
wp plugin list --status=active
```

**Правила:**
- Держите только необходимые плагины активными
- Деактивируйте и удаляйте неиспользуемые
- Отдавайте предпочтение легковесным альтернативам
- Тестируйте влияние нового плагина на скорость (см. [инструменты тестирования](#инструменты-тестирования))

### Темы

Тяжёлые темы с page builder'ами генерируют избыточный DOM и подключают лишние скрипты. Выбирайте тему, соответствующую реальным потребностям, а не «на всякий случай».

### Изображения

**Оптимизация на этапе загрузки:**
- Сжимайте до загрузки (TinyPNG, Squoosh)
- Используйте правильный формат: WebP для фотографий, SVG для иконок

**Автоматизация:**
```php
// Автоматическое качество JPEG при загрузке
add_filter('jpeg_quality', function() {
    return 82; // WordPress default is 82
});
```

Плагины вроде [EWWW Image Optimizer](https://wordpress.org/plugins/ewww-image-optimizer/) или [Smush](https://wordpress.org/plugins/wp-smushit/) автоматизируют сжатие.

### Content Offloading (CDN)

Вынос статического контента на отдельный домен или CDN:

- **CDN** — Cloudflare, BunnyCDN, KeyCDN
- **Отдельный домен для статики** — `static.example.com`
- **S3-совместимое объектное хранилище** для медиафайлов

Подробный обзор и сравнение CDN-сервисов — [CDN и производительность — сервисы](../components/services/cdn-performance.md).

Плагины вроде [WP Offload Media](https://wordpress.org/plugins/amazon-s3-and-cloudfront/) автоматизируют перенос медиа-библиотеки.

### Сжатие

```apache
# Apache: включение Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml
  AddOutputFilterByType DEFLATE text/css application/javascript
  AddOutputFilterByType DEFLATE application/json application/xml
</IfModule>
```

```nginx
# Nginx: включение Gzip
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 256;
```

### База данных

#### InnoDB против MyISAM

Все таблицы WordPress должны использовать **InnoDB**:

```sql
-- Проверить движок таблиц
SELECT TABLE_NAME, ENGINE
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = 'wordpress';

-- Конвертировать таблицу
ALTER TABLE wp_posts ENGINE = InnoDB;
```

#### Очистка базы

```sql
-- Удаление ревизий постов
DELETE FROM wp_posts WHERE post_type = 'revision';

-- Очистка спам-комментариев
DELETE FROM wp_comments WHERE comment_approved = 'spam';

-- Удаление transient-записей
DELETE FROM wp_options WHERE option_name LIKE '_transient_%';
```

#### Autoloaded Options

Опции с `autoload = 'yes'` загружаются при каждом запросе. Большой объём таких опций замедляет WordPress:

```sql
-- Проверить размер autoloaded-опций
SELECT SUM(LENGTH(option_value)) as total_size
FROM wp_options
WHERE autoload = 'yes';
```

Плагины часто добавляют свои опции в autoload без необходимости. Используйте `wp option update <name> <value> --autoload=no` через WP-CLI для некритичных опций.

### Autoloaded Options в WP-CLI

```bash
# Посмотреть размер autoloaded-опций
wp option list --autoload=yes --format=count

# Найти самые большие опции
wp db query "SELECT option_name, LENGTH(option_value) as size
  FROM wp_options WHERE autoload='yes'
  ORDER BY size DESC LIMIT 20"
```

## Масштабирование

### Несколько серверов

При высоких нагрузках компоненты WordPress разносятся по серверам:

- **База данных** — отдельный сервер (меняется `DB_HOST` в `wp-config.php`)
- **Статика** — CDN или отдельный домен (Content Offloading)
- **Балансировщик нагрузки** — распределение трафика между несколькими веб-серверами
- **HyperDB** — замена `WPDB` для работы с реплицированными и партицированными базами данных

### Оптимизация ПО

| Компонент | Методы |
|-----------|--------|
| **Веб-сервер** | Apache MPM Event, Nginx worker_processes, keepalive, кэш-заголовки |
| **PHP** | OPcache, APC/u, свежая версия (см. [PHP-оптимизация](./php-optimization.md)) |
| **MySQL/MariaDB** | InnoDB, query cache, тюнинг буферов, slow query log |
| **DNS** | Вынос DNS на внешний сервис снижает нагрузку |
| **Почта** | Не запускайте почтовый сервер на сервере WordPress — используйте внешний SMTP |

## Инструменты тестирования

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) (встроен в Chrome DevTools)
- [Query Monitor](https://wordpress.org/plugins/query-monitor/) — плагин для отладки внутри WordPress

## Дополнительные материалы

- [WordCamp Performance Presentations](https://wordpress.tv/category/wordcamptv/) — доклады с WordCamp
- [Yahoo! Best Practices for Speeding Up Your Web Site](https://developer.yahoo.com/performance/rules.html)
- [Кэширование WordPress](./cache.md) — глубже о видах кэширования
- [PHP-оптимизация](./php-optimization.md) — настройка PHP для WordPress

---

*Источник: [WordPress Developer Handbook — Optimization](https://developer.wordpress.org/advanced-administration/performance/optimization/)*
