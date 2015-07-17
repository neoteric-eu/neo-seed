define(['seed/module'], function (module) {
	'use strict';

	module.directive('languageSelector', function () {
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'apps/components/language/directives/language-selector.html',
			scope: true
		};
	});
});
