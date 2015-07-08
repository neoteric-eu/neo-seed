/**
 * Created by michu on 08.07.15.
 */
define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class docsShareModal
	 * @memberOf app.docs.templates.documents
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, controllerAs: string, controller: Function}}
	 */
	function docsShareModal($log, PermissionTypesEnum, DocumentSharingAPI) {
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			templateUrl: 'app/docs/_directives/docsShareModal/docs-share-modal.html',
			controllerAs: 'vm',
			controller: function ($scope) {
				var vm = this;

				// variables
				vm.sharePrivileges = PermissionTypesEnum;
				vm.documentSharing = DocumentSharingAPI.build({id: $scope.documentId});
				vm.privilegeDisableCase = true;


				// functions
				vm.closeModal = closeModal;
				vm.choosePrivilege = choosePrivilege;
				vm.shareToUser = shareToUser;

				function choosePrivilege(privilege) {
					vm.documentSharing.privileges = privilege;
					vm.privilegeDisableCase = false;
				}

				function shareToUser() {
					DocumentSharingAPI
						.share(vm.documentSharing)
						.then(function(){
							$scope.$parent.modalInstance.dismiss();
						});
				}

				function closeModal() {
					$scope.$parent.modalInstance.dismiss();
					$log.debug('Closed share modal');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('docsShareModal', docsShareModal);
});
