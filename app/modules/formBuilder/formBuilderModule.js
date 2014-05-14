/**
 *	@name formBuilder
 *
 *	@description
 *
 *	based on https://github.com/Selmanh/angularjs-form-builder/
 */

(function() {
	'use strict';

	define([
		'angular',
		'./controllers/CreateFbController',
		'./controllers/ViewFbController',
		'./directives/field-directive/field-directive',
		'./directives/form-directive/form-directive',
		'./services/formService',

		'./formBuilderUrls',
		// './locale/en_EN',
		// './locale/pl_PL'

	], function(angular, CreateFbController, ViewFbController, fieldDirective,
		formDirective, formService, formBuilderUrls) {

		var moduleName = 'formBuilder';
		var controllers = moduleName + '.controllers';
		var directives = moduleName + '.directives';
		var services = moduleName + '.services';

		angular.module( moduleName , [] )
			.config(formBuilderUrls);
			// .constant('PATH_MINICORE', './modules/miniCore/');

		angular.module( controllers , [] )
			.controller('CreateFbController', CreateFbController)
			.controller('ViewFbController', ViewFbController);

		angular.module( directives , [] )
			.directive('fieldDirective', fieldDirective)
			.directive('formDirective', formDirective);

		angular.module( services, ['ngResource'] )
			.service('formService', formService);
			// .service('$config', config)

	});
}());
