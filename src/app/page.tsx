import type { Metadata } from "next";
import Image from "next/image";
import type { Route } from "next";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Hazel from "@/assets/photos/hazel.png";
import StellaIntro from "@/assets/photos/stella-intro.png";
import { ProjectRow } from "@/components/home/project-row";
import { TwinklingStar } from "@/components/home/twinkling-star";
import { allClients } from "@/lib/content";
import { NAV_SOCIALS } from "@/lib/data/layout";
import { PROJECTS } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { ClientAvatar } from "@/components/client/client-avatar";

export const metadata: Metadata = {
  description:
    "Game developer and software engineer with a love for building things that people enjoy. Kotlin, TypeScript, Kubernetes.",
  openGraph: {
    title: "Stella Inwood",
    description: "Game developer and software engineer with a love for building things that people enjoy.",
  },
};

const featured = PROJECTS.filter((p) => p.featured);
const rest = PROJECTS.filter((p) => !p.featured);

export default function HomePage() {
  return (
    <div className="flex flex-col pb-36">
      <section className="relative pt-10 pb-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-5xl tracking-tight sm:text-7xl">Stella Inwood</h1>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Game developer and software engineer with a love for building things that people enjoy.
          </p>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="absolute top-12 right-4">
            <TwinklingStar>
              <svg width="28" height="28" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Star</title>
                <path
                  d="M29.8813 1.31157C30.0941 1.00699 30.3956 0.775342 30.7447 0.648096C31.0938 0.520851 31.4736 0.504182 31.8326 0.600354C32.1915 0.696527 32.5121 0.900876 32.7508 1.18563C32.9895 1.47039 33.1348 1.82174 33.1668 2.19194L33.6144 7.20448C33.964 11.1347 35.1672 14.9412 37.14 18.3582C39.1128 21.7753 41.8078 24.7206 45.0367 26.9883L49.1504 29.8813C49.4549 30.0942 49.6866 30.3956 49.8138 30.7448C49.9411 31.0939 49.9577 31.4737 49.8616 31.8326C49.7654 32.1915 49.561 32.5122 49.2763 32.7509C48.9915 32.9896 48.6402 33.1349 48.27 33.1669L43.2609 33.6154C39.3308 33.965 35.5242 35.1682 32.1072 37.141C28.6901 39.1138 25.7449 41.8088 23.4771 45.0377L20.5841 49.1514C20.3712 49.4559 20.0698 49.6876 19.7207 49.8148C19.3715 49.9421 18.9917 49.9587 18.6328 49.8626C18.2739 49.7664 17.9533 49.562 17.7145 49.2773C17.4758 48.9925 17.3306 48.6412 17.2985 48.271L16.85 43.2619C16.5005 39.3318 15.2973 35.5252 13.3244 32.1082C11.3516 28.6911 8.65663 25.7459 5.42776 23.4781L1.31057 20.5842C1.00599 20.3713 0.774341 20.0698 0.647096 19.7207C0.51985 19.3716 0.50318 18.9918 0.599353 18.6329C0.695525 18.2739 0.899876 17.9533 1.18463 17.7146C1.46939 17.4759 1.82074 17.3306 2.19094 17.2986L7.20348 16.851C11.1337 16.5015 14.9402 15.2983 18.3572 13.3254C21.7743 11.3526 24.7196 8.65763 26.9873 5.42876L29.8813 1.31157Z"
                  fill="#FAC230"
                />
              </svg>
            </TwinklingStar>
          </div>

          <div className="absolute top-10 -left-6">
            <TwinklingStar>
              <svg width="12" height="12" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Star</title>
                <path
                  d="M12.4518 0.583141C12.5549 0.494121 12.6812 0.438699 12.8135 0.424409C12.9459 0.410119 13.0778 0.437653 13.1915 0.503269C13.3051 0.568886 13.395 0.669402 13.4488 0.791158C13.5026 0.912913 13.5177 1.05 13.4922 1.1838L13.1509 2.99659C12.8829 4.41782 12.9199 5.87044 13.2595 7.25301C13.5991 8.63559 14.233 9.9148 15.1169 11.0013L16.2427 12.3869C16.3262 12.489 16.3759 12.6161 16.3851 12.7508C16.3943 12.8855 16.3626 13.0213 16.2941 13.1399C16.2257 13.2584 16.1239 13.3538 16.0027 13.4132C15.8814 13.4726 15.7465 13.4931 15.6164 13.4718L13.8535 13.1896C12.4706 12.9674 11.0458 13.058 9.67866 13.4552C8.31154 13.8524 7.03501 14.5467 5.93821 15.4894L4.53956 16.6902C4.43647 16.7792 4.31017 16.8346 4.17783 16.8489C4.04548 16.8632 3.91352 16.8357 3.79987 16.77C3.68622 16.7044 3.59639 16.6039 3.5426 16.4821C3.4888 16.3604 3.47365 16.2233 3.4992 16.0895L3.83976 14.2779C4.1078 12.8566 4.07075 11.404 3.73118 10.0214C3.39162 8.63887 2.75773 7.35966 1.87378 6.27314L0.746851 4.88692C0.663365 4.7848 0.613646 4.65775 0.604451 4.52304C0.595256 4.38833 0.62703 4.25248 0.695457 4.13396C0.763884 4.01544 0.865644 3.92 0.986907 3.86061C1.10817 3.80121 1.24306 3.78075 1.37323 3.80199L3.1372 4.08482C4.52013 4.30709 5.9449 4.21645 7.31203 3.81923C8.67916 3.42202 9.95569 2.7278 11.0525 1.78506L12.4518 0.583141Z"
                  fill="#0085FF"
                />
              </svg>
            </TwinklingStar>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 lg:h-136 lg:flex-row">
        <div className="overflow-clip rounded-lg lg:w-2/3">
          <Image
            src={StellaIntro}
            alt="Stella at her desk"
            className="h-72 w-full object-cover object-top lg:h-full"
            priority
          />
        </div>

        <div className="flex flex-col gap-5 lg:w-1/3">
          <div className="flex shrink-0 flex-col gap-3 rounded-lg border p-5">
            <div>
              <h2 className="font-serif text-lg italic">Clients</h2>
              <p className="mt-1 text-sm text-muted-foreground">People I&apos;ve worked with</p>
            </div>
            <div className="flex flex-col">
              {allClients.slice(0, 4).map((client, i) => (
                <Link
                  key={client.slug}
                  href={`/clients/${client.slug}`}
                  className={cn(
                    "group flex items-center gap-2 py-2 text-sm transition-colors hover:text-primary",
                    i < 3 && "border-b border-border/50"
                  )}
                >
                  <ClientAvatar client={client} alt="Client avatar" className="size-5 shrink-0 rounded" />
                  <span className="font-medium">{client.name}</span>
                  <span className="text-muted-foreground">{client.role}</span>
                  <MdArrowOutward className="ml-auto size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-clip rounded-lg border">
            <Image
              src={Hazel}
              alt="Hazel the cat"
              className="h-40 min-h-0 w-full flex-1 object-cover object-center lg:h-auto"
            />
            <p className="shrink-0 px-4 py-2.5 text-sm text-muted-foreground">My cat Hazel (mraow!)</p>
          </div>
        </div>
      </section>

      <section className="pt-28">
        <h2 className="font-serif text-3xl italic">Projects</h2>
        <p className="mt-2 text-muted-foreground">Some things I&apos;ve built</p>

        <div className="mt-10 flex flex-col divide-y divide-border/40">
          {featured.map((project) => (
            <ProjectRow key={project.name} project={project} featured />
          ))}
          {rest.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-28 grid grid-cols-1 gap-12 border-t pt-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-2xl italic">See more</h2>
          <div className="flex flex-col gap-3">
            <Link
              href="/clients"
              className="group flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <span className="font-medium">Client work</span>
              <MdArrowOutward className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </Link>
            <Link
              href="/art"
              className="group flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <span className="font-medium">Commissioned art</span>
              <MdArrowOutward className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-2xl italic">Say hello</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Interested in working together, or just want to chat? I&apos;d love to hear from you.
          </p>
          <div className="flex flex-row gap-3">
            {NAV_SOCIALS.map((social) => (
              <Link
                key={social.href}
                href={social.href as Route}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-lg border border-foreground/10 transition-colors hover:border-foreground/25 hover:bg-foreground/5"
              >
                <social.icon className="size-4 text-muted-foreground" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
