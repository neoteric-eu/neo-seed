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
		'./controllers/CreateTemplateController',
		'./controllers/ViewTemplateController',
		'./controllers/TemplateListController',

		'./directives/field-directive/field-directive',
		'./directives/heightWatch',

		'./services/documentTemplateService',
		'./services/docsEnums',

		'./resources/documentTemplateResource',
		'./resources/fieldTypesResource',

		'./documentTemplateUrls',
		'./locale/en_EN',
		'./locale/pl_PL'

	], function(angular, CreateTemplateController, ViewTemplateController, TemplateListController, fieldDirective,
		heightWatch, documentTemplateService, docsEnums, documentTemplateResource, fieldTypesResource, documentTemplateUrls) {

		var moduleName = 'documentTemplate';
		var controllers = moduleName + '.controllers';
		var directives = moduleName + '.directives';
		var services = moduleName + '.services';

		angular.module( moduleName , [] )
			.constant('documentTemplateModulePath', './modules/documentTemplate/')
			.config(documentTemplateUrls);

		angular.module( controllers , [] )
			.controller('CreateTemplateController', CreateTemplateController)
			.controller('ViewTemplateController', ViewTemplateController)
			.controller('TemplateListController', TemplateListController);

		angular.module( directives , [] )
			.directive('fieldDirective', fieldDirective)
			.directive('heightWatch', heightWatch);

		angular.module( services, ['ngResource'] )
			.service('documentTemplateService', documentTemplateService)
			.service('docsEnums', docsEnums)
			.service('documentTemplateResource', documentTemplateResource)
			.service('fieldTypesResource', fieldTypesResource);
			// .service('$config', config)

	});
}());
