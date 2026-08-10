import test from 'node:test';
import assert from 'node:assert/strict';
import { parseHeader } from '../lib/parse-header.mjs';

test('empty header returns null instead of throwing', () => {
  assert.equal(parseHeader(''), null);
});