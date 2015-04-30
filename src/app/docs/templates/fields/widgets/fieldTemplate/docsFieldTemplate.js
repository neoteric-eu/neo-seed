define(['docs/templates/fields/module',
	'form-validation',
	'form-validation-bootstrap'], function (module) {
	'use strict';

	/**
	 * Renders list of user's documents
	 * @class docsFieldTemplateWidget
	 * @memberOf app.docs.templates.fields
	 *
	 * @return {{restrict: string, templateUrl: string}}
	 */
	function docsFieldTemplateWidget($log, $compile, DocumentFieldTypesEnum,
	                                 fieldsConf, FieldTemplateAPI) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/widgets/fieldTemplate/docs-field-template.html',
			controllerAs: 'vm',
			link: function (scope, element) {
				var form = element.find('#fieldTemplate');

				$(form)
					.formValidation({
						framework: 'bootstrap',
						icon: {
							valid: 'glyphicon glyphicon-ok',
							invalid: 'glyphicon glyphicon-remove',
							validating: 'glyphicon glyphicon-refresh'
						}
					});

				scope.addField = addField;

				function addField(fieldName, fieldOptions) {
					form.formValidation('addField', fieldName, fieldOptions);
				}
			},

			controller: function ($scope) {
				var vm = this;

				vm.fieldTemplate = FieldTemplateAPI.build();
				vm.fieldGroups = _.groupBy(DocumentFieldTypesEnum, 'group');
				vm.addField = addField;

				function addField(field) {
					var model = field.class.$build();

					$scope.addField('email', {
						validators: _.indexBy(model.validators, 'name')
					});

					vm.fieldTemplate.composite.$add(model);

					$log.debug('Added new field to form');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.registerDirective('docsFieldTemplateWidget', docsFieldTemplateWidget);
});
