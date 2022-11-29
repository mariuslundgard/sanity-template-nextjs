import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),

    defineField({
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [
        defineArrayMember({
          type: 'articleElement',
        }),
      ],
    }),
  ],
})
