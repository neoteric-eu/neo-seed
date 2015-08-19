define([
	'seed/components/module',
	'moment',
	'jquery-ui/datepicker',
	'jquery-ui/i18n/datepicker-pl',
	'jquery-ui/i18n/datepicker-en-GB'
], function (module, moment) {
	'use strict';

	/**
	 * Converts input[type=text] into datepicker with moment.js wrapped date parameter
	 * @class neoDatepicker
	 * @memberOf seed.forms
	 *
	 * @example
	 *  <input neo-datepicker
	 *         ng-model="vm.dueDate"
	 *         neo-moment-date
	 *         type="text"
	 *         class="form-control">
	 *
	 * @return {{restrict: string, link: Function}}
	 */
	function neoDatepicker($log) {
		$log = $log.getInstance('seed.components.neoDatepicker');
		$log.debug('Initiated directive');

		return {
			restrict: 'A',

			link: function (scope, element, attributes) {


				var onSelectCallbacks = [];

				if (attributes.minRestrict) {
					onSelectCallbacks.push(function (selectedDate) {
						$(attributes.minRestrict)
							.datepicker('option', 'minDate', selectedDate);
					});
				}

				if (attributes.maxRestrict) {
					onSelectCallbacks.push(function (selectedDate) {
						$(attributes.maxRestrict)
							.datepicker('option', 'maxDate', selectedDate);
					});
				}
				var options = {
					prevText: '<i class="fa fa-chevron-left"></i>',
					nextText: '<i class="fa fa-chevron-right"></i>'
				};

				if (attributes.numberOfMonths) {
					options.numberOfMonths = parseInt(attributes.numberOfMonths);
				}

				if (attributes.changeMonth) {
					options.changeMonth = attributes.changeMonth === 'true';
				}

				element.datepicker(options);

				/**
				 * Match locale-string to fit jquery needs
				 * @return {string} Normalized locale
				 */
				function normalizeLocale() {
					var locale = moment.locale().split('-');

					if (locale.length == 2) {
						locale[1] = locale[1].toUpperCase();
					}
					return locale.join('-');
				}

				/**
				 * When user change language re-initalize datepicker control
				 */
				scope.$root.$on('seed.languageAPI.setLanguage', function () {
					var locale = normalizeLocale();
					var options = element.datepicker('option', 'all');

					element.datepicker('destroy')
						.datepicker(options)
						.datepicker('option', $.datepicker.regional[locale]);
				});

				/**
				 * When datepicker is destroyed remove it from JS and DOM
				 */
				scope.$on('$destroy', function () {
					element.datepicker('destroy');
					$('#ui-datepicker-div').remove();
				});

				$log.debug('Initiated linking function');
			}
		};
	}

	return module.directive('neoDatepicker', neoDatepicker);
});
