define(['app'], function (module) {
	'use strict';

	/**
	 * Base interface for augmenting enum functionality in app
	 * @class BaseEnum
	 * @interface
	 * @memberOf app
	 *
	 * @param $log
	 * @return Enum
	 */
	function BaseEnum($log) {

		/**
		 * Enum constructor
		 * @constructor
		 *
		 * @param enumerable
		 */
		var Enum = function (enumerable) {
			_.each(enumerable, function (value, key) {
				this[key] = value;
			}, this);

			Object.freeze(this);
		};

		/**
		 * Returns the enum object
		 * @abstract
		 * @method getEnumAsArray
		 */
		Enum.prototype.getEnumAsArray = function () {
			return _.toArray(this);
		};

		/**
		 * Return enum key based on provided object or its properties
		 * @abstract
		 * @method getKeyByValue
		 * @param value
		 */
		Enum.prototype.getKeyByValue = function (value) {
			if (!_.isObject(value)) {
				$log.error('Argument "value" must be Object!');
			}
			return _.findKey(this, value);
		};

		/**
		 * Return enum value based on provided key
		 * @abstract
		 * @method getValueByKey
		 * @param {string} key
		 */
		Enum.prototype.getValueByKey = function (key) {
			if (_.isString(key)) {
				key = key.toUpperCase();
			} else {
				$log.error('Argument "key" must be a String!');
			}

			var value = this[key];
			if (_.isUndefined(value)) {
				$log.error('Could not find object with key: ', key);
			} else {
				return value;
			}
		};

		return Enum;
	}

	module.registerFactory('BaseEnum', BaseEnum);
});
