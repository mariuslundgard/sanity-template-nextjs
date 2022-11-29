import {defineField, defineType} from 'sanity'

import {pageType} from './page'

export const articleType = defineType({
  type: 'document',
  name: 'article',
  title: 'Article',
  fields: [
    {
      type: 'string',
      name: 'supertitle',
      title: 'Supertitle',
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
    },
  ],
})

export const articleElementType = defineType({
  type: 'object',
  name: 'articleElement',
  title: 'Article element',
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

export const schema = {
  types: [
    //
    articleElementType,
    articleType,
    pageType,
  ],
}
