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
	function docsFieldTemplateListWidget(neoTableParams, FieldTemplateAPI, fieldsConf) {
		return {
			restrict: 'EA',
			templateUrl: fieldsConf.MODULE_PATH + '/widgets/fieldTemplateList/docs-field-template-list.html',
			controllerAs: 'vm',

			/**
			 * Widget business logic
			 * @method
			 * @memberOf app.docs.templates.fields.docsDocumentListWidget
			 */
			controller: function () {
				var vm = this;

				vm.fieldTemplatesTableOptions = new neoTableParams(FieldTemplateAPI);
			}
		};
	}

	module.directive('docsFieldTemplateListWidget', docsFieldTemplateListWidget);
});
