define([
	'docs/templates/fields/module'
], function (module) {
	'use strict';

	/**
	 * Renders composite field editor
	 * @class docsAddField
	 * @memberOf app.docs.templates.fields
	 *
	 * @param $log
	 * @param $timeout
	 * @param $injector
	 * @param FieldTypesEnum
	 * @param fieldsConf
	 * @return {{restrict: string, templateUrl: string, require: string, controllerAs: string, link:
	 *   Function, controller: Function}}
	 */
	function docsAddField($log, $timeout, $injector, FieldTypesEnum, fieldsConf) {

		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/_directives/docsAddField/docs-add-field.html',
			transclude: true,
			require: '^docsFieldTemplateWidget',
			controllerAs: 'vm',
			/**
			 *
			 * @param scope
			 */
			link: function (scope) {

				scope.addField = addField;

				function addField(field) {
					scope.form.formValidation('addField', field.$pk, field);

					$log.debug('Added filed to validation list');
				}
			},

			/**
			 *
			 * @param $scope
			 */
			controller: function ($scope) {
				var vm = this;

				vm.fieldGroups = _.groupBy(FieldTypesEnum, 'group');
				vm.addField = addField;

				function addField(field) {
					var fieldClass;

					if ($injector.has(field.class)) {
						fieldClass = $injector.get(field.class);
					} else {
						$log.error('Unsupported injectable field class');
					}

					var model = fieldClass.$build();

					$scope.compositeField.composite
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

	module.directive('docsAddField', docsAddField);
});
