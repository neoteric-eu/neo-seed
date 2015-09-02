/**
 * Created by hp on 2015-08-31.
 */

define([
	'seed/forms/module',
	'moment',
	'daterangepicker'
], function (module, moment) {
	'use strict';

	/**
	 * Converts input[type=daterange] into datepicker with moment.js wrapped date parameter
	 * @class neoDaterangepicker
	 * @memberOf seed.forms
	 *
	 * @example
	 *  <input neo-daterangepicker="vm.options"
	 *         ng-model="vm.dates"
	 *         type="text"
	 *         class="form-control">
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, bindToController: {ngModel: string, neoDaterangepicker: string}, controllerAs: string,
	 * scope: boolean, require: string[], link: link, controller: Controller}}
	 */
	function neoDaterangepicker($log, gettextCatalog) {

		$log = $log.getInstance('seed.forms.daterange');
		$log.debug('Initiated directive');

		var directive = {
			restrict: 'A',
			scope: {
				ngModel: '=',
				neoDaterangepicker: '='
			},
			require: ['ngModel'],
			link: link
		};

		return directive;

		function link(scope, element, attrs, ctrl) {
			var vm = scope.vm = scope.vm || {};

			var ngModelCtrl = ctrl[0], unregisterFn ;

			vm.init = init;

			init();

			/**
			 * Returns default plugin configuration
			 * @returns {{separator: string, locale: {format: string, applyLabel: *, cancelLabel: *, customRangeLabel: *}}}
			 */
			function defaults() {
				return {
					separator: ' - ',
					locale: {
						format: 'L',
						applyLabel: gettextCatalog.getString('apply'),
						cancelLabel: gettextCatalog.getString('cancel'),
						customRangeLabel: gettextCatalog.getString('custom range')
					}
				};
			}

			/**
			 * Converts string into moment dates
			 * @param {string} date string i.e. 01/01/2015 - 01/09/2015
			 *
			 * @return {Object} Return object hash with startDate and endDate keys.
			 *
			 */
			function parser(modelValue) {
				var dates = modelValue.split(defaults().separator);
				return {
					startDate: moment(dates[0], defaults().locale.format),
					endDate: moment(dates[1], defaults().locale.format)
				}
			}

			/**
			 * Initialize controller and call daterangepicker
			 *
			 */
			function init() {

				var model = {
					startDate: scope.ngModel.startDate,
					endDate: scope.ngModel.endDate
				};

				var options = _.mergeDefaults(defaults(), scope.neoDaterangepicker, model);
				// configure parser
				ngModelCtrl.$parsers.push(parser);

				//call plugin
				element.daterangepicker(options, function (start, end, label) {
				});

				unregisterFn = scope.$root.$on('seed.languageAPI.setLanguage', function () {
					//todo: add handler
				});

				scope.$on('$destroy', function () {
					cleanUp();
				});

				$log.debug('Initiated widget');
			}

			/**
			 * Clean up
			 */
			function cleanUp() {
				unregisterFn();
				$element.data('daterangepicker').remove();
			}

			$log.debug('Initiated linking function');

		}
	}

	module.directive('neoDaterangepicker', neoDaterangepicker);
});


