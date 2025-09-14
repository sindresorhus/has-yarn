import process from 'node:process';
import {findUpSync} from 'find-up-simple';

export default function hasYarn(cwd = process.cwd()) {
	return Boolean(findUpSync('yarn.lock', {cwd}));
}
