define([
	'seed/forms/module',
	'angular-ui-select'
], function (module) {
	'use strict';

	function neoSelect($templateCache, $http, $log) {
		$log = $log.getInstance('seed.components.neoSelect');

		var neoSelectService = {};

		function loadTemplate(templateName, cacheKey) {
			$http
				.get('seed/forms/select/' + templateName)
				.then(function (template) {
					$templateCache.put(cacheKey, template);

					$log.debug('Loaded neoSelect ' +
						templateName +
						' template into cache under key: ' +
						cacheKey);
				})
				.catch(function () {
					$log.error('Could not load neoSelect ' + templateName + ' template');
				});
		}

		neoSelectService.init = function () {
			loadTemplate('partials/match.html', 'bootstrap/match.tpl.html');

			$log.debug('Initiated service');
		};

		return neoSelectService;
	}

	module.service('neoSelect', neoSelect);
});
