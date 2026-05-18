import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow any local images in the /public folder
    unoptimized: false,
  },
  // Allow images from external sources if needed later
  experimental: {},
};

export default nextConfig;
