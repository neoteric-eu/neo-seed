(function() {
	'use strict';

	define([
		'angular',
		'./controllers/UploaderController',
		'./services/menu',
		'./services/enums',
		'./directives/height-watch',
		'./templateCoreUrls'

	], function(angular, UploaderController, menu, enums, heightWatch, templateCoreUrls ) {

		var moduleName = 'templateCore';
		var controllers = moduleName + '.controllers';
		var directives = moduleName + '.directives';
		var services = moduleName + '.services';


		angular.module( moduleName, [] )
			.constant('PATH_TEMPLATECORE', './modules/templateCore/')
			.config(templateCoreUrls);

		angular.module( controllers, [] )
			.controller('UploaderController', UploaderController);

		angular.module( directives, [] )
			.directive('heightWatch', heightWatch);

		angular.module( services, [] )
			.service('menu', menu)
			.service('enums', enums);

	});
}());
