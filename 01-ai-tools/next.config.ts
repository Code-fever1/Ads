import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/llms.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/compare/cursor-vs-claude",
        destination: "/compare/cursor-vs-claude-code",
        permanent: true,
      },
      {
        source: "/categories/code",
        destination: "/categories/coding",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
