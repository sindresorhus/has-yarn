import test from 'ava';
import hasYarn from '.';

test('main', t => {
	t.true(hasYarn('./fixtures/proj-empty'));
	t.true(hasYarn('./fixtures/proj-yarn-lock'));
	t.false(hasYarn('./fixtures/proj-npm-lock'));
	t.false(hasYarn('./fixtures/proj-node_modules'));
});
