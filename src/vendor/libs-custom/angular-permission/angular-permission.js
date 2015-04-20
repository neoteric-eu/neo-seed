/**
 * angular-permission
 * Route permission and access control as simple as it can get
 * @version v0.1.6 - 2014-12-01
 * @link http://www.rafaelvidaurre.com
 * @author Rafael Vidaurre <narzerus@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
define([], function () {
	'use strict';

	angular.module('permission', ['ui.router'])
		.run(['$rootScope', 'Permission', '$state', '$urlRouter', '$log', function ($rootScope, Permission, $state, $urlRouter, $log) {
			$rootScope.$on('$stateChangeStart',
				function (event, toState, toParams, fromState, fromParams) {
					// If there are permissions set then prevent default and attempt to authorize
					var permissions;
					if (toState.data && toState.data.permissions) {
						permissions = toState.data.permissions;
					} else if (toState.permissions) {
						/**
						 * This way of defining permissions will be depracated in v1. Should use
						 * `data` key instead
						 */
						$log.info('Deprecation Warning: permissions should be set inside the `data` key ');
						$log.info('Setting permissions for a state outside `data` will be depracated in' +
						' version 1');
						permissions = toState.permissions;
					}

					if (permissions) {
						//@TODO how to fix this prev default?
						event.preventDefault();
						Permission.authorize(permissions, toParams).then(function () {
							// If authorized, use call state.go without triggering the event.
							// Then trigger $stateChangeSuccess manually to resume the rest of the process
							// Note: This is a pseudo-hacky fix which should be fixed in future ui-router versions
							$rootScope.$broadcast('$stateChangePermissionAccepted', toState, toParams);

							$state.go($state.get(toState), toParams, {notify: false}).then(function () {
								$rootScope
									.$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
							});
						}, function () {
							$rootScope.$broadcast('$stateChangePermissionDenied', toState, toParams);

							// If not authorized, redirect to wherever the route has defined, if defined at all
							var redirectTo = permissions.redirectTo;
							if (redirectTo) {
								$state.go($state.get(redirectTo), toParams, {notify: true}).then(function () {
									//$state.go($state.get(redirectTo), toParams, {notify: true});
									$rootScope
										.$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
								});
							}
						});
					}
				});
		}]);

	angular.module('permission')
		.provider('Permission', function () {
			var roleValidationConfig = {};
			var validateRoleDefinitionParams = function (roleName, validationFunction) {
				if (!angular.isString(roleName)) {
					throw new Error('Role name must be a string');
				}
				if (!angular.isFunction(validationFunction)) {
					throw new Error('Validation function not provided correctly');
				}
			};

			this.defineRole = function (roleName, validationFunction) {
				/**
				 This method is only available in config-time, and cannot access services, as they are
				 not yet injected anywere which makes this kinda useless.
				 Should remove if we cannot find a use for it.
				 **/
				validateRoleDefinitionParams(roleName, validationFunction);
				roleValidationConfig[roleName] = validationFunction;

				return this;
			};

			this.$get = ['$q', '$log', function ($q, $log) {

				var Permission = {
					features: [],
					_promiseify: function (value) {
						/**
						 Converts a value into a promise, if the value is truthy it resolves it, otherwise
						 it rejects it
						 **/
						if (value && angular.isFunction(value.then)) {
							return value;
						}

						var deferred = $q.defer();
						if (value) {
							deferred.resolve();
						} else {
							deferred.reject();
						}
						return deferred.promise;
					},
					_validateRoleMap: function (roleMap) {
						if (typeof(roleMap) !== 'object' || roleMap instanceof Array) {
							throw new Error('Role map has to be an object');
						}
						if (roleMap.only === undefined && roleMap.except === undefined) {
							throw new Error('Either "only" or "except" keys must me defined');
						}
						if (roleMap.only) {
							if (!(roleMap.only instanceof Array)) {
								throw new Error('Array of roles expected');
							}
						} else if (roleMap.except) {
							if (!(roleMap.except instanceof Array)) {
								throw new Error('Array of roles expected');
							}
						}
					},
					_findMatchingRole: function (rolesArray, toParams) {
						return $q.all(rolesArray.map(function (role) {
							var deferred = $q.defer();
							if (!angular.isFunction(Permission.roleValidations[role])) {
								throw new Error('undefined role or invalid role validation');
							}
							var validatingRole = Permission.roleValidations[role](toParams);
							validatingRole = Permission._promiseify(validatingRole);
							validatingRole.then(function () {
								deferred.resolve();
							}, function () {
								deferred.reject();
							});
							return deferred.promise;
						}));
					},
					defineRole: function (roleName, validationFunction) {
						/**
						 Service-available version of defineRole, the callback passed here lives in the
						 scope where it is defined and therefore can interact with other modules
						 **/
						validateRoleDefinitionParams(roleName, validationFunction);
						roleValidationConfig[roleName] = validationFunction;

						return Permission;
					},
					clearFeautres: function () {
						this.features = [];
					},
					setFeatures: function (features) {
						this.features = features;
					},
					appendFeature: function (feature) {
						if (!_.isArray(feature)) {
							feature = [feature];
						}
						this.features = this.features.concat(feature);
					},
					hasPermission: function (features) {
						if (!features) {
							return true;
						}
						if (!_.isArray(features)) {
							features = [features];
						}
						return _.all(features, function (feature) {
							return Permission.features.indexOf(feature) !== -1;
						});
					},
					resolveIfMatch: function (rolesArray, toParams) {
						var roles = angular.copy(rolesArray);
						var deferred = $q.defer();
						Permission._findMatchingRole(roles, toParams).then(function () {
							$log.debug('Resolve permission match: ' + roles);
							deferred.resolve();
						}, function () {
							// No match
							$log.debug('Resolve permission fail: ' + roles);
							deferred.reject();
						});
						return deferred.promise;
					},
					rejectIfMatch: function (roles, toParams) {
						var deferred = $q.defer();
						Permission._findMatchingRole(roles, toParams).then(function () {
							// Role found
							deferred.reject();
						}, function () {
							// Role not found
							deferred.resolve();
						});
						return deferred.promise;
					},
					roleValidations: roleValidationConfig,
					authorize: function (roleMap, toParams) {
						var deferred = $q.defer();
						// Validate input
						Permission._validateRoleMap(roleMap);

						var authorizing;

						if (roleMap.only) {
							authorizing = Permission.resolveIfMatch(roleMap.only, toParams);
						} else {
							authorizing = Permission.rejectIfMatch(roleMap.except, toParams);
						}

						authorizing
							.then(function () {
								var dfd = $q.defer();
								if (Permission.hasPermission(roleMap.feature)) {
									dfd.resolve();
								} else {
									dfd.reject();
								}
								return dfd.promise;
							})
							.then(function () {
								deferred.resolve();
							})
							.catch(function () {
								deferred.reject();
							});

						return deferred.promise;
					}
				};

				return Permission;
			}];
		});
});
