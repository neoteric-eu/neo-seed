define([
	'./Document/Document',
	'./Document/DocumentAPI',

	'./DocumentTemplate/DocumentTemplate',
	'./DocumentTemplate/DocumentTemplateAPI',

	'./Field/Field',
	'./Field/FieldAPI',
	'./Field/serializers/FieldValidatorDecodeFilter',
	'./Field/serializers/FieldValidatorEncodeFilter',

	'./CompositeField/CompositeField',
	'./CompositeField/CompositeFieldAPI',

	'./PrimitiveFields/EmailField',
	'./PrimitiveFields/SelectField',
	'./PrimitiveFields/TextareaField',
	'./PrimitiveFields/TelephoneField',
	'./PrimitiveFields/TimeField',
	'./PrimitiveFields/ColorField',
	'./PrimitiveFields/DateField',
	'./PrimitiveFields/NumberField',
	'./PrimitiveFields/TextField',
	'./PrimitiveFields/UrlField',
	'./PrimitiveFields/SelectField',
	'./PrimitiveFields/MultiselectField',

	'./Validators/EmailAddressValidator',
	'./Validators/NotEmptyValidator',
	'./Validators/DateValidator',
	'./Validators/IntegerValidator',
	'./Validators/ColorValidator',
	'./Validators/Validator'
], function () {
	'use strict';
});
