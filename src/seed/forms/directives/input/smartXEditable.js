define(['seed/forms/module', 'x-editable'], function (module) {
	'use strict';

	return module.registerDirective('smartXeditable', function () {

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 */
		function link(scope, element) {

			var defaults = {
				// display: function(value, srcData) {
				//     ngModel.$setViewValue(value);
				//     // scope.$apply();
				// }
			};

			/**
			 * Description
			 * @method initXeditable
			 */
			var initXeditable = function () {

				var options = scope.options || {};
				var initOptions = angular.extend(defaults, options);

				// $log.log(initOptions);
				element.editable('destroy');
				element.editable(initOptions);
			};

			scope.$watch('options', function (newValue) {

				if (!newValue) {
					return false;
				}
				initXeditable();
			}, true);
		}

		return {
			restrict: 'A',
			require: 'ngModel',
			scope: {
				options: '='
			},
			link: link

		};
	});
});
