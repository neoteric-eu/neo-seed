define(['seed/components/module'], function (module) {
	'use strict';

	function neoEuLogotypes() {
		return {
			restrict: 'E',
			templateUrl: 'seed/components/euLogotypes/neoEuLogotypes.html'
		};
	}

	module.directive('neoEuLogotypes', neoEuLogotypes);
});
