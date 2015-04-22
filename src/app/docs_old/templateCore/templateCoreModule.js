(function () {
	'use strict';

	define([
		'angular',
		'./controllers/UploaderController',
		'./services/menu',
		'./services/enums',
		'./templateCoreUrls'

	], function (angular, UploaderController, menu, enums, templateCoreUrls) {

		var moduleName = 'templateCore';
		var controllers = moduleName + '.controllers';
		var services = moduleName + '.services';


		angular.module(moduleName, [])
			.constant('PATH_TEMPLATECORE', './modules/templateCore/')
			.config(templateCoreUrls);

		angular.module(controllers, [])
			.controller('UploaderController', UploaderController);
		angular.module(services, [])
			.service('menu', menu)
			.service('enums', enums);

	});
}());
