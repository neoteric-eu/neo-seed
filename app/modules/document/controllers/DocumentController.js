(function() {
	'use strict';
	define([], function(){

		var DocumentController = function($scope, $filter, $modal, $location, documentService, documentModulePath, ngTableParams) {

			/*jshint newcap: false */
			$scope.ngTableBuilder = function(data) {
				return new ngTableParams({
					page: 1,
					count: 10,
					sorting: {
						'timestamp': 'desc' //FIXME
					}
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

					function(){
						//$System.hideLoader();
						$scope.documents = documentService.documents.getModel();
						console.log($scope.documents.length);
						$scope.docsTable = $scope.ngTableBuilder($scope.documents);
					}, function(){	//reason
						// $System.hideLoader();
						// $System.$appMessages.error($System.$locale.getT('Operation_failed'));
						// $System.$exceptionHandler(reason);
					}

				);


			};

			$scope.removeDocumentModal = function(document){
				var modalScope = $scope.$new();
				modalScope.document = document;
				var modalInstance = $modal.open({
					templateUrl: documentModulePath + 'views/modals/removeDocModal.html',
					scope: modalScope
				});
				modalInstance.result.then(function () {
						$scope.removeDocument(document);
				});
			};

			$scope.removeDocument = function(document) {
				//$System.showLoader();
				documentService.removeDocument(document).then(
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

			$scope.updateDocumentToNewestTemplateModal = function() {
				var modalScope = $scope.$new();
				modalScope.document = document;
				var modalInstance = $modal.open({
					templateUrl: documentModulePath + 'views/modals/removeDocModal.html',
					scope: modalScope
				});
				modalInstance.result.then(function () {
						$scope.updateDocumentToNewestTemplate(document);
				});
			};

			$scope.updateDocumentToNewestTemplate = function(document) {
				console.log('open modal', document);
			};


			$scope.editDocument = function(document) {
				$location.url('/document/edit/' + document.id);
			};


		};

		return ['$scope', '$filter', '$modal', '$location', 'documentService', 'documentModulePath', 'ngTableParams', DocumentController, ];
	});
}());
