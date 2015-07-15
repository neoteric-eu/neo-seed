define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Renders list of available document templates and handles its selection
	 * @class docsDocumentTemplateSelect
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param DocumentTemplateAPI {Object} API interface for server communication
	 * @param gettextCatalog {Object} Translation catalog provider
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function docsDocumentTemplateSelect($log, DocumentTemplateAPI, gettextCatalog) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'app/docs/documents/_directives/docsDocumentTemplateSelect/docsDocumentTemplateSelect.html',
			controllerAs: 'vm',
			scope: {
				document: '='
			},

			controller: function ($scope) {
				var vm = this;

				// variables
				vm.documentTemplates = undefined;

				// functions
				vm.init = init;
				vm.selectDocumentTemplate = selectDocumentTemplate;

				init();

				/**
				 * @method init
				 */
				function init() {
					DocumentTemplateAPI
						.fetch()
						.then(function (collection) {
							vm.documentTemplates = collection;
						});

					$log.debug('Initiated controller');
				}


				/**
				 * @method selectDocumentTemplate
				 * @param template {Object} property
				 */
				function selectDocumentTemplate(template) {
					$log.debug('Opened template selection confirmation modal');

					// Display confirmation dialog
					$.SmartMessageBox({
						title: '<i class="fa fa-warning txt-color-yellow"></i> ' +
						gettextCatalog.getString('Warning'),
						content: gettextCatalog.getString('You are changing the template that document is based on. All previously created fields will be removed. Do you wish to continue?'),
						buttons: '[' +
						gettextCatalog.getString('No') +
						'][' +
						gettextCatalog.getString('Yes') +
						']'
					}, function (choice) {
						if (choice === gettextCatalog.getString('Yes')) {
							$log.debug('Changed document ' +
								$scope.document.id +
								' template to: ' +
								template.id);

							$scope.document.composite.$clear();

							_.each(template.composite, function (item) {
								// Remove $position to be able to add item from another to collection
								item.$position = undefined;

								$scope.document.templateId = template;

								// Magical way to solve problem with rendering
								// QA: DON'T ASK WHY
								setTimeout(function () {
									$scope.document.composite.$add(item);
								}, 100);
							});
						}
					});
				}
			}
		};
	}

	module.directive('docsDocumentTemplateSelect', docsDocumentTemplateSelect);
});
