import sharp from "sharp"
import pngToIco from "png-to-ico"
import { writeFile } from "node:fs/promises"

const SRC = "/tmp/pnd-src.png"

// 1) Load source, make near-white pixels transparent so the logo sits cleanly
//    on any background (browser tabs, dark search results, etc.)
const base = sharp(SRC).ensureAlpha()
const { data, info } = await base.raw().toBuffer({ resolveWithObject: true })
const { width, height, channels } = info
const out = Buffer.from(data)
for (let i = 0; i < out.length; i += channels) {
  const r = out[i]
  const g = out[i + 1]
  const b = out[i + 2]
  // Treat near-white as background -> fully transparent.
  if (r > 240 && g > 240 && b > 240) {
    out[i + 3] = 0
  }
}

// Rebuild an RGBA png, then trim the transparent border so we can control padding.
const transparentPng = await sharp(out, { raw: { width, height, channels } })
  .png()
  .toBuffer()

const trimmed = await sharp(transparentPng)
  .trim({ threshold: 10 })
  .toBuffer()

// Helper: place the trimmed logo (FULL logo — helmet + "PND" text, unchanged)
// centered on a square canvas with a solid WHITE background, filling ~85-90%
// of the canvas (small padding) so it reads clearly at favicon sizes.
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 }
async function square(size, { paddingRatio = 0.06 } = {}) {
  const inner = Math.round(size * (1 - paddingRatio * 2))
  const logo = await sharp(trimmed)
    .resize(inner, inner, { fit: "contain", background: WHITE })
    .toBuffer()
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: WHITE,
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .flatten({ background: WHITE })
    .png()
    .toBuffer()
}

// 2) 512x512 app icon — solid white background, logo fills ~88% of canvas
const icon512 = await square(512, { paddingRatio: 0.06 })
await writeFile("app/icon.png", icon512)

// 3) 180x180 apple icon — solid white background, logo fills ~88% of canvas
const apple = await square(180, { paddingRatio: 0.06 })
await writeFile("app/apple-icon.png", apple)

// 4) favicon.ico multi-resolution (16/32/48) — solid white background,
//    slightly less padding at the smallest size so the mark stays legible.
const ico16 = await square(16, { paddingRatio: 0.04 })
const ico32 = await square(32, { paddingRatio: 0.05 })
const ico48 = await square(48, { paddingRatio: 0.06 })
const ico = await pngToIco([ico16, ico32, ico48])
await writeFile("app/favicon.ico", ico)

// Also refresh the public PNG copies used by manifest / structured data.
await writeFile("public/icon-512x512.png", icon512)
await writeFile("public/icon-192x192.png", await square(192, { paddingRatio: 0.06 }))

console.log("[v0] icons generated: app/icon.png, app/apple-icon.png, app/favicon.ico, public/icon-*.png")
