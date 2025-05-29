---
title: Research
description: Notes and ideas related to AI safety, reasoning models, and more
permalink: /notes/Research/
layout: default
---

{% assign research_notes = site.notes | where_exp:"note", "note.path contains 'Research/'" %}

<ul>
  {% for note in research_notes %}
    <li><a href="{{ note.url }}">{{ note.title }}</a></li>
  {% endfor %}
</ul>