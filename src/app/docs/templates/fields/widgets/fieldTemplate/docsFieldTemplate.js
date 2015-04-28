define(['docs/templates/fields/module'], function (module) {
	'use strict';

	/**
	 * Renders list of user's documents
	 * @class docsFieldTemplateWidget
	 * @memberOf app.docs.templates.fields
	 *
	 * @return {{restrict: string, templateUrl: string}}
	 */
	function docsFieldTemplateWidget(DocumentFieldTypesEnum, cfg, $log, FieldTemplateAPI) {
		return {
			restrict: 'EA',
			templateUrl: cfg.MODULE_PATH + '/widgets/fieldTemplate/docs-field-template.html',
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				vm.fieldTemplate = FieldTemplateAPI.build();
				vm.fieldGroups = _.groupBy(DocumentFieldTypesEnum, 'group');
				vm.addField = addField;

				function addField(field){
					vm.fieldTemplate.composite.$add(field.class.$build());
					console.log(vm.fieldTemplate);
					$log.debug('Added new field to form');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.registerDirective('docsFieldTemplateWidget', docsFieldTemplateWidget);

});
