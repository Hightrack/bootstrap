---
layout: docs
title: Hightrack
group: hightrack
---

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin]({{ site.baseurl }}/hightrack/#icons).

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

### Icons

Hightrack's `.ht-icon` styles can be applied to other elements, such as `<label>`s, to provide an icon. Add `ht-icon-*` to a `.ht-icon` with one valid value.

Note that colored icons require you to manually add the `.ht-icon-on` class to the input's `<label>`.

##### White color

{% example html %}
<div class="example-body ht-background-theme-primary">
  	<label class="ht-icon ht-icon-like"></label>
	<label class="ht-icon ht-icon-matrix"></label>
	<label class="ht-icon ht-icon-list"></label>
	<label class="ht-icon ht-icon-day-13"></label>
	<label class="ht-icon ht-icon-month-E"></label>
</div>
{% endexample %}

##### Status ON

{% example html %}
<div class="example-body">
  	<label class="ht-icon ht-icon-like ht-icon-on"></label>
	<label class="ht-icon ht-icon-matrix ht-icon-on"></label>
	<label class="ht-icon ht-icon-list ht-icon-on"></label>
	<label class="ht-icon ht-icon-day-13 ht-icon-on"></label>
	<label class="ht-icon ht-icon-month-E ht-icon-on"></label>
</div>
{% endexample %}

### Calendar

Hightrack theme provide full support for day numbers and month letters for icons. Style `ht-icon-day-*` followed byt day number can be applied to a `.ht-icon` in order to show a day. 

The same happend with months, applied `ht-icon-month-*` followed by a capital letter will show a month.

#### Days

{% example html %}
{% for i in (1..31) %}
    <label class="ht-icon ht-icon-day-{{ i }} ht-icon-on"></label>
{% endfor %}
{% endexample %}

#### Months

{% example html %}
{% assign months = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" | split: "," %}
{% for item in months %}
    <label class="ht-icon ht-icon-month-{{ item }} ht-icon-on"></label>
{% endfor %}
{% endexample %}

