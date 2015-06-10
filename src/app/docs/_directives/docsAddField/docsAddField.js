define([
	'docs/module',
	'form-validation'
], function (module) {
	'use strict';

	/**
	 * Renders list fo available fields and handles adding them to the composite layer
	 * @class docsAddField
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param docsModuleConf {Object} Module configuration
	 * @param FieldTypesEnum {Object} List of all registered fields
	 * @param FieldAPI {Object} Interface for REST communication with server
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, scope: {container:
	 *   string}, controller: Function}}
	 */
	function docsAddField($log, FieldTypesEnum, docsModuleConf, FieldAPI) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: docsModuleConf.DIRECTIVES_PATH + 'docsAddField/docs-add-field.html',
			controllerAs: 'vm',
			scope: {
				container: '='
			},
			controller: function ($scope) {
				var vm = this;

				// variables
				vm.fieldGroups = _.groupBy(FieldTypesEnum, 'group');

				// functions
				vm.addField = addField;

				/**
				 * Adds field do field list and triggers attached validators
				 * @param fieldType {Object} Enum-based field type
				 */
				function addField(fieldType) {
					var model = FieldAPI.build({fieldType: fieldType});

					$scope.container.composite.$add(model);

					$log.debug('Added new field to form');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsAddField', docsAddField);
});
