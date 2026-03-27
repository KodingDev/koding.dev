import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { allClients } from "@/lib/content";
import React from "react";
import { ClientAvatar } from "@/components/client/client-avatar";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Freelance client work spanning game server infrastructure, full-stack web development, and cloud-native solutions across Australia, the US, and Europe.",
};

export default function ClientsPage() {
  return (
    <div className="pt-12 pb-36">
      <h1 className="font-serif text-4xl tracking-tight italic sm:text-6xl">Clients</h1>
      <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
        Some of the amazing people I&apos;ve had the pleasure of working with
      </p>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {allClients.map((client, idx) => (
          <Link
            key={client.slug}
            href={`/clients/${client.slug}`}
            className="group relative flex min-h-52 flex-col justify-end overflow-clip rounded-lg"
          >
            {client.banner ? (
              <>
                <Image
                  src={client.banner}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30" />
              </>
            ) : client.brand ? (
              <div
                className="absolute inset-0 bg-linear-to-br from-(--brand-primary) to-(--brand-secondary)"
                style={
                  {
                    "--brand-primary": client.brand.primary,
                    "--brand-secondary": client.brand.secondary,
                  } as React.CSSProperties
                }
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-primary-300 via-primary-500 to-primary-800" />
            )}

            <div className="relative flex flex-col gap-2 p-6">
              <div className="flex items-center gap-2 text-xs text-white/80">
                {!client.end && <span className="size-1.5 rounded-full bg-green-400" />}
                <span>
                  {client.start} - {client.end ?? "Present"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {client.avatar && <ClientAvatar client={client} alt="Client logo" className="size-9 rounded-lg" />}
                <span className="font-serif text-2xl text-white italic">{client.name}</span>
                <MdArrowOutward className="size-4 text-white/60" />
              </div>

              {client.description && (
                <p className="line-clamp-2 max-w-sm text-sm leading-relaxed text-white/80">{client.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
