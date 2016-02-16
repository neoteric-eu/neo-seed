define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Show collapsible group inside of neoNavigation directive.
	 * @class neoNavigationGroup
	 * @memberOf seed.components
	 *
	 * @example
	 * <neo-navigation-group
	 *  icon="fa-file-o"
	 *  label="{{'Documents'|translate}}"
	 *  state="app.docs.documents"
	 *  neo-permission-only="ND_DOCUMENT">
	 *
	 *    <neo-navigation-item
	 *      icon="fa-file-o"
	 *      label="{{'Owned'|translate}}"
	 *      state="app.docs.documents.owned">
	 *    </neo-navigation-item>
	 *
	 *  </neo-navigation-group>
	 *
	 * @param $log {Object} Logging service
	 * @param $state {Object} State helper
	 * @return {{
	 * 	restrict: string,
	 * 	scope: boolean,
	 * 	replace: boolean,
	 * 	transclude: boolean,
	 * 	controllerAs: string,
	 * 	templateUrl: string,
	 * 	bindToController: {icon: string, label: string},
	 * 	controller: Function
	 * }}
	 */
	function neoNavigationGroup($log, $state) {

		$log = $log.getInstance('seed.components.neoNavigationGroup');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			scope: true,
			replace: true,
			transclude: true,
			controllerAs: 'vm',
			require: '^neoNavigation',
			templateUrl: 'seed/components/navigation/neoNavigationGroup.html',
			bindToController: {
				icon: '@',
				label: '@',
				state: '@'
			},

			controller: function ($scope, $element) {
				var vm = this || {};

				// variables
				// functions
				vm.toggleGroup = toggleGroup;
				vm.isActive = isActive;
				vm.isOpen = isOpen;

				function toggleGroup() {
					$element
						.siblings('.open')
						.each(function () {
							$(this)
								.removeClass('open')
								.find('ul:first')
								.slideUp(200)
								.end()
								.find('.open')
								.each(function () {
									$(this)
										.removeClass('open')
										.find('ul:first')
										.slideUp(200);
								});
						});

					$element
						.toggleClass('open')
						.find('ul:first')
						.slideToggle(200);


					$log.debug('Toggled navigation group:' + vm.state);
				}

				function isActive() {
					return $state.includes(vm.state);
				}

				function isOpen() {
					return $element.hasClass('open');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoNavigationGroup', neoNavigationGroup);
});
