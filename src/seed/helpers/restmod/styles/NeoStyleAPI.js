define(['seed/module'], function (app) {
	'use strict';

	/**
	 * JSON:API standard data interpreter settings
	 * @interface
	 * @memberOf app
	 * @param restmod
	 * @param appConf
	 * @return {*|{$isAbstract, $$chain}}
	 */
	function NeoStyleAPI(restmod, appConf) {
		return restmod.mixin(
			'DefaultPacker',
			'restmod.Preload',
			'BaseModel', {
				$config: {
					style: 'NeoStyleAPI',
					urlPrefix: appConf.generalSettings.apiUrl,
					primaryKey: 'id',
					jsonRoot: 'data',
					jsonMeta: 'meta'
				}
			});
	}

	app.factory('NeoStyleAPI', NeoStyleAPI);
});
