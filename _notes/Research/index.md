---
title: Research
permalink: /notes/Research/
layout: Post
feedformat: card
---

{% assign research_notes = site.notes | where_exp:"note", "note.path contains 'Research/'" %}

<div class="notes-grid">
  {% for note in research_notes %}
    {% include note-card.html note=note %}
  {% endfor %}
</div>