:::::::::::::::::::::::::::::::::::::::::::::::::::::::: {.dc-doc-page__content role="main"}
# Установка WordPress High Availability с помощью Cloud Apps {#установка-wordpress-high-availability-с-помощью-cloud-apps .dc-doc-page-title .dc-doc-page__title}

::::::::::::: dc-doc-page__page-contributors
:::::: dc-contributors
::: dc-contributors__title
Статья создана
:::

:::: dc-contributor-avatars__one_contributor
[![](./Установка%20WordPress%20_%20Yandex%20Cloud%20-%20Документация_files/yc_team.svg){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://yandex.cloud/ru){.g-link .g-link_view_normal}

::: {}
[Yandex Cloud](https://yandex.cloud/ru){.g-link .g-link_view_normal}
:::
::::
::::::

:::::: dc-contributors
::: dc-contributors__title
Улучшена
:::

::: dc-contributor-avatars__displayed_avatars
[![](./Установка%20WordPress%20_%20Yandex%20Cloud%20-%20Документация_files/84874492){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://github.com/mmerihsesh){.g-link .g-link_view_normal}[![](./Установка%20WordPress%20_%20Yandex%20Cloud%20-%20Документация_files/67499999){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://github.com/danilanekrasov){.g-link .g-link_view_normal}
:::

::: dc-contributor-avatars__hidden_avatars
:::
::::::

:::: dc-updated-at-date
::: dc-updated-at-date__wrapper
Обновлена 14 апреля 2026 г.
:::
::::
:::::::::::::

::: {.dc-doc-page__content-mini-toc .yfm}
- [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#before-you-begin)
  - [Необходимые платные ресурсы](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#paid-resources)
- [Создайте сеть и подсети VPC](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#create-network)
- [Настройте DNS-зону](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#configure-dns)
- [Создайте секрет Yandex Lockbox](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#create-secret)
- [Установите WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#install-wordpress)
- [Настройте WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#configure-wordpress)
- [Проверьте результат](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#check-result)
- [Как удалить созданные ресурсы](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#clear-out)
:::

::::::::::::::::::::::::::::::::::::::: {.dc-doc-page__body .dc-doc-page__body_text-size_m .yfm}
С помощью этого руководства вы установите и настроите [WordPress[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://wordpress.org/){.yfm-external-link target="_blank" rel="noreferrer noopener"} --- систему управления контентом, подходящую как для личных блогов, так и для крупных медиа и коммерческих проектов. Приложение [Cloud Apps](https://yandex.cloud/ru/docs/cloud-apps) будет развернуто на виртуальной машине с автоматической настройкой всех необходимых ресурсов, включая базу данных [Yandex Managed Service for MySQL®](https://yandex.cloud/ru/docs/managed-mysql), веб-сервер и интеграцию с сервисом [Yandex Cloud Postbox](https://yandex.cloud/ru/docs/postbox).

Чтобы установить WordPress:

1.  [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#before-you-begin).
2.  [Создайте сеть и подсети VPC](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#create-network).
3.  [Настройте DNS-зону](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#configure-dns).
4.  [Создайте секрет Yandex Lockbox](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#create-secret).
5.  [Установите WordPress, используя Cloud Apps](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#install-wordpress).
6.  [Настройте WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#configure-wordpress).
7.  [Проверьте результат](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#check-result).

Если созданные ресурсы вам больше не нужны, [удалите их](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#clear-out).

## [[Подготовьте облако к работе]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#before-you-begin){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Подготовьте облако к работе {#before-you-begin}

Зарегистрируйтесь в Yandex Cloud и создайте [платежный аккаунт](https://yandex.cloud/ru/docs/billing/concepts/billing-account):

1.  Перейдите в [консоль управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"}, затем войдите в Yandex Cloud или зарегистрируйтесь.
2.  На странице **[Yandex Cloud Billing[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://center.yandex.cloud/billing/accounts){.yfm-external-link target="_blank" rel="noreferrer noopener"}** убедитесь, что у вас подключен платежный аккаунт, и он находится в [статусе](https://yandex.cloud/ru/docs/billing/concepts/billing-account-statuses) `ACTIVE`{#inline-code-id-r4n2l77a .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `TRIAL_ACTIVE`{#inline-code-id-w14k7ltw .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Если платежного аккаунта нет, [создайте его](https://yandex.cloud/ru/docs/billing/quickstart/) и [привяжите](https://yandex.cloud/ru/docs/billing/operations/pin-cloud) к нему облако.

Если у вас есть активный платежный аккаунт, вы можете создать или выбрать [каталог](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder), в котором будет работать ваша инфраструктура, на [странице облака[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/cloud){.yfm-external-link target="_blank" rel="noreferrer noopener"}.

[Подробнее об облаках и каталогах](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy).

### [[Необходимые платные ресурсы]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#paid-resources){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Необходимые платные ресурсы {#paid-resources}

В стоимость поддержки создаваемой инфраструктуры входят:

- Плата за использование виртуальной машины и хранение данных на диске (см. [тарифы Yandex Compute Cloud](https://yandex.cloud/ru/docs/compute/pricing)).
- Плата за использование публичной DNS-зоны и за публичные DNS-запросы (см. [тарифы Yandex Cloud DNS](https://yandex.cloud/ru/docs/dns/pricing)).
- Плата за выделенные хостам вычислительные ресурсы, объем хранилища и резервных копий (см. [тарифы Yandex Managed Service for MySQL®](https://yandex.cloud/ru/docs/managed-mysql/pricing)).
- Плата за использование бакета для хранения медиафайлов (см. [тарифы Yandex Object Storage](https://yandex.cloud/ru/docs/storage/pricing)).
- Плата за хранение секретов и операции с ними (см. тарифы [Yandex Lockbox](https://yandex.cloud/ru/docs/lockbox/pricing)).
- Плата за исходящие письма (см. тарифы [Yandex Cloud Postbox](https://yandex.cloud/ru/docs/postbox/pricing)).

## [[Создайте сеть и подсети VPC]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#create-network){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Создайте сеть и подсети VPC {#create-network}

Создайте [облачную сеть](https://yandex.cloud/ru/docs/vpc/concepts/network) и [подсети](https://yandex.cloud/ru/docs/vpc/concepts/network#subnet), в которых будут развернуты ресурсы.

:::::::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="a7y2s5g4" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::

::: {.yfm-tab .yfm-tab-group diplodoc-id="cli" diplodoc-key="cli" role="tab" aria-controls="8anot0j9" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
CLI
:::

::: {.yfm-tab .yfm-tab-group diplodoc-id="api" diplodoc-key="api" role="tab" aria-controls="tuai93rw" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
API
:::
::::::

::: {#a7y2s5g4 .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
1.  В [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} перейдите в каталог, в котором будете разворачивать инфраструктуру.

2.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Virtual Private Cloud**.

3.  В правом верхнем углу нажмите **Создать сеть**.

4.  В поле **Имя** укажите имя сети. Требования к имени:

    - длина --- от 3 до 63 символов;
    - может содержать строчные буквы латинского алфавита, цифры и дефисы;
    - первый символ --- буква, последний --- не дефис.

5.  Оставьте включенной опцию **Создать подсети**.

6.  Нажмите **Создать сеть**.
:::

::: {#8anot0j9 .yfm-tab-panel role="tabpanel" aria-labelledby="cli" data-title="CLI"}
Если у вас еще нет интерфейса командной строки Yandex Cloud (CLI), [установите и инициализируйте его](https://yandex.cloud/ru/docs/cli/quickstart#install).

По умолчанию используется каталог, указанный при [создании](https://yandex.cloud/ru/docs/cli/operations/profile/profile-create) профиля CLI. Чтобы изменить каталог по умолчанию, используйте команду `yc config set folder-id <идентификатор_каталога>`{#inline-code-id-ovr3gnkq .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Также для любой команды вы можете указать другой каталог с помощью параметров `--folder-name`{#inline-code-id-591gm9kh .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `--folder-id`{#inline-code-id-hnxncfe0 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Если вы обращаетесь к ресурсу по имени, поиск будет выполнен в каталоге по умолчанию. Если вы обращаетесь к ресурсу по идентификатору, поиск будет выполнен глобально --- во всех каталогах с учетом прав доступа.

1.  Создайте облачную сеть в каталоге по умолчанию:

    :::: yfm-code-floating-container
    ``` hljs
    yc vpc network create --name wordpress-network
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTg5Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0xODkiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTE4OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTE4OS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  Получите список облачных сетей в каталоге:

    :::: yfm-code-floating-container
    ``` hljs
    yc vpc network list --folder-id b1g6ci08ma55********
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTk1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0xOTUiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTE5NSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTE5NS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Результат:

    :::: yfm-code-floating-container
    ``` hljs
    +----------------------+-------------------+
    |          ID          |      NAME         |
    +----------------------+-------------------+
    | enpavfmgapum******** | wordpress-network |
    | enplom7a98s1******** | default           |
    +----------------------+-------------------+
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTk5Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0xOTkiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTE5OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTE5OS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

3.  Выберите `NAME`{#inline-code-id-69wownpe .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `ID`{#inline-code-id-acx0blzf .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} требуемой облачной сети. Создайте подсеть в зоне доступности `ru-central1-a`{#inline-code-id-a5wx3pid .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::: yfm-code-floating-container
    ``` hljs
    yc vpc subnet create \
      --network-id enpavfmgapum******** \
      --zone ru-central1-a \
      --range 192.168.0.0/24
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMjA1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0yMDUiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTIwNSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTIwNS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Где:

    - `--network-id`{#inline-code-id-6wx8p2mk .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- идентификатор облачной сети. При создании подсети указывается облачная сеть, в которой создаются подсеть и CIDR.
    - `--zone`{#inline-code-id-wxngm67r .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- зона доступности, в которой создается подсеть.
    - `--range`{#inline-code-id-iaphbklx .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- список внутренних IPv4-адресов, определенных для данной подсети. Например, `10.0.0.0/22`{#inline-code-id-o9u3nxkv .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `192.168.0.0/16`{#inline-code-id-u1hznkyl .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Адреса должны быть уникальными внутри сети. Минимальный размер подсети --- /28, а максимальный размер подсети --- /16. Поддерживается только IPv4.

    Требования к названию подсети:

    - длина --- от 3 до 63 символов;
    - может содержать строчные буквы латинского алфавита, цифры и дефисы;
    - первый символ --- буква, последний --- не дефис.

4.  Аналогичным образом создайте подсеть в зоне доступности `ru-central1-d`{#inline-code-id-y2xky93n .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
:::

::: {#tuai93rw .yfm-tab-panel role="tabpanel" aria-labelledby="api" data-title="API"}
Чтобы создать облачную сеть, воспользуйтесь методом REST API [create](https://yandex.cloud/ru/docs/vpc/api-ref/Network/create) для ресурса [Network](https://yandex.cloud/ru/docs/vpc/api-ref/Network/) или вызовом gRPC API [NetworkService/Create](https://yandex.cloud/ru/docs/vpc/api-ref/grpc/Network/create) и передайте в запросе идентификатор каталога, в котором будет размещена сеть, в параметре `folderId`{#inline-code-id-2k4o3zdy .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

О том, как узнать идентификатор каталога, читайте в разделе [Получение идентификатора каталога](https://yandex.cloud/ru/docs/resource-manager/operations/folder/get-id).

Чтобы создать подсети в зонах доступности `ru-central1-a`{#inline-code-id-9h5q0bt3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `ru-central1-d`{#inline-code-id-kibns24t .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, воспользуйтесь методом REST API [create](https://yandex.cloud/ru/docs/vpc/api-ref/Subnet/create) для ресурса [Subnet](https://yandex.cloud/ru/docs/vpc/api-ref/Subnet/) или вызовом gRPC API [SubnetService/Create](https://yandex.cloud/ru/docs/vpc/api-ref/grpc/Subnet/create) и передайте в запросе:

- Идентификатор каталога, в котором будет размещена подсеть, в параметре `folderId`{#inline-code-id-zqk6fq73 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
- Идентификатор сети, в которой будет размещена подсеть, в параметре `networkId`{#inline-code-id-l1ina4ax .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
- Идентификатор зоны доступности, в которой будет размещена подсеть, в параметре `zoneId`{#inline-code-id-4ppdpxr8 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
- Список внутренних IPv4-адресов, определенных для данной подсети, в массиве `v4CidrBlocks[]`{#inline-code-id-zg9kt6rj .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Например, `10.0.0.0/22`{#inline-code-id-5fpsa38y .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `192.168.0.0/16`{#inline-code-id-7izdhmw8 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Адреса должны быть уникальными внутри сети. Минимальный размер подсети --- `/28`{#inline-code-id-ozshz7ib .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, а максимальный размер подсети --- `/16`{#inline-code-id-78z50pix .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Поддерживается только IPv4.

Чтобы узнать идентификатор подсети, воспользуйтесь методом REST API [list](https://yandex.cloud/ru/docs/vpc/api-ref/Subnet/list) для ресурса [Subnet](https://yandex.cloud/ru/docs/vpc/api-ref/Subnet/) или вызовом gRPC API [SubnetService/List](https://yandex.cloud/ru/docs/vpc/api-ref/grpc/Subnet/list) и передайте в запросе идентификатор каталога в параметре `folderId`{#inline-code-id-hanc4xko .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
:::
::::::::::

## [[Настройте DNS-зону]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#configure-dns){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Настройте DNS-зону {#configure-dns}

Создайте [публичную DNS-зону](https://yandex.cloud/ru/docs/dns/concepts/dns-zone#public-zones) и делегируйте на нее домен. Подробнее о делегировании домена читайте в [инструкции](https://yandex.cloud/ru/docs/troubleshooting/dns/how-to/delegate-public-zone). В DNS-зоне будут размещаться домены WordPress.

:::::::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="a17dl772" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::

::: {.yfm-tab .yfm-tab-group diplodoc-id="cli" diplodoc-key="cli" role="tab" aria-controls="mpjqx9wg" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
Yandex Cloud CLI
:::

::: {.yfm-tab .yfm-tab-group diplodoc-id="api" diplodoc-key="api" role="tab" aria-controls="ehlycp9n" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
API
:::
::::::

::: {#a17dl772 .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
1.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Cloud DNS**.

2.  Нажмите кнопку **Создать зону**.

3.  Задайте настройки зоны DNS:

    - **Зона** --- укажите ваш зарегистрированный домен, например `example.com.`{#inline-code-id-tuqchlmh .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} (с точкой в конце).
    - **Тип** --- выберите `Публичная`{#inline-code-id-zl58jvhz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Имя** --- укажите имя зоны, например `example-zone`{#inline-code-id-5u7vheg4 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

4.  Нажмите кнопку **Создать**.

5.  Делегируйте домен на серверы Yandex Cloud. Для этого в личном кабинете вашего регистратора доменных имен укажите адреса DNS-серверов `ns1.yandexcloud.net`{#inline-code-id-hlzan14p .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `ns2.yandexcloud.net`{#inline-code-id-3deh3xu4 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    Делегирование происходит не сразу. Серверы интернет-провайдеров обновляют записи до 24 часов. Проверить делегирование домена можно с помощью [сервиса Whois[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.reg.ru/whois/check_site){.yfm-external-link target="_blank" rel="noreferrer noopener"} или утилиты `dig`{#inline-code-id-x945yoen .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    dig +short NS example.com
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzU1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zNTUiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM1NSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM1NS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Результат:

    :::: yfm-code-floating-container
    ``` {.hljs .text}
    ns2.yandexcloud.net.
    ns1.yandexcloud.net.
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzU5Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zNTkiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM1OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM1OS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
:::

::: {#mpjqx9wg .yfm-tab-panel role="tabpanel" aria-labelledby="cli" data-title="Yandex Cloud CLI"}
1.  Создайте публичную зону DNS:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    yc dns zone create \
      --name example-zone \
      --zone example.com. \
      --public-visibility
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzY5Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zNjkiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM2OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM2OS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Где `--zone`{#inline-code-id-36xizew6 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- имя вашего домена, например `example.com.`{#inline-code-id-dlvxegu9 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Значение параметра `--zone`{#inline-code-id-emz9iw45 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} должно заканчиваться точкой.

    Результат:

    :::: yfm-code-floating-container
    ``` {.hljs .text}
    id: dns39gihj0ef********
    folder_id: b1g681qpemb4********
    created_at: "2024-09-09T15:23:34.919887Z"
    name: example-zone
    zone: example.com.
    public_visibility: {}
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzc2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zNzYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM3NiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM3Ni5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Подробнее о команде `yc dns zone create`{#inline-code-id-6a6zd2jo .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} читайте в [справочнике CLI](https://yandex.cloud/ru/docs/cli/cli-ref/dns/cli-ref/zone/create).

2.  Делегируйте домен на серверы Yandex Cloud. Для этого в личном кабинете вашего регистратора доменных имен укажите адреса DNS-серверов `ns1.yandexcloud.net`{#inline-code-id-7xjhoybo .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `ns2.yandexcloud.net`{#inline-code-id-16895ej1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    Делегирование происходит не сразу. Серверы интернет-провайдеров обновляют записи в течение 24 часов.
:::

::: {#ehlycp9n .yfm-tab-panel role="tabpanel" aria-labelledby="api" data-title="API"}
Чтобы создать публичную зону DNS, воспользуйтесь методом REST API [create](https://yandex.cloud/ru/docs/dns/api-ref/DnsZone/create) для ресурса [DnsZone](https://yandex.cloud/ru/docs/dns/api-ref/DnsZone/) или вызовом gRPC API [DnsZoneService/Create](https://yandex.cloud/ru/docs/dns/api-ref/grpc/DnsZone/create).

Делегируйте домен на серверы Yandex Cloud. Для этого в личном кабинете вашего регистратора доменных имен укажите адреса DNS-серверов `ns1.yandexcloud.net`{#inline-code-id-yvdy6wcr .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `ns2.yandexcloud.net`{#inline-code-id-sy0gkujd .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
:::
::::::::::

## [[Создайте секрет Yandex Lockbox]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#create-secret){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Создайте секрет Yandex Lockbox {#create-secret}

В [секретах](https://yandex.cloud/ru/docs/lockbox/concepts/secret) Yandex Lockbox будут храниться пароль базы данных Yandex Managed Service for MySQL® и пароль администратора WordPress.

:::::::::::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="0s0b3j7c" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::

::: {.yfm-tab .yfm-tab-group diplodoc-id="cli" diplodoc-key="cli" role="tab" aria-controls="4q5hdgri" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
Yandex Cloud CLI
:::

::: {.yfm-tab .yfm-tab-group diplodoc-id="api" diplodoc-key="api" role="tab" aria-controls="kagc9kwn" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
API
:::
::::::

::: {#0s0b3j7c .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
Чтобы создать секрет, в котором будет храниться пароль базы данных Yandex Managed Service for MySQL®:

1.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Lockbox**.
2.  Нажмите **Создать секрет**.
3.  В поле **Имя** введите имя секрета: `db-password-secret`{#inline-code-id-lwffsmey .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
4.  В поле **Тип секрета** выберите `Пользовательский`{#inline-code-id-74kiwxbw .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
5.  В поле **Ключ** введите `db_password`{#inline-code-id-24j6ee3r .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
6.  В поле **Значение** вставьте пароль базы данных Yandex Managed Service for MySQL®.
7.  Нажмите **Создать**.

Аналогичным образом создайте секрет `wp-admin-password-secret`{#inline-code-id-kdondsn5 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, в котором будет храниться пароль администратора WordPress. В поле **Ключ** укажите `wp_admin_password`{#inline-code-id-gbyzu8bt .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
:::

::::::: {#4q5hdgri .yfm-tab-panel role="tabpanel" aria-labelledby="cli" data-title="Yandex Cloud CLI"}
Чтобы создать секрет, в котором будет храниться пароль базы данных Yandex Managed Service for MySQL®, выполните команду:

:::: yfm-code-floating-container
``` {.hljs .bash}
yc lockbox secret create \
  --name db-password-secret \
  --payload "[{'key': 'db_password', 'text_value': '<пароль>'}]"
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDY3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NjciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ2NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ2Ny5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::

Где `text_value`{#inline-code-id-6cj50bl9 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- пароль базы данных Yandex Managed Service for MySQL®.

Результат:

:::: yfm-code-floating-container
``` {.hljs .text}
id: e6q0rdjdggjp********
folder_id: b1g681qpemb4********
created_at: "2025-07-12T18:23:49.844Z"
name: db-password-secret
status: ACTIVE
current_version:
  id: e6qbp772i014********
  secret_id: e6q0rdjdggjp********
  created_at: "2025-07-12T18:23:49.844Z"
  status: ACTIVE
  payload_entry_keys:
    - db_password
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDc0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NzQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ3NCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ3NC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::

Аналогичным образом создайте секрет, в котором будет храниться пароль администратора WordPress. В параметре `key`{#inline-code-id-p5j1mdt4 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} укажите `wp_admin_password`{#inline-code-id-wl0oj1o4 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
:::::::

::: {#kagc9kwn .yfm-tab-panel role="tabpanel" aria-labelledby="api" data-title="API"}
Чтобы создать секрет, воспользуйтесь методом REST API [create](https://yandex.cloud/ru/docs/lockbox/api-ref/Secret/create) для ресурса [Secret](https://yandex.cloud/ru/docs/lockbox/api-ref/Secret/) или вызовом gRPC API [SecretService/Create](https://yandex.cloud/ru/docs/lockbox/api-ref/grpc/Secret/create).

В параметре `key`{#inline-code-id-fvytoul7 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} для ключа, в котором будет храниться пароль базы данных Yandex Managed Service for MySQL®, укажите `db_password`{#inline-code-id-a0irqwfp .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Для ключа, в котором будет храниться пароль администратора WordPress, --- `wp_admin_password`{#inline-code-id-zs4y2br2 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
:::
::::::::::::::

:::: {.yfm-note .yfm-accent-info note-type="info"}
Примечание

::: yfm-note-content
Вы можете не создавать секрет с паролем администратора WordPress и не указывать его в настройках приложения, тогда он создастся автоматически со случайным паролем во время установки приложения.
:::
::::

## [[Установите WordPress]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#install-wordpress){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Установите WordPress {#install-wordpress}

Установите [WordPress High Availability](https://yandex.cloud/ru/marketplace/products/yc/wordpress-ha-app) с помощью Cloud Apps:

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console-1" diplodoc-key="console" role="tab" aria-controls="bg39bmfc" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#bg39bmfc .yfm-tab-panel .active role="tabpanel" aria-labelledby="console-1" data-title="Консоль управления"}
1.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Cloud Apps**.

2.  Нажмите кнопку **Установить приложение**.

3.  В открывшемся окне выберите приложение **WordPress High Availability**.

4.  Задайте настройки приложения:

    - Имя приложения --- название вашего экземпляра WordPress High Availability.

    - (Опционально) Описание приложения.

    - Сервисный аккаунт с ролью `admin`{#inline-code-id-sxjz5tnn .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} на каталог или выберите `Автоматически`{#inline-code-id-nch2nu4q .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, чтобы нужный сервисный аккаунт создался при установке приложения.

    - Идентификатор DNS-зоны.

    - (Опционально) Поддомен сайта для WordPress. По умолчанию поддомен пустой. Домен сайта формируется добавлением поддомена к домену DNS-зоны.

    - (Опционально) Отправителя. По умолчанию --- `noreply@домен_сайта`{#inline-code-id-8zzl8yyy .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Используется для настройки SMTP через Yandex Cloud Postbox.

    - (Опционально) Логин администратора WordPress --- имя пользователя для учетной записи администратора WordPress. По умолчанию --- `admin`{#inline-code-id-cego5qa7 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

      :::: {.yfm-note .yfm-accent-warning note-type="warning"}
      Важно

      ::: yfm-note-content
      Логин администратора WordPress нельзя изменить после установки приложения.
      :::
      ::::

    - Электронную почту администратора WordPress --- адрес электронной почты, который будет использоваться для создания учетной записи администратора WordPress, отправки системных уведомлений и восстановления пароля.

    - (Опционально) Идентификатор секрета `wp-admin-password-secret`{#inline-code-id-cek8swhm .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} с паролем администратора WordPress, созданный ранее. Если вы не укажете секрет, он создастся со случайным паролем автоматически во время установки приложения.

    - Подсети VPC в зонах доступности `ru-central1-a`{#inline-code-id-9pra3rwr .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `ru-central1-d`{#inline-code-id-6c3uo1vj .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} для развертывания кластера Managed Service for MySQL® и виртуальных машин с файловой системой.

    - (Опционально) Размер группы ВМ --- количество виртуальных машин в группе. По умолчанию --- 2.

    - (Опционально) Количество ядер vCPU. По умолчанию --- 2.

    - (Опционально) Объем RAM в ГБ. По умолчанию --- 2 ГБ.

    - (Опционально) Гарантированную доля vCPU. Доступные значения --- 20%, 50% или 100%. По умолчанию --- 100%.

    - (Опционально) Публичный SSH-ключ. Он добавится в `authorized_keys`{#inline-code-id-99x54tow .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} пользователя WordPress. Как создать SHH-ключ, см. в [документации](https://yandex.cloud/ru/docs/compute/operations/vm-connect/ssh#creating-ssh-keys).

    - (Опционально) Размер файловой системы в ГБ. По умолчанию --- 100 ГБ.

    - Идентификатор секрета `db-password-secret`{#inline-code-id-havtwmg7 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} с паролем БД для подключения к кластеру Managed Service for MySQL®, созданный ранее.

    - (Опционально) Размер диска кластера Managed Service for MySQL® в ГБ. По умолчанию --- 20 ГБ.

5.  Нажмите кнопку **Установить**.

    В открывшемся окне отобразятся ресурсы, которые будут созданы во время установки приложения. После создания всех ресурсов на виртуальной машине будет происходить настройка сайта, установка плагинов и выпуск TLS-сертификатов. Дождитесь завершения установки, она займет 5--10 минут.
:::
::::::

:::: {.yfm-note .yfm-accent-info note-type="info"}
Примечание

::: yfm-note-content
При установке приложения автоматически создаются [адрес](https://yandex.cloud/ru/docs/postbox/concepts/glossary#adress) Yandex Cloud Postbox и DNS-запись для его верификации.
:::
::::

## [[Настройте WordPress]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#configure-wordpress){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Настройте WordPress {#configure-wordpress}

1.  Откройте в браузере адрес основного сайта: `https://<домен_сайта>`{#inline-code-id-ex5queny .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, где `<домен_сайта>`{#inline-code-id-samqxjwh .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- поддомен основного сайта, или домен DNS-зоны, если поддомен сайта не был указан.

2.  Откройте в браузере адрес административной панели: `https://<домен_сайта>/wp-admin`{#inline-code-id-ei8fimxh .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

3.  Войдите в административную панель, используя:

    - **Логин** --- логин администратора, который вы указали при установке.

    - **Пароль** --- пароль администратора. Если вы не указывали секрет с паролем администратора в настройках приложения, значение пароля можно найти в секрете, который создался автоматически при установке приложения. Имя секрета --- `wp-admin-password-secret`{#inline-code-id-7x0xy50y .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

      :::: {.yfm-note .yfm-accent-info note-type="info"}
      Примечание

      ::: yfm-note-content
      Если вы забыли пароль, его можно восстановить через стандартную форму восстановления пароля WordPress, используя адрес электронной почты администратора, указанный при установке.
      :::
      ::::

После входа вы будете перенаправлены в административную панель WordPress, где сможете начать работу с сайтом.

## [[Проверьте результат]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#check-result){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Проверьте результат {#check-result}

Убедитесь, что WordPress работает корректно:

1.  Откройте в браузере поддомен основного сайта, если указали его при установке. Иначе --- домен DNS-зоны. Вы должны увидеть главную страницу WordPress.

2.  Создайте тестовый пост:

    1.  В административной панели нажмите кнопку **Записи** → **Добавить новую**.
    2.  Заполните заголовок и содержимое поста.
    3.  Загрузите изображение в пост --- оно автоматически сохранится в бакет Object Storage.
    4.  Опубликуйте пост.

3.  Проверьте, что пост доступен на главной странице сайта.

4.  Проверьте работу почтовых уведомлений:

    1.  В административной панели перейдите в раздел настроек.
    2.  Попробуйте восстановить пароль, используя функцию **«Забыли пароль?»**.
    3.  Проверьте, что письмо с инструкциями по восстановлению пароля пришло на указанный адрес электронной почты.

    :::: {.yfm-note .yfm-accent-info note-type="info"}
    Примечание

    ::: yfm-note-content
    Интеграция с Yandex Cloud Postbox поддерживает регистрацию пользователей и восстановление пароля. Массовые рассылки через Yandex Cloud Postbox не поддерживаются, так как для них требуется специальный API.
    :::
    ::::

5.  Проверьте установленные плагины:

    1.  В административной панели перейдите в раздел **Плагины**.
    2.  Убедитесь, что установлены следующие плагины:
        - **S3 Uploads** --- для интеграции с сервисом **Yandex Object Storage** для хранения медиафайлов.
        - **WP Mail SMTP** --- для интеграции с сервисом **Yandex Cloud Postbox** для отправки почтовых уведомлений.

6.  Откройте в браузере домен административной панели БД:

    1.  Войдите в административную панель базы данных.
    2.  Для входа используйте:
        - **Сервер** --- `db`{#inline-code-id-m4h2zbjz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
        - **Движок** --- `MySQL`{#inline-code-id-7ofddjub .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
        - **Имя пользователя** --- `wordpress`{#inline-code-id-q39x6hen .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
        - **Пароль** --- пароль базы данных, который вы указали в секрете `db-passwords-secret`{#inline-code-id-bw4drov8 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

## [[Как удалить созданные ресурсы]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-cloudapp#clear-out){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Как удалить созданные ресурсы {#clear-out}

Чтобы остановить работу и перестать платить за созданные ресурсы:

1.  Удалите адрес Yandex Cloud Postbox и связанную с ним [DNS-запись](https://yandex.cloud/ru/docs/dns/operations/resource-record-delete) --- они не удалятся автоматически при удалении приложения.

2.  [Удалите](https://yandex.cloud/ru/docs/storage/operations/objects/delete-all) все объекты из бакетов Object Storage, созданных при установке приложения, так как удалять можно только пустые бакеты.

3.  Удалите установленное приложение WordPress High Availability:

    1.  В [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} выберите каталог, в котором установлено приложение.
    2.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Cloud Apps**.
    3.  Найдите установленное приложение WordPress High Availability в списке.
    4.  Нажмите на значок ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgOS41YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzTTkuNSA4YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwbTUgMGExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMCIgY2xpcC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==) рядом с приложением и выберите **Удалить**.
    5.  Подтвердите удаление приложения.

4.  [Удалите](https://yandex.cloud/ru/docs/dns/operations/zone-delete) публичную DNS-зону.

5.  [Удалите](https://yandex.cloud/ru/docs/lockbox/operations/secret-delete) секреты Yandex Lockbox.

6.  Удалите [подсети](https://yandex.cloud/ru/docs/vpc/operations/subnet-delete) и [сеть](https://yandex.cloud/ru/docs/vpc/operations/network-delete) VPC.
:::::::::::::::::::::::::::::::::::::::

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
::::::::::::::::::::::::::::::::::::::::::::::::::::::::
