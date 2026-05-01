---
title: "Базовая безопасность WordPress для нового сайта"
description: "Минимальный security baseline: обновления, пароли, роли, backup и мониторинг для WordPress-проекта на старте."
---

## Security baseline

1. Включить регулярные обновления core/plugins/themes.
2. Настроить сильные пароли + 2FA для администраторов.
3. Ограничить число администраторов и пересмотреть роли.
4. Включить автоматические backup и проверить restore-процедуру.
5. Настроить журналирование и мониторинг аномальных входов.

## Частые ошибки

- Использование `admin` как имени администратора.
- Устаревшие плагины без поддержки.
- Отсутствие тестового восстановления из backup.

## PHP пример: отключение редактирования файлов из админки

```php
// Добавить в wp-config.php
define('DISALLOW_FILE_EDIT', true);
```

Что делает код:
- Блокирует встроенный редактор тем/плагинов.
- Снижает риск оперативного компромета при краже сессии администратора.

## JS пример: проверка надежности пароля на фронтенде

```js
function isStrongPassword(password) {
  return (
    password.length >= 12 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}

console.log(isStrongPassword('Wp!SecurePass2026'));
```

Что делает код:
- Дает минимальную проверку сложности до отправки формы.
- Не заменяет серверную валидацию, а дополняет UX.

## Безопасность WooCommerce

Для интернет-магазина на WooCommerce к базовому baseline добавляются:
- HTTPS обязателен (SSL-сертификат) — для безопасного приёма платежей
- Регулярное обновление WooCommerce и платёжных шлюзов
- Мониторинг подозрительных заказов
- Настройка fraud-защиты платёжного шлюза

Подробнее: [WooCommerce: приём платежей](../woocommerce/payments.md).

## Связанные страницы

- [Плагины WordPress: основы выбора и установки](../plugins/plugins-basics.md)
- [Темы, child theme и Customizer: основы](../themes/themes-child-themes-customizer.md)
- [Хостинг для WordPress: как выбрать](../how-to/wordpress-hosting.md)
- [Работа с разработчиком WordPress](../how-to/working-with-developer.md)
