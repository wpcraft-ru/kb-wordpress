---
title: "Как сбросить пароль WordPress: 4 способа"
description: "Способы сброса пароля WordPress: стандартный через email, через базу данных, WP-CLI и emergency-скрипт. Что покрыто вики, а что нет."
---

## О чём этот запрос

«Сбросить пароль WordPress» — 4 сценария. Вики **не покрывает ни один из них напрямую**. Ниже — что есть и каких страниц не хватает.

## Сценарий 1: Через «Забыли пароль?» (стандартный)

**Покрытие: ❌ Нет в вики**

Страница `wp-login.php` содержит ссылку «Забыли пароль?». После ввода email/username приходит письмо со ссылкой для сброса.

Упомянуто косвенно в **[Оптимизация WordPress](../performance/optimization.md)** — `wp-login.php` как цель brute-force атак.

> Надёжность этого метода зависит от настроек почты на сервере — если письма не отправляются, используйте SMTP-плагин (Post SMTP, WP Mail SMTP).

## Сценарий 2: Через базу данных (нет доступа к почте)

**Покрытие: ❌ Нет в вики**

Косвенно: **[Как изменить адрес сайта](../how-to/change-site-url.md)** упоминает phpMyAdmin и прямой SQL — технически тот же подход для таблицы `wp_users`.

Общая схема (не из вики):
1. phpMyAdmin → таблица `wp_users` → найти пользователя по `user_login` или `user_email`
2. В поле `user_pass` выбрать функцию MD5 → ввести новый пароль
3. Сохранить — WordPress сам хеширует пароль при следующем входе

## Сценарий 3: Через WP-CLI

**Покрытие: ❌ Нет в вики**

WP-CLI многократно упоминается в вики:
- [change-site-url](../how-to/change-site-url.md) — `wp search-replace`
- [choose-and-setup-theme](../themes/choose-and-setup-theme.md) — `wp theme install`
- [templates](../themes/templates.md) — `wp template list`
- [optimization](../performance/optimization.md) — `wp plugin list`, `wp option update`

Но команда `wp user update` для сброса пароля — нигде.

Общая схема (не из вики):
```bash
# Сброс пароля конкретному пользователю
wp user update USER_LOGIN_OR_ID --user_pass="новый-пароль"

# Или сгенерировать и сбросить
wp user reset-password USER_LOGIN_OR_ID
```

## Сценарий 4: Emergency Password Reset Script

**Покрытие: ❌ Нет в вики**

WordPress включает аварийный скрипт `emergency.php` для сброса пароля без доступа к БД. Не упомянут нигде в вики.

## Что есть в вики (контекст безопасности)

**[Базовая безопасность](../security/wordpress-security-basics.md)** задаёт baseline:
- Сильные пароли + 2FA ✅
- Тестовое восстановление из backup ✅
- Блокировка редактора файлов (`DISALLOW_FILE_EDIT`) ✅

Есть JS-сниппет для проверки надёжности пароля на фронтенде, но инструкция «что делать, если пароль утерян» — нигде.

## Что в вики НЕ про сброс пароля (похожие запросы)

- **[Защита страниц паролем](../plugins/membership-plugins.md)** — редактор → Статус и видимость → Защищено паролем (это про контент, не про вход)
- **[Приватность сайта](../console/privacy-settings.md)** — закрытие сайта через `.htpasswd` (это про доступ к сайту целиком)

## Сводка

| Сценарий | Покрытие | Примечание |
|---|---|---|
| Стандартный сброс (email) | ❌ Нет | Упомянут `wp-login.php` в контексте атак |
| Через БД (phpMyAdmin) | ❌ Нет | phpMyAdmin упомянут, но не для паролей |
| Через WP-CLI | ❌ Нет | WP-CLI в 4+ страницах, но не `wp user update` |
| Emergency script / FTP | ❌ Нет | — |

## Предложения по ingest

Тема сброса пароля — базовый пробел. Рекомендуемые источники:

- [WordPress.org: Resetting Your Password](https://wordpress.org/documentation/article/reset-your-password/)
- [WP-CLI: wp user reset-password](https://developer.wordpress.org/cli/commands/user/reset-password/)

## Материалы и источники

- [Базовая безопасность WordPress для нового сайта](../security/wordpress-security-basics.md)
- [Как изменить адрес сайта WordPress](../how-to/change-site-url.md) — phpMyAdmin, SQL
- [Оптимизация WordPress](../performance/optimization.md) — `wp-login.php`
