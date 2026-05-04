---
title: "Создание сайта на WordPress: Beget"
description: "Пошаговая инструкция по созданию сайта на хостинге Beget: установка WordPress на VPS через Marketplace, подключение CDN через W3 Total Cache."
sidebar:
  label: "Beget"
  order: 2
---

## Beget для WordPress

Beget — российский хостинг-провайдер с shared-тарифами и облачными VPS. WordPress можно установить двумя способами: автоматически через **Marketplace** (готовая сборка) или вручную.

## Способ 1: WordPress через Marketplace (VPS)

Beget Cloud предлагает готовую сборку WordPress со всем окружением — установка в несколько кликов.

### Что входит в сборку

- Ubuntu 24.04
- MySQL
- Nginx + Apache + mod_php
- WordPress (актуальная версия)
- Бесплатный SSL-сертификат (выпускается автоматически)

### Пошаговая установка

1. **Панель управления Beget → Облако → Создать сервер**
2. На вкладке **Маркетплейс** выберите «WordPress»
3. Заполните параметры:
   - **Домен** — на котором будет сайт (SSL выпустится автоматически)
   - **Название сайта**
   - **Логин администратора** (для входа в `wp-admin`)
   - **Email администратора** (контактный + для SSL)
   - **Пароль администратора**
4. Опционально: отметить плагины **Elementor** (конструктор) и **YoastSEO** (SEO)
5. Нажать **Создать**

После создания сервера реквизиты придут на email. Вход в админку: `https://ваш-домен.ru/wp-admin`.

### FAQ по серверу (из инструкции Beget)

| Что | Где |
|---|---|
| Файлы сайта | `/var/www/wordpress` |
| Конфиг Nginx | `/etc/nginx/nginx.conf`, виртуальный хост: `/etc/nginx/sites-enabled/wordpress` |
| Конфиг Apache | `/etc/apache2/sites-enabled/wordpress.conf` |
| Конфиг PHP | `/etc/php/8.4/apache2/php.ini` |

### Как сменить домен

1. Измените A-запись нового домена на IP вашего VPS
2. В админке WordPress: **Настройки → Общие** → измените поля «Адрес WordPress (URL)» и «Адрес сайта (URL)»
3. Сохраните

Подробнее о смене домена — [Как изменить адрес сайта WordPress](../../how-to/change-site-url.md).

## Способ 2: Shared-хостинг

Для shared-тарифов Beget используйте автоустановщик Softaculous в панели управления:

1. **Панель управления → Каталог CMS → WordPress → Установить**
2. Укажите домен, логин и пароль администратора
3. Нажмите **Установить**

Общая схема — в [Как установить WordPress?](../../faq/how-to-install-wordpress.md).

## Подключение CDN к WordPress

Beget предлагает встроенный CDN-сервис (платный). Подключается через плагин **W3 Total Cache**.

### Создание CDN-ресурса

1. **Панель Beget → Облако → Создать сервис → CDN**
2. Выберите источник: домен сайта (или S3-бакет, если настроен)
3. Опционально: укажите собственный поддомен (например, `cdn.ваш-домен.ru`)
4. Нажмите **Создать CDN**
5. В настройках ресурса включите **CORS** с доменом сайта

### Настройка W3 Total Cache

1. Установите плагин «W3 Total Cache» из репозитория WordPress
2. **Performance → General Settings → CDN**
3. Выберите тип **Generic Mirror**, сохраните
4. **CDN → Advanced Settings → Configuration: Objects**
5. В поле «Replace site's hostname with» укажите домен CDN-сервиса
6. Нажмите **Test Mirror** — должно быть «Test passed»
7. Сохраните и включите CDN

Статический контент (CSS, JS, изображения) начнёт загружаться через CDN.

> Если у вас уже настроено кэширование на сайте и нужно только добавить CDN — в мастере настройки W3 Total Cache нажмите **Skip** и настройте только секцию CDN.

## Материалы и источники

- [Beget: Cloud Marketplace WordPress](https://beget.com/ru/cloud/marketplace/wordpress)
- [Beget: Подключение CDN для WordPress](https://beget.com/ru/kb/how-to/vps/podklyuchenie-cdn-wordpress)
