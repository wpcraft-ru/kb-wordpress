::::::::::::::: {.dc-doc-page__content role="main"}
# Создание сайта на WordPress с кластером базы данных MySQL® {#создание-сайта-на-wordpress-с-кластером-базы-данных-mysql .dc-doc-page-title .dc-doc-page__title}

::::::::: dc-doc-page__page-contributors
:::::: dc-contributors
::: dc-contributors__title
Статья создана
:::

:::: {.dc-contributor-avatars__one_contributor .dc-contributor-avatars__one_contributor_onlyAuthor}
[![](./Сайт%20WordPress%20с%20БД%20MySQL%20-%20Инструкция%20_%20Yandex%20Cloud%20-%20Документация_files/yc_team.svg){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://yandex.cloud/ru){.g-link .g-link_view_normal}

::: {}
[Yandex Cloud](https://yandex.cloud/ru){.g-link .g-link_view_normal}
:::
::::
::::::

:::: dc-updated-at-date
::: dc-updated-at-date__wrapper
Обновлена 11 июля 2024 г.
:::
::::
:::::::::

::: {.dc-doc-page__body .dc-doc-page__body_text-size_m .yfm}
С помощью этой инструкции вы научитесь разворачивать сайт на базе CMS WordPress с [кластером баз данных](https://yandex.cloud/ru/docs/managed-mysql/concepts/) под управлением СУБД MySQL® в инфраструктуре Yandex Cloud.

Вы можете создать инфраструктуру для сайта на WordPress с кластером базы данных MySQL® с помощью одного из инструментов:

- [Консоль управления](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console) --- используйте этот способ, чтобы пошагово создать инфраструктуру в консоли управления Yandex Cloud.
- [Terraform](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform) --- используйте этот способ, чтобы упростить создание ресурсов и управление ими, используя подход «инфраструктура как код» (IaC). Скачайте пример конфигурации Terraform, а затем разверните инфраструктуру с помощью [Terraform-провайдера Yandex Cloud](https://yandex.cloud/ru/docs/terraform){target="_blank" rel="noreferrer noopener"}.
:::

:::::: dc-doc-page__feedback
::::: {.dc-feedback__container .dc-feedback__container_view_wide}
:::: {.dc-feedback__container-col .dc-feedback__container-col_view_wide}
### Была ли статья полезна? {#была-ли-статья-полезна .dc-feedback__title .dc-feedback__title_view_wide}

::: {.dc-feedback__controls .dc-feedback__controls_view_wide}
[[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTQgNyAyLjk0LTUuMDQxYTEuOTMyIDEuOTMyIDAgMCAxIDMuNTYgMS4zNzhMMTAuMjUgNC41IDkuOTMgNmgyLjk0YTIgMiAwIDAgMSAxLjkyNyAyLjUzNWwtLjg3OSAzLjE2MkE0IDQgMCAwIDEgOS41OTYgMTQuNkw0LjUgMTR6bTUuNzcxIDYuMTEtMy44NjMtLjQ1NS0uMzc5LTUuMyAyLjcwOC00LjY0YS40MzIuNDMyIDAgMCAxIC43OTYuMzA4bC0uNTcxIDIuNjYzTDguMDczIDcuNWg0Ljc5NmEuNS41IDAgMCAxIC40ODIuNjM0bC0uODc5IDMuMTYyYTIuNSAyLjUgMCAwIDEtMi43IDEuODE0TTIuNzQ4IDcuNDQ3YS43NS43NSAwIDEgMC0xLjQ5Ni4xMDZsLjUgN2EuNzUuNzUgMCAwIDAgMS40OTYtLjEwNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.g-button__icon-inner}]{.g-button__icon .g-button__icon_side_start}[Да]{.g-button__text}

[[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEyIDktMi45NCA1LjA0MWExLjkzMiAxLjkzMiAwIDAgMS0zLjU2LTEuMzc4bC4yNS0xLjE2My4zMjEtMS41aC0yLjk0YTIgMiAwIDAgMS0xLjkyNy0yLjUzNWwuODc5LTMuMTYyQTQgNCAwIDAgMSA2LjQwNCAxLjRMMTEuNSAyek02LjIyOSAyLjg5bDMuODYzLjQ1NS4zNzkgNS4zLTIuNzA4IDQuNjRhLjQzMi40MzIgMCAwIDEtLjc5Ni0uMzA4bC41NzEtMi42NjMuMzg5LTEuODE0SDMuMTNhLjUuNSAwIDAgMS0uNDgyLS42MzRsLjg3OS0zLjE2MmEyLjUgMi41IDAgMCAxIDIuNy0xLjgxNG03LjAyMyA1LjY2M2EuNzUuNzUgMCAxIDAgMS40OTYtLjEwNmwtLjUtN2EuNzUuNzUgMCAwIDAtMS40OTYuMTA2eiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==)]{.g-button__icon-inner}]{.g-button__icon .g-button__icon_side_start}[Нет]{.g-button__text}
:::
::::
:::::
::::::
:::::::::::::::
