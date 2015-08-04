define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Configuration interface that utilize the amount of code
	 * required to configure data-binding with ngTable library
	 * @class
	 * @memberOf app.components
	 *
	 * @link https://github.com/esvit/ng-table/wiki/Configuring-your-table-with-ngTableParams
	 * @example
	 *  // Simplest configuration:
	 *  neoTableParams(Invoice);
	 *
	 * @example
	 *  // Full set of options:
	 *  neoTableParams(Invoice, {
	 *		params: {
	 *			page: 1,
	 *			count: 10,
	 *			sorting: {
	 *				'_id': 'desc'
	 *			}
	 *		},
	 *		onBeforeResolve: function(models){
	 *			models = _.first(models);
	 *		},
	 *		onAfterResolve: function(models){
	 *			$log.debug('Fetched invoices from server', models)
	 *		}
	 *	});
	 * @param ngTableParams {Function} ngTable params interface
	 * @param $log {Object} Logging service
	 * @returns {Function} ngTable configuration factory
	 */
	function neoTableParams(ngTableParams, $log) {
		$log = $log.getInstance('seed.components.neoTableParams');

		/**
		 * ngTable configuration factory
		 *
		 * @memberOf app.components.neoTableParams
		 * @param CollectionAPI {Object} Table reference CollectionAPI
		 * @param parameters {Object} Factory options
		 * @return {Object} ngTable library configuration instance
		 */
		var ngTableFactory = function (CollectionAPI, parameters) {

			if (_.isUndefined(CollectionAPI)) {
				throw new Error('option "CollectionAPI" must be defined');
			}

			// Make sure that parameters are defined object
			parameters = parameters || {};

			var defaults = {
				params: {
					page: 1,
					count: 10,
					sorting: {
						'_id': 'desc'
					}
				},
				getData: undefined,
				groupBy: undefined,
				onBeforeResolve: undefined,
				onAfterResolve: undefined
			};

			var options = _.mergeDefaults(parameters, defaults);

			return new ngTableParams(options.params, {
				total: 0,
				groupBy: options.groupBy,
				getData: function ($defer, params) {
					if (_.isFunction(options.getData)) {
						options.getData($defer, params);

					} else {
						var queryParams = {
							first: (params.url().page - 1) * params.url().count,
							pageSize: params.url().count,
							sort: params.sorting(),
							filter: params.filter()
						};

						CollectionAPI
							.filter(queryParams)
							.then(function (models) {
								if (_.isFunction(options.onBeforeResolve)) {
									options.onBeforeResolve(models);
								}
								return models;
							})
							.then(function (models) {
								params.total(models.$metadata.total);
								$defer.resolve(models);
								return models;
							})
							.then(function (models) {
								if (_.isFunction(options.onAfterResolve)) {
									options.onAfterResolve(models);
								}
							});
					}
				}
			});
		};

		$log.debug('Constructed new instance of ngTableFactory');

		return ngTableFactory;
	}

	module.factory('neoTableParams', neoTableParams);
});
