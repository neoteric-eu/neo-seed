/**
 *	@name documentTemplate
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
		'./controllers/documentTemplateController',

		'./directives/field-directive/field-directive',
		'./directives/form-directive/form-directive',

		'./services/formService',
		'./services/documentTemplateService',

		'./resources/documentTemplateResource',

		'./documentTemplateUrls',
		'./locale/en_EN',
		'./locale/pl_PL'

	], function(angular, CreateFbController, ViewFbController, documentTemplateController, fieldDirective,
		formDirective, formService, documentTemplateService, documentTemplateResource, documentTemplateUrls) {
console.log(documentTemplateService);
		var moduleName = 'documentTemplate';
		var controllers = moduleName + '.controllers';
		var directives = moduleName + '.directives';
		var services = moduleName + '.services';

		angular.module( moduleName , [] )
			.constant('documentTemplateModulePath', './modules/documentTemplate/')
			.config(documentTemplateUrls);

		angular.module( controllers , [] )
			.controller('CreateFbController', CreateFbController)
			.controller('ViewFbController', ViewFbController)
			.controller('documentTemplateController', documentTemplateController);

		angular.module( directives , [] )
			.directive('fieldDirective', fieldDirective)
			.directive('formDirective', formDirective);

		angular.module( services, ['ngResource'] )
			.service('formService', formService)
			.service('documentTemplateService', documentTemplateService)
			.service('documentTemplateResource', documentTemplateResource);
			// .service('$config', config)

	});
}());
