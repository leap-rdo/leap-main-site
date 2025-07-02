import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const clientsSection = defineCollection({
  loader: glob({
    pattern: "clients.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    list: z.array(z.string()),
  }),
});