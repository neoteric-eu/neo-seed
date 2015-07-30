/**
 * DETECT MOBILE DEVICES
 * Description: Detects mobile device - if any of the listed device is
 *
 * detected class is inserted to <tElement>.
 *
 *  (so far this is covering most hand held devices)
 */


define(['seed/layout/module'], function (module) {
	'use strict';

	module.registerDirective('smartDeviceDetect', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 */
			compile: function (tElement) {
				tElement.removeAttr('smart-device-detect data-smart-device-detect');

				var isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

				tElement.toggleClass('desktop-detected', !isMobile);
				tElement.toggleClass('mobile-detected', isMobile);

			}
		};
	});
});
