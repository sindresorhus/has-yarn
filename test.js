import path from 'node:path';
import process from 'node:process';
import test from 'ava';
import hasYarn from './index.js';

test('detects yarn.lock in direct directory', t => {
	t.true(hasYarn('fixtures/bar'));
});

test('returns false when no yarn.lock exists', t => {
	t.false(hasYarn('fixtures/foo'));
});

test('uses current working directory by default', t => {
	t.false(hasYarn());
});

test('detects yarn.lock in parent workspace root', t => {
	t.true(hasYarn('fixtures/workspace-root/packages/a'));
});

test('detects yarn.lock in deeply nested workspace', t => {
	t.true(hasYarn('fixtures/deep/nested/workspace/packages/sub-package'));
});

test('handles absolute paths', t => {
	const absolutePath = path.resolve('fixtures/bar');
	t.true(hasYarn(absolutePath));
});

test('handles non-existent directory gracefully', t => {
	t.false(hasYarn('fixtures/non-existent-directory'));
});

test('returns false for root directory', t => {
	const {root} = path.parse(process.cwd());
	t.false(hasYarn(root));
});

test('handles relative paths with ./', t => {
	t.true(hasYarn('./fixtures/bar'));
});

test('handles relative paths with ../', t => {
	t.true(hasYarn('fixtures/workspace-root/packages/../packages/a'));
});
