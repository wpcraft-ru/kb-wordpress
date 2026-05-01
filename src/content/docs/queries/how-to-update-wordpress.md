---
title: "Обновление WordPress: что покрыто вики и пробелы"
description: "Обновление ядра, плагинов, тем и PHP в WordPress: что есть в вики (security baseline, бэкап, child theme) и чего не хватает (WP-CLI, откат, автообновления)."
---

## О чём этот запрос

«Обновление WordPress» может означать обновление ядра, плагинов, тем или PHP. В вики тема разбросана по 6 страницам как часть других инструкций, но **ни одна страница не посвящена обновлению как отдельной теме**.

## Что есть в вики

### Security baseline — обновлять обязательно

Источник: **[Базовая безопасность WordPress](../security/wordpress-security-basics.md)** — пункт №1:

> Включить регулярные обновления core/plugins/themes.

Частые ошибки: «Устаревшие плагины без поддержки.»

### Бэкап перед обновлением

**[Панель управления WordPress](../console/wordpress-dashboard-wp-admin-basics.md)** — правило №2:

> Обновления плагинов/тем выполнять после backup.

**[Плагины: основы](../plugins/plugins-basics.md)**:

> Делать резервную копию перед обновлением значимых плагинов.

Жизненный цикл: `Установка → Активация → Настройка → **Обновления** → Деактивация → Удаление`

### Обновление тем — child theme

**[Темы, child theme и Customizer](../themes/themes-child-themes-customizer.md)**:

> Не редактировать файлы parent theme напрямую — изменения сотрутся при обновлении.

Правки child theme — сохраняются. Правки шаблонов в Site Editor — тоже ([Шаблоны](../themes/templates.md): «сохраняются в БД и переживают обновление темы»).

### Обновление PHP

**[PHP-оптимизация](../performance/php-optimization.md)**:

> ⚠️ При обновлении PHP тестируйте совместимость плагинов и темы на staging-окружении.

Рекомендации: PHP 8.2+. Проверка: `wp phpcompat <version>`.

### WordPress.com vs self-hosted

**[.com vs .org FAQ](../faq/wordpress-com-vs-org.md)**:

| | .com | self-hosted |
|---|---|---|
| Безопасность | Автообновления из коробки | Ваша ответственность |

## Что НЕ покрыто вики ❌

| Тема | Статус |
|---|---|
| Как обновить ядро WordPress (админка / WP-CLI) | ❌ |
| Автоматические обновления (major/minor) | ❌ |
| Ручное обновление через FTP | ❌ |
| WP-CLI: `wp core update` | ❌ |
| `wp-config.php`: `WP_AUTO_UPDATE_CORE` | ❌ |
| Откат обновления (rollback) | ❌ |
| Staging-тестирование перед обновлением | ❌ |
| Что делать, если обновление сломалось | ❌ |
| Уведомления об обновлениях по email | ❌ |
| Обновление БД (`wp-admin/upgrade.php`) | ❌ |

## Сводка

| Компонент | Покрытие | Комментарий |
|---|---|---|
| Обновлять core/plugins/themes — надо | ✅ | Как один пункт security baseline |
| Бэкап перед обновлением | ✅ | Упомянуто в админке и плагинах |
| Child theme переживает обновления | ✅ | Темы, шаблоны, Site Editor |
| Обновление PHP | ✅ | В performance/php-optimization |
| Как именно обновлять | ❌ | Ни админка, ни WP-CLI не описаны |
| Автообновления, откат, staging | ❌ | Полностью отсутствуют |

## Материалы и источники

- [Базовая безопасность WordPress](../security/wordpress-security-basics.md)
- [Панель управления WordPress](../console/wordpress-dashboard-wp-admin-basics.md)
- [Плагины WordPress: основы](../plugins/plugins-basics.md)
- [Темы, child theme и Customizer](../themes/themes-child-themes-customizer.md)
- [PHP-оптимизация для WordPress](../performance/php-optimization.md)
- [WordPress.com vs WordPress.org](../faq/wordpress-com-vs-org.md)
