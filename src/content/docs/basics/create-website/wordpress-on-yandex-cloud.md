---
title: "Создание сайта на WordPress: Yandex Cloud"
description: "Пошаговые инструкции по созданию сайта на Yandex Cloud: через консоль, Terraform, Cloud Apps, с кластером MySQL и перенос с другого хостинга."
sidebar:
  label: "Yandex Cloud"
  order: 5
---

## Yandex Cloud для WordPress

Yandex Cloud — облачная платформа для инженеров и DevOps. В отличие от Beget и Timeweb с готовыми автоустановщиками, здесь вы управляете инфраструктурой самостоятельно: виртуальные машины, группы безопасности, VPC, DNS-зоны.

**Доступные сценарии:** консоль управления, Terraform (инфраструктура как код), Cloud Apps (managed-решение).

> Yandex Cloud требует **платёжный аккаунт**. Бесплатного тестового периода как у Timeweb нет — все ресурсы тарифицируются.

## Способ 1: Консоль управления (рекомендуется для старта)

Самый простой способ — пошаговое создание через веб-интерфейс.

**Пошагово:**
1. Зарегистрируйтесь в [Yandex Cloud](https://console.yandex.cloud/) и подключите платёжный аккаунт
2. Создайте **облачную сеть VPC** с подсетью в нужной зоне доступности
3. Создайте **группу безопасности** (порты: 80, 443, 22)
4. Создайте **виртуальную машину** — выберите образ «WordPress» из Marketplace
5. Настройте **DNS-зону** и добавьте A-запись на публичный IP ВМ
6. Получите данные для входа в админку из серийной консоли ВМ
7. Откройте `https://ваш-домен.ru/wp-admin` — готово

Официальная инструкция: [Создание сайта на WordPress с помощью консоли управления](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console).

## Способ 2: Terraform (IaC)

Для воспроизводимой инфраструктуры — описание всех ресурсов в коде.

**Что даёт Terraform:**
- ВМ, сеть, DNS, группа безопасности — всё в `.tf`-файлах
- Одинаковое окружение на dev/stage/prod
- Удаление всех ресурсов одной командой: `terraform destroy`

Официальная инструкция: [Создание сайта на WordPress с помощью Terraform](https://yandex.cloud/ru/docs/tutorials/web/wordpress/terraform).

## Способ 3: Cloud Apps (High Availability)

Готовое managed-решение с авто-настройкой всех компонентов.

**Что входит:**
- Виртуальная машина с WordPress
- Managed Service for MySQL® (кластер БД)
- Yandex Cloud Postbox (отправка почты)
- Yandex Lockbox (хранение секретов)
- Автоматическая настройка веб-сервера

Это аналог Marketplace у Beget и Timeweb, но с полным HA-стеком.

Официальная инструкция: [Установка WordPress с помощью Cloud Apps](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp).

## Сценарий с кластером MySQL®

Для высоконагруженных проектов — WordPress с отдельным кластером баз данных.

**Доступно через:**
- [Консоль управления](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console) — пошаговое создание
- [Terraform](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform) — инфраструктура как код

**Шаги:** ВМ → кластер MySQL → Nginx → WordPress → DNS → проверка.

## Перенос существующего сайта

Источник: [Перенос WordPress сайта с хостинга в Yandex Cloud](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer)

**Пошагово:**
1. Сделайте бэкап сайта (файлы + БД)
2. Создайте ВМ для WordPress
3. Установите и настройте phpMyAdmin для импорта БД
4. Импортируйте БД через phpMyAdmin
5. Перенесите файлы сайта на ВМ
6. Настройте DNS (зона + A-запись + делегирование)
7. Установите SSL-сертификат через Let's Encrypt
8. Проверьте работу сайта

> После импорта БД отключите phpMyAdmin — он не должен работать на production.

## Какой способ выбрать

| Способ | Для кого | Сложность |
|---|---|---|
| Консоль | Быстрый старт, первый сайт | Средняя |
| Terraform | DevOps, воспроизводимая инфраструктура | Высокая |
| Cloud Apps | Нужен HA «из коробки» | Низкая |
| Кластер MySQL | Высоконагруженные проекты | Высокая |
| Перенос | Миграция с другого хостинга | Средняя |

## Материалы и источники

- [Yandex Cloud: Создание сайта на WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress/)
- [Yandex Cloud: Установка WordPress через Cloud Apps](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp)
- [Yandex Cloud: Перенос WordPress с хостинга](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer)
- [Yandex Cloud: WordPress с кластером MySQL](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/)
