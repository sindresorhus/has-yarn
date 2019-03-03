import test from 'ava';
import {isYarnInstalled} from './lib/lib';
import hasYarn from '.';

test('main', t => {
	t.true(hasYarn('fixtures/bar'));
	t.false(hasYarn('fixtures/foo'));
	t.false(hasYarn());
	const invlaidParamType = 123456789;
	const invalidParamtypeError = t.throws(() => hasYarn(invlaidParamType));
	t.is(invalidParamtypeError.message, `Invalid parameter type.\nType ${typeof invlaidParamType} is not supported.`);
	const invalidParamsError = t.throws(() => hasYarn('param1', 'param2', 'param3'));
	t.is(invalidParamsError.message, 'Invalid parameter: param2');
	const invalidOptionsError = t.throws(() => hasYarn({key1: 'val-1', key2: 'val-2', key3: 'val-3'}));
	t.is(invalidOptionsError.message, 'Invalid options object');
	t.is(hasYarn({onMachine: true}), isYarnInstalled());
});
