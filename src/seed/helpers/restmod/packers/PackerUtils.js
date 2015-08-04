define([], function () {
	'use strict';

	var PackerUtils = {
		/**
		 * Description
		 * @method include
		 * @param {} _source
		 * @param {} _list
		 * @param {} _do
		 */
		include: function (_source, _list, _do) {
			for (var i = 0, l = _list.length; i < l; i++) {
				_do(_list[i], _source[_list[i]]);
			}
		},

		/**
		 * Description
		 * @method exclude
		 * @param {} _source
		 * @param {} _skip
		 * @param {} _do
		 */
		exclude: function (_source, _skip, _do) {
			for (var key in _source) {
				if (_source.hasOwnProperty(key) && _skip.indexOf(key) === -1) {
					_do(key, _source[key]);
				}
			}
		},

		/**
		 * Description
		 * @method processFeature
		 * @param {} _raw
		 * @param {} _name
		 * @param {} _feature
		 * @param {} _other
		 * @param {} _do
		 */
		processFeature: function (_raw, _name, _feature, _other, _do) {
			if (_feature === '.' || _feature === true) {
				var skip = _.isUndefined(name) ? [] : [_name];

				if (_other) {
					skip.push.apply(skip, angular.isArray(_other) ? _other : [_other]);
				}
				PackerUtils.exclude(_raw, skip, _do);
			} else if (typeof _feature === 'string') {
				PackerUtils.exclude(_raw[_feature], [], _do);
			} else { // links is an array
				PackerUtils.include(_raw, _feature, _do);
			}
		}
	};

	return PackerUtils;
});
