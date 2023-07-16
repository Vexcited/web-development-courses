import { z, defineCollection } from "astro:content";

const lessonsCollectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  sources: z.array(z.string())
});

export const collections = {
  "html": defineCollection({ 
    type: "content",
    schema: lessonsCollectionSchema
  }),
  "javascript": defineCollection({ 
    type: "content",
    schema: lessonsCollectionSchema
  }),
  "css": defineCollection({ 
    type: "content",
    schema: lessonsCollectionSchema
  })
};
