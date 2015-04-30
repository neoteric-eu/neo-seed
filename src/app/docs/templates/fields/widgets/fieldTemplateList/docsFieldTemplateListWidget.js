define(['docs/templates/fields/module'], function (module) {
	'use strict';

	/**
	 * Renders list of user's documents
	 * @class docsFieldTemplateListWidget
	 * @memberOf app.docs.templates.fields
	 *
	 * @param neoTableParams {Function} Table configuration object.
	 * @param FieldTemplateAPI {Object} API interface for server communication.
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string,
	 *   controller: Function}}
	 */
	function docsFieldTemplateListWidget(neoTableParams, FieldTemplateAPI) {
		return {
			restrict: 'EA',
			templateUrl: '/app/docs/templates/fields/widgets/fieldTemplateList/docs-field-template-list.html',
			scope: true,
			controllerAs: 'vm',

			/**
			 * Widget business logic
			 * @method
			 * @memberOf app.docs.templates.fields.docsDocumentListWidget
			 */
			controller: function () {
				var vm = this;

				vm.fieldTemplatesTableOptions = fieldTemplatesTableOptions;

				var fieldTemplatesTableOptions = new neoTableParams(FieldTemplateAPI);
			}
		};
	}

	module.registerDirective('docsFieldTemplateListWidget', docsFieldTemplateListWidget);
});
