import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  test: /\.svg$/,
      use: ["@svgr/webpack"],
};

export default nextConfig;
