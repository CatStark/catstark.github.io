---
layout: default
title: Notes
permalink: /notes/index.html
---

<h1>All Notes</h1>

<ul>
  {% for note in site.notes %}
    <li>
      <a href="{{ note.url | relative_url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>