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

Hello! My name is Thomas<sup>he/him</sup>, but it's easier to write Tom. I'm an IT student from the middle of the UK. This is my (superfluous) home on the internet!

## Contact

<div class="button-group">
  <a class="button no-link" id="js-email">
      <i class="fas fa-envelope fa-fw" aria-hidden="true">></i> <span id="js-email-text">Hi [at] TomR [dot] me</span>
  </a>

  <a href="https://twitter.com/{{ site.twitter }}" class="button">
      <i class="fab fa-twitter fa-fw" aria-hidden="true">></i> @{{ site.twitter }}
  </a>

  <a href="https://github.com/{{ site.github }}" class="button">
      <i class="fab fa-github fa-fw" aria-hidden="true">></i> @{{ site.github }}
  </a>

  <a href="https://www.last.fm/user/{{ site.lfm }}" class="button">
      <i class="fab fa-lastfm fa-fw" aria-hidden="true">></i> {{ site.lfm }}
  </a>

  <!-- <a href="https://www.linkedin.com/in/{{ site.lin }}" class="button">
      <i class="fab fa-linkedin fa-fw" aria-hidden="true">></i> @{{ site.lin }}
  </a> -->
  
</div>


---

## Frequently Asked Questions

### Is that you in the baby pictures?
Yes :)

### Are you Mr. Yaxley-Lennon?
No, although I think he picked a lovely alias to go by. I'm also not a basketballer, footballer or politician&mdash;turns out I have pretty common name.

<script>
const email = atob("aGlAdG9tci5tZQ==");
document.getElementById('js-email-text').innerHTML = email;
document.getElementById('js-email').href = `mailto:${email}`;
document.getElementById('js-email').classList.remove('no-link');
</script>