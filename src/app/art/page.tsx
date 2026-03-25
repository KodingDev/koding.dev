import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { MdArrowOutward } from "react-icons/md";
import { allArtists } from "@/lib/content";

export const metadata: Metadata = {
  title: "Art",
  description: "A collection of commissioned artwork from talented artists.",
  openGraph: {
    title: "Art",
    description: "A collection of commissioned artwork from talented artists.",
  },
};

export default function ArtPage() {
  const allCommissions = allArtists.flatMap((artist) =>
    artist.commissions.map((commission) => ({ artist, commission }))
  );

  return (
    <div className="pb-36">
      <div className="pt-12 pb-14">
        <h1 className="font-serif text-4xl tracking-tight italic sm:text-6xl">Art</h1>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
          I&apos;ve commissioned a lot of art over the years &mdash; please support these talented artists
        </p>
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {allCommissions.map(({ artist, commission }) => {
          const imageCount = commission.images.length;

          return (
            <Link
              key={`${artist.slug}-${commission.slug}`}
              className="group block break-inside-avoid"
              href={`/art/${artist.slug}/${commission.slug}`}
            >
              <div className="relative overflow-hidden rounded-xl">
                {commission.images[0] && (
                  <ViewTransition name={`${artist.slug}-${commission.slug}-img-0`}>
                    <Image
                      src={commission.images[0]}
                      alt={commission.title}
                      className="w-full object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-[0.85]"
                    />
                  </ViewTransition>
                )}

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-foreground shadow-lg">
                    <span>View</span>
                    <MdArrowOutward className="size-3.5" />
                  </div>
                </div>

                {imageCount > 1 && (
                  <div className="absolute top-3 right-3 rounded-full bg-black/50 px-2 py-0.5 text-[0.6875rem] font-medium text-white/90 backdrop-blur-sm">
                    {imageCount}
                  </div>
                )}
              </div>

              <div className="mt-2.5 px-0.5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-[0.9375rem] leading-snug text-foreground italic">
                    {commission.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-1.5 pt-0.5">
                    {artist.avatar && (
                      <Image src={artist.avatar} alt="" width={16} height={16} className="size-4 rounded-full" />
                    )}
                    <span className="text-xs text-muted-foreground">{artist.name}</span>
                  </div>
                </div>
                {commission.description && (
                  <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{commission.description}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
