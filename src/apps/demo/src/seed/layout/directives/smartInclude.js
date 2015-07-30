define(['seed/layout/module'], function (module) {
	'use strict';

	return module.registerDirective('smartInclude', function () {
			return {
				replace: true,
				restrict: 'A',
				/**
				 * Description
				 * @method templateUrl
				 * @param {} element
				 * @param {} attr MemberExpression
				 */
				templateUrl: function (element, attr) {
					return attr.smartInclude;
				},
				/**
				 * Description
				 * @method compile
				 * @param {} element
				 */
				compile: function (element) {
					element[0].className = element[0].className.replace(/placeholder[^\s]+/g, '');
				}
			};
		}
	);

});
