---
title: "WordPress MCP Adapter: практический запуск для self-hosted"
description: "Как подключить MCP Adapter к WordPress: установка, публикация Abilities, конфиги для AI-клиентов, кастомные MCP-серверы и безопасность."
---

## Что такое MCP Adapter в экосистеме WordPress

WordPress MCP Adapter связывает Abilities API с Model Context Protocol (MCP). Если способность зарегистрирована через Abilities API, её можно открыть как MCP tool для AI-клиентов.

Практически это означает:

- разработчик описывает возможность один раз через `wp_register_ability()`
- MCP Adapter делает её обнаруживаемой и вызываемой из AI-клиента
- тот же сайт можно подключать в Claude Desktop, Cursor, VS Code и другие MCP-совместимые инструменты

Для архитектурного контекста см. [AI-архитектура WordPress](./wp-ai-architecture.md).

## Базовая модель: Abilities -> MCP tools

В связке используются два уровня:

- **Abilities API**: типизированные входы/выходы, `permission_callback`, `execute_callback`
- **MCP Adapter**: адаптер, который публикует Abilities как MCP primitives (в первую очередь tools)

Минимальные шаги:

1. Зарегистрировать Ability
2. Установить и активировать MCP Adapter
3. Разрешить доступ к Ability через MCP (для default server)
4. Подключить AI-клиент по STDIO или HTTP

## Установка и запуск default MCP server

Самый быстрый путь для self-hosted WordPress:

1. Установить плагин MCP Adapter из релизов `wordpress/mcp-adapter`
2. Активировать плагин
3. Проверить, что поднят default server `mcp-adapter-default-server`

После активации доступны служебные способности адаптера:

- `mcp-adapter/discover-abilities`
- `mcp-adapter/get-ability-info`
- `mcp-adapter/execute-ability`

Они же публикуются как инструменты (`mcp-adapter-discover-abilities` и др.) и позволяют агенту сначала обнаружить список возможностей, затем выбрать и выполнить нужную.

## Как открыть Ability через default server

Для default server Ability должна быть явно отмечена как публичная для MCP через `meta.mcp.public`:

```php
'meta' => [
    'mcp' => [
        'public' => true,
    ],
]
```

Для встроенных core abilities это можно включить фильтром:

```php
add_filter( 'wp_register_ability_args', 'myplugin_enable_core_abilities_mcp_access', 10, 2 );

function myplugin_enable_core_abilities_mcp_access( array $args, string $ability_name ): array {
    $core_abilities = [
        'core/get-site-info',
        'core/get-user-info',
        'core/get-environment-info',
    ];

    if ( in_array( $ability_name, $core_abilities, true ) ) {
        $args['meta']['mcp']['public'] = true;
    }

    return $args;
}
```

## Подключение AI-клиентов

### STDIO (обычно для локальной разработки)

Используется WP-CLI:

```json
{
  "servers": {
    "wordpress-mcp-server": {
      "command": "wp",
      "args": [
        "--path=/path/to/wordpress",
        "mcp-adapter",
        "serve",
        "--server=mcp-adapter-default-server",
        "--user=admin"
      ]
    }
  }
}
```

### HTTP (обычно для удалённого или публичного сайта)

Используется прокси `@automattic/mcp-wordpress-remote` и аутентификация (application passwords или OAuth-слой):

```json
{
  "servers": {
    "wordpress-mcp-server": {
      "command": "npx",
      "args": ["-y", "@automattic/mcp-wordpress-remote@latest"],
      "env": {
        "WP_API_URL": "https://example.com/wp-json/mcp/mcp-adapter-default-server",
        "WP_API_USERNAME": "admin",
        "WP_API_PASSWORD": "app-password"
      }
    }
  }
}
```

## Кастомный MCP server в плагине

Если нужен отдельный контур инструментов только для вашего плагина, создайте собственный сервер.

1. Подключите пакет в плагине:

```bash
composer require wordpress/mcp-adapter
```

2. Подключите автозагрузчик Composer в основном файле плагина
3. Инициализируйте адаптер и зарегистрируйте сервер в `mcp_adapter_init`

```php
if ( ! class_exists( WP\MCP\Core\McpAdapter::class ) ) {
    return;
}

WP\MCP\Core\McpAdapter::instance();

add_action( 'mcp_adapter_init', 'myplugin_create_custom_mcp_server' );

function myplugin_create_custom_mcp_server( $adapter ): void {
    $adapter = WP\MCP\Core\McpAdapter::instance();

    $adapter->create_server(
        'custom-mcp-server',
        'custom-mcp-server',
        'mcp',
        'Custom MCP Server',
        'MCP server for selected plugin abilities',
        'v1.0.0',
        [ \WP\MCP\Transport\HttpTransport::class ],
        \WP\MCP\Infrastructure\ErrorHandling\ErrorLogMcpErrorHandler::class,
        \WP\MCP\Infrastructure\Observability\NullMcpObservabilityHandler::class,
        [ 'namespace/ability-name' ]
    );
}
```

В кастомном сервере можно явно перечислить Ability, поэтому флаг `meta.mcp.public` для них не обязателен.

## Безопасность для production

Минимальный baseline:

- в каждой Ability задавать строгий `permission_callback`
- не использовать `__return_true` для мутаций и удаления
- создать отдельного пользователя для MCP-доступа с минимальными правами
- для публичного HTTP endpoint начинать с read-only инструментов
- включить логирование и наблюдаемость (error/observability handlers)

Связанный материал: [Базовая безопасность WordPress для нового сайта](../security/wordpress-security-basics.md).

## Минимальный сценарий "Hello AI"

1. Зарегистрируйте одну read-only Ability
2. Отметьте её как публичную для MCP (или добавьте в кастомный сервер)
3. Подключите клиент по STDIO в локальной среде
4. Выполните тестовый вызов через `discover -> execute`
5. Только после этого расширяйте набор инструментов

## Связанные страницы

- [AI и WordPress: обзор](./index.md)
- [AI-архитектура WordPress](./wp-ai-architecture.md)
- [Интеграция AI в WordPress](./ai-integration.md)

## Материалы и источники

- [From Abilities to AI Agents: Introducing the WordPress MCP Adapter](https://developer.wordpress.org/news/2026/02/from-abilities-to-ai-agents-introducing-the-wordpress-mcp-adapter/)
- [MCP Adapter repository](https://github.com/WordPress/mcp-adapter)
- [Abilities API reference](https://developer.wordpress.org/apis/abilities/)