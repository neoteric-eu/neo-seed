(function() {
	'use strict';
	define([], function(){

		var PreviewModalController = function($scope, $modalInstance, documentService, documentModulePath, previewDocument, previewVersion) {

			$scope.disablePrevLink = false;
			$scope.disableNextLink = false;
			$scope.previewDocument = previewDocument;
			$scope.previewVersion = previewVersion;
			console.log('modal');
			console.log(previewDocument);
			console.log(previewVersion);

			$scope.switchVersion = function(previewDocument, previewVersion, i) {
				console.log(previewDocument, previewVersion, i);
				var array = previewDocument.versions;
				console.log(array);
				console.log(previewVersion);
				// var disablePrevLink = false;
				// var disableNextLink = false;
				var version = previewVersion.version+i;
				//var n =_.indexOf(array, previewVersion);

				console.log(version);
				documentService.getDocumentById(previewDocument.id, version).then(function() {

					previewDocument = documentService.previewDocument.getModel();
					//$scope.document = angular.copy($scope.previewDocument);
					//console.log('scope.form po editTemplate', $scope.form);
				}, function() { // reason
					// $exceptionHandler(reason);
				});
				
			};

			$scope.restoreDocumentVersion = function(previewDocument, previewVersion) {

				documentService.restoreDocumentVersion(previewDocument.id, previewVersion.version).then(function() {

					$scope.previewDocument = documentService.previewDocument.getModel();
					$scope.document = angular.copy($scope.previewDocument);
					//console.log('scope.form po editTemplate', $scope.form);
					$modalInstance.close(previewDocument);
				}, function() { // reason
					// $exceptionHandler(reason);
				});
			};





		};

		return ['$scope', '$modalInstance', 'documentService', 'documentModulePath', 'previewDocument', 'previewVersion', PreviewModalController];
	});
}());
