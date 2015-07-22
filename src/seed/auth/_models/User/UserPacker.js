define([
	'seed/auth/module',
	'seed/helpers/restmod/packers/PackerUtils'
], function (app, PackerUtils) {
	'use strict';

	/**
	 *
	 * @param restmod
	 * @param RMPackerCache
	 * @return {*|{$isAbstract, $$chain}}
	 * @constructor
	 */
	var UserPacker = function (restmod, RMPackerCache) {
		return restmod.mixin(function () {
			this.define('Model.unpack', function (_resource, _raw) {
				var name,
					links = this.getProperty('jsonLinks', 'included'),
					meta = this.getProperty('jsonMeta', 'token');

				if (_resource.$isCollection) {
					//noinspection JSValidateTypes
					name = this.getProperty('jsonRootMany') ||
						this.getProperty('jsonRoot') ||
						this.getProperty('plural');
				} else {
					if (_resource.$response.config.url.match(/authInfo$/) ||
						_resource.$response.config.url.match(/login$/)) {
						name = 'user';
					}
				}

				if (meta) {
					_resource.$metadata = {};
					PackerUtils.processFeature(_raw, name, meta, links, function (_key, _value) {
						_resource.$metadata[_key] = _value;
					});
				}

				if (links) {
					PackerUtils.processFeature(_raw, name, links, meta, function (_key, _value) {
						RMPackerCache.feed(_key, _value);
					});
				}

				return _.isUndefined(name) ? _raw : _raw[name];
			});
		});
	};

	app.factory('UserPacker', UserPacker);
});
