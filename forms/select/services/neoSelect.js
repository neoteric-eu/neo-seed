define([
	'seed/forms/module',
	'angular-ui-select'
], function (module) {
	'use strict';

	function neoSelect($log, neoTemplateLoader, $templateCache) {
		$log = $log.getInstance('seed.components.neoSelect');

		var neoSelectService = {};

		neoSelectService.init = function () {
			neoTemplateLoader.load('seed/forms/select/partials/match.html', 'bootstrap/match.tpl.html');
			$log.debug('Initiated service');
		};

		return neoSelectService;
	}

	module.service('neoSelect', neoSelect);
});
