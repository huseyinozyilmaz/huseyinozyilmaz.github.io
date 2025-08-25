import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    posts: defineCollection(
      asSitemapCollection({
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
          }),
          sitemap: z.union([
            z.literal(false),
            z.object({ lastmod: z.string().optional() })
          ]).optional()
        })
      })
    )
  }
})
