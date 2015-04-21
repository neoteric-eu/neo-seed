define(['modules/forms/module', 'lodash', 'bootstrap-duallistbox'], function (module, _) {
	'use strict';

	return module.registerDirective('smartDuallistbox', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 * @param {} tAttributes
			 */
			compile: function (tElement, tAttributes) {
				tElement.removeAttr('smart-duallistbox data-smart-duallistbox');


				var aOptions = _.pick(tAttributes, ['nonSelectedFilter']);

				var options = _.extend(aOptions, {
					nonSelectedListLabel: 'Non-selected',
					selectedListLabel: 'Selected',
					preserveSelectionOnMove: 'moved',
					moveOnSelect: false
				});

				tElement.bootstrapDualListbox(options);
			}
		};
	});
});
