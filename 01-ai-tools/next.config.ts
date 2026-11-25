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
        source: "/compare/cursor-vs-windsurf",
        destination: "/compare/windsurf-vs-cursor",
        permanent: true,
      },
      {
        source: "/compare/chatgpt-vs-gemini",
        destination: "/compare/gemini-vs-chatgpt",
        permanent: true,
      },
      {
        source: "/compare/lovable-vs-bolt",
        destination: "/compare/lovable-vs-bolt-new",
        permanent: true,
      },
      {
        source: "/categories/code",
        destination: "/categories/coding",
        permanent: true,
      },
      {
        source: "/categories/ai-coding-tools",
        destination: "/categories/coding",
        permanent: true,
      },
      {
        source: "/categories/ai-writing-tools",
        destination: "/categories/writing",
        permanent: true,
      },
      {
        source: "/categories/ai-image-tools",
        destination: "/categories/image",
        permanent: true,
      },
      {
        source: "/categories/ai-video-tools",
        destination: "/categories/video",
        permanent: true,
      },
      {
        source: "/categories/ai-audio-voice-tools",
        destination: "/categories/audio",
        permanent: true,
      },
      {
        source: "/categories/ai-design-tools",
        destination: "/categories/design",
        permanent: true,
      },
      {
        source: "/categories/ai-productivity-tools",
        destination: "/categories/productivity",
        permanent: true,
      },
      {
        source: "/categories/ai-automation-tools",
        destination: "/categories/automation",
        permanent: true,
      },
      {
        source: "/best/best-ai-coding-tools",
        destination: "/best/ai-coding-tools",
        permanent: true,
      },
      {
        source: "/best/best-ai-writing-tools",
        destination: "/best/ai-writing-tools",
        permanent: true,
      },
      {
        source: "/best/best-ai-image-generators",
        destination: "/best/ai-image-generators",
        permanent: true,
      },
      {
        source: "/best/best-free-ai-tools",
        destination: "/best/free-ai-tools",
        permanent: true,
      },
      {
        source: "/best/best-ai-tools-for-developers",
        destination: "/best/ai-tools-for-developers",
        permanent: true,
      },
      {
        source: "/guides",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/guides/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/affiliate-disclosure",
        destination: "/disclosure",
        permanent: true,
      },
      {
        source: "/submit-tool",
        destination: "/submit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
