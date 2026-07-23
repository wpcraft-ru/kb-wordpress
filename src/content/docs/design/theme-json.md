---
title: "theme.json — основа дизайн-системы WordPress и WooCommerce"
description: "theme.json как single source of truth для WordPress и WooCommerce: структура, design tokens, CSS-переменные, цветовая палитра, типографика, spacing, lock down и WooCommerce-специфика."
---

## Что такое theme.json

`theme.json` — центральный конфигурационный файл блочной темы WordPress. Единая точка, через которую задаются все визуальные настройки сайта: цвета, типографика, отступы, скругления, градиенты, тени и поведение блоков. Для сайтов на WordPress и WooCommerce `theme.json` — это фундамент дизайн-системы.

**Почему theme.json критичен для магазина на WooCommerce:**

- Единый источник стилей для страниц каталога, товаров, корзины и оформления заказа
- Гарантия консистентности между контентными страницами и страницами магазина
- Возможность заблокировать произвольные цвета/шрифты у контент-менеджеров, сохранив бренд

## Структура theme.json

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "appearanceTools": true,
    "layout": { },
    "color": { },
    "typography": { },
    "spacing": { },
    "border": { },
    "shadow": { },
    "custom": { },
    "blocks": { }
  },
  "styles": {
    "color": { },
    "typography": { },
    "spacing": { },
    "elements": {
      "heading": { },
      "button": { },
      "link": { }
    },
    "blocks": { }
  },
  "templateParts": [ ],
  "customTemplates": [ ]
}
```

| Секция | Назначение |
|--------|-----------|
| **`settings`** | Какие элементы управления доступны в редакторе (палитра, размеры шрифтов, spacing scale) |
| **`styles`** | Значения по умолчанию: цвета фона/текста, типографика, отступы |
| **`settings.custom`** | Кастомные design tokens — произвольные переменные, доступные как CSS custom properties |
| **`templateParts`** | Шаблонные части темы (header, footer, sidebar) |
| **`customTemplates`** | Пользовательские шаблоны, регистрируемые темой |

## Design Tokens через settings.custom

**`settings.custom`** — главный механизм хранения дизайн-токенов в WordPress. Все значения, определённые здесь, автоматически становятся CSS-переменными.

**Три слоя токенов (по W3C DTCG):**

| Слой | Описание | Пример |
|------|----------|--------|
| **Option tokens** (primitive) | Сырая палитра, базовые значения | `blue-500: #78bbfa` |
| **Decision tokens** (semantic) | Как и где применять | `color-accent: {color.option.blue-900}` |
| **Component tokens** | Контекст для конкретных компонентов | `button-primary-bg: {color.decision.accent}` |

### Пример custom-секции для интернет-магазина

```json
{
  "settings": {
    "custom": {
      "brand": {
        "primary": "#2563EB",
        "secondary": "#7C3AED",
        "accent": "#F59E0B"
      },
      "text": {
        "primary": "#111827",
        "secondary": "#6B7280",
        "inverse": "#FFFFFF"
      },
      "spacing": {
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px"
      },
      "border": {
        "radius": {
          "sm": "4px",
          "md": "8px",
          "lg": "16px"
        }
      },
      "typography": {
        "fontSize": {
          "sm": "0.875rem",
          "base": "1rem",
          "lg": "1.125rem",
          "xl": "1.25rem",
          "2xl": "1.5rem",
          "3xl": "2rem"
        }
      },
      "woocommerce": {
        "saleBadge": "#EF4444",
        "stockBadge": "#10B981",
        "ratingStar": "#F59E0B",
        "priceColor": "#111827",
        "salePriceColor": "#EF4444"
      }
    }
  }
}
```

### CSS-переменные из custom-секции

WordPress автоматически генерирует CSS-переменные:

| Путь в theme.json | CSS-переменная |
|---|---|
| `settings.custom.brand.primary` | `--wp--custom--brand--primary` |
| `settings.custom.spacing.lg` | `--wp--custom--spacing--lg` |
| `settings.custom.woocommerce.saleBadge` | `--wp--custom--woocommerce--sale-badge` |

**Схема:** `--wp--custom--<путь через двойное тире>` — camelCase ключи превращаются в kebab-case.

## Использование в styles

Токены из `custom` можно использовать в секции `styles` напрямую:

```json
{
  "styles": {
    "color": {
      "text": "var(--wp--custom--text--primary)",
      "background": "var(--wp--custom--brand--secondary)"
    },
    "elements": {
      "heading": {
        "color": {
          "text": "var(--wp--custom--text--primary)"
        }
      },
      "button": {
        "color": {
          "text": "var(--wp--custom--text--inverse)",
          "background": "var(--wp--custom--brand--primary)"
        },
        "border": {
          "radius": "var(--wp--custom--border--radius--md)"
        }
      }
    }
  }
}
```

## Цветовая палитра

Минимальный набор цветов для WordPress/WooCommerce:

```json
{
  "settings": {
    "custom": {
      "palette": {
        "primary": {
          "50": "#EFF6FF",
          "500": "#3B82F6",
          "900": "#1E3A5F"
        },
        "neutral": {
          "50": "#F9FAFB",
          "900": "#111827"
        },
        "feedback": {
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
          "info": "#3B82F6"
        }
      }
    }
  }
}
```

**Требования WCAG AA:**
- Основной текст на фоне: контраст ≥ 4.5:1
- Крупный текст (≥ 18px bold): контраст ≥ 3:1
- Интерактивные элементы: контраст ≥ 3:1

Градиенты задаются в `styles.color.gradient`:
```json
{
  "styles": {
    "color": {
      "gradient": "linear-gradient(135deg, var(--wp--custom--palette--primary--500), var(--wp--custom--palette--primary--900))"
    }
  }
}
```

## Типографика

```json
{
  "settings": {
    "custom": {
      "typography": {
        "heading": {
          "fontFamily": "'Inter', sans-serif",
          "fontWeight": "700",
          "lineHeight": "1.2"
        },
        "body": {
          "fontFamily": "'Inter', sans-serif",
          "fontWeight": "400",
          "lineHeight": "1.6"
        }
      },
      "fontSize": {
        "scale": {
          "sm": "0.875rem",
          "base": "1rem",
          "lg": "1.125rem",
          "xl": "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "2.25rem"
        }
      }
    }
  }
}
```

**Рекомендации:**
- Используйте `rem` (16px = 1rem) — масштабируемость
- Адаптивная типографика через `clamp()` или медиа-запросы
- RTL/LTR поддерживается WordPress автоматически

## Spacing scale

Два подхода:

**Мультипликативная:** `0, 0.13, 0.25, 0.5, 1, 2, 4, 8 rem`

**Аддитивная:** `0, 1, 3, 5, 7, 9, 11, 13 rem`

В WordPress — через `settings.spacing.spacingScale`:

```json
{
  "settings": {
    "spacing": {
      "spacingScale": {
        "steps": 7,
        "operator": "*",
        "increment": 1.5
      }
    }
  }
}
```

## Скругления (Border Radius)

Настройка скруглений в `theme.json` прошла два этапа:

### До WordPress 6.9: через `settings.custom` и прямые значения

До версии 6.9 скругления задавались либо как кастомные токены в `settings.custom`, либо как прямые значения в `styles`:

```json
{
  "settings": {
    "custom": {
      "border": {
        "radius": {
          "sm": "4px",
          "md": "8px",
          "lg": "16px"
        }
      }
    }
  },
  "styles": {
    "elements": {
      "button": {
        "border": {
          "radius": "var(--wp--custom--border--radius--md)"
        }
      }
    }
  }
}
```

**Минусы старого подхода:**
- Нет UI-интерфейса для выбора из пресетов в редакторе
- Контент-редактор не мог выбрать скругление через панель Styles
- Требовалось ручное прописывание CSS-переменных в каждом блоке

### WordPress 6.9+: пресеты через `settings.border.radiusSizes`

Начиная с WP 6.9, появились **border radius size presets** — массив размеров скруглений, из которых пользователь выбирает в интерфейсе редактора.

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "border": {
      "radius": true,
      "radiusSizes": [
        {
          "name": "XS",
          "slug": "xs",
          "size": "0.125rem"
        },
        {
          "name": "Small",
          "slug": "sm",
          "size": "0.25rem"
        },
        {
          "name": "Medium",
          "slug": "md",
          "size": "0.5rem"
        },
        {
          "name": "Large",
          "slug": "lg",
          "size": "1rem"
        },
        {
          "name": "XL",
          "slug": "xl",
          "size": "1.5rem"
        }
      ]
    }
  }
}
```

Каждый объект размера:

| Поле | Описание |
|------|----------|
| **`name`** | Человекочитаемое название («XS», «Small») |
| **`slug`** | Машинное имя → CSS-переменная `--wp--preset--border-radius--{slug}` |
| **`size`** | CSS-значение размера |

> **Совет:** используйте t-shirt sizing (XS, SM, MD, LG, XL, 2XL, 3XL) когда пресеты масштабируются от меньшего к большему.

**UI-поведение:** если задано **≤ 7 пресетов** — отображается range slider; если **> 7** — select dropdown.

### CSS-переменные из radiusSizes

WordPress автоматически генерирует CSS custom properties:

```css
:root {
  --wp--preset--border-radius--xs: 0.125rem;
  --wp--preset--border-radius--sm: 0.25rem;
  --wp--preset--border-radius--md: 0.5rem;
  --wp--preset--border-radius--lg: 1rem;
  --wp--preset--border-radius--xl: 1.5rem;
}
```

### Применение в стилях блоков

```json
{
  "styles": {
    "blocks": {
      "core/image": {
        "border": {
          "radius": {
            "topLeft": "0px",
            "topRight": "var(--wp--preset--border-radius--xl)",
            "bottomLeft": "var(--wp--preset--border-radius--xl)",
            "bottomRight": "0px"
          }
        }
      },
      "woocommerce/product-button": {
        "border": {
          "radius": "var(--wp--preset--border-radius--md)"
        }
      }
    }
  }
}
```

### Hand-drawn и нестандартные стили

Можно использовать двухзначный синтаксис для эллиптических скруглений:

```json
{
  "name": "Drawn 1",
  "slug": "drawn-1",
  "size": "15px 255px"
}
```

> **Важно:** `border-radius` shorthand (например `255px 15px 225px 15px/15px 225px 15px 255px`) **не работает** — пресеты применяются к отдельным углам. Для hand-drawn эффекта создавайте block style variations с заранее применёнными радиусами.

### Ограничения

- Значения с `(`, `)`, `var(...)`, `clamp(...)`, `calc(...)` — **не работают** в `radiusSizes`
- В отличие от других пресетов (цвета, шрифты), у `radiusSizes` **нет свойства `customSettingName`** для отключения произвольных значений
- Единственный способ скрыть border radius из UI: `settings.border.radius: false` (отключает и пресеты тоже)

Оба ограничения обсуждаются в [Gutenberg issue #49504](https://github.com/WordPress/gutenberg/issues/49504).

### Сравнение: до и после WP 6.9

| Аспект | До 6.9 | WP 6.9+ |
|--------|--------|---------|
| **Где задаются** | `settings.custom` или прямой CSS | `settings.border.radiusSizes` |
| **CSS-переменные** | `--wp--custom--border--radius--*` | `--wp--preset--border-radius--*` |
| **UI-выбор** | Нет | Range slider / dropdown |
| **Ограничения на значения** | Любые CSS-значения | Без скобок и функций |
| **Рекомендация** | Устаревший подход для border radius | Стандарт для новых тем |

## WooCommerce-специфика в theme.json

При разработке интернет-магазина `theme.json` должен учитывать блоки WooCommerce:

### Стилизация WooCommerce-блоков

```json
{
  "styles": {
    "blocks": {
      "woocommerce/product-price": {
        "color": {
          "text": "var(--wp--custom--woocommerce--price-color)"
        },
        "typography": {
          "fontSize": "var(--wp--custom--typography--font-size--xl)",
          "fontWeight": "700"
        }
      },
      "woocommerce/product-button": {
        "color": {
          "text": "var(--wp--custom--text--inverse)",
          "background": "var(--wp--custom--brand--primary)"
        },
        "border": {
          "radius": "var(--wp--custom--border--radius--md)"
        }
      },
      "woocommerce/product-sale-badge": {
        "color": {
          "text": "#FFFFFF",
          "background": "var(--wp--custom--woocommerce--sale-badge)"
        }
      }
    }
  }
}
```

### WooCommerce-блоки в настройках

```json
{
  "settings": {
    "blocks": {
      "woocommerce/product-collection": {
        "spacing": {
          "blockGap": "var(--wp--custom--spacing--lg)"
        }
      },
      "woocommerce/mini-cart": {
        "typography": {
          "fontSize": "var(--wp--custom--typography--font-size--sm)"
        }
      }
    }
  }
}
```

### Рекомендации для WooCommerce

1. **Выделите WooCommerce-токены в отдельную группу** `custom.woocommerce` — sale badge, stock status, цены, рейтинг
2. **Используйте `settings.blocks`** для контроля доступных настроек в WooCommerce-блоках
3. **Задайте стили по умолчанию для товарной сетки** через `styles.blocks["woocommerce/product-collection"]`
4. **Помните о странице оформления заказа** — стили из `theme.json` применяются и к Checkout-блоку
5. **Цены должны выделяться типографически** — крупнее и жирнее основного текста

### Пример token-группы для WooCommerce

```json
{
  "settings": {
    "custom": {
      "woocommerce": {
        "saleBadge": "#EF4444",
        "saleBadgeText": "#FFFFFF",
        "stockInStock": "#10B981",
        "stockOutOfStock": "#EF4444",
        "stockLowStock": "#F59E0B",
        "ratingStar": "#F59E0B",
        "ratingStarEmpty": "#D1D5DB",
        "price": "#111827",
        "salePrice": "#EF4444",
        "buttonAddToCart": "#2563EB",
        "buttonAddToCartHover": "#1D4ED8"
      }
    }
  }
}
```

## Lock Down Approach (VIP)

Глобально заблокировать все элементы управления, затем выборочно включить нужные. Критично для WooCommerce-сайтов, где контент-менеджеры работают с товарами:

```json
{
  "settings": {
    "appearanceTools": false,
    "border": {
      "color": false,
      "radius": false,
      "style": false,
      "width": false
    },
    "color": {
      "text": false,
      "background": false,
      "link": false,
      "custom": false
    },
    "spacing": {
      "margin": false,
      "padding": false
    },
    "typography": {
      "customFontSize": false,
      "fontStyle": false,
      "fontWeight": false
    },
    "blocks": {
      "core/button": {
        "color": {
          "text": true,
          "background": true
        }
      },
      "woocommerce/product-button": {
        "color": {
          "text": true,
          "background": true
        }
      }
    }
  }
}
```

Это гарантирует, что ни контент-редакторы, ни менеджеры товаров не нарушат дизайн-систему произвольными цветами и отступами.

## Интеграция с внешними инструментами

`theme.json` — не изолированный файл. Он работает в связке:

| Инструмент | Связь с theme.json |
|---|---|
| **Figma + Tokens Studio** | Экспорт токенов → `theme.json` через [vip-design-system-bridge](https://github.com/Automattic/vip-design-system-bridge) |
| **Tailwind CSS** | Синхронизация токенов `theme.json` ↔ `tailwind.config` через CSS-переменные |
| **daisyUI** | Темы daisyUI маппятся на WordPress-палитру из `theme.json` |
| **DESIGN.md** | AI-читаемый контракт дизайна, из которого генерируется `theme.json` |
| **Style Dictionary** | Трансформация W3C DTCG-токенов в `--wp--custom--*` |

## Best Practices

1. **`settings.custom` — единый source of truth** для всех дизайн-токенов
2. **Используйте сгенерированные CSS-переменные** везде — не дублируйте значения в CSS
3. **Группируйте WooCommerce-токены отдельно** — `custom.woocommerce.*`
4. **Lock down для контент-менеджеров** — оставьте им только нужные настройки
5. **Стилизуйте WooCommerce-блоки явно** в `styles.blocks` — не полагайтесь на дефолтные стили плагина
6. **Поддерживайте контрастность WCAG AA** для всех цветов, включая цены и бейджи распродаж
7. **Версионируйте `theme.json`** в Git — это код, а не просто конфиг

## Материалы и источники

- [WordPress VIP: Design System with Block Editor — Theme.json](https://wpvip.com/blog/using-a-design-system-with-the-wordpress-block-editor-pt-1-theme-json/)
- [rtCamp: Design Tokens in WordPress Site Editor](https://rtcamp.com/handbook/designing-for-wordpress-site-editor/design-tokens/)
- [DDpa: Design as Code — Design Tokens и архитектура](https://ddpa.ru/kb/ai/design/design-as-code/)
- [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- [Contentful: Design Tokens Explained](https://www.contentful.com/blog/design-tokens-explained/)
- [GitHub: vip-design-system-bridge](https://github.com/Automattic/vip-design-system-bridge)

## Связанные страницы

- [Дизайн-системы в WordPress](./design-systems.md) — Atomic Design, компонентный подход, от Figma до theme.json
- [Tailwind CSS v4 + daisyUI в блочной теме WordPress](./tailwind-daisyui-wordpress.md) — Интеграция Tailwind с синхронизацией через theme.json
- [DESIGN.md для WordPress](./design-md.md) — Контракт дизайна для AI и связка с theme.json
- [Figma → WordPress: мост через Design Tokens](./figma-to-wordpress.md) — Пайплайн синхронизации Tokens Studio → theme.json
- [WooCommerce: полное руководство](../platforms/woocommerce/index.md) — Интернет-магазин на WordPress
