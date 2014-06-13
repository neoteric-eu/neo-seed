(function() {
	'use strict';
	define([] , function() {

		var templateCoreUrls = function($routeProvider, PATH_TEMPLATECORE) {
			$routeProvider
			.when('/start', {templateUrl: PATH_TEMPLATECORE + 'views/example.html' })

			.otherwise({redirectTo: '/start'});

		};
		return ['$routeProvider', 'PATH_TEMPLATECORE', templateCoreUrls];
	});
}());
