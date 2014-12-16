(function() {
	'use strict';
	define([] , function() {

		var miniTemplateUrls = function($routeProvider, PATH_MINITEMPLATE) {
			$routeProvider
			.when('/start', {templateUrl: PATH_MINITEMPLATE + 'views/example.html', access:'SM_USER_GET' })
			.when('/login', {templateUrl: PATH_MINITEMPLATE + 'views/login-page.html', access:'ONLY_NOT_LOGGED'})
			.when('/password/reset', {templateUrl: PATH_MINITEMPLATE + '/views/password/reset.html', access: 'ONLY_NOT_LOGGED'})
			.when('/password/reset/:token', {templateUrl: PATH_MINITEMPLATE + '/views/password/new.html', access: 'ONLY_NOT_LOGGED'})
			.otherwise({redirectTo: '/start'});
		};

		return ['$routeProvider', 'PATH_MINITEMPLATE', miniTemplateUrls];

	});
}());
