(function() {
	'use strict';
	define([] , function() {

		var smRegistrationUrls = function($routeProvider, SM_REGISTRATION_PATH) {
			$routeProvider
				.when('/activation', {templateUrl: SM_REGISTRATION_PATH + '/views/activation.html', access: 'ONLY_NOT_LOGGED'});
				// .when('/register', {templateUrl: SM_REGISTRATION_PATH + '/views/register.html', access: 'ONLY_NOT_LOGGED'})
		};

		return ['$routeProvider', 'SM_REGISTRATION_PATH', smRegistrationUrls];

	});
}());
