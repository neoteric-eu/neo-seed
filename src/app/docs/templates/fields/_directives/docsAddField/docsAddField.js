define([
	'docs/templates/fields/module'
], function (module) {
	'use strict';

	/**
	 * Renders composite field editor
	 * @class docsAddField
	 * @memberOf app.docs.templates.fields
	 *
	 * @param $log {Object} Logging service
	 * @param fieldsConf {Object} Module configuration
	 * @param FieldTypesEnum {Object} List of all registered fields
	 * @param FieldAPI {Object} Interface for REST communication with server
	 * @return {{restrict: string, templateUrl: string, transclude: boolean, require: string,
	 *   controllerAs: string, link: Function, controller: Function}}
	 */
	function docsAddField($log, FieldTypesEnum, fieldsConf, FieldAPI) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.DIRECTIVES_PATH + 'docsAddField/docs-add-field.html',
			transclude: true,
			require: '^docsFieldTemplateWidget',
			link: function (scope) {
				var vm = scope.vm;

				vm.fieldGroups = _.groupBy(FieldTypesEnum, 'group');
				vm.addField = addField;

				function addField(fieldType) {
					var model = FieldAPI.build({fieldType: fieldType});

					scope.compositeField.composite
						.$add(model)
						.$asPromise()
						.then(function () {
							$('#fieldTemplate').formValidation(
								'addField', model.$name, model.$encapsulateValidators()
							);

							$log.debug('Added filed to validation list');
						});

					$log.debug('Added new field to form');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsAddField', docsAddField);
});
