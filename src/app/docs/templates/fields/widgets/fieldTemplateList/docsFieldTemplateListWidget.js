define(['docs/templates/fields/module'], function (module) {
	'use strict';

	/**
	 * Renders list of user defined field templates
	 * @class docsFieldTemplateListWidget
	 * @memberOf app.docs.templates.fields
	 *
	 * @param neoTableParams {Function} Table configuration object
	 * @param CompositeFieldAPI {Object} API interface for server communication
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsFieldTemplateListWidget(neoTableParams, CompositeFieldAPI) {
		return {
			restrict: 'EA',
			templateUrl: '/app/docs/templates/fields/widgets/fieldTemplateList/docs-field-template-list.html',
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				// variables
				vm.fieldTemplatesTableOptions = new neoTableParams(CompositeFieldAPI);

				// methods
				vm.deleteFieldTemplate = deleteFieldTemplate;

				function deleteFieldTemplate(fieldTemplate) {
					CompositeFieldAPI.remove(fieldTemplate);
				}
			}
		};
	}

	module.directive('docsFieldTemplateListWidget', docsFieldTemplateListWidget);
});
