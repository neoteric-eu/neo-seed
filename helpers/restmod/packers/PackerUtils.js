define([], function () {
	'use strict';

	/**
	 * Helper methods for serializers
	 * @type {{include: Function, exclude: Function, processFeature: Function}}
	 */
	var PackerUtils = {
		include: function (_source, _list, _do) {
			for (var i = 0, l = _list.length; i < l; i++) {
				_do(_list[i], _source[_list[i]]);
			}
		},

		exclude: function (_source, _skip, _do) {
			for (var key in _source) {
				if (_source.hasOwnProperty(key) && _skip.indexOf(key) === -1) {
					_do(key, _source[key]);
				}
			}
		},

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
