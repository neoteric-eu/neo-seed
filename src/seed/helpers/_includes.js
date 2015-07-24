define([
	'./interceptors/HttpRequestInterceptor',
	'./interceptors/HttpErrorInterceptor',

	'./decorators/logDecorator',

	'./enums/BaseEnum',

	'./restmod/serializers/datetime/DatetimeDecodeFilter',
	'./restmod/serializers/datetime/DatetimeEncodeFilter',
	'./restmod/serializers/date/DateDecodeFilter',
	'./restmod/serializers/date/DateEncodeFilter',
	'./restmod/serializers/time/TimeDecodeFilter',
	'./restmod/serializers/time/TimeEncodeFilter',
	'./restmod/serializers/enum/EnumDecodeFilter',
	'./restmod/serializers/enum/EnumEncodeFilter',

	'./restmod/models/BaseAPI',
	'./restmod/models/BaseModel',
	'./restmod/styles/NeoStyleAPI',
	'./restmod/packers/PackerUtils',

	'./_locale/translation'
], function () {
	'use strict';
});
