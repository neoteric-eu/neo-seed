/**
 *	@name neoDocs
 *
 *	@description //TODO: create description
 */

(function() {
	'use strict';

	define([
		'angular',
		'./controllers/NeoDocsController',
		'./controllers/UploaderController',
		'./menu',

		'./neoDocsUrls',
		// './locale/en_EN',
		// './locale/pl_PL'

	], function(angular, NeoDocsController, UploaderController, menu, neoDocsUrls)
	{

		var moduleName = 'neoDocs';
		var controllers = moduleName + '.controllers';
		// var directives = moduleName + '.directives';
		var services = moduleName + '.services';

		angular.module( moduleName , [] )
			.constant('PATH_NEODOCS', './modules/neoDocs/')
			.config(neoDocsUrls);


		angular.module( controllers , [] )
			.controller('NeoDocsController', NeoDocsController)
			.controller('UploaderController', UploaderController);

		angular.module( services, [] )
			.service('menu', menu);
	});
}());
