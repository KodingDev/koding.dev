import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { allClients } from "@/lib/content";

// biome-ignore lint/style/noDefaultExport: NextJS
export default function ClientsPage() {
  return (
    <div className="pt-12 pb-36">
      <h1 className="font-serif text-4xl italic tracking-tight sm:text-6xl">Clients</h1>
      <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
        Some of the amazing people I&apos;ve had the pleasure of working with
      </p>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {allClients.map((client) => (
          <Link
            key={client.slug}
            href={`/clients/${client.slug}`}
            className="group relative flex min-h-52 flex-col justify-end overflow-clip rounded-lg"
          >
            {client.banner ? (
              <>
                <Image src={client.banner} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300 via-primary-500 to-primary-800" />
            )}

            <div className="relative flex flex-col gap-2 p-6">
              <div className="flex items-center gap-2 text-xs text-white/80">
                {!client.end && <span className="size-1.5 rounded-full bg-green-400" />}
                <span>{client.start} - {client.end ?? "Present"}</span>
              </div>

              <div className="flex items-center gap-3">
                {client.avatar && (
                  <Image src={client.avatar} alt="" width={36} height={36} className="size-9 rounded-lg" />
                )}
                <span className="font-serif text-2xl italic text-white">{client.name}</span>
                <MdArrowOutward className="size-4 text-white/60" />
              </div>

              {client.description && (
                <p className="line-clamp-2 max-w-sm text-sm text-white/80 leading-relaxed">{client.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
