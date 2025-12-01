import type { MetadataRoute } from "next";

// biome-ignore lint/style/noDefaultExport: NextJS
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: "https://koding.dev/sitemap.xml",
  };
}
