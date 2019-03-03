const path = require('path');
const fs = require('fs');
const {exec} = require('shelljs');

/**
 * Checks whether yarn is installed on the machine or not.
 * @returns {boolean} true if yarn is installed on the machine otherwise false.
 */
function isYarnInstalled() {
	const yarnVersion = exec('yarn --version', {silent: true}).stdout.trim();
	return /^(\d+)((\.{1}\d+)*)(\.{0})$/.test(yarnVersion);
}

/**
 * Checks whether yarn is used in a project or not.
 *
 * @param {string} cwd project's path where you want to check if yarn is used,
 * if undefined process current working directory will be used.
 * @returns {Boolean} true if yarn is used.
 */
function isYarnUsed(cwd) {
	return fs.existsSync(path.resolve(cwd || process.cwd(), 'yarn.lock'));
}

/**
 * Validates hasYarn options object.
 * @param {Object} options - hasYarn options object.
 * @param {boolean} options.onMachine - set it to true to check whether yarn is installed on the machine or not.
 * @returns {undefined} if valid returns nothing/undefined otherwise will throw errors for invalid options.
 */
function isValidOptions(options) {
	// Currently support only one option: options['onMachine']
	if (Object.keys(options).length > 1 || typeof options.onMachine !== 'boolean') {
		throw new Error('Invalid options object');
	}
}

module.exports = {isYarnInstalled, isValidOptions, isYarnUsed};
