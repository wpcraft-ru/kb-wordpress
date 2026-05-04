---
title: "Как сбросить пароль WordPress?"
description: "Четыре способа сброса пароля WordPress: стандартный через email, через базу данных, WP-CLI и emergency-скрипт."
---

## Краткий ответ

Если забыли пароль администратора WordPress — четыре способа восстановить доступ. Самый простой — ссылка «Забыли пароль?» на странице входа. Если почта не работает — через базу данных, WP-CLI или emergency-скрипт.

## Способ 1: Через «Забыли пароль?» (стандартный)

1. Перейдите на `ваш-сайт.ru/wp-login.php`
2. Нажмите **«Забыли пароль?»**
3. Введите email или логин
4. Перейдите по ссылке из письма и задайте новый пароль

Если письма не приходят — установите SMTP-плагин (Post SMTP, WP Mail SMTP). В вики: [Базовая безопасность](../security/wordpress-security-basics.md) (сильные пароли + 2FA).

## Способ 2: Через базу данных (phpMyAdmin)

1. phpMyAdmin → таблица `wp_users`
2. Найдите пользователя по `user_login` или `user_email`
3. В поле `user_pass` выберите **MD5**, введите новый пароль
4. Сохраните — WordPress перехеширует пароль при первом входе

phpMyAdmin упомянут в [Смена URL сайта](../how-to/change-site-url.md).

## Способ 3: WP-CLI

```bash
wp user reset-password ИМЯ_ПОЛЬЗОВАТЕЛЯ
```
Или задать конкретный пароль:
```bash
wp user update ИМЯ_ПОЛЬЗОВАТЕЛЯ --user_pass="новый-пароль"
```

WP-CLI используется в вики: [смена URL](../how-to/change-site-url.md), [темы](../themes/choose-and-setup-theme.md), [оптимизация](../performance/optimization.md).

## Способ 4: Emergency Password Reset Script

1. Скачайте [Emergency Password Reset Script](https://codex.wordpress.org/User:MichaelH/Orphaned_Plugins_needing_Adoption/Emergency) с wordpress.org
2. Загрузите `emergency.php` в корень сайта
3. Откройте `ваш-сайт.ru/emergency.php`
4. Следуйте инструкции — сбросьте пароль администратора
5. **Удалите файл после использования**

## Материалы и источники

- [Базовая безопасность WordPress](../security/wordpress-security-basics.md)
- [Как изменить адрес сайта WordPress](../how-to/change-site-url.md)
