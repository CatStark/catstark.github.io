---
title: Research
permalink: /notes/Research/
layout: page
---

Here are my research notes:

{% assign research_notes = site.notes | where_exp:"item", "item.path contains 'Research'" %}
<ul>
  {% for note in research_notes %}
    <li><a href="{{ note.url }}">{{ note.title }}</a></li>
  {% endfor %}
</ul>