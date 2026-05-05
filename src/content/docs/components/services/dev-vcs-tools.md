---
title: "Dev-инструменты и управление кодом — сервисы"
description: "Сравнение платформ для хостинга кода и CI/CD: российские (SourceCraft, GitVerse, GitFlic), open-source (Gitea, Forgejo, GitRiver, GitLab CE) и мировые (GitHub, GitLab, Bitbucket)."
---

## Обзор

Для WordPress-разработки Git-сервисы решают три задачи:

1. **Хранение кода** — темы, плагины, конфигурация
3. **Совместная работа** — code review, issue tracking, версионирование
2. **CI/CD** — авто-тестирование и деплой на staging/production

Два подхода к структуре репозитория WordPress-проекта:
- **Theme/plugin-only:** только `wp-content/themes/your-theme` или `wp-content/plugins/your-plugin`
- **Full-site:** Bedrock/WordPress-stack — ядро + плагины в Git, uploads и wp-config.php в `.gitignore`

## Сводная таблица

### Российские платформы

| Сервис | Разработчик | Хостинг | Self-hosted | ИИ | CI/CD | Бесплатно | Реестр пакетов |
|--------|------------|---------|:-----------:|:--:|:-----:|:----------:|:--------------:|
| [SourceCraft](https://sourcecraft.dev) | Яндекс | Облако (YC) | ❌ | ✅ Agent + Assistant | ✅ | Freemium (базовое бесплатно) | ❌ |
| [GitVerse](https://gitverse.ru) | Сбер (Cloud.ru) | Облако | ❌ | ✅ GigaCode + GigaIDE | ✅ | До 2 ГБ | ✅ Docker, NPM, Maven |
| [GitFlic](https://gitflic.ru) | РеСолют (Группа Астра) | Облако + Self | ✅ | ❌ | ✅ | До 5 чел, 4 ГБ/репо | ✅ Docker, NPM, Maven, PyPI |
| Mos.Hub | Правительство Москвы | Облако | ❌ | ❌ | Ограниченный | ✅ Для госпроектов | ❌ |

### Open-source (self-hosted)

| Сервис | Язык | RAM | CI/CD | Package Registry | Ключевое |
|--------|------|-----|:-----:|:----------------:|----------|
| [GitLab CE](https://gitlab.com) | Ruby/Go | 4–8 ГБ+ | ✅ Полный | ✅ | DevOps all-in-one |
| [Gitea](https://about.gitea.com) | Go | 170 МБ–1 ГБ | ✅ Actions | Ограниченный | Лёгкость, простота |
| [Forgejo](https://forgejo.org) | Go | 170 МБ–1 ГБ | ✅ Actions | Ограниченный | Community governance |
| [GitRiver](https://gitriver.com) | Rust | ~100 МБ | ✅ YAML+DAG | ✅ Полный | Мин. ресурсы, один бинарник |
| [OneDev](https://onedev.dev) | Java | Перем. | ✅ Встроенный | Ограниченный | AI-ревью, Kanban |

### Популярные зарубежные (SaaS)

| Сервис | Бесплатные CI мин/мес | Self-hosted | Container Registry | ИИ | Цена Team ($/мес/чел) |
|--------|:----------------------:|:-----------:|:------------------:|:--:|:---------------------:|
| [GitHub](https://github.com) | 2 000 | Enterprise ($) | GHCR (free) | Copilot ($10) | $4 |
| [GitLab](https://gitlab.com) | 400 | ✅ CE (free) | ✅ (free) | Duo | $29 |
| [Bitbucket](https://bitbucket.org) | 50 | Data Center ($) | ❌ | Atlassian AI | $3 |

## Российские платформы

### SourceCraft (Яндекс)

AI-first платформа для командной разработки, запущенная в 2025 году. Доступ через Yandex Cloud.

**Ключевые возможности:**
- **Code Assistant** — ИИ-помощник для 30+ языков с «персональной памятью» (+11% принятие предложений по A/B)
- **Agent mode** — ИИ-агент создаёт репозитории, пишет код, генерирует тесты, готовит PR, деплоит в Yandex Cloud одной командой
- **Quick actions** — AI code review, генерация тестов, документации, рефакторинг, сообщения коммитов
- **Code review** — обязательное ревью с правилами approve before merge
- **Интеграция с Yandex Cloud** (сентябрь 2025) — доступ к облачным сервисам без ручной настройки ключей

**Цены:** freemium, базовые функции бесплатно. Продвинутые ИИ-возможности — бесплатно с июля 2025.

**Для кого:** команды, использующие Yandex Cloud, которым нужен ИИ-ускоритель разработки.

**Минусы:** привязка к Yandex Cloud, нет self-hosted, платформа молодая.

### GitVerse (Сбер)

Облачная AI-first платформа от СберТех на инфраструктуре Cloud.ru. Данные хранятся на территории РФ.

**Ключевые возможности:**
- **GigaCode** — ИИ-ассистент для 15+ языков, анализирует контекст кода, предлагает готовые конструкции
- **GigaIDE** — гибридная IDE (десктоп на базе JetBrains + облако), 70+ инструментов разработки
- **CI/CD** — автоматизация сборки и поставки с готовыми скриптами
- **Трекер задач** — доски Scrum и Kanban
- **Вики и документация**
- **Реестр артефактов** — Maven, NPM, Docker
- **Зеркала хранилищ** — серверы в РФ для Docker Hub, NPM, Maven (ускоренный доступ без VPN)
- **Импорт из GitHub** в один клик, авторизация через Sber ID

**Обновления апреля 2026:** AI-генерация коммитов, GitVerse MCP для внешних AI-клиентов, граф коммитов.

**Для кого:** команды, которым нужна российская инфраструктура + ИИ-инструменты + экосистема Сбера/Cloud.ru.

**Минусы:** нет self-hosted, закрытые цены (заявка через менеджера), привязка к Cloud.ru.

### GitFlic (РеСолют / Группа Астра)

Единственная российская платформа с полноценным self-hosted. Внесена в реестр российского ПО.

**Ключевые возможности:**
- **CI/CD** — YAML-пайплайны, совместимые с GitLab. Раннеры (shell, Docker), артефакты, кэш
- **Реестр пакетов** — Docker, Maven, NPM, PyPI, Generic. Три уровня: локальный, прокси (кэш Docker Hub), виртуальный (цепочка репо). GPG-подписи, карантин (CodeScoring)
- **Трекер задач**, миграция с GitLab/GitHub
- **Self-hosted** — Enterprise/Atlas версии для развёртывания на своей инфраструктуре

**Цены:** публичные проекты — бесплатно. Команды до 5 чел — бесплатно (4 ГБ/репо). Корпоративный — от 750 руб./пользователь/мес.

**Для кого:** компании, которым нужен self-hosted Git с CI/CD и пакетными реестрами на российской инфраструктуре.

**Минусы:** ИИ-функции отсутствуют, self-hosted требует администрирования.

### Mos.Hub

Платформа Правительства Москвы для хранения открытых проектов. Данные на территории РФ.

**Для кого:** госструктуры и разработчики, работающие по госконтрактам с Москвой.

## Open-source (self-hosted)

### GitLab CE

Полный DevOps-стек: CI/CD, security scanning, container registry, issue tracking, wiki. Бесплатный self-hosted (Community Edition).

**Для WordPress:** встроенный CI/CD (`.gitlab-ci.yml`), security scanning (Trivy, WP-scan), auto-deploy через rsync/SSH.

**Минусы:** 4–8 ГБ+ RAM, требует администрирования.

**Для кого:** команды, которым нужен полный DevOps-стек с self-hosted.

### Gitea

Лёгкий Git-сервер на Go. GitHub-подобный UI, Gitea Actions (совместимы с GitHub Actions). Запускается на 1 ГБ VPS.

**WordPress-интеграция:**
- Theme/plugin repo → `git pull` на сервере
- Webhook: push → авто-pull на staging/production
- Gitea → n8n → WordPress REST API для автоматизаций

**Для кого:** малые команды и solo-разработчики, которым нужен простой приватный Git.

### Forgejo

Fork Gitea под управлением некоммерческой организации Forgejo e.V. Те же характеристики (170 МБ–1 ГБ RAM), но с сильным community governance и фокусом на privacy.

**Для кого:** open-source проекты и те, кто предпочитает community-управляемые инструменты.

### GitRiver

Новая платформа на Rust (релиз 1.0 — март 2026). Один бинарник ~35 МБ + PostgreSQL, ~100 МБ RAM.

**Ключевые возможности:**
- **CI/CD** — YAML с DAG-зависимостями, matrix builds, артефакты, кэш, web terminal
- **Package registries** — npm, PyPI, Cargo, Maven, NuGet (бесплатно)
- **OCI container registry** — multi-arch, scanning, retention
- **GitOps (RiverCD)** — деплой в Kubernetes: canary, blue-green
- **Issues + Kanban**, PR с reviews, CODEOWNERS, merge queue
- **8 каналов уведомлений** — Email, Telegram, Slack и др.
- **Старт <3 сек** через `docker compose up -d`

**Для кого:** homelab и малые команды, которым нужен полный DevOps-стек при минимальных ресурсах.

**Минусы:** молодой проект (1.0 в 2026), меньше зрелости экосистемы.

### OneDev

All-in-one DevOps на Java. AI-assisted code reviews, встроенные пайплайны, Kanban-доски.

**Для кого:** команды, которым нужен встроенный code review с ИИ в self-hosted.

## Популярные зарубежные (SaaS)

### GitHub

Стандарт индустрии, 100M+ разработчиков. GitHub Actions — крупнейший marketplace CI/CD.

**WordPress-специфика:**
- `.github/workflows/deploy.yml` — типовой workflow: test → build → deploy
- Интеграции: Pressable, InstaWP, WP Engine (push-to-deploy)
- GitHub Updater / WP Pusher — авто-обновление плагинов/тем из GitHub
- `.gitignore`: `wp-config.php`, `uploads/`, sensitive files

**Best practices:** branching `main`/`staging`/`feature/*`, Git tags + GitHub Releases для версионирования тем/плагинов, секреты через GitHub Secrets.

**Цены:** публичные репозитории — бесплатно. GitHub Team — $4/чел/мес (3 000 CI минут). Copilot — $10/мес.

**Минусы:** принадлежит Microsoft, self-hosted — только Enterprise ($), ограничения на LFS и CI минуты в free tier.

### GitLab

DevSecOps all-in-one. Сильнейший встроенный CI/CD среди SaaS-платформ.

**WordPress-специфика:**
```yaml
stages: [test, build, deploy]
test:
  image: php:8.1
  script:
    - composer install
    - vendor/bin/phpunit
deploy:prod:
  image: alpine:latest
  script:
    - apk add openssh-client rsync
    - rsync -avP ./wp-content/themes/my-theme/ user@host:/path
  only: [main]
```

**Цены:** 400 бесплатных CI минут/мес. GitLab Premium — $29/чел/мес (10 000 минут). Self-hosted CE — бесплатно.

**Для кого:** enterprise, compliance, сложные пайплайны. Бесплатный self-hosted — ключевой плюс.

### Bitbucket

Git-хостинг от Atlassian. Нативная интеграция с Jira, Confluence, Trello.

**Цены:** до 5 чел — бесплатно (50 CI минут). Standard — $3/чел/мес.

**Минусы:** меньше community, Pipelines менее гибкие, нет нативного Container Registry.

**Для кого:** команды, глубоко интегрированные в Atlassian-экосистему.

## Как выбрать

### По приоритету

| Приоритет | Платформа |
|-----------|-----------|
| Российская инфраструктура + ИИ | SourceCraft или GitVerse |
| Российский self-hosted | GitFlic |
| Максимальные интеграции + open-source | GitHub |
| Self-hosted DevSecOps | GitLab CE |
| Atlassian-экосистема (Jira) | Bitbucket |
| Лёгкий self-hosted для малых команд | Gitea или Forgejo |
| Мин. ресурсы + полный DevOps | GitRiver |

### WordPress-специфичные рекомендации

- **Solo / малая команда, РФ** → GitFlic (self-hosted) или SourceCraft (облако)
- **Команда с Jira** → Bitbucket
- **Open-source тема/плагин** → GitHub (максимум visibility)
- **Enterprise, compliance** → GitLab CE (self-hosted) или GitFlic
- **Минимальный сервер (1 ГБ RAM)** → Gitea, Forgejo или GitRiver

Подробнее о настройке CI/CD для WordPress — [WP-CLI и автоматизация](../../how-to/multiple-sites-management.md). О self-hosted автоматизации — [Автоматизация и интеграции — сервисы](./automation.md).

## Материалы и источники

- [SourceCraft](https://sourcecraft.dev) — платформа Яндекса
- [GitVerse](https://gitverse.ru) — платформа Сбера
- [GitFlic](https://gitflic.ru) — платформа Группы Астра
- [GitRiver](https://gitriver.com) — self-hosted на Rust
- [GitHub](https://github.com)
- [GitLab](https://gitlab.com)
- [Bitbucket](https://bitbucket.org)
- [Gitea](https://about.gitea.com)
- [Forgejo](https://forgejo.org)
- [GitRiver](https://gitriver.com)
- [OneDev](https://onedev.dev)
- [Mos.Hub](https://hub.mos.ru)
