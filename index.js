'use strict';

const path = require('path');

module.exports = function () {
	const isWindows = process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';
	const yarnPath = isWindows ? path.join('Yarn', 'config', 'global') : path.join('.config', 'yarn', 'global');
	if (process.cwd().includes(yarnPath)) {
		return true;
	}
	return false;
};
