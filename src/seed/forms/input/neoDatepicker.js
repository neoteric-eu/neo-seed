define([
	'apps/demo/modules/forms/module',
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
	 *  <input data-smart-datepicker"vm.task.dueDate"
	 *         type="text"
	 *         class="form-control">
	 *
	 * @return {{restrict: string, scope: {neoDatepicker: string}, link: Function}}
	 */
	function neoDatepicker() {
		return {
			restrict: 'A',
			scope: {
				neoDatepicker: '='
			},

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
					regional: $.datepicker.regional[moment.locale()],
					prevText: '<i class="fa fa-chevron-left"></i>',
					nextText: '<i class="fa fa-chevron-right"></i>',
					/**
					 * Select date when clicked
					 * @method onSelect
					 * @param {Object} selectedDate
					 */
					onSelect: function (selectedDate) {
						angular.forEach(onSelectCallbacks, function (callback) {
							callback.call(this, selectedDate);
						});

						scope.neoDatepicker = moment(selectedDate, 'L');
					}
				};

				if (attributes.numberOfMonths) {
					options.numberOfMonths = parseInt(attributes.numberOfMonths);
				}

				if (attributes.changeMonth) {
					options.changeMonth = attributes.changeMonth === 'true';
				}

				/**
				 * Custom jquery.ui -> moment.js parser
				 * @param format Ignored parameter
				 * @param value String to be formatted
				 * @returns {*}
				 */
				$.datepicker.parseDate = function (format, value) {
					return moment(value, 'L').toDate();
				};

				/**
				 * Custom jquery.ui -> moment.js date formatter
				 * @param {String} format Ignored parameter
				 * @param {String} value String to be formatted
				 * @returns {*}
				 */
				$.datepicker.formatDate = function (format, value) {
					return moment(value).format('L');
				};

				/**
				 * Listen to any upcoming date changes and reflect them
				 * in input calendar values
				 * @type {Function|function()|*}
				 */
				scope.$watch('neoDatepicker', function (newValue) {
					element.datepicker('setDate', newValue.format('L'));
				}, true);

				element.datepicker(options);
			}
		};
	}

	return module.directive('neoDatepicker', neoDatepicker);
});
