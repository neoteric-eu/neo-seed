define(['auth/module'], function (module) {
	'use strict';

	/**
	 * Description* @method ActivationController
	 * @param $scope
	 * @param $location
	 * @param $modal
	 * @param $rootScope
	 * @param session
	 * @param smRegistrationService
	 * @param appMessages
	 * @param SM_REGISTRATION_PATH
	 * @param gettextCatalog
	 * @return {*|string}
	 */
	var ActivationController = function ($scope,
																			 $location,
																			 $modal,
																			 $rootScope,
																			 session,
																			 smRegistrationService,
																			 appMessages,
																			 SM_REGISTRATION_PATH,
																			 gettextCatalog) {
		$scope.spinner = false;
		$scope.formError = false;

		var searchObject = $location.search();

		if (!searchObject.activationtoken || !searchObject.accountId) {
			return $location.url('/login');
		}

		$scope.user = {
			activationToken: searchObject.activationtoken,
			accountId: searchObject.accountId,
			customerType: 'ORGANIZATION',
			showMyName: true
		};

		/**
		 * Description
		 * @method openTerms
		 */
		$scope.openTerms = function () {
			var modalInstance = $modal.open({
				templateUrl: SM_REGISTRATION_PATH + '/views/terms.html'
			});

			modalInstance.result.then(function () {
				$scope.user.acceptTermsOfService = true;
			}, function () {
				$scope.user.acceptTermsOfService = false;
			});
		};

		/**
		 * Description
		 * @method isRegisterDisabled LogicalExpression
		 */
		$scope.isRegisterDisabled = function () {
			return $scope.form.$invalid || $scope.spinner;
		};

		/**
		 * Description
		 * @method activate
		 */
		$scope.activate = function () {
			$scope.master = angular.copy($scope.user);
			if ($scope.spinner) {
				return;
			}

			$scope.spinner = true;

			smRegistrationService
				.activate($scope.master)
				.then(function (data) {
					$scope.spinner = false;
					$scope.submited = true;
					appMessages.set('success', gettextCatalog.getString('Your account has been successfully activated.'));
					session.setSession(data.user.customers[0].customerId);
				}, function (why) {
					$scope.spinner = false;
					$scope.submited = false;
					$scope.formError = true;
					switch (why.status) {
						case 404:
							$scope.error = gettextCatalog.getString('Activation token or account unknown.');
							break;
						case 409:
							$scope.error = gettextCatalog.getString('Account already activated.');
							break;
						default:
							$scope.error = gettextCatalog.getString('Server error. Please try again.');
							break;
					}
				});
		};
	};

	module.registerController('ActivationController', ActivationController);
});

