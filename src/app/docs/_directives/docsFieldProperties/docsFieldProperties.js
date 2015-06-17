define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class docsFieldProperties
	 * @memberOf app.docs.templates.documents
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, controllerAs: string, controller: Function}}
	 */
	function docsFieldProperties($log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			templateUrl: 'app/docs/_directives/docsFieldProperties/docs-field-properties.html',
			controllerAs: 'vm',
			controller: function ($scope) {
				var vm = this;

				vm.closeModal = closeModal;

				function closeModal() {
					$scope.$parent.modalInstance.dismiss();

					$log.debug('Closed field properties modal');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsFieldProperties', docsFieldProperties);
});
