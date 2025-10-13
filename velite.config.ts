import { defineConfig, s } from "velite";

export default defineConfig({
  collections: {
    clients: {
      name: "Clients",
      pattern: "clients/**/meta.json",
      schema: s.object({
        slug: s.slug(),
        name: s.string(),
        description: s.string(),
        href: s.string().optional(),
        avatar: s.image().optional(),
        banner: s.image().optional(),
        start: s.string().optional(),
        end: s.string().optional(),
        hidden: s.boolean().optional().default(false),
        projects: s
          .array(
            s.object({
              name: s.string(),
              description: s.string(),
              avatar: s.image().optional(),
              links: s
                .array(
                  s.object({
                    name: s.string(),
                    href: s.string(),
                    icon: s.string().optional(),
                  })
                )
                .optional(),
              media: s
                .array(
                  s.intersection(
                    s.discriminatedUnion("type", [
                      s.object({
                        type: s.literal("image"),
                        image: s.image(),
                      }),
                      s.object({
                        type: s.literal("video"),
                        video: s.file(),
                      }),
                      s.object({
                        type: s.literal("embed"),
                        url: s.string(),
                      }),
                    ]),
                    s.object({
                      caption: s.string().optional(),
                    })
                  )
                )
                .optional(),
            })
          )
          .optional(),
        testimonials: s
          .array(
            s.object({
              name: s.string(),
              role: s.string(),
              testimonial: s.string(),
              url: s.string().optional(),
              avatar: s.image().optional(),
            })
          )
          .optional(),
      }),
    },
    artists: {
      name: "Artists",
      pattern: "commissions/**/meta.json",
      schema: s.object({
        slug: s.slug(),
        name: s.string(),
        link: s.string().optional(),
        avatar: s.image().optional(),
        commissions: s.array(
          s.object({
            slug: s.string(),
            title: s.string(),
            description: s.string().optional(),
            images: s.array(s.image()),
            links: s
              .array(
                s.object({
                  text: s.string(),
                  href: s.string(),
                })
              )
              .optional(),
          })
        ),
      }),
    },
  },
});
