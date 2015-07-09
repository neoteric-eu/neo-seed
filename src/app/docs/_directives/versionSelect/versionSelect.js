define([
	'docs/module'
], function (module) {
	'use strict';

	/**
	 * Enables switching between model version using app ui-router states
	 * @class versionSelect
	 * @memberOf app.docs
	 *
	 * @example
	 * <version-select model="model"></version-select>
	 *
	 * @param $log {Object} Logging service
	 * @param $stateParams {Object} Current request param provider
	 * @param $state {Object} UI-Router state service
	 * @return {{restrict: string, templateUrl: string, scope: {model: string}, controller: Function}}
	 * @param $stateParams
	 */
	function versionSelect($log, $stateParams, $state) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'app/docs/_directives/versionSelect/version-select.html',
			controllerAs: 'vm',
			scope: {
				model: '='
			},
			controller: function ($scope) {
				var vm = this;

				$scope.$watch('model', function () {
					// Check if model is already bound to scope
					if (!_.isUndefined($scope.model)) {
						$scope.model.versions
							.$refresh()
							.$asPromise()
							.then(function () {
								$log.debug('Fetched versions list from the server');
							})
							.catch(function () {
								$log.error('Error fetching versions list from the server');
							});
					}
				});

				// variables
				// functions
				vm.changeDocumentVersion = changeDocumentVersion;

				/**
				 * Switches between document versions
				 * @param newVersion {Object} version number to be changed to
				 * @todo Fix version switching between models in next iteration
				 */
				function changeDocumentVersion(newVersion) {
					// If switching to newest version omit postfix version
					//noinspection JSUnresolvedVariable
					if (_.isEqual(_.first($scope.model.versions), newVersion)) {
						$log.debug('Switching to document newest version');

						$state.go($state.current, {id: $stateParams.id, version: null});
					} else {
						$log.debug('Switching to document version: ' + newVersion.version);

						$state.go($state.current, {id: $stateParams.id, version: newVersion.version});
					}
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('versionSelect', versionSelect);
});
