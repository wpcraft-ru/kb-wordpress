Title: How to configure specific tax setups in WooCommerce

URL Source: https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/

Published Time: 2021-06-21T05:56:51+00:00

Markdown Content:
The tax scenarios in this document are step-by-step guides that show how to configure specific tax setups in WooCommerce. They provide all the steps needed to achieve a particular outcome but without going into detail. Due to the uniqueness and variety of stores out there, the scenarios are not exhaustive and for illustration purposes only.

Refer to these additional guides for detailed descriptions of settings:

*   [Setting up Taxes in WooCommerce](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/#shipping-tax-class)
*   [How Taxes Work in WooCommerce](https://woocommerce.com/document/how-taxes-work-in-woocommerce/)
*   [Setting Up EU VAT Rates for Digital Products](https://woocommerce.com/document/setting-up-eu-vat-rates-for-digital-products/)

This documentation covers how to set up tax rates in WooCommerce, as well as how the platform handles taxes/VAT/GST based on these settings — **not** when or what to charge.

**We are not tax professionals**; our advice only applies to how to use our software. For advice on what —or when — to charge tax/VAT/GST etc., we recommend consulting a tax professional or accountant.

Every business is unique, and we are unable to cover all possibilities here.

This example store is based in South Africa. It charges one rate of 15% VAT to all customers regardless of where they’re buying from or shipping to. It shows all its product prices including tax.

The outcome of this setup is that all customers see and pay the same tax-inclusive prices for products throughout the store.

To achieve this outcome, follow the steps below. Use the default values where settings are not specifically mentioned.

1.   [General settings](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-1-general-settings)
2.   [Tax settings](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-1-tax-settings)
3.   [Tax rates](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-1-tax-rates)

**Scenario 1 General Settings**

1.   Go to **WooCommerce > Settings > General** and set **Store Address** to Cape Town, South Africa.
2.   Set **Default customer location** to **Shop country/region**.
3.   **Enable taxes** by checking **Enable tax rates and calculations**.
4.   Scroll to the bottom and click **Save changes**.

![Image 1: Tax Scenario 1's general settings screen. ](https://woocommerce.com/wp-content/uploads/2024/07/s1-general-settings.webp?strip=all&w=704)
**Scenario 1 Tax Settings**

1.   Go to **WooCommerce > Settings > Tax > Tax Options**.
2.   Set **Prices entered with tax** to **Yes, I will enter prices inclusive of tax**.
3.   Set **Calculate tax based on**to **Shop base address**.
4.   Set **Display prices in the shop** to **Including tax**
5.   Set **Display prices during cart and checkout** to **Including tax**.
6.   Set **Display tax totals**to **As a single total**.
7.   Click **Save changes**.

![Image 2: How to configure Tax Scenario 1's tax settings](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s1-tax-settings.webp?strip=all&w=704)
**Scenario 1 Tax Rates**

1.   Go to **Standard rates** (the subtab near the the top of the screen)
2.   Click the **Insert row** button.
3.   In the **Rate %** column enter **15**.
4.   In the **Tax name** column enter **VAT**.
5.   Click **Save changes**.

![Image 3: How to configure Tax Scenario 1's tax rates](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s1-tax-rates.webp?strip=all&w=704)
Verify that taxes work as you expect by running tests with a variety of addresses, both inside and outside of the store’s base country.

In this scenario the example store is based in the UK and sells world-wide. It taxes purchases for customers from only 3 countries based on their shipping address: 20% in the UK, 19% in France, and 25% in Norway. It does not collect tax for customers shipping anywhere else. Because of the varying taxes, it displays product prices excluding tax.

The outcome of this setup is that first-time visitors all see the same tax-exclusive prices for products. Once a shipping country is added to the address field on the cart/checkout page, taxes are calculated according to the respective tax rate for one of the 3 countries. If a customer’s shipping address is no in one of the 3 countries, prices continue to show as tax-exclusive and taxes are not charged.

To achieve this outcome, follow the steps below. Use the default values where settings are not specifically mentioned.

1.   [General settings](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-2-general-settings)
2.   [Tax settings](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-2-tax-settings)
3.   [Tax rates](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-2-tax-rates)

**Scenario 2 General Settings**

![Image 4: How to configure Tax Scenario 2's general tax settings](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s2-general-settings.webp?strip=all&w=704)
**Scenario 2 Tax Settings**

1.   Go to **WooCommerce > Settings > Tax > Tax options**.
2.   Set **Prices entered with tax** to **No, I will enter prices exclusive of tax**.
3.   Set **Calculate tax based on**to **Customer shipping address**.
4.   Set **Display prices in the shop** to **Excluding tax**.
5.   Set **Display prices during cart and checkout** to **Excluding tax**.
6.   Set **Display tax totals** to **Itemized** (to show the tax rate names).
7.   Click **Save changes**.

![Image 5: How to configure Tax Scenario 3's general tax settings](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s2-tax-settings.webp?strip=all&w=704)
**Scenario 2 Tax Rates**

1.   Go to **Standard rates** (the subtab near the the top of the screen).
2.   Click the **Insert row** button to enter the 1st tax rule.
3.   In the **Country Code** column enter **GB**(the 2-digit code for the UK).
4.   In the **Rate %** column enter **20**.
5.   In the **Tax name** column enter **VAT**.
6.   Click the **Insert row** button to enter the 2nd tax rule.
7.   In the **Country Code** column enter **FR**(the 2-digit code for France).
8.   In the **Rate %** column enter **19**.
9.   In the **Tax name** column enter **TVA**.
10.   Click the **Insert row** button to enter the 3rd tax rule.
11.   In the **Country Code** column enter **NO**(the 2-digit code for Norway).
12.   In the **Rate %** column enter **25**.
13.   In the **Tax name** column enter **MVA**.
14.   Click **Save changes**.

![Image 6: How to configure Tax Scenario 3's tax ates](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s2-tax-rates.webp?strip=all&w=704)
Verify that taxes work as you expect by running tests with a variety of addresses, both inside and outside of the store’s base country.

The example store in this scenario is based in California. It sells and ships within the U.S. only. It charges 7% for sales that ship within the state, plus an additional 2% for shipping to specifically the 90210 ZIP code. Sales shipped to any other state are charged 6% tax. The order in which tax rules appear among priorities are important as the 1st rule that matches is used.

The outcome of this scenario is that all visitors see prices excluding tax until they enter their shipping details on the cart/checkout page, after which one or more taxes apply as determined by the tax rates.

To achieve this outcome, follow the steps below. Use the default values where settings are not specifically mentioned.

1.   [General settings](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-3-general-settings)
2.   [Tax settings](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-3-tax-settings)
3.   [Tax rates](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-3-tax-rates)

**Scenario 3 General Settings**

1.   Go to **WooCommerce > Settings > General** and set **Store Address** to a California-based address.
2.   Set **Default customer location** to **No location by default** (first-time visitors will not see any tax info until they enter a shipping address).
3.   **Enable taxes** by checking **Enable tax rates and calculations**.
4.   Scroll to the bottom and click **Save changes**.

![Image 7](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s3-general-settings.webp?strip=all&w=704)
**Scenario 3 Tax Settings**

1.   Go to **WooCommerce > Settings > Tax > Tax options**.
2.   Set **Prices entered with tax** to **No, I will enter prices exclusive of tax**.
3.   Set **Calculate tax based on**to **Customer shipping address**.
4.   Set **Display prices in the shop** to **Excluding tax**.
5.   Set **Display prices during cart and checkout** to **Excluding tax**.
6.   Set **Display tax totals** to **Itemized** (to show the tax rate names).
7.   Click **Save changes**.

![Image 8: How to configure Tax Scenario 3's general tax settings](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s2-tax-settings.webp?strip=all&w=704)
**Scenario 3 Tax Rates**

1.   Go to **Standard rates** (the subtab near the the top of the screen).
2.   Click the **Insert row** button to enter the 1st tax rule.
3.   In the **Country Code** column enter **US**(the 2-digit code for the U.S.).
4.   In the **State Code** column enter CA (the 2-digit code for California).
5.   In the **Rate %** column enter **7.**
6.   In the **Tax name** column enter **Tax**.
7.   In the **Priority** column enter **1**.
8.   Click the **Insert row** button to enter the 2nd tax rule.
9.   In the **Country Code** column enter **US**.
10.   In the **Postcode / ZIP** column enter **90210***(we add the wildcard (*) to apply this rule to ZIP+4 codes as well).
11.   In the **Rate %** column enter **2**.
12.   In the **Tax name** column enter **BH Tax**.
13.   In the **Priority** column enter **2**.
14.   Click the **Insert row** button to enter the 3rd tax rule.
15.   In the **Country Code** column enter **US**.
16.   In the **Rate %** column enter **6**.
17.   In the **Tax name** column enter **Tax**.
18.   In the **Priority** column enter **1**.
19.   Click **Save changes**.

You’ll notice that the rules are automatically rearranged and grouped by priority once saved.

![Image 9: How to configure Tax Scenario 3's tax ates](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s2-tax-rates.webp?strip=all&w=704)
Here is how the tax rules are evaluated when a customer enters their address:

*   All **Priority 1** taxes are evaluated first, from the top down as the rules appear in the table.
*   The 1st criteria from the 1st rule is that the address is U.S.-based.
*   If it is, the 2nd criteria is that the address is California-based.
*   If it is, the 7% rate is applied, and the evaluation moves on to **Priority 2** taxes.
*   If the address is not California-based, it moves on to the next Priority 1 tax rate, and applies that instead.
*   Next, **Priority****2**taxes are evaluated.
*   WooCommerce checks if the address is U.S.-based.
*   If it is, it checks if the ZIP code starts with 90210.
*   If it does, it applies the 2% rate (alongside the **Priority 1**tax).
*   If the ZIP code does not start with 90210, the rate is ignored and only the one **Priority 1** tax applies.

The below illustrations show how the different tax rates apply to various addresses.

First, Hiouochi is in California, but outside the specific ZIP code, so only the 7% tax applies.

![Image 10: How to configure Tax Scenario 3 - example 1 where the 1st tax applies.](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s3-tax-rates-01.webp?strip=all&w=704)
Next, 90210 is in both California and match the specific ZIP code we targeted with the 2nd tax rate. As intended, this address gets 2 taxes applied.

![Image 11: How to configure Tax Scenario 3 - example 2 where 2 taxes apply. ](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s3-tax-rates-02.webp?strip=all&w=704)
Our last address is in Ann Arbor, Michigan, so only the more general U.S. tax applies to it.

![Image 12: How to configure Tax Scenario 3 - example 3 where the general tax applies.](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s3-tax-rates-03.webp?strip=all&w=704)
By default, shipping taxes rely on the **Standard rate**class. If no **Standard rate** products are present in an order, or you do not use that tax class, then the first rate in **Additional tax classes**is used.In that case, make sure that your highest rate is listed first in the **Additional tax class** section as illustrated below.

Note the additional classes: **Tax A**,**Tax B**, and **Tax C**. Create them by adding the names in the **Additional tax class** setting and **Save changes**. The names will appear as sub-tabs at the top of the screen.The **Standard rates** class cannot be deleted, but if left blank, it will be ignored.

![Image 13](https://woocommerce.com/wp-content/uploads/2013/02/1.jpg?strip=all&w=704)
The illustration below shows the **Standard rates** class without any tax rules, thus empty.

![Image 14](https://woocommerce.com/wp-content/uploads/2013/02/2.png?strip=all&w=704)
In the illustration below, the **Tax A** class is shown with the highest rate of 24%, so it’s positioned first on the list. One row is added to the rates table with the **Country code** set to **US**, **Rate %** set to **25**, **Tax name** set to **Tax 24%**, and **Priority**set to **1**. The rest of the columns have default values.

![Image 15](https://woocommerce.com/wp-content/uploads/2013/02/3.png?strip=all&w=704)
The next illustration shows that the **Tax B** class is next. It’s the same as **Tax A**, except here the **Rate %** is **14**and the **Tax name** is **Tax 14%**.

![Image 16](https://woocommerce.com/wp-content/uploads/2013/02/4.png?strip=all&w=704)
In this illustration the **Tax C** class is entered last and the settings are the same again as **Tax B**, except the **Rate %**is **10%** and the **Tax Name** is **Tax 10%**.

![Image 17](https://woocommerce.com/wp-content/uploads/2013/02/5.png?strip=all&w=704)
The outcome of this scenario is that the highest tax rate is applied to shipping when an order with multiple products is created, each product with one of the above tax rates assigned.

In the illustration of the order below, we see that the tax for Product 1 is $84 (on a $350 product). The **Flat rate** shipping of $10 is $2.40. Where the total for this 24% tax rate appears, we see that together it’s the sum of those parts, or $86.40, confirming that the 24% tax rate applied to the shipping, as we intended.

![Image 18](https://woocommerce.com/wp-content/uploads/2013/02/6.jpg?strip=all&w=704)
The store in this scenario is based in the U.S. state of Kentucky where there’s a 6% state tax for physical goods shipped within the state. The store does not collect taxes on those same goods if shipped to outside the state. However, it also sells virtual goods for which it needs to collect taxes regardless of the customer’s shipping address.

The outcome of this setup is that all products for a Kentucky address are taxed, whether that product is virtual or physical, but for addresses elsewhere, only virtual products are taxed.

1.   [General settings](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-5-general-settings)
2.   [Tax settings](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-5-tax-settings)
3.   [Tax rates](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-5-tax-rates)
4.   [Product settings](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/#scenario-5-product-settings)

**Scenario 5 General settings**

1.   Go to **WooCommerce > Settings > General** and set **Store Address** to a Kentucky-based address.
2.   Set **Default customer location** to **No location by default** (first-time visitors will not see any tax info until a shipping address is entered).
3.   **Enable taxes** by checking **Enable tax rates and calculations**.
4.   Scroll to the bottom and click **Save changes**.

![Image 19: Scenario 5 General settings](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s5-general-settings.webp?strip=all&w=704)
**Scenario 5 Tax settings**

1.   Go to **WooCommerce > Settings > Tax > Tax options**.
2.   Set **Prices entered with tax** to **No, I will enter prices exclusive of tax**.
3.   Set **Calculate tax based on**to **Customer shipping address**.
4.   In **Additional tax classes** add a new class e.g. **Virtual Goods** (we’ll assign this to products later).
5.   Set **Display prices in the shop** to **Excluding tax**.
6.   Set **Display prices during cart and checkout** to **Excluding tax**.
7.   Set **Display tax totals** to **Itemized** (optional, this setting shows tax rate names).
8.   Click **Save changes**.

![Image 20: Scenario 5 Tax settings](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s5-tax-settings.webp?strip=all&w=704)
**Scenario 5 Tax rates**

1.   Go to **Standard rates** (the subtab near the the top of the screen).
2.   Click the **Insert row** button to enter the 1st tax rule.
3.   In the **Country Code** column enter **US**(the 2-digit code for the U.S.).
4.   In the **State Code** column enter KY (the 2-digit code for Kentucky, now the rate applies to Kentucky only).
5.   In the **Rate %** column enter **6.**
6.   In the **Tax name** column enter **KY Tax** (optional).
7.   Click the **Save changes** button.

![Image 21](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s5-standard-tax-rate.webp?strip=all&w=704)
1.   Next, go to the tax class we created in the previous section, **Virtual Goods rates** (appears as a link near the top)
2.   Click the **Insert row** button to enter the 1st tax rule in this class.
3.   In the **Rate %** column enter **6.**
4.   In the **Tax name** column enter **Tax** (optional).
5.   Click the **Save changes** button.

![Image 22](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s5-virtual-good-tax-rate.webp?strip=all&w=704)
This tax rate applies to all customers, but because its an **Additional tax class**, and the **Standard rates** are used by default, it only applies to products we specifically apply it to. We’ll do that next.

**Scenario 5 Product Settings**

1.   Go to **Products** and either **Add new** or edit existing products.
2.   Any physical products that are shipped can continue to use **Standard rates** taxes. 
3.   For virtual products, set their **Product > Product data > General****> Tax class** to **Virtual Goods**. 
4.   Click **Update** after editing a product to save the changes. 

Below is an image showing a shippable product’s **Tax class** is set to **Standard**.

![Image 23](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s5-shippable-good-product.webp?strip=all&w=704)
Below is another image, this time showing a virtual product’s **Tax class** set to **Virtual Goods**.

![Image 24](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s5-virtual-good-product.webp?strip=all&w=704)
With the above settings in place, the shop is ready to collect taxes. Below illustrates the cart page with two products, aptly named **Shippable Good** ($20) and **Virtual Good** ($10). The address entered into the shipping calculator is Lexington, Kentucky. The itemized taxes show both **KY Tax** and **Virtual Goods Tax** apply.

![Image 25: Illustrates the cart page with two products, aptly named Shippable Good ($20) and Virtual Good ($10)](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s5-ky-zoom.webp?strip=all&w=704)
The next illustration shows the same cart as above, except the address is now set to Ann Arbor, Michigan. The itemized taxes show that only the **Virtual Goods Tax** applies and, at $0.60, is applied to the **Virtual Good** product only.

![Image 26: The itemized taxes show that only the Virtual Goods Tax applies and, at $0.60, is applied to the Virtual Good product only.](https://woocommerce.com/wp-content/uploads/2024/07/how-to-configure-tax-scenarios-s5-all-cart-zoom.webp?strip=all&w=704)
The [WooCommerce Developer Documentation](https://developer.woocommerce.com/docs/code-snippets/configuring_special_tax_scenarios) outlines how to use code snippets to charge the same price regardless of location and taxes, charge tax based on the subtotal amount, apply different tax rates based on the customer role, show 0 value taxes, or add suffixes on the main variable product.

Do you still have questions and need assistance?

*   If you’re looking to **extend** the core functionality shown here, we recommend reviewing available extensions in the [WooCommerce Marketplace](https://woocommerce.com/products/).
*   Need ongoing advanced support or a **customization** built for WooCommerce? Hire a [Woo Agency Partner](https://woocommerce.com/customizations/).
*   Are you a **developer** building your own WooCommerce integration or extension? Check our [Developer Resources](https://developer.woocommerce.com/).[](https://woocommerce.com/document/setting-up-taxes-in-woocommerce/configuring-specific-tax-setups-in-woocommerce/)

If you weren’t able to find the information you need, please use the feedback thumbs below to let us know.

