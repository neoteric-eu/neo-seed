/**
 * Extends default lodash functions
 */
define(['lodash', 'lodash-deep', './jsonStringify'], function (_, lodashDeep, jsonStringify) {
	'use strict';

	// Extend lodash for deep functions
	_.mixin(lodashDeep);

	// Extend lodash with stringify function
	_.mixin(jsonStringify);

	// Add merging default options with params
	_.mergeDefaults = _.partialRight(_.merge, function recursiveDefaults(/* ... */) {

		// Ensure dates and arrays are not recursively merged
		if (_.isArray(arguments[0]) || _.isDate(arguments[0])) {
			return arguments[0];
		}
		return _.merge(arguments[0], arguments[1], recursiveDefaults);
	});

	// Filter collection based provided set of values
	// http://stackoverflow.com/questions/17251764/lodash-filter-collection-using-array-of-values/28173354#28173354
	_.filterByValues = function (collection, property, values) {
		return _.filter(collection, function (item) {
			return _.contains(values, _.get(item, property));
		});
	};

});
