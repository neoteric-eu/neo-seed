define(['app'], function (module) {
	'use strict';

	/**
	 * Base interface for REST communication with server
	 * @constructor BaseAPI
	 * @param $q
	 * @param $log
	 * @param gettextCatalog {Object} Translation service
	 * @param appMessages
	 * @return {API}
	 */
	function BaseAPI($q, $log, gettextCatalog, appMessages) {

		/**
		 * API constructor takes model as a parameter
		 * @constructor
		 * @method API
		 * @param model
		 */
		function API(model) {
			if (_.isUndefined(model)) {
				throw 'Argument "model" must be defined';
			}

			this.model = model;
		}

		/**
		 * Fetches single model from server
		 * @method get
		 * @param {String|Array} ids
		 */
		API.prototype.get = function (ids) {
			if (!_.isString(ids) && !_.isArray(ids)) {
				$log.error('Parameter "id" must be String or Array');
				return $q.reject();
			}

			return this.model
				.$find(ids)
				.$asPromise()
				.catch(handleError);
		};

		/**
		 * Gets the list of models from the server
		 * @method fetch CallExpression
		 */
		API.prototype.fetch = function () {
			return Project
				.$collection()
				.$fetch()
				.$asPromise()
				.catch(handleError);
		};

		/**
		 * Filters models on server side based on provided prams
		 * @method filter
		 * @param query CallExpression
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
		 * @method remove
		 * @param model CallExpression
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
		 * @method save
		 * @param model CallExpression
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
				.then(function () {
					appMessages.success('Created new ' + model.type);
				})
				.catch(handleError);
		};

		/**
		 * Persists model nested as property collection
		 * @method saveNested
		 * @param model
		 * @param parentProperty CallExpression
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
		 * @param response CallExpression
		 */
		function handleError(response) {
			appMessages.error({
				message: response.$response.data.message,
				boxType: appMessages.boxEnums.BIG,
				timeout: 10000
			});

			return $q.reject(response);
		}

		return API;
	}

	module.registerFactory('BaseAPI', BaseAPI);
});
