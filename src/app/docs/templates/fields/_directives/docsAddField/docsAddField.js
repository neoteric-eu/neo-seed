define([
	'docs/templates/fields/module',
	'form-validation'
], function (module) {
	'use strict';

	/**
	 * Renders composite field editor
	 * @class docsAddField
	 * @memberOf app.docs.templates.fields
	 *
	 * @param $log {Object} Logging service
	 * @param $timeout {Function} Timeout service
	 * @param fieldsConf {Object} Module configuration
	 * @param FieldTypesEnum {Object} List of all registered fields
	 * @param FieldAPI {Object} Interface for REST communication with server
	 * @return {{restrict: string, templateUrl: string, scope: {container: string}, link: Function}}

	 */
	function docsAddField($log, $timeout, FieldTypesEnum, fieldsConf, FieldAPI) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.DIRECTIVES_PATH + 'docsAddField/docs-add-field.html',
			scope: {
				container: '='
			},
			link: function (scope) {
				var vm = scope.vm = scope.vm || {};

				// variables
				vm.fieldGroups = _.groupBy(FieldTypesEnum, 'group');

				// functions
				vm.addField = addField;

				function addField(fieldType) {
					var model = FieldAPI.build({fieldType: fieldType});

					scope.container.composite
						.$add(model)
						.$then(
						function () {
							$timeout(function () {
								$('#fieldTemplate')
									.formValidation('addField', model.$name, model.validators.$encapsulateValidators());
							}, 200);
						}, function () {
							$log.error('Error adding field to collection');
						});

					$log.debug('Added new field to form');
				}

				$log.debug('Initiated linking function');
			}
		};
	}

	module.directive('docsAddField', docsAddField);
});
