:::::::::::::::::::::::::::::::::::: {.dc-doc-page__content role="main"}
# Создание сайта на WordPress с кластером базы данных MySQL® с помощью консоли управления {#создание-сайта-на-wordpress-с-кластером-базы-данных-mysql-с-помощью-консоли-управления .dc-doc-page-title .dc-doc-page__title}

::::::::: dc-doc-page__page-contributors
:::::: dc-contributors
::: dc-contributors__title
Статья создана
:::

:::: {.dc-contributor-avatars__one_contributor .dc-contributor-avatars__one_contributor_onlyAuthor}
[![](./Создание%20сайта%20на%20WordPress%20с%20кластером%20базы%20данных%20MySQL®%20с%20помощью%20консоли%20управления%20_%20Yandex%20Cloud%20-%20Документация_files/yc_team.svg){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://yandex.cloud/en){.g-link .g-link_view_normal}

::: {}
[Yandex Cloud](https://yandex.cloud/en){.g-link .g-link_view_normal}
:::
::::
::::::

:::: dc-updated-at-date
::: dc-updated-at-date__wrapper
Обновлена 10 марта 2026 г.
:::
::::
:::::::::

::: {.dc-doc-page__content-mini-toc .yfm}
- [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#before-you-begin)
  - [Необходимые платные ресурсы](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#paid-resources)
- [Создайте ВМ для WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-vm)
- [Создайте кластер БД MySQL®](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-cluster)
- [Настройте веб-сервер Nginx](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#configure-nginx)
- [Установите WordPress и дополнительные компоненты](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#install-wordpress)
- [Завершите настройку WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#configure-wordpress)
- [Настройте DNS](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#configure-dns)
  - [Добавьте зону DNS](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-dns-zone)
  - [Добавьте ресурсные записи](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-dns-records)
  - [Делегируйте доменное имя](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#delegate-domain)
- [Проверьте работу сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#test-site)
- [Как удалить созданные ресурсы](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#clear-out)
:::

::::::::::::::::::::::: {.dc-doc-page__body .dc-doc-page__body_text-size_m .yfm}
Чтобы создать инфраструктуру для [сайта на WordPress с кластером базы данных MySQL®](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/) c помощью консоли управления Yandex Cloud:

Чтобы настроить сайт на WordPress с кластером MySQL®:

1.  [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#before-you-begin).
2.  [Создайте ВМ для WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-vm).
3.  [Создайте кластер БД MySQL®](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-cluster).
4.  [Настройте веб-сервер Nginx](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#configure-nginx).
5.  [Установите WordPress и дополнительные компоненты](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#install-wordpress).
6.  [Завершите настройку WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#configure-wordpress).
7.  [Настройте DNS](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#configure-dns).
8.  [Проверьте работу сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#test-site).

Если созданные ресурсы вам больше не нужны, [удалите их](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#clear-out).

## [[Подготовьте облако к работе]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#before-you-begin){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Подготовьте облако к работе {#before-you-begin}

Зарегистрируйтесь в Yandex Cloud и создайте [платежный аккаунт](https://yandex.cloud/ru/docs/billing/concepts/billing-account):

1.  Перейдите в [консоль управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"}, затем войдите в Yandex Cloud или зарегистрируйтесь.
2.  На странице **[Yandex Cloud Billing[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://center.yandex.cloud/billing/accounts){.yfm-external-link target="_blank" rel="noreferrer noopener"}** убедитесь, что у вас подключен платежный аккаунт, и он находится в [статусе](https://yandex.cloud/ru/docs/billing/concepts/billing-account-statuses) `ACTIVE`{#inline-code-id-nfwv9kl0 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `TRIAL_ACTIVE`{#inline-code-id-1m0lpf7o .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Если платежного аккаунта нет, [создайте его](https://yandex.cloud/ru/docs/billing/quickstart/) и [привяжите](https://yandex.cloud/ru/docs/billing/operations/pin-cloud) к нему облако.

Если у вас есть активный платежный аккаунт, вы можете создать или выбрать [каталог](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder), в котором будет работать ваша инфраструктура, на [странице облака[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/cloud){.yfm-external-link target="_blank" rel="noreferrer noopener"}.

[Подробнее об облаках и каталогах](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy).

### [[Необходимые платные ресурсы]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#paid-resources){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Необходимые платные ресурсы {#paid-resources}

- Виртуальная машина: использование вычислительных ресурсов, хранилища, публичного IP-адреса и операционной системы (см. [тарифы Compute Cloud](https://yandex.cloud/ru/docs/compute/pricing)).

- Кластер Managed Service for MySQL®: выделенные хостам вычислительные ресурсы, объем хранилища и резервных копий (см. [тарифы Managed Service for MySQL®](https://yandex.cloud/ru/docs/managed-mysql/pricing)).

- Публичные IP-адреса, если для хостов кластера включен публичный доступ (см. [тарифы Virtual Private Cloud](https://yandex.cloud/ru/docs/vpc/pricing)).

- Публичные [DNS-запросы](https://yandex.cloud/ru/docs/glossary/dns) и [зоны DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone) (см. [тарифы Cloud DNS](https://yandex.cloud/ru/docs/dns/pricing)).

## [[Создайте ВМ для WordPress]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-vm){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Создайте ВМ для WordPress {#create-vm}

Чтобы создать виртуальную машину для WordPress:

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="e7wgp6tk" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#e7wgp6tk .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
1.  На странице [каталога](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder) в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} нажмите кнопку ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS43NWEuNzUuNzUgMCAwIDEgLjc1Ljc1djQuNzVoNC43NWEuNzUuNzUgMCAwIDEgMCAxLjVIOC43NXY0Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY4Ljc1SDIuNWEuNzUuNzUgMCAwIDEgMC0xLjVoNC43NVYyLjVBLjc1Ljc1IDAgMCAxIDggMS43NSIgY2xpcC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==) **Создать ресурс** и выберите `Виртуальная машина`{#inline-code-id-qdo6za4t .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

2.  В блоке **Образ загрузочного диска** выберите один из публичных образов: [Debian 11](https://yandex.cloud/ru/marketplace/products/yc/debian-11), [Ubuntu 20.04 LTS](https://yandex.cloud/ru/marketplace/products/yc/ubuntu-20-04-lts) или [CentOS 7](https://yandex.cloud/ru/marketplace/products/yc/centos-7).

3.  В блоке **Расположение** выберите [зону доступности](https://yandex.cloud/ru/docs/overview/concepts/geo-scope), в которой будет находиться ВМ. Если вы не знаете, какая зона доступности вам нужна, оставьте выбранную по умолчанию.

4.  В блоке **Вычислительные ресурсы** перейдите на вкладку `Своя конфигурация`{#inline-code-id-7fve9c83 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и укажите необходимую [платформу](https://yandex.cloud/ru/docs/compute/concepts/vm-platforms), количество vCPU и объем RAM:

    - **Платформа** --- `Intel Ice Lake`{#inline-code-id-3clp09t2 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **vCPU** --- `2`{#inline-code-id-skh2j4hp .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Гарантированная доля vCPU** --- `20%`{#inline-code-id-7wvwls3v .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **RAM** --- `2 ГБ`{#inline-code-id-s04w27va .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

5.  В блоке **Сетевые настройки**:

    - В поле **Подсеть** выберите сеть и подсеть, к которым нужно подключить ВМ. Если нужной [сети](https://yandex.cloud/ru/docs/vpc/concepts/network#network) или [подсети](https://yandex.cloud/ru/docs/vpc/concepts/network#subnet) еще нет, [создайте их](https://yandex.cloud/ru/docs/vpc/operations/subnet-create).
    - В поле **Публичный IP-адрес** оставьте значение `Автоматически`{#inline-code-id-ws4r1ssa .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, чтобы назначить ВМ случайный внешний IP-адрес из пула Yandex Cloud, или выберите статический адрес из списка, если вы зарезервировали его заранее.

6.  В блоке **Доступ** выберите вариант **SSH-ключ** и укажите данные для доступа на ВМ:

    - В поле **Логин** введите имя пользователя, например: `yc-user`{#inline-code-id-ib5jfs4c .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Не используйте имя `root`{#inline-code-id-eko4j9gp .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или другие имена, зарезервированные ОС. Для выполнения операций, требующих прав суперпользователя, используйте команду `sudo`{#inline-code-id-or019npo .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    - В поле **SSH-ключ** выберите SSH-ключ, сохраненный в вашем профиле [пользователя организации](https://yandex.cloud/ru/docs/organization/concepts/membership).

      Если в вашем профиле нет сохраненных SSH-ключей или вы хотите добавить новый ключ:

      1.  Нажмите кнопку **Добавить ключ**.

      2.  Задайте имя SSH-ключа.

      3.  Выберите вариант:

          - `Ввести вручную`{#inline-code-id-qjj07eyz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- вставьте содержимое открытого [SSH](https://yandex.cloud/ru/docs/glossary/ssh-keygen)-ключа. Пару SSH-ключей необходимо [создать](https://yandex.cloud/ru/docs/compute/operations/vm-connect/ssh#creating-ssh-keys) самостоятельно.

          - `Загрузить из файла`{#inline-code-id-94bpdqwb .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- загрузите открытую часть SSH-ключа. Пару SSH-ключей необходимо создать самостоятельно.

          - `Сгенерировать ключ`{#inline-code-id-mno35r03 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- автоматическое создание пары SSH-ключей.

            При добавлении сгенерированного SSH-ключа будет создан и загружен архив с парой ключей. В ОС на базе Linux или macOS распакуйте архив в папку `/home/<имя_пользователя>/.ssh`{#inline-code-id-gnm0zkql .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. В ОС Windows распакуйте архив в папку `C:\Users\<имя_пользователя>/.ssh`{#inline-code-id-fn2n05ih .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Дополнительно вводить открытый ключ в консоли управления не требуется.

      4.  Нажмите кнопку **Добавить**.

      SSH-ключ будет добавлен в ваш профиль пользователя организации. Если в организации [отключена](https://yandex.cloud/ru/docs/organization/operations/os-login-access) возможность добавления пользователями SSH-ключей в свои профили, добавленный открытый SSH-ключ будет сохранен только в профиле пользователя внутри создаваемого ресурса.

7.  В блоке **Общая информация** задайте имя ВМ: `wp-mysql-tutorial-web`{#inline-code-id-v1iwvfot .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    IP-адрес и [имя хоста (FQDN)](https://yandex.cloud/ru/docs/compute/concepts/network#hostname) для подключения к ВМ назначается ей при создании. Если вы выбрали вариант `Без адреса`{#inline-code-id-b2l9fg1s .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} в поле **Публичный IP-адрес**, вы не сможете обращаться к ВМ из интернета.

8.  Нажмите **Создать ВМ**.
:::
::::::

Создание ВМ может занять несколько минут. Когда ВМ перейдет в [статус](https://yandex.cloud/ru/docs/compute/concepts/vm-statuses) `RUNNING`{#inline-code-id-r8tdcnxf .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, вы можете переходить к следующему шагу.

При создании ВМ назначается публичный IP-адрес и имя хоста (FQDN). Эти данные можно использовать для доступа по SSH.

## [[Создайте кластер БД MySQL®]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-cluster){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Создайте кластер БД MySQL® {#create-cluster}

Чтобы создать кластер БД MySQL®:

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console-1" diplodoc-key="console" role="tab" aria-controls="3ozkmukz" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#3ozkmukz .yfm-tab-panel .active role="tabpanel" aria-labelledby="console-1" data-title="Консоль управления"}
1.  На странице каталога в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} нажмите кнопку ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS43NWEuNzUuNzUgMCAwIDEgLjc1Ljc1djQuNzVoNC43NWEuNzUuNzUgMCAwIDEgMCAxLjVIOC43NXY0Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY4Ljc1SDIuNWEuNzUuNzUgMCAwIDEgMC0xLjVoNC43NVYyLjVBLjc1Ljc1IDAgMCAxIDggMS43NSIgY2xpcC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==) **Создать ресурс** и выберите **Кластер MySQL**.

2.  В поле **Имя кластера** введите имя: `wp-mysql-tutorial-db-cluster`{#inline-code-id-dnnbn3m3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

3.  В блоке **Класс хоста** выберите `s3-c2-m8`{#inline-code-id-qr961gww .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

4.  В блоке **Размер хранилища** укажите `10 ГБ`{#inline-code-id-zmy8cosm .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

5.  В блоке **База данных**:

    - В поле **Имя БД** введите `wp-mysql-tutorial-db`{#inline-code-id-ckh8f6av .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - В поле **Имя пользователя** введите `wordpress`{#inline-code-id-1gccuis2 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - В поле **Пароль** введите пароль, который вы будете использовать для доступа к БД.

6.  В блоке **Сетевые настройки** выберите сеть, к которой будет подключен кластер.

7.  В блоке **Хосты** добавьте еще два [хоста](https://yandex.cloud/ru/docs/managed-mysql/concepts/instance-types) в других зонах доступности. При создании хостов не включайте для них **Публичный доступ**.

8.  В блоке **Настройки СУБД** нажмите кнопку **Настроить**.

    В поле **default_authentication_plugin** выберите пункт `mysql_native_password`{#inline-code-id-a41c513j .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и нажмите кнопку **Сохранить**.

9.  Нажмите кнопку **Создать кластер**.
:::
::::::

Создание кластера БД может занять несколько минут.

## [[Настройте веб-сервер Nginx]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#configure-nginx){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Настройте веб-сервер Nginx {#configure-nginx}

После того как ВМ `wp-mysql-tutorial-web`{#inline-code-id-lu37m7gj .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} перейдет в статус `RUNNING`{#inline-code-id-wto2bj5x .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

1.  В блоке **Сеть** на странице ВМ в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} найдите публичный IP-адрес ВМ.

2.  [Подключитесь](https://yandex.cloud/ru/docs/compute/operations/vm-connect/ssh) к ВМ по протоколу SSH. Для этого можно использовать утилиту `ssh`{#inline-code-id-f5fhw2z3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} в Linux и macOS и программу [PuTTY[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.chiark.greenend.org.uk/~sgtatham/putty/){.yfm-external-link target="_blank" rel="noreferrer noopener"} для Windows.

    Рекомендуемый способ аутентификации при подключении по SSH --- с помощью пары ключей. Не забудьте настроить использование созданной пары ключей: закрытый ключ должен соответствовать открытому ключу, переданному на ВМ.

3.  Установите Nginx, менеджер процессов PHP-FPM и дополнительные пакеты:

    :::::::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu" diplodoc-key="ubuntu" role="tab" aria-controls="mkiwf2mv" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos" diplodoc-key="centos" role="tab" aria-controls="ncffjsml" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::::: {#mkiwf2mv .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu" data-title="Debian/Ubuntu"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo apt-get update
    sudo apt-get install -y nginx-full php-fpm php-mysql
    sudo systemctl enable nginx
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzg1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zODUiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM4NSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM4NS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::

    ::::: {#ncffjsml .yfm-tab-panel role="tabpanel" aria-labelledby="centos" data-title="CentOS"}
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
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzg4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zODgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM4OCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM4OC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::
    ::::::::::::

4.  Задайте настройки веб-сервера в конфигурационных файлах Nginx:

    :::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-1" diplodoc-key="ubuntu" role="tab" aria-controls="97dzxci7" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos-1" diplodoc-key="centos" role="tab" aria-controls="fwwc1b4w" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::: {#97dzxci7 .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-1" data-title="Debian/Ubuntu"}
    1.  Вы можете отредактировать файл с помощью редактора `nano`{#inline-code-id-wuty29f9 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo nano /etc/nginx/sites-available/wordpress
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDExIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MTEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQxMSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQxMS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
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
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDE3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MTciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQxNyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQxNy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    3.  Разрешите запуск вашего сайта:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo rm /etc/nginx/sites-enabled/default
        sudo ln -s /etc/nginx/sites-available/wordpress /etc/nginx/sites-enabled/
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDIzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MjMiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQyMyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQyMy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::
    :::

    ::: {#fwwc1b4w .yfm-tab-panel role="tabpanel" aria-labelledby="centos-1" data-title="CentOS"}
    Вы можете отредактировать файлы `nginx.conf`{#inline-code-id-n7rg369f .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `wordpress.conf`{#inline-code-id-09wlqmqe .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} с помощью редактора `nano`{#inline-code-id-7342f8u8 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    1.  Откройте файл `nginx.conf`{#inline-code-id-vrhz1sh9 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo nano /etc/nginx/nginx.conf
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDM2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MzYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQzNiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQzNi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
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
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDQyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NDIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ0MiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ0Mi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    3.  Откройте файл `wordpress.conf`{#inline-code-id-ivpim77y .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo nano /etc/nginx/conf.d/wordpress.conf
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDQ4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NDgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ0OCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ0OC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
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
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDU0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NTQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ1NCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ1NC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::
    :::
    ::::::::

## [[Установите WordPress и дополнительные компоненты]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#install-wordpress){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Установите WordPress и дополнительные компоненты {#install-wordpress}

1.  Загрузите и распакуйте последнюю версию WordPress:

    :::::::::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu" diplodoc-key="ubuntu" role="tab" aria-controls="nigetth4" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos" diplodoc-key="centos" role="tab" aria-controls="q47s1aty" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::::: {#nigetth4 .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu" data-title="Debian/Ubuntu"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    wget https://wordpress.org/latest.tar.gz
    tar -xzf latest.tar.gz
    mv wordpress/wp-config-sample.php wordpress/wp-config.php
    sudo mv wordpress /var/www/wordpress
    sudo chown -R www-data:www-data /var/www/wordpress
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDc5Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NzkiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ3OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ3OS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::

    ::::::: {#q47s1aty .yfm-tab-panel role="tabpanel" aria-labelledby="centos" data-title="CentOS"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    curl https://wordpress.org/latest.tar.gz --output latest.tar.gz
    tar -xzf latest.tar.gz
    mv wordpress/wp-config-sample.php wordpress/wp-config.php
    sudo mv wordpress /usr/share/nginx/wordpress
    sudo chown -R nginx:nginx /usr/share/nginx/wordpress/
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDgyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00ODIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ4MiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ4Mi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
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
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDg2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00ODYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ4NiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ4Ni5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
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
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDk0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00OTQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ5NCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ5NC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Сохраните вывод команды --- полученные ключи будут нужны на следующем шаге.

3.  Добавьте ключи безопасности в конфигурационный файл WordPress `wp-config.php`{#inline-code-id-utkp8t2b .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Вы можете отредактировать файл с помощью редактора `nano`{#inline-code-id-qiqixxgn .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::::::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-1" diplodoc-key="ubuntu" role="tab" aria-controls="hkfrnv2t" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos-1" diplodoc-key="centos" role="tab" aria-controls="x9h7uufx" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::::: {#hkfrnv2t .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-1" data-title="Debian/Ubuntu"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo nano /var/www/wordpress/wp-config.php
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTEzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01MTMiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTUxMyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTUxMy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::

    ::::: {#x9h7uufx .yfm-tab-panel role="tabpanel" aria-labelledby="centos-1" data-title="CentOS"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo nano /usr/share/nginx/wordpress/wp-config.php
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTE2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01MTYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTUxNiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTUxNi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
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
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTIyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01MjIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTUyMiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTUyMi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

4.  Перейдите к блоку конфигурации подключения к кластеру `wp-mysql-tutorial-db-cluster`{#inline-code-id-tacipp4c .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

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
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTI4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01MjgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTUyOCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTUyOC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Укажите в файле вместо:

    - `<DB_NAME>`{#inline-code-id-1l9mzo44 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- имя БД `wp-mysql-tutorial-db`{#inline-code-id-os819s6t .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    - `<DB_USER>`{#inline-code-id-86386hmw .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- имя пользователя `wordpress`{#inline-code-id-s5v6g5kz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    - `<DB_PASSWORD>`{#inline-code-id-7u0kl2gr .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- пароль, заданный при создании кластера БД.

    - `<DB_HOST>`{#inline-code-id-bmacravc .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- имя хоста MySQL® вида `XXXX-XXXXXXXXXX.mdb.yandexcloud.net`{#inline-code-id-s2ka3gqs .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

      Чтобы узнать FQDN хоста MySQL®:

      :::::::::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
      ::::: {.yfm-tab-list role="tablist"}
      ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="dnodbr3t" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
      Консоль управления
      :::

      ::: {.yfm-tab .yfm-tab-group diplodoc-id="cli" diplodoc-key="cli" role="tab" aria-controls="lj1ws415" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
      CLI
      :::
      :::::

      ::: {#dnodbr3t .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
      1.  Перейдите на страницу кластера MySQL® в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"}.
      2.  На вкладке **Базы данных** рядом с БД нажмите значок ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxMCIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDIxIDEwIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMjgyIDVjMC0xLjEwNS45MTgtMiAyLjA1MS0yIDEuMTM0IDAgMi4wNTIuODk1IDIuMDUyIDJzLS45MTggMi0yLjA1MiAyQzMuMiA3IDIuMjgyIDYuMTA1IDIuMjgyIDVabTguMjA1LTJjLTEuMTMzIDAtMi4wNTEuODk1LTIuMDUxIDJzLjkxOCAyIDIuMDUxIDIgMi4wNTEtLjg5NSAyLjA1MS0yLS45MTgtMi0yLjA1LTJabTYuMTU0IDBjLTEuMTMzIDAtMi4wNTEuODk1LTIuMDUxIDJzLjkxOCAyIDIuMDUxIDIgMi4wNTEtLjg5NSAyLjA1MS0yLS45MTgtMi0yLjA1MS0yWiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==) → **Подключиться**.
      3.  Найдите строчку `mysql --host=ХХХХ-ХХХХХХХХХХ.mdb.yandexcloud.net`{#inline-code-id-pieahhql .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, где `ХХХХ-ХХХХХХХХХХ.mdb.yandexcloud.net`{#inline-code-id-oqu27lrm .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- это FQDN хоста с ролью `MASTER`{#inline-code-id-d0w61sfh .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      :::

      ::::::: {#lj1ws415 .yfm-tab-panel role="tabpanel" aria-labelledby="cli" data-title="CLI"}
      [Получите список хостов](https://yandex.cloud/ru/docs/managed-mysql/operations/hosts#list) и скопируйте `NAME`{#inline-code-id-it1gjiq0 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} хоста с ролью `MASTER`{#inline-code-id-vw912so7 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

      :::: yfm-code-floating-container
      ``` {.hljs .bash}
      yc managed-mysql host list --cluster-name <имя_кластера_MySQL®>
      ```

      ::: yfm-code-floating
      ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTg3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01ODciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTU4NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTU4Ny5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
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
      ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTg4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01ODgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTU4OCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTU4OC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
      :::
      ::::
      :::::::
      ::::::::::::

5.  Перезапустите Nginx и PHP-FPM:

    :::::::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    ::::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-2" diplodoc-key="ubuntu" role="tab" aria-controls="xeenpwl9" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Debian/Ubuntu
    :::

    ::: {.yfm-tab .yfm-tab-group diplodoc-id="centos-2" diplodoc-key="centos" role="tab" aria-controls="lzxxqhf9" aria-selected="false" tabindex="-1" diplodoc-is-active="false"}
    CentOS
    :::
    :::::

    ::::: {#xeenpwl9 .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-2" data-title="Debian/Ubuntu"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo systemctl restart nginx.service
    sudo systemctl restart php7.4-fpm.service
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjA4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02MDgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTYwOCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTYwOC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::

    ::::: {#lzxxqhf9 .yfm-tab-panel role="tabpanel" aria-labelledby="centos-2" data-title="CentOS"}
    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo systemctl restart nginx.service
    sudo systemctl restart php-fpm.service
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjExIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02MTEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTYxMSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTYxMS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
    :::::
    ::::::::::::

## [[Завершите настройку WordPress]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#configure-wordpress){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Завершите настройку WordPress {#configure-wordpress}

1.  В блоке **Сеть** на странице ВМ в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} найдите публичный IP-адрес ВМ.
2.  Перейдите по адресу ВМ в браузере.
3.  Выберите язык и нажмите кнопку **Продолжить**.
4.  Заполните информацию для доступа к сайту:
    - Укажите любое название сайта, например, `wp-your-project`{#inline-code-id-n9ch4hrl .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - Укажите имя пользователя, которое будет использоваться для входа в административную панель, например, `admin`{#inline-code-id-txkvfzoa .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - Укажите пароль, который будет использоваться для входа в административную панель.
    - Укажите вашу электронную почту.
5.  Нажмите кнопку **Установить WordPress**.
6.  Если установка прошла успешно, нажмите кнопку **Войти**.
7.  Войдите на сайт, используя указанные на прошлых шагах имя пользователя и пароль. После этого откроется административная панель, в которой можно приступать к работе с вашим сайтом.

## [[Настройте DNS]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#configure-dns){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Настройте DNS {#configure-dns}

Если у вас есть зарегистрированное доменное имя, воспользуйтесь сервисом Cloud DNS для управления доменом.

В инструкции ниже описана настройка DNS для доменного имени `example.com`{#inline-code-id-idw3w994 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

### [[Добавьте зону DNS]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-dns-zone){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Добавьте зону DNS {#create-dns-zone}

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="xupsy0wy" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#xupsy0wy .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
Чтобы добавить [публичную зону DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone#public-zones):

1.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Cloud DNS** в [каталоге](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder), где требуется создать [зону DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone).
2.  Нажмите кнопку **Создать зону**.
3.  Задайте настройки зоны DNS:
    - **Зона** --- `example.com.`{#inline-code-id-06ath7cs .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Или укажите ваш зарегистрированный домен.
    - **Тип** --- `Публичная`{#inline-code-id-2g1g7en1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Имя** --- `example-zone-1`{#inline-code-id-u51edxdv .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
4.  Нажмите кнопку **Создать**.
:::
::::::

### [[Добавьте ресурсные записи]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#create-dns-records){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Добавьте ресурсные записи {#create-dns-records}

Создайте в публичной зоне записи DNS:

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console-1" diplodoc-key="console" role="tab" aria-controls="67awuf1g" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#67awuf1g .yfm-tab-panel .active role="tabpanel" aria-labelledby="console-1" data-title="Консоль управления"}
1.  В блоке **Сеть** на странице [виртуальной машины](https://yandex.cloud/ru/docs/compute/concepts/vm) в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} найдите [публичный IP-адрес](https://yandex.cloud/ru/docs/vpc/concepts/address#public-addresses) ВМ.
2.  Создайте запись [типа А](https://yandex.cloud/ru/docs/dns/concepts/resource-record#a):
    - Откройте раздел **Cloud DNS** в каталоге, где находится зона DNS `example.com`{#inline-code-id-6svp5461 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - Выберите зону DNS `example.com`{#inline-code-id-4r49hg83 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} из списка.
    - Нажмите кнопку **Создать запись**.
    - Задайте параметры записи:
      - **Имя** --- оставьте пустым.
      - **Тип** --- оставьте значение `А`{#inline-code-id-uo4bhdcz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **Значение** --- введите публичный адрес вашей ВМ.
      - **TTL (в секундах)** (время кеширования записи) --- оставьте значение по умолчанию.
    - Нажмите кнопку **Создать**.
3.  Создайте запись [типа CNAME](https://yandex.cloud/ru/docs/dns/concepts/resource-record#cname):
    - Выберите зону DNS `example.com`{#inline-code-id-1tnbr3bh .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} из списка.
    - Нажмите кнопку **Создать запись**.
    - Задайте параметры записи:
      - **Имя** --- `www`{#inline-code-id-mqths8uv .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **Тип** --- выберите значение `CNAME`{#inline-code-id-ot5pkt7s .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **Значение** --- введите `example.com`{#inline-code-id-n1o4ahmp .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **TTL (в секундах)** (время кеширования записи) --- оставьте значение по умолчанию.
    - Нажмите кнопку **Создать**.
:::
::::::

### [[Делегируйте доменное имя]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#delegate-domain){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Делегируйте доменное имя {#delegate-domain}

Делегирование --- это перенос ответственности с серверов регистратора на ваши серверы. Для домена создаются ресурсные записи [типа NS](https://yandex.cloud/ru/docs/dns/concepts/resource-record#ns) (`ns1.yandexcloud.net`{#inline-code-id-qqyyc5n3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `ns2.yandexcloud.net`{#inline-code-id-u2tfjhvi .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}).

Чтобы делегировать домен, укажите для него DNS-серверы в личном кабинете регистратора.

Делегирование происходит не сразу. Серверы интернет-провайдеров обычно обновляют записи в течение 24 часов (86 400 секунд). Это обусловлено значением TTL, в течение которого кешируются записи для доменов.

Проверить делегирование домена можно с помощью [сервиса Whois[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.reg.ru/whois/check_site){.yfm-external-link target="_blank" rel="noreferrer noopener"} или утилиты `dig`{#inline-code-id-v49995mi .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

:::: yfm-code-floating-container
``` {.hljs .bash}
dig +short NS example.com
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iODgxIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi04ODEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTg4MSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTg4MS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::

Результат:

:::: yfm-code-floating-container
``` {.hljs .text}
ns2.yandexcloud.net.
ns1.yandexcloud.net.
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iODg1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi04ODUiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTg4NSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTg4NS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::

## [[Проверьте работу сайта]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#test-site){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Проверьте работу сайта {#test-site}

Чтобы проверить работу сайта, введите в браузере его IP-адрес или доменное имя:

- `http://<публичный_IP-адрес_ВМ>`{#inline-code-id-ye26azcu .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
- `http://www.example.com`{#inline-code-id-5gjrigwl .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

Для входа в панель управления WordPress используйте адрес `http://www.example.com/wp-admin/`{#inline-code-id-5fkggiy7 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

## [[Как удалить созданные ресурсы]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#clear-out){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Как удалить созданные ресурсы {#clear-out}

Чтобы перестать платить за созданные ресурсы:

1.  [Удалите](https://yandex.cloud/ru/docs/dns/operations/zone-delete) зону DNS.
2.  [Удалите](https://yandex.cloud/ru/docs/managed-mysql/operations/cluster-delete) кластер MySQL®.
3.  [Удалите](https://yandex.cloud/ru/docs/compute/operations/vm-control/vm-delete) ВМ.

Если вы зарезервировали для ВМ статический публичный IP-адрес, [удалите его](https://yandex.cloud/ru/docs/vpc/operations/address-delete).

#### [[См. также]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/console#see-also){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}См. также {#see-also}

- [Создание сайта на WordPress с кластером базы данных MySQL® с помощью Terraform](https://yandex.cloud/ru/docs/tutorials/web/wordpress-mysql/terraform).
:::::::::::::::::::::::

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
::::::::::::::::::::::::::::::::::::
