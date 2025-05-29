---
title: Photography
permalink: /notes/Photography/
layout: Post
feedformat: card

---

{% assign photography_notes = site.notes | where_exp:"note", "note.path contains 'Photography/'" %}

<div class="notes-grid">
  {% for note in photography_notes %}
    {% include note-card.html note=note %}
  {% endfor %}
</div>