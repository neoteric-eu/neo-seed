define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Manges application access control
	 * @class neoPermission
	 * @memberOf seed.auth
	 *
	 * @param $log {Object}
	 * @param $rootScope {Object}
	 * @param authConf {seed.auth.authConf}
	 * @param PermissionStore {permission.PermissionStore}
	 * @param RoleStore {permission.RoleStore}
	 */
	function neoPermission($log, $rootScope,
												 authConf, PermissionStore, RoleStore) {

		$log = $log.getInstance('seed.auth.neoPermission');
		$log.debug('Initiated service');

		var permissions = [];
		var roles = [];

		this.setPermissions = setPermissions;
		this.setRoles = setRoles;
		this.clear = clear;

		/**
		 * @method
		 *
		 * @param permissionsArray {Array}
		 */
		function setPermissions(permissionsArray) {
			permissions = permissionsArray;

			_.each(permissions, function (permissionName) {
				PermissionStore.definePermission(permissionName, validatePermission);
			});

			$rootScope.$broadcast(authConf.neoPermission.events.setPermissions);
		}

		/**
		 * @method
		 *
		 * @param rolesArray {Array}
		 */
		function setRoles(rolesArray) {
			roles = rolesArray;

			_.each(roles, function (roleName) {
				RoleStore.defineRole(roleName, [], validateRole);
			});

			$rootScope.$broadcast(authConf.neoPermission.events.setRoles);
		}

		/**
		 * @method
		 */
		function clear() {
			PermissionStore.clearStore();
			RoleStore.clearStore();

			$rootScope.$broadcast(authConf.neoPermission.events.clear);
		}

		/**
		 * @method
		 * @private
		 *
		 * @param permissionName
		 * @returns {boolean}
		 */
		function validatePermission(permissionName) {
			return _.includes(permissions, permissionName);
		}

		/**
		 * @method
		 * @private
		 *
		 * @param roleName
		 * @returns {boolean}
		 */
		function validateRole(roleName) {
			return _.includes(roles, roleName);
		}
	}

	module.service('neoPermission', neoPermission);
});

