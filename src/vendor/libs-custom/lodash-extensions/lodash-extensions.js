/**
 * Allows to recursively merge provided configuration params object with with defaults
 *
 * @example
 *  var options = _.mergeDefaults(defaults, parameters);
 */
define(['lodash', 'lodash-deep'], function (_, lodashDeep) {
	// Extend lodash for deep functions
	_.mixin(lodashDeep);

	// Add merging default options with params
	_.mergeDefaults = _.partialRight(_.merge, function deep(a, b) {
		return _.merge(a, b, deep);
	});
});
