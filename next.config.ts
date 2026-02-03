import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-personal-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
