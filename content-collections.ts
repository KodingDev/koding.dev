import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const clients = defineCollection({
  name: "clients",
  directory: "content/clients",
  include: "**/meta.json",
  parser: "json",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    href: z.string().optional(),
    avatar: z.string().optional(),
    banner: z.string().optional(),
    start: z.string().optional(),
    end: z.string().optional(),
    hidden: z.boolean().optional().default(false),
    // projects: z.array(
    //   z.object({
    //     name: z.string(),
    //     description: z.string(),
    //     avatar: z.string().optional(),
    //     links: z
    //       .array(
    //         z.object({
    //           name: z.string(),
    //           href: z.string(),
    //           icon: z.string().optional(),
    //         })
    //       )
    //       .optional(),
    //     media: z
    //       .array(
    //         z.object({
    //           media: z.string(),
    //           caption: z.string().optional(),
    //         })
    //       )
    //       .optional(),
    //   })
    // ),
    testimonials: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
          testimonial: z.string(),
          url: z.string().optional(),
          avatar: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const artists = defineCollection({
  name: "artists",
  directory: "content/commissions",
  include: "**/meta.json",
  parser: "json",
  schema: z.object({
    name: z.string(),
    link: z.string().optional(),
    avatar: z.string().optional(),
    commissions: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string().optional(),
        images: z.array(z.string()),
        links: z
          .array(
            z.object({
              text: z.string(),
              href: z.string(),
            })
          )
          .optional(),
      })
    ),
  }),
});

export default defineConfig({
  collections: [clients, artists],
});
