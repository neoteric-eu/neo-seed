(function() {
	'use strict';

	define([
		'angular',
		'./services/menu',
		'./services/enums',
		'./directives/height-watch',
		'./templateCoreUrls',

		// Add module gettextCatalog
		'./locale/translations'

	], function(angular, menu, enums, heightWatch, templateCoreUrls ) {

		var moduleName = 'templateCore';
		var directives = moduleName + '.directives';
		var services = moduleName + '.services';


		angular.module( moduleName, [] )
			.constant('PATH_TEMPLATECORE', './modules/templateCore/')
			.config(templateCoreUrls);

		angular.module( directives, [] )
			.directive('heightWatch', heightWatch);

		angular.module( services, [] )
			.service('menu', menu)
			.service('enums', enums);

	});
}());
