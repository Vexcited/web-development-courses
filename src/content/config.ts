import { z, defineCollection } from "astro:content";

export const collections = {
  "html": defineCollection({ 
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      sources: z.array(z.string())
    })
  })
};
