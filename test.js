import test from 'ava';
import m from './';

test(t => {
	t.true(m('fixtures/bar'));
	t.false(m('fixtures/foo'));
	t.false(m());
});
