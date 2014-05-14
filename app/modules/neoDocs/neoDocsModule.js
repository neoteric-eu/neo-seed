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
		'./menu',

		// './neoDocsUrls',
		// './locale/en_EN',
		// './locale/pl_PL'

	], function(angular, NeoDocsController, menu)
	{

		var moduleName = 'neoDocs';
		var controllers = moduleName + '.controllers';
		// var directives = moduleName + '.directives';
		var services = moduleName + '.services';

		angular.module( controllers , [] )
			.controller('NeoDocsController', NeoDocsController);

		angular.module( services, [] )
			.service('menu', menu);
	});
}());
