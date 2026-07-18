import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers image optimization requires the paid Cloudflare
  // Images product (via the "images" binding in wrangler.jsonc). Left
  // disabled for now rather than enabling a billable resource without
  // confirmation — images still work via next/image, just unresized.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
