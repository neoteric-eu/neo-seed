define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor LoginController
	 * @memberOf app.auth
	 *
	 * @param $q
	 * @param $scope
	 * @param $modal
	 * @param $state
	 * @param $log
	 * @param neoSession
	 * @param UserAPI
	 * @param ipCookie
	 * @param appConf
	 */
	function LoginController($q, $scope, $modal, $state, $log, neoSession,
		UserAPI, ipCookie, appConf) {
		$scope.formError = false;
		$scope.user = UserAPI.build();
		$scope.loginData = appConf.environmentSettings.predefinedLogins;

		/**
		 * Description
		 * @method loginAs
		 * @param {Object} loginData
		 */
		$scope.loginAs = function (loginData) {
			$scope.user = loginData;
			$scope.login();
		};

		/**
		 * @name Login
		 * @description Authenticate user on the server.
		 * @method login
		 */
		$scope.login = function () {
			$scope.spinner = true;
			$scope.formErrorCode = false;

			$log.debug('Login start');

			UserAPI
				.login($scope.user)
				.then(function (user) {
					$log.debug('login on_Success', 'start select customer');

					$scope
						.selectCustomerList(user.customers)
						.then(function (customer) {
							$log.debug('login on_Success', 'end select customer');

							neoSession.setSession(customer, ipCookie('token'));
							$state.go('app.dashboard');
						})
						.catch(function (response) {
							$log.error('login on_Success', 'error select customer', response);
						});
				})
				.catch(function (response) {

					if (response.data && response.data.cause) {
						$scope.formErrorCode = response.data.cause;
					}
					$scope.formError = true;
				})
				.finally(function () {
					$scope.spinner = false;
				});
		};

		/**
		 * Modal controller
		 * @method
		 * @memberOf app.auth.LoginController
		 *
		 * @param {Object} $modalInstance
		 * @param {Object} $modalInstance
		 * @param {Array} customers
		 * @param {Object} $scope
		 */
		var ChooseCustomerModalController = function ($scope, $modalInstance, customers) {
			$scope.customers = customers;
			$scope.selected = _.first(customers);

			$scope.setCustomer = function (customer) {
				$scope.$selected = customer;
			};

			$scope.selectCustomer = function () {
				$modalInstance.close($scope.$selected);
			};

			$scope.cancel = function () {
				$modalInstance.dismiss();
			};
		};

		/**
		 * Display bootstrap modal with profile options
		 * @method selectCustomerList
		 * @param {Object} customers
		 */
		$scope.selectCustomerList = function (customers) {
			var dfd = $q.defer(),
				customerId = ipCookie('activeCustomer');

			if (!_.isUndefined(customerId)) {
				var customer = _.where(customers, {id: customerId});
				dfd.resolve(customer);

			} else if (customers.length > 1) {
				var modalInstance = $modal.open({
					templateUrl: 'seed/auth/views/modals/chooseCustomerModal.html',
					controller: ChooseCustomerModalController,
					resolve: {
						customers: function () {
							return customers;
						}
					}
				});

				modalInstance.result.then(function (selectedCustomer) {
					dfd.resolve(selectedCustomer);
				});

			} else {
				dfd.resolve(_.first(customers));
			}

			return dfd.promise;
		};
	}

	module.registerController('LoginController', LoginController);
});
