'use strict';
const path = require('path');
const fs = require('fs');
const commandExistsSync = require('command-exists').sync;

const exist = (cwd, fileName) => fs.existsSync(path.resolve(cwd, fileName));

const hasYarn = (cwd = process.cwd()) => {
	let has = false;

	if (exist(cwd, 'yarn.lock')) {
		// * Already using yarn
		has = true;
	} else if (exist(cwd, 'package-lock.json')) {
		// * Already using npm
		has = false;
	} else if (exist(cwd, 'node_modules')) {
		// * If not, maybe `install` not runned
		// * If has node_modules by no lock, considering already using npm
		has = false;
	} else {
		// * If none of above, consider an empty project, check if yarn command exist
		has = commandExistsSync('yarn');
	}

	return has;
};

module.exports = hasYarn;
// TODO: Remove this for the next major release
module.exports.default = hasYarn;
