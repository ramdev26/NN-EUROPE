/**
 * Turns flat black / near-black frame pixels transparent while keeping
 * navy + gold in the seal (they have higher channel spread or higher max).
 */
import sharp from 'sharp';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const logoPath = path.join(root, 'public', 'logo.png');

const MAXV = 26; // max(R,G,B) below this → candidate for removal
const SPREAD = 20; // max - min above this → keep (navy / gold)

async function main() {
  const input = await readFile(logoPath);
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (channels !== 4) throw new Error('Expected RGBA');

  const px = new Uint8Array(data);
  for (let i = 0; i < px.length; i += 4) {
    const r = px[i];
    const g = px[i + 1];
    const b = px[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (max < MAXV && max - min < SPREAD) {
      px[i + 3] = 0;
    }
  }

  const out = await sharp(Buffer.from(px), {
    raw: { width, height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();

  await writeFile(logoPath, out);
  console.log('Updated public/logo.png with transparent background.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
