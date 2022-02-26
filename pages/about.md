---
layout: default
title: About Me
permalink: /about/
description: Who am I?
image: /assets/img/blondtommodrawing.jpg
imagealt: "A toddler-age Thomas laying on a carpet, smiling and clutching a pen"
id: about

menus:
  header:
    title: About
    weight: 30
    identifier: about
---

Hello! My name is Thomas, but it's easier to write Tom. I'm an IT student from the middle of the UK. This is my (superfluous) home on the internet!

---

## Contact
- he/him
- <a id="js-email">hi [at] tomr [dot] me</a>
- [Keybase.io/{{site.keybase}}](https://keybase.io/{{site.keybase}})

---

## Frequently Asked

### Is that you in the baby pictures?
Of course it is.

### Are you Mr. Yaxley-Lennon?
No, although I think he picked a lovely alias to go by. I'm also not a basketballer, footballer or politician &mdash; turns out I have pretty common name.

<script>
const email = atob("aGlAdG9tci5tZQ==");
document.getElementById('js-email').innerHTML = email;
document.getElementById('js-email').href = `mailto:${email}`;
</script>