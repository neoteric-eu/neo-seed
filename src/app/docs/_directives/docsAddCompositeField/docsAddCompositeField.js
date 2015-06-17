define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Renders list fo available fields and handles adding them to the composite layer
	 * @class docsAddCompositeField
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param CompositeFieldAPI {Object} Interface for REST communication with server
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: {container:
	 *   string}, controller: Function}}
	 */
	function docsAddCompositeField($log, CompositeFieldAPI) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: '/app/docs/_directives/docsAddCompositeField/docs-add-composite-field.html',
			controllerAs: 'vm',
			scope: {
				container: '='
			},

			controller: function ($scope) {
				var vm = this;

				//variables
				vm.compositeFields = undefined;

				// functions
				vm.init = init;
				vm.addField = addField;

				init();

				/**
				 * Set up
				 */
				function init() {
					CompositeFieldAPI
						.fetch()
						.then(function (collection) {
							vm.compositeFields = collection;
						});

					$log.debug('Initiated controller');
				}

				/**
				 * Adds field do field list and triggers attached validators
				 * @param compositeField {Object} Composite field to be added to form
				 */
				function addField(compositeField) {

					// Remove field from template collection
					vm.compositeFields.$remove(compositeField);

					compositeField.$type = $scope.container.composite.$type;

					$scope.container.composite.$add(compositeField);

					$log.debug('Added new composite field');
				}
			}
		};
	}

	module.directive('docsAddCompositeField', docsAddCompositeField);
});
