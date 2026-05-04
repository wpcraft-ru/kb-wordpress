:::::::::::::::::::: {.dc-doc-page__content role="main"}
# Создание сайта на WordPress с кластером базы данных MySQL® с помощью Terraform {#создание-сайта-на-wordpress-с-кластером-базы-данных-mysql-с-помощью-terraform .dc-doc-page-title .dc-doc-page__title}

::::::::::::: dc-doc-page__page-contributors
:::::: dc-contributors
::: dc-contributors__title
Статья создана
:::

:::: dc-contributor-avatars__one_contributor
[![](./Создание%20сайта%20на%20WordPress%20с%20кластером%20базы%20данных%20MySQL®%20с%20помощью%20Terraform%20_%20Yandex%20Cloud%20-%20Документация_files/yc_team.svg){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://yandex.cloud/ru){.g-link .g-link_view_normal}

::: {}
[Yandex Cloud](https://yandex.cloud/ru){.g-link .g-link_view_normal}
:::
::::
::::::

:::::: dc-contributors
::: dc-contributors__title
Улучшена
:::

:::: dc-contributor-avatars__one_contributor
[![](./Создание%20сайта%20на%20WordPress%20с%20кластером%20базы%20данных%20MySQL®%20с%20помощью%20Terraform%20_%20Yandex%20Cloud%20-%20Документация_files/11614750){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://github.com/kvendingoldo){.g-link .g-link_view_normal}

::: {}
[kvendingoldo](https://github.com/kvendingoldo){.g-link .g-link_view_normal}
:::
::::
::::::

:::: dc-updated-at-date
::: dc-updated-at-date__wrapper
Обновлена 9 апреля 2026 г.
:::
::::
:::::::::::::

::: {.dc-doc-page__content-mini-toc .yfm}
- [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#before-you-begin)
  - [Необходимые платные ресурсы](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#paid-resources)
- [Создайте инфраструктуру](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#deploy)
- [Настройте веб-сервер Nginx](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#configure-nginx)
- [Установите WordPress и дополнительные компоненты](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#install-wordpress)
- [Завершите настройку WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#configure-wordpress)
- [Проверьте работу сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#test-site)
- [Как удалить созданные ресурсы](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#clear-out)
:::

::: {.dc-doc-page__body .dc-doc-page__body_text-size_m .yfm}
Чтобы создать инфраструктуру для [сайта на WordPress с кластером базы данных MySQL®](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/) c помощью Terraform:

Чтобы настроить сайт на WordPress с кластером MySQL®:

1.  [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#before-you-begin).
2.  [Создайте инфраструктуру](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#deploy).
3.  [Настройте веб-сервер Nginx](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#configure-nginx).
4.  [Установите WordPress и дополнительные компоненты](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#install-wordpress).
5.  [Завершите настройку WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#configure-wordpress).
6.  [Проверьте работу сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#test-site).

Если созданные ресурсы вам больше не нужны, [удалите их](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#clear-out).

## [[Подготовьте облако к работе]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#before-you-begin){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Подготовьте облако к работе {#before-you-begin}

Зарегистрируйтесь в Yandex Cloud и создайте [платежный аккаунт](https://yandex.cloud/ru/docs/billing/concepts/billing-account):

1.  Перейдите в [консоль управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"}, затем войдите в Yandex Cloud или зарегистрируйтесь.
2.  На странице **[Yandex Cloud Billing[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://center.yandex.cloud/billing/accounts){.yfm-external-link target="_blank" rel="noreferrer noopener"}** убедитесь, что у вас подключен платежный аккаунт, и он находится в [статусе](https://yandex.cloud/ru/docs/billing/concepts/billing-account-statuses) `ACTIVE`{#inline-code-id-k5sibtc1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `TRIAL_ACTIVE`{#inline-code-id-wga1rsrm .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Если платежного аккаунта нет, [создайте его](https://yandex.cloud/ru/docs/billing/quickstart/) и [привяжите](https://yandex.cloud/ru/docs/billing/operations/pin-cloud) к нему облако.

Если у вас есть активный платежный аккаунт, вы можете создать или выбрать [каталог](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder), в котором будет работать ваша инфраструктура, на [странице облака[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/cloud){.yfm-external-link target="_blank" rel="noreferrer noopener"}.

[Подробнее об облаках и каталогах](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy).

### [[Необходимые платные ресурсы]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#paid-resources){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Необходимые платные ресурсы {#paid-resources}

- Виртуальная машина: использование вычислительных ресурсов, хранилища, публичного IP-адреса и операционной системы (см. [тарифы Compute Cloud](https://yandex.cloud/ru/docs/compute/pricing)).

- Кластер Managed Service for MySQL®: выделенные хостам вычислительные ресурсы, объем хранилища и резервных копий (см. [тарифы Managed Service for MySQL®](https://yandex.cloud/ru/docs/managed-mysql/pricing)).

- Публичные IP-адреса, если для хостов кластера включен публичный доступ (см. [тарифы Virtual Private Cloud](https://yandex.cloud/ru/docs/vpc/pricing)).

- Публичные [DNS-запросы](https://yandex.cloud/ru/docs/glossary/dns) и [зоны DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone) (см. [тарифы Cloud DNS](https://yandex.cloud/ru/docs/dns/pricing)).

## [[Создайте инфраструктуру]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#deploy){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Создайте инфраструктуру {#deploy}

[Terraform[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.terraform.io/){.yfm-external-link target="_blank" rel="noreferrer noopener"} позволяет быстро создать облачную инфраструктуру в Yandex Cloud и управлять ею с помощью файлов конфигураций. В файлах конфигураций хранится описание инфраструктуры на языке HCL (HashiCorp Configuration Language). При изменении файлов конфигураций Terraform автоматически определяет, какая часть вашей конфигурации уже развернута, что следует добавить или удалить.

Terraform распространяется под лицензией [Business Source License[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://github.com/hashicorp/terraform/blob/main/LICENSE){.yfm-external-link target="_blank" rel="noreferrer noopener"}, а [провайдер Yandex Cloud для Terraform[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://github.com/yandex-cloud/terraform-provider-yandex){.yfm-external-link target="_blank" rel="noreferrer noopener"} --- под лицензией [MPL-2.0[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.mozilla.org/en-US/MPL/2.0/){.yfm-external-link target="_blank" rel="noreferrer noopener"}.

Подробную информацию о ресурсах провайдера смотрите в документации на сайте [Terraform[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.terraform.io/docs/providers/yandex/index.html){.yfm-external-link target="_blank" rel="noreferrer noopener"} или в [зеркале](https://yandex.cloud/ru/docs/terraform){target="_blank" rel="noreferrer noopener"}.

Для создания инфраструктуры c помощью Terraform:

1.  [Установите Terraform](https://yandex.cloud/ru/docs/tutorials/infrastructure-management/terraform-quickstart#install-terraform), [получите данные для аутентификации](https://yandex.cloud/ru/docs/tutorials/infrastructure-management/terraform-quickstart#get-credentials) и укажите источник для установки провайдера Yandex Cloud (раздел [Настройте провайдер](https://yandex.cloud/ru/docs/tutorials/infrastructure-management/terraform-quickstart#configure-provider), шаг 1).

2.  Подготовьте файлы с описанием инфраструктуры:

    :::::::: {.yfm-tabs diplodoc-group="infrastructure_description" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ready" diplodoc-key="ready" role="tab" aria-controls="ywtjuat3" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Готовый архив
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="manual" diplodoc-key="manual" role="tab" aria-controls="f6uc83jz" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    Вручную
    :::
    :::::

    ::: {#ywtjuat3 .yfm-tab-panel .active role="tabpanel" aria-labelledby="ready" data-title="Готовый архив"}
    1.  Создайте папку для файлов.
    2.  Скачайте [архив[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://storage.yandexcloud.net/doc-files/wordpress-mysql.zip){.yfm-external-link target="_blank" rel="noreferrer noopener"} (1 КБ).
    3.  Разархивируйте архив в папку. В результате в ней должен появиться конфигурационный файл `wordpress-mysql.tf`{#inline-code-id-7goxtta7 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    :::

    ::: {#f6uc83jz .yfm-tab-panel role="tabpanel" aria-labelledby="manual" data-title="Вручную"}
    1.  Создайте папку для файлов.

    2.  Создайте в папке конфигурационный файл `wordpress-mysql.tf`{#inline-code-id-mbzbgmzv .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

        wordpress-mysql.tf

        ::::: yfm-cut-content
        :::: yfm-code-floating-container
        ``` hljs
        terraform {
          required_providers {
            yandex = {
              source  = "yandex-cloud/yandex"
              version = ">= 0.47.0"
            }
          }
        }

        provider "yandex" {
          zone = "ru-central1-a"
        }

        resource "yandex_compute_disk" "boot-disk" {
          name     = "bootvmdisk"
          type     = "network-hdd"
          zone     = "ru-central1-a"
          size     = "20"
          image_id = "<идентификатор_образа>"
        }

        resource "yandex_compute_instance" "vm-wordpress-mysql" {
          name        = "wp-mysql-tutorial-web"
          platform_id = "standard-v3"
          zone        = "ru-central1-a"

          resources {
            core_fraction = 20
            cores         = 2
            memory        = 2
          }

          boot_disk {
            disk_id = yandex_compute_disk.boot-disk.id
          }

          network_interface {
            subnet_id          = yandex_vpc_subnet.subnet-1.id
            security_group_ids = ["${yandex_vpc_security_group.sg-1.id}"]
            nat                = true
          }

          metadata = {
            ssh-keys = "<имя_пользователя>:<содержимое_SSH-ключа>"
          }
        }

        resource "yandex_mdb_mysql_cluster" "wp-cluster" {
          name                = "wp-mysql-tutorial-db-cluster"
          environment         = "PRESTABLE"
          network_id          = yandex_vpc_network.network-1.id
          version             = "8.0"
          security_group_ids  = ["${yandex_vpc_security_group.sg-1.id}"]

          resources {
            resource_preset_id = "s2.small"
            disk_type_id       = "network-ssd"
            disk_size          = "10"
          }

          host {
            zone             = "ru-central1-a"
            subnet_id        = yandex_vpc_subnet.subnet-1.id
            assign_public_ip = false
          }

          host {
            zone             = "ru-central1-b"
            subnet_id        = yandex_vpc_subnet.subnet-2.id
            assign_public_ip = false
          }

          host {
            zone             = "ru-central1-d"
            subnet_id        = yandex_vpc_subnet.subnet-3.id
            assign_public_ip = false
          }
        }

        resource "yandex_mdb_mysql_database" "wp-db" {
          cluster_id = yandex_mdb_mysql_cluster.wp-cluster.id
          name       = "wp-mysql-tutorial-db"
        }

        resource "yandex_mdb_mysql_user" "wp-user" {
          cluster_id            = yandex_mdb_mysql_cluster.wp-cluster.id
          name                  = "wordpress"
          password              = "password"
          authentication_plugin = "MYSQL_NATIVE_PASSWORD"
          permission {
            database_name = yandex_mdb_mysql_database.wp-db.name
            roles         = ["ALL"]
          }
        }

        resource "yandex_vpc_security_group" "sg-1" {
          name        = "wordpress"
          description = "Description for security group"
          network_id  = yandex_vpc_network.network-1.id

          ingress {
            protocol       = "TCP"
            description    = "ext-http"
            v4_cidr_blocks = ["0.0.0.0/0"]
            port           = 80
          }

          ingress {
            protocol       = "TCP"
            description    = "ext-ssh"
            v4_cidr_blocks = ["0.0.0.0/0"]
            port           = 22
          }

          ingress {
            protocol       = "TCP"
            description    = "ext-msql"
            v4_cidr_blocks = ["0.0.0.0/0"]
            port           = 3306
          }

          ingress {
            protocol       = "TCP"
            description    = "ext-https"
            v4_cidr_blocks = ["0.0.0.0/0"]
            port           = 443
          }

          egress {
            protocol       = "ANY"
            description    = "any"
            v4_cidr_blocks = ["0.0.0.0/0"]
          }
        }

        resource "yandex_vpc_network" "network-1" {
          name = "network1"
        }

        resource "yandex_vpc_subnet" "subnet-1" {
          name           = "subnet1"
          zone           = "ru-central1-a"
          network_id     = yandex_vpc_network.network-1.id
          v4_cidr_blocks = ["192.168.1.0/24"]
        }

        resource "yandex_vpc_subnet" "subnet-2" {
          name           = "subnet2"
          zone           = "ru-central1-b"
          network_id     = yandex_vpc_network.network-1.id
          v4_cidr_blocks = ["192.168.2.0/24"]
        }

        resource "yandex_vpc_subnet" "subnet-3" {
          name           = "subnet3"
          zone           = "ru-central1-d"
          network_id     = yandex_vpc_network.network-1.id
          v4_cidr_blocks = ["192.168.3.0/24"]
        }

        resource "yandex_dns_zone" "zone-1" {
          name        = "example-zone-1"
          description = "Public zone"
          zone        = "example.com."
          public      = true
        }

        resource "yandex_dns_recordset" "rs-1" {
          zone_id = yandex_dns_zone.zone-1.id
          name    = "example.com."
          ttl     = 600
          type    = "A"
          data    = ["${yandex_compute_instance.vm-wordpress-mysql.network_interface.0.nat_ip_address}"]
        }

        resource "yandex_dns_recordset" "rs-2" {
          zone_id = yandex_dns_zone.zone-1.id
          name    = "www"
          ttl     = 600
          type    = "CNAME"
          data    = ["example.com"]
        }
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTU5Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0xNTkiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTE1OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTE1OS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::
        :::::
    :::
    ::::::::

    Более подробную информацию о параметрах используемых ресурсов в Terraform см. в документации провайдера:

    - [Сеть](https://yandex.cloud/ru/docs/vpc/concepts/network#network) --- [yandex_vpc_network](https://yandex.cloud/ru/docs/terraform/resources/vpc_network){target="_blank" rel="noreferrer noopener"}.
    - [Подсети](https://yandex.cloud/ru/docs/vpc/concepts/network#subnet) --- [yandex_vpc_subnet](https://yandex.cloud/ru/docs/terraform/resources/vpc_subnet){target="_blank" rel="noreferrer noopener"}.
    - [Группы безопасности](https://yandex.cloud/ru/docs/vpc/concepts/security-groups) --- [yandex_vpc_security_group](https://yandex.cloud/ru/docs/terraform/resources/vpc_security_group){target="_blank" rel="noreferrer noopener"}.
    - [Виртуальная машина](https://yandex.cloud/ru/docs/compute/concepts/vm) --- [yandex_compute_instance](https://yandex.cloud/ru/docs/terraform/resources/compute_instance){target="_blank" rel="noreferrer noopener"}.
    - [Кластер MySQL®](https://yandex.cloud/ru/docs/managed-mysql/concepts/) --- [yandex_mdb_mysql_cluster](https://yandex.cloud/ru/docs/terraform/resources/mdb_mysql_cluster){target="_blank" rel="noreferrer noopener"}.
    - [БД PostgreSQL](https://yandex.cloud/ru/docs/managed-mysql) --- [yandex_mdb_mysql_database](https://yandex.cloud/ru/docs/terraform/resources/mdb_mysql_database){target="_blank" rel="noreferrer noopener"}.
    - [Пользователь БД](https://yandex.cloud/ru/docs/managed-mysql/concepts/user-rights) --- [yandex_mdb_mysql_user](https://yandex.cloud/ru/docs/terraform/resources/mdb_mysql_user){target="_blank" rel="noreferrer noopener"}.
    - [Зона DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone) --- [yandex_dns_zone](https://yandex.cloud/ru/docs/terraform/resources/dns_zone){target="_blank" rel="noreferrer noopener"}.
    - [Ресурсная запись DNS](https://yandex.cloud/ru/docs/dns/concepts/resource-record) --- [yandex_dns_recordset](https://yandex.cloud/ru/docs/terraform/resources/dns_recordset){target="_blank" rel="noreferrer noopener"}.

3.  В блоке `metadata`{#inline-code-id-zdkbguij .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} укажите [метаданные](https://yandex.cloud/ru/docs/compute/concepts/vm-metadata) для создания ВМ `<имя_пользователя>:<содержимое_SSH-ключа>`{#inline-code-id-wvzjz7n3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Указанное имя пользователя не играет роли, ключ будет присвоен пользователю, который задан в конфигурации образа. В разных образах это разные пользователи. Подробнее см. в разделе [Ключи, обрабатываемые в публичных образах Yandex Cloud](https://yandex.cloud/ru/docs/compute/concepts/metadata/public-image-keys).

4.  В блоке `boot_disk`{#inline-code-id-zban2k6a .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} укажите идентификатор одного из [образов](https://yandex.cloud/ru/docs/compute/operations/images-with-pre-installed-software/get-list) ВМ с нужным набором компонентов:

    - [Debian 11](https://yandex.cloud/ru/marketplace/products/yc/debian-11).
    - [Ubuntu 20.04 LTS](https://yandex.cloud/ru/marketplace/products/yc/ubuntu-20-04-lts).
    - [CentOS 7](https://yandex.cloud/ru/marketplace/products/yc/centos-7).

5.  Создайте ресурсы:

    1.  В терминале перейдите в директорию с конфигурационным файлом.

    2.  Проверьте корректность конфигурации с помощью команды:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        terraform validate
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMjU4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0yNTgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTI1OCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTI1OC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

        Если конфигурация является корректной, появится сообщение:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        Success! The configuration is valid.
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMjYyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0yNjIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTI2MiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTI2Mi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    3.  Выполните команду:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        terraform plan
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMjY4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0yNjgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTI2OCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTI2OC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

        В терминале будет выведен список ресурсов с параметрами. На этом этапе изменения не будут внесены. Если в конфигурации есть ошибки, Terraform на них укажет.

    4.  Примените изменения конфигурации:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        terraform apply
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMjc3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0yNzciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTI3NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTI3Ny5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    5.  Подтвердите изменения: введите в терминале слово `yes`{#inline-code-id-ziqlyedx .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и нажмите **Enter**.

После создания инфраструктуры, [настройте веб-сервер Nginx](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#configure-nginx).

## [[Настройте веб-сервер Nginx]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#configure-nginx){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Настройте веб-сервер Nginx {#configure-nginx}

После того как ВМ `wp-mysql-tutorial-web`{#inline-code-id-n034rle2 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} перейдет в статус `RUNNING`{#inline-code-id-leq7r18a .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

1.  В блоке **Сеть** на странице ВМ в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} найдите публичный IP-адрес ВМ.

2.  [Подключитесь](https://yandex.cloud/ru/docs/compute/operations/vm-connect/ssh) к ВМ по протоколу SSH. Для этого можно использовать утилиту `ssh`{#inline-code-id-vah0z5nn .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} в Linux и macOS и программу [PuTTY[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.chiark.greenend.org.uk/~sgtatham/putty/){.yfm-external-link target="_blank" rel="noreferrer noopener"} для Windows.

    Рекомендуемый способ аутентификации при подключении по SSH --- с помощью пары ключей. Не забудьте настроить использование созданной пары ключей: закрытый ключ должен соответствовать открытому ключу, переданному на ВМ.

3.  Установите Nginx, менеджер процессов PHP-FPM и дополнительные пакеты:

    :::::::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu" diplodoc-key="ubuntu" role="tab" aria-controls="str2ybi6" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos" diplodoc-key="centos" role="tab" aria-controls="fk7pq1os" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::::: {#str2ybi6 .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu" data-title="Debian/Ubuntu"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo apt-get update
    sudo apt-get install -y nginx-full php-fpm php-mysql
    sudo systemctl enable nginx
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzI0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zMjQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTMyNCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTMyNC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::

    ::::: {#fk7pq1os .yfm-tab-panel role="tabpanel" aria-labelledby="centos" data-title="CentOS"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo yum -y install epel-release
    sudo yum -y install nginx
    sudo rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
    sudo yum -y --enablerepo=remi-php74 install php php-mysql php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
    sudo yum -y --enablerepo=remi-php74 install php-fpm
    sudo systemctl enable nginx
    sudo systemctl enable php-fpm
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzI3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zMjciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTMyNyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTMyNy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::
    ::::::::::::

4.  Задайте настройки веб-сервера в конфигурационных файлах Nginx:

    :::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-1" diplodoc-key="ubuntu" role="tab" aria-controls="voema8cg" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos-1" diplodoc-key="centos" role="tab" aria-controls="ydao6z9z" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::: {#voema8cg .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-1" data-title="Debian/Ubuntu"}
    1.  Вы можете отредактировать файл с помощью редактора `nano`{#inline-code-id-ofarh9za .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo nano /etc/nginx/sites-available/wordpress
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzUwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zNTAiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM1MCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM1MC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    2.  Приведите файл к виду:

        :::: yfm-code-floating-container
        ``` {.hljs .nginx}
        server {
          listen 80 default_server;

          root /var/www/wordpress;
          index index.php;

          server_name <DNS-имя_сервера>;

          location / {
            try_files $uri $uri/ =404;
          }

          error_page 404 /404.html;
          error_page 500 502 503 504 /50x.html;
          location = /50x.html {
            root /usr/share/nginx/html;
          }

          location ~ \.php$ {
            try_files $uri =404;
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
          }
        }
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzU2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zNTYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM1NiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM1Ni5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    3.  Разрешите запуск вашего сайта:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo rm /etc/nginx/sites-enabled/default
        sudo ln -s /etc/nginx/sites-available/wordpress /etc/nginx/sites-enabled/
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzYyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zNjIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM2MiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM2Mi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::
    :::

    ::: {#ydao6z9z .yfm-tab-panel role="tabpanel" aria-labelledby="centos-1" data-title="CentOS"}
    Вы можете отредактировать файлы `nginx.conf`{#inline-code-id-ocs8ldyu .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `wordpress.conf`{#inline-code-id-2rynqeja .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} с помощью редактора `nano`{#inline-code-id-dp9lsoxs .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    1.  Откройте файл `nginx.conf`{#inline-code-id-zfljoopx .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo nano /etc/nginx/nginx.conf
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzc1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zNzUiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM3NSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM3NS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    2.  Приведите файл к виду:

        :::: yfm-code-floating-container
        ``` {.hljs .nginx}
        user nginx;
        worker_processes auto;
        error_log /var/log/nginx/error.log;
        pid /run/nginx.pid;
        include /usr/share/nginx/modules/*.conf;

        events {
          worker_connections 1024;
        }

        http {
          log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                            '$status $body_bytes_sent "$http_referer" '
                            '"$http_user_agent" "$http_x_forwarded_for"';

          access_log  /var/log/nginx/access.log main;

          sendfile            on;
          tcp_nopush          on;
          tcp_nodelay         on;
          keepalive_timeout   65;
          types_hash_max_size 2048;

          include             /etc/nginx/mime.types;
          default_type        application/octet-stream;

          include /etc/nginx/conf.d/*.conf;
        }
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzgxIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zODEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM4MSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM4MS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    3.  Откройте файл `wordpress.conf`{#inline-code-id-blj6vkin .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo nano /etc/nginx/conf.d/wordpress.conf
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzg3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zODciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM4NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM4Ny5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    4.  Приведите файл к виду:

        :::: yfm-code-floating-container
        ``` {.hljs .nginx}
        server {
          listen 80 default_server;

          root /usr/share/nginx/wordpress/;
          index index.php;

          server_name <DNS-имя_сервера>;

          location / {
            try_files $uri $uri/ =404;
          }

          error_page 404 /404.html;
          error_page 500 502 503 504 /50x.html;
          location = /50x.html {
            root /usr/share/nginx/html;
          }

          location ~ \.php$ {
            try_files $uri =404;
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include fastcgi_params;
          }
        }
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzkzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zOTMiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM5MyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM5My5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::
    :::
    ::::::::

## [[Установите WordPress и дополнительные компоненты]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#install-wordpress){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Установите WordPress и дополнительные компоненты {#install-wordpress}

1.  Загрузите и распакуйте последнюю версию WordPress:

    :::::::::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu" diplodoc-key="ubuntu" role="tab" aria-controls="zqecvxya" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos" diplodoc-key="centos" role="tab" aria-controls="orx74f82" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::::: {#zqecvxya .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu" data-title="Debian/Ubuntu"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    wget https://wordpress.org/latest.tar.gz
    tar -xzf latest.tar.gz
    mv wordpress/wp-config-sample.php wordpress/wp-config.php
    sudo mv wordpress /var/www/wordpress
    sudo chown -R www-data:www-data /var/www/wordpress
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDE4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MTgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQxOCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQxOC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::

    ::::::: {#orx74f82 .yfm-tab-panel role="tabpanel" aria-labelledby="centos" data-title="CentOS"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    curl https://wordpress.org/latest.tar.gz --output latest.tar.gz
    tar -xzf latest.tar.gz
    mv wordpress/wp-config-sample.php wordpress/wp-config.php
    sudo mv wordpress /usr/share/nginx/wordpress
    sudo chown -R nginx:nginx /usr/share/nginx/wordpress/
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDIxIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MjEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQyMSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQyMS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Измените настройки SELinux:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo semanage fcontext -a -t httpd_sys_content_t "/usr/share/nginx/wordpress(/.*)?"
    sudo semanage fcontext -a -t httpd_sys_rw_content_t "/usr/share/nginx/wordpress(/.*)?"
    sudo restorecon -R /usr/share/nginx/wordpress
    sudo setsebool -P httpd_can_network_connect 1
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDI1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MjUiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQyNSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQyNS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::::
    ::::::::::::::

2.  Получите ключи безопасности WordPress:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    curl --silent https://api.wordpress.org/secret-key/1.1/salt/
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDMzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MzMiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQzMyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQzMy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Сохраните вывод команды --- полученные ключи будут нужны на следующем шаге.

3.  Добавьте ключи безопасности в конфигурационный файл WordPress `wp-config.php`{#inline-code-id-zgkv2v02 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Вы можете отредактировать файл с помощью редактора `nano`{#inline-code-id-hq05jv24 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::::::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-1" diplodoc-key="ubuntu" role="tab" aria-controls="3rdsmsqh" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos-1" diplodoc-key="centos" role="tab" aria-controls="4huu0gu6" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::::: {#3rdsmsqh .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-1" data-title="Debian/Ubuntu"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo nano /var/www/wordpress/wp-config.php
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDUyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NTIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ1MiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ1Mi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::

    ::::: {#4huu0gu6 .yfm-tab-panel role="tabpanel" aria-labelledby="centos-1" data-title="CentOS"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo nano /usr/share/nginx/wordpress/wp-config.php
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDU1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NTUiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ1NSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ1NS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::
    ::::::::::::

    Замените блок конфигурации на значения, полученные на предыдущем шаге:

    :::: yfm-code-floating-container
    ``` {.hljs .php}
    define('AUTH_KEY',         't vz,|............R lZ5]');
    define('SECURE_AUTH_KEY',  '@r&pPD............dK-A%=');
    define('LOGGED_IN_KEY',    '%6TuLl............9>/dNE');
    define('NONCE_KEY',        'DO(u.H............$?ja-e');
    define('AUTH_SALT',        '|G Vo<............Xeb.~y');
    define('SECURE_AUTH_SALT', 'Y5tIYA............7Lxf8J');
    define('LOGGED_IN_SALT',   'gR]>WZ............<>|;YY');
    define('NONCE_SALT',       '=]nQIb............HLT2:9');
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDYxIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NjEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ2MSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ2MS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

4.  Перейдите к блоку конфигурации подключения к кластеру `wp-mysql-tutorial-db-cluster`{#inline-code-id-v3nu46jj .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::: yfm-code-floating-container
    ``` {.hljs .php}
    // ** MySQL® settings - You can get this info from your web host. ** //
    /** The name of the database for WordPress. */

    define( 'DB_NAME', '<DB_NAME>' );
    /** MySQL® database username. */
    define( 'DB_USER', '<DB_USER>' );

    /** MySQL® database password. */
    define( 'DB_PASSWORD', '<DB_PASSWORD>' );

    /** MySQL® hostname. */
    define( 'DB_HOST', '<DB_HOST>' );
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDY3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NjciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ2NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ2Ny5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Укажите в файле вместо:

    - `<DB_NAME>`{#inline-code-id-xs720h00 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- имя БД `wp-mysql-tutorial-db`{#inline-code-id-fqu8f1vz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    - `<DB_USER>`{#inline-code-id-qqfqujn6 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- имя пользователя `wordpress`{#inline-code-id-ifn8j8es .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    - `<DB_PASSWORD>`{#inline-code-id-dxmlx10k .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- пароль, заданный при создании кластера БД.

    - `<DB_HOST>`{#inline-code-id-lk6zh9mz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- имя хоста MySQL® вида `XXXX-XXXXXXXXXX.mdb.yandexcloud.net`{#inline-code-id-0nrnji5n .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

      Чтобы узнать FQDN хоста MySQL®:

      :::::::::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
      ::::: {.yfm-tab-list role="tablist"}
      ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="xyxlzi7e" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
      Консоль управления
      :::

      ::: {.yfm-tab .yfm-tab-group diplodoc-id="cli" diplodoc-key="cli" role="tab" aria-controls="nykvigwg" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
      CLI
      :::
      :::::

      ::: {#xyxlzi7e .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
      1.  Перейдите на страницу кластера MySQL® в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"}.
      2.  На вкладке **Базы данных** рядом с БД нажмите значок ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxMCIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDIxIDEwIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMjgyIDVjMC0xLjEwNS45MTgtMiAyLjA1MS0yIDEuMTM0IDAgMi4wNTIuODk1IDIuMDUyIDJzLS45MTggMi0yLjA1MiAyQzMuMiA3IDIuMjgyIDYuMTA1IDIuMjgyIDVabTguMjA1LTJjLTEuMTMzIDAtMi4wNTEuODk1LTIuMDUxIDJzLjkxOCAyIDIuMDUxIDIgMi4wNTEtLjg5NSAyLjA1MS0yLS45MTgtMi0yLjA1LTJabTYuMTU0IDBjLTEuMTMzIDAtMi4wNTEuODk1LTIuMDUxIDJzLjkxOCAyIDIuMDUxIDIgMi4wNTEtLjg5NSAyLjA1MS0yLS45MTgtMi0yLjA1MS0yWiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==) → **Подключиться**.
      3.  Найдите строчку `mysql --host=ХХХХ-ХХХХХХХХХХ.mdb.yandexcloud.net`{#inline-code-id-eha3lgy3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, где `ХХХХ-ХХХХХХХХХХ.mdb.yandexcloud.net`{#inline-code-id-p6z4bdws .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- это FQDN хоста с ролью `MASTER`{#inline-code-id-f9nzt32h .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      :::

      ::::::: {#nykvigwg .yfm-tab-panel role="tabpanel" aria-labelledby="cli" data-title="CLI"}
      [Получите список хостов](https://yandex.cloud/ru/docs/managed-mysql/operations/hosts#list) и скопируйте `NAME`{#inline-code-id-9zk2alls .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} хоста с ролью `MASTER`{#inline-code-id-8ps0ocbm .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

      :::: yfm-code-floating-container
      ``` {.hljs .bash}
      yc managed-mysql host list --cluster-name <имя_кластера_MySQL®>
      ```

      ::: yfm-code-floating
      ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTI2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01MjYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTUyNiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTUyNi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
      :::
      ::::

      :::: yfm-code-floating-container
      ``` {.hljs .text}
      +------------------------+----------------------+---------+--------+-------------------+-----------+
      |           NAME         |      CLUSTER ID      |  ROLE   | HEALTH |      ZONE ID      | PUBLIC IP |
      +------------------------+----------------------+---------+--------+-------------------+-----------+
      | rc1a-...mdb.yandexcloud.net | c9quhb1l32unm1sdn0in | MASTER  | ALIVE  | ru-central1-a | false     |
      | rc1b-...mdb.yandexcloud.net | c9quhb1l32unm1sdn0in | REPLICA | ALIVE  | ru-central1-b | false     |
      +------------------------+----------------------+---------+--------+-------------------+-----------+
      ```

      ::: yfm-code-floating
      ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTI3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01MjciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTUyNyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTUyNy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
      :::
      ::::
      :::::::
      ::::::::::::

5.  Перезапустите Nginx и PHP-FPM:

    :::::::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-2" diplodoc-key="ubuntu" role="tab" aria-controls="xbrkdmw1" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos-2" diplodoc-key="centos" role="tab" aria-controls="mx7eo23b" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::::: {#xbrkdmw1 .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-2" data-title="Debian/Ubuntu"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo systemctl restart nginx.service
    sudo systemctl restart php7.4-fpm.service
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTQ3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01NDciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTU0NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTU0Ny5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::

    ::::: {#mx7eo23b .yfm-tab-panel role="tabpanel" aria-labelledby="centos-2" data-title="CentOS"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo systemctl restart nginx.service
    sudo systemctl restart php-fpm.service
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTUwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01NTAiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTU1MCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTU1MC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::
    ::::::::::::

## [[Завершите настройку WordPress]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#configure-wordpress){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Завершите настройку WordPress {#configure-wordpress}

1.  В блоке **Сеть** на странице ВМ в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} найдите публичный IP-адрес ВМ.
2.  Перейдите по адресу ВМ в браузере.
3.  Выберите язык и нажмите кнопку **Продолжить**.
4.  Заполните информацию для доступа к сайту:
    - Укажите любое название сайта, например, `wp-your-project`{#inline-code-id-suc1wnnm .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - Укажите имя пользователя, которое будет использоваться для входа в административную панель, например, `admin`{#inline-code-id-nluhpowe .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - Укажите пароль, который будет использоваться для входа в административную панель.
    - Укажите вашу электронную почту.
5.  Нажмите кнопку **Установить WordPress**.
6.  Если установка прошла успешно, нажмите кнопку **Войти**.
7.  Войдите на сайт, используя указанные на прошлых шагах имя пользователя и пароль. После этого откроется административная панель, в которой можно приступать к работе с вашим сайтом.

## [[Проверьте работу сайта]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#test-site){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Проверьте работу сайта {#test-site}

Чтобы проверить работу сайта, введите в браузере его IP-адрес или доменное имя:

- `http://<публичный_IP-адрес_ВМ>`{#inline-code-id-ke4iadqx .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
- `http://www.example.com`{#inline-code-id-ig6xess2 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

Для входа в панель управления WordPress используйте адрес `http://www.example.com/wp-admin/`{#inline-code-id-chae72gm .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

## [[Как удалить созданные ресурсы]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#clear-out){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Как удалить созданные ресурсы {#clear-out}

Чтобы перестать платить за созданные ресурсы:

1.  Откройте конфигурационный файл `single-node-file-server.tf`{#inline-code-id-azd8u59f .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и удалите описание создаваемой инфраструктуры из файла.

2.  Примените изменения:

    1.  В терминале перейдите в директорию с конфигурационным файлом.

    2.  Проверьте корректность конфигурации с помощью команды:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        terraform validate
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjY0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02NjQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY2NCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY2NC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

        Если конфигурация является корректной, появится сообщение:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        Success! The configuration is valid.
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjY4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02NjgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY2OCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY2OC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    3.  Выполните команду:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        terraform plan
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjc0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02NzQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY3NCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY3NC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

        В терминале будет выведен список ресурсов с параметрами. На этом этапе изменения не будут внесены. Если в конфигурации есть ошибки, Terraform на них укажет.

    4.  Примените изменения конфигурации:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        terraform apply
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjgzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02ODMiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY4MyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY4My5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    5.  Подтвердите изменения: введите в терминале слово `yes`{#inline-code-id-diqardi2 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и нажмите **Enter**.

#### [[См. также]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform#see-also){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}См. также {#see-also}

- [Создание сайта на WordPress с кластером базы данных MySQL® с помощью консоли управления](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console).
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
::::::::::::::::::::
