// Defer AngularJS bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

requirejs([
	'seed/require.conf'
], function () {
	'use strict';

	requirejs([
		'require',
		'angular',
		'domReady',
		'lodash-extensions',
		'bootstrap',
		'appConfig',
		'apps/_includes',
		'apps/module'
	], function (require, ng, domReady) {
		domReady(function () {
			setTimeout(function () {
				ng.resumeBootstrap();
			}, 0);
		});
	});
});
