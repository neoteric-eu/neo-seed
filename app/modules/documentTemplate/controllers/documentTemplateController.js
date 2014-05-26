/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var documentTemplateController = function($scope, $filter, $modal, $location, documentTemplateService, documentTemplateModulePath, ngTableParams) {

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
					function(){
						//$System.hideLoader();
						$scope.documentTemplates = documentTemplateService.documentTemplates.getModel();
						$scope.templatesTable = $scope.ngTableBuilder($scope.documentTemplates);
						console.log('kontroler', $scope.documentTemplates);
						console.log('table', $scope.templatesTable);
					}, function(){	//reason
						// $System.hideLoader();
						// $System.$appMessages.error($System.$locale.getT('Operation_failed'));
						// $System.$exceptionHandler(reason);
					}

				);
			};

			$scope.initTemplate = function() {
				console.log('asdsad');
				if($location.path() === '/template/create') {
					$scope.editMode = 0;
				}else{
					$scope.editMode = 1;
				}
				console.log($scope.editMode);
			};

			$scope.createDoc = function() {
				$location.url('/template/create');
			};




		};

		return ['$scope', '$filter', '$modal', '$location', 'documentTemplateService', 'documentTemplateModulePath', 'ngTableParams', documentTemplateController, ];
	});
}());
