define(['seed/layout/module'], function (module) {
	'use strict';

	function neoEuLogotypes() {
		return {
			restrict: 'E',
			templateUrl: 'seed/layout/directives/euLogotypes/neoEuLogotypes.html'
		};
	}

	module.directive('neoEuLogotypes', neoEuLogotypes);
});
