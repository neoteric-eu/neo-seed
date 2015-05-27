define([
	'docs/module',
	'form-validation'
], function (module) {
	'use strict';

	/**
	 * Renders list fo available fields and handles adding them to the composite layer
	 * @class docsAddCompositeField
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param $timeout {Function} Timeout service
	 * @param docsModuleConf {Object} Module configuration
	 * @param CompositeFieldAPI {Object} Interface for REST communication with server
	 * @return {{restrict: string, templateUrl: string, scope: {container: string}, link: Function}}

	 */
	function docsAddCompositeField($log, $timeout, docsModuleConf, CompositeFieldAPI) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: docsModuleConf.DIRECTIVES_PATH +
			'docsAddCompositeField/docs-add-composite-field.html',
			scope: {
				container: '='
			},
			link: function (scope) {
				var vm = scope.vm = scope.vm || {};

				// variables
				CompositeFieldAPI
					.fetch()
					.then(function (collection) {
						vm.compositeFields = collection;
					});

				// functions
				vm.addField = addField;

				/**
				 * Adds field do field list and triggers attached validators
				 * @param compositeField {Object} Composite field to be added to form
				 */
				function addField(compositeField) {
					scope.container.composite
						.$add(compositeField)
						.$then(function () {
							// Should be replaced with asyncApply
							$timeout(function () {
								$('#fieldTemplate')
									.formValidation('addField', compositeField.$name, compositeField.validators.$encapsulateValidators());
							}, 200);
						}, function () {
							$log.error('Error adding field to collection');
						});

					$log.debug('Added new composite field to form');
				}

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('docsAddCompositeField', docsAddCompositeField);
});
