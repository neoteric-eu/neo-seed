(function() {
	'use strict';
	define([], function(){

		var DocumentController = function($scope, $filter, $modal, $location, documentService, documentModulePath, ngTableParams) {

			/*jshint newcap: false */
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

			$scope.getDocuments = function(){
				//$System.showLoader();
				documentService.getDocuments().then(
					//console.log($scope.docs)
					function(){
						//$System.hideLoader();
						$scope.docs = documentService.documents.getModel();
						$scope.docsTable = $scope.ngTableBuilder($scope.docs);
					}, function(){	//reason
						// $System.hideLoader();
						// $System.$appMessages.error($System.$locale.getT('Operation_failed'));
						// $System.$exceptionHandler(reason);
					}

				);


			};

			$scope.removeModal = function(doc){
				var modalScope = $scope.$new();
				modalScope.doc = doc;
				var modalInstance = $modal.open({
					templateUrl: documentModulePath + 'views/modals/removeDocModal.html',
					scope: modalScope
				});
				modalInstance.result.then(function () {
						$scope.removeDocument(doc);
				});
			};

			$scope.removeDocument = function(doc) {
				//$System.showLoader();
				documentService.removeDocument(doc).then(
					function() {
						//$System.hideLoader();
						$scope.docsTable.reload();
						// $System.$appMessages.success($System.$locale.getT('Operation_succeeded'));
					}, function() {	//reason
						// $System.$appMessages.error($System.$locale.getT('Operation_failed'));
						// $System.$exceptionHandler(reason);
					}
				);
			};





		};

		return ['$scope', '$filter', '$modal', '$location', 'documentService', 'documentModulePath', 'ngTableParams', DocumentController, ];
	});
}());
