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
	function docsFieldTemplateWidget($log, $timeout, DocumentFieldTypesEnum,
	                                 fieldsConf, FieldTemplateAPI) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/widgets/fieldTemplate/docs-field-template.html',
			controllerAs: 'vm',
			scope: true,
			link: function (scope, element) {
				var form = element.find('#fieldTemplate');

				$(form)
					.formValidation({
						framework: 'bootstrap',
						icon: {
							valid: 'fa fa-check',
							invalid: 'fa fa-times',
							validating: 'fa fa-refresh'
						},
						trigger: 'focus blur'
					})
					.on('added.field.fv', function (e, data) {
						$log.debug(data);
					});

				scope.addField = addField;

				function addField(field) {
					form.formValidation('addField', field.$pk, field);

					$log.debug('Adding filed to validation list');
				}
			},

			controller: function ($scope) {
				var vm = this;

				vm.fieldTemplate = FieldTemplateAPI.build();
				vm.fieldGroups = _.groupBy(DocumentFieldTypesEnum, 'group');

				vm.addField = addField;

				function addField(field) {
					var model = field.class.$build();

					vm.fieldTemplate.composite
						.$add(model)
						.$asPromise()
						.then(function () {
							$timeout(function () {
								$scope.addField(model);
							}, 500);
						});

					$log.debug('Added new field to form');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.registerDirective('docsFieldTemplateWidget', docsFieldTemplateWidget);
});
