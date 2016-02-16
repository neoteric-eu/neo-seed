// jshint ignore: start
define(function () {

	/**
	 * JSON.stringify, but doesn't throw on circular references
	 * @param obj
	 * @param replacer
	 * @param spaces
	 */
	function stringify(obj, replacer, spaces) {
		return JSON.stringify(obj, serializer(replacer), spaces)
	}

	function serializer(replacer) {
		var stack = [], keys = [];

		var cycleReplacer = function (key, value) {
			if (stack[0] === value) return "[Circular ~]";
			return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
		};

		return function (key, value) {
			if (stack.length > 0) {
				var thisPos = stack.indexOf(this);
				~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
				~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
				if (~stack.indexOf(value)) {
					value = cycleReplacer.call(this, key, value);
				}
			}
			else {
				stack.push(value);
			}

			return replacer == null ? value : replacer.call(this, key, value);
		}
	}

	return {
		stringify: stringify
	};

});

