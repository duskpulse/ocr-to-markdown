import test from 'node:test'
import assert from 'node:assert/strict'
import { toMarkdown } from '../src/ocr.js'

test('toMarkdown keeps content and newline', () => {
  const md = toMarkdown('hello');
  assert.equal(md, 'hello\n');
});
