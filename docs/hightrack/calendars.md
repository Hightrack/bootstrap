---
layout: docs
title: Calendars
group: hightrack
---

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin]({{ site.baseurl }}/hightrack/#calendars).

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

<link rel='stylesheet' href='../../{{ site.baseurl }}bower_components/fullcalendar/dist/fullcalendar.css' />
<script src='../../{{ site.baseurl }}bower_components/jquery/dist/jquery.min.js'></script>
<script src='../../{{ site.baseurl }}bower_components/moment/src/moment.min.js'></script>
<script src='../../{{ site.baseurl }}bower_components/fullcalendar/dist/fullcalendar/fullcalendar.js'></script>

## Calendar

<script>

$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});
</script>

<div id='calendar'></div>