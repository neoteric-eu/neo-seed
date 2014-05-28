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



		};

		return ['$scope', '$filter', '$modal', '$location', 'documentTemplateService', 'documentTemplateModulePath', 'ngTableParams', TemplateListController, ];
	});
}());
