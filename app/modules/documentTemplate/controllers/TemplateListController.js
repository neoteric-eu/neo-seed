/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var TemplateListController = function($scope, $filter, $modal, $location, documentTemplateService, documentTemplateModulePath, ngTableParams) {

			$scope.ngTableBuilder = function(data) {
				return new ngTableParams({
					page: 1,
					count: 10,
					// sorting: {
					// 	'document.': 'desc' //FIXME
					// }
				}, {
					total: data.length,
					getData: function($defer, params) {
						var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
					}
				});
			};

			$scope.getTemplates = function() {
				//$System.showLoader();
				documentTemplateService.getTemplates().then(
					//console.log($scope.docs)
					function() {
						//$System.hideLoader();
						$scope.documentTemplates = documentTemplateService.documentTemplates.getModel();
						$scope.templatesTable = $scope.ngTableBuilder($scope.documentTemplates);
					}, function() {	//reason
						// $System.hideLoader();
						// $System.$appMessages.error($System.$locale.getT('Operation_failed'));
						// $System.$exceptionHandler(reason);
					}

				);
			};

			$scope.createDoc = function() {
				$location.url('/template/create');
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
				//$System.showLoader();
				documentTemplateService.removeTemplate(template).then(
					function() {
						//$System.hideLoader();						
						$scope.templatesTable.reload();
						// $System.$appMessages.success($System.$locale.getT('Operation_succeeded'));
					}, function() {	//reason
						// $System.$appMessages.error($System.$locale.getT('Operation_failed'));
						// $System.$exceptionHandler(reason);
					}
				);
			};



		};

		return ['$scope', '$filter', '$modal', '$location', 'documentTemplateService', 'documentTemplateModulePath', 'ngTableParams', TemplateListController, ];
	});
}());
