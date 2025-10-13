import type { MetadataRoute } from "next";
import { allArtists, allClients } from "@/lib/content";

const BASE_URL = "https://koding.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home
    {
      changeFrequency: "monthly",
      priority: 1,
      url: BASE_URL,
    },
    // Clients
    {
      changeFrequency: "monthly",
      priority: 0.8,
      url: `${BASE_URL}/clients`,
    },
    ...allClients.map(
      (client) =>
        ({
          changeFrequency: "monthly",
          priority: 0.7,
          url: `${BASE_URL}/clients/${client.slug}`,
        }) satisfies MetadataRoute.Sitemap[0]
    ),
    // Art
    {
      changeFrequency: "monthly",
      priority: 0.6,
      url: `${BASE_URL}/art`,
    },
    ...allArtists.flatMap((artist) =>
      artist.commissions.map(
        (commission) =>
          ({
            changeFrequency: "monthly",
            priority: 0.5,
            url: `${BASE_URL}/art/${artist.slug}/${commission.slug}`,
          }) satisfies MetadataRoute.Sitemap[0]
      )
    ),
  ];
}
