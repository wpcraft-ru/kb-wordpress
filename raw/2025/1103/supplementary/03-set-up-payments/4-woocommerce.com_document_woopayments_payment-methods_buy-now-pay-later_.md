Title: Buy now, pay later with WooPayments

URL Source: https://woocommerce.com/document/woopayments/payment-methods/buy-now-pay-later/

Published Time: 2025-03-14T15:09:19+00:00

Markdown Content:
Buy now, pay later (also known as **BNPL**) payment methods allow your customers to pay for orders over time using a series of payments. For example, a customer could pay for a $2,000 USD product in four installments of $500 USD. You, the merchant, would still receive the full amount immediately — minus fees of course.

BNPL services are used by a variety of businesses to increase conversion, increase average order value, and reach new customers. The BNPL providers underwrite customers, manage the installments, and collect payments — so you can focus on your own business.

Customers will not see an increase in the product price. However, they may have an option to purchase products using a loan that accrues interest:

[![Image 1](https://woocommerce.com/wp-content/uploads/2024/05/bnpl-with-interest.webp?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2024/05/bnpl-with-interest.webp)
These loans are issued by the BNPL provider. As a result, these interest payments are collected by the BNPL provider and not by you or WooPayments.

BNPL payment methods may be a good fit for your business if:

*   You sell high-value goods or services and want to increase conversion.
*   You sell low-value goods or services and want to increase the average order value.
*   You’re trying to reach customers who might not have access to credit cards.
*   You want to sell to customers who may not be able to pay in full right away.

However, BNPL payment methods may not be a good fit for you if:

*   You sell to businesses, as BNPL methods[cannot be used](https://woocommerce.com/document/woopayments/payment-methods/buy-now-pay-later/#prohibited)for B2B transactions.
*   You sell subscriptions, as BNPL methods[cannot be used for subscription products](https://woocommerce.com/document/woopayments/payment-methods/buy-now-pay-later/#prohibited).
*   Most of your sales are international. BNPL methods [cannot be used across borders](https://woocommerce.com/document/woopayments/payment-methods/buy-now-pay-later/#customer-country-currency).

Please see our full [fees page](https://woocommerce.com/document/woopayments/fees-and-debits/fees/) for a list of the fees associated with each BNPL provider.

In addition to paying over time, Klarna sometimes offers certain customers the ability to pay the whole order amount immediately. This occurs _after_ the customer has selected the Klarna payment method.

It’s important to note that the **full Klarna fee applies** in these cases, even if the customer uses Klarna’s “Pay Now” option to pay in full immediately using a card, bank transfer, or some other mechanism.

WooPayments supports [Affirm](https://www.affirm.com/), [Afterpay](https://www.afterpay.com/), and [Klarna](https://klarna.com/) so that merchants in a wide range of countries can offer flexible ways for their customers to pay.

**NOTE:** Afterpay is known as “Cash App Afterpay” in the U.S. and “Clearpay” in the United Kingdom, but this page and our other documentation pages use the name **Afterpay** for the sake of simplicity.

Which BNPL provider(s) you can use depends on the country you chose during the WooPayments signup process.

| Account Country | Affirm | Afterpay | Klarna |
| --- | --- | --- | --- |
| Australia | ![Image 2: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 3: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) | ![Image 4: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) |
| Austria | ![Image 5: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 6: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 7: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| Belgium | ![Image 8: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 9: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 10: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| Canada | ![Image 11: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) | ![Image 12: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) | ![Image 13: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) |
| Denmark | ![Image 14: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 15: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 16: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| Finland | ![Image 17: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 18: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 19: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| France | ![Image 20: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 21: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | Only “Pay in 3” |
| Germany | ![Image 22: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 23: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 24: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| Ireland | ![Image 25: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 26: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 27: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| Italy | ![Image 28: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 29: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 30: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| Netherlands | ![Image 31: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 32: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 33: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| New Zealand | ![Image 34: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 35: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) | ![Image 36: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) |
| Norway | ![Image 37: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 38: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 39: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| Spain | ![Image 40: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 41: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 42: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| Sweden | ![Image 43: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 44: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 45: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| United Kingdom | ![Image 46: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 47: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) | ![Image 48: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| United States | ![Image 49: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) | ![Image 50: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) | ![Image 51: ✅](https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg) |
| [Other supported countries](https://woocommerce.com/document/woopayments/compatibility/countries/#supported-countries) | ![Image 52: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 53: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) | ![Image 54: ❌](https://s.w.org/images/core/emoji/17.0.2/svg/274c.svg) |

To use a BNPL method, first navigate to **Payments > Settings** and find the _Buy now, pay later_ section. From there, you can enable Affirm, Afterpay, and/or Klarna.

[![Image 55](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-04-10-at-11.45.52-UTC@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-04-10-at-11.45.52-UTC@2x.png)
If you’re trying to enable a BNPL method, you may see a popup window that says that more information is needed. You might also see an alert next to the payment method details in **Payments > Settings**.

In these cases, it means that you need to provide more information before you can enable that particular BNPL payment method.

To do that, [log into your Stripe dashboard](https://woocommerce.com/document/wooayments/account-management/access-stripe-account/) and see if any information is missing there. If it is, you’ll see an alert in the Stripe dashboard.

![Image 56](https://woocommerce.com/wp-content/uploads/2024/10/Screenshot-taken-on-2024-10-16-at-18.28.36-UTC@2x-1.png?w=980)
Click the **Edit** link next to any sections with incomplete information and provide whatever missing details are required.

![Image 57](https://woocommerce.com/wp-content/uploads/2024/10/Screenshot-taken-on-2024-10-16-at-18.32.32-UTC@2x.png?strip=all&w=704)
Be sure to save after you’re done. Once Stripe has verified the information you provided, the BNPL method should automatically be enabled.

After you enable Affirm, Afterpay, and/or Klarna, those methods will be available to customers so long as all of the following are true:

*   Their billing country matches [your WooPayments account country](https://woocommerce.com/document/woopayments/payment-methods/buy-now-pay-later/#customer-country-currency-and-bnpl).
*   They are paying in [your account country’s national currency](https://woocommerce.com/document/woopayments/payment-methods/buy-now-pay-later/#customer-country-currency-and-bnpl).
*   The cart total is within the [minimum and maximum range](https://woocommerce.com/document/woopayments/payment-methods/buy-now-pay-later/#minimums-and-maximums).

[![Image 58](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-04-10-at-11.48.29-UTC@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-04-10-at-11.48.29-UTC@2x.png)
A small promotion for Affirm, Afterpay, and/or Klarna will also be shown on eligible product pages. This messaging will also be displayed on the cart page for eligible carts.

By clicking on this promotional text, customers can see a list of potential payment plans they can use during checkout. These options depend on their location, their currency, and the cart total.

[![Image 59](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-04-10-at-11.57.18-UTC@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-04-10-at-11.57.18-UTC@2x.png)
During checkout, if the customer chooses to pay with a BNPL provider, they will be taken to that provider’s website after clicking the **Place Order** button. There, they can create (or log into) an account with that BNPL provider.

Next, they can accept or decline the terms of the payment plan(s) offered to them. Assuming they accept the terms, they will be returned to your site with the checkout process complete.

Affirm has a [video demo and some screenshots](https://businesshub.affirm.com/hc/en-us/articles/6003392244884-Online-eCommerce-Website-Flow) of their customer experience. [Afterpay’s documentation](https://help.afterpay.com/hc/en-us/articles/217425866-How-does-Afterpay-work-) and [Klarna’s documentation](https://www.klarna.com/us/pay-with-klarna/?) are a bit less detailed, but the customer experience is more or less the same: they log in or create an account, choose a payment plan, and finish checking out.

**NOTE:** BNPL providers will offer various payment plans to your customers depending on the purchase amount, the customer’s location, and other factors. Since merchants are paid in full as soon as the order is placed, the details of the customer’s payment plan ([mostly](https://woocommerce.com/document/woopayments/payment-methods/buy-now-pay-later/#bnpl-fees)) do not impact you.

Orders placed via a BNPL payment method will appear under **WooCommerce > Orders** and **Payments > Transactions**, just like orders placed with cards.

Orders paid via Klarna will have additional information on the **Payments > Transactions** page. This information includes:

*   _Category_, which shares which [Klarna payment method](https://www.klarna.com/uk/business/merchant-support/what-is-klarnas-payment-methods-as-separate-products/) the customer chose.
*   _Preferred Locale_, which provides [locale information](https://unicode-org.github.io/icu/userguide/locale/) about the customer’s country and language.

[![Image 60](https://woocommerce.com/wp-content/uploads/2023/10/klarna-category-preferred-locale.png?w=650)](https://woocommerce.com/wp-content/uploads/2023/10/klarna-category-preferred-locale.png)
When the transaction is complete, your WooPayments account receive the entire purchase amount immediately. The important thing to keep in mind is that the customers are not paying _you_ over time, they are paying _the BNPL provider_ over time.

WooPayments does not support cross-border/international transactions using BNPL methods. As such, not all of your customers will be able to pay via BNPL.

Specifically, for them to be able to use BNPL methods, customers must:

*   Use a billing country that matches your WooPayments account country, and
*   Pay in the national currency of your account country, shown in the chart below.

| Your account country | To use BNPL, customers must be paying in… |
| --- | --- |
| Australia | AUD |
| Austria | EUR |
| Belgium | EUR |
| Canada | CAD |
| Denmark | DKK |
| Finland | EUR |
| France | EUR |
| Germany | EUR |
| Ireland | EUR |
| Italy | EUR |
| Netherlands | EUR |
| New Zealand | NZD |
| Norway | NOK |
| Spain | EUR |
| Sweden | SEK |
| United Kingdom | GBP |
| United States | USD |

There are minimum and maximum amounts that each BNPL provider can be used for, which can also vary by currency. These limits are shown in the charts below.

| Customer Country | Minimum Amount | Maximum Amount |
| --- | --- | --- |
| Canada | $50 CAD | $30,000 CAD |
| United States | $50 USD | $30,000 USD |

| Customer Country | Minimum Amount | Maximum Amount |
| --- | --- | --- |
| Australia | $1 AUD | $2,000 AUD |
| Canada | $1 CAD | $2,000 CAD |
| New Zealand | $1 NZD | $2,000 NZD |
| United Kingdom | £1 GBP | £1,200 GBP |
| United States | $1 USD | $4,000 USD |

**NOTE:** Klarna allows customers to either **buy now, pay later** (BNPL), or **pay immediately** (Pay Now). Which of these are offered to customers depends on their country and the cart total. The maximums for BNPL and Pay Now are shown below for each country.

| Customer Country | Minimum Amount | Maximum BNPL Amount | Maximum Pay Now Amount |
| --- | --- | --- | --- |
| Austria | €0.10 EUR | €5,000 EUR | €10,000 EUR |
| Belgium | €1 EUR | €1,500 EUR | €10,000 EUR |
| Denmark | 1 DKK | 50,000 DKK | 100,000 DKK |
| Finland | €1 EUR | €5,000 EUR | €10,000 EUR |
| France | €35 EUR | €1,500 EUR | N/A |
| Germany | €0.10 EUR | €10,000 EUR | €10,000 EUR |
| Ireland | None | €1,000 EUR | €4,000 EUR |
| Italy | None | €1,500 EUR | €10,000 EUR |
| Netherlands | €1 EUR | €5,000 EUR | €15,000 EUR |
| Norway | None | 75,000 NOK | 100,000 NOK |
| Spain | None | €4,000 EUR | €10,000 EUR |
| Sweden | None | 100,000 SEK | 150,000 SEK |
| United Kingdom | None | £2,000 GBP | £4,000 GBP |
| United States | None | $10,000 USD | $4,000 USD |

BNPL methods can be used in [test mode](https://woocommerce.com/document/woopayments/testing-and-troubleshooting/testing/#enabling-test-mode), just like other payment methods.

You’ll be shown the following screen after placing your test order:

[![Image 61](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-03-at-08.52.18-UTC@2x.png?w=862)](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-03-at-08.52.18-UTC@2x.png)
Enter your mobile phone number, click **Continue**, and then enter `123456` as the verification code. If you’re asked for additional information, it’s best to use your real name, email, and so on to avoid triggering Affirm’s fraud detection system.

Choose from one of the available payment plans and click **Choose this plan**.

[![Image 62](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-03-at-08.54.44-UTC@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-03-at-08.54.44-UTC@2x.png)
Finally, disable the AutoPay option on the summary page, check the terms and conditions checkbox, then click **Confirm**.

[![Image 63](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-03-at-09.01.24-UTC@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-03-at-09.01.24-UTC@2x.png)
After confirming, you’ll be taken back to your site’s _Order Received_ page as normal.

You’ll be shown the following screen after placing your test order:

[![Image 64](https://woocommerce.com/wp-content/uploads/2024/05/Screenshot-taken-on-2023-06-28-at-18.05.45-UTC@2x.webp?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2024/05/Screenshot-taken-on-2023-06-28-at-18.05.45-UTC@2x.webp)
Click **Authorize Test Payment** to test a successful order, or click **Fail Test Payment** to test a failed order. For successful order tests, you’ll be taken back to your site’s _Order Received_ page as usual.

If you’re testing Klarna, you will go through a mockup of the Klarna account creation or signin flow before placing the test order. You’ll need to use a combination of Klarna’s [test customer data](https://docs.klarna.com/resources/developer-tools/sample-data/sample-customer-data/) and/or [test payment data](https://docs.klarna.com/resources/developer-tools/sample-data/sample-payment-data/) to achieve your desired outcome. (The example shown below uses U.S. data.)

After placing a test order via Klarna, you’ll be shown the following screen:

[![Image 65](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-21-at-15.51.48-UTC@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-21-at-15.51.48-UTC@2x.png)
Enter a phone number from the Klarna test data and click **Continue**. For the SMS verification code, enter any six digits except for `999999`.

Choose from one of the available payment plans and click **Continue**.

[![Image 66](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-21-at-15.53.27-UTC@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-21-at-15.53.27-UTC@2x.png)
Click the **Pay with Klarna** button to finish checking out.

[![Image 67](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-21-at-15.54.24-UTC@2x.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2025/03/Screenshot-taken-on-2025-10-21-at-15.54.24-UTC@2x.png)
You’ll be taken back to your site’s _Order Received_ page as normal.

Again, to test other purchase outcomes or situations, please see Klarna’s extensive t[est customer data](https://docs.klarna.com/resources/developer-tools/sample-data/sample-customer-data/) and/or their [test payment data](https://docs.klarna.com/resources/developer-tools/sample-data/sample-payment-data/).

You can fully or partially refund BNPL orders [just as you would for any other order](https://woocommerce.com/document/woopayments/managing-money/#refunds). Each BNPL provider has a time window within which you must issue the refund.

| BNPL Provider | You must issue a refund within… |
| --- | --- |
| Affirm | 120 days of the order being placed |
| Afterpay | 180 days of the order being placed |
| Klarna | 180 days of the order being placed |

As with other payment methods in WooPayments, [transaction fees are not refunded](https://woocommerce.com/document/woopayments/fees-and-debits/why-arent-fees-refunded/).

Because customers must authenticate with their BNPL provider of choice during the purchase process, this helps reduce the risk of unauthorized payments. However, customers can still dispute BNPL transactions for [other reasons](https://woocommerce.com/document/woopayments/fraud-and-disputes/managing-disputes/evidence-suggestions/#dispute-reasons).

Notably, the timelines for BNPL disputes can differ from those of regular card payment disputes, so we have outlined the relevant details below.

Customers must dispute the transaction within:

*   **Affirm:** 60 days
*   **Afterpay:** 120 days
*   **Klarna**
    *   “Transaction unauthorized” disputes: 60 days.
    *   All other dispute reasons: 180 days.

Once a dispute has been created, you must submit evidence within:

*   **Affirm:** 15 days
*   **Afterpay:** 14 days
*   **Klarna:**13 days

After you submit evidence, the BNPL provider will decide within:

*   **Affirm:** 15 days
*   **Afterpay:** 30 days
*   **Klarna:**90 days

Aside from the timeline changes above, disputes for BNPL orders function the same as any other dispute (e.g., you can [view them](https://woocommerce.com/document/woopayments/managing-money/#disputes) and [submit evidence](https://woocommerce.com/document/woopayments/fraud-and-disputes/managing-disputes/evidence-suggestions/) under**Payments > Disputes**).

The [Klarna returns process](https://www.klarna.com/us/return-instructions/) in their app and on their website is initiated by a **Report return** option. When a customer uses this option, and thereafter provides the return shipment information to Klarna (for physical goods), an [inquiry](https://woocommerce.com/document/woopayments/fraud-and-disputes/managing-disputes/#inquiries) is created.

[![Image 68](https://woocommerce.com/wp-content/uploads/2024/10/1_797d6d.png?strip=all&w=704)](https://woocommerce.com/wp-content/uploads/2024/10/1_797d6d.png)
When such an inquiry is opened, you’ll receive notifications by email and in your site’s dashboard, just as you would for any other inquiry or dispute.

Klarna inquiries do not impact your business’s rating with card networks or Klarna. However, they must be resolved within 21 calendar days. If no action is taken, the inquiry will automatically escalate to a [dispute](https://woocommerce.com/document/woopayments/fraud-and-disputes/managing-disputes/).

During the 21-day inquiry period, you cannot [submit evidence](https://woocommerce.com/document/woopayments/fraud-and-disputes/managing-disputes/evidence-suggestions/). Instead, you can either:

*   Resolve the inquiry by [issuing a refund](https://woocommerce.com/document/woopayments/managing-money/#refunds). (This does **not** result in a dispute fee.)
*   Take no action and allow the inquiry to escalate to a dispute after 21 days.

Although inquiries can sound a bit alarming, they are often just part of a normal return process. We recommend contacting the customer to confirm if they’re returning the item(s). If so, you can wait for the return to arrive and then issue a refund as normal.

If the inquiry escalates to a dispute, Klarna will immediately withdraw the disputed amount _and_ a dispute fee from your account. You’ll be notified and can choose to [challenge or accept the dispute](https://woocommerce.com/document/woopayments/fraud-and-disputes/managing-disputes/#challenge-or-accept) within 13 calendar days.

If you challenge the dispute and haven’t received the returned item(s), make sure to include that information in your response. After the dispute is reviewed and resolved, we will notify you through the [standard dispute flow](https://woocommerce.com/document/woopayments/fraud-and-disputes/managing-disputes/#monitor-status).

Because BNPL payment methods inherently involve a third-party company, there are additional restrictions on the types of products you can sell with them. In addition to our [general list of prohibited or restricted products](https://woocommerce.com/document/woopayments/our-policies/prohibited-and-restricted-products/), the restrictions below also apply.

*   Home improvement services, including contractors
*   Titled goods and auto loans, including cars, boats, and other motor vehicles 
*   Professional services, including legal, consulting, and accounting
*   Non-fungible tokens (NFTs)
*   Business-to-business (B2B)
*   Subscription products

[See the full list](https://stripe.com/legal/affirm) for more details.

**WARNING:** Affirm also requires that your site **only** be available in U.S. English (`en_US`), Canadian English (`en_CA`), and/or Canadian French (`fr_CA`). If your site is available in any other languages (e.g. via a multi-language plugin), Affirm may disable your access to their payment method.

*   Alcohol
*   Donations
*   Pre-orders
*   Non-fungible tokens (NFTs)
*   Business-to-business (B2B)
*   Subscription products

[See the full list](https://stripe.com/legal/afterpay-clearpay#restricted-businesses) for more details.

*   Charities
*   Political initiatives, organizations, or parties
*   Subscription products

[Amazon Pay](https://woocommerce.com/document/woopayments/payment-methods/amazon-pay/), [Apple Pay](https://woocommerce.com/document/woopayments/payment-methods/apple-pay/#buy-now-pay-later), and [Google Pay](https://woocommerce.com/document/woopayments/payment-methods/google-pay/#buy-now-pay-later) may offer buy now, pay later options via their interfaces. Please note that there is no way for WooPayments to control or disable these offerings, aside from disabling those payment methods entirely.

Please check each payment methods documentation for further details on what BNPL offerings might be included and how they work.

If you already use a BNPL extension from our Marketplace (e.g., [Affirm](https://woocommerce.com/products/woocommerce-gateway-affirm/), [Afterpay](https://woocommerce.com/products/afterpay/), or [Klarna Payments](https://woocommerce.com/products/klarna-payments/)), you should disable that extension **before** activating the matching BNPL payment method in WooPayments.

