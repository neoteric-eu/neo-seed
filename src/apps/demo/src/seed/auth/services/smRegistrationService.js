define([], function () {
	'use strict';

	/**
	 * Description
	 * @method smRegistrationService
	 * @param {} $q
	 * @param {} smRegistrationResource
	 */
	var smRegistrationService = function ($q, smRegistrationResource) {
		/**
		 *  @name register
		 *  @param {Object} registerData: email, password, language
		 * @method register
		 * @param {} registerData MemberExpression
		 */
		this.register = function (registerData) {
			var dfd = $q.defer();

			smRegistrationResource.register(registerData,
				function (data) {
					dfd.resolve(data);
				}, function (reason) {
					dfd.reject(reason);
				}
			);

			return dfd.promise;
		};

		/**
		 * Description
		 * @method activate
		 * @param {} actiavateData MemberExpression
		 */
		this.activate = function (actiavateData) {
			var dfd = $q.defer();

			smRegistrationResource.activate(actiavateData,
				function (data) {
					dfd.resolve(data);
				}, function (reason) {
					dfd.reject(reason);
				}
			);

			return dfd.promise;
		};


	};

	return ['$q', 'smRegistrationResource', smRegistrationService];
});
