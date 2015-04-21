define(['app', 'globalSettings'], function (app, globalSettings) {
	'use strict';

	/**
	 * JSON:API standard data interpreter settings
	 * @interface
	 * @memberOf app
	 * @param restmod
	 * @return {*|{$isAbstract, $$chain}}
	 */
	function NeoStyleAPI(restmod) {
		return restmod.mixin(
			'DefaultPacker',
			'restmod.Preload',
			'BaseModel', {
				$config: {
					style: 'NeoStyleAPI',
					urlPrefix: globalSettings.get('API_URL'),
					primaryKey: 'id',
					jsonRoot: 'data',
					jsonMeta: '.'
				}
			});
	}

	app.registerFactory('NeoStyleAPI', NeoStyleAPI);
});
