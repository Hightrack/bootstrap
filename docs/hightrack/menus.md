---
layout: docs
title: Menus
group: hightrack
---

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin]({{ site.baseurl }}/hightrack/#menus).

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

### Elements

Hightrack's `.ht-icon` styles can be applied to other elements, such as `<label>`s, to provide an icon. Add `ht-icon-*` to a `.ht-icon` with one valid value.

Note that colored icons require you to manually add the `.ht-icon-on` class to the input's `<label>`.

##### Sections

{% example html %}
<div class="ht-menu col-md-4">
	<div class="row ht-header ht-menu-element">
	  <div class="ht-category col-xs-10">Calendar</div>
	  <div class="col-xs-2">
	  	<label class="ht-icon ht-icon-dropdown ht-icon-on"></label>
	  </div>
	</div>
	<ul>
		<li>
			<div class="row">
				<div class="ht-category col-xs-10">
					<div class="form-group">
					  <label class="custom-control custom-checkbox">
					    <input type="checkbox" class="custom-control-input">
					    <span class="custom-control-indicator"></span>
					    <span class="custom-control-description">Todos los calendarios</span>
					  </label>
					</div>
				</div>
				<div class="col-xs-2">
					<label class="ht-icon ht-icon-options ht-icon-on"></label>
				</div>
			</div>
		</li>
		<li>
			<div class="row">
				<div class="ht-category col-xs-10">
					<div class="form-group">
					  <label class="custom-control custom-checkbox">
					    <input type="checkbox" class="custom-control-input">
					    <span class="custom-control-indicator"></span>
					    <span class="custom-control-description">Todos los calendarios</span>
					  </label>
					</div>
				</div>
				<div class="col-xs-2">
					<label class="ht-icon ht-icon-options ht-icon-on"></label>
				</div>
			</div>
		</li>
	</ul>
	<div class="row ht-header ht-menu-element">
	  <div class="ht-folder col-xs-12"><label class="ht-icon ht-icon-folder ht-icon-on"></label> Google (enriquemebaina@gmail.com)</div>
	</div>
	<ul>
		<li>
			<div class="row">
				<div class="ht-category col-xs-10">
					<div class="form-group">
					  <label class="custom-control custom-checkbox">
					    <input type="checkbox" class="custom-control-input">
					    <span class="custom-control-indicator"></span>
					    <span class="custom-control-description">Todos los calendarios</span>
					  </label>
					</div>
				</div>
				<div class="col-xs-2">
					<label class="ht-icon ht-icon-options ht-icon-on"></label>
				</div>
			</div>
		</li>
		<li>
			<div class="row">
				<div class="ht-category col-xs-10">
					<div class="form-group">
					  <label class="custom-control custom-checkbox">
					    <input type="checkbox" class="custom-control-input">
					    <span class="custom-control-indicator"></span>
					    <span class="custom-control-description">Todos los calendarios</span>
					  </label>
					</div>
				</div>
				<div class="col-xs-2">
					<label class="ht-icon ht-icon-options ht-icon-on"></label>
				</div>
			</div>
		</li>
	</ul>
</div>
{% endexample %}

