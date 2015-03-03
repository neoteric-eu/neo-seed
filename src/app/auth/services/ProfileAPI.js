define(['auth/module'], function (module) {
	'use strict';

	/**
	 * Description* @constructs ProfileAPI
	 * @method ProfileAPI
	 * @param Profile
	 * @param session
	 * @param Permission
	 */
	var ProfileAPI = function (Profile, session, Permission) {
		/**
		 * Description
		 * @method setSelected
		 * @param {} profile
		 */
		this.setSelected = function (profile) {
			Profile.$setSelected(profile);

			session.setSession(profile.customerId);
			Permission.setFeatures(profile.featureKeys);
		};
	};

	module.registerService('ProfileAPI', ProfileAPI);
});


