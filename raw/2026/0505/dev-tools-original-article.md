# Dev-инструменты и управление кодом — сервисы (оригинал)

Source: https://wpcraft.ru/kb/components/services/dev-tools/

Для WordPress-разработки Git-хостинг решает три задачи:
- Хранение кода — темы, плагины, конфигурация
- CI/CD — авто-тестирование и деплой на staging/production
- Совместная работа — code review, issue tracking, версионирование

Два подхода к структуре репозитория WordPress-проекта:
- Theme/plugin-only: только wp-content/themes/your-theme или wp-content/plugins/your-plugin
- Full-site: Bedrock/WordPress-stack — ядро + плагины в Git, uploads и wp-config.php в .gitignore

Сервис | Тип | Бесплатно | CI/CD | Self-hosted | Фокус
GitHub | 🌍 Облако | ✅ Публичные | Actions | Нет | Стандарт индустрии
GitLab | 🌍 Облако+Self | ✅ CE | Встроенный | ✅ CE | DevOps-платформа
Bitbucket | 🌍 Облако | ✅ До 5 чел | Pipelines | Нет | Atlassian-экосистема
Gitea | 🌍 Self-hosted | ✅ Open-source | Actions | ✅ | Лёгкий, приватный
VK Cloud | 🇷🇺 Облако | Нет | Dev Platform | Нет | Российская инфраструктура
