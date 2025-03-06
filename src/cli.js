#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';

function usage() {
  console.log(`Usage: ocr2md <image> [-o output.md]\n\nConverts an image to Markdown (stub).`);
}

function convertImageToMarkdownStub(inputPath) {
  const name = basename(inputPath);
  return `# OCR Result for ${name}\n\n> OCR not wired yet. Placeholder output.`;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    usage();
    process.exit(0);
  }
  const inPath = args[0];
  const outIdx = args.indexOf('-o');
  const outPath = outIdx !== -1 ? args[outIdx + 1] : `${inPath}.md`;

  // touch read to mimic IO and catch ENOENT early
  try { readFileSync(inPath); } catch (e) { 
    console.error(`Input not found: ${inPath}`);
    process.exit(2);
  }

  const md = convertImageToMarkdownStub(inPath);
  writeFileSync(outPath, md);
  console.log(`Wrote ${outPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });

