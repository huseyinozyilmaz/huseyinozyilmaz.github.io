import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        title: z.string(),
        headline: z.string().optional(),
        datetime: z.string(),
        isPublished: z.boolean(),
        image: z.object({
          src: z.string(),
          alt: z.string(),
          width: z.number(),
          height: z.number()
        })
      })
    })
  }
})
