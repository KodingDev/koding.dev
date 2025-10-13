import type { Metadata, Route } from "next";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { Header } from "@/components/base/Header";
import { CallToAction } from "@/components/interactive/CallToAction";
import { allArtists, REF_SHEET } from "@/lib/content";

export const metadata: Metadata = {
  title: "Art",
  description: "Over the years, I've commissioned a lot of art. Here's a collection of some of my favorites.",
};

export default function ArtPage() {
  const refSheetArtist = REF_SHEET.artist;
  const refSheet = REF_SHEET.artist.commissions[REF_SHEET.commissionIdx]!;

  return (
    <div className="layout-container flex flex-col gap-4 pb-36">
      <Header emoji="🎨" title="Art" className="pt-40 pb-32">
        I've commissioned a lot of art over the years, please support these talented artists!
      </Header>

      {/* Ref sheet card */}
      <CallToAction
        picture={refSheet.images[0] ? { src: refSheet.images[0] } : undefined}
        href={`/art/${refSheetArtist.slug}/${refSheet.slug}` as Route}
        picMaxWidth="80vw"
      >
        <div className="flex min-h-[400px] flex-col justify-end gap-3 p-6 md:p-10">
          {/* Artist name */}
          <div className="flex flex-row items-center gap-2">
            {refSheetArtist.avatar && (
              <Image
                src={refSheetArtist.avatar}
                alt={refSheetArtist.name}
                width={24}
                height={24}
                className="h-6 w-6 rounded-md"
              />
            )}
            <span className="opacity-75">By {refSheetArtist.name}</span>
          </div>

          {/* Commission Name */}
          <div className="flex flex-row items-center gap-4">
            <h1 className="font-bold text-2xl">Reference Sheet</h1>
            <MdArrowOutward className="size-6" />
          </div>

          {/* Description */}
          <span className="opacity-50">{refSheet.description}</span>
        </div>
      </CallToAction>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allArtists.map((artist) =>
          artist.commissions.map((commission) => (
            <a
              key={`${artist.slug}-${commission.slug}`}
              className="relative aspect-square w-full overflow-clip rounded-md border border-white/25 transition-all hover:scale-[101%] hover:shadow-xl"
              href={`/art/${artist.slug}/${commission.slug}`}
            >
              {/* Image */}
              {commission.images[0] && (
                <Image
                  src={commission.images[0]}
                  alt={commission.title}
                  className="absolute inset-0 z-0 size-full object-cover object-top"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/50" />

              {/* Descriptions */}
              <div className="relative z-10 flex h-full flex-col justify-end gap-1 p-6">
                <div className="flex flex-row items-center gap-4">
                  <h1 className="font-bold text-2xl">{commission.title}</h1>
                  <MdArrowOutward className="size-6" />
                </div>

                {/* Artist name */}
                <div className="flex flex-row items-center gap-2">
                  {artist.avatar && (
                    <Image
                      src={artist.avatar}
                      alt={artist.name}
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-md"
                    />
                  )}
                  <span className="opacity-75">By {artist.name}</span>
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
