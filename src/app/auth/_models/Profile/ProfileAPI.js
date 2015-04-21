define(['auth/module'], function (module) {
	'use strict';

	/**
	 * Description* @constructs ProfileAPI
	 * @method ProfileAPI
	 * @param Profile
	 * @param session
	 * @param Permission
	 */
	var ProfileAPI = function (Profile, BaseAPI, session, Permission) {

		var api = new BaseAPI(Profile);

		/**
		 * Description
		 * @method setSelected
		 * @param {} profile
		 */
		api.setSelected = function (profile) {
			Profile.$setSelected(profile);

			session.setSession(profile.customerId);
			Permission.setFeatures(profile.featureKeys);
		};

		return api;


	};

	module.registerService('ProfileAPI', ProfileAPI);
});


