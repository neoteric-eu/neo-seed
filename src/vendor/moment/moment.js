define(['moment'], function (moment) { // https://github.com/urish/angular-moment/issues/36
	'use strict';
	moment().locale('en');
	moment().format();
	return moment;
});
