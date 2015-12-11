define(function () {
	'use strict';

	/**
	 * JSON.stringify, but doesn't throw on circular references
	 */
	function stringify(obj, replacer, spaces) {
		return JSON.stringify(obj, serializer(replacer), spaces);
	}

	function serializer(replacer) {
		var stack = [], keys = [];

		var cycleReplacer = function (key, value) {
			if (stack[0] === value) {
				return '[Circular ~]';
			}
			return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
		};

		return function (key, value) {
			if (stack.length > 0) {
				var thisPos = stack.indexOf(this);

				if (thisPos) {
					stack.push(this);
					keys.push(key);
				} else {
					stack.splice(thisPos + 1);
					keys.splice(thisPos, Infinity, key);
				}

				if (!stack.indexOf(value)) {
					value = cycleReplacer.call(this, key, value);
				}
			}
			else {
				stack.push(value);
			}

			if (replacer) {
				return replacer.call(this, key, value);
			}

			return value;
		};
	}

	return {
		stringify: stringify
	};

});

