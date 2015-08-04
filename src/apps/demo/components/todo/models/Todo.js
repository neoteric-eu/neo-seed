define(['apps/demo/module'], function (app) {

	"use strict";

	return app.factory('Todo', function ($resource) {


		return $resource('apps/demo/api/todos.json', {'id': '@_id'});

	});


});
