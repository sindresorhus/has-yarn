'use strict';
const path = require('path');
const fs = require('fs');

const hasYarn = cwd => fs.existsSync(path.resolve(cwd || process.cwd(), 'yarn.lock'));

module.exports = hasYarn;
module.exports.default = hasYarn;
