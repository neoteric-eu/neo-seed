(function() {
	'use strict';
	define([], function(){

		var NeoDocsController = function($rootScope, $scope, $fileUploader, menu) {
			$rootScope.menu = menu.getMenu();
			console.log('rooted');


		};

		return ['$rootScope', '$scope', '$fileUploader', 'menu', NeoDocsController];
	});
}());
