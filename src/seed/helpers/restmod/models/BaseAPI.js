define(['seed/module'], function (module) {
	'use strict';

	/**
	 * Base interface for REST communication with server
	 * @interface
	 * @memberOf seed
	 *
	 * @param $q {Object} AngularJS promise object
	 * @param $log {Object} Logging provider
	 * @param gettextCatalog {Object} Translation service
	 * @param appMessages {Object} Browser notifications wrapper
	 * @return {Object} REST interface for Restmod models
	 */
	function BaseAPI($q, $log, gettextCatalog, appMessages) {
		$log = $log.getInstance('seed.BaseAPI');

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

			$log.debug('Model "' + this.model.name + '" constructed BaseAPI instance');
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

			$log.debug('Model "' + this.model.name + '" called BaseAPI "build" method with params: ' +
				JSON.stringify(initValues));

			return this.model.$build(initValues);
		};

		/**
		 * Fetches single model from server
		 * @abstract
		 * @param {String|Array} ids
		 * @param params {Object} Query parameters
		 * @return {*}
		 */
		API.prototype.get = function (ids, params) {
			if (!_.isString(ids) && !_.isArray(ids)) {
				$log.error('Parameter "id" must be String or Array');
				return $q.reject();
			}

			$log.debug('Model "' + this.model.name + '" called BaseAPI "get" method with ID: ' +
				JSON.stringify(ids) + ' and params: ' +
				JSON.stringify(params));

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

			$log.debug('Model "' + this.model.name + '" called BaseAPI "fetch" method');

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

			$log.debug('Model "' + this.model.name + '" called BaseAPI "filter" method with params: ' +
				JSON.stringify(query));

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
			//noinspection JSUnresolvedFunction
			$.SmartMessageBox({
				title: '<i class="fa fa-warning text-warning"></i> ' +
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

			$log.debug('Model "' +
				this.model.name +
				'" called BaseAPI "remove" method to remove model with ID: ' + model.id);

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

				$log.debug('Model "' +
					this.model.name +
					'" called BaseAPI "save" method to create new model');
			} else {
				$log.debug('Model "' +
					this.model.name +
					'" called BaseAPI "save" method to update model');
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

		//noinspection JSUnusedGlobalSymbols
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


			$log.debug('Model "' + this.model.name + '" called BaseAPI "save" method to create model: ' +
				JSON.stringify(model) + ' for parent property: ' +
				JSON.stringify(parentProperty));

			return parentProperty
				.$create(model)
				.$asPromise()
				.then(function () {
					appMessages.success('Saved ' + model.type);
				})
				.catch(handleError);
		};

		//noinspection JSValidateJSDoc
		/**
		 * Shows in browser error messages when error occurs
		 * @method handleError
		 * @memberOf app.BaseAPI
		 * @param response CallExpression
		 * @return {*|Promise|Array}
		 */
		function handleError(response) {
			var responseObj = response.$response.data || response.$response;
			appMessages.error({
				message: responseObj.message,
				boxType: appMessages.boxEnums.BIG,
				timeout: 10000
			});

			$log.error('Server error: ' + JSON.stringify(responseObj));

			return $q.reject(responseObj);
		}

		return API;
	}

	module.factory('BaseAPI', BaseAPI);
});
