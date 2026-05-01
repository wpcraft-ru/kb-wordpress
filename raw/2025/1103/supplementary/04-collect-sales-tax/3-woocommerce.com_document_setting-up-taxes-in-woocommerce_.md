Title: Setting up taxes in WooCommerce

URL Source: https://woocommerce.com/document/setting-up-taxes-in-woocommerce/

Published Time: 2013-02-22T20:42:56+00:00

Markdown Content:
Setting up taxes is one of the first tasks you will want to complete when setting up a store. In this guide, we look at available options for how to set up taxes in WooCommerce, how to access them, and what the WooCommerce tax settings do.

This documentation covers how to set up tax rates in WooCommerce, as well as how the platform handles taxes/VAT/GST based on these settings — **not** when or what to charge.

**We are not tax professionals**; our advice only applies to how to use our software. For advice on what —or when — to charge tax/VAT/GST etc., we recommend consulting a tax professional or accountant.

Every business is unique, and we are unable to cover all possibilities here.

*   [How taxes work in WooCommerce](https://woocommerce.com/document/how-taxes-work-in-woocommerce/)
*   [How to configure specific tax setups in WooCommerce](https://woocommerce.com/document/configuring-specific-tax-setups-in-woocommerce/)
*   [Setting up EU VAT rates for digital products](https://woocommerce.com/document/setting-up-eu-vat-rates-for-digital-products/)

To configure taxes in WooCommerce you first need to enable the **Tax** settings tab by following the steps below:

1.   From your store’s WP Admin dashboard, navigate to _WooCommerce > Settings > General_.
2.   Scroll down to the **_Taxes and coupons_** section and select the **Enable tax rates and calculations**checkbox.
3.   Scroll to the bottom of the page and click **Save changes**.

[![Image 1](https://woocommerce.com/wp-content/uploads/2013/02/wp-admin-woocommerce-enable-taxes@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2013/02/wp-admin-woocommerce-enable-taxes@2x.png)
Once enabled, access the WooCommerce tax settings in the **Tax tab** by going to _WooCommerce > Settings > Tax_.

Your choices for these options depend on the tax jurisdiction your store is located in. Check with your accountant to ensure your tax configuration is suitable for your store. Continue below to get acquainted with each setting, or [review our guide to configuring common tax scenarios](https://woocommerce.com/document/configuring-specific-tax-setups-in-woocommerce/).

[![Image 2](https://woocommerce.com/wp-content/uploads/2013/02/wp-admin-woocommerce-tax-settings@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2013/02/wp-admin-woocommerce-tax-settings@2x.png)
The **_Prices entered with tax_** option is perhaps the most important setting when you manage taxes in your store. It determines how you enter your product prices.

There are two options to choose from:

*   **Yes, I will enter prices inclusive of tax**: enter all product prices including your store’s base tax rate.
*   **No, I will enter prices exclusive of tax**: you should then enter product prices without tax.

For example, let’s say you want a product to cost £9.99 including taxes, your store is UK-based, and the tax rate is 20%.

*   If you select ****Yes, I will enter prices inclusive of tax****, you would enter £9.99 as the total product price. WooCommerce will work backwards from that total and calculate that it includes the base product price of £8.325 and the tax of £1.665 to display, automatically rounded.
*   If you select ****No, I will enter prices exclusive of tax**** but want the same total price, you would enter £8.325 as the product price. WooCommerce then adds 20% on top and offers the same rounded price of £9.99.

[Learn more about how taxes are calculated in WooCommerce](https://woocommerce.com/document/how-taxes-work-in-woocommerce/)and refer to the**[rounding section](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/#rounding)**below for how this tax setting might be affected by other settings.

Use the **_Calculate tax based on_** setting to tell WooCommerce which address to use for tax calculations.

There are three options to choose from:

*   Customer shipping address (default)
*   Customer billing address
*   Shop base address

Options 1 and 2 require customers to enter the respective address.

If option 3 (_**Shop base address**_) is selected, the taxes are always calculated based on your store’s location regardless of the customer’s address.

The **_Shipping tax class_** setting draws from [tax classes](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/#additional-tax-classes). It is used to indicate how WooCommerce should calculate tax on the cost of shipping. Each tax class in your shop appears as an option here.

This setting always has at least the following options:

*   Shipping tax class based on cart items (default)
*   Standard
*   Reduced rate
*   Zero rate

The setting defaults to the first option, **_Shipping tax class based on cart items_**. In this case, shipping tax is inherited from the tax class assigned to the product or products being shipped.

For example, if a product, like baby clothes, has been assigned a reduced tax class, then the tax rate from that class would also apply to the shipping charge. If your jurisdiction treats shipping differently, assign a specific tax class to this setting to use that for shipping instead.

In cases where there are multiple products with different tax rates in the order, the shipping tax is applied as follows:

*   If an order contains a product with the **_Standard rate_**tax class, it is used for shipping regardless of being the highest or not.
*   If the order does not contain a product with the **_Standard rate_**tax class, then the first rate found in the [Additional tax classes section](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/#additional-tax-classes) is used.

If you don’t use the **_Standard rate_** tax class on your products, and if you need the highest tax rate from other tax classes to apply to shipping, **make sure your highest tax rate is listed first** in the **_Additional tax class_** section. [See a detailed example](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#use-the-highest-additional-tax-rate).

Tick the **Round tax at subtotal level, instead of rouding per line** checkbox to calculate rounding at the subtotal level instead of on a per-line basis.

In certain circumstances, this could lead to slight variances. Confirm if this is required for your store by consulting your accountant or checking your tax jurisdiction.

**Off-by-one rounding errors**

Off-by-one rounding errors are not affected by this setting. These can result if a series of three other tax display settings are not all set to either **include or exclude tax**.

The series consists of:

*   Prices entered with tax
*   Display prices in the shop
*   Display prices during cart and checkout

When these three settings are mixed, it can lead to the calculated price having more decimal precision than allowed to be displayed by the store, causing prices to be rounded in unexpected ways.

If any of these three tax display settings in the series differ, a warning banner is displayed to notify the user that tax display settings are mismatched and in conflict.

[![Image 3](https://woocommerce.com/wp-content/uploads/2013/02/wp-admin-woocommerce-alert-inconsistent-tax-settings@2x.png?w=980)](https://woocommerce.com/wp-content/uploads/2013/02/wp-admin-woocommerce-alert-inconsistent-tax-settings@2x.png)
Clicking on **Use recommended settings** updates all of these settings to be the same as the one set for **_Prices entered with tax_**.

Default **standard rates** are sufficient for most cases, but if you sell goods that require different tax classes, you can add them here. Add one tax class per line. Remove or add additional classes as required, but note that the **_Standard rates_** class cannot be removed.

After clicking **Save changes**, your added tax classes will appear as sub navigation links near the top of the page. From there, you can click on each to add and manage the tax rates within that class.

The **_Display prices in shop_**setting determines how prices are displayed throughout your store/catalog. Choose **Including tax**or **Excluding tax** from the dropdown menu.

Refer to the [rounding section](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/#rounding) of this documentation for how this setting might be affected by other settings.

The **_Display prices during cart and checkout_** setting will determine how prices are displayed in your cart and during checkout. Choose **Including tax**or **Excluding tax** from the dropdown menu.

Refer to the [rounding section](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/#rounding) of this documentation for how this setting might be impacted by other settings.

The **_Price display suffix_** setting allows you to add any text after product prices and, optionally, show how much tax is included or prices without tax.

You can use the following dynamic placeholders and add text around them:

*   `{price_including_tax}`
*   `{price_excluding_tax}`

For example, using `Price incl. tax: {price_including_tax`} in this field will display as “**Price incl. tax: $59.74**”in your store. This is a way to add the tax-inclusive price in small print to a store where the prices are configured to exclude tax, or vice versa.

[![Image 4](https://woocommerce.com/wp-content/uploads/2013/02/price-display-suffix-in-woocommerce.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2013/02/price-display-suffix-in-woocommerce.png)
#### Suffixes on variable products

Price suffixes are not shown by default when first viewing a variable product. They do, however, appear once a variation has been selected.

[![Image 5](https://woocommerce.com/wp-content/uploads/2013/02/price-display-suffix-on-a-variable-product-in-woocommerce.png?w=980)](https://woocommerce.com/wp-content/uploads/2013/02/price-display-suffix-on-a-variable-product-in-woocommerce.png)
The **_Display tax total_** setting determines if multiple taxes are displayed as one total during checkout or if they’re displayed as an itemized list of taxes.

This setting, when set to **Itemized**, can also be useful for**displaying the tax rate name on cart and checkout pages**, especially when only one tax rate per location is used. The name needs to be updated according to the location. In the image below is an example tax rate to illustrate. Note how the tax name is set to **Sales Tax**.

The tax rate appears as the English default **_Taxes_** when **_Display tax totals_** is set to **As a single total**.

However, the tax rate appears by the name given in the tax rate setup, **_Sales Tax_**, when we change the **_Display tax totals_**to **Itemized.**

[![Image 6](https://woocommerce.com/wp-content/uploads/2013/02/setting-a-tax-rate-name-woocommerce-tax-settings.png?w=980)](https://woocommerce.com/wp-content/uploads/2013/02/setting-a-tax-rate-name-woocommerce-tax-settings.png)

![Image 7](https://woocommerce.com/wp-content/uploads/2013/02/default-tax-rate-name-woocommerce-tax-settings.png?strip=all&w=704)

![Image 8](https://woocommerce.com/wp-content/uploads/2013/02/display-tax-rate-name-woocommerce-tax-settings.png?strip=all&w=704)

Create a [custom translation](https://woocommerce.com/document/woocommerce-localization/#creating-custom-translations) instead to change the default text (**_Taxes_** in English) without using the above setting.

If your settings are grayed out, you may notice an extra **_Automated taxes_** setting, which is set to **Enable automated tax.** If that is the case, most of this document won’t apply, as your taxes are automatically managed by our [WooCommerce Tax](https://woocommerce.com/products/tax/) extension.

To make this document more relevant, change the **_Automated taxes_** setting to **Disable automated taxes**and click **Save changes** to return the normal functionality of core WooCommerce tax settings.

[![Image 9](https://woocommerce.com/wp-content/uploads/2013/02/woocommerce-tax-automated-tax-rates.png?w=980)](https://woocommerce.com/wp-content/uploads/2013/02/woocommerce-tax-automated-tax-rates.png)
The **_Automated taxes_** setting is added by an additional extension, in this case WooCommerce Tax. Refer to the [WooCommerce Tax documentation](https://woocommerce.com/document/woocommerce-shipping-and-tax/woocommerce-tax/) for information on this works.

**Tax classes** are displayed as subtabs at the top of the **_Tax settings_** screen. Click on a tax class to view its tax rates table which is where you define the tax rates to apply to your customers.

Each tax rate row has the following attributes:

*   **Country code**: specify a two-digit country code that the rate applies to, or leave the asterisks (wildcard `*`) to apply to all countries. All country abbreviations are visible in the WooCommerce code [on GitHub](https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/i18n/countries.php). 
*   **State code**: specify a two-character state code that the rate applies to, for example “CA” for California, in the US or leave the wildcard `*` to apply to all states. All state/province abbreviations are visible in the WooCommerce code [on GitHub](https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/i18n/states.php).
*   **Postcode/ZIP:** enter postcodes that the rate applies to. Separate multiple values with a semicolon `;`, use the wildcard `*` to match all postcodes, prefix letters or numbers to the wildcard * to apply to only certain postcodes (e.g. `PE*` would match all postcodes starting with PE, or `90210*` would work in the US for ZIP + 4 postcodes), and use numeric ranges to include everything between a start and end (e.g. 2000…3000).
*   **City**: semicolon-separated list of cities the rate applies to, or use the wildcard `*` to apply to all cities. If a city is specified, the customer would have to enter it exactly for a match. For example, a rule for “Cape Town” will not match if a customer enters “Capetown”.
*   **Rate %**: enter the tax rate, for example, 20 for a tax rate of 20%.
*   **Tax name:** give your tax a name, e.g. “VAT”.
*   **Priority**: assign a priority to the tax rate. Only the 1st rate that matches per priority will be used. Specify a different priority per rate to define multiple tax rates for a single area. 1 is the highest priority, and will be considered before 2, which will be considered before 3, etc. [See a detailed practical example](https://woocommerce.com/document/configuring-specific-tax-setups-in-woocommerce/#use-a-countrywide-tax-with-exemptions).
*   **Compound**: check this box if this rate is compound (applied on top of all prior taxes).
*   **Shipping:** enabled by default and signifies that the tax rate also applies to shipping.

For how-to guides for configuring specific tax setups, [see how to configure specific tax setups in WooCommerce](https://woocommerce.com/document/configuring-specific-tax-setups-in-woocommerce/).

Tax rates can be entered manually by following the steps below:

1.   Click **Insert row** to get started.
2.   Enter a value, as required and explained above, for each column in each row.
3.   Click **Save changes**.

Tax rates can also be exported to or imported from comma-separated value (CSV) files. Below is an example of a tax rate table in _WooCommerce > Settings > Tax > Standard rates_, with the **Import CSV** and **Export CSV** buttons visible:

[![Image 10](https://woocommerce.com/wp-content/uploads/2013/02/wp-admin-woocommerce-tax-rates-import-export@2x.png?w=980)](https://woocommerce.com/wp-content/uploads/2013/02/wp-admin-woocommerce-tax-rates-import-export@2x.png)
To create a tax rate CSV file from which to import rates, we suggest manually entering a rule first, and then doing a CSV export. It will generate a tax rule CSV file that contains the 10 columns that need to be present for a tax rate import to work, serving as a template for changes or additions.

The columns are:

*   Country code
*   State code
*   ZIP/Postcode
*   City
*   Rate %
*   Tax name
*   Priority
*   Compound
*   Shipping
*   Tax class

We’ve provided a sample tax rate CSV below that you can download and import for the United States based on **state tax only**. Leave **_Tax class_** blank for standard rates.

[Download a sample tax rate CSV](https://woocommerce.com/wp-content/uploads/2013/02/us_tax_rates.csv).

This sample tax rate CSV should **not** be used for production/live purposes, as tax rates frequently change. Double-check any rate for accuracy before using.

Incorrect rates should be deleted by following the steps below:

1.   Navigate to _WooCommerce > Settings > Tax_ and click on the appropriate tax class sub-navigation link (e.g. Standard rates, Reduced rates, etc.)
2.   Select lines in the tax class rate table by clicking on them. Hold the SHIFT key or the CMD/CTRL key to select consecutive or specific rows, respectively. Selected rows are highlighted in yellow, as pictured below.
3.   Click the **Remove selected row(s)** button to delete the highlighted row(s).
4.   Click **Save changes** to finalize the action.

[![Image 11](https://woocommerce.com/wp-content/uploads/2013/02/removing-a-tax-rate-woocommerce-tax-settings.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2013/02/removing-a-tax-rate-woocommerce-tax-settings.png)
To delete all tax rates at once (maybe because you have an extensive list to redo, or perhaps you just want to start fresh) go to _WooCommerce > Status > Tools > Delete WooCommerce Tax Rates_ and click the **Delete tax rates** button.

**Warning:** This action cannot be undone**.**

[![Image 12](https://woocommerce.com/wp-content/uploads/2013/02/delete-all-tax-rates-woocommerce-tools.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2013/02/delete-all-tax-rates-woocommerce-tools.png)
Tax reports can be found via _WooCommerce > Analytics > Taxes_. The reports are further detailed in our [Taxes Report documentation](https://woocommerce.com/document/woocommerce-analytics/taxes-report/).

Do you still have questions and need assistance?

*   If you’re looking to **extend** the core functionality shown here, we recommend reviewing available extensions in the [WooCommerce Marketplace](https://woocommerce.com/products/).
*   Need ongoing advanced support or a **customization** built for WooCommerce? Hire a [Woo Agency Partner](https://woocommerce.com/customizations/).
*   Are you a **developer** building your own WooCommerce integration or extension? Check our [Developer Resources](https://developer.woocommerce.com/).[](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/)

If you weren’t able to find the information you need, please use the feedback thumbs below to let us know.

