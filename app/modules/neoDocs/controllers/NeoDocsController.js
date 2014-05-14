(function() {
	'use strict';
	define([], function(){

		var NeoDocsController = function($rootScope, menu) {
			$rootScope.menu = menu.getMenu();
			console.log('rooted');
		};

		return ['$rootScope', 'menu', NeoDocsController];
	});
}());
