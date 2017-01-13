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
	<label class="ht-icon ht-icon-add-bg ht-icon-on"></label>
	<label class="ht-icon ht-icon-dropdown ht-icon-on"></label>
	<label class="ht-icon ht-icon-folder ht-icon-on"></label>
	<label class="ht-icon ht-icon-folder-closed ht-icon-on"></label>
	<label class="ht-icon ht-icon-options ht-icon-on"></label>
	<label class="ht-icon ht-icon-agendaday ht-icon-on"></label>
	<label class="ht-icon ht-icon-agendaweek ht-icon-on"></label>
	<label class="ht-icon ht-icon-agendamonth ht-icon-on"></label>
	<label class="ht-icon ht-icon-agendaweek ht-icon-on"></label>
	<label class="ht-icon ht-icon-left-arrow ht-icon-on"></label>
	<label class="ht-icon ht-icon-right-arrow ht-icon-on"></label>
	<label class="ht-icon ht-icon-menu-controller ht-icon-on"></label>
	<label class="ht-icon ht-icon-add-task ht-icon-on"></label>
	<label class="ht-icon ht-icon-invite-people ht-icon-on"></label>
	<label class="ht-icon ht-icon-place ht-icon-on"></label>
	<label class="ht-icon ht-icon-inbox ht-icon-on"></label>
	<label class="ht-icon ht-icon-todo ht-icon-on"></label>
	<label class="ht-icon ht-icon-delete ht-icon-on"></label>
	<label class="ht-icon ht-icon-note ht-icon-on"></label>
	<label class="ht-icon ht-icon-settings ht-icon-on"></label>
	<label class="ht-icon ht-icon-alarm ht-icon-on"></label>
	<label class="ht-icon ht-icon-repeat ht-icon-on"></label>
	<label class="ht-icon ht-icon-duration ht-icon-on"></label>
	<label class="ht-icon ht-icon-energy ht-icon-on"></label>
	<label class="ht-icon ht-icon-completedlist ht-icon-on"></label>
	<label class="ht-icon ht-icon-burger-menu ht-icon-on"></label>
	<label class="ht-icon ht-icon-duedate ht-icon-on"></label>
	<label class="ht-icon ht-icon-startdate ht-icon-on"></label>
	<label class="ht-icon ht-icon-cancel ht-icon-on"></label>
	<label class="ht-icon ht-icon-description ht-icon-on"></label>
	<label class="ht-icon ht-icon-attachment ht-icon-on"></label>
	<label class="ht-icon ht-icon-tag ht-icon-on"></label>
	<label class="ht-icon ht-icon-track-todo ht-icon-on"></label>
	<label class="ht-icon ht-icon-track-overview ht-icon-on"></label>
	<label class="ht-icon ht-icon-track-review ht-icon-on"></label>

</div>
{% endexample %}

##### Theme color

Note that theme colored icons require you to manually add the `.ht-icon-theme` class to the input's `<label>`.

{% example html %}
<div class="example-body">
  	<label class="ht-icon ht-icon-like ht-icon-theme"></label>
	<label class="ht-icon ht-icon-matrix ht-icon-theme"></label>
	<label class="ht-icon ht-icon-list ht-icon-theme"></label>
	<label class="ht-icon ht-icon-day-13 ht-icon-theme"></label>
	<label class="ht-icon ht-icon-month-E ht-icon-theme"></label>
	<label class="ht-icon ht-icon-add-bg ht-icon-theme"></label>
	<label class="ht-icon ht-icon-dropdown ht-icon-theme"></label>
	<label class="ht-icon ht-icon-folder ht-icon-theme"></label>
	<label class="ht-icon ht-icon-folder-closed ht-icon-theme"></label>
	<label class="ht-icon ht-icon-options ht-icon-theme"></label>
	<label class="ht-icon ht-icon-agendaday ht-icon-theme"></label>
	<label class="ht-icon ht-icon-agendaweek ht-icon-theme"></label>
	<label class="ht-icon ht-icon-agendamonth ht-icon-theme"></label>
	<label class="ht-icon ht-icon-agendaweek ht-icon-theme"></label>
	<label class="ht-icon ht-icon-left-arrow ht-icon-theme"></label>
	<label class="ht-icon ht-icon-right-arrow ht-icon-theme"></label>
	<label class="ht-icon ht-icon-menu-controller ht-icon-theme"></label>
	<label class="ht-icon ht-icon-add-task ht-icon-theme"></label>
	<label class="ht-icon ht-icon-invite-people ht-icon-theme"></label>
	<label class="ht-icon ht-icon-place ht-icon-theme"></label>
	<label class="ht-icon ht-icon-inbox ht-icon-theme"></label>
	<label class="ht-icon ht-icon-todo ht-icon-theme"></label>
	<label class="ht-icon ht-icon-delete ht-icon-theme"></label>
	<label class="ht-icon ht-icon-note ht-icon-theme"></label>
	<label class="ht-icon ht-icon-settings ht-icon-theme"></label>
	<label class="ht-icon ht-icon-alarm ht-icon-theme"></label>
	<label class="ht-icon ht-icon-repeat ht-icon-theme"></label>
	<label class="ht-icon ht-icon-duration ht-icon-theme"></label>
	<label class="ht-icon ht-icon-energy ht-icon-theme"></label>
	<label class="ht-icon ht-icon-completedlist ht-icon-theme"></label>
	<label class="ht-icon ht-icon-burger-menu ht-icon-theme"></label>
	<label class="ht-icon ht-icon-duedate ht-icon-theme"></label>
	<label class="ht-icon ht-icon-startdate ht-icon-theme"></label>
	<label class="ht-icon ht-icon-cancel ht-icon-theme"></label>
	<label class="ht-icon ht-icon-description ht-icon-theme"></label>
	<label class="ht-icon ht-icon-attachment ht-icon-theme"></label>
	<label class="ht-icon ht-icon-tag ht-icon-theme"></label>
	<label class="ht-icon ht-icon-track-todo ht-icon-theme"></label>
	<label class="ht-icon ht-icon-track-overview ht-icon-theme"></label>
	<label class="ht-icon ht-icon-track-review ht-icon-theme"></label>
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

#### Social
{% example html %}

<label class="ht-icon ht-icon-facebook ht-icon-on"></label>
<label class="ht-icon ht-icon-twitter ht-icon-on"></label>
<label class="ht-icon ht-icon-googleplus ht-icon-on"></label>
<label class="ht-icon ht-icon-linkedin ht-icon-on"></label>

{% endexample %}

#### Other
{% example html %}

<label class="ht-icon ht-icon-smile ht-icon-on"></label>
<label class="ht-icon ht-icon-accomplish ht-icon-on"></label>
<label class="ht-icon ht-icon-cloud ht-icon-on"></label>
<label class="ht-icon ht-icon-people ht-icon-on"></label>

{% endexample %}


