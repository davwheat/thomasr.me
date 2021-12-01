---
layout: default
title: About Me
permalink: /about/
description: Who am I?
redirect_from:
  - /faq/
  - /contact/
  - /who/

id: about

menus:
  header:
    title: About
    weight: 1
    identifier: about
---

  Hello! My name is Thomas, but it's easier to write Tom. This is my (superfluous) home on the internet.

- **Pronouns**: he/him <a style="font-size: 0.5em" href="https://web.archive.org/web/20200524175521/https://twitter.com/clewisreviews/status/1264614955141287936">why is this here?</a>
- **Email**: <a id="js-email">hi [at] tomr [dot] me</a>
- **Location**: Birmingham, UK  

For secure chat (and to prove I own things), you can find me on [Keybase](https://keybase.io/{{site.keybase}}).

---

## Brief FaQ

### Please tell me every piece of technology you own
That's not a question but [okay, can do](/uses).

### What's with the baby pictures?
Why not?

### Are you Mr. Yaxley-Lennon?
No, although I think he picked a nice alias to go by. I'm also not a basketballer, footballer or politician &mdash; turns out it's a pretty common name.

<script>
const email = atob("aGlAdG9tci5tZQ==");
document.getElementById('js-email').innerHTML = email;
document.getElementById('js-email').href = `mailto:${email}`;
</script>