---
title: "Кэширование WordPress"
description: "Виды кэширования в WordPress: плагины, браузерный кэш, объектный кэш и серверный кэш — как выбрать и настроить."
---

Кэширование — самый быстрый способ ускорить WordPress. Для немедленного эффекта установите [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/), [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) или [Cache Enabler](https://wordpress.org/plugins/cache-enabler/).

Подробнее об общих принципах оптимизации — [Оптимизация WordPress](./optimization.md).

## Плагины кэширования

Плагины кэширования сохраняют посты и страницы как статические файлы и отдают их посетителям вместо повторной генерации PHP. Это снижает нагрузку на сервер в десятки и сотни раз — особенно для страниц с редкими изменениями.

В связке с системным кэшем уровня Varnish эффективность многократно возрастает.

**Популярные плагины:**
- [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)
- [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/)
- [Cache Enabler](https://wordpress.org/plugins/cache-enabler/)

Если на сайте много динамического контента, настройка кэширования сложнее. Ищите по запросу «WordPress cache plugin» актуальные решения.

## Браузерный кэш

Браузерный кэш снижает количество запросов к серверу за счёт хранения статических файлов (изображения, CSS, JS) на компьютере посетителя.

**Механизм работы:**
- Сервер отправляет заголовки `Cache-Control` (особенно `max-age`) и `Expires`
- Браузер проверяет [Entity Tags (ETag)](https://en.wikipedia.org/wiki/HTTP_ETag) вместо повторной загрузки
- Сервер отвечает `304 Not Modified` вместо `200 OK` с телом файла

Результат — меньше трафика и быстрее загрузка при повторных визитах.

### Пример заголовков в `.htaccess`

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Объектный кэш

Объектное кэширование — перенос данных из медленного и дорогого хранилища в быстрое и дешёвое. В отличие от кэша страниц, объектный кэш обычно **персистентный**: данные, закэшированные при одном запросе, доступны при следующем.

**Ключевое свойство:** закэшированные данные всегда должны быть восстанавливаемыми. При повреждении кэша приложение продолжает работать — данные регенерируются автоматически, хотя и с временным падением производительности.

**Движки объектного кэша:**

| Движок | Тип | Особенности |
|--------|-----|-------------|
| Redis | In-memory | Самый популярный, богатая структура данных |
| Memcached | In-memory | Простой, проверенный временем |
| APC/u | In-memory | Локальный для одного сервера |
| Файловая система | Disk-based | Не требует доп. сервисов |

Выбор движка зависит от задачи. Минимальное требование — доступ к закэшированным данным должен быть быстрее, чем их повторная генерация.

### Объектный кэш в WordPress

WordPress имеет встроенный API объектного кэша через класс `WP_Object_Cache`. Для подключения внешнего движка (Redis, Memcached) используйте drop-in плагин `object-cache.php` в `wp-content/`.

```php
// Базовое использование WP Object Cache API
wp_cache_set('my_key', $data, 'my_group', 3600);
$data = wp_cache_get('my_key', 'my_group');
wp_cache_delete('my_key', 'my_group');
```

## Серверный кэш

Серверный кэш сложнее плагинного, но необходим для высоконагруженных сайтов.

**Уровни серверного кэширования:**

### Opcode-кэш

Ускоряет выполнение PHP, сохраняя скомпилированный байт-код в памяти:

- **[OPcache](https://www.php.net/manual/en/book.opcache.php)** — встроен в PHP 5.5+, рекомендуется к включению всегда
- **[WinCache](https://www.iis.net/downloads/microsoft/wincache-extension)** — для IIS на Windows

### Reverse Proxy

Обратный прокси-сервер перед веб-сервером WordPress:

- **[Varnish](https://www.varnish-cache.org/)** — мощный HTTP-акселератор, отлично сочетается с плагинами кэширования (W3TC, WP Super Cache)
- **Nginx FastCGI Cache** — кэширование на уровне веб-сервера без дополнительного ПО

### Схема многоуровневого кэширования

```
Пользователь → CDN → Varnish (reverse proxy) → Nginx/Apache (opcode cache) → WordPress (object cache: Redis) → MySQL
```

## Выбор стратегии

| Уровень сайта | Рекомендация |
|---------------|--------------|
| Блог на shared-хостинге | Плагин кэширования + браузерный кэш |
| Средний сайт на VPS | Плагин + OPcache + объектный кэш (Redis) |
| Высоконагруженный проект | Varnish/Nginx FastCGI + Redis + CDN + OPcache |

## Дополнительные материалы

- [Core Caching Concepts in WordPress](https://www.tollmanz.com/core-caching-concepts-in-wordpress/)
- [Best Practices for Speeding Up Your Web Site](https://developer.yahoo.com/performance/rules.html) — Yahoo! Developer Network
- [Use Server Cache Control to Improve Performance](https://www.websiteoptimization.com/speed/tweak/cache/)
- [Оптимизация WordPress](./optimization.md) — общий обзор факторов производительности
- [PHP-оптимизация](./php-optimization.md) — настройка PHP для WordPress

---

*Источник: [WordPress Developer Handbook — Cache](https://developer.wordpress.org/advanced-administration/performance/cache/)*
