import type { Metadata, Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { FaTwitter } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { IconLink } from "@/components/interactive/icon-link";
import { allArtists } from "@/lib/content";

export function generateStaticParams() {
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
    <div className="pt-12 pb-36">
      <Link
        href="/art"
        className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <MdArrowBack className="size-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm">Art</span>
      </Link>

      <div className="mt-8 flex flex-col gap-4">
        {artist.avatar && (
          <Link
            href={artist.link as Route}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Image src={artist.avatar} alt="" width={20} height={20} className="size-5 rounded" />
            <span>By {artist.name}</span>
          </Link>
        )}

        <h1 className="font-serif text-4xl tracking-tight italic sm:text-5xl">{commission.title}</h1>

        {commission.description && (
          <p className="max-w-xl leading-relaxed text-muted-foreground">{commission.description}</p>
        )}

        {commission.links && commission.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {commission.links.map((link) => (
              <IconLink key={link.href} href={link.href as Route} icon={FaTwitter}>
                {link.text}
              </IconLink>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {commission.images.map((image, idx) => (
          <ViewTransition
            // oxlint-disable-next-line react/no-array-index-key
            key={idx}
            name={`${artist.slug}-${commission.slug}-img-${idx}`}
          >
            <div className="overflow-hidden rounded-lg">
              <Image src={image} alt={`${commission.title} ${idx + 1}`} className="w-full object-cover" />
            </div>
          </ViewTransition>
        ))}
      </div>
    </div>
  );
}
