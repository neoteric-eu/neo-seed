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
 *
 * @param {string} ngModel Object which contains  assignable properties {startDate, endDate}
 * @param {string} options Object which is passed as options into daterangepicker
 *
 *  @example
 *  <input neo-daterangepicker="vm.options"
 *         ng-model="vm.dates"
 *         type="text"
 *         class="form-control">
 *
 */

	module.directive('neoDaterangepicker', neoDaterangepicker);

	function neoDaterangepicker($log) {

		$log = $log.getInstance('seed.forms.daterange');
		$log.debug('Initiated directive');

		var directive = {
			link: link,
			restrict: 'A',
			controller: Controller,
			bindToController: {
				ngModel: '=',
				neoDaterangepicker: '='
			},
			controllerAs: 'daterangeController',
			scope: true,
			require: ['ngModel', 'neoDaterangepicker']
		};

		return directive;

		function link(scope, element, attrs, ctrl) {

			var ngModelCtrl = ctrl[0];
			var daterangeCtrl = ctrl[1];

			daterangeCtrl.setModelController(ngModelCtrl);
		}

		/**
		 * Directive controller
		 * @param $scope
		 * @param $element
		 * @constructor
		 */
		function Controller($scope, $element,  $attrs, $transclude, gettextCatalog, $timeout) {
			var that = this, unregisterFn;

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
			 * Sets ngModelController
			 * @param modelCtrl
			 */
			this.setModelController = function(modelCtrl) {
				this.modelCtrl = modelCtrl;
				init();
			};

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
					startDate: that.ngModel.startDate,
					endDate: that.ngModel.endDate
				};

				var options = _.mergeDefaults(defaults(), that.neoDaterangepicker, model);
				// configure parser
				that.modelCtrl.$parsers.push(parser);
				//call plugin

				$element.daterangepicker(options, function(start, end, label){});

				unregisterFn = $scope.$root.$on('seed.languageAPI.setLanguage', function () {
					//todo: add handler
				});

				$scope.$on('$destroy', function () {
					cleanUp();
				});
			}

			/**
			 * Clean up
			 */
			function cleanUp() {
				unregisterFn();
				$element.data('daterangepicker').remove();
			}

		}
	}
});


