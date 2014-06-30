(function() {
	'use strict';
	define([], function(){

		var PreviewModalController = function($scope, $modalInstance, documentService, documentModulePath, activeDocument, previewVersion) {

			$scope.disablePrevLink = false;
			$scope.disableNextLink = false;
			$scope.readyToShow = false;

			$scope.previewVersion = previewVersion;


			$scope.initModal = function() {
				var version = previewVersion.version;
				var array = activeDocument.versions;
				if (version === 1) {
					$scope.disablePrevLink = true;
				}
				if (version === array.length) {
					$scope.disableNextLink = true;
				}

				$scope.getDocumentById(activeDocument.id, version, function(data) {
					$scope.readyToShow = true;
					documentService.previewDocument.setModel(data);
					$scope.previewDocument = documentService.previewDocument.getModel();
				});
			};

			/**
			 *	@name getDocumentById
			 *
			 *	@param {string} documentId
			 *	@param {number} version
			 *	@param {object|function} successCallback
			 *
			 *	@description
			 *	Get document by id and version. Version is optional.
			 *	On success set model into service, and add it to the $scope.
			 */
			$scope.getDocumentById = function(documentId, version, successCallback) {
				documentService.getDocumentById(documentId, version)
					.then(successCallback);

			};


			$scope.switchVersion = function(previewDocument, i) {
				var array = previewDocument.versions;
				$scope.activeVersion = previewDocument.version;

				$scope.getDocumentById(previewDocument.id, $scope.activeVersion+i, function(data) {
					documentService.previewDocument.setModel(data);
					$scope.previewDocument = documentService.previewDocument.getModel();
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

			$scope.restoreDocumentVersion = function(previewDocument) {
				$scope.showSpinner = true;
				documentService.restoreDocumentVersion(previewDocument.id, previewDocument.version).then(
					function(data) {
						console.log('aa');
						documentService.previewDocument.setModel(data);
						documentService.activeDocument.setModel(data);

						$modalInstance.close(data);
					}
				).finally(function() {
					$scope.showSpinner = false;
				});
			};

		};

		return ['$scope', '$modalInstance', 'documentService', 'documentModulePath', 'activeDocument', 'previewVersion', PreviewModalController];
	});
}());
