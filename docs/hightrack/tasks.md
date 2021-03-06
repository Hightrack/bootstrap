---
layout: docs
title: Hightrack
group: hightrack
---

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin]({{ site.baseurl }}/hightrack/#tasks).

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Focusbar

### Checkbox and radio buttons

Bootstrap's `.button` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling. Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable toggling in their respective styles.

The checked state for these buttons is **only updated via `click` event** on the button. If you use another method to update the input—e.g., with `<input type="reset">` or by manually applying the input's `checked` property—you'll need to toggle `.active` on the `<label>` manually.

Note that pre-checked buttons require you to manually add the `.active` class to the input's `<label>`.

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

<label class="ht-icon ht-icon-like ht-icon-on"></label>
<label class="ht-icon ht-icon-matrix ht-icon-on"></label>
<label class="ht-icon ht-icon-list ht-icon-on"></label>
<label class="ht-icon ht-icon-day-13 ht-icon-on"></label>
<label class="ht-icon ht-icon-month-E ht-icon-on"></label>

### Methods

| Method | Description |
| --- | --- |
| `$().button('toggle')` |Toggles push state. Gives the button the appearance that it has been activated.  |

### No form elements

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


## Quickbar 

Quickbar 

{% example html %}
<div class="container example-body ht-background-theme-primary">
  <div class="row ht-quickbar">
    <div class="ht-quickbar-action col-md-7">
      <label class="btn btn-flat"><label class="ht-icon ht-icon-add-bg"></label> Add new task</label>
    </div>
    <div class="col-md-5">
      <div class="ht-focus-title col-md-7"><label class="ht-icon ht-icon-day-11"></label><label class="ht-label">Today</label></div>
      <div class="btn-group ht-focusbar" data-toggle="buttons">
        <label class="btn btn-primary btn-sm active">
          <input type="radio" name="options" id="option31" autocomplete="off" checked> <label class="ht-icon ht-icon-like"></label>
        </label>
        <label class="btn btn-primary btn-sm">
          <input type="radio" name="options" id="option32" autocomplete="off"> <label class="ht-icon ht-icon-matrix"></label>
        </label>
        <label class="btn btn-primary btn-sm">
          <input type="radio" name="options" id="option33" autocomplete="off"> <label class="ht-icon ht-icon-list"></label>
        </label>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Nav

### Sections (Inline)

{% example html %}
<div class="ht-quickbar">
  <ul class="nav nav-inline">
    <li class="nav-item active">
      <a class="nav-link" href="#">
        <label class="ht-icon ht-icon-task-header ht-icon-on"></label>
        <label class="ht-label ht-label-sm">Tasks</label>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <label class="ht-icon ht-icon-day-11 ht-icon-bg"></label>
        <label class="ht-label ht-label-sm">Calendars</label>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <label class="ht-icon ht-icon-track-header"></label>
        <label class="ht-label ht-label-sm">Tracks</label>
      </a>
    </li>
  </ul>
</div>
{% endexample %}

### Tab

{% example html %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">
    Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
{% endexample %}
