import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages のリポジトリ名に合わせて変更してください
  // basePath: "/research-website",
};

export default nextConfig;
