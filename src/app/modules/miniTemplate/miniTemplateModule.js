(function () {
	'use strict';

	define([
		'angular',
		'./services/menu',
		'./services/enums',
		'./directives/height-watch',
		'./miniTemplateUrls',

		// Add module gettextCatalog
		'./locale/translations'

	], function (angular, menu, enums, heightWatch, miniTemplateUrls) {

		var moduleName = 'miniTemplate';
		var directives = moduleName + '.directives';
		var services = moduleName + '.services';


		angular.module(moduleName, [])
				.constant('PATH_MINITEMPLATE', './modules/miniTemplate/')
				.config(miniTemplateUrls);

		angular.module(directives, [])
				.directive('heightWatch', heightWatch);

		angular.module(services, [])
				.service('menu', menu)
				.service('enums', enums);

	});
}());
