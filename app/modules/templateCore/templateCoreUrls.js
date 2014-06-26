(function() {
	'use strict';
	define([] , function() {
		var templateCoreUrls = function($routeProvider, PATH_TEMPLATECORE) {
			$routeProvider
			.when('/documents', {templateUrl: PATH_TEMPLATECORE + 'views/example.html', access:'SM_USER_GET' })

			.when('/login', {templateUrl: PATH_TEMPLATECORE + 'views/login-page.html', access:'ONLY_NOT_LOGGED'})
			.otherwise({redirectTo: '/documents'});
		};
		return ['$routeProvider', 'PATH_TEMPLATECORE', templateCoreUrls];
	});
}());
