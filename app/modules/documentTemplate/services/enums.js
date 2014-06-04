(function() {
	'use strict';
	define([], function() {
		var enums = function() {
			return {

				fieldTypes: {
					TEXTFIELD: 'TEXTFIELD',
					EMAIL: 'EMAIL',
					RADIO: 'RADIO',
					DROPDOWN: 'DROPDOWN',
					DATE: 'DATE',
					CHECKBOX: 'CHECKBOX',
				}
			};

		};
		return [enums];
	});
}());
