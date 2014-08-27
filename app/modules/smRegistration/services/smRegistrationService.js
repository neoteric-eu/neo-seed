(function() {
	'use strict';
	define([], function() {

		var smRegistrationService = function($q, smRegistrationResource){


			/**
			 *	@name register
			 *
			 *	@param {Object} registerData: email, password, language
			 */
			this.register = function(registerData) {
				var dfd = $q.defer();

				smRegistrationResource.register( registerData,
					function(data) {
						dfd.resolve(data);
					}, function(reason) {
						dfd.reject(reason);
					}
				);

				return dfd.promise;
			};

			this.activate = function(actiavateData) {
				var dfd = $q.defer();

				smRegistrationResource.activate( actiavateData,
					function(data) {
						dfd.resolve(data);
					}, function(reason) {
						dfd.reject(reason);
					}
				);

				return dfd.promise;
			};


		};

		return ['$q', 'smRegistrationResource', smRegistrationService];
	});
}());
