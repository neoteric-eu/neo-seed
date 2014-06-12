(function() {
	'use strict';

	define([
		'angular',

		'./services/menu',
		'./services/enums',

		'./directives/height-watch',


	], function(angular, menu, enums, heightWatch ) {

		var moduleName = 'templateCore';
		var directives = moduleName + '.directives';
		var services = moduleName + '.services';


		angular.module( directives , [] )
			.directive('heightWatch', heightWatch);

		angular.module( services, [] )
			.service('menu', menu)
			.service('enums', enums);

	});
}());
