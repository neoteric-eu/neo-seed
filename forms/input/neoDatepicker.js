define([
	'seed/forms/module',
	'moment',
	'daterangepicker'
], function (module, moment) {
	'use strict';

	/**
	 * Converts input[type=daterange] into datepicker with moment.js wrapped date parameter
	 * @class neoDatepicker
	 * @memberOf seed.forms
	 *
	 * @example
	 *  <input neo-datepicker="vm.options"
	 *         ng-model="vm.dates"
	 *         type="text"
	 *         class="form-control">
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, bindToController: {ngModel: string, neoDatepicker: string},
	 *   controllerAs: string, scope: boolean, require: string[], link: link, controller:
	 *   Controller}}
	 */
	function neoDatepicker($log, gettextCatalog) {

		$log = $log.getInstance('seed.forms.daterangepicker');
		$log.debug('Initiated directive');

		var directive = {
			restrict: 'A',
			scope: {
				ngModel: '=',
				neoDatepicker: '='
			},
			require: ['ngModel'],
			link: link
		};

		return directive;

		function link(scope, element, attrs, ctrl) {
			var vm = scope.vm = scope.vm || {};
			var ngModelCtrl = ctrl[0], unregisterFn ;
			var options;

			vm.init = init;
			init();

			/**
			 * Returns default plugin configuration
			 * @returns {{separator: string, locale: {format: string, applyLabel: *, cancelLabel: *,
			 *   customRangeLabel: *}}}
			 */
			function defaults() {
				return {
					separator: ' - ',
					singleDatePicker: false,
					//opens: 'left',
					locale: {
						format: 'L',
						applyLabel: gettextCatalog.getString('Apply'),
						cancelLabel: gettextCatalog.getString('Cancel'),
						customRangeLabel: gettextCatalog.getString('Custom range')
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
				console.log('parser');
				var dates;

				if (options.singleDatePicker) {
					return moment(modelValue, defaults().locale.format);
				} else {

					dates = modelValue.split(defaults().separator);
					return {
						startDate: moment(dates[0], defaults().locale.format),
						endDate: moment(dates[1], defaults().locale.format)
					};
				}
			}

			function formatter (model) {
				console.log('formatter');
				var textVal ;

				if (!model) {
					return ;
				}

				if (options.singleDatePicker) {
					return model.format('L');
				}

				textVal = model.startDate.format('L') ;
				if (model.endDate) {
					textVal = textVal + defaults().separator + model.endDate.format('L') ;
				}
				return textVal;
			}

			function render() {
				console.log('render');
				element.val(ngModelCtrl.$viewValue);
				var drp = element.data('daterangepicker');
				if (drp) {
					if (options.singleDatePicker ) {
						element.data('daterangepicker').setStartDate(ngModelCtrl.$modelValue);
					}	else {
						element.data('daterangepicker').setStartDate(ngModelCtrl.$modelValue.startDate);
						element.data('daterangepicker').setEndDate(ngModelCtrl.$modelValue.endDate);
					}
				}
			}

			/**
			 * Initialize controller and call daterangepicker
			 *
			 */
			function init() {

				var unbind = scope.$watch('ngModel', function() {
					var model ;

					options = _.merge(defaults(), scope.neoDatepicker);

					if (options.singleDatePicker) {
						model = {
							startDate: scope.ngModel
						};
					} else {
						model = {
							startDate: scope.ngModel.startDate,
							endDate: scope.ngModel.endDate
						};
					}
					// configure parser, formatter and render
					ngModelCtrl.$parsers.push(parser);
					ngModelCtrl.$formatters.push(formatter);
					ngModelCtrl.$render = render;
					//call plugin
					element.daterangepicker(_.merge(options, model));
					unbind();
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
				element.data('daterangepicker').remove();
			}

			$log.debug('Initiated linking function');

		}
	}

	module.directive('neoDatepicker', neoDatepicker);
});


