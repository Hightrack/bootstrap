$(function() {
	$('.calendar').fullCalendar({
		lang: 'es',
		slotLabelFormat: 'H:mm',
		timeFormat: 'H:mm',
		customButtons: {
	        customPrev: {
	            customIcon: 'ht-icon ht-icon-left-arrow ht-icon-on',
	            classes: ['btn-link-gray'],
	            click: function() {
				    $('.calendar').fullCalendar('prev');
				}
	        },
	        customNext: {
	            customIcon: 'ht-icon ht-icon-right-arrow ht-icon-on',
	            classes: ['btn-link-gray'],
	            click: function() {
				    $('.calendar').fullCalendar('next');
				}
	        },
	        today: {
	        	text: 'today',
	            classes: ['btn-link-gray'],
	            click: function() {
				    $('.calendar').fullCalendar('today');
				}
	        },
	        customMonth: {
	        	customIcon: 'ht-icon ht-icon-agendamonth ht-icon-on',
	        	classes: ['fc-month-button btn-complementary'],
	            click: function() {
				    $('.calendar').fullCalendar( 'changeView', 'month' );
				}
	        },
	        customWeek: {
	        	customIcon: 'ht-icon ht-icon-agendaweek ht-icon-on',
	        	classes: ['fc-agendaWeek-button btn-complementary'],
	            click: function() {
				    $('.calendar').fullCalendar( 'changeView', 'agendaWeek' );
				}
	        },
	        customDay: {
	        	customIcon: 'ht-icon ht-icon-agendaday ht-icon-on',
	        	classes: ['fc-agendaDay-button btn-complementary'],
	            click: function() {
				    $('.calendar').fullCalendar( 'changeView', 'agendaDay' );
				}
	        }
	    },
		header: {
			left: 'title',
			center: '',
			right: 'customPrev,today,customNext customDay,customWeek,customMonth'
		},
		nowIndicator: true,
		firstDay: 1,
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: 'All Day Event',
				start: '2016-06-14'
			},
			{
				title: 'Long Event',
				start: '2016-05-07',
				end: '2016-06-13'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-06-14T16:00:00',
				eventColor: '#12f253'
			},
			{
				id: 9990,
				title: 'Trip',
				start: '2016-06-14T19:00:00',
				eventColor: '#12f253'
			},
			{
				id: 9991,
				title: 'School',
				start: '2016-06-14T16:40:00',
				eventColor: '#12f253'
			},
			{
				id: 9992,
				title: 'Sport',
				start: '2016-05-16T16:10:00'
			},
			{
				title: 'Lunch',
				start: '2016-06-16T12:00:00'
			},
			{
				title: 'Conference',
				start: '2016-06-16',
				end: '2016-05-13',
				eventColor: '#378006'
			},
			{
				title: 'Meeting',
				start: '2016-05-12T10:30:00',
				end: '2016-05-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2016-05-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2016-05-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2016-05-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2016-05-12T20:00:00',
				eventColor: '#ff0034'
			},
			{
				title: 'Birthday Party',
				start: '2016-05-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2016-05-28'
			}
		],
		eventColors:'#B8E986',
		themeType: 'bootstrap',
		cssClasses: {
			buttonGroup: 'btn-group',
			button: 'btn btn-sm',
			buttonStateDefault: '',
			buttonStateActive: 'active',
			buttonStateDisabled: 'disabled',
			buttonStateHover: '',
			buttonStateDown: '',
			buttonCornerLeft: '',
			buttonCornerRight: ''
		}
	});
});