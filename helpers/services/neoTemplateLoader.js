define(['seed/helpers/module'], function (module) {
	'use strict';

	/**
	 * Service Template loader service
 	 * @class neoTemplateLoader
	 * @memberOf seed.helpers
	 *
	 * @returns {Object} neoTemplateLoader service
	 *
	 */
	function neoTemplateLoader($templateCache, $http, $log) {

		/**
		 * Helper caching function. Loads template from either cache or through $http
		 * and puts the template under cacheKey
		 *
		 * @param templateName {String} path to HTML to be cached
		 * @param cacheKey {String} Key under which template will be stored
		 *
		 * @returns
		 *
		 */
		this.load  = function(templateName, cacheKey) {
			var template = $templateCache.get(templateName);

			if (template) {
				$templateCache.put(cacheKey, template);
				$log.debug('Loaded ' + templateName +
					' template into cache under key: ' + cacheKey);

			} else {
				$http
					.get(templateName)
					.then(function (response) {
						$templateCache.put(cacheKey, response.data);

						$log.debug('Loaded ' + templateName +
							' template into cache under key: ' + cacheKey);
					})
					.catch(function () {
						$log.error('Could not load ' + templateName + ' template');
					});
			}
		};
	}

	module.service('neoTemplateLoader', neoTemplateLoader);
});
