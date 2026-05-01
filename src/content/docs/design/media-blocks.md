---
title: "Медиа-блоки: Gallery, Media & Text, Cover"
description: "Работа с медиа-блоками в WordPress: Галерея с lightbox, Media & Text для бок-о-бок компоновки, Cover для баннеров и шапок с parallax."
---

## Gallery block

Галерея автоматически размещает несколько фотографий в сетке. Идеально для портфолио, товаров, фотоколлекций.

### Добавление
- **Drag & drop** изображений с компьютера — автоматически создаст Gallery
- Или `/gallery` → выбрать из медиабиблиотеки

### Настройки
| Параметр | Описание |
|---|---|
| Количество колонок | От 1 до 6+ |
| Размер изображений | Thumbnail, Medium, Large, Full |
| Crop images to fit | Обрезать до одинакового размера в строке |
| Фоновый цвет | Заливка всей галереи |
| Block spacing | Горизонтальные и вертикальные зазоры |
| Padding и margin | Через три точки → Dimensions |
| Border и радиус | Скругление + рамка |

### Lightbox
Глобальное включение: **Site Editor → Styles → Style Book → Media → Image → Settings → «Expand on click»**. Изображения открываются в оверлее на той же странице.

### Массовое редактирование
- Изменить колонки → выделить все изображения → применить радиус/бордер ко всем сразу
- Фоновый цвет + padding + белая рамка 10px на всех изображениях

### Дополнительно
- Ссылки и подписи к галерее
- Перестановка изображений стрелками или drag-and-drop
- Замена отдельных изображений
- Добавление новых через «Add» в тулбаре

## Media & Text block

Комбинирует изображение/видео с текстом бок о бок. Идеален для: feature highlights, «о нас», «команда», «контакты».

### Добавление
`/media and text` → изображение (с alt text) → контент справа.

### Пример рабочего процесса
1. Изображение из медиабиблиотеки
2. Текст: первый параграф → трансформировать в Heading (XL)
3. Buttons block (outline) как CTA

### Настройки
- **Ширина:** wide, full
- **Позиция изображения:** слева/справа (поменять в тулбаре)
- **Фоновый цвет**
- **Padding** вокруг контента
- **Media width** — слайдер для настройки пропорции изображение:текст
- **Stack on mobile** (вкл. по умолчанию) — на мобильных контент вертикально
- **Crop image to fill** + **focal point picker** — если изображение не помещается, выбрать ключевую точку
- **Вертикальное выравнивание:** top, middle, bottom
- **Border и радиус**

### Паттерны
Inserter → «Media and Text» → готовые паттерны из темы. Используйте как базу или вдохновение.

## Cover block

Отображает текст/контент поверх изображения или видео. Отлично для: шапок, баннеров, CTA-секций.

### Возможности
Cover — **контейнерный блок**: содержит другие блоки внутри.

**Добавление:** загрузить изображение/видео или «Use Featured Image».

**Ключевые настройки:**
- **Full width** — во всю ширину
- **Content position** — позиционирование контента (top left, center и т.д.)
- **Full height** — во всю высоту экрана
- **Fixed Background** — эффект параллакса
- **Repeat Background** — повторение, если изображение меньше области
- **Focal point picker** — ключевая точка для мобильных
- **Overlay color + opacity** — затемнение/осветление
- **Aspect ratio** — например, Classic 3×2 для предотвращения обрезки на разных экранах

### Пример: баннер
1. Cover → изображение → full width → content position: top middle
2. Текст «Explore the mountains» → размер 4rem → appearance: medium
3. Обернуть текст в Group → убрать «Inner blocks use content width» → alignment: full width
4. Overlay opacity: 50% → padding → проверить на мобильном

### Пример: параллакс
1. Cover → full width → full height → Fixed Background
2. Дублировать блок → новое изображение
3. Выделить оба → Group → block spacing: 0

## Материалы и источники

- [Utilize the Gallery block (learn.wordpress.org)](https://learn.wordpress.org/lesson/utilize-the-gallery-block/)
- [Using the WordPress Media and Text block (learn.wordpress.org)](https://learn.wordpress.org/lesson/using-the-wordpress-media-and-text-block/)
- [Uncovering the Cover block (learn.wordpress.org)](https://learn.wordpress.org/lesson/uncovering-the-cover-block-copy/)

## Связанные страницы

- [Композиция макетов](./layout-composition.md)
- [Отступы и размеры](./dimensions-spacing.md)
- [Карусели и слайдеры](./carousel-slider.md)
