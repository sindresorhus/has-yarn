import test from 'ava';
import hasYarn from './index.js';

test('main', t => {
	t.true(hasYarn('fixtures/bar'));
	t.false(hasYarn('fixtures/foo'));
	t.false(hasYarn());
});
