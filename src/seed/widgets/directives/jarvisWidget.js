/**
 * Jarvis Widget Directive
 * @example
 *  data-widget-colorbutton="false"
 *  data-widget-editbutton="false"
 *  data-widget-togglebutton="false"
 *  data-widget-deletebutton="false"
 *  data-widget-fullscreenbutton="false"
 *  data-widget-custombutton="false"
 *  data-widget-collapsed="true"
 *  data-widget-sortable="false"
 */
define(['seed/widgets/module'], function (module) {
	'use strict';

	module.directive('jarvisWidget', function ($rootScope) {
		return {
			restrict: 'A',
			compile: function (element) {
				if (element.data('widget-color')) {
					element.addClass('jarviswidget-color-' + element.data('widget-color'));
				}

				element
					.find('.widget-body')
					.prepend('<div class="jarviswidget-editbox">' +
					'<input class="form-control" type="text">' +
					'</div>');

				element.addClass('jarviswidget jarviswidget-sortable');
				$rootScope.$emit('jarvisWidgetAdded', element);

			}
		};
	});
});
