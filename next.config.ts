import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static files in out/ for Cloudflare Pages.
  output: "export",
  // No image server on a static host; photos are already sized.
  images: { unoptimized: true },
};

export default nextConfig;
