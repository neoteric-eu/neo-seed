(function() {
	'use strict';
	define([], function(){

		var DocumentController = function($scope, $filter, $modal, $location,
			system, appMessages, locale, documentService, documentModulePath,
			ngTableParams) {

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
				system.showLoader();
				documentService.getDocuments().then(

					function(){
						$scope.documents = documentService.documents.getModel();
						$scope.docsTable = $scope.ngTableBuilder($scope.documents);

					}, function(){

						appMessages.error(locale.getT('Operation_failed'));
					}

				).finally(function() {
					system.hideLoader();
				});


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
				system.showLoader();
				documentService.removeDocument(document).then(
					function() {
						system.hideLoader();

						$scope.docsTable.reload();
						appMessages.success(locale.getT('Operation_succeeded'));
					}, function() {
						appMessages.error(locale.getT('Operation_failed'));
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

		return ['$scope', '$filter', '$modal', '$location', 'system',
		'appMessages', 'locale', 'documentService', 'documentModulePath',
		'ngTableParams', DocumentController, ];
	});
}());
