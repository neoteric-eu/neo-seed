(function() {
	/* global define */
	'use strict';
	define([], function() {
		var RegisterController = function(
			$rootScope,
			$scope,
			$cookies,
			session,
			smRegistrationService,
			gettextCatalog
		) {
			$scope.user = {
				reflink: $cookies.referralId,
				language: angular.uppercase(session.getLocale())
			};
			$scope.master = {};
			$scope.spinner = false;
			$scope.submitted = false;
			$scope.afoot = true;
			$scope.formError = false;

			$scope.$watch('user.language', function(newLang, oldLang) {
				if(newLang !== oldLang) {
					$rootScope.switchLang(newLang);
				}
			}, true);

			$scope.checkPassword = function () {
				this.form.passwordConfirm.$setValidity('dontMatch', $scope.user.password === $scope.user.passwordConfirm);
			};

			$scope.isRegisterDisabled = function() {
				return this.form.$invalid || $scope.spinner;
			};

			$scope.register = function() {
				$scope.master = angular.copy($scope.user);
				delete $scope.master.passwordConfirm;
				if($scope.spinner) {
					return;
				}

				$scope.spinner = true;

				smRegistrationService.register($scope.master).then(function() {
					$scope.spinner = false;
					$scope.submitted = true;
					delete $cookies.referralId;
				}, function(why) {
					$scope.spinner = false;
					$scope.formError = true;
					if(why.data && why.data.message) {
						$scope.error = why.data.message;
					} else {
						$scope.error = gettextCatalog.getString('Server error. Please try again.');
					}
				});
			};
		};

		return [
			'$rootScope',
			'$scope',
			'$cookies',
			'session',
			'smRegistrationService',
			'gettextCatalog',
			RegisterController
		];
	});
}());
