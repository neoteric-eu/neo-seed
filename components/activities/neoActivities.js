define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * This directive is complete fake. SSE are required to make it work.
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function neoActivities() {
		return {
			restrict: 'EA',
			templateUrl: 'seed/components/activities/activities.html',
			controllerAs: 'vm',
			controller: function ($scope, $element) {
				var vm = this;

				vm.user = $scope.$root.user;
				vm.setTab = setTab;
				vm.activities = {
					MESSAGE: {
						label: 'Message'
					},
					TASK: {
						label: 'Task'
					}
				};

				function setTab() {
					return false;
				}

				var ajax_dropdown = null;

				$element.on('click', function () {
					var badge = $(this).find('.badge');

					if (badge.hasClass('bg-color-red')) {
						badge.removeClass('bg-color-red').text(0);
					}

					ajax_dropdown = $(this).find('.ajax-dropdown');

					if (!ajax_dropdown.is(':visible')) {
						ajax_dropdown.fadeIn(150);
						$(this).addClass('active');
					}
					else {
						ajax_dropdown.fadeOut(150);
						$(this).removeClass('active');
					}
				});

				$(document).mouseup(function (e) {
					if (ajax_dropdown && !ajax_dropdown.is(e.target) &&
						ajax_dropdown.has(e.target).length ===
						0) {
						ajax_dropdown.fadeOut(150);
						$element.removeClass('active');
					}
				});
			}
		};
	}

	return module.directive('neoActivities', neoActivities);
});
