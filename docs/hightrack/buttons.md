---
layout: docs
title: Buttons
group: hightrack
redirect_from: "/hightrack/"
---

Use Bootstrap's custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Rounded buttons

Bootstrap includes six predefined button styles, each serving its own semantic purpose.

{% example html %}
<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<div class="btn-rd btn-primary">?</div>

<!-- Secondary, outline button -->
<div class="btn-rd btn-secondary">?</div>

<!-- Indicates a successful or positive action -->
<div class="btn-rd btn-success">?</div>

<!-- Contextual button for informational alert messages -->
<div class="btn-rd btn-info">?</div>

<!-- Indicates caution should be taken with this action -->
<div class="btn-rd btn-warning">?</div>

<!-- Indicates a dangerous or potentially negative action -->
<div class="btn-rd btn-danger">?</div>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<div class="btn-rd btn-link">?</div>
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Outline rounded buttons

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

{% example html %}
<button type="button" class="btn-rd btn-outline-primary">?</button>
<button type="button" class="btn-rd btn-outline-secondary">?</button>
<button type="button" class="btn-rd btn-outline-success">?</button>
<button type="button" class="btn-rd btn-outline-info">?</button>
<button type="button" class="btn-rd btn-outline-warning">?</button>
<button type="button" class="btn-rd btn-outline-danger">?</button>
{% endexample %}

