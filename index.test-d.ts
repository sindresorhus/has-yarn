import {expectType} from 'tsd-check';
import hasYarn from '.';

expectType<boolean>(hasYarn());
expectType<boolean>(hasYarn('foo'));
