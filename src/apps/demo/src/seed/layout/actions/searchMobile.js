define(['seed/layout/module'], function (module) {

	'use strict';

	module.registerDirective('searchMobile', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} element
			 */
			compile: function (element) {
				element.removeAttr('search-mobile data-search-mobile');

				element.on('click', function (e) {
					$('body').addClass('search-mobile');
					e.preventDefault();
				});

				$('#cancel-search-js').on('click', function (e) {
					$('body').removeClass('search-mobile');
					e.preventDefault();
				});
			}
		};
	});
});
