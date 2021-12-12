---
layout: default
title: Colophon
permalink: /about/this-site/
description: Info about this site
---

- Statically generated with Jekyll.
- Styled with SCSS, scripted with JS.
- Hosted with Vercel from Source on GitHub.
- Typed in VS Code


# Jekyll

- Jekyll Version **{{ jekyll.version }}**
- Jekyll Environment **{{ jekyll.environment }}** 
- Built Started at **{{ site.time | date: '%Y-%m-%d %H:%M' }}**
- **{{ site.pages.size }}** Pages
- **{{ site.posts.size }}** Posts (**{{ site.categories.size }}** cats, **{{ site.tags.size }}** tags)
- **{{ site.documents.size }}** Pages in Collections
- **{{ site.static_files.size }}** Static Files

---

_[Stay alive.](https://youtu.be/tM9I6ZtpThM)_

{% if jekyll.environment != "production" %}
---

## Jekyll Variable
<pre style="max-height: 95vh; overflow: scroll; background-color: #000; color: #fff;">
{{ jekyll | jsonify | escape }}
</pre>

---

## Site Variable
<pre style="max-height: 95vh; overflow: scroll; background-color: #000; color: #fff;">
{{ site | inspect }}
</pre>
{% endif %}

