(function() {
	'use strict';
	define([] , function() {

		var neoDocsUrls = function($routeProvider, PATH_NEODOCS) {
			$routeProvider
			// .when('/init', {templateUrl: PATH_NEODOCS + '/system/init.html'})
			.when('/upload', {templateUrl: PATH_NEODOCS + 'views/upload.html'});

		};
		return ['$routeProvider', 'PATH_NEODOCS', neoDocsUrls];
	});
}());
