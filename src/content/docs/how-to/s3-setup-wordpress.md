---
title: "Настройка S3-хранилища для WordPress: пошаговое руководство"
description: "Практическое руководство по настройке S3-совместимого хранилища для WordPress: выбор провайдера, создание бакета, IAM, плагин, миграция и проверка."
---

## Обзор

Это пошаговое руководство по выносу медиафайлов WordPress в S3-совместимое объектное хранилище. Оно покрывает весь цикл: от выбора провайдера до финальной проверки.

**Цель:** получить WordPress-сайт, где все медиафайлы (изображения, документы, видео) хранятся в S3, а сервер занимается только динамическим контентом.

## Шаг 1: Выбор провайдера и плагина

Первым делом определитесь со связкой. Подробности на страницах:

- [S3-провайдеры для WordPress](../components/services/s3-providers.md) — сравнение
- [Сравнение плагинов для S3](../faq/s3-plugins-comparison.md) — что выбрать

**Типовые связки:**

| Сценарий | Провайдер | Плагин |
|----------|-----------|--------|
| РФ, малый проект | Yandex Object Storage | S3 Uploads |
| РФ, enterprise | Selectel | S3 Uploads + Selectel CDN |
| Глобальный, много трафика | Cloudflare R2 | S3 Uploads |
| Сайт на AWS | Amazon S3 | WP Offload Media |
| Нужен UI в админке | Любой | WP Offload Media Lite |

## Шаг 2: Создание бакета и IAM-пользователя

### Для Yandex Object Storage

```bash
# 1. Установить Yandex Cloud CLI
# https://yandex.cloud/ru/docs/cli/quickstart

# 2. Создать бакет
yc storage bucket create \
  --name my-site-uploads \
  --default-storage-class STANDARD

# 3. Создать сервисный аккаунт
yc iam service-account create --name wp-s3-uploads

# 4. Назначить роль storage.editor
yc resource-manager folder add-access-binding default \
  --role storage.editor \
  --subject serviceAccount:<sa_id>

# 5. Создать статический ключ доступа
yc iam access-key create --service-account-name wp-s3-uploads
# Сохранить key_id и secret!
```

### Для Amazon S3

1. AWS Console → S3 → **Create bucket**
2. Имя бакета: `my-site-uploads` (уникальное глобально)
3. Регион: ближайший к аудитории
4. **Block Public Access**: снять галку «Block all public access» (для публичных медиа)
5. IAM → Users → **Create user** → `wp-s3-uploads`
6. Attach policy: `AmazonS3FullAccess`
7. Security credentials → **Create access key** → Application outside AWS
8. Скачать `.csv` с Access Key ID и Secret

### Для Cloudflare R2

1. Cloudflare Dashboard → R2 → **Create bucket**
2. Имя: `my-site-uploads`
3. **Manage R2 API Tokens** → Create API Token
4. Сохранить Access Key ID и Secret Access Key
5. Эндпоинт: `https://<account_id>.r2.cloudflarestorage.com`

## Шаг 3: Установка и настройка плагина

### Вариант A: S3 Uploads (Human Made)

```bash
# Установка
composer require humanmade/s3-uploads
wp plugin activate s3-uploads
```

Добавить в `wp-config.php`:

```php
// S3 Uploads конфиг
define('S3_UPLOADS_BUCKET', 'my-site-uploads');
define('S3_UPLOADS_REGION', 'ru-central1');     // Yandex
define('S3_UPLOADS_KEY', 'YCAJ...');             // Access Key
define('S3_UPLOADS_SECRET', 'YCM...');           // Secret Key
```

Для не-AWS провайдера — mu-plugin с endpoint:

```php
// wp-content/mu-plugins/s3-endpoint.php
<?php
add_filter('s3_uploads_s3_client_params', function($params) {
    $params['endpoint'] = 'https://storage.yandexcloud.net';
    $params['use_path_style_endpoint'] = true;
    return $params;
});
```

Подробнее — [S3 Uploads (Human Made)](../plugins/s3-uploads.md).

### Вариант B: WP Offload Media Lite

```bash
wp plugin install amazon-s3-and-cloudfront --activate
```

В админке: **WP Offload Media → Settings** → выбрать провайдера → ввести ключи → выбрать бакет.

Или через `wp-config.php`:

```php
define('AS3CF_SETTINGS', serialize(array(
    'provider' => 'aws',
    'access-key-id' => 'AKIA...',
    'secret-access-key' => '...',
)));
```

Подробнее — [WP Offload Media](../plugins/wp-offload-media.md).

## Шаг 4: Миграция существующих файлов

### S3 Uploads

```bash
# Загрузить uploads в бакет (директория uploads внутри бакета)
wp s3-uploads upload-directory wp-content/uploads uploads --verbose

# Проверить
wp s3-uploads verify
```

### WP Offload Media (Pro)

В админке: **WP Offload Media → Media Library → Offload Now**.

### Ручная миграция (AWS CLI)

```bash
aws s3 sync wp-content/uploads s3://my-site-uploads/uploads --acl public-read
```

## Шаг 5: Настройка CDN

Без CDN S3 отдаёт файлы из одного региона — медленно для удалённых посетителей.

### CloudFront (AWS)

1. AWS Console → CloudFront → Create Distribution
2. Origin domain: ваш S3-бакет
3. Viewer Protocol Policy: Redirect HTTP to HTTPS
4. CNAMEs: `cdn.your-site.ru` (опционально)
5. SSL-сертификат через AWS Certificate Manager

### Cloudflare (для R2)

1. R2-бакет → Settings → **Public access** → Allow Access
2. Custom domain: `cdn.your-site.ru`
3. DNS CNAME → R2 public URL

### Yandex Cloud CDN / Selectel CDN

Создать CDN-ресурс в консоли провайдера, указав бакет как origin.

## Шаг 6: Проверка

### 1. Загрузите тестовый файл

В админке WordPress: **Media → Add New** → загрузить изображение. Проверить URL:

```bash
# В консоли браузера (F12 → Elements)
# URL должен указывать на S3/CDN, не на сервер
```

### 2. Проверьте отдачу

```bash
curl -I https://my-site-uploads.s3.yandexcloud.net/uploads/2026/05/test.jpg
# HTTP/1.1 200 OK
```

### 3. Проверьте CDN-кеш

```bash
curl -I https://cdn.your-site.ru/uploads/2026/05/test.jpg
# X-Cache: Hit from cloudfront (или аналогичный заголовок)
```

### 4. Проверьте старые файлы

Откройте несколько старых постов — изображения должны грузиться с нового URL.

## Типовые проблемы

| Проблема | Причина | Решение |
|----------|---------|---------|
| 403 при загрузке | Недостаточно прав IAM | Проверить политику: нужны s3:PutObject, s3:GetObject |
| Изображения не видны | Бакет приватный | Включить public access (ACL) |
| CORS в админке | Нет CORS-заголовков на бакете | Добавить CORS-политику в настройках бакета |
| Медленная загрузка | Нет CDN | Настроить CDN (CloudFront / Cloudflare) |
| Большой счёт за egress | Трафик напрямую из S3 | Включить CDN или перейти на R2 |
| Плагин не видит endpoint | Не задан `use_path_style_endpoint` | Добавить в конфиг: `'use_path_style_endpoint' => true` |

## Чеклист

- [ ] Бакет создан, регион — ближайший к аудитории
- [ ] IAM-пользователь создан, права минимально необходимые
- [ ] Ключи доступа НЕ в коде (используйте wp-config.php или секреты CI/CD)
- [ ] Плагин установлен и активирован
- [ ] Endpoint задан для не-AWS провайдеров
- [ ] Тестовый файл загружен, URL указывает на S3
- [ ] Существующие файлы мигрированы
- [ ] CDN настроен и проверен
- [ ] CORS настроен (для работы админки)
- [ ] Локальные файлы удалены (опционально)
- [ ] Настроен мониторинг затрат

## Материалы и источники

- [Перенос файлов WordPress в S3‑совместимые хранилища (wpcraft.ru)](https://wpcraft.ru/blog/s3-uploads-human-made)
- [Amazon S3 Quick Start Guide (DeliciousBrains)](https://deliciousbrains.com/wp-offload-media/doc/amazon-s3-quick-start-guide/)
- [How to Offload WordPress Media to AWS S3 (Alex Rusin)](https://blog.alexrusin.com/how-to-offload-wordpress-media-to-aws-s3/)
- [AWS S3 Bucket Creation (AWS Docs)](https://docs.aws.amazon.com/whitepapers/latest/best-practices-wordpress/amazon-s3-bucket-creation.html)
- [Yandex Object Storage Docs](https://yandex.cloud/ru/docs/storage/)
