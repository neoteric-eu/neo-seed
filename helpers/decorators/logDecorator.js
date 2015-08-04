define(['angular', 'moment', 'seed/module'], function (ng, moment, module) {
	'use strict';

	/**
	 * Enhance the logger object by adding date and path to calling module
	 * @memberOf seed
	 *
	 * @param $delegate Reference to original $log object
	 * @returns {*}
	 */
	function $log($delegate) {
		$delegate.getInstance = getInstance;

		function getInstance(name) {
			var className = _.isUndefined(name) ? '' : name + ' :: ';
			var logInstance = ng.copy($delegate);

			function decorate(logFn, className) {
				return function () {
					var args = [].slice.call(arguments),
						now = moment().format('YYYY-MM-DD HH:mm:ss');

					args[0] = [null, now + ' - ' + className, args[0]].join('');

					return logFn.apply(null, args);
				};
			}

			_.assign(logInstance, {
				log: decorate($delegate.log, className),
				info: decorate($delegate.info, className),
				debug: decorate($delegate.debug, className),
				error: decorate($delegate.error, className)
			});

			return logInstance;
		}

		return $delegate;
	}

	module.decorator('$log', $log);
});
