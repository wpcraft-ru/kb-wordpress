---
title: "Композиция макетов: Group, Row, Stack, Columns"
description: "Построение макетов в WordPress через блоки-контейнеры: Group, Row и Stack (flexbox), Columns (сетка до 6 колонок)."
---

## Обзор контейнерных блоков

Контейнерные блоки — основа композиции макетов. Они не содержат контента напрямую, а задают структуру для других блоков.

| Блок | Тип компоновки | Максимум элементов |
|---|---|---|
| **Group** | Вертикальная (stack) или настраиваемая | Не ограничено |
| **Row** | Горизонтальная (flexbox row) | Не ограничено |
| **Stack** | Вертикальная (flexbox column) | Не ограничено |
| **Columns** | Сетка | До 6 колонок |

## Group block

Group — универсальный контейнер. Его главная сила — **родитель для других блоков**, позволяющий применять стили ко всей группе одновременно:
- Фоновый цвет или изображение
- Отступы (padding, margin)
- Границы и скругление
- Тень

Group можно использовать для создания секций страницы: hero, features, testimonials, footer-виджеты.

## Row и Stack блоки

Row и Stack — flexbox-контейнеры:

### Row
- Элементы выстраиваются **по горизонтали**
- Настройка выравнивания по вертикали (top, center, bottom, stretch)
- Расстояние между элементами (gap)
- На мобильных: перестраивается в вертикаль

### Stack
- Элементы выстраиваются **по вертикали**
- Отступы между элементами (spacing)
- Отлично для: карточек с изображением → заголовком → текстом → кнопкой

### Общие настройки
- **Justification** — распределение пространства между элементами
- **Wrap** — перенос на новую строку при нехватке места
- **Gap** — расстояние между дочерними элементами

## Columns block

Columns — самый гибкий блочный инструмент для сеток. До **6 колонок**.

### Добавление и настройка
- Вставка: `/columns` или через Inserter
- Выбор количества и пропорций колонок
- В каждую колонку добавляются любые блоки: изображения, заголовки, параграфы, кнопки

### Родитель и дети
Columns block имеет родительско-дочернюю структуру:
- **Родитель** (Columns): ширина, выравнивание, цвет фона, border
- **Дети** (Column): индивидуальный фон, отступы, границы

### Панель инструментов
- **Alignment:** wide-width, full-width
- **Duplicate column:** три точки → Duplicate — ускоряет работу
- **Move column:** стрелки в тулбаре или drag-and-drop в List View

### Боковая панель
- **Добавить колонку:** плюс между колонками
- **Stack on Mobile** — колонки автоматически становятся вертикальными на мобильных
- Стили: цвета, типографика
- Размеры: padding, margin, space between columns
- Border, радиус, тень

### Трансформации
Другие блоки можно трансформировать в Columns, а Columns — в Group.

## Практический пример: 3-колоночный макет

1. Columns → 3 равные колонки
2. Левая колонка: border 5px, padding → Paragraph «01» (75px, bold, line-height 1.3, по центру) → Heading «Consultation» (Large, line-height 4, по центру) → Lorem ipsum (по центру)
3. Дублировать колонку дважды, обновить контент, удалить лишние

## Материалы и источники

- [Designing with the Group block (learn.wordpress.org)](https://learn.wordpress.org/lesson/designing-with-the-group-block/)
- [Designing with Row and Stack blocks (learn.wordpress.org)](https://learn.wordpress.org/lesson/designing-with-row-and-stack-blocks-copy/)
- [Designing with the Columns block (learn.wordpress.org)](https://learn.wordpress.org/lesson/designing-with-the-columns-block-copy/)

## Связанные страницы

- [Отступы и размеры](./dimensions-spacing.md)
- [Block-first мышление](./block-first-mindset.md)
- [Медиа-блоки](./media-blocks.md)
