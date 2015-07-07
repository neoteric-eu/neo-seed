define(['app'], function (module) {
	'use strict';

	/**
	 * Base interface for REST communication with server
	 * @interface
	 * @memberOf app
	 *
	 * @param $q {Object} AngularJS promise object
	 * @param $log {Object} Logging provider
	 * @param gettextCatalog {Object} Translation service
	 * @param appMessages {Object} Browser notifications wrapper
	 * @return {Object} REST interface for Restmod models
	 */
	function BaseAPI($q, $log, gettextCatalog, appMessages) {

		/**
		 * API constructor takes model as a parameter
		 * @constructs API
		 * @param model
		 */
		function API(model) {
			if (_.isUndefined(model)) {
				throw 'Argument "model" must be defined';
			}

			this.model = model;
		}

		/**
		 * Create new model locally based on init values
		 * @abstract
		 * @param initValues
		 * @return {*}
		 */
		API.prototype.build = function (initValues) {
			if (!_.isUndefined(initValues) && !_.isObject(initValues)) {
				$log.error('Parameter "initValues" must be Object');
				return;
			}
			return this.model.$build(initValues);
		};

		/**
		 * Fetches single model from server
		 * @abstract
		 * @param {String|Array} ids
		 * @return {*}
		 *
		 * @todo add to seed
		 */
		API.prototype.get = function (ids, params) {
			if (!_.isString(ids) && !_.isArray(ids)) {
				$log.error('Parameter "id" must be String or Array');
				return $q.reject();
			}

			return this.model
				.$find(ids, params)
				.$asPromise()
				.catch(handleError);
		};

		/**
		 * Gets the list of models from the server
		 * @abstract
		 * @return {any|*}
		 */
		API.prototype.fetch = function () {
			return this.model
				.$collection()
				.$fetch()
				.$asPromise()
				.catch(handleError);
		};

		/**
		 * Filters models on server side based on provided prams
		 * @abstract
		 * @param query CallExpression
		 * @return {any|*}
		 */
		API.prototype.filter = function (query) {
			return this.model
				.$collection()
				.$search(query)
				.$asPromise()
				.catch(handleError);
		};

		/**
		 * Deletes the model form the server
		 * @abstract
		 * @param model CallExpression
		 * @return {*}
		 */
		API.prototype.remove = function (model) {
			var def = $q.defer();

			if (_.isUndefined(model)) {
				$log.error('Parameter "model" must be defined');
				return def.reject();
			}

			// Display confirmation dialog
			$.SmartMessageBox({
				title: '<i class="fa fa-warning  txt-color-yellow"></i> ' +
				gettextCatalog.getString('Confirmation'),
				content: gettextCatalog.getString('Are you sure you want to remove item?'),
				buttons: '[' + gettextCatalog.getString('No') + '][' + gettextCatalog.getString('Yes') + ']'
			}, function (choice) {
				if (choice === gettextCatalog.getString('Yes')) {
					return model
						.$destroy()
						.$asPromise()
						.then(function () {
							appMessages.success('Removed ' + model.type);
							def.resolve();
						})
						.catch(handleError);
				} else {
					def.reject();
				}
			});

			return def.promise;
		};

		/**
		 * Persists the model on the server
		 * @abstract
		 * @param model CallExpression
		 * @return {*}
		 */
		API.prototype.save = function (model) {
			if (_.isUndefined(model)) {
				$log.error('Parameter "model" must be defined');
				return $q.reject();
			}

			if (!_.has(model, 'id')) {
				model = this.model.$build(model);
			}

			return model
				.$save()
				.$asPromise()
				.then(function (model) {
					appMessages.success('Created new ' + model.type);
					return model;
				})
				.catch(handleError);
		};

		/**
		 * Persists model nested as property collection
		 * @abstract
		 * @param model
		 * @param parentProperty CallExpression
		 * @return {*}
		 */
		API.prototype.saveNested = function (model, parentProperty) {
			if (_.isUndefined(model)) {
				$log.error('Parameter "model" must be defined');
				return $q.reject();
			}

			if (_.isUndefined(parentProperty)) {
				$log.error('Parameter "parentProperty" must be defined');
				return $q.reject();
			}

			return parentProperty
				.$create(model)
				.$asPromise()
				.then(function () {
					appMessages.success('Saved ' + model.type);
				})
				.catch(handleError);
		};

		/**
		 * Shows in browser error messages when error occurs
		 * @method handleError
		 * @memberOf app.BaseAPI
		 * @param response CallExpression
		 * @return {*|Array|Promise}
		 */
		function handleError(response) {
			appMessages.error({
				message: response.$response.data.message,
				boxType: appMessages.boxEnums.BIG,
				timeout: 10000
			});

			$log.error('Server error: ' + JSON.stringify(response.$response.data));

			return $q.reject(response);
		}

		return API;
	}

	module.registerFactory('BaseAPI', BaseAPI);
});
