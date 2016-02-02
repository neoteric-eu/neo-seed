define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * Service Template loader service
	 * @class neoTemplateLoader
	 * @memberOf seed.helpers
	 *
	 * @param $templateCache {Object} Cache provider
	 * @param $http {Object} HTTP interface
	 * @param $log {Object} Logging service
	 * @param $q {Object} Promise factory
	 */
	function neoTemplateLoader($templateCache, $http, $log, $q) {

		$log = $log.getInstance('seed.helpers.neoTemplateLoader');
		$log.debug('Initiated service');

		/**
		 * Helper caching function. Loads template from either cache or through $http
		 * and puts the template under cacheKey
		 *
		 * @param templatePath {String} path to HTML to be cached
		 * @param cacheKey {String} Key under which template will be stored
		 */
		this.load = function (templatePath, cacheKey) {
			var dfd = $q.defer();

			// If custom cache key is not provided store it at default key
			if (_.isUndefined(cacheKey)) {
				cacheKey = templatePath;
			}

			var template = $templateCache.get(templatePath);

			if (template) {
				$templateCache.put(cacheKey, template);
				dfd.resolve(template);

				$log.debug('Loaded ' + templatePath + ' template into cache under key: ' + cacheKey);
			} else {

				$http
					.get(templatePath)
					.then(function (response) {
						$templateCache.put(cacheKey, response.data);

						dfd.resolve(response.data);
						$log.debug('Loaded ' + templatePath + ' template into cache under key: ' + cacheKey);

					})
					.catch(function (err) {
						dfd.reject(err);

						$log.error('Could not load ' + templatePath + ' template');
					});
			}

			return dfd.promise;
		};
	}

	module.service('neoTemplateLoader', neoTemplateLoader);
});
