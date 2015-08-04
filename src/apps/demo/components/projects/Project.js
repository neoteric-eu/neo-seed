define(['apps/demo/module'], function (app) {
	"use strict";

	return app.factory('Project', function ($http) {
		return {
			list: $http.get('apps/demo/api/projects.json')
		}
	})
})
