(function() {
	'use strict';
	define([], function(){

		var PreviewModalController = function($scope, $modalInstance, documentService, documentModulePath, previewDocument, previewVersion) {

			$scope.disablePrevLink = false;
			$scope.disableNextLink = false;

			$scope.previewDocument = previewDocument;
			$scope.previewVersion = previewVersion;

			$scope.initModal = function() {
				var version = $scope.previewVersion.version;
				var array = $scope.previewDocument.versions;
				if (version === 1) {
					$scope.disablePrevLink = true;
				}
				if (version === array.length) {
					$scope.disableNextLink = true;
				}
				documentService.getDocumentById($scope.previewDocument.id, version).then(function() {
					$scope.previewDocument = documentService.previewDocument.getModel();
				}, function() { // reason
					// $exceptionHandler(reason);
				});
			};

			$scope.switchVersion = function(previewDocument, i) {
				var array = $scope.previewDocument.versions;
				console.log(array);
				$scope.activeVersion = $scope.previewDocument.version;
				documentService.getDocumentById($scope.previewDocument.id, $scope.activeVersion+i).then(function() {
					console.log('pobiera');
					$scope.previewDocument = documentService.previewDocument.getModel();
				}, function() { // reason
					// $exceptionHandler(reason);
				});
				$scope.activeVersion = $scope.activeVersion + i;
				$scope.disablePrevLink = false;
				$scope.disableNextLink = false;
				if ($scope.activeVersion === 1) {
					$scope.disablePrevLink = true;
				}
				if ($scope.activeVersion === array.length) {
					$scope.disableNextLink = true;
				}
				
			};

			$scope.restoreDocumentVersion = function(previewDocument, previewVersion) {

				documentService.restoreDocumentVersion(previewDocument.id, previewVersion.version).then(function() {
					$scope.previewDocument = documentService.previewDocument.getModel();
					$modalInstance.close($scope.previewDocument);
				}, function() { // reason
					// $exceptionHandler(reason);
				});
			};


		};

		return ['$scope', '$modalInstance', 'documentService', 'documentModulePath', 'previewDocument', 'previewVersion', PreviewModalController];
	});
}());
