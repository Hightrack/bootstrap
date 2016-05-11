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
<div class="ht-background-theme-primary">
  <div class="bd-example">
    <div class="btn-group btn-group-lg ht-focusbar" role="group" aria-label="Large button group">
      <button type="button" class="btn btn-primary">Left</button>
      <button type="button" class="btn btn-primary">Middle</button>
      <button type="button" class="btn btn-primary active">Right</button>
    </div>
    <div class="btn-group ht-focusbar" role="group" aria-label="Default button group">
      <button type="button" class="btn btn-secondary">Left</button>
      <button type="button" class="btn btn-secondary active">Middle</button>
      <button type="button" class="btn btn-secondary">Right</button>
    </div>
    <div class="btn-group btn-group-sm ht-focusbar" role="group" aria-label="Small button group">
        <button type="button" class="btn btn-danger">Left</button>
        <button type="button" class="btn btn-danger">Middle</button>
        <button type="button" class="btn btn-danger active">Right</button>
      </div>
    <div class="ht-quickbar">
      <div class="btn-group btn-group-sm ht-focusbar" role="group" aria-label="Small button group">
        <button type="button" class="btn btn-danger">Left</button>
        <button type="button" class="btn btn-danger">Middle</button>
        <button type="button" class="btn btn-danger active">Right</button>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="btn-group btn-group-lg btn-group-border" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-border" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm btn-group-border" role="group" aria-label="...">...</div>
{% endhighlight %}

### Checkbox and radio buttons

Bootstrap's `.button` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling. Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable toggling in their respective styles.

The checked state for these buttons is **only updated via `click` event** on the button. If you use another method to update the input—e.g., with `<input type="reset">` or by manually applying the input's `checked` property—you'll need to toggle `.active` on the `<label>` manually.

Note that pre-checked buttons require you to manually add the `.active` class to the input's `<label>`.

{% example html %}
<div class="example-body ht-background-theme-primary">
  <div class="ht-quickbar">
    <div class="btn-group ht-focusbar" data-toggle="buttons">
      <label class="btn btn-primary btn-sm active">
        <input type="checkbox" checked autocomplete="off"> Checkbox 1 (pre-checked)
      </label>
      <label class="btn btn-primary btn-sm">
        <input type="checkbox" autocomplete="off"> Checkbox 2
      </label>
      <label class="btn btn-primary btn-sm">
        <input type="checkbox" autocomplete="off"> Checkbox 3
      </label>
    </div>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="example-body ht-background-theme-primary">
  <div class="ht-quickbar">
    <div class="btn-group ht-focusbar" data-toggle="buttons">
      <label class="btn btn-primary btn-sm active">
        <input type="radio" name="options" id="option11" autocomplete="off" checked> <label class="ht-icon ht-icon-like"></label>
      </label>
      <label class="btn btn-primary btn-sm">
        <input type="radio" name="options" id="option12" autocomplete="off"> <label class="ht-icon ht-icon-matrix"></label>
      </label>
      <label class="btn btn-primary btn-sm">
        <input type="radio" name="options" id="option13" autocomplete="off"> <label class="ht-icon ht-icon-list"></label>
      </label>
    </div>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="example-body ht-background-theme-primary">
  <div class="ht-quickbar">
    <div class="btn-group ht-focusbar" data-toggle="buttons">
      <label class="btn btn-primary btn-sm active">
        <input type="radio" name="options" id="option21" autocomplete="off" checked> Radio 1 (preselected)
      </label>
      <label class="btn btn-primary btn-sm">
        <input type="radio" name="options" id="option22" autocomplete="off"> Radio 2
      </label>
      <label class="btn btn-primary btn-sm">
        <input type="radio" name="options" id="option23" autocomplete="off"> Radio 3
      </label>
    </div>
  </div>
</div>
{% endexample %}

<label class="ht-icon ht-icon-like ht-icon-on"></label><label class="ht-icon ht-icon-matrix ht-icon-on"></label><label class="ht-icon ht-icon-list ht-icon-on"></label>

### Methods

| Method | Description |
| --- | --- |
| `$().button('toggle')` |Toggles push state. Gives the button the appearance that it has been activated.  |