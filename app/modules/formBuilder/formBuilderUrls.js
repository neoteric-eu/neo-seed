(function() {
	'use strict';
	define([] , function() {

		var formBuilderUrls = function($routeProvider) {
			var modulePath = './modules/formBuilder';

			$routeProvider
			.when('/forms/create', {
				templateUrl: modulePath + '/views/create.html',
				controller: 'CreateFbController'
			})
			.when('/forms/:id/view', {
				templateUrl: modulePath + '/views/view.html',
				controller: 'ViewController'
			});
		};
		return ['$routeProvider', formBuilderUrls];
	});
}());
