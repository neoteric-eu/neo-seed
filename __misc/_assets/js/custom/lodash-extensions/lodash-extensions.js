/**
 * Extends default lodash functions
 */
define(['lodash', 'lodash-deep', 'json-stringify-safe'], function (_, lodashDeep, jsonStringify) {
	// Extend lodash for deep functions
	_.mixin(lodashDeep);

	// Extend lodash with stringify function
	_.mixin(jsonStringify);

	// Add merging default options with params
	_.mergeDefaults = _.partialRight(_.merge, function deep(a, b) {
		return _.merge(a, b, deep);
	});

	// Filter collection based provided set of values
	// http://stackoverflow.com/questions/17251764/lodash-filter-collection-using-array-of-values/28173354#28173354
	_.filterByValues = function (collection, property, values) {
		return _.filter(collection, function (item) {
			return _.contains(values, _.get(item, property));
		});
	};

});
