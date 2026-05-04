:::::::::::::::::::::::::::::::::::::::::::: {.dc-doc-page__content role="main"}
# Создание сайта на WordPress с помощью консоли управления {#создание-сайта-на-wordpress-с-помощью-консоли-управления .dc-doc-page-title .dc-doc-page__title}

::::::::::::: dc-doc-page__page-contributors
:::::: dc-contributors
::: dc-contributors__title
Статья создана
:::

:::: dc-contributor-avatars__one_contributor
[![](./Создание%20сайта%20на%20WordPress%20с%20помощью%20консоли%20управления%20_%20Yandex%20Cloud%20-%20Документация_files/yc_team.svg){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://yandex.cloud/ru){.g-link .g-link_view_normal}

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
[![](./Создание%20сайта%20на%20WordPress%20с%20помощью%20консоли%20управления%20_%20Yandex%20Cloud%20-%20Документация_files/66589759){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://github.com/Always-prog){.g-link .g-link_view_normal}

::: {}
[Stepan](https://github.com/Always-prog){.g-link .g-link_view_normal}
:::
::::
::::::

:::: dc-updated-at-date
::: dc-updated-at-date__wrapper
Обновлена 10 марта 2026 г.
:::
::::
:::::::::::::

::: {.dc-doc-page__content-mini-toc .yfm}
- [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#before-you-begin)
  - [Необходимые платные ресурсы](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#paid-resources)
- [Создайте группу безопасности](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-security-group)
- [Создайте ВМ для WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-vm)
- [Настройте DNS (если есть доменное имя)](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#configure-dns)
  - [Добавьте зону DNS](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-dns-zone)
  - [Добавьте ресурсные записи](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-dns-records)
  - [Делегируйте доменное имя](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#delegate-domain)
- [Получите данные для аутентификации в веб-интерфейсе](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#get-auth-data)
- [Подключитесь к веб-интерфейсу WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#connect-wordpress-interface)
- [Как удалить созданные ресурсы](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#clear-out)
:::

::::::::::::::::::::::::::: {.dc-doc-page__body .dc-doc-page__body_text-size_m .yfm}
Чтобы создать и настроить [сайт на WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress/) с помощью консоли управления Yandex Cloud:

1.  [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#before-you-begin).
2.  [Создайте группу безопасности](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-security-group).
3.  [Создайте ВМ для WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-vm).
4.  [Настройте DNS (если есть доменное имя)](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#configure-dns).
5.  [Получите данные для аутентификации в веб-интерфейсе](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#get-auth-data).
6.  [Подключитесь к веб-интерфейсу WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#connect-wordpress-interface).

Если созданные ресурсы вам больше не нужны, [удалите их](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#clear-out).

## [[Подготовьте облако к работе]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#before-you-begin){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Подготовьте облако к работе {#before-you-begin}

Зарегистрируйтесь в Yandex Cloud и создайте [платежный аккаунт](https://yandex.cloud/ru/docs/billing/concepts/billing-account):

1.  Перейдите в [консоль управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"}, затем войдите в Yandex Cloud или зарегистрируйтесь.
2.  На странице **[Yandex Cloud Billing[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://center.yandex.cloud/billing/accounts){.yfm-external-link target="_blank" rel="noreferrer noopener"}** убедитесь, что у вас подключен платежный аккаунт, и он находится в [статусе](https://yandex.cloud/ru/docs/billing/concepts/billing-account-statuses) `ACTIVE`{#inline-code-id-hhmlfu23 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `TRIAL_ACTIVE`{#inline-code-id-76hxzhcb .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Если платежного аккаунта нет, [создайте его](https://yandex.cloud/ru/docs/billing/quickstart/) и [привяжите](https://yandex.cloud/ru/docs/billing/operations/pin-cloud) к нему облако.

Если у вас есть активный платежный аккаунт, вы можете создать или выбрать [каталог](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder), в котором будет работать ваша инфраструктура, на [странице облака[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/cloud){.yfm-external-link target="_blank" rel="noreferrer noopener"}.

[Подробнее об облаках и каталогах](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy).

Убедитесь, что в выбранном [каталоге](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder) есть [облачная сеть](https://yandex.cloud/ru/docs/vpc/concepts/network#network) с [подсетью](https://yandex.cloud/ru/docs/vpc/concepts/network#subnet) хотя бы в одной [зоне доступности](https://yandex.cloud/ru/docs/overview/concepts/geo-scope). Для этого на странице каталога выберите сервис **VPC**. Если в списке есть сеть --- нажмите на нее, чтобы увидеть список подсетей. Если нужных подсетей или сети нет, [создайте их](https://yandex.cloud/ru/docs/vpc/quickstart).

### [[Необходимые платные ресурсы]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#paid-resources){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Необходимые платные ресурсы {#paid-resources}

В стоимость поддержки сайта на WordPress входит:

- плата за постоянно запущенную ВМ (см. [тарифы Yandex Compute Cloud](https://yandex.cloud/ru/docs/compute/pricing));
- плата за использование динамического или статического [публичного IP-адреса](https://yandex.cloud/ru/docs/vpc/concepts/address#public-addresses) (см. [тарифы Yandex Virtual Private Cloud](https://yandex.cloud/ru/docs/vpc/pricing));
- плата за публичные [DNS-запросы](https://yandex.cloud/ru/docs/glossary/dns) и [зоны DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone), если вы используете [Yandex Cloud DNS](https://yandex.cloud/ru/docs/dns) (см. [тарифы Cloud DNS](https://yandex.cloud/ru/docs/dns/pricing)).

## [[Создайте группу безопасности]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-security-group){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Создайте группу безопасности {#create-security-group}

Чтобы создать [группу безопасности](https://yandex.cloud/ru/docs/vpc/concepts/security-groups):

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="gjuql9gh" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#gjuql9gh .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
1.  В [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} выберите каталог.

2.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Virtual Private Cloud**.

3.  Откройте вкладку **Группы безопасности**.

4.  Нажмите кнопку **Создать группу безопасности**.

5.  Укажите **Имя** группы: `wordpress`{#inline-code-id-n15ue7wb .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

6.  Выберите **Сеть**.

7.  В блоке **Правила** создайте следующие правила по инструкции под таблицей:

      -----------------------------------------------------------------------------------
      Направление\   Описание    Диапазон\   Протокол    Тип источника /\   Источник /\
      трафика                    портов                  назначения         назначение
      -------------- ----------- ----------- ----------- ------------------ -------------
      Исходящий      any         Весь        Любой       CIDR               0.0.0.0/0

      Входящий       ext-http    80          TCP         CIDR               0.0.0.0/0

      Входящий       ext-https   443         TCP         CIDR               0.0.0.0/0

      Входящий       ext-ssh     22          TCP         CIDR               0.0.0.0/0
      -----------------------------------------------------------------------------------

    1.  Выберите вкладку **Исходящий трафик** или **Входящий трафик**.
    2.  Нажмите кнопку **Добавить правило**.
    3.  В открывшемся окне в поле **Диапазон портов** укажите порт, куда будет поступать трафик. Для исходящего трафика не указывайте ничего.
    4.  В поле **Протокол** укажите нужный протокол. Для исходящего трафика оставьте `Любой`{#inline-code-id-g9zs536g .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, чтобы разрешить передачу трафика по всем протоколам.
    5.  В поле **Назначение** или **Источник** выберите `CIDR`{#inline-code-id-yjruhl3b .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- правило будет применено к диапазону IP-адресов. В поле **CIDR блоки** введите `0.0.0.0`{#inline-code-id-uxt1r4yt .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, в списке после **/** выберите `0`{#inline-code-id-vfh53poy .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    6.  Нажмите кнопку **Сохранить**. Таким образом создайте все правила из таблицы.

8.  Нажмите кнопку **Сохранить**.
:::
::::::

## [[Создайте ВМ для WordPress]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-vm){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Создайте ВМ для WordPress {#create-vm}

Чтобы создать ВМ:

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console-1" diplodoc-key="console" role="tab" aria-controls="ve13rs19" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#ve13rs19 .yfm-tab-panel .active role="tabpanel" aria-labelledby="console-1" data-title="Консоль управления"}
1.  На странице [каталога](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder) в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} нажмите кнопку ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS43NWEuNzUuNzUgMCAwIDEgLjc1Ljc1djQuNzVoNC43NWEuNzUuNzUgMCAwIDEgMCAxLjVIOC43NXY0Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY4Ljc1SDIuNWEuNzUuNzUgMCAwIDEgMC0xLjVoNC43NVYyLjVBLjc1Ljc1IDAgMCAxIDggMS43NSIgY2xpcC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==) **Создать ресурс** и выберите `Виртуальная машина`{#inline-code-id-jttjx925 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

2.  В блоке **Образ загрузочного диска** в поле **Поиск продукта** введите `WordPress`{#inline-code-id-5q6mvpqg .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и выберите публичный образ [WordPress](https://yandex.cloud/ru/marketplace/products/yc/wordpress).

3.  В блоке **Расположение** выберите [зону доступности](https://yandex.cloud/ru/docs/overview/concepts/geo-scope), в которой будет находиться ВМ. Если вы не знаете, какая зона доступности вам нужна, оставьте выбранную по умолчанию.

4.  В блоке **Вычислительные ресурсы** перейдите на вкладку `Своя конфигурация`{#inline-code-id-g8q6voql .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и укажите необходимую [платформу](https://yandex.cloud/ru/docs/compute/concepts/vm-platforms), количество vCPU и объем RAM:

    - **Платформа** --- `Intel Ice Lake`{#inline-code-id-wwsq6vx3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **vCPU** --- `2`{#inline-code-id-z1xvhnrx .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Гарантированная доля vCPU** --- `20%`{#inline-code-id-ibkx1hz1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **RAM** --- `1 ГБ`{#inline-code-id-440qugb7 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

5.  В блоке **Сетевые настройки**:

    - В поле **Подсеть** выберите сеть, в которой вы создали группу безопасности `wordpress`{#inline-code-id-lmxgdz88 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, и [подсеть](https://yandex.cloud/ru/docs/vpc/concepts/network#subnet), к которой нужно подключить ВМ. Если подсети еще нет, [создайте](https://yandex.cloud/ru/docs/vpc/operations/subnet-create) ее.
    - В поле **Публичный IP-адрес** оставьте значение `Автоматически`{#inline-code-id-gd7eg2lb .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, чтобы назначить ВМ случайный внешний IP-адрес из пула Yandex Cloud, или выберите статический адрес из списка, если вы зарезервировали его заранее.
    - В поле **Группы безопасности** выберите группу безопасности `wordpress`{#inline-code-id-44x5o4nv .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

6.  В блоке **Доступ** выберите вариант **SSH-ключ** и укажите данные для доступа на ВМ:

    - В поле **Логин** введите имя пользователя. Не используйте имя `root`{#inline-code-id-ft4qc2ou .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или другие имена, зарезервированные ОС. Для выполнения операций, требующих прав суперпользователя, используйте команду `sudo`{#inline-code-id-k0179qxa .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    - В поле **SSH-ключ** выберите SSH-ключ, сохраненный в вашем профиле [пользователя организации](https://yandex.cloud/ru/docs/organization/concepts/membership).

      Если в вашем профиле нет сохраненных SSH-ключей или вы хотите добавить новый ключ:

      1.  Нажмите кнопку **Добавить ключ**.

      2.  Задайте имя SSH-ключа.

      3.  Выберите вариант:

          - `Ввести вручную`{#inline-code-id-bub2og2y .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- вставьте содержимое открытого [SSH](https://yandex.cloud/ru/docs/glossary/ssh-keygen)-ключа. Пару SSH-ключей необходимо [создать](https://yandex.cloud/ru/docs/compute/operations/vm-connect/ssh#creating-ssh-keys) самостоятельно.

          - `Загрузить из файла`{#inline-code-id-6r5t0o30 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- загрузите открытую часть SSH-ключа. Пару SSH-ключей необходимо создать самостоятельно.

          - `Сгенерировать ключ`{#inline-code-id-vq6vh6ni .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- автоматическое создание пары SSH-ключей.

            При добавлении сгенерированного SSH-ключа будет создан и загружен архив с парой ключей. В ОС на базе Linux или macOS распакуйте архив в папку `/home/<имя_пользователя>/.ssh`{#inline-code-id-kqs88wdw .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. В ОС Windows распакуйте архив в папку `C:\Users\<имя_пользователя>/.ssh`{#inline-code-id-yixcbr1n .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Дополнительно вводить открытый ключ в консоли управления не требуется.

      4.  Нажмите кнопку **Добавить**.

      SSH-ключ будет добавлен в ваш профиль пользователя организации. Если в организации [отключена](https://yandex.cloud/ru/docs/organization/operations/os-login-access) возможность добавления пользователями SSH-ключей в свои профили, добавленный открытый SSH-ключ будет сохранен только в профиле пользователя внутри создаваемого ресурса.

7.  В блоке **Общая информация** задайте имя ВМ: `wordpress`{#inline-code-id-ps2xrlqy .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

8.  Нажмите **Создать ВМ**.

Создание ВМ может занять несколько минут. Когда ВМ перейдет в статус `RUNNING`{#inline-code-id-nqzjxxnz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, вы можете начать настраивать сайт.

При создании ВМ назначается публичный IP-адрес и [имя хоста (FQDN)](https://yandex.cloud/ru/docs/compute/concepts/network#hostname). Эти данные можно использовать при настройке DNS и для доступа по SSH.
:::
::::::

## [[Настройте DNS (если есть доменное имя)]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#configure-dns){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Настройте DNS (если есть доменное имя) {#configure-dns}

Если у вас есть зарегистрированное доменное имя, воспользуйтесь сервисом [Yandex Cloud DNS](https://yandex.cloud/ru/docs/dns) для управления доменом.

В инструкции ниже описана настройка DNS для доменного имени `example.com`{#inline-code-id-3dfd3kvy .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

### [[Добавьте зону DNS]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-dns-zone){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Добавьте зону DNS {#create-dns-zone}

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="t7zbaubj" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#t7zbaubj .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
Чтобы добавить [публичную зону DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone#public-zones):

1.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Cloud DNS** в [каталоге](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder), где требуется создать [зону DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone).
2.  Нажмите кнопку **Создать зону**.
3.  Задайте настройки зоны DNS:
    - **Зона** --- `example.com.`{#inline-code-id-9dco4589 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Или укажите ваш зарегистрированный домен.
    - **Тип** --- `Публичная`{#inline-code-id-og8to90c .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Имя** --- `example-zone-1`{#inline-code-id-vixx6tgq .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
4.  Нажмите кнопку **Создать**.
:::
::::::

### [[Добавьте ресурсные записи]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#create-dns-records){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Добавьте ресурсные записи {#create-dns-records}

Создайте в публичной зоне записи DNS:

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console-1" diplodoc-key="console" role="tab" aria-controls="wpke1gcv" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#wpke1gcv .yfm-tab-panel .active role="tabpanel" aria-labelledby="console-1" data-title="Консоль управления"}
1.  В блоке **Сеть** на странице [виртуальной машины](https://yandex.cloud/ru/docs/compute/concepts/vm) в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} найдите [публичный IP-адрес](https://yandex.cloud/ru/docs/vpc/concepts/address#public-addresses) ВМ.
2.  Создайте запись [типа А](https://yandex.cloud/ru/docs/dns/concepts/resource-record#a):
    - Откройте раздел **Cloud DNS** в каталоге, где находится зона DNS `example.com`{#inline-code-id-5cwnv1kl .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - Выберите зону DNS `example.com`{#inline-code-id-yplwfcd3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} из списка.
    - Нажмите кнопку **Создать запись**.
    - Задайте параметры записи:
      - **Имя** --- оставьте пустым.
      - **Тип** --- оставьте значение `А`{#inline-code-id-3xt18qfd .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **Значение** --- введите публичный адрес вашей ВМ.
      - **TTL (в секундах)** (время кеширования записи) --- оставьте значение по умолчанию.
    - Нажмите кнопку **Создать**.
3.  Создайте запись [типа CNAME](https://yandex.cloud/ru/docs/dns/concepts/resource-record#cname):
    - Выберите зону DNS `example.com`{#inline-code-id-vawxa7x1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} из списка.
    - Нажмите кнопку **Создать запись**.
    - Задайте параметры записи:
      - **Имя** --- `www`{#inline-code-id-dqt1stv6 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **Тип** --- выберите значение `CNAME`{#inline-code-id-hmo4gtkg .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **Значение** --- введите `example.com`{#inline-code-id-g3b9onc5 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **TTL (в секундах)** (время кеширования записи) --- оставьте значение по умолчанию.
    - Нажмите кнопку **Создать**.
:::
::::::

### [[Делегируйте доменное имя]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#delegate-domain){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Делегируйте доменное имя {#delegate-domain}

Делегирование --- это перенос ответственности с серверов регистратора на ваши серверы. Для домена создаются ресурсные записи [типа NS](https://yandex.cloud/ru/docs/dns/concepts/resource-record#ns) (`ns1.yandexcloud.net`{#inline-code-id-nsvv2rjs .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `ns2.yandexcloud.net`{#inline-code-id-gly6v31t .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}).

Чтобы делегировать домен, укажите для него DNS-серверы в личном кабинете регистратора.

Делегирование происходит не сразу. Серверы интернет-провайдеров обычно обновляют записи в течение 24 часов (86 400 секунд). Это обусловлено значением TTL, в течение которого кешируются записи для доменов.

Проверить делегирование домена можно с помощью [сервиса Whois[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.reg.ru/whois/check_site){.yfm-external-link target="_blank" rel="noreferrer noopener"} или утилиты `dig`{#inline-code-id-raobfe2i .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

:::: yfm-code-floating-container
``` {.hljs .bash}
dig +short NS example.com
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjQ4Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02NDgiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY0OCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY0OC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::

Результат:

:::: yfm-code-floating-container
``` {.hljs .text}
ns2.yandexcloud.net.
ns1.yandexcloud.net.
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjUyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02NTIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY1MiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY1Mi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::

## [[Получите данные для аутентификации в веб-интерфейсе]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#get-auth-data){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Получите данные для аутентификации в веб-интерфейсе {#get-auth-data}

При создании ВМ автоматически создается учетная запись администратора для веб-интерфейса. Чтобы получить данные для аутентификации:

1.  Подключитесь по протоколу SSH к созданной ВМ:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    ssh <имя_пользователя>@<публичный_IP-адрес_ВМ>
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjY0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02NjQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY2NCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY2NC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  Переключитесь в режим root, чтобы получить привилегии суперпользователя:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo su
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjcwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02NzAiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY3MCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY3MC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

3.  Откройте файл для чтения:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    cat root/default_passwords.txt
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjc2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02NzYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY3NiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY3Ni5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

4.  Скопируйте имя пользователя и пароль из строк `WP_ADMIN_USER`{#inline-code-id-zd2wrdmg .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `WP_ADMIN_PASSWORD`{#inline-code-id-0n96fvch .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

## [[Подключитесь к веб-интерфейсу WordPress]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#connect-wordpress-interface){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Подключитесь к веб-интерфейсу WordPress {#connect-wordpress-interface}

Чтобы подключиться к веб-интерфейсу WordPress:

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console-2" diplodoc-key="console" role="tab" aria-controls="xbmzpfye" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#xbmzpfye .yfm-tab-panel .active role="tabpanel" aria-labelledby="console-2" data-title="Консоль управления"}
1.  В [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} перейдите на страницу ВМ, в блоке **Сеть** найдите публичный IP-адрес ВМ и внесите в [ресурсную запись](https://yandex.cloud/ru/docs/dns/concepts/dns-zone) [типа А](https://yandex.cloud/ru/docs/dns/concepts/resource-record#a), созданную ранее.

    ![add-ssh](./Создание%20сайта%20на%20WordPress%20с%20помощью%20консоли%20управления%20_%20Yandex%20Cloud%20-%20Документация_files/vm-create-5.png){yfm_patched="1"}

2.  В браузере перейдите по доменному имени, которое вы настроили, или по адресу ВМ в панель администратора WordPress: `http://<доменное_имя_или_публичный_адрес_ВМ>/wp-admin`{#inline-code-id-4n4za9do .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

3.  Введите имя пользователя и пароль, сохраненные ранее.
:::
::::::

## [[Как удалить созданные ресурсы]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#clear-out){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Как удалить созданные ресурсы {#clear-out}

Чтобы перестать платить за созданные ресурсы:

1.  [Удалите](https://yandex.cloud/ru/docs/compute/operations/vm-control/vm-delete) ВМ `wordpress`{#inline-code-id-1z6agzzp .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
2.  [Удалите](https://yandex.cloud/ru/docs/vpc/operations/address-delete) статический публичный IP-адрес, если вы зарезервировали его специально для этой ВМ.
3.  [Удалите](https://yandex.cloud/ru/docs/dns/operations/resource-record-delete) DNS-записи и [удалите](https://yandex.cloud/ru/docs/dns/operations/zone-delete) DNS-зону, если вы использовали Cloud DNS.

#### [[См. также]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress/console#see-also){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}См. также {#see-also}

- [Создание сайта на WordPress с помощью Terraform](https://yandex.cloud/ru/docs/tutorials/web/wordpress/terraform).
:::::::::::::::::::::::::::

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
::::::::::::::::::::::::::::::::::::::::::::
