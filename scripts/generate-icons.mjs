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

// Helper: place the trimmed logo centered on a square canvas with padding.
async function square(size, { background, paddingRatio = 0.14 } = {}) {
  const inner = Math.round(size * (1 - paddingRatio * 2))
  const logo = await sharp(trimmed)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer()
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer()
}

// 2) 512x512 transparent app icon
const icon512 = await square(512, { paddingRatio: 0.12 })
await writeFile("app/icon.png", icon512)

// 3) 180x180 apple icon — iOS ignores transparency (renders black), so use a
//    white rounded-safe background for a crisp home-screen tile.
const apple = await square(180, { background: { r: 255, g: 255, b: 255, alpha: 1 }, paddingRatio: 0.12 })
await writeFile("app/apple-icon.png", apple)

// 4) favicon.ico multi-resolution (16/32/48) from transparent squares
const ico16 = await square(16, { paddingRatio: 0.06 })
const ico32 = await square(32, { paddingRatio: 0.08 })
const ico48 = await square(48, { paddingRatio: 0.1 })
const ico = await pngToIco([ico16, ico32, ico48])
await writeFile("app/favicon.ico", ico)

// Also refresh the public PNG copies used by manifest / structured data.
await writeFile("public/icon-512x512.png", icon512)
await writeFile("public/icon-192x192.png", await square(192, { paddingRatio: 0.12 }))

console.log("[v0] icons generated: app/icon.png, app/apple-icon.png, app/favicon.ico, public/icon-*.png")
