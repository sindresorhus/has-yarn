import { expectType } from 'tsd';
import hasYarn = require('.');

expectType<boolean>(hasYarn('./fixtures/proj-empty'));
expectType<boolean>(hasYarn('./fixtures/proj-yarn-lock'));
expectType<boolean>(hasYarn('./fixtures/proj-npm-lock'));
expectType<boolean>(hasYarn('./fixtures/proj-node_modules'));
