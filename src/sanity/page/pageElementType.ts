import {defineField, defineType} from 'sanity'

export const pageElementType = defineType({
  type: 'object',
  name: 'pageElement',
  title: 'Page element',
  fields: [
    defineField({
      type: 'reference',
      name: 'article',
      title: 'Article',
      to: [{type: 'article'}],
    }),
  ],
  preview: {
    select: {
      title: 'article.title',
      subtitle: 'article.subtitle',
    },
  },
})
