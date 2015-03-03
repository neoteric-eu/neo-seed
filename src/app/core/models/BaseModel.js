define(['app'], function (app) {
	'use strict';

	/**
	 * Description
	 * @method BaseModel
	 * @param restmod
	 * @return CallExpression
	 */
	function BaseModel(restmod) {
		return restmod
			.model()
			.mix({
				createdAt: {
					encode: 'date',
					mask: 'CU'
				},
				updatedAt: {
					encode: 'date',
					mask: 'CU'
				},

				$config: {
					jsonRoot: 'data',
					jsonMeta: '.'
				}
			});
	}

	app.registerFactory('BaseModel', BaseModel);
});
