define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Renders single navigation item inside neoNavigation directive.
	 * @class neoNavigationItem
	 * @memberOf seed.components
	 *
	 * @example
	 * <neo-navigation-item
	 *  icon="fa-file-o"
	 *  label="{{'Owned'|translate}}"
	 *  state="app.docs.documents.owned">
	 * </neo-navigation-item>
	 *
	 * @param $log {Object} Logging service
	 * @param $state {Object} State helper service
	 * @return {{
	 * 	restrict: string,
	 * 	scope: boolean,
	 * 	replace: boolean,
	 * 	controllerAs: string,
	 * 	templateUrl: string,
	 * 	bindToController: {icon: string, state: string, label: string},
	 * 	controller: Function
	 * }}
	 */
	function neoNavigationItem($log, $state) {

		$log = $log.getInstance('seed.components.neoNavigationItem');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			scope: true,
			replace: true,
			controllerAs: 'vm',
			require: '^neoNavigation',
			templateUrl: 'seed/components/navigation/neoNavigationItem.html',
			bindToController: {
				icon: '@',
				state: '@',
				label: '@'
			},
			controller: function ($element) {
				var vm = this || {};

				// variables
				// functions
				vm.toggleItem = toggleItem;
				vm.isActive = isActive;

				function toggleItem() {
					$element
						.siblings('.open')
						.each(function () {
							$(this)
								.removeClass('open')
								.find('ul:first')
								.slideUp(200);
						});

					$log.debug('Toggled navigation item:' + vm.state);
				}

				function isActive() {
					return $state.includes(vm.state);
				}
			}
		};
	}

	module.directive('neoNavigationItem', neoNavigationItem);
});
