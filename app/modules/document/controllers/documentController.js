/*jshint newcap: false */
(function() {
	'use strict';
	define([], function(){

		var documentController = function($scope, $filter, $modal, documentService, documentModulePath, ngTableParams) {

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
						console.log('ssas', params);
						var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
						console.log('ssas', orderedData);
					}
				});
			};


			$scope.getDocs = function(){
				//$System.showLoader();
				documentService.getDocuments().then(
					//console.log($scope.docs)
					function(){
						//$System.hideLoader();
						$scope.docs = documentService.docs.getModel();	//$scope.docs = data;
//						 console.log('aaa', $scope.docs);
						$scope.docsTable = $scope.ngTableBuilder($scope.docs);
					}, function(){	//reason
						// $System.hideLoader();
						// $System.$appMessages.error($System.$locale.getT('Operation_failed'));
						// $System.$exceptionHandler(reason);
					}

				);


			};

/*			$scope.editDocument = function(doc){

			};*/

			$scope.removeModal = function(doc){
				var modalScope = $scope.$new();
				modalScope.doc = doc;
				console.log('doc do modala', doc);
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

		return ['$scope', '$filter', '$modal','documentService', 'documentModulePath', 'ngTableParams', documentController, ];
	});
}());
