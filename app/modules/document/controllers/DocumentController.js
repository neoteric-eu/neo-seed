(function() {
	'use strict';
	define([], function(){

		var DocumentController = function($scope, $filter, $modal, $location,
			system, appMessages, locale, documentService, documentModulePath,
			ngTableParams, permissions, enums) {



			$scope.$watch('tableFilter', function () {
				if (angular.isDefined($scope.docsTable)) {
					$scope.docsTable.reload();
					$scope.docsTable.page(1);
				}
			});

			/*jshint newcap: false */
			$scope.ngTableBuilder = function(data) {
				return new ngTableParams({
					page: 1,
					count: 10,
					sorting: {
						'versions[0].timestamp': 'desc'
					}
				}, {
					total: data.length,
					getData: function($defer, params) {
						var filteredData = $filter('filter')(data, $scope.tableFilter);
						var orderedData = params.sorting() ?
												$filter('orderBy')(filteredData, params.orderBy()) :
												filteredData;
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
				if (permissions.checkMenuAccess(enums.ND_DOC_UPDATE)) {
					$location.url('/document/edit/' + document.id);
				}
			};


		};

		return ['$scope', '$filter', '$modal', '$location', 'system',
		'appMessages', 'locale', 'documentService', 'documentModulePath',
		'ngTableParams', 'permissions', 'enums', DocumentController, ];

	});
}());
