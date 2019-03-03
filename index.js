'use strict';
const {isYarnInstalled, isValidOptions, isYarnUsed} = require('./lib/lib');

function hasYarn(...args) {
	if (args.length > 1) {
		throw new Error(`Invalid parameter: ${args[1]}`);
	}

	if (['string', 'object', 'undefined'].lastIndexOf(typeof args[0]) === -1) {
		throw new Error(`Invalid parameter type.\nType ${typeof args[0]} is not supported.`);
	}

	if (typeof args[0] === 'string' || typeof args[0] === 'undefined') {
		const cwd = args[0];
		return isYarnUsed(cwd);
	}

	if (typeof args[0] === 'object') {
		const options = args[0];
		isValidOptions(options);
		if (options.onMachine) {
			return isYarnInstalled();
		}

		return hasYarn();
	}
}

module.exports = hasYarn;
