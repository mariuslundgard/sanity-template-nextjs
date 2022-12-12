import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  type: 'document',
  name: 'article',
  title: 'Article',
  icon: DocumentTextIcon,

  fields: [
    defineField({
      type: 'string',
      name: 'supertitle',
      title: 'Supertitle',
    }),

    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),

    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
    }),
  ],
})
