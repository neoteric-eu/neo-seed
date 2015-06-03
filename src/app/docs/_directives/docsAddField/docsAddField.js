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
	 * @param $timeout {Function} Timeout service
	 * @param docsModuleConf {Object} Module configuration
	 * @param FieldTypesEnum {Object} List of all registered fields
	 * @param FieldAPI {Object} Interface for REST communication with server
	 * @return {{restrict: string, templateUrl: string, scope: {container: string}, link: Function}}

	 */
	function docsAddField($log, $timeout, FieldTypesEnum, docsModuleConf, FieldAPI) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: docsModuleConf.DIRECTIVES_PATH + 'docsAddField/docs-add-field.html',
			scope: {
				container: '='
			},
			link: function (scope) {
				var vm = scope.vm = scope.vm || {};

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

					scope.container.composite
						.$add(model)
						.$then(
						function () {
							// Should be replaced with asyncApply
							$timeout(function () {
								$('#fieldTemplate')
									.data('formValidation')
									.addField(model.$name, model.validators.$encapsulateValidators());
							});
						}, function () {
							$log.error('Error adding field to collection');
						});

					$log.debug('Added new field to form');
				}

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('docsAddField', docsAddField);
});
