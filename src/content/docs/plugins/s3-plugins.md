---
title: "Плагины для S3-хранилищ WordPress"
description: "Полный обзор и сравнение плагинов для выноса медиа WordPress в S3: S3 Uploads (Human Made), WP Offload Media, Media Cloud, Next3 Offload, Infinite Uploads — таблицы, сценарии, цены."
---

## Обзор

Вынос медиафайлов в S3-совместимое объектное хранилище — ключевой шаг к stateless-архитектуре WordPress. Подробнее о том, зачем это нужно, как работает архитектура и какие провайдеры доступны — на странице [S3-провайдеры для WordPress](../components/services/s3-providers.md).

Здесь — сравнение плагинов, которые реализуют offload медиа в S3.

## Сравнительная таблица

| Характеристика | S3 Uploads (Human Made) | WP Offload Media | Media Cloud | Next3 Offload | Infinite Uploads |
|---------------|:---:|:---:|:---:|:---:|:---:|
| **Цена** | Бесплатно (MIT) | Lite бесплатно / Pro от $50/год | Freemium | Платный | SaaS от $9/мес |
| **Интерфейс** | WP-CLI + wp-config | Админка (UI) | Админка (UI) | Админка (UI) | Админка + SaaS |
| **S3-провайдеры** | Любые S3-совместимые | AWS S3, DO Spaces, GCS | AWS S3, GCS, DO, Wasabi | AWS S3, DO, Wasabi | Свой CDN + S3 |
| **Yandex / Selectel** | ✅ Через endpoint | Через кастомный endpoint | ❌ | ❌ | ❌ |
| **CDN из коробки** | ❌ Отдельно | ✅ Pro (CloudFront) | ✅ Imgix/CDN | ✅ | ✅ Встроенный |
| **WP-CLI** | ✅ Полный | ✅ Pro | ✅ | ❌ | ❌ |
| **Offload CSS/JS** | ❌ Только uploads | ✅ Pro | ✅ | ✅ | ✅ |
| **Offload существующих** | ✅ wp s3-uploads upload-directory | ✅ Pro (bulk) | ✅ | ✅ | ✅ |
| **Private files / Signed URL** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Multisite** | ✅ | ✅ Pro | ✅ Pro | ✅ | ✅ |
| **Сложность настройки** | ⭐⭐⭐ Высокая | ⭐⭐ Средняя | ⭐⭐ Средняя | ⭐ Низкая | ⭐ Низкая |
| **GitHub Stars** | ~800 | — (закрытый код) | — (закрытый) | — (закрытый) | — (SaaS) |

---

## S3 Uploads (Human Made) — выбор для инженерных команд

S3 Uploads — это легковесный open-source плагин от [Human Made](https://github.com/humanmade/S3-Uploads), который полностью заменяет локальную директорию `wp-content/uploads` на S3-совместимое объектное хранилище. В отличие от WP Offload Media, у него практически нет графического интерфейса — вся настройка через `wp-config.php` и WP-CLI.

**Ключевая философия:** минимум «магии», максимум контроля. Идеален для команд, которые хотят предсказуемое поведение и не боятся конфигов.

### Что делает плагин

- Перехватывает загрузку и чтение медиафайлов через WordPress Media API
- Работает со всеми размерами миниатюр (thumbnails)
- Переписывает URL-ы на S3 (опционально, через конфиг)
- Поддерживает приватные файлы через **signed URL** (временные ссылки с подписью)
- Не трогает CSS/JS темы — работает только с `uploads`

### Когда подходит

- **Высоконагруженные сайты** с несколькими веб-нодами (stateless)
- **Kubernetes / Docker Swarm / автоскейлинг**
- **Экономия на egress** — часто используют с Cloudflare R2 (ноль за исходящий трафик)
- **Приватные файлы** (курсы, LMS, документы) через signed URL
- **Миграции** — медиа не нужно копировать, достаточно подключить бакет
- **Локальная разработка** — плагин можно отключить одной константой

### Плюсы и ограничения

**Плюсы:**
- Полностью open-source (MIT-лицензия)
- Лёгкий — никакого лишнего кода и интерфейса
- WP-CLI для миграции и верификации
- Работает с любым S3-совместимым хранилищем через endpoint
- Предсказуемое поведение — никаких неожиданных побочных эффектов

**Ограничения:**
- Нет админки — всё через конфиги и консоль
- Нужно руками настроить IAM, бакет, права
- Нет встроенного CDN — нужно настраивать отдельно
- Для новичков проще WP Offload Media

### Установка и настройка

#### 1. Создание бакета и IAM

```bash
# В консоли облачного провайдера:
# - Создать бакет (например, my-site-uploads)
# - Создать IAM-пользователя с правами s3:GetObject, s3:PutObject, s3:DeleteObject, s3:ListBucket
# - Записать Access Key ID и Secret Access Key
```

#### 2. Установка плагина

Рекомендуется через Composer:

```bash
composer require humanmade/s3-uploads
```

Или скачать с [GitHub](https://github.com/humanmade/S3-Uploads) и поместить в `wp-content/plugins/s3-uploads/`, затем активировать:

```bash
wp plugin activate s3-uploads
```

#### 3. Конфигурация в wp-config.php

```php
// Базовые константы (обязательные)
define('S3_UPLOADS_BUCKET', 'my-site-uploads');
define('S3_UPLOADS_REGION', 'eu-central-1'); // или ru-central1 для Yandex
define('S3_UPLOADS_KEY', 'AKIAIOSFODNN7EXAMPLE');
define('S3_UPLOADS_SECRET', 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY');

// Опционально
define('S3_UPLOADS_BUCKET_URL', 'https://my-site-uploads.s3.eu-central-1.amazonaws.com');
define('S3_UPLOADS_USE_INSTANCE_PROFILE', false); // для EC2 IAM-ролей
```

#### 4. Не-AWS эндпоинты (Yandex, R2, MinIO)

Для S3-совместимых провайдеров, отличных от AWS, нужно задать endpoint через mu-plugin:

```php
// wp-content/mu-plugins/s3-endpoint.php
add_filter('s3_uploads_s3_client_params', function($params) {
    $params['endpoint'] = 'https://storage.yandexcloud.net'; // Yandex Object Storage
    // $params['endpoint'] = 'https://s3.selcdn.ru';          // Selectel
    // $params['endpoint'] = 'https://<account>.r2.cloudflarestorage.com'; // Cloudflare R2
    $params['use_path_style_endpoint'] = true;
    return $params;
});
```

#### 5. Миграция существующих файлов

```bash
# Загрузить локальный uploads в бакет
wp s3-uploads upload-directory wp-content/uploads uploads --verbose

# Проверить целостность
wp s3-uploads verify

# Проверить, что плагин активен
wp s3-uploads is-installed
```

#### 6. Локальная разработка

Чтобы отключить S3 на локальной среде:

```php
if (defined('WP_ENV') && WP_ENV === 'local') {
    define('S3_UPLOADS_USE_LOCAL', true);
}
```

---

## WP Offload Media — UI и экосистема

WP Offload Media (ранее WP Offload S3) от [DeliciousBrains](https://deliciousbrains.com/wp-offload-media/) — самый популярный плагин для выноса медиафайлов WordPress в облачное хранилище. В отличие от S3 Uploads, имеет полноценный графический интерфейс в админке.

### Две версии

- **Lite** (бесплатно) — базовый offload в S3, URL-rewriting
- **Pro** (платно, от $50/год) — CDN, offload CSS/JS/шрифтов, существующая медиатека, multisite

### Поддерживаемые хранилища

- Amazon S3
- Amazon CloudFront (CDN)
- DigitalOcean Spaces
- Google Cloud Storage
- Любое S3-совместимое через кастомный endpoint

### Ключевые возможности

| Функция | Lite | Pro |
|---------|:----:|:---:|
| Offload новых файлов в S3 | ✅ | ✅ |
| URL-rewriting (замена ссылок) | ✅ | ✅ |
| Удаление локальных копий | ✅ | ✅ |
| Offload существующей медиатеки | ❌ | ✅ |
| Offload CSS, JS, шрифтов | ❌ | ✅ |
| CDN-интеграция (CloudFront) | ❌ | ✅ |
| Multisite | ❌ | ✅ |
| WP-CLI команды | ❌ | ✅ |

### Установка и настройка (Lite)

#### 1. Создание IAM-пользователя в AWS

1. Зайти в [AWS Console → IAM → Users](https://console.aws.amazon.com/iamv2/home#/users)
2. **Create user** → имя (например `wp-offload`)
3. **Attach policies directly** → выбрать `AmazonS3FullAccess`
4. Создать access key: **Security credentials** → **Create access key** → **Application running outside AWS**
5. Скачать `.csv` с Access Key ID и Secret Access Key

#### 2. Установка и активация

```bash
# Через админку: Plugins → Add New → "WP Offload Media Lite"
# Или WP-CLI:
wp plugin install amazon-s3-and-cloudfront --activate
```

#### 3. Настройка в админке

1. **WP Offload Media → Settings**
2. Выбрать **Amazon S3** как Storage Provider
3. Ввести Access Key ID и Secret Access Key
4. Выбрать бакет (создастся автоматически или выбрать существующий)
5. Настроить URL: либо S3-URL, либо свой домен/CDN

#### 4. Определение ключей через wp-config (рекомендуется)

```php
define('AS3CF_SETTINGS', serialize(array(
    'provider' => 'aws',
    'access-key-id' => 'AKIAIOSFODNN7EXAMPLE',
    'secret-access-key' => 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
)));
```

Это безопаснее, чем хранить ключи в базе данных.

#### 5. Offload существующей медиатеки (Pro)

В Pro-версии: **WP Offload Media → Media Library → Offload Now** — массовый перенос всех существующих файлов в S3.

### Настройка CDN (CloudFront)

1. В AWS Console создать CloudFront Distribution
2. Указать S3-бакет как Origin
3. В WP Offload Media Settings → **Delivery** → включить CloudFront
4. Указать CloudFront Domain (например `d123.cloudfront.net`)

После этого URL-ы медиафайлов будут заменены на CDN-домен — изображения отдаются с ближайшего edge-узла.

### Лучшие практики

- **IAM-роль вместо ключей** — если сайт на AWS EC2, используйте IAM-роль с привязанной политикой. Не храните ключи в базе
- **CDN обязателен** — S3 не оптимизирован для отдачи конечным пользователям. CloudFront или Cloudflare снижают latency и стоимость egress
- **Оптимизация изображений до offload** — сжимайте изображения плагином (EWWW, Smush) до отправки в S3
- **Мониторинг затрат** — следите за egress-трафиком в AWS Billing. S3-хранение дёшево, исходящий трафик — нет
- **Cloudflare R2 как альтернатива** — бесплатный egress, совместим с S3 API

### Когда брать и когда нет

**Когда брать:**
- Нужен UI в админке
- Сайт на AWS (IAM-роли упрощают настройку)
- Нужен offload CSS/JS/шрифтов (Pro)
- Важна интеграция с CloudFront
- Поддержка multisite

**Когда НЕ брать:**
- Бюджет не позволяет Pro (базовый offload существующих файлов — только в Pro)
- Нужен российский S3-провайдер с endpoint (Lite не поддерживает)

### Типовые ошибки

| Ошибка | Причина | Решение |
|--------|---------|---------|
| Изображения не грузятся | Бакет приватный | Включить public access на бакете |
| CORS-ошибки в админке | Нет CORS-заголовков | Настроить CORS на бакете |
| 403 Forbidden из S3 | Неверные права IAM | Проверить IAM-политику |
| Двойное списание за egress | Нет CDN | Настроить CloudFront |

---

## Media Cloud — для тяжёлых медиатек

Media Cloud — плагин с автоматизацией и интеграцией Imgix для on-the-fly обработки изображений.

**Когда брать:**
- Очень большая медиатека (50K+ файлов)
- Нужна интеграция с Imgix для on-the-fly обработки
- Требуется автоматическая оптимизация изображений

---

## Next3 Offload — простота и оптимизация

**Когда брать:**
- Нужен простой UI и минимум настроек
- Важна встроенная оптимизация изображений и WebP
- Бюджет позволяет платный плагин

---

## Infinite Uploads — SaaS без хлопот

**Когда брать:**
- Не хочется настраивать AWS/S3 вообще
- Нужен встроенный CDN
- Прозрачный биллинг без сюрпризов ($9/мес, unlimited sites)

---

## Ключевые различия в подходе

| Аспект | S3 Uploads | WP Offload Media | Другие |
|--------|-----------|-----------------|--------|
| **Философия** | Инженерный минимализм | Product-ready UX | Коммерческий all-in-one |
| **Конфигурация** | Код и консоль | Админка | Админка |
| **Зависимости** | Только плагин + Composer | Плагин + ключи в БД/config | Плагин + ключи |
| **Гибкость** | Максимальная (кастомные endpoint, signed URL) | Высокая (addons) | Средняя (что дали, то и есть) |
| **Безопасность** | Ключи только в wp-config | Ключи в БД или wp-config | Ключи в БД |

---

## Что выбрать для российских проектов

Для проектов с аудиторией в РФ особенно актуальны:

1. **S3 Uploads + Yandex Object Storage** — бесплатно, endpoint-конфиг, российские ЦОД
2. **S3 Uploads + Selectel Object Storage** — дешёвое холодное хранение, интеграция с Selectel CDN
3. **WP Offload Media Lite + кастомный endpoint** — если нужен UI, но придётся настраивать endpoint

Подробнее о провайдерах — [S3-провайдеры для WordPress](../components/services/s3-providers.md).

Пошаговое руководство по настройке — [Настройка S3-хранилища для WordPress](../how-to/s3-setup-wordpress.md).

---

## Материалы и источники

- [Перенос файлов WordPress в S3‑совместимые хранилища с помощью плагина S3 Uploads (Human Made)](https://wpcraft.ru/blog/s3-uploads-human-made)
- [S3 Uploads на GitHub](https://github.com/humanmade/S3-Uploads)
- [Amazon S3 Quick Start Guide — DeliciousBrains](https://deliciousbrains.com/wp-offload-media/doc/amazon-s3-quick-start-guide/)
- [WP Offload Media Lite на WordPress.org](https://wordpress.org/plugins/amazon-s3-and-cloudfront/)
- [How to Offload WordPress Media to AWS S3 — Alex Rusin Blog](https://blog.alexrusin.com/how-to-offload-wordpress-media-to-aws-s3/)
- [How to Upload WordPress Media Library to AWS S3 — Next3 Offload](https://next3offload.com/blog/upload-wordpress-media-library-to-aws-s3/)
- [Effortless Ways to Store Images on S3 — Infinite Uploads](https://infiniteuploads.com/blog/effortless-ways-to-wordpress-store-images-on-s3-for-better-performance/)
- [AWS Best Practices: Static Content Offload](https://docs.aws.amazon.com/whitepapers/latest/best-practices-wordpress/static-content-offload.html)
- [AWS S3 Bucket Creation — AWS Whitepaper](https://docs.aws.amazon.com/whitepapers/latest/best-practices-wordpress/amazon-s3-bucket-creation.html)
