define(['components/calendar/module'], function (calendar) {

	"use strict";


	calendar.registerFactory('CalendarEvent', function ($resource) {
		return $resource('app-demo/api/events.json', {_id: '@id'})
	})

});
