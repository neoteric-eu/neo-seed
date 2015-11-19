define(['seed/helpers/module'], function (app) {
	'use strict';

	/**
	 * JSON:API standard data interpreter settings
	 * @interface
	 * @memberOf seed.helpers
	 *
	 * @param restmod {Object} Restmod service provider
	 * @param appConf {Object} Application configuration
	 * @return {void|*|{$isAbstract, $$chain}|Function|Object}
	 */
	function NeoStyleAPI(restmod, appConf) {
		return restmod.mixin(
			'DefaultPacker',
      'restmod.FindMany',
			'restmod.Preload',
			'BaseModel', {
				$config: {
					style: 'NeoStyleAPI',
					urlPrefix: appConf.environmentSettings.apiUrl,
					primaryKey: 'id',
					jsonRoot: 'data',
					jsonMeta: 'meta'
				}
			});
	}

	app.factory('NeoStyleAPI', NeoStyleAPI);
});
