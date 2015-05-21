define(['docs/templates/fields/module'], function (module) {
	'use strict';

	/**
	 * Renders list of user's documents
	 * @class docsFieldTemplateListWidget
	 * @memberOf app.docs.templates.fields
	 *
	 * @param neoTableParams {Function} Table configuration object.
	 * @param fieldsConf {Object} Module configuration
	 * @param CompositeFieldAPI {Object} API interface for server communication.
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsFieldTemplateListWidget(neoTableParams, CompositeFieldAPI, fieldsConf) {
		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH +
			'/widgets/fieldTemplateList/docs-field-template-list.html',
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				// variables
				vm.fieldTemplatesTableOptions = new neoTableParams(CompositeFieldAPI);

				// methods
				vm.removeFieldTemplate = removeFieldTemplate;

				function removeFieldTemplate(fieldTemplate){
					CompositeFieldAPI.remove(fieldTemplate);
				}
			}
		};
	}

	module.directive('docsFieldTemplateListWidget', docsFieldTemplateListWidget);
});
