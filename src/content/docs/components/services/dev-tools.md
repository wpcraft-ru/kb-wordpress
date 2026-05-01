---
title: "Dev-инструменты и управление кодом — сервисы"
description: "Сравнение платформ для хостинга кода и CI/CD в WordPress-разработке: GitHub, GitLab, Bitbucket, Gitea, VK Cloud."
---

## Обзор

Для WordPress-разработки Git-хостинг решает три задачи:
1. **Хранение кода** — темы, плагины, конфигурация
2. **CI/CD** — авто-тестирование и деплой на staging/production
3. **Совместная работа** — code review, issue tracking, версионирование

Два подхода к структуре репозитория WordPress-проекта:
- **Theme/plugin-only:** только `wp-content/themes/your-theme` или `wp-content/plugins/your-plugin`
- **Full-site:** Bedrock/WordPress-stack — ядро + плагины в Git, uploads и wp-config.php в `.gitignore`

## Сравнительная таблица

| Сервис | Тип | Бесплатно | CI/CD | Self-hosted | Фокус |
|--------|-----|:-:|:-:|:-:|---|
| GitHub | 🌍 Облако | ✅ Публичные | Actions | Нет | Стандарт индустрии |
| GitLab | 🌍 Облако+Self | ✅ CE | Встроенный | ✅ CE | DevOps-платформа |
| Bitbucket | 🌍 Облако | ✅ До 5 чел | Pipelines | Нет | Atlassian-экосистема |
| Gitea | 🌍 Self-hosted | ✅ Open-source | Actions | ✅ | Лёгкий, приватный |
| VK Cloud | 🇷🇺 Облако | Нет | Dev Platform | Нет | Российская инфраструктура |

## Международные платформы

### GitHub

Стандарт индустрии для WordPress-разработки. GitHub Actions — CI/CD для авто-деплоя WordPress.

**Типовой workflow:**
- `.github/workflows/deploy.yml`
- Stages: test (PHPCS, PHPUnit) → build (Webpack/Vite) → deploy (SSH/rsync)
- Интеграции с хостами: Pressable, InstaWP, WP Engine (push-to-deploy)
- GitHub Updater / WP Pusher: авто-обновление плагинов/тем из GitHub

**Best practices (2025):**
- `.gitignore`: `wp-config.php`, `uploads/`, sensitive files
- Branching: `main` (production), `staging`, `feature/*`
- Версионирование тем/плагинов: Git tags + GitHub Releases
- Секреты через GitHub Secrets

**Минусы:** принадлежит Microsoft, ограничения на LFS и CI/CD минуты в бесплатном тарифе.

### GitLab

Встроенный CI/CD (`.gitlab-ci.yml`), self-hosted вариант (GitLab CE) для полного контроля.

**Пример `.gitlab-ci.yml` для WordPress:**
```yaml
stages: [test, build, deploy]
test:
  image: php:8.1
  script:
    - composer install
    - vendor/bin/phpunit
build:
  image: node:18
  script:
    - npm ci && npm run build
deploy:prod:
  image: alpine:latest
  script:
    - apk add openssh-client rsync
    - rsync -avP ./wp-content/themes/my-theme/ user@host:/path
  only: [main]
```

**Плюсы:** бесплатный self-hosted, встроенный CI/CD, security scanning (WP-scan, Trivy).
**Минусы:** self-hosted требует администрирования, тяжелее GitHub для open-source комьюнити.

### Bitbucket

Git-хостинг от Atlassian с интеграцией в Jira, Confluence, Trello. Бесплатные приватные репозитории для команд до 5 человек.

**Плюсы:** тесная интеграция с Atlassian-экосистемой, хорош для Jira-команд.
**Минусы:** меньше community, Pipelines менее гибкие чем GitHub Actions.

## Российские сервисы

### Gitea

Лёгкий self-hosted Git-сервер. Можно запустить даже на Raspberry Pi! Webhooks, pull requests, Gitea Actions (CI/CD как GitHub Actions).

**WordPress-интеграция:**
- Theme/plugin repo → `git pull` на сервере
- Webhook: push → авто-pull на staging/production
- Wordpress-Gitea-manager: админ-страница WordPress → pull/downgrade из Gitea
- Gitea → n8n → WordPress REST API для автоматизаций

**Плюсы:** очень лёгкий, полный контроль, бесплатно, open-source.
**Минусы:** нужно администрировать, меньше функций чем GitHub/GitLab.
**Для кого:** малые команды и solo-разработчики.

### VK Cloud

Российская облачная платформа: виртуальные машины, Kubernetes, базы данных (MySQL, PostgreSQL, Tarantool, Redis), S3-хранилище.

**Dev Platform:** автоматизация разработки, тестирования, CI/CD. Готовый WordPress в «магазине приложений».

**Плюсы:** российская инфраструктура, SLA, готовые DevOps-инструменты.
**Минусы:** сложнее shared-хостинга, требует технической команды.
**Для кого:** разработчики и агентства, средние и крупные проекты.

## Как выбрать

1. **Open-source / максимум интеграций** → GitHub
2. **Приватность и self-hosted CI/CD** → GitLab CE
3. **Jira / Atlassian-экосистема** → Bitbucket
4. **Лёгкий self-hosted для малых команд** → Gitea
5. **Российская инфраструктура + масштабирование** → VK Cloud

Подробнее о настройке CI/CD для WordPress — [WP-CLI и автоматизация](../../how-to/multiple-sites-management.md). О self-hosted автоматизации — [Автоматизация и интеграции — сервисы](./automation.md).

## Материалы и источники

- [GitHub](https://github.com)
- [GitLab](https://gitlab.com)
- [Bitbucket](https://bitbucket.org)
- [Gitea](https://about.gitea.com)
- [VK Cloud](https://cloud.vk.com)
