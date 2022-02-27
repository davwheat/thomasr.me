---
# this page is unique in that is is both a main page and a project page, therefore it shares the metadata of both
layout: default
title: Photography & Flickr Toys
image: /assets/img/pages/photog.jpg
longdescription: "I enjoy taking nice pictures of things whenever I'm out and about. To experiment with my Flickr photos and their metadata I've also made some web-toys."
permalink: /photog/
lang: "JavaScript"
ordering: 0

menus:
  header:
    title: Photog
    weight: 20
    identifier: photog
---

<a href="https://www.flickr.com/photos/{{site.flickr}}" class="button big-border">
    <i class="fab fa-flickr fa-fw"></i> Go straight to my Flickr profile<span class="moving-icon" aria-hidden="true">&raquo;</span>
</a>

### Or try one of the experiments below:
<div class="button-group">
    <!-- this should be a <ul> but it doesn't matter *that* much -->
    <a href="/flickr/photosets" class="button">
        <i class="fas fa-list fa-fw"></i> Albums
    </a>

    <a href="/flickr/photos" class="button">
        <i class="fas fa-images fa-fw"></i> Photos
    </a>

    <a href="/flickr/map" class="button">
        <i class="fas fa-map-marked fa-fw"></i> Map
    </a>

    <a href="/flickr/map/stations" class="button">
        <i class="fas fa-train fa-fw"></i> Station Map
    </a>
</div>
