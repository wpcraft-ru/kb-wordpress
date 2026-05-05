# Исследование: open-source self-hosted Git-платформы (2025-2026)

Sources:
- https://gitprotect.io/blog/top-git-hosting-services/
- https://blog.openreplay.com/github-alternatives-2026/
- https://refine.dev/blog/github-alternatives/
- https://dasroot.net/posts/2026/01/self-hosted-git-platforms-gitlab-gitea-forgejo-2026/

## GitLab Community Edition
- RAM: 4-8 ГБ+
- Полный DevOps-стек: CI/CD, security scanning, issue tracking
- Встроенный GitLab CI, Container Registry
- Бесплатный self-hosted
- Минусы: высокая ресурсоёмкость, требует администрирования

## Gitea
- RAM: 170 МБ — 1 ГБ
- Лёгкий, GitHub-подобный UI
- Gitea Actions (совместимы с GitHub Actions)
- Docker-установка, работает на 1 ГБ VPS
- Минусы: меньше функций чем GitLab

## Forgejo
- RAM: 170 МБ — 1 ГБ
- Fork Gitea с сильным community governance
- Некоммерческая организация (Forgejo e.V.)
- Forgejo Actions
- Privacy-focused
- Минусы: младший проект

## OneDev
- RAM: переменная
- AI-assisted code reviews
- Встроенные пайплайны, Kanban
- All-in-one DevOps
- Минусы: менее известный

## GitRiver
- RAM: ~100 МБ
- Написан на Rust, один бинарник ~35 МБ
- CI/CD с DAG, matrix, artifacts
- Package registries: npm, PyPI, Cargo, Maven, NuGet
- GitOps (RiverCD) для Kubernetes
- Community Edition — бесплатно, без лимитов
- Релиз 1.0: март 2026

## Сравнение
| Платформа | RAM | CI/CD | Package Registry | Ключевое преимущество |
|-----------|-----|-------|-------------------|----------------------|
| GitLab CE | 4-8+ ГБ | ✅ Полный | ✅ | Полный DevOps-стек |
| Gitea | 170 МБ-1 ГБ | ✅ Actions | Ограниченный | Лёгкость, простота |
| Forgejo | 170 МБ-1 ГБ | ✅ Actions | Ограниченный | Community governance |
| OneDev | Перем. | ✅ Встроенный | Ограниченный | AI-ревью, Kanban |
| GitRiver | ~100 МБ | ✅ YAML+DAG | ✅ Полный | Rust, мин. ресурсы |
