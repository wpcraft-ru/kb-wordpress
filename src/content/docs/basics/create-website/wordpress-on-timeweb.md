---
title: "Создание сайта на WordPress: Timeweb"
description: "Пошаговая инструкция по созданию сайта на хостинге Timeweb и Timeweb Cloud: ручная установка WordPress, автоустановка и облачный VPS."
---

## Timeweb для WordPress

Timeweb — российский хостинг-провайдер с shared-тарифами (от 129 ₽/мес, тестовый период 10 дней) и облачными VPS (Timeweb Cloud). WordPress можно установить тремя способами.

## Способ 1: Ручная установка на shared-хостинг

Классический метод — даёт понимание устройства WordPress.

### Регистрация и подготовка

1. Зарегистрируйтесь на [timeweb.com](https://timeweb.com/ru/services/hosting/) — тестовый период 10 дней
2. В личном кабинете: **Домены и поддомены → Добавить домен**
   - Можно добавить бесплатный поддомен (`.webtm.ru` или `.tw1.ru`)
   - Или купить домен (от 99 ₽/мес)
3. **Создать сайт** в разделе «Сайты» — задайте имя

### Создание базы данных

1. **Базы MySQL → Создание новой базы**
2. Задайте имя и пароль — сохраните, понадобятся для `wp-config.php`

### Загрузка WordPress

1. Скачайте WordPress с [ru.wordpress.org](https://ru.wordpress.org/)
2. **Файловый менеджер** → папка сайта → `public_html`
3. Очистите папку и загрузите архив WordPress
4. Разархивируйте, переместите все файлы из папки `wordpress/` в `public_html/`

Альтернатива файловому менеджеру — FTP-клиент **FileZilla**: логин/пароль FTP в разделе «Доступ» панели Timeweb.

### Подключение БД

1. Найдите файл `wp-config-sample.php`
2. Заполните строки:
```php
define('DB_NAME', 'имя_базы');
define('DB_USER', 'имя_пользователя');
define('DB_PASSWORD', 'пароль');
```
3. Переименуйте в `wp-config.php`
4. Откройте сайт в браузере — запустится `install.php`
5. Укажите название сайта, логин и пароль администратора

Готово — вы в `wp-admin`!

## Способ 2: Автоустановка (Каталог CMS)

Самый быстрый способ — WordPress в несколько кликов.

1. **Каталог CMS → WordPress → Установить приложение**
2. Выберите домен — БД создастся автоматически
3. Нажмите **Начать установку**
4. Перейдите к приложению, войдите с логином и паролем

## Способ 3: Timeweb Cloud (VPS)

Для проектов, требующих выделенных ресурсов — облачный VPS с ручной настройкой стека LEMP.

### Установка через Marketplace

1. **Облачные серверы → Создать → Маркетплейс**
2. Выберите образ **«WordPress + Ubuntu 22.04»**
3. Укажите параметры сервера
4. После установки реквизиты придут на email

### Ручная установка LEMP-стека

Для полного контроля — установите компоненты по очереди на Ubuntu 22.04.

**Обновление системы:**
```bash
sudo apt update -y && sudo apt upgrade -y
```

**PHP 8.3 (FPM):**
```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt install php8.3-fpm php-mysql -y
```

**MySQL:**
```bash
sudo apt install mysql-server -y
sudo mysql -e "CREATE DATABASE wordpress; CREATE USER 'wpuser'@'localhost' IDENTIFIED BY 'пароль'; GRANT ALL ON wordpress.* TO 'wpuser'@'localhost'; FLUSH PRIVILEGES;"
```

Дальнейшие шаги (Nginx, скачивание WordPress, настройка SSL через Let's Encrypt) — см. официальную инструкцию Timeweb Cloud.

> **Где применяется:** для растущих проектов, магазинов, сайтов с высоким трафиком. Требования к VPS — [Хостинг для WordPress: как выбрать](../../how-to/wordpress-hosting.md).

## Что дальше

После установки:
- Настройте Site Title, Timezone, Permalink (Post name) — [Панель управления WordPress](../../console/wordpress-dashboard-wp-admin-basics.md)
- Настройте SSL — [SSL и HTTPS для домена](../../domains/ssl-https.md)
- Установите тему — [Выбор и настройка темы](../../themes/choose-and-setup-theme.md)

## Материалы и источники

- [Timeweb: Установка WordPress на хостинг](https://timeweb.com/ru/community/articles/kak-ustanovit-wordpress-na-hosting)
- [Timeweb Cloud: WordPress с доменом и SSL](https://timeweb.cloud/tutorials/servers/wordpress-s-ispolzovaniem-domena-i-ssl-let-s-encrypt)
- [Timeweb Cloud: WordPress на Ubuntu](https://timeweb.cloud/docs/unix-guides/wordpress-on-ubuntu)
