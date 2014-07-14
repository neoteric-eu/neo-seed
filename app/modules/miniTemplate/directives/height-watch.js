/* jshint unused: false */
(function() {
	'use strict';
	define([], function() {

		var heightWatch = function($window) {
			return {
				restrict:'A',
				link:function (scope, element, attrs) {
					scope.$watch( function() {
						scope.__height = element.height();
					});

					scope.$watch( '__height', function( newHeight, oldHeight ) {
						$window.pageSetUp();
					});

				}
			};
		};


		return ['$window', heightWatch];

	});
}());
