define([
	'./_interceptors/HttpErrorInterceptor',

	'./_decorators/logDecorator',

	'./_enums/BaseEnum',

	'./_services/templateLoader/neoTemplateLoader',
	'./_services/eventAggregator/EventAggregatorFactory',

	'./lodash/lodashExtensions',

	'./moment/momentDatetimeDayrange',
	'./moment/neoMomentDate',
	'./moment/neoMomentDatetime',
	'./moment/neoMomentTime',

	'./restmod/serializers/datetime/DatetimeSerializerService',
	'./restmod/serializers/datetime/DatetimeDecodeFilter',
	'./restmod/serializers/datetime/DatetimeEncodeFilter',
	'./restmod/serializers/datetime/DatetimeSerializer',

	'./restmod/serializers/date/DateSerializerService',
	'./restmod/serializers/date/DateDecodeFilter',
	'./restmod/serializers/date/DateEncodeFilter',
	'./restmod/serializers/date/DateSerializer',

	'./restmod/serializers/time/TimeSerializerService',
	'./restmod/serializers/time/TimeDecodeFilter',
	'./restmod/serializers/time/TimeEncodeFilter',
	'./restmod/serializers/time/TimeSerializer',

	'./restmod/serializers/enum/EnumSerializerService',
	'./restmod/serializers/enum/EnumDecodeFilter',
	'./restmod/serializers/enum/EnumEncodeFilter',

	'./restmod/models/BaseAPI',
	'./restmod/models/BaseModel',
	'./restmod/styles/NeoStyleAPI',
	'./restmod/packers/PackerUtils'
], function () {
	'use strict';
});
