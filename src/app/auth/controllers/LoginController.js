define([
	'auth/module',
	'globalSettings'
], function (module, globalSettings) {
	'use strict';

	/**
	 * Description* @method LoginController
	 * @param {Object} $log
	 * @param {Object} ipCookie
	 * @param {Object} session
	 * @param {Object} UserAPI
	 * @param {Object} Profile
	 * @param {Object} $q
	 * @param {Object} $scope
	 * @param {Object} $modal
	 * @param {Object} $state
	 */
	function LoginController($q,
													 $scope,
													 $modal,
													 $state,
													 $log,
													 ipCookie,
													 session,
													 UserAPI,
													 Profile) {
		$scope.formError = false;
		$scope.user = {};
		$scope.loginData = globalSettings.get('LOGIN_DATA');

		/**
		 * Description
		 * @method loginAs
		 * @param {Object} loginData
		 */
		$scope.loginAs = function (loginData) {
			if (_.isEmpty(loginData)) {
				return;
			}

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

							session.setSession(customer, user.$metadata.token);
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
		 * @name ChooseCustomerModalController
		 * @description Modal controller
		 * @method ChooseCustomerModalController
		 * @param {Object} $modalInstance
		 * @param {Object} $modalInstance
		 * @param {Array} customers
		 * @param {Object} $scope
		 */
		var ChooseCustomerModalController = function ($scope, $modalInstance, customers) {
			$scope.customers = customers;
			$scope.selected = _.first(customers);

			/**
			 * Description
			 * @method setCustomer
			 * @param {Object} customer
			 */
			$scope.setCustomer = function (customer) {
				$scope.$selected = customer;
			};

			/**
			 * Description
			 * @method setSelected
			 */
			$scope.setSelected = function () {
				$modalInstance.close($scope.$selected);
			};

			/**
			 * Description
			 * @method cancel
			 */
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
				customerId = ipCookie('customerId'),
				customer = null;

			if (angular.isDefined(customerId)) {
				customer = Profile.$findById(customerId);
				$scope.setCustomer(customer);
				dfd.resolve(customer);

			} else if (customers.length > 1) {

				var modalInstance = $modal.open({
					templateUrl: 'src/app/auth/views/modals/chooseCustomerModal.html',
					controller: ChooseCustomerModalController,
					resolve: {
						/**
						 * Provides customers to modal
						 * @method customers
						 * @return customers
						 */
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
