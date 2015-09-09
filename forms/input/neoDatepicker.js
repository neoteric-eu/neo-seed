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
	 *  <input neo-datepicker="vm.vm.settings"
	 *         ng-model="vm.dates"
	 *         type="text"
	 *         class="form-control">
	 *
	 * @param $log {Object} Logging service
	 * @param gettextCatalog {Object} Translation catalog provider
	 * @return {{
	 *  restrict: string,
	 *  scope: {ngModel: string, neoDatepicker: string}, require: string, link: Function
	 * }}
	 */
	function neoDatepicker($log, gettextCatalog) {

		$log = $log.getInstance('seed.forms.datepicker');
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			scope: {
				ngModel: '=',
				neoDatepicker: '='
			},
			require: 'ngModel',
			link: function link(scope, element, attrs, ngModelCtrl) {
				var vm = scope.vm = scope.vm || {};

				var unregisterFn;

				// variables
				vm.defaultOptions = {
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
				vm.settings = undefined;

				// functions
				vm.init = init;
				vm.cleanUp = cleanUp;

				init();

				/**
				 * Initialize controller and call daterangepicker
				 *
				 */
				function init() {
					vm.settings = _.merge(vm.defaultOptions, scope.neoDatepicker);

					// Set up controller
					setUpModelCtrl();

					// Call the plugin
					scope.$applyAsync(function () {
						element.daterangepicker(_.merge(vm.settings, getModel()));
					});

					unregisterFn = scope.$root.$on('seed.languageAPI.setLanguage', function () {
						var model = getModel();
						model.startDate.locale(moment().locale());
						if (model.endDate) {
							model.endDate.locale(moment().locale());
						}
						element.data('daterangepicker').remove();
						element.daterangepicker(_.merge(vm.settings, model));
					});

					scope.$on('$destroy', function () {
						cleanUp();
					});

					$log.debug('Called linking function');
				}

				/**
				 * Configure parser, formatter and render
				 */
				function setUpModelCtrl() {
					ngModelCtrl.$parsers.push(parser);
					ngModelCtrl.$formatters.push(formatter);
					ngModelCtrl.$render = render;
				}

				/**
				 * Clean up
				 */
				function cleanUp() {
					unregisterFn();
					element.data('daterangepicker').remove();
				}

				/**
				 * Checks in which mode datepicker was set up
				 * @return {boolean}
				 */
				function isSingleDatePicker() {
					return vm.settings.singleDatePicker;
				}

				/**
				 * Returns datepicker model based on set up mode
				 * @return {*}
				 */
				function getModel() {
					if (isSingleDatePicker()) {
						return {
							startDate: scope.ngModel
						};
					} else {
						return {
							startDate: scope.ngModel.startDate,
							endDate: scope.ngModel.endDate
						};
					}
				}

				/**
				 * Converts string into moment dates
				 * @param modelValue {string} Date string i.e. 01/01/2015 - 01/09/2015
				 *
				 * @return {*} Return object hash with startDate and endDate keys.
				 *
				 */
				function parser(modelValue) {
					if (isSingleDatePicker()) {
						var momentDate = moment(modelValue, vm.settings.locale.format);

						if (momentDate.isValid()) {
							return momentDate;
						}
					}

					var dates = modelValue.split(vm.settings.separator);

					var startDate = moment(dates[0], vm.settings.locale.format);
					var endDate = moment(dates[1], vm.settings.locale.format);

					if (startDate.isValid() && endDate.isValid()) {
						return {
							startDate: startDate,
							endDate: endDate
						};
					}
				}

				/**
				 * Converts moment dates into strings
				 * @param model {Object} Moment dates
				 *
				 * @return {*} Converted dates
				 */
				function formatter(model) {
					var textVal;

					if (!model) {
						return;
					}

					if (isSingleDatePicker()) {
						return model.format('L');
					} else {
						textVal = model.startDate.format('L');
						if (model.endDate) {
							textVal = textVal + vm.settings.separator + model.endDate.format('L');
						}
					}

					return textVal;
				}

				/**
				 * Rendering function
				 */
				function render() {
					element.val(ngModelCtrl.$viewValue);

					var picker = element.data('daterangepicker');

					if (picker) {
						if (isSingleDatePicker()) {
							picker.setStartDate(ngModelCtrl.$modelValue);
						} else {
							picker.setStartDate(ngModelCtrl.$modelValue.startDate);
							picker.setEndDate(ngModelCtrl.$modelValue.endDate);
						}
					}
				}
			}
		};
	}

	module.directive('neoDatepicker', neoDatepicker);
});


