---
layout: docs
title: Hightrack
group: components
---

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin]({{ site.baseurl }}/components/hightrack/#tasks).

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Focusbar

Instead of applying button border classes to every button in a group, just add `.btn-group-border` to each `.btn-group`, including each one when nesting multiple groups.

<div class="bd-example ht-quickbar">
  <div class="btn-group btn-group-lg ht-focusbar" role="group" aria-label="Large button group">
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
  </div>
  <br>
  <div class="btn-group ht-focusbar" role="group" aria-label="Default button group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-sm ht-focusbar" role="group" aria-label="Small button group">
    <button type="button" class="btn btn-danger">Left</button>
    <button type="button" class="btn btn-danger">Middle</button>
    <button type="button" class="btn btn-danger">Right</button>
  </div>
</div>

{% highlight html %}
<div class="btn-group btn-group-lg btn-group-border" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-border" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm btn-group-border" role="group" aria-label="...">...</div>
{% endhighlight %}
