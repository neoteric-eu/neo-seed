/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var TemplateListController = function($scope, $filter, $modal, $location,
			system, locale, appMessages, documentTemplateService,
			documentTemplateModulePath, ngTableParams) {

			$scope.ngTableBuilder = function(data) {
				return new ngTableParams({
					page: 1,
					count: 10,
					sorting: {
						timestamp: 'desc'
					}
				}, {
					total: data.length,
					getData: function($defer, params) {
						var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
					}
				});
			};

			$scope.getTemplates = function() {
				system.showLoader();

				documentTemplateService.getTemplates().then(
					function() {
						$scope.documentTemplates = documentTemplateService.documentTemplates.getModel();
						$scope.templatesTable = $scope.ngTableBuilder($scope.documentTemplates);
					}, function() {
						appMessages.error(locale.getT('Operation_failed'));
						// system.$exceptionHandler(reason);
					}

				).finally(function() {
					system.hideLoader();
				});
			};

			$scope.refreshTemplatesList = function() {
				$scope.documentTemplates = documentTemplateService.documentTemplates.getModel();
			};

			$scope.createDoc = function() {
				$location.url('/document/create');
			};

/*			$scope.createTemplate = function() {
				$location.url('/template/create');
			};*/

			$scope.editTemplate = function(template) {
				$location.url('/template/edit/' + template.id);
			};

			$scope.removeTemplateModal = function(template) {
				var modalScope = $scope.$new();
				modalScope.template = template;

				var modalInstance = $modal.open({
					templateUrl: documentTemplateModulePath + 'views/modals/removeTemplateModal.html',
					scope: modalScope
				});
				modalInstance.result.then(function () {
					$scope.removeTemplate(template);
				});
			};

			$scope.removeTemplate = function(template) {
				system.showLoader();
				documentTemplateService.removeTemplate(template).then(
					function() {
						$scope.templatesTable.reload();
						appMessages.success(locale.getT('Operation_succeeded'));
					}, function() {
						appMessages.error(locale.getT('Operation_failed'));
					}
				).finally(function() {
					system.hideLoader();
				});
			};



		};

		return ['$scope', '$filter', '$modal', '$location', 'system', 'locale',
		'appMessages', 'documentTemplateService', 'documentTemplateModulePath',
		'ngTableParams', TemplateListController, ];
	});
}());
