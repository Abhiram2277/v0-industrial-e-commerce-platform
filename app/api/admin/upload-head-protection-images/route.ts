/**
 * API Route to download and upload head protection images to Supabase
 * POST /api/admin/upload-head-protection-images
 * 
 * Requires admin authentication
 */

import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import https from "https";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const HEAD_PROTECTION_PRODUCTS = [
  {
    id: "hp-001",
    fileName: "thermoguard-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/06/thermoground-9000-serieis.jpg",
  },
  {
    id: "hp-002",
    fileName: "vista-helmet.jpg",
    imageUrl: "https://udyogisafety.com/wp-content/uploads/2020/01/Vista.jpg",
  },
  {
    id: "hp-003",
    fileName: "ultravent-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2024/01/Ultravent-7000.jpg",
  },
  {
    id: "hp-004",
    fileName: "fusion-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/02/200704-087-Fusion-Without-Belt-2048x2048.jpg",
  },
  {
    id: "hp-005",
    fileName: "electra-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/12/ELECTRA.jpg",
  },
  {
    id: "hp-006",
    fileName: "ultratuff-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/08/ULTRA-TUFF-2000.jpg",
  },
  {
    id: "hp-007",
    fileName: "bump-cap-blue.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/06/200702-040-Bump-Cap-Blue-2048x2048.jpg",
  },
  {
    id: "hp-008",
    fileName: "bump-cap-green.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/05/200702-037-Bump-Cap-FLOROSCENT-2048x2048.jpg",
  },
  {
    id: "hp-009",
    fileName: "fusion-pro-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/06/fusion-pro-3.jpg",
  },
  {
    id: "hp-010",
    fileName: "lighton-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/12/LIGHTON-231003-147_P.jpg",
  },
  {
    id: "hp-011",
    fileName: "lighton-es-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/05/200704-035-LightOn-ES-Without-Belt-2.jpg",
  },
  {
    id: "hp-012",
    fileName: "lighton-v-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/12/LightOn-V-%E2%80%93-Safety-Helmet.jpg",
  },
  {
    id: "hp-013",
    fileName: "ultra-pro-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/08/200704-032-Ultra-Pro-3000-Without-Belt-copy.jpg",
  },
  {
    id: "hp-014",
    fileName: "proton-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/08/proton.jpg",
  },
  {
    id: "hp-015",
    fileName: "prithvi-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2023/03/PRITHVI.jpg",
  },
  {
    id: "hp-016",
    fileName: "ultra-helmet.jpg",
    imageUrl:
      "https://udyogisafety.com/wp-content/uploads/2020/01/Ultra-5000-Series-2.jpg",
  },
];

function downloadImage(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 30000 }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      const chunks: Buffer[] = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => resolve(Buffer.concat(chunks)));
      response.on("error", reject);
    });
  });
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

    // Create bucket if it doesn't exist
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some((b) => b.name === "products");

    if (!bucketExists) {
      await supabase.storage.createBucket("products", { public: true });
    }

    const results = {
      successful: 0,
      failed: 0,
      errors: [] as string[],
      uploadedImages: [] as Array<{ id: string; url: string }>,
    };

    for (const product of HEAD_PROTECTION_PRODUCTS) {
      try {
        const imageBuffer = await downloadImage(product.imageUrl);
        const filePath = `head-protection/${product.fileName}`;

        const { error } = await supabase.storage
          .from("products")
          .upload(filePath, imageBuffer, {
            contentType: "image/jpeg",
            upsert: true,
          });

        if (error) {
          results.failed++;
          results.errors.push(`${product.id}: ${error.message}`);
        } else {
          results.successful++;
          results.uploadedImages.push({
            id: product.id,
            url: `${SUPABASE_URL}/storage/v1/object/public/products/${filePath}`,
          });
        }
      } catch (error) {
        results.failed++;
        results.errors.push(
          `${product.id}: ${error instanceof Error ? error.message : "Unknown error"}`
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: `Uploaded ${results.successful}/${HEAD_PROTECTION_PRODUCTS.length} images`,
      data: results,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
