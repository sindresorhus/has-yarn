import test from 'ava';
import {sync as commandExistsSync} from 'command-exists';
import hasYarn from '.';

const hasYarnCommand = commandExistsSync('yarn');

test('main', t => {
	t.is(hasYarn('./fixtures/proj-empty'), hasYarnCommand);
	t.is(hasYarn('./fixtures/proj-package_json'), hasYarnCommand);
	t.true(hasYarn('./fixtures/proj-yarn-lock'));
	t.false(hasYarn('./fixtures/proj-npm-lock'));
	t.false(hasYarn('./fixtures/proj-node_modules'));
});
