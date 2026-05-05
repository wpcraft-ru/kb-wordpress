How WordPress 6.9 gives forms a theme.json makeover – WordPress Developer Blog
* [Showcase](https://wordpress.org/showcase/)
* [Plugins](https://wordpress.org/plugins/)
* [Themes](https://wordpress.org/themes/)
* [Hosting](https://wordpress.org/hosting/)
* [News](https://wordpress.org/news/)
* Resources
+ [Learn WordPress](https://learn.wordpress.org/)
+ [Documentation](https://wordpress.org/documentation/)
+ [Education](https://wordpress.org/education/)
+ [Forums](https://wordpress.org/support/forums/)
+ [Developers](https://developer.wordpress.org/)
+ [Blocks](https://wordpress.org/blocks/)
+ [Patterns](https://wordpress.org/patterns/)
+ [Photos](https://wordpress.org/photos/)
+ [Openverse ↗︎](https://openverse.org/)
+ [WordPress.tv ↗︎](https://wordpress.tv/)
* About
+ [About WordPress](https://wordpress.org/about/)
+ [Make WordPress](https://make.wordpress.org/)
+ [Events](https://events.wordpress.org/)
+ [Five for the Future](https://wordpress.org/five-for-the-future/)
+ [Enterprise](https://wordpress.org/enterprise/)
+ [Gutenberg ↗︎](https://wordpress.org/gutenberg/)
+ [Job Board ↗︎](https://jobs.wordpress.net/)
+ [Swag Store ↗︎](https://mercantile.wordpress.org/)
* [Get WordPress](https://wordpress.org/download/)
Search in WordPress.org
[Get WordPress](https://wordpress.org/download/)
[WordPress Developer Blog](https://developer.wordpress.org/news)
How WordPress 6.9 gives forms a theme.json makeover
* [Snippets](https://developer.wordpress.org/news/snippets/)
* Categories
+ [Blocks](https://developer.wordpress.org/news/category/blocks/)
+ [Concepts](https://developer.wordpress.org/news/category/concepts/)
+ [Common APIs](https://developer.wordpress.org/news/category/common-apis/)
+ [Design](https://developer.wordpress.org/news/category/design/)
+ [Playground](https://developer.wordpress.org/news/category/playground/)
+ [Plugins](https://developer.wordpress.org/news/category/plugins/)
+ [Themes](https://developer.wordpress.org/news/category/themes/)
* About
+ [About this site](https://developer.wordpress.org/news/about/)
+ [Updates](https://developer.wordpress.org/news/category/updates/)
+ [How to contribute](https://developer.wordpress.org/news/how-to-contribute/)
+ [Tips and guidelines](https://developer.wordpress.org/news/tips-and-guidelines-for-writers/)
* [Subscribe](https://developer.wordpress.org/news/subscribe/)
* [Developer Resources](https://developer.wordpress.org/)
* [Snippets](https://developer.wordpress.org/news/snippets/)
* Categories
+ [Blocks](https://developer.wordpress.org/news/category/blocks/)
+ [Concepts](https://developer.wordpress.org/news/category/concepts/)
+ [Common APIs](https://developer.wordpress.org/news/category/common-apis/)
+ [Design](https://developer.wordpress.org/news/category/design/)
+ [Playground](https://developer.wordpress.org/news/category/playground/)
+ [Plugins](https://developer.wordpress.org/news/category/plugins/)
+ [Themes](https://developer.wordpress.org/news/category/themes/)
* About
+ [About this site](https://developer.wordpress.org/news/about/)
+ [Updates](https://developer.wordpress.org/news/category/updates/)
+ [How to contribute](https://developer.wordpress.org/news/how-to-contribute/)
+ [Tips and guidelines](https://developer.wordpress.org/news/tips-and-guidelines-for-writers/)
* [Subscribe](https://developer.wordpress.org/news/subscribe/)
* [Developer Resources](https://developer.wordpress.org/)
# How WordPress 6.9 gives forms a theme.json makeover
By [Justin Tadlock](https://profiles.wordpress.org/greenshady/)
November 6, 2025
[Themes](https://developer.wordpress.org/news/category/themes/)
WordPress is finally getting `theme.json` support for form styling. Before breaking out the big fireworks in celebration, a fair warning: it’s limited to a subset of elements. Specifically, text inputs and select dropdowns. *So…maybe some mini fireworks.*
Form styling has [long been requested](https://github.com/WordPress/gutenberg/issues/34198) since the introduction of `theme.json`, and the changes coming in WordPress 6.9 are the first iteration of what I expect to be many and the way toward a complete solution.
In this article, I will walk you through what you can use `theme.json` for and what currently requires custom CSS.
Table of Contents
1. [Adding styles via theme.json](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#adding-styles-via-theme-json)
1. [Styling select dropdowns](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#styling-select-dropdowns)
2. [Styling text inputs and textareas](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#styling-text-inputs-and-textareas)
2. [Filling in the gaps with CSS](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#filling-in-the-gaps-with-css)
1. [Styling unsupported properties](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#styling-unsupported-properties)
2. [Adding focus styles](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#adding-focus-styles)
3. [Add extra element styles](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#add-extra-element-styles)
3. [Further reading](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#further-reading)
## Adding styles via theme.json
WordPress 6.9 adds two elements that you can style via `theme.json`:
* **`select`:** Targets HTML elements.
* **`textInput`:** Targets and elements with a `type` attribute of the following:
+ `email`
+ `number`
+ `password`
+ `search`
+ `text`
+ `tel`
+ `url`
You must define element styles under the `styles.elements` property in `theme.json`. For example, here’s where you would add styles for selects and text inputs:
```
{
"$schema": "https://schemas.wp.org/trunk/theme.json",
"version": 3,
"styles": {
"elements": {
"select": {},
"textInput": {}
}
}
}
```
### Styling select dropdowns
WordPress doesn’t have many blocks that output a element. To test your custom styles for it, I recommend inserting either the Categories List or Archives block into the editor. You can output either as a dropdown by enabling the **Settings → Display as dropdown** option in the block inspector.
Ultimately, the plan is to style the blocks so that they look like this on the front end:
Like other elements in `theme.json`, it supports the full array of [styling options](https://developer.wordpress.org/themes/global-settings-and-styles/styles/). The design in the screenshot above uses custom border, color, outline, shadow, and spacing properties.
Add the new `select` element to your `theme.json` as shown here:
```
{
"$schema": "https://schemas.wp.org/trunk/theme.json",
"version": 3,
"styles": {
"elements": {
"select": {
"border": {
"color": "#d5dae2",
"style": "solid",
"width": "1px",
"radius": "0.75rem"
},
"color": {
"background": "#eceff2",
"text": "#22272f"
},
"outline": {
"color": "transparent",
"offset": "2px",
"style": "solid",
"width": "2px"
},
"shadow": "0 10px 15px -3px #0000001A, 0 4px 6px -4px #0000001A",
"spacing": {
"padding": {
"top": "var(--wp--preset--spacing--10)",
"bottom": "var(--wp--preset--spacing--10)",
"left": "var(--wp--preset--spacing--30)",
"right": "var(--wp--preset--spacing--30)"
}
}
}
}
}
}
```
Of course, this will likely look different depending on the theme that you’re using. And, as always, I encourage [using presets](https://developer.wordpress.org/themes/global-settings-and-styles/styles/using-presets/) instead of hardcoded values.
The above code adds a global style for the HTML element across the entire site, including those used in third-party plugins. However, depending on the styles for those plugins, they may need to be updated to ensure they are not overriding `theme.json` styles once WordPress 6.9 ships.
You may have noticed that I intentionally set `outline-color` to `transparent`. This is because I don’t want it to show until the element is focused.
Unfortunately, WordPress 6.9 will not ship with focus state styling for form elements. There’s a [work-in-progress patch](https://github.com/WordPress/gutenberg/pull/71634) for that. You’ll learn how to address this limitation with CSS later in this tutorial.
### Styling text inputs and textareas
Styling text inputs and textareas is a little more fun, mostly because there is a larger variety of WordPress blocks to test. For this example, I’m showcasing the Comments Form block, but these styles will also apply to Login/out, Search, and any third-party blocks that have an or .
Let’s try adding some styles for text inputs so that they look similar to this:
In this case, the styles for `textInput` are exactly the same as those for `select`. This isn’t much of a surprise for people who work with CSS since the elements typically share styles.
Add the new code for `textInput` to your `theme.json`:
```
{
"$schema": "https://schemas.wp.org/trunk/theme.json",
"version": 3,
"styles": {
"elements": {
"textInput": {
"border": {
"color": "#d5dae2",
"style": "solid",
"width": "1px",
"radius": "0.75rem"
},
"color": {
"background": "#eceff2",
"text": "#22272f"
},
"outline": {
"color": "transparent",
"offset": "2px",
"style": "solid",
"width": "2px"
},
"shadow": "0 10px 15px -3px #0000001A, 0 4px 6px -4px #0000001A",
"spacing": {
"padding": {
"top": "var(--wp--preset--spacing--10)",
"bottom": "var(--wp--preset--spacing--10)",
"left": "var(--wp--preset--spacing--30)",
"right": "var(--wp--preset--spacing--30)"
}
}
}
}
}
}
```
Once you’ve added your styles, test one of the blocks that display inputs or textareas.
## Filling in the gaps with CSS
For this particular design, I had a few styles that needed custom CSS. Because these are global styles and not tied to any single block, I added them to my theme’s `style.css`.
Note that some block themes do not automatically enqueue their `style.css` file. If that’s how your theme works, please review the [Including Assets](https://developer.wordpress.org/themes/core-concepts/including-assets/) documentation to load the stylesheet.
As shown in this screenshot, the custom styles I added are a focus outline, label styles, and a caret color (i.e, the text cursor color):
### Styling unsupported properties
A nice touch for text inputs is giving the caret a custom color of its own that makes it stand out from the text itself. The caret is the blinking indicator when typing in text fields.
To target the same elements as WordPress, use the following code:
```
textarea,
input:where([type=email], [type=number], [type=password], [type=search], [type=text], [type=tel], [type=url]) {
caret-color: #2770ce;
}
```
Of course, you can add any other properties that are not supported. Above, the code adds support for the CSS `caret-color` property.
### Adding focus styles
Because WordPress doesn’t support CSS `:focus` and other pseudo classes in `theme.json` for its form elements, you must add these via custom CSS, too.
If you recall from earlier, the `outline-color` for both selects and text inputs was defined as `transparent` in `theme.json`. Ideally, this should change when a user focuses on an element, giving a visual indicator that they’re interacting with it.
Add this code to your theme’s `style.css` to change the outline color when focused:
```
textarea:focus,
input:where([type=email], [type=number], [type=password], [type=search], [type=text], [type=tel], [type=url]):focus,
select:focus {
outline-color: #2770ce;
}
```
### Add extra element styles
Since WordPress 6.9 will support only text inputs and selects, it leaves a lot of room for more element support in the future. In the still-open, [original ticket for styling forms](https://github.com/WordPress/gutenberg/issues/34198), there are many elements listed that you may need to style via CSS.
One of the most common elements that you’ll likely want to handle is . It’s a standard sibling (or parent) element with most other form elements.
To achieve the custom colors and typography shown in the screenshot, add this code to your theme’s `style.css` file:
```
/* Basic label styling. */
label {
color: #526277;
font-size: 1rem;
}
/* Reset when the label is next to or wraps a checkbox or radio. */
input[type="checkbox"] + label,
input[type="radio"] + label,
label:has(input[type="checkbox"], input[type="radio"]) {
color: inherit;
font-size: inherit;
}
```
For these styles, you’ll notice that I specifically reset label styles when they are paired with a checkbox or radio input. These generally have a different design than labels paired with other form elements.
Of course, what CSS properties you need will differ depending on the theme you’re using, so customize to fit your needs.
Even though these are custom style rules in a separate stylesheet, I highly encourage integrating them with `theme.json`. To learn more about doing this, check out [Adding and using custom settings in theme.json](https://developer.wordpress.org/news/2023/08/adding-and-using-custom-settings-in-theme-json/).
## Further reading
This is just the start of the journey for styling form elements. While it is not a complete set, it is a welcome iteration, and I would love to see even more support added in WordPress 7.0 and beyond.
To follow along with future updates, I encourage subscribing to these GitHub tickets:
* [Consider adding form elements to the theme.json elements block](https://github.com/WordPress/gutenberg/issues/34198)
* [Support ::placeholder CSS pseudo-element in theme.json](https://github.com/WordPress/gutenberg/issues/71382)
* [WIP: Add pseudo elements support for textinput elements](https://github.com/WordPress/gutenberg/pull/71634)
* [Global Styles – expose way to add more ‘Elements’ to the UI](https://github.com/WordPress/gutenberg/issues/64362)
*Props to [@bph](https://profiles.wordpress.org/bph/) and [@welcher](https://profiles.wordpress.org/welcher/) for feedback and review on this article.*
**Share the post:**
* [Share on Mastodon (Opens in new window)Mastodon](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?share=mastodon&nb=1)
* [Share on LinkedIn (Opens in new window)LinkedIn](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?share=linkedin&nb=1)
* [Share on X (Opens in new window)X](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?share=x&nb=1)
* [Share on Bluesky (Opens in new window)Bluesky](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?share=bluesky&nb=1)
* Share on Mail (Opens in new window)Mail
* [Share on Reddit (Opens in new window)Reddit](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?share=reddit&nb=1)
* [Share on Tumblr (Opens in new window)Tumblr](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?share=tumblr&nb=1)
* [Share on Telegram (Opens in new window)Telegram](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?share=telegram&nb=1)
* [Share on WhatsApp (Opens in new window)WhatsApp](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?share=whatsapp&nb=1)
**Categories:** [Themes](https://developer.wordpress.org/news/category/themes/)
**Tags:** [Block themes](https://developer.wordpress.org/news/tag/block-themes/), [Global Styles](https://developer.wordpress.org/news/tag/global-styles/), [theme.json](https://developer.wordpress.org/news/tag/theme-json/)
## 6 responses to “How WordPress 6.9 gives forms a theme.json makeover”
1. [Alberto Prado](https://alprado.com/)
[November 12, 2025](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#comment-19899)
I hope this means that the feature available in the Gutenberg plugin (Forms) is ready to be implemented in WordPress. That would definitely call for some big fireworks!
[Reply](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?replytocom=19899#respond)
2. Alex Cuadra
[November 12, 2025](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#comment-19901)
Nice ! I’m testing this in my local 🙂
[Reply](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?replytocom=19901#respond)
3. Jonathan de Jong
[November 13, 2025](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#comment-19902)
This is a nice step!
I’m curious and have a question if you don’t mind. There can’t be much “new” code introduced when adding such features now, given that the “framework” for converting theme.json values to CSS is already well established.
How come we don’t see a larger update like this including not just partially forms but all form elements and other common elements too?
This feels like drip feeding something technically stable that could come in one “larger” update and allow devs to get compatible in one go rather than bit by bit.
[Reply](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?replytocom=19902#respond)
1. [Birgit Pauli-Haack](https://profiles.wordpress.org/bph/)
[November 13, 2025](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#comment-19903)
It’s the first time form elements are introduced to the Global Styles, theme.json is just one part of it. It’s been a beneficial approach to implement, code review, test and catch bugs much earlier. Patience is a virtue when you develop not only for a handful of people but for millions of websites. If you want to go fast, go alone. If you wantto go far, go together.
[Reply](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?replytocom=19903#respond)
2. [Justin Tadlock](https://profiles.wordpress.org/greenshady/)
[November 13, 2025](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#comment-19904)
As an addendum to what Birgit mentioned above, it’s also about who contributes their time (those both creating and reviewing the code). WordPress is run by volunteers with limited amounts of time. For a feature to make it into Core, a contributor has to create a pull request with the changes and champion it from start to finish. Sometimes they don’t have the time to devote to larger changes during a particular release cycle.
If there are missing pieces that you’d like to see make it in, I highly encourage getting involved with Core/Gutenberg development. We’re always happy to help with onboarding if it’d be your first time contributing.
Aside from that, changes that impact the front end are rarely simple. You must also make changes to other existing code (usually multiple CSS files for various blocks) so that it’s not overwriting the new feature. For example, for text inputs alone, I believe changes to every form block’s CSS needed to happen to ensure compatibility.
[Reply](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?replytocom=19904#respond)
1. Jonathan de Jong
[November 14, 2025](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#comment-19906)
Thank you both for taking the time to reply.
> Aside from that, changes that impact the front end are rarely simple. You must also make changes to other existing code (usually multiple CSS files for various blocks) so that it’s not overwriting the new feature. For example, for text inputs alone, I believe changes to every form block’s CSS needed to happen to ensure compatibility.
This is the part that I feel answers my question. I was under the impression that adding such support in theme.json was just adding to the schema and outputting the CSS. But of course if the requirement is also for all core blocks to actively use those styles adding element styling is a bigger workload than my initial thinking.
My question was stemming mainly from the fact that we’ve been using a lot of `custom` variables in our theme.json to try and make the most of it and also easier facilitate a kind of design -> theme.json flow. So of course I would rather have WP do specific element styling like the above since it would mean less work-around and more WP core goodness.
FWIW I have been contributing now and then for many years, both with plugins, WCEU talk and I even have open issues and PRs right now. But to be perfectly honest the gatekeeping, arbitrary shutdown of discussions and closing of PRs makes me disheartened and lose motivation to even attempt active contribution. Standing on the outside, it very much feels like there’s a circle (or levels of circles) and if you’re not in you’re out.
This is my personal feelings, and quite OT from the great news of this post but felt relevant to say given both of your answers 🙂
Thank you both for your work!
[Reply](https://developer.wordpress.org/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/?replytocom=19906#respond)
### Leave a Reply [Cancel reply](/news/2025/11/how-wordpress-6-9-gives-forms-a-theme-json-makeover/#respond)
Your email address will not be published. Required fields are marked \*
Comment \*
Name \*
Email \*
Website
Save my name, email, and website in this browser for the next time I comment.
Notify me of follow-up comments by email.
Notify me of new posts by email.
Δ
## Have an idea for a new post?
### [Learn how to contribute](https://developer.wordpress.org/news/how-to-contribute/)
Share your knowledge with fellow WordPress developers.
### [Review tips and guidelines](https://developer.wordpress.org/news/tips-and-guidelines-for-writers/)
Everything you need to know about writing for the Blog.
## Subscribe to the Blog
Email Address
Subscribe
Join 1,861 other subscribers
* [About](https://wordpress.org/about/)
* [News](https://wordpress.org/news/)
* [Hosting](https://wordpress.org/hosting/)
* [Privacy](https://wordpress.org/about/privacy/)
* [Showcase](https://wordpress.org/showcase/)
* [Themes](https://wordpress.org/themes/)
* [Plugins](https://wordpress.org/plugins/)
* [Patterns](https://wordpress.org/patterns/)
* [Learn](https://learn.wordpress.org/)
* [Documentation](https://wordpress.org/documentation/)
* [Developers](https://developer.wordpress.org/)
* [WordPress.tv ↗](https://wordpress.tv/)
* [Get Involved](https://make.wordpress.org/)
* [Events](https://events.wordpress.org/)
* [Donate ↗](https://wordpressfoundation.org/donate/)
* [Five for the Future](https://wordpress.org/five-for-the-future/)
* [WordPress.com ↗](https://wordpress.com/?ref=wporg-footer)
* [Matt ↗](https://ma.tt/)
* [bbPress ↗](https://bbpress.org/)
* [BuddyPress ↗](https://buddypress.org/)
* [Visit our X (formerly Twitter) account](https://www.x.com/WordPress)
* [Visit our Bluesky account](https://bsky.app/profile/wordpress.org)
* [Visit our Mastodon account](https://mastodon.world/%40WordPress)
* [Visit our Threads account](https://www.threads.net/%40wordpress)
* [Visit our Facebook page](https://www.facebook.com/WordPress/)
* [Visit our Instagram account](https://www.instagram.com/wordpress/)
* [Visit our LinkedIn account](https://www.linkedin.com/company/wordpress)
* [Visit our TikTok account](https://www.tiktok.com/%40wordpress)
* [Visit our YouTube channel](https://www.youtube.com/wordpress)
* [Visit our Tumblr account](https://wordpress.tumblr.com/)
The WordPress® trademark is the intellectual property of the WordPress Foundation.
Close
PreviousNext
