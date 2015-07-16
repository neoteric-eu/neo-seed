define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Description* @constructs ProfileAPI
	 * @method ProfileAPI
	 * @param Profile
	 * @param neoSession
	 * @param Permission
	 * @param BaseAPI
	 * @return {*}
	 */
	var ProfileAPI = function (Profile, BaseAPI, neoSession, Permission, ipCookie) {

		var api = new BaseAPI(Profile);

		/**
		 * Description
		 * @method setSelected
		 * @param {} profile
		 */
		api.setSelected = function (profile) {
			Profile.$setSelected(profile);

			neoSession.setSession(profile, ipCookie('token'));
			Permission.setFeatures(profile.featureKeys);
		};

		return api;
	};

	module.registerService('ProfileAPI', ProfileAPI);
});


