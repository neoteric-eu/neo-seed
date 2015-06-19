define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Directive responsible for rendering field tree
	 * @class docsEditor
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, controllerAs: string, scope: {container: string}, controller:
	 *   Function}}
	 */
	function docsEditor($log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'app/docs/_directives/docsEditor/docs-editor.html',
			controllerAs: 'vm',
			scope: {
				container: '='
			},

			controller: function ($scope) {
				var vm = this;

				// variables
				vm.nestedGridsterOptions = {
					// Row height settings
					rowHeight: 20,
					minSizeY: 4,
					defaultSizeY: 4,
					// Row width settings
					minSizeX: 2,
					maxSizeX: 6,
					defaultSizeX: 3,
					resizable: {
						enabled: false
					},
					draggable: {
						enabled: false
					}
				};

				// functions
				vm.deleteCompositeField = deleteCompositeField;

				/**
				 * Deletes selected field
				 * @method deleteField
				 * @param field {app.docs.Field} Model to be removed
				 */
				function deleteCompositeField(field) {
					//noinspection JSUnresolvedVariable
					$scope.container.composite.$remove(field);

					$log.debug('Removed composite field form container');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsEditor', docsEditor);
});
