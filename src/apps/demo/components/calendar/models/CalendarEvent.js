define(['apps/demo/components/calendar/module'], function (calendar) {

	"use strict";


	calendar.registerFactory('CalendarEvent', function ($resource) {
		return $resource('apps/demo/api/events.json', {_id: '@id'})
	})

});
