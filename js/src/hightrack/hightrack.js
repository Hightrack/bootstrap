$(function() {
	$('.calendar').fullCalendar({
		customButtons: {
	        customPrev: {
	            icon: 'left-single-arrow',
	            classes: ['btn-link'],
	            click: function() {
				    $('.calendar').fullCalendar('prev');
				}
	        },
	        customNext: {
	            icon: 'right-single-arrow',
	            classes: ['btn-link'],
	            click: function() {
				    $('.calendar').fullCalendar('next');
				}
	        },
	        today: {
	        	text: 'today',
	            classes: ['btn-link'],
	            click: function() {
				    $('.calendar').fullCalendar('today');
				}
	        },
	        customMonth: {
	        	customIcon: 'ht-icon ht-icon-agendamonth',
	        	classes: ['fc-month-button'],
	            click: function() {
				    $('.calendar').fullCalendar( 'changeView', 'month' );
				}
	        },
	        customWeek: {
	        	customIcon: 'ht-icon ht-icon-agendaweek',
	        	classes: ['fc-agendaWeek-button'],
	            click: function() {
				    $('.calendar').fullCalendar( 'changeView', 'agendaWeek' );
				}
	        },
	        customDay: {
	        	customIcon: 'ht-icon ht-icon-agendaday',
	        	classes: ['fc-agendaDay-button'],
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
		defaultDate: '2016-05-12',
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: 'All Day Event',
				start: '2016-05-01'
			},
			{
				title: 'Long Event',
				start: '2016-05-07',
				end: '2016-05-10'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-05-09T16:00:00',
				eventColor: '#12f253'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-05-16T16:00:00'
			},
			{
				title: 'Conference',
				start: '2016-05-11',
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
		timeFormat: 'H:mm',
		themeType: 'bootstrap',
			cssClasses: {
			buttonGroup: 'btn-group',
			button: 'btn btn-sm',
			buttonStateDefault: 'btn-primary',
			buttonStateActive: 'active',
			buttonStateDisabled: 'disabled',
			buttonStateHover: '',
			buttonStateDown: '',
			buttonCornerLeft: '',
			buttonCornerRight: ''
		}
	});
});