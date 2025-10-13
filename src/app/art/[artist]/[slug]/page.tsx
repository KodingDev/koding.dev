import type { Metadata, Route } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaTwitter } from "react-icons/fa";
import { IconLink } from "@/components/interactive/IconLink";
import { SiteLink } from "@/components/interactive/Link";
import { allArtists } from "@/lib/content";

export async function generateStaticParams() {
  return allArtists.flatMap((artist) =>
    artist.commissions.map((commission) => ({ artist: artist.slug, slug: commission.slug }))
  );
}

export async function generateMetadata({ params }: PageProps<"/art/[artist]/[slug]">): Promise<Metadata> {
  const { artist: artistSlug, slug } = await params;
  const artist = allArtists.find((a) => a.slug === artistSlug);
  if (!artist) notFound();

  const commission = artist.commissions.find((c) => c.slug === slug);
  if (!commission) notFound();

  return {
    title: commission.title,
    description: commission.description || "",
    openGraph: {
      images: commission.images.length > 0 ? [{ url: commission.images[0]!.src, alt: "Illustration" }] : [],
    },
    twitter: {
      card: "summary_large_image",
      images: commission.images.length > 0 ? [commission.images[0]!.src] : [],
    },
  };
}

export default async function CommissionPage({ params }: PageProps<"/art/[artist]/[slug]">) {
  const { artist: artistSlug, slug } = await params;
  const artist = allArtists.find((a) => a.slug === artistSlug);
  if (!artist) notFound();

  const commission = artist.commissions.find((c) => c.slug === slug);
  if (!commission) notFound();

  return (
    <div className="layout-container pt-40 pb-36">
      <div className="flex flex-col gap-6">
        <SiteLink type="back" href="/art" className="opacity-50">
          Back to all commissions
        </SiteLink>
        <SiteLink
          href={artist.link as Route}
          picture={artist.avatar ? { src: artist.avatar } : undefined}
          className="text-white/50"
          picClass="size-6 rounded-md"
        >
          By {artist.name}
        </SiteLink>

        {/* Title */}
        <h1 className="font-bold text-5xl">{commission.title}</h1>

        {/* Description */}
        {commission.description && <p className="opacity-50">{commission.description}</p>}

        {/* Links */}
        {commission.links && commission.links.length > 0 && (
          <div className="flex flex-row gap-4">
            {commission.links.map((link) => (
              <IconLink key={link.href} href={link.href as Route} icon={FaTwitter}>
                {link.text}
              </IconLink>
            ))}
          </div>
        )}

        {/* Images */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {commission.images.map((image, idx) => (
            <Image
              // biome-ignore lint/suspicious/noArrayIndexKey: Needed
              key={idx}
              src={image}
              alt={commission.title}
              width={800}
              height={800}
              className="rounded-md object-cover object-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
