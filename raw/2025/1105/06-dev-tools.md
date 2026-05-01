# 🛠 Dev и управление кодом — материалы

## 🌍 GitHub

**Тип:** Крупнейшая платформа для хостинга кода и CI/CD
**Сайт:** github.com

### Ключевые факты (2025)
- Стандарт индустрии для WordPress-разработки
- GitHub Actions: CI/CD для авто-деплоя WordPress
- Два подхода к репозиториям:
  - **Theme-only repo:** только `wp-content/themes/your-theme`
  - **Full-site repo:** Bedrock/WordPress-stack, core + plugins в Git (uploads и config — в .gitignore)

### WordPress CI/CD через GitHub Actions
- `.github/workflows/deploy.yml`
- Stages: test (PHPCS, PHPUnit) → build (Webpack/Vite) → deploy (SSH/rsync)
- Интеграции с хостами: Pressable, InstaWP, WP Engine (push-to-deploy)
- GitHub Updater / WP Pusher: авто-обновление плагинов/тем из GitHub

### Плюсы
- Огромная экосистема, Actions, Pages
- Бесплатно для публичных и небольших приватных репозиториев
- Интеграция с практически любым хостингом

### Минусы
- Принадлежит Microsoft (некоторых это беспокоит)
- Ограничения на размер LFS и CI/CD минут в бесплатном тарифе

### Best practices (2025)
- `.gitignore`: wp-config.php, uploads, sensitive files
- Branching: main (production), staging, feature/*
- Версионирование тем/плагинов через Git tags + GitHub Releases
- Секреты через GitHub Secrets

---

## 🌍 GitLab

**Тип:** Платформа DevOps (self-hosted или облако)
**Сайт:** gitlab.com

### Ключевые факты (2025)
- Встроенный CI/CD (`.gitlab-ci.yml`)
- Self-hosted вариант (GitLab CE) для полного контроля
- Stages: test → build → deploy (SSH/rsync или Docker)
- Поддержка PHP unit tests, PHPCS, WP-scan

### WordPress CI/CD пример
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

### Плюсы
- Бесплатный self-hosted (GitLab CE)
- Встроенный CI/CD (не нужны сторонние сервисы)
- Security scanning (WP-scan, Trivy)
- Хорош для приватных проектов

### Минусы
- Self-hosted требует администрирования
- Тяжелее GitHub для open-source комьюнити

---

## 🌍 Bitbucket

**Тип:** Git-хостинг от Atlassian
**Сайт:** bitbucket.org

### Ключевые факты (2025)
- Интеграция с Jira, Confluence, Trello
- Bitbucket Pipelines для CI/CD
- Бесплатные приватные репозитории для small teams (<5 чел)
- Поддержка Git LFS

### Плюсы
- Тесная интеграция с Atlassian-экосистемой
- Хорош для команд, использующих Jira
- Бесплатные приватные репозитории

### Минусы
- Меньше community и open-source проектов
- Меньше GitHub Actions-подобных готовых решений
- Pipelines менее гибкие чем GitHub Actions

---

## 🇷🇺 GitLab (российские инсталляции)

**Тип:** Self-hosted GitLab для российских команд
**Сайт:** about.gitlab.com

### Особенности для RU-рынка
- Возможность хостить на своих серверах (импортозамещение)
- Полный контроль над данными
- Используется в крупных российских компаниях

---

## 🇷🇺 Gitea

**Тип:** Лёгкий self-hosted Git-сервер (open-source)
**Сайт:** about.gitea.com

### Ключевые факты (2025)
- Лёгкий Git-хостинг (можно на Raspberry Pi!)
- Webhooks, pull requests, базовый CI/CD
- SQLite для малых инсталляций, PostgreSQL/MariaDB для больших
- Gitea Actions (CI/CD как GitHub Actions)

### WordPress-интеграция
- Theme/plugin repo → git pull на сервере
- Webhook: push → авто-pull на staging/production
- Wordpress-Gitea-manager: админ-страница WordPress → pull/downgrade из Gitea
- Gitea → n8n → WordPress REST API для автоматизаций

### Плюсы
- Очень лёгкий (минимальные ресурсы)
- Полный контроль над данными
- Бесплатно, open-source
- Идеально для малых команд и solo-разработчиков

### Минусы
- Нужно администрировать
- Меньше функций чем GitHub/GitLab

---

## 🇷🇺 VK Tech (облачные решения)

**Тип:** Российская облачная платформа для разработки
**Сайт:** tech.vk.com / cloud.vk.com

### Ключевые факты (2025)
- VK Cloud: IaaS и PaaS для хостинга приложений
- Готовые сервисы: виртуальные машины, Kubernetes, базы данных (MySQL, PostgreSQL, Tarantool, Redis)
- Dev Platform: автоматизация разработки, тестирования, CI/CD
- Курс по запуску WordPress в VK Cloud

### WordPress-разработка на VK Cloud
- WordPress на виртуальной машине или в Kubernetes
- S3-хранилище, MySQL/PostgreSQL
- CI/CD, бэкапы, мониторинг
- Отказоустойчивое масштабируемое решение

### Плюсы
- Российская инфраструктура, SLA
- Готовые DevOps-инструменты и Dev Platform
- Подходит для средних и крупных проектов

### Минусы
- Сложнее чем shared-хостинг
- Требует технической команды

### Для кого
- Разработчики и агентства, которым нужно быстро масштабировать WordPress
- Бизнес, желающий перенести сайты на российское облако
