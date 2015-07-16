// Defer AngularJS bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

requirejs(['../seed/require.conf', 'require.conf'], function () {
	'use strict';

	requirejs([
		'require',
		'angular',
		'domReady',
		'lodash',
		'lodash-extensions',
		'appConfig',
		'bootstrap',
		'app/_includes',
		'app/app'
	], function (require, ng, domReady) {
		domReady(function () {
			setTimeout(function () {
				ng.resumeBootstrap();
			}, 0);
		});
	});
});
