define(['seed/components/module'], function (module) {
	'use strict';

	function bigBreadcrumbs($log) {
		$log = $log.getInstance('seed.components.bigBreadcrumbs');

		$log.debug('Initiated directive');
		
		return {
			restrict: 'E',
			replace: true,
			template: '<div><h1 class="page-title txt-color-blueDark"></h1></div>',
			scope: {
				items: '=',
				icon: '@'
			},

			link: function (scope, element) {
				var first = _.first(scope.items);
				var icon = scope.icon || 'home';

				element
					.find('h1')
					.append('<i class="fa-fw fa fa-' + icon + '"></i> ' + first);

				_.rest(scope.items)
					.forEach(function (item) {
						element
							.find('h1')
							.append(' <span>> ' + item + '</span>');
					});

				$log.debug('Linked directive');
			}
		};
	}

	module.directive('bigBreadcrumbs', bigBreadcrumbs);
});
