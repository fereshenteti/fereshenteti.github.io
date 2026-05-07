/**
 * Convert PNG/JPG images in public/assets to WebP in-place (replaces original).
 * Skips my_image_sequence (animation frames — keep as PNG for canvas compatibility).
 * Run: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, writeFile, unlink, rename } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '../public/assets');
const SKIP      = ['my_image_sequence'];
const EXTS      = new Set(['.png', '.jpg', '.jpeg']);

let totalBefore = 0;
let totalAfter  = 0;

/** @yields {string} absolute file paths */
async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP.includes(entry.name)) continue;
      yield* walk(full);
    } else if (EXTS.has(extname(entry.name).toLowerCase())) {
      yield full;
    }
  }
}

const kb   = (b) => `${(b / 1024).toFixed(0)} KB`;
const pct  = (b, a) => `${(((b - a) / b) * 100).toFixed(1)}%`;

async function convert(filePath) {
  const { size: before } = await stat(filePath);
  const dir  = dirname(filePath);
  const base = basename(filePath, extname(filePath));
  const dest = join(dir, `${base}.webp`);

  const buffer = await sharp(filePath)
    .webp({ quality: 85, effort: 6 })
    .toBuffer();

  await writeFile(dest, buffer);
  await unlink(filePath); // remove original

  const after = buffer.length;
  totalBefore += before;
  totalAfter  += after;

  const tag = after < before ? `✓ -${pct(before, after)}` : `– (larger, kept webp)`;
  console.log(`${tag}  ${filePath.replace(ROOT, '')}  ${kb(before)} → ${kb(after)}`);

  return { from: filePath, to: dest };
}

console.log('Converting images to WebP …\n');

const conversions = [];
for await (const file of walk(ROOT)) {
  const result = await convert(file);
  conversions.push(result);
}

const saved = totalBefore - totalAfter;
console.log(`\nDone. ${kb(totalBefore)} → ${kb(totalAfter)}  saved ${kb(saved)} (${pct(totalBefore, totalAfter)} total)`);

// Print the mapping so references can be updated
console.log('\nReferences to update:');
for (const { from, to } of conversions) {
  const rel = (p) => p.replace(join(__dirname, '../public'), '');
  console.log(`  ${rel(from)}  →  ${rel(to)}`);
}
