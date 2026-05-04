---
title: "Как обновить WordPress?"
description: "Обновление ядра WordPress, плагинов, тем и PHP: способы, бэкап и меры предосторожности — пошагово."
---

## Краткий ответ

WordPress обновляется через админку (один клик), WP-CLI или вручную через FTP. **Главное правило: бэкап перед каждым обновлением.** Плагины и темы обновляются отдельно, PHP — через панель хостинга.

## Обновление ядра WordPress

### Через админку (рекомендуется)

1. **Консоль → Обновления**
2. Если есть новая версия — нажмите **«Обновить сейчас»**
3. Дождитесь завершения

### Через WP-CLI

```bash
# Проверить доступные обновления
wp core check-update

# Обновить ядро
wp core update

# Обновить базу данных
wp core update-db
```

## Обновление плагинов и тем

**Админка:** Консоль → Обновления → отметить всё → Обновить.

**WP-CLI:**
```bash
wp plugin update --all
wp theme update --all
```

## Обязательно перед обновлением

1. **Сделайте бэкап** — сайта и базы данных. [Базовая безопасность](../security/wordpress-security-basics.md)
2. **Проверьте на staging** — если обновляете крупные плагины или PHP
3. **Обновляйте по очереди** — сначала плагины, потом темы, потом ядро

## Обновление PHP

1. Проверьте совместимость плагинов: `wp phpcompat <version>` ([PHP-оптимизация](../performance/php-optimization.md))
2. Переключите версию в панели хостинга
3. Рекомендуется PHP 8.2+

## Защита от потери правок

- **Child theme** — правки parent темы стираются при обновлении. [Темы и Customizer](../themes/themes-child-themes-customizer.md)
- **Site Editor** — правки шаблонов в БД переживают обновление темы. [Шаблоны](../themes/templates.md)

## Материалы и источники

- [Базовая безопасность WordPress](../security/wordpress-security-basics.md)
- [Плагины WordPress: основы](../plugins/plugins-basics.md)
- [PHP-оптимизация для WordPress](../performance/php-optimization.md)
- [Панель управления WordPress](../console/wordpress-dashboard-wp-admin-basics.md)
