define(['app'], function (module) {
	'use strict';

	module.directive('languageSelector', function () {
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/components/language/directives/language-selector.html',
			scope: true
		};
	});
});
