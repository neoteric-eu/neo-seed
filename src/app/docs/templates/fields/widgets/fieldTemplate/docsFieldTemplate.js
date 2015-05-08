define([
	'docs/templates/fields/module',
	'form-validation',
	'form-validation-bootstrap'
], function (module) {
	'use strict';

	/**
	 * Renders composite field editor that allows to create complex
	 * fields with custom validation.
	 * @class docsFieldTemplateWidget
	 * @memberOf app.docs.templates.fields
	 *
	 * @param $log
	 * @param fieldsConf
	 * @param CompositeFieldAPI
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string, link:
	 *   Function, controller: Function}}
	 */
	function docsFieldTemplateWidget($log, fieldsConf, CompositeFieldAPI) {
		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/widgets/fieldTemplate/docs-field-template.html',
			scope: true,
			controllerAs: 'vm',
			/**
			 *
			 * @param scope
			 * @param element
			 */
			link: function (scope, element) {
				scope.form = element.find('#fieldTemplate');

				$(scope.form)
					.formValidation({
						framework: 'bootstrap',
						icon: {
							valid: 'fa fa-check',
							invalid: 'fa fa-times',
							validating: 'fa fa-refresh'
						}
					});
			},

			/**
			 *
			 * @param $scope
			 */
			controller: function ($scope) {
				$scope.compositeField = CompositeFieldAPI.build();

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsFieldTemplateWidget', docsFieldTemplateWidget);
});
