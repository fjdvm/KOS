import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["database", "auth", "validation"],
};

export default nextConfig;
