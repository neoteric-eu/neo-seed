define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * This directive is complete fake. SSE are required to make it work.
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function neoActivities($document) {
		return {
			restrict: 'EA',
			templateUrl: 'seed/components/activities/activities.html',
			controllerAs: 'vm',
			scope: true,
			controller: function ($scope, $element) {
				var vm = this;
				var ajax_dropdown = $element.find('.ajax-dropdown');
				var badge = $element.find('.badge');

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

				function openAjaxDropdown(timeout) {
					timeout = timeout || 150;

					ajax_dropdown.fadeIn(timeout);
					$element.addClass('active');
				}

				function closeAjaxDropdown(timeout) {
					timeout = timeout || 150;

					ajax_dropdown.fadeOut(timeout);
					$element.removeClass('active');
				}

				$element.on('click', function () {
					if (badge.hasClass('bg-color-red')) {
						badge.removeClass('bg-color-red').text(0);
					}

					if (ajax_dropdown.css('display') !== 'block') {
						openAjaxDropdown(150);
					} else {
						closeAjaxDropdown(150);
					}
				});

				$document.on('mouseup', function (e) {
					if (ajax_dropdown && !$(e.target).closest(ajax_dropdown).length) {
						closeAjaxDropdown(150);
					}
				});
			}
		};
	}

	return module.directive('neoActivities', neoActivities);
});
