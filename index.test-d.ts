import {expectType} from 'tsd';
import hasYarn = require('.');

expectType<boolean>(hasYarn());
expectType<boolean>(hasYarn('foo'));
