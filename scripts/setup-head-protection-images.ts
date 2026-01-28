/**
 * Script to download Udyogi head protection product images and upload to Supabase
 * Run with: npx tsx scripts/setup-head-protection-images.ts
 */

import { createClient } from "@supabase/supabase-js";
import https from "https";
import fs from "fs";
import path from "path";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error(
    "Missing Supabase credentials. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY"
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Head protection products with their Udyogi image URLs
const HEAD_PROTECTION_PRODUCTS = [
  {
    id: "hp-001",
    name: "Thermoguard Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/06/thermoground-9000-serieis.jpg",
    fileName: "thermoguard-helmet.jpg",
  },
  {
    id: "hp-002",
    name: "Vista Safety Helmet",
    imageUrl: "https://udyogisafety.com/wp-content/uploads/2020/01/Vista.jpg",
    fileName: "vista-helmet.jpg",
  },
  {
    id: "hp-003",
    name: "Ultravent Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2024/01/Ultravent-7000.jpg",
    fileName: "ultravent-helmet.jpg",
  },
  {
    id: "hp-004",
    name: "Fusion Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/02/200704-087-Fusion-Without-Belt-2048x2048.jpg",
    fileName: "fusion-helmet.jpg",
  },
  {
    id: "hp-005",
    name: "Electra Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/12/ELECTRA.jpg",
    fileName: "electra-helmet.jpg",
  },
  {
    id: "hp-006",
    name: "UltraTuff Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/08/ULTRA-TUFF-2000.jpg",
    fileName: "ultratuff-helmet.jpg",
  },
  {
    id: "hp-007",
    name: "Bump Cap - Blue",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/06/200702-040-Bump-Cap-Blue-2048x2048.jpg",
    fileName: "bump-cap-blue.jpg",
  },
  {
    id: "hp-008",
    name: "Bump Cap - Green",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/05/200702-037-Bump-Cap-FLOROSCENT-2048x2048.jpg",
    fileName: "bump-cap-green.jpg",
  },
  {
    id: "hp-009",
    name: "Fusion Pro Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/06/fusion-pro-3.jpg",
    fileName: "fusion-pro-helmet.jpg",
  },
  {
    id: "hp-010",
    name: "Lighton Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/12/LIGHTON-231003-147_P.jpg",
    fileName: "lighton-helmet.jpg",
  },
  {
    id: "hp-011",
    name: "Lighton ES Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/05/200704-035-LightOn-ES-Without-Belt-2.jpg",
    fileName: "lighton-es-helmet.jpg",
  },
  {
    id: "hp-012",
    name: "Lighton V Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/12/LightOn-V-%E2%80%93-Safety-Helmet.jpg",
    fileName: "lighton-v-helmet.jpg",
  },
  {
    id: "hp-013",
    name: "Ultra Pro Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/08/200704-032-Ultra-Pro-3000-Without-Belt-copy.jpg",
    fileName: "ultra-pro-helmet.jpg",
  },
  {
    id: "hp-014",
    name: "Proton Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/08/proton.jpg",
    fileName: "proton-helmet.jpg",
  },
  {
    id: "hp-015",
    name: "Prithvi Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/03/PRITHVI.jpg",
    fileName: "prithvi-helmet.jpg",
  },
  {
    id: "hp-016",
    name: "Ultra Safety Helmet",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/01/Ultra-5000-Series-2.jpg",
    fileName: "ultra-helmet.jpg",
  },
  {
    id: "hp-017",
    name: "UI 1211 Safety Helmet",
    imageUrl: "/images/products/ui-1211-helmet.jpg", // Already local
    fileName: "ui-1211-helmet.jpg",
    isLocal: true,
  },
];

// Download image from URL
function downloadImage(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks: Buffer[] = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => resolve(Buffer.concat(chunks)));
      response.on("error", reject);
    });
  });
}

// Main function
async function setupHeadProtectionImages() {
  console.log("🚀 Starting head protection image setup...\n");

  // Create products bucket if it doesn't exist
  console.log("📦 Ensuring Supabase storage bucket exists...");
  const { data: buckets } = await supabase.storage.listBuckets();
  const productsBucketExists = buckets?.some((b) => b.name === "products");

  if (!productsBucketExists) {
    const { error } = await supabase.storage.createBucket("products", {
      public: true,
    });
    if (error) {
      console.error("❌ Error creating bucket:", error.message);
      return;
    }
    console.log("✅ Created 'products' bucket\n");
  } else {
    console.log("✅ Products bucket already exists\n");
  }

  // Upload each image
  let successCount = 0;
  let failureCount = 0;

  for (const product of HEAD_PROTECTION_PRODUCTS) {
    try {
      console.log(
        `⏳ Processing: ${product.name} (${product.id})...`
      );

      let imageBuffer: Buffer;

      if (product.isLocal) {
        // Skip local images
        console.log(
          `   ⏭️  Skipping (already local)\n`
        );
        successCount++;
        continue;
      }

      // Download image
      console.log(`   📥 Downloading from Udyogi...`);
      imageBuffer = await downloadImage(product.imageUrl);

      // Upload to Supabase
      console.log(`   📤 Uploading to Supabase...`);
      const filePath = `head-protection/${product.fileName}`;

      const { error } = await supabase.storage
        .from("products")
        .upload(filePath, imageBuffer, {
          contentType: "image/jpeg",
          upsert: true,
        });

      if (error) {
        console.error(`   ❌ Upload failed:`, error.message);
        failureCount++;
      } else {
        const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/products/${filePath}`;
        console.log(`   ✅ Successfully uploaded`);
        console.log(`   URL: ${publicUrl}\n`);
        successCount++;
      }
    } catch (error) {
      console.error(
        `   ❌ Error processing ${product.name}:`,
        error instanceof Error ? error.message : error
      );
      failureCount++;
    }
  }

  console.log("\n📊 Summary:");
  console.log(`   ✅ Successful: ${successCount}`);
  console.log(`   ❌ Failed: ${failureCount}`);
  console.log(`   📋 Total: ${HEAD_PROTECTION_PRODUCTS.length}\n`);

  // Generate SQL update statement
  console.log("📝 Generated SQL for updating products table:\n");
  console.log("-- Update product image URLs to Supabase");
  for (const product of HEAD_PROTECTION_PRODUCTS) {
    if (!product.isLocal) {
      const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/products/head-protection/${product.fileName}`;
      console.log(
        `UPDATE products SET image_url = '${publicUrl}' WHERE id = '${product.id}';`
      );
    }
  }

  console.log("\n✨ Setup complete!");
}

setupHeadProtectionImages().catch(console.error);
