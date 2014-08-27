(function() {
	/* global define */
	'use strict';
	define([], function() {
		var ActivationController = function(
			$scope,
			$location,
			$modal,
			$rootScope,
			session,
			smRegistrationService,
			appMessages,
			SM_REGISTRATION_PATH,
			gettextCatalog
		) {
			$scope.spinner = false;
			$scope.formError = false;

			var searchObject = $location.search();

			if(!searchObject.activationtoken || !searchObject.accountId) {
				return $location.url('/login');
			}

			$scope.user = {
				activationToken: searchObject.activationtoken,
				accountId: searchObject.accountId,
				customerType: 'ORGANIZATION',
				showMyName: true
			};

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

			$scope.isRegisterDisabled = function() {
				return $scope.form.$invalid || $scope.spinner;
			};

			$scope.activate = function() {
				$scope.master = angular.copy($scope.user);
				if($scope.spinner) {
					return;
				}

				$scope.spinner = true;

				smRegistrationService.activate($scope.master).then(function(data) {
					$scope.spinner = false;
					$scope.submited = true;
					appMessages.set('success', gettextCatalog.getString('Your account has been successfully activated.'));
					session.userData.setModel(data);
					session.setSession(data.user.customers[0].customerId);
					$rootScope.checkSession();
				}, function(why) {
					$scope.spinner = false;
					$scope.submited = false;
					$scope.formError = true;
					switch(why.status) {
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

		return [
			'$scope',
			'$location',
			'$modal',
			'$rootScope',
			'session',
			'smRegistrationService',
			'appMessages',
			'SM_REGISTRATION_PATH',
			'gettextCatalog',
			ActivationController];
	});
}());
