import createBundleAnalyzer from "@next/bundle-analyzer";
import { withPostHogConfig } from "@posthog/nextjs-config";
import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants.js";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { env } from "@/env.config";

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

let nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    deviceSizes: [384, 640, 768, 1024, 1280, 1536, 1920],
    formats: ["image/webp"],
    // One month
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: "https://us-assets.i.posthog.com/static/:path*",
        source: "/ingest/static/:path*",
      },
      {
        destination: "https://us.i.posthog.com/:path*",
        source: "/ingest/:path*",
      },
      {
        destination: "https://us.i.posthog.com/decide",
        source: "/ingest/decide",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  staticPageGenerationTimeout: 300,
};

nextConfig = withBundleAnalyzer(nextConfig);

if (env.POSTHOG_API_KEY && env.POSTHOG_ENV_ID) {
  nextConfig = withPostHogConfig(nextConfig, {
    personalApiKey: env.POSTHOG_API_KEY, // Personal API Key
    envId: env.POSTHOG_ENV_ID, // Environment ID
    host: env.NEXT_PUBLIC_POSTHOG_HOST, // (optional), defaults to https://us.posthog.com
    sourcemaps: {
      enabled: true, // Enable sourcemaps generation and upload, default to true on production builds
      deleteAfterUpload: false, // Delete sourcemaps after upload, defaults to true
    },
  });
}

export default (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isBuild = phase === PHASE_PRODUCTION_BUILD;
  if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = "1";
    import("velite").then((m) => m.build({ watch: isDev, clean: !isDev }));
  }

  return nextConfig;
};
