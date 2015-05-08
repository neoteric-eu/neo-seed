define([
	'docs/templates/fields/module',
	'form-validation',
	'form-validation-bootstrap'
], function (module) {
	'use strict';

	/**
	 * Renders composite field editor
	 * @class docsFieldTemplateWidget
	 * @memberOf app.docs.templates.fields
	 *
	 * @return {{restrict: string, templateUrl: string}}
	 */
	function docsFieldTemplateWidget($log, $timeout, $injector,
		DocumentFieldTypesEnum, fieldsConf, CompositeFieldAPI, FieldValidatorsEnum) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/widgets/fieldTemplate/docs-field-template.html',
			controllerAs: 'vm',
			/**
			 *
			 * @param scope
			 * @param element
			 */
			link: function (scope, element) {
				var form = element.find('#fieldTemplate');

				$(form)
					.formValidation({
						framework: 'bootstrap',
						icon: {
							valid: 'fa fa-check',
							invalid: 'fa fa-times',
							validating: 'fa fa-refresh'
						}
					});

				scope.addField = addField;

				function addField(field) {
					form.formValidation('addField', field.$pk, field);

					$log.debug('Added filed to validation list');
				}
			},

			/**
			 *
			 * @param $scope
			 */
			controller: function ($scope) {
				var vm = this;

				vm.compositeField = CompositeFieldAPI.build();
				vm.fieldGroups = _.groupBy(DocumentFieldTypesEnum, 'group');
				vm.fieldValidators = FieldValidatorsEnum;

				vm.addField = addField;

				function addField(field) {
					var fieldClass;

					if ($injector.has(field.class)) {
						fieldClass = $injector.get(field.class);
					} else {
						$log.error('Unsupported injectable field class');
					}

					var model = fieldClass.$build();

					vm.compositeField.composite
						.$add(model)
						.$asPromise()
						.then(function () {
							$timeout(function () {
								$scope.addField(model);
							}, 200);
						});

					$log.debug('Added new field to form');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsFieldTemplateWidget', docsFieldTemplateWidget);
});
