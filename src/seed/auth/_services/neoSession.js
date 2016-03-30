define(['seed/auth/module', 'angular', 'moment'], function (module, angular, moment) {
	'use strict';

	/**
	 * @param $log {Object} Logging service
	 * @param $cookies {Function} Cookie service
	 * @param Permission {Object} ACL service
	 * @param $q {Object} Angular promise provider
	 * @param neoRequestHeaders {Object} Request decorator
	 * @param UserAPI {Object} Interface for REST communication with server
	 * @param $rootScope {Object} Angular global scope helper
	 */
	var neoSession = function ($log, $cookies, Permission, $q, $rootScope, neoRequestHeaders, UserAPI) {

		$log = $log.getInstance('seed.auth.neoSession');
		$log.debug('Initiated service');

		this.setSession = setSession;
		this.clearSession = clearSession;
		this.checkSession = checkSession;

		function setSession(user, customer) {
			if (!angular.isDefined(user)) {
				throw new ReferenceError('Parameter "user" must be defined');
			}

			if (!angular.isDefined(customer)) {
				throw new ReferenceError('Parameter "customer" must be defined');
			}
			
			try {
				setAccessRights(customer);
				setCookieObjects(customer, user);
				setTimezone(user);
				setGlobalObjects(user, customer);
				setRequestHeaders(customer, user);

				$log.debug('Set new user session');
				return $q.resolve();

			} catch (err) {
				$log.error('Error setting up user session', err);
				return $q.reject(err);
			}
		}

		function setAccessRights(customer) {
			Permission.defineManyRoles(
				customer.featureKeys,
				function (stateParams, roleName) {
					return customer.$hasPermission(roleName);
				});
			$log.debug('Set access rights');
		}

		function setCookieObjects(customer, user) {
			$cookies.putObject('activeCustomer', customer.customerId);
			$cookies.putObject('token', user.$metadata.token);
			$log.debug('Set cookie objects');
		}

		function setTimezone(user) {
			if (user.timezone) {
				moment.tz.setDefault(user.timezone);
				$log.debug('Set timezone');
			}
		}

// @todo
		function setGlobalObjects(user, customer) {
			$rootScope.user = user;
			$rootScope.customer = customer;
			$log.debug('Set customer and user objects available globally');
		}

		function setRequestHeaders(customer, user) {
			neoRequestHeaders.setCustomerId(customer.customerId);
			neoRequestHeaders.setAuthToken(user.$metadata.token);
		}

		function clearSession() {
			try {
				clearCookieObject();
				clearAccessRights();
				clearGlobalObject();
				clearRequestHeaders();

				$log.debug('Cleared user session');
				return $q.resolve();

			} catch (err) {
				$log.error('Error clearing user session', err);
				return $q.reject(err);
			}
		}

		function clearCookieObject() {
			$cookies.remove('token');
			$cookies.remove('activeCustomer');
			$log.debug('Removed cookie objects');
		}

		function clearAccessRights() {
			Permission.roleValidations = _.pick(Permission.roleValidations, 'AUTHORIZED');
			$log.debug('Cleared access rights');
		}

		function clearGlobalObject() {
			$rootScope.user = undefined;
			$rootScope.customer = undefined;
			$log.debug('Removed global objects');
		}

		function clearRequestHeaders() {
			neoRequestHeaders.clearHeaders();
		}

		function checkSession() {
			var self = this,
				token = $cookies.getObject('token'),
				activeCustomer = $cookies.getObject('activeCustomer');

			if (token && activeCustomer) {
				neoRequestHeaders.setAuthToken(token);

				UserAPI

					.authInfo()
					.then(function (user) {
						// When reload page set session again
						if (!($rootScope.user && $rootScope.customer)) {
							var customer = _.findWhere(user.customers, {customerId: activeCustomer});
							self.setSession(user, customer)
								.then(function () {
									$q.resolve();
								});
						} else {
							// Or pass it
							$q.resolve();
						}

						$log.debug('Successfully checked if user user session is still valid');

					})
					.catch(function (e) {
						self
							.clearSession()
							.finally(function () {
								$q.reject(e);
							});

						$log.error('Error while checking user session', e);
					});
			} else {
				$log.debug('User does not have set in cookie either token or activeCustomer');

				Q.reject();
			}

			return $q.promise;
		}
	};

	module.service('neoSession', neoSession);
});
