# Исследование: российские платформы управления разработкой (2025-2026)

Sources:
- https://blog.skillfactory.ru/top-analogov-github/
- https://zlonov.live/garden/github-analogues/
- https://vc.ru/top-raiting/1826205-hosting-dlya-koda-luchshie-platformy-v-rossii-v2026-godu
- https://blog.openreplay.com/ru/альтернативы-github-2026/
- https://gitflic.ru
- https://gitverse.ru
- https://sourcecraft.dev
- https://gitriver.com

## GitFlic
- Разработчик: «РеСолют» (Группа Астра), в реестре российского ПО
- SaaS и self-hosted (Enterprise/Atlas)
- CI/CD: YAML-пайплайны, совместим с GitLab, раннеры (shell, Docker)
- Реестр пакетов: Docker, Maven, NPM, PyPI, Generic — локальные, прокси, виртуальные
- Трекер задач, миграция с GitLab/GitHub
- Бесплатно: публичные проекты + команды до 5 человек (4 ГБ на репо)
- Корпоративный: от 750 руб./пользователь/мес

## GitVerse (Сбер)
- Разработчик: СберТех, на Cloud.ru
- Облачная AI-first платформа
- GigaCode: ИИ-ассистент кода (15+ языков), «персональная память»
- GigaIDE: гибридная IDE (70+ инструментов, десктоп + облако)
- CI/CD, трекер (Scrum/Kanban), вики, артефакты
- Зеркала Docker Hub/NPM/Maven (серверы в РФ)
- Импорт из GitHub в один клик, авторизация через Sber ID
- Обновления апреля 2026: AI-генерация коммитов, GitVerse MCP, граф коммитов
- Бесплатные квоты до 2 ГБ

## SourceCraft (Яндекс)
- Разработчик: Яндекс, доступ через Yandex Cloud
- AI-first платформа: Code Assistant + AI agent mode
- Agent mode: создаёт репозитории, пишет код, генерирует тесты, готовит PR, деплоит в Yandex Cloud
- Quick actions: AI code review, генерация тестов, документации, рефакторинг, сообщения коммитов
- Интеграция с Yandex Cloud (сентябрь 2025) — без ручной настройки ключей
- «Персональная память» ИИ — +11% принятие предложений (A/B)
- 30+ языков программирования
- Freemium: базовые функции бесплатно, продвинутые ИИ — бесплатно с июля 2025
- Запуск: 2025, обновления апрель 2026

## Mos.Hub (hub.mos.ru)
- От Правительства Москвы для открытых проектов
- Данные в РФ
- Для госструктур

## GitRiver
- Self-hosted на Rust, релиз 1.0 март 2026
- ~100 МБ RAM, ~35 МБ binary + PostgreSQL
- CI/CD: YAML с DAG, matrix builds, артефакты, кэш
- OCI registry (multi-arch, scanning), пакетный registry (npm, PyPI, Cargo, Maven, NuGet)
- Issues + Kanban, PR с reviews/CODEOWNERS/merge queue
- GitOps (RiverCD) для K8s: canary/blue-green
- 8 уведомлений (Email, Telegram, Slack и др.)
- Старт <3 сек через Docker Compose
- Community Edition — бесплатно, без лимитов
