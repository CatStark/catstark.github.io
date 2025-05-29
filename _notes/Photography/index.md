---
title: Photography
permalink: /notes/Photography/
layout: page
---

Here are my current notes, thougths and all in betwen about photography:

{% assign photography_notes = site.notes | where_exp:"item", "item.path contains 'Photography'" %}
<ul>
  {% for note in photography_notes %}
    <li><a href="{{ note.url }}">{{ note.title }}</a></li>
  {% endfor %}
</ul>