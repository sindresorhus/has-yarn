import {expectType} from 'tsd';
import hasYarn from './index.js';

expectType<boolean>(hasYarn());
expectType<boolean>(hasYarn('foo'));
