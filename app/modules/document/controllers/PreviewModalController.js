(function() {
	'use strict';
	define([], function(){

		var PreviewModalController = function($scope, $modalInstance, documentService, documentModulePath, previewDocument, previewVersion) {

			$scope.disablePrevLink = false;
			$scope.disableNextLink = false;

			// console.log('modal');
			// console.log(previewDocument);
			// console.log(previewVersion);
			$scope.previewDocument = previewDocument;
			$scope.previewVersion = previewVersion;

			$scope.initModal = function() {
				// console.log('init', $scope.previewDocument, '&&&&&', $scope.previewVersion);
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
				console.log(i, 'version', $scope.activeVersion);
				//console.log('version1', $scope.activeVersion);
				documentService.getDocumentById($scope.previewDocument.id, $scope.activeVersion+i).then(function() {
					console.log('pobiera');
					$scope.previewDocument = documentService.previewDocument.getModel();
				}, function() { // reason
					// $exceptionHandler(reason);
				});
				$scope.activeVersion = $scope.activeVersion + i;
				//console.log('version2', $scope.activeVersion);
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
					//$scope.document = angular.copy($scope.previewDocument);
					//console.log('scope.form po editTemplate', $scope.form);
					$modalInstance.close($scope.previewDocument);
				}, function() { // reason
					// $exceptionHandler(reason);
				});
			};





		};

		return ['$scope', '$modalInstance', 'documentService', 'documentModulePath', 'previewDocument', 'previewVersion', PreviewModalController];
	});
}());
