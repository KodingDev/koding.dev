import type { Metadata, Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type React from "react";
import { FaDiscord, FaGithub, FaGlobe, FaTwitch } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { MediaEmbed } from "@/components/base/media-embed";
import { IconLink } from "@/components/interactive/icon-link";
import { allClients } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ClientAvatar } from "@/components/client/client-avatar";

const LINK_ICONS: Record<string, React.FC<React.ComponentProps<"svg">>> = {
  github: FaGithub,
  twitch: FaTwitch,
  discord: FaDiscord,
};

export function generateStaticParams() {
  return allClients.map((client) => ({ slug: client.slug }));
}

export async function generateMetadata({ params }: PageProps<"/clients/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const client = allClients.find((c) => c.slug === slug);
  if (!client) notFound();
  return {
    title: client.name,
    description: client.description,
    openGraph: {
      title: client.name,
      description: client.description,
      ...(client.banner ? { images: [{ url: client.banner.src, alt: client.name }] } : {}),
    },
  };
}

export default async function ClientPage({ params }: PageProps<"/clients/[slug]">) {
  const { slug } = await params;
  const client = allClients.find((c) => c.slug === slug);
  if (!client) notFound();

  return (
    <article className="pt-12 pb-36">
      <Link
        href="/clients"
        className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <MdArrowBack className="size-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm">Clients</span>
      </Link>

      {client.banner && (
        <div className="mt-8 overflow-clip rounded-lg">
          <Image src={client.banner} alt="" className="aspect-3/1 w-full object-cover" />
        </div>
      )}

      <header className={cn("flex flex-col gap-4", client.banner ? "mt-8" : "mt-10")}>
        <div className="flex items-center gap-4">
          <ClientAvatar client={client} alt="Client avatar" className="size-16 rounded-xl" />
          <div>
            <h1 className="font-serif text-4xl tracking-tight italic sm:text-5xl">{client.name}</h1>
            <div className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
              <div className={cn("size-1.5 rounded-full", client.end ? "bg-red-400" : "bg-green-400")} />
              <span>{client.role}</span>
              <span className="text-muted-foreground/50">/</span>
              <span>
                {client.start} - {client.end ?? "Present"}
              </span>
            </div>
          </div>
        </div>

        {client.description && (
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{client.description}</p>
        )}
      </header>

      {client.projects && client.projects.length > 0 && (
        <div className="mt-16 flex flex-col">
          {client.projects.map((project, projectIdx) => (
            <section key={project.name} className="flex flex-col gap-6">
              {projectIdx > 0 && <hr className="my-10 border-border/50" />}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  {project.avatar && (
                    <Image src={project.avatar} alt="" width={36} height={36} className="size-9 rounded-lg" />
                  )}
                  <h2 className="font-serif text-2xl italic">{project.name}</h2>
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <IconLink key={link.name} href={link.href as Route} icon={LINK_ICONS[link.icon ?? ""] ?? FaGlobe}>
                        {link.name}
                      </IconLink>
                    ))}
                  </div>
                )}
              </div>

              <p className="max-w-2xl leading-relaxed text-muted-foreground">{project.description}</p>

              {project.media && project.media.length > 0 && (
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                  {project.media.map((media, mediaIdx) => (
                    <div
                      // oxlint-disable-next-line react/no-array-index-key
                      key={mediaIdx}
                    >
                      {media.type === "video" || media.type === "embed" ? (
                        <MediaEmbed
                          src={media.type === "video" ? media.video : media.url}
                          className="aspect-video w-full rounded-md object-cover"
                          title={`${project.name} media ${mediaIdx + 1}`}
                        />
                      ) : (
                        <Image
                          src={media.image}
                          alt={media.caption ?? `${project.name} screenshot`}
                          width={400}
                          height={300}
                          className="aspect-video w-full rounded-md object-cover"
                        />
                      )}
                      {media.caption && <p className="mt-2 text-xs text-muted-foreground">{media.caption}</p>}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      )}

      {client.testimonials && client.testimonials.length > 0 && (
        <section className="mt-20">
          <hr className="mb-12 border-border/50" />
          <h2 className="font-serif text-2xl italic">Testimonials</h2>

          <div className="mt-8 flex flex-col gap-10">
            {client.testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="flex flex-col gap-5 border-l-2 border-primary/30 pl-6">
                <p className="max-w-2xl font-serif text-lg leading-relaxed text-foreground/75 italic">
                  &ldquo;
                  {testimonial.testimonial.split("*").map((part, partIdx) =>
                    partIdx % 2 ? (
                      // oxlint-disable-next-line react/no-array-index-key
                      <span key={partIdx} className="text-foreground/80">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                  &rdquo;
                </p>

                <div className="flex items-center gap-3">
                  {testimonial.avatar && (
                    <Image src={testimonial.avatar} alt="" width={36} height={36} className="size-9 rounded-lg" />
                  )}
                  <div>
                    <span className="text-sm font-medium">{testimonial.name}</span>
                    <span className="block text-xs text-muted-foreground">{testimonial.role}</span>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
