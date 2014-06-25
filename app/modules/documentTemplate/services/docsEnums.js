(function() {
	'use strict';
	define([], function() {
		var enums = function() {
			return {

				fieldTypes: {
					ATTACHMENT: 'ATTACHMENT',
					CHECKBOX: 'CHECKBOX',
					COMPLEX: 'COMPLEX',
					DATE: 'DATE',
					DROPDOWN: 'DROPDOWN',
					EMAIL: 'EMAIL',
					PRIMITIVE: 'PRIMITIVE',
					RADIO: 'RADIO',
					TEXTAREA: 'TEXTAREA',
					TEXTFIELD: 'TEXTFIELD',
				}
			};

		};
		return [enums];
	});
}());
