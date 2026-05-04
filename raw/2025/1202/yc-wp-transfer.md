:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: {.dc-doc-page__content role="main"}
# Перенос WordPress сайта с хостинга в Yandex Cloud {#перенос-wordpress-сайта-с-хостинга-в-yandex-cloud .dc-doc-page-title .dc-doc-page__title}

::::::::::::: dc-doc-page__page-contributors
:::::: dc-contributors
::: dc-contributors__title
Статья создана
:::

:::: dc-contributor-avatars__one_contributor
[![](./Перенос%20WordPress%20сайта%20с%20хостинга%20в%20Yandex%20Cloud%20_%20Yandex%20Cloud%20-%20Документация_files/yc_team.svg){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://yandex.cloud/ru){.g-link .g-link_view_normal}

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
[![](./Перенос%20WordPress%20сайта%20с%20хостинга%20в%20Yandex%20Cloud%20_%20Yandex%20Cloud%20-%20Документация_files/62282859){.dc-contributor-avatars__avatar .dc-contributor-avatars__avatar_size_small}](https://github.com/dgorpinchuk){.g-link .g-link_view_normal}

::: {}
[Gorpinchuk D.](https://github.com/dgorpinchuk){.g-link .g-link_view_normal}
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
- [Сделайте бэкап сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-backup)
- [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#before-begin)
  - [Необходимые платные ресурсы](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#paid-resources)
- [Создайте ВМ для WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-vm)
- [Подключитесь к ВМ](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#connect-vm)
- [Установите и настройте дополнительные компоненты](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#additional-components)
  - [Установите редактор nano](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#install-nano)
  - [Установите phpMyAdmin](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#install-phpmyadmin)
  - [Настройте phpMyAdmin](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#setting-phpmyadmin)
- [Импортируйте БД](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#import-db)
  - [Отключите phpMyAdmin](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#disable-phpmyadmin)
- [Перенесите файлы сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#transfer-files)
- [Настройте DNS](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#configure-dns)
  - [Добавьте зону DNS](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-dns-zone)
  - [Добавьте ресурсные записи](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-dns-records)
  - [Делегируйте доменное имя](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#delegate-domain)
  - [Проверьте работу сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#test-site)
- [Установите SSL-сертификат c помощью Let's Encrypt®](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#setting-ssl)
  - [Установите клиент Let's Encrypt](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#install-client)
  - [Получите SSL-сертификат](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#get-ssl)
  - [Выполните автообновление](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#self-update)
- [Проверьте работу сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#check-site)
:::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: {.dc-doc-page__body .dc-doc-page__body_text-size_m .yfm}
[WordPress[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://wordpress.com/){.yfm-external-link target="_blank" rel="noreferrer noopener"} --- система управления контентом с открытым исходным кодом.

С помощью WordPress вы можете создавать новостные сайты, личные или корпоративные блоги, сайты организаций, онлайн-магазины и другие сервисы.

Система позволяет с минимальными усилиями развернуть сайт, используя один из множества шаблонов или собственный дизайн. Готовые плагины помогают легко добавить к созданному сервису новые блоки или функциональности.

В Yandex Cloud вы можете быстро [создать сайт на WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress/) или перенести с другого хостинга.

Для переноса сайта на CMS WordPress в Yandex Cloud:

1.  [Сделайте бэкап сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-backup).
2.  [Подготовьте облако к работе](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#before-begin).
3.  [Создайте виртуальную машину для WordPress](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-vm).
4.  [Подключитесь к ВМ](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#connect-vm).
5.  [Установите и настройте дополнительные компоненты](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#additional-components).
6.  [Импортируйте базу данных](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#import-db).
7.  [Перенесите файлы сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#transfer-files).
8.  [Настройте DNS](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#configure-dns).
9.  [Создайте SSL-сертификат](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#setting-ssl).
10. [Проверьте работу сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#check-site).

## [[Сделайте бэкап сайта]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-backup){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Сделайте бэкап сайта {#create-backup}

Сделайте [бэкап](https://yandex.cloud/ru/docs/glossary/backup) файлов сайта и БД одним из способов:

- С помощью различных плагинов для WordPress (например, [BackWPup[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://ru.wordpress.org/plugins/backwpup){.yfm-external-link target="_blank" rel="noreferrer noopener"} или [Updraft Plus[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://ru.wordpress.org/plugins/updraftplus){.yfm-external-link target="_blank" rel="noreferrer noopener"}).

- С помощью встроенных средств в панели управления хостингом, на котором располагается ваш сайт.

- Скопировать все файлы на свой жесткий диск через FTP-клиент, а БД экспортировать через панель [phpMyAdmin[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.phpmyadmin.net/){.yfm-external-link target="_blank" rel="noreferrer noopener"}.

  Этот вариант дольше и займет от 5 до 20 минут --- придется копировать много небольших файлов, из которых состоит сайт.

## [[Подготовьте облако к работе]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#before-begin){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Подготовьте облако к работе {#before-begin}

Зарегистрируйтесь в Yandex Cloud и создайте [платежный аккаунт](https://yandex.cloud/ru/docs/billing/concepts/billing-account):

1.  Перейдите в [консоль управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"}, затем войдите в Yandex Cloud или зарегистрируйтесь.
2.  На странице **[Yandex Cloud Billing[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://center.yandex.cloud/billing/accounts){.yfm-external-link target="_blank" rel="noreferrer noopener"}** убедитесь, что у вас подключен платежный аккаунт, и он находится в [статусе](https://yandex.cloud/ru/docs/billing/concepts/billing-account-statuses) `ACTIVE`{#inline-code-id-2nqt75h4 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `TRIAL_ACTIVE`{#inline-code-id-z2m8bcnc .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Если платежного аккаунта нет, [создайте его](https://yandex.cloud/ru/docs/billing/quickstart/) и [привяжите](https://yandex.cloud/ru/docs/billing/operations/pin-cloud) к нему облако.

Если у вас есть активный платежный аккаунт, вы можете создать или выбрать [каталог](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder), в котором будет работать ваша инфраструктура, на [странице облака[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/cloud){.yfm-external-link target="_blank" rel="noreferrer noopener"}.

[Подробнее об облаках и каталогах](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy).

Убедитесь, что в выбранном [каталоге](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder) есть [облачная сеть](https://yandex.cloud/ru/docs/vpc/concepts/network#network) с [подсетью](https://yandex.cloud/ru/docs/vpc/concepts/network#subnet) хотя бы в одной [зоне доступности](https://yandex.cloud/ru/docs/overview/concepts/geo-scope). Для этого на странице каталога выберите сервис **Virtual Private Cloud**. Если в списке есть сеть --- нажмите на нее, чтобы увидеть список подсетей. Если нужных подсетей или сети нет, [создайте их](https://yandex.cloud/ru/docs/vpc/quickstart).

### [[Необходимые платные ресурсы]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#paid-resources){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Необходимые платные ресурсы {#paid-resources}

В стоимость поддержки сайта на WordPress входит:

- Плата за постоянно запущенную [ВМ](https://yandex.cloud/ru/docs/compute/concepts/vm) (см. [тарифы Yandex Compute Cloud](https://yandex.cloud/ru/docs/compute/pricing)).
- Плата за использование динамического или статического [публичного IP-адреса](https://yandex.cloud/ru/docs/vpc/concepts/address#public-addresses) (см. [тарифы Yandex Virtual Private Cloud](https://yandex.cloud/ru/docs/vpc/pricing)).
- Плата за публичные DNS-запросы и [зоны](https://yandex.cloud/ru/docs/dns/concepts/dns-zone) (см. [тарифы Yandex Cloud DNS](https://yandex.cloud/ru/docs/dns/pricing)).

## [[Создайте ВМ для WordPress]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-vm){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Создайте ВМ для WordPress {#create-vm}

Чтобы создать ВМ:

1.  На странице [каталога](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder) в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} нажмите кнопку ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS43NWEuNzUuNzUgMCAwIDEgLjc1Ljc1djQuNzVoNC43NWEuNzUuNzUgMCAwIDEgMCAxLjVIOC43NXY0Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY4Ljc1SDIuNWEuNzUuNzUgMCAwIDEgMC0xLjVoNC43NVYyLjVBLjc1Ljc1IDAgMCAxIDggMS43NSIgY2xpcC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==) **Создать ресурс** и выберите `Виртуальная машина`{#inline-code-id-b593ng72 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

2.  В блоке **Образ загрузочного диска** в поле **Поиск продукта** введите `LAMP`{#inline-code-id-fjn10dkw .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и выберите публичный образ [LAMP](https://yandex.cloud/ru/marketplace/products/yc/lamp), который содержит необходимый набор компонентов: операционную систему семейства Linux, веб-сервер Apache, СУБД MySQL® и интерпретатор PHP.

3.  В блоке **Расположение** выберите [зону доступности](https://yandex.cloud/ru/docs/overview/concepts/geo-scope), в которой будет находиться ВМ. Если вы не знаете, какая зона доступности вам нужна, оставьте выбранную по умолчанию.

4.  В блоке **Диски и файловые хранилища** выберите [тип диска](https://yandex.cloud/ru/docs/compute/concepts/disk#disks_types) и задайте нужный размер.

5.  В блоке **Вычислительные ресурсы** перейдите на вкладку `Своя конфигурация`{#inline-code-id-m87hu4oc .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и укажите необходимую [платформу](https://yandex.cloud/ru/docs/compute/concepts/vm-platforms), количество vCPU и объем RAM:

    - **Платформа** --- `Intel Ice Lake`{#inline-code-id-dmwnvw7v .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **vCPU** --- `2`{#inline-code-id-1fkv6pxr .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Гарантированная доля vCPU** --- `20%`{#inline-code-id-pq4pbn9z .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **RAM** --- `1 ГБ`{#inline-code-id-we1npolj .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

6.  В блоке **Сетевые настройки**:

    - В поле **Подсеть** выберите сеть и подсеть, к которым нужно подключить ВМ. Если нужной [сети](https://yandex.cloud/ru/docs/vpc/concepts/network#network) или [подсети](https://yandex.cloud/ru/docs/vpc/concepts/network#subnet) еще нет, [создайте их](https://yandex.cloud/ru/docs/vpc/operations/subnet-create).
    - В поле **Публичный IP-адрес** оставьте значение `Автоматически`{#inline-code-id-dz8o8pmd .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, чтобы назначить ВМ случайный внешний IP-адрес из пула Yandex Cloud, или выберите статический адрес из списка, если вы зарезервировали его заранее.

7.  В блоке **Доступ** выберите вариант **SSH-ключ** и укажите данные для доступа на ВМ:

    - В поле **Логин** введите имя пользователя. Не используйте имя `root`{#inline-code-id-dngkrcwl .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или другие имена, зарезервированные ОС. Для выполнения операций, требующих прав суперпользователя, используйте команду `sudo`{#inline-code-id-83qmagj8 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    - В поле **SSH-ключ** выберите SSH-ключ, сохраненный в вашем профиле [пользователя организации](https://yandex.cloud/ru/docs/organization/concepts/membership).

      Если в вашем профиле нет сохраненных SSH-ключей или вы хотите добавить новый ключ:

      1.  Нажмите кнопку **Добавить ключ**.

      2.  Задайте имя SSH-ключа.

      3.  Выберите вариант:

          - `Ввести вручную`{#inline-code-id-0bv20e93 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- вставьте содержимое открытого [SSH](https://yandex.cloud/ru/docs/glossary/ssh-keygen)-ключа. Пару SSH-ключей необходимо [создать](https://yandex.cloud/ru/docs/compute/operations/vm-connect/ssh#creating-ssh-keys) самостоятельно.

          - `Загрузить из файла`{#inline-code-id-pqp5hpiu .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- загрузите открытую часть SSH-ключа. Пару SSH-ключей необходимо создать самостоятельно.

          - `Сгенерировать ключ`{#inline-code-id-cib0lzkj .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- автоматическое создание пары SSH-ключей.

            При добавлении сгенерированного SSH-ключа будет создан и загружен архив с парой ключей. В ОС на базе Linux или macOS распакуйте архив в папку `/home/<имя_пользователя>/.ssh`{#inline-code-id-3sorzqb1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. В ОС Windows распакуйте архив в папку `C:\Users\<имя_пользователя>/.ssh`{#inline-code-id-m9efeixv .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Дополнительно вводить открытый ключ в консоли управления не требуется.

      4.  Нажмите кнопку **Добавить**.

      SSH-ключ будет добавлен в ваш профиль пользователя организации. Если в организации [отключена](https://yandex.cloud/ru/docs/organization/operations/os-login-access) возможность добавления пользователями SSH-ключей в свои профили, добавленный открытый SSH-ключ будет сохранен только в профиле пользователя внутри создаваемого ресурса.

8.  В блоке **Общая информация** задайте имя ВМ: `wordpress-vm`{#inline-code-id-q5l1zlf7 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    :::: {.yfm-note .yfm-accent-alert note-type="alert"}
    Внимание

    ::: yfm-note-content
    IP-адрес и [имя хоста (FQDN)](https://yandex.cloud/ru/docs/compute/concepts/network#hostname) для подключения к ВМ назначается ей при создании. Если вы выбрали вариант `Без адреса`{#inline-code-id-bw2wfe4v .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} в поле **Публичный IP-адрес**, вы не сможете обращаться к ВМ из интернета.
    :::
    ::::

9.  В блоке **Дополнительно** выберите [сервисный аккаунт](https://yandex.cloud/ru/docs/iam/concepts/users/service-accounts) или создайте новый.

10. Нажмите **Создать ВМ**.

    Создание ВМ может занять несколько минут. Когда ВМ перейдет в [статус](https://yandex.cloud/ru/docs/compute/concepts/vm-statuses) `RUNNING`{#inline-code-id-jmrszmkm .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, вы можете [загрузить на нее файлы сайта](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#upload-files).

## [[Подключитесь к ВМ]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#connect-vm){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Подключитесь к ВМ {#connect-vm}

Вы можете подключиться к ВМ по протоколу SSH, когда она будет запущена (в статусе `RUNNING`{#inline-code-id-iwgh43zc .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}). Для этого можно использовать утилиту `ssh`{#inline-code-id-b0z1bijq .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} в Linux/macOS/Windows 10 и программу [PuTTY[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.chiark.greenend.org.uk/~sgtatham/putty/){.yfm-external-link target="_blank" rel="noreferrer noopener"} для Windows 7/8.

Для подключения к ВМ необходимо указать ее публичный IP-адрес.

Чтобы скопировать публичный IP-адрес ВМ:

1.  Откройте страницу каталога в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"}.
2.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Compute Cloud**.
3.  На панели слева выберите ![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMy41aDhBMS41IDEuNSAwIDAgMSAxMy41IDV2Mi4yNWgtMTFWNUExLjUgMS41IDAgMCAxIDQgMy41TTIuNSA4Ljc1VjExQTEuNSAxLjUgMCAwIDAgNCAxMi41aDhhMS41IDEuNSAwIDAgMCAxLjUtMS41VjguNzV6TTEgNWEzIDMgMCAwIDEgMy0zaDhhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDNINGEzIDMgMCAwIDEtMy0zem0yLjc1LjVhLjc1Ljc1IDAgMCAxIC43NS0uNzVIN2EuNzUuNzUgMCAwIDEgMCAxLjVINC41YS43NS43NSAwIDAgMS0uNzUtLjc1bS43NSA0LjI1YS43NS43NSAwIDAgMCAwIDEuNUg3YS43NS43NSAwIDAgMCAwLTEuNXoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=) **Виртуальные машины**.
4.  Найдите созданную ВМ и нажмите на ее имя.
5.  В разделе **Сеть** скопируйте IP-адрес из поля **Публичный IPv4-адрес**.

Выполните [подключение к ВМ](https://yandex.cloud/ru/docs/compute/operations/vm-connect/ssh).

## [[Установите и настройте дополнительные компоненты]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#additional-components){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Установите и настройте дополнительные компоненты {#additional-components}

Перед тем, как перейти к переносу файлов, необходимо:

- Установить текстовый редактор `nano`{#inline-code-id-0jtucdnr .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- он потребуется нам для внесения правок в некоторые файлы конфигурации.
- Установить и настроить `phpMyAdmin`{#inline-code-id-8vw3vuih .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} для работы с БД сайта.

### [[Установите редактор nano]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#install-nano){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Установите редактор nano {#install-nano}

:::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu" diplodoc-key="ubuntu" role="tab" aria-controls="606qtqve" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::::: {#606qtqve .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu" data-title="Ubuntu"}
Выполните команду:

:::: yfm-code-floating-container
``` {.hljs .bash}
sudo apt install nano
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMzgxIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi0zODEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTM4MSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTM4MS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::

Дождитесь установки редактора.
:::::
::::::::

### [[Установите phpMyAdmin]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#install-phpmyadmin){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Установите phpMyAdmin {#install-phpmyadmin}

:::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-1" diplodoc-key="ubuntu" role="tab" aria-controls="a0vnn5ld" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::: {#a0vnn5ld .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-1" data-title="Ubuntu"}
1.  Выполните команды:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo apt-get update
    sudo apt-get install phpmyadmin php-mbstring php-gettext
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDAyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MDIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQwMiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQwMi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  В процессе установки выберите сервер, на который будет установлен `phpMyAdmin`{#inline-code-id-ukcgzj2h .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Выберите `Apache2`{#inline-code-id-zovt67j6 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и нажмите **пробел** на клавиатуре --- напротив `Apache2`{#inline-code-id-haxktzse .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} появится значок `*`{#inline-code-id-a50qblip .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Нажмите **Enter**.

3.  Настройте доступ `phpMyAdmin`{#inline-code-id-aispe6mr .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} к БД. Для этого на вопрос `Configure database for phpmyadmin with dbconfig-common?`{#inline-code-id-seoifsdw .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} выберите `<yes>`{#inline-code-id-tbewzpt6 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Ввод пароля можно пропустить, система автоматически сгенерирует его. Чтобы скопировать сгенерированный пароль, выполните команду:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo cat /root/default_passwords.txt
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDEzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MTMiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQxMyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQxMy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Текст файла должен содержать данные:

    :::: yfm-code-floating-container
    ``` {.hljs .text}
    MYSQL_ROOT_PASS=KjZKrQV7efFGk
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDE3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MTciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQxNyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQxNy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Скопируйте и сохраните пароль `MYSQL_ROOT_PASS`{#inline-code-id-g7bl51x1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Он понадобится далее.

4.  Включите расширение `mbstring`{#inline-code-id-vtpek7i5 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} для PHP:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo phpenmod mbstring
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDI2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MjYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQyNiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQyNi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

5.  Чтобы принять все изменения, перезапустите Apache:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo systemctl restart apache2
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDMyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00MzIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQzMiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQzMi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

6.  Откройте `phpMyAdmin`{#inline-code-id-od0wmb4o .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} через браузер. В адресной строке введите `http://<публичный_IP-адрес_ВМ>/phpmyadmin`{#inline-code-id-8sg0ug60 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    Для входа в `phpMyAdmin`{#inline-code-id-m09s3jfk .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} используйте следующие данные:

    :::: yfm-code-floating-container
    ``` {.hljs .text}
    Пользователь: root
    Пароль: сгенерированный системой (MYSQL_ROOT_PASS из файла default_passwords.txt)
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDQxIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NDEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ0MSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ0MS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
:::
::::::

### [[Настройте phpMyAdmin]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#setting-phpmyadmin){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Настройте phpMyAdmin {#setting-phpmyadmin}

Настройте дополнительный пароль для входа в панель `phpMyAdmin`{#inline-code-id-tsdht4pp .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Чтобы включить возможность использования настроек доступа в `.htaccess`{#inline-code-id-rh3vilp2 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, отредактируйте файл `phpmyadmin.conf`{#inline-code-id-mq7xr5vw .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

:::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-2" diplodoc-key="ubuntu" role="tab" aria-controls="fi1anfkl" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::: {#fi1anfkl .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-2" data-title="Ubuntu"}
1.  Выполните команду:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo nano /etc/apache2/conf-available/phpmyadmin.conf
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDY0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NjQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ2NCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ2NC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  Добавьте в файл `phpmyadmin.conf`{#inline-code-id-0n6cyhky .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} строку `AllowOverride All`{#inline-code-id-djoqmc26 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::: yfm-code-floating-container
    ``` {.hljs .text}
    <Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
    AllowOverride All
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDcwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00NzAiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ3MCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ3MC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

3.  Сохраните изменения в файле `phpmyadmin.conf`{#inline-code-id-w7otup86 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Для этого нажмите **Ctrl** + **O** и **Enter**. Для выхода из файла нажмите **Ctrl** + **X**.

4.  Перезапустите Apache:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo systemctl restart apache2
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDgxIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00ODEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ4MSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ4MS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

5.  Создайте `.htaccess`{#inline-code-id-lm9nn0pf .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo nano /usr/share/phpmyadmin/.htaccess
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDg3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00ODciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ4NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ4Ny5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

6.  Скопируйте строки в `.htaccess`{#inline-code-id-kkpw47ns .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::: yfm-code-floating-container
    ``` {.hljs .text}
    AuthType Basic
    AuthName "Restricted Files"
    AuthUserFile /etc/phpmyadmin/.htpasswd
    Require valid-user
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNDkzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi00OTMiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTQ5MyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTQ5My5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

7.  Сохраните изменения в файле.

8.  Создайте `.htpasswd`{#inline-code-id-8v47i4lr .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo htpasswd -c /etc/phpmyadmin/.htpasswd <имя_пользователя>
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTA0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01MDQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTUwNCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTUwNC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Введите желаемый пароль и повторите его.

9.  Перезапустите Apache:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo systemctl restart apache2
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTEzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01MTMiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTUxMyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTUxMy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

Теперь при входе в phpMyAdmin нужно будет ввести дополнительный логин и пароль, указанный в файле `.htpasswd`{#inline-code-id-j33adh8v .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
:::
::::::

## [[Импортируйте БД]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#import-db){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Импортируйте БД {#import-db}

:::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-3" diplodoc-key="ubuntu" role="tab" aria-controls="iitd0viw" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::: {#iitd0viw .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-3" data-title="Ubuntu"}
1.  Откройте файл конфигурации WordPress вашего сайта. Для этого распакуйте архив и в корневой папке откройте файл `wp-config.php`{#inline-code-id-yknh04r1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Найдите значения параметров `DB_USER`{#inline-code-id-4kadeppl .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, `DB_NAME`{#inline-code-id-e8ro9lre .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, `DB_PASSWORD`{#inline-code-id-kxknomrj .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    define('DB_USER', 'UsernameTEST');
    define('DB_NAME', 'database_wordpress');
    define('DB_PASSWORD', 'MySecretPassword');
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTM2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01MzYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTUzNiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTUzNi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  Зайдите в phpMyAdmin --- введите в адресной строке браузера:

    :::: yfm-code-floating-container
    ``` {.hljs .http}
    http://<публичный_IP-адрес_ВМ>/phpmyadmin`
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNTQyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi01NDIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTU0MiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTU0Mi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

3.  Перейдите в раздел **Учетные записи пользователей** и добавьте учетную запись пользователя с параметрами:

    - **Имя пользователя** --- вставьте значение для `DB_USER`{#inline-code-id-v3sh9jul .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} из `wp-config.php`{#inline-code-id-cz7pyh01 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Имя хоста** --- оставьте по умолчанию `%`{#inline-code-id-o8g6x47u .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Пароль** --- вставьте значение для `DB_PASSWORD`{#inline-code-id-xkvdv6rz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} из `wp-config.php`{#inline-code-id-1dvv6dvg .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Глобальные привилегии** --- включите опцию **Отметить все**.

    Все остальные параметры при создании пользователя оставьте по умолчанию. Внизу экрана нажмите **Вперед**.

4.  Перейдите в раздел **Базы данных**. Заполните поле **Имя базы данных** --- вставьте значение для `DB_NAME`{#inline-code-id-sv20nfaw .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} из `wp-config.php`{#inline-code-id-nwsbq19m .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Выберите кодировку `utf8_general_ci`{#inline-code-id-jr1448ur .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Нажмите **Создать**.

5.  Импортируйте БД из бэкапа:

    - В левой колонке выберите созданную БД.
    - Нажмите **Импорт** и выберите сохраненный бэкап БД. Если бэкап БД превышает установленный по умолчанию лимит 2 МБ, отредактируйте файл конфигурации `php.ini`{#inline-code-id-wu0jk66y .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, где задано данное ограничение.

    1.  Выполните команду:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo nano /etc/php/X.X/apache2/php.ini
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjAwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02MDAiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTYwMCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTYwMC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

        `X.X`{#inline-code-id-0rna6k59 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}--- версия PHP. Возможные значения `5.6`{#inline-code-id-1ovgyfq1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"},`7.0`{#inline-code-id-691v6ywb .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"},`7.1`{#inline-code-id-03aw947l .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"},`7.2`{#inline-code-id-ram6i5rz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"},`7.3`{#inline-code-id-nvti3u2a .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"},`7.4`{#inline-code-id-by7swqlw .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"},`8.0`{#inline-code-id-bbbnqd1u .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"},`8.1`{#inline-code-id-lz7xgv5m .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    2.  Отредактируйте параметры:

        - `upload_max_filesize`{#inline-code-id-kqq8l82s .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- максимальный размер загружаемого файла.
        - `post_max_size`{#inline-code-id-q5jcewu6 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- максимальный размер сообщения методом `POST`{#inline-code-id-ni8k2vtl .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        upload_max_filesize = 80M
        post_max_size = 80M
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjIxIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02MjEiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTYyMSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTYyMS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    3.  Сохраните изменения --- нажмите **Ctrl** + **O** и **Enter**. Для выхода из файла нажмите **Ctrl** + **X**.

    4.  Перезапустите Apache:

        :::: yfm-code-floating-container
        ``` {.hljs .bash}
        sudo systemctl restart apache2
        ```

        ::: yfm-code-floating
        ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjMyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02MzIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTYzMiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTYzMi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
        :::
        ::::

    5.  Повторите операцию импорта БД.
:::
::::::

### [[Отключите phpMyAdmin]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#disable-phpmyadmin){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Отключите phpMyAdmin {#disable-phpmyadmin}

Все основные действия по переносу БД выполнены. Чтобы не подвергать `phpMyAdmin`{#inline-code-id-cdaeqyna .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} атакам извне, отключите утилиту:

:::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-4" diplodoc-key="ubuntu" role="tab" aria-controls="mw81dbum" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::::: {#mw81dbum .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-4" data-title="Ubuntu"}
:::: yfm-code-floating-container
``` {.hljs .bash}
sudo a2disconf phpmyadmin.conf && sudo /etc/init.d/apache2 restart
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNjU3Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi02NTciIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTY1NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTY1Ny5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::
:::::
::::::::

Для работы с БД вы можете использовать терминал.

## [[Перенесите файлы сайта]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#transfer-files){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Перенесите файлы сайта {#transfer-files}

Чтобы перенести файлы бэкапа на ВМ, воспользуйтесь FTP-клиентом [FileZilla[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://filezilla-project.org/){.yfm-external-link target="_blank" rel="noreferrer noopener"}:

1.  Откройте FileZilla.

2.  Перейдите в раздел **Файл** → **Менеджер сайтов** и добавьте новый сайт.

3.  Выберите протокол SFTP, введите публичный IP-адрес ВМ. В разделе **Тип входа** выберите **Файл с ключом**.

4.  Укажите пользователя, созданного при настройке ВМ, и выберите файл ключа --- ключ находится в папке `/Users/<имя_пользователя>/.ssh/`{#inline-code-id-5n0vc2w7 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    FTP-клиент не видит скрытую папку по умолчанию. Нажмите сочетание клавиш **Cmd** + **Shift** + **G** и выберите файл `id_ed25519`{#inline-code-id-8tbhhgvi .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} без расширения `pub`{#inline-code-id-hi2xow6j .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Будет выведено сообщение, что файл не поддерживается. FTP-клиент предложит переконвертировать его в нужный формат. Нажмите **Да**. Сохраните переконвертированный файл в удобном вам месте.

5.  Нажмите **Подключиться** и введите кодовую фразу, которую сформировали в начале работы. Вы подключитесь к ВМ.

6.  Найдите папку `/var/www/html`{#inline-code-id-gv22e7en .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} на ВМ и скопируйте в нее файл бэкапа. Файл index.html копировать не нужно.

    :::::::::::::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
    :::: {.yfm-tab-list role="tablist"}
    ::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-5" diplodoc-key="ubuntu" role="tab" aria-controls="hb266rod" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
    Ubuntu
    :::
    ::::

    ::::::::::::: {#hb266rod .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-5" data-title="Ubuntu"}
    По умолчанию для этой папки заданы права 755. Чтобы скопировать файл архива сайта с жесткого диска в папку `html`{#inline-code-id-4n3eohoa .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, измените права на папку:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo chmod 777 /var/www/html
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNzEyIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi03MTIiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTcxMiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTcxMi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Распакуйте бэкап:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    cd /var/www/html
    tar -xvf FILENAME.tar.gz
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNzE2Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi03MTYiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTcxNiIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTcxNi5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Вместо `FILENAME`{#inline-code-id-o5ne6tqq .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} укажите название файла с архивом сайта.

    :::: {.yfm-note .yfm-accent-alert note-type="alert"}
    Внимание

    ::: yfm-note-content
    Все файлы должны распаковываться в корневую директорию `html`{#inline-code-id-t5dg5ivg .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}, а не в поддиректорию `/var/www/html/wordpress`{#inline-code-id-84kg4loc .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    :::
    ::::

    Удалите файл бэкапа, чтобы он не занимал места:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    rm FILENAME.tar.gz
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNzMzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi03MzMiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTczMyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTczMy5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Верните права на папки:

    - `html`{#inline-code-id-oxenf5zz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и вложенных папок --- `755`{#inline-code-id-xzdzyg3a .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - Для всех файлов внутри `html`{#inline-code-id-6xztb9zh .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- `644`{#inline-code-id-kgx6fxx0 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - Для `wp-config.php`{#inline-code-id-au1nq6nq .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} отдельно уровень доступа --- `600`{#inline-code-id-t8s13ap4 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    cd var/www/
    sudo find ./ -type d -exec chmod 0755 {} \;
    sudo find ./ -type f -exec chmod 0644 {} \;
    sudo chmod 600 wp-config.php
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iNzU0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi03NTQiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTc1NCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTc1NC5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Параметр `f`{#inline-code-id-ghbcgj5p .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- ищет все файлы внутри директорий. Параметр `d`{#inline-code-id-2qky1624 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- ищет все директории внутри `html`{#inline-code-id-hsfkradl .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    :::::::::::::
    ::::::::::::::::

## [[Настройте DNS]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#configure-dns){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Настройте DNS {#configure-dns}

Воспользуйтесь сервисом Cloud DNS для управления доменом.

В инструкции ниже описана настройка DNS для доменного имени `example.com`{#inline-code-id-rkprtao8 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

### [[Добавьте зону DNS]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-dns-zone){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Добавьте зону DNS {#create-dns-zone}

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console" diplodoc-key="console" role="tab" aria-controls="grpw2z6j" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#grpw2z6j .yfm-tab-panel .active role="tabpanel" aria-labelledby="console" data-title="Консоль управления"}
Чтобы добавить [публичную зону DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone#public-zones):

1.  [Перейдите](https://yandex.cloud/ru/docs/console/operations/select-service#select-service) в сервис **Cloud DNS** в [каталоге](https://yandex.cloud/ru/docs/resource-manager/concepts/resources-hierarchy#folder), где требуется создать [зону DNS](https://yandex.cloud/ru/docs/dns/concepts/dns-zone).
2.  Нажмите кнопку **Создать зону**.
3.  Задайте настройки зоны DNS:
    - **Зона** --- `example.com.`{#inline-code-id-zn8uev25 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}. Или укажите ваш зарегистрированный домен.
    - **Тип** --- `Публичная`{#inline-code-id-qd10q1er .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - **Имя** --- `example-zone-1`{#inline-code-id-yl9b64xz .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
4.  Нажмите кнопку **Создать**.
:::
::::::

### [[Добавьте ресурсные записи]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#create-dns-records){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Добавьте ресурсные записи {#create-dns-records}

Создайте в публичной зоне записи DNS:

:::::: {.yfm-tabs diplodoc-group="instructions" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="console-1" diplodoc-key="console" role="tab" aria-controls="e7nokug9" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Консоль управления
:::
::::

::: {#e7nokug9 .yfm-tab-panel .active role="tabpanel" aria-labelledby="console-1" data-title="Консоль управления"}
1.  В блоке **Сеть** на странице [виртуальной машины](https://yandex.cloud/ru/docs/compute/concepts/vm) в [консоли управления[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://console.yandex.cloud/){.yfm-external-link target="_blank" rel="noreferrer noopener"} найдите [публичный IP-адрес](https://yandex.cloud/ru/docs/vpc/concepts/address#public-addresses) ВМ.
2.  Создайте запись [типа А](https://yandex.cloud/ru/docs/dns/concepts/resource-record#a):
    - Откройте раздел **Cloud DNS** в каталоге, где находится зона DNS `example.com`{#inline-code-id-stj53al4 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
    - Выберите зону DNS `example.com`{#inline-code-id-u520uefv .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} из списка.
    - Нажмите кнопку **Создать запись**.
    - Задайте параметры записи:
      - **Имя** --- оставьте пустым.
      - **Тип** --- оставьте значение `А`{#inline-code-id-rlw7ktjl .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **Значение** --- введите публичный адрес вашей ВМ.
      - **TTL (в секундах)** (время кеширования записи) --- оставьте значение по умолчанию.
    - Нажмите кнопку **Создать**.
3.  Создайте запись [типа CNAME](https://yandex.cloud/ru/docs/dns/concepts/resource-record#cname):
    - Выберите зону DNS `example.com`{#inline-code-id-ohji4dm8 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} из списка.
    - Нажмите кнопку **Создать запись**.
    - Задайте параметры записи:
      - **Имя** --- `www`{#inline-code-id-1vte0ci6 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **Тип** --- выберите значение `CNAME`{#inline-code-id-k9oj8ian .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **Значение** --- введите `example.com`{#inline-code-id-p871yzju .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
      - **TTL (в секундах)** (время кеширования записи) --- оставьте значение по умолчанию.
    - Нажмите кнопку **Создать**.
:::
::::::

### [[Делегируйте доменное имя]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#delegate-domain){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Делегируйте доменное имя {#delegate-domain}

Делегирование --- это перенос ответственности с серверов регистратора на ваши серверы. Для домена создаются ресурсные записи [типа NS](https://yandex.cloud/ru/docs/dns/concepts/resource-record#ns) (`ns1.yandexcloud.net`{#inline-code-id-a66k54se .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} и `ns2.yandexcloud.net`{#inline-code-id-zwvj1bhr .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}).

Чтобы делегировать домен, укажите для него DNS-серверы в личном кабинете регистратора.

Делегирование происходит не сразу. Серверы интернет-провайдеров обычно обновляют записи в течение 24 часов (86 400 секунд). Это обусловлено значением TTL, в течение которого кешируются записи для доменов.

Проверить делегирование домена можно с помощью [сервиса Whois[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://www.reg.ru/whois/check_site){.yfm-external-link target="_blank" rel="noreferrer noopener"} или утилиты `dig`{#inline-code-id-4lirgr5t .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

:::: yfm-code-floating-container
``` {.hljs .bash}
dig +short NS example.com
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iOTY1Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi05NjUiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTk2NSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTk2NS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::

Результат:

:::: yfm-code-floating-container
``` {.hljs .text}
ns2.yandexcloud.net.
ns1.yandexcloud.net.
```

::: yfm-code-floating
![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iOTY5Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSwyMUg4VjdIMTlNMTksNUg4QTIsMiAwIDAsMCA2LDdWMjFBMiwyIDAgMCwwIDgsMjNIMTlBMiwyIDAgMCwwIDIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaIiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjUgMTNsMyAzbDUgLTUiIHZpc2liaWxpdHk9ImhpZGRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJ2aXNpYmlsZUFuaW1hdGlvbi05NjkiIGF0dHJpYnV0ZW5hbWU9InZpc2liaWxpdHkiIGZyb209ImhpZGRlbiIgdG89InZpc2libGUiIGR1cj0iMC4ycyIgZmlsbD0iZnJlZXplIiBiZWdpbj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPSJoaWRlQW5pbWF0aW9uLTk2OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTk2OS5lbmQrMSIgZmlsbD0iZnJlZXplIj48L2FuaW1hdGU+CiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPgogICAgICAgICAgICAgICAgPC9zdmc+){.yfm-code-icon .yfm-clipboard-icon}
:::
::::

### [[Проверьте работу сайта]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#test-site){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Проверьте работу сайта {#test-site}

Чтобы проверить работу сайта, введите в браузере его IP-адрес или доменное имя:

- `http://<публичный_IP-адрес_ВМ>`{#inline-code-id-35fb5k9z .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
- `http://www.example.com`{#inline-code-id-vwnb6cow .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

## [[Установите SSL-сертификат c помощью Let's Encrypt®]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#setting-ssl){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Установите SSL-сертификат c помощью Let's Encrypt® {#setting-ssl}

Для установки [сертификата](https://yandex.cloud/ru/docs/certificate-manager/concepts/managed-certificate) используйте [Let's Encrypt[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://letsencrypt.org/){.yfm-external-link target="_blank" rel="noreferrer noopener"}. Let's Encrypt --- это центр сертификации, предоставляющий бесплатные [SSL-сертификаты[![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld2JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDEuNUEuNzUuNzUgMCAwIDAgMTAgM2gxLjk0TDYuOTcgNy45N2EuNzUuNzUgMCAwIDAgMS4wNiAxLjA2TDEzIDQuMDZWNmEuNzUuNzUgMCAwIDAgMS41IDBWMi4yNWEuNzUuNzUgMCAwIDAtLjc1LS43NXpNNy41IDMuMjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINC41YTMgMyAwIDAgMC0zIDN2NmEzIDMgMCAwIDAgMyAzaDZhMyAzIDAgMCAwIDMtM1Y5LjI1YS43NS43NSAwIDAgMC0xLjUgMHYyLjI1YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNkExLjUgMS41IDAgMCAxIDMgMTEuNXYtNkExLjUgMS41IDAgMCAxIDQuNSA0aDIuMjVhLjc1Ljc1IDAgMCAwIC43NS0uNzUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)]{.yfm-external-link__icon aria-label="Внешняя страница. Открывается в новом окне"}](https://ru.wikipedia.org/wiki/SSL){.yfm-external-link target="_blank" rel="noreferrer noopener"}.

### [[Установите клиент Let's Encrypt]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#install-client){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Установите клиент Let's Encrypt {#install-client}

:::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-6" diplodoc-key="ubuntu" role="tab" aria-controls="jhi0yegc" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::: {#jhi0yegc .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-6" data-title="Ubuntu"}
1.  Введите в терминал команду:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo apt-get update && sudo apt-get install software-properties-common
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTAwOSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTAwOSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTAwOSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTEwMDkuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  Добавьте репозитории `universe`{#inline-code-id-3emun660 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} and `certbot`{#inline-code-id-mu9esimh .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo add-apt-repository universe && sudo add-apt-repository ppa:certbot/certbot
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTAxNSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTAxNSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTAxNSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTEwMTUuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    Нажмите **Enter**.

3.  Установите клиент Let's Encrypt:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo apt-get update && sudo apt-get install certbot python-certbot-apache
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTAyNCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTAyNCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTAyNCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTEwMjQuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

4.  Нажмите **Y** и **Enter**.
:::
::::::

### [[Получите SSL-сертификат]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#get-ssl){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Получите SSL-сертификат {#get-ssl}

:::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-7" diplodoc-key="ubuntu" role="tab" aria-controls="jp5zy4hv" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::: {#jp5zy4hv .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-7" data-title="Ubuntu"}
1.  Введите команду:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo certbot --apache
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTA0OSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTA0OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTA0OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTEwNDkuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  В интерфейсе введите название вашего домена `example.com`{#inline-code-id-df0ptmnb .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} или `www.example.com`{#inline-code-id-3kr2dmr3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

3.  Определите, нужно ли перенаправлять все страницы с `http`{#inline-code-id-q22vm8cg .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} на `https`{#inline-code-id-bq9ltv1m .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} при открытии сайта. Выберите `2`{#inline-code-id-gjxrf9dy .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} --- перенаправить на https.

4.  Протестируйте ваш сайт --- введите в адресную строку браузера `https://www.ssllabs.com/ssltest/analyze.html?d=example.com`{#inline-code-id-co5ans7w .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.
:::
::::::

### [[Выполните автообновление]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#self-update){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Выполните автообновление {#self-update}

Сертификат выдается на 90 дней. Необходимо регулярно обновлять его. Настройте расписание обновления с помощью `cron`{#inline-code-id-6ee16316 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

:::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-8" diplodoc-key="ubuntu" role="tab" aria-controls="u137ljus" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::: {#u137ljus .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-8" data-title="Ubuntu"}
1.  Введите в терминале команду:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo crontab -e
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTA4NyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTA4NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTA4NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTEwODcuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  В диалоге выберите первый пункт из списка.

3.  Добавьте в самый конец файла строчку кода:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    30 2 * * 1 /usr/bin/certbot renew >> /var/log/le-renew.log
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTA5OCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTA5OCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTA5OCIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTEwOTguZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

    В итоге будет запланировано обновление SSL-сертификата с выполнением каждый понедельник в 2:30 ночи. Результат выполнения будет записан в лог-файл.
:::
::::::

## [[Проверьте работу сайта]{.visually-hidden no-index="true"}](https://yandex.cloud/ru/docs/tutorials/web/wordpress-transfer#check-site){.yfm-anchor .yfm-clipboard-anchor aria-hidden="true"}Проверьте работу сайта {#check-site}

У сайтов на WordPress иногда возникает проблема открытия внутренних ссылок при переходе от одного хостинга к другому. Проверьте, существует ли файл `.htaccess`{#inline-code-id-bw9q1ib1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} в корневой папке вашего сайта --- `var/www/html/.htaccess`{#inline-code-id-fdpx7ctq .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}.

Если файла нет, создайте его.

:::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-9" diplodoc-key="ubuntu" role="tab" aria-controls="98a71wn3" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::: {#98a71wn3 .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-9" data-title="Ubuntu"}
1.  Введите в терминале команду:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo nano /var/www/html/.htaccess
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTEyNyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTEyNyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTEyNyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTExMjcuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  Добавьте код:

    :::: yfm-code-floating-container
    ``` {.hljs .html}
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.php$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.php [L]
    </IfModule>
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTEzMyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTEzMyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTEzMyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTExMzMuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

3.  Сохраните изменения --- **Ctrl** + **O** и **Enter**. Для выхода нажмите **Ctrl** + **X**.
:::
::::::

Проверьте сайт. Если ссылки не открываются, значит в `Apache`{#inline-code-id-vibon7i1 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} отключена поддержка `.htaccess`{#inline-code-id-48n4mxgv .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"} файла.

Чтобы включить поддержку `.htaccess`{#inline-code-id-gxpljbv3 .yfm-clipboard-inline-code role="button" aria-label="Блок кода" aria-description="Чтобы скопировать текст внутри блока нажмите на блок" tabindex="0"}:

:::::: {.yfm-tabs diplodoc-group="operating_system" diplodoc-variant="regular"}
:::: {.yfm-tab-list role="tablist"}
::: {.yfm-tab .yfm-tab-group .active diplodoc-id="ubuntu-10" diplodoc-key="ubuntu" role="tab" aria-controls="bouk77v5" aria-selected="true" tabindex="0" diplodoc-is-active="true"}
Ubuntu
:::
::::

::: {#bouk77v5 .yfm-tab-panel .active role="tabpanel" aria-labelledby="ubuntu-10" data-title="Ubuntu"}
1.  Введите команду:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo nano /etc/apache2/sites-available/000-default.conf
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTE2MSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTE2MSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTE2MSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTExNjEuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

2.  Добавьте код:

    :::: yfm-code-floating-container
    ``` {.hljs .text}
    <Directory /var/www/html>
      AllowOverride All
      Order allow,deny
      allow from all
    </Directory>
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTE2NyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTE2NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTE2NyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTExNjcuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

3.  В результате:

    :::: yfm-code-floating-container
    ``` {.hljs .html}
    <VirtualHost *:80 [::]:80>
      ServerAdmin webmaster@localhost
      DocumentRoot /var/www/html
      <Directory /var/www/html>
        AllowOverride All
        Order allow,deny
        allow from all
      </Directory>
      ErrorLog ${APACHE_LOG_DIR}/error.log
      CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTE3MyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTE3MyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTE3MyIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTExNzMuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::

4.  Перезапустите Apache:

    :::: yfm-code-floating-container
    ``` {.hljs .bash}
    sudo systemctl restart apache2
    ```

    ::: yfm-code-floating
    ![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdib3g9IjAgMCAyNCAyNCIgY2xhc3M9InlmbS1jb2RlLWljb24geWZtLWNsaXBib2FyZC1pY29uIiBkYXRhLWFuaW1hdGlvbj0iMTE3OSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTksMjFIOFY3SDE5TTE5LDVIOEEyLDIgMCAwLDAgNiw3VjIxQTIsMiAwIDAsMCA4LDIzSDE5QTIsMiAwIDAsMCAyMSwyMVY3QTIsMiAwIDAsMCAxOSw1TTE2LDFINEEyLDIgMCAwLDAgMiwzVjE3SDRWM0gxNlYxWiIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOS41IDEzbDMgM2w1IC01IiB2aXNpYmlsaXR5PSJoaWRkZW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD0idmlzaWJpbGVBbmltYXRpb24tMTE3OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0iaGlkZGVuIiB0bz0idmlzaWJsZSIgZHVyPSIwLjJzIiBmaWxsPSJmcmVlemUiIGJlZ2luPjwvYW5pbWF0ZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGUgaWQ9ImhpZGVBbmltYXRpb24tMTE3OSIgYXR0cmlidXRlbmFtZT0idmlzaWJpbGl0eSIgZnJvbT0idmlzaWJsZSIgdG89ImhpZGRlbiIgZHVyPSIxcyIgYmVnaW49InZpc2liaWxlQW5pbWF0aW9uLTExNzkuZW5kKzEiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgICAgICAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICAgICAgICAgIDwvc3ZnPg==){.yfm-code-icon .yfm-clipboard-icon}
    :::
    ::::
:::
::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

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
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
