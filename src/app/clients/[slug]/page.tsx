import type { Metadata, Route } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type React from "react";
import { FaDiscord, FaGithub, FaGlobe, FaTwitch } from "react-icons/fa";
import { MediaEmbed } from "@/components/base/MediaEmbed";
import { ClientCallToAction } from "@/components/clients/ClientCallToAction";
import { IconLink } from "@/components/interactive/IconLink";
import { SiteLink } from "@/components/interactive/Link";
import { allClients } from "@/lib/content";

const LINK_ICONS: Record<string, React.FC<React.ComponentProps<"svg">>> = {
  github: FaGithub,
  twitch: FaTwitch,
  discord: FaDiscord,
};

export async function generateStaticParams() {
  return allClients.map((client) => ({
    slug: client.slug,
  }));
}

export async function generateMetadata({ params }: PageProps<"/clients/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const client = allClients.find((c) => c.slug === slug);
  if (!client) notFound();

  return {
    title: client.name,
    description: client.description,
  };
}

export default async function ClientPage({ params }: PageProps<"/clients/[slug]">) {
  const { slug } = await params;
  const client = allClients.find((c) => c.slug === slug);
  if (!client) notFound();

  return (
    <div className="layout-container flex flex-col gap-8 pt-32 pb-36">
      <SiteLink href="/clients" type="back" className="opacity-50">
        Back to all clients
      </SiteLink>
      <ClientCallToAction client={client} />

      <div className="flex flex-col gap-16 pt-8">
        {client.projects?.map((project) => (
          <div key={project.name} className="flex flex-col gap-6">
            {/* Name & description */}
            <div className="flex flex-row items-center gap-4">
              {project.avatar && (
                <Image
                  src={project.avatar}
                  alt={`${project.name} Avatar`}
                  width={48}
                  height={48}
                  className="size-12 rounded-lg"
                />
              )}
              <h2 className="font-bold text-3xl">{project.name}</h2>
            </div>
            <span className="opacity-50">{project.description}</span>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-row gap-4">
                {project.links.map((link) => (
                  <IconLink key={link.name} href={link.href as Route} icon={LINK_ICONS[link.icon ?? ""] ?? FaGlobe}>
                    {link.name}
                  </IconLink>
                ))}
              </div>
            )}

            {/* Media carousel */}
            {project.media && project.media.length > 0 && (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {project.media.map((media, mediaIdx) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: No other option
                  <div key={mediaIdx} className="group relative overflow-clip rounded-lg border border-white/[15%]">
                    {media.type === "video" || media.type === "embed" ? (
                      // Website embeds
                      <MediaEmbed
                        src={media.type === "video" ? media.video : media.url}
                        className="h-full w-full object-cover"
                        title={`Media ${mediaIdx + 1}`}
                      />
                    ) : (
                      <Image
                        src={media.image}
                        alt="Project Image"
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    )}

                    {/* Caption overlay */}
                    {media.caption && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="px-4 text-center opacity-50">{media.caption}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Testimonials */}
        {client.testimonials && client.testimonials.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-3xl">Testimonials</h2>
            <span className="opacity-50">
              I've worked with some amazing people, here's what they have to say about me.
            </span>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {client.testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex flex-col items-center gap-6 rounded-lg border border-white/[15%] bg-white/[5%] p-6"
                >
                  <div className="flex flex-row items-center gap-4">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} Avatar`}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-lg"
                      />
                    )}

                    <div className="flex flex-col">
                      <span className="font-bold">{testimonial.name}</span>
                      <span className="opacity-50">{testimonial.role}</span>
                    </div>
                  </div>

                  {/* Testimonial text with highlighting */}
                  <div className="text-center text-white/50 text-xl">
                    {testimonial.testimonial.split("*").map((part, partIdx) =>
                      partIdx % 2 ? (
                        // biome-ignore lint/suspicious/noArrayIndexKey: Needed
                        <span key={partIdx} className="text-white/75">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
