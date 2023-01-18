import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType, isRecord, isString} from 'sanity'

import {previewSecretId} from '../constants'
import {apiVersion} from '../env'
import {getSecret} from '../secret'
import {PagePreview} from './PagePreview'

export const pageType = defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: DocumentIcon,

  options: {
    views(S) {
      return [S.view.form().title('Content'), S.view.component(PagePreview).title('Preview')]
    },
    async url(ctx) {
      const {_id: id, _type: type, slug} = ctx.document
      const currentSlug = isRecord(slug) && isString(slug.current) ? slug.current : undefined

      if (!currentSlug) return undefined

      const client = ctx.getClient({apiVersion})
      const secret = await getSecret({
        client,
        id: previewSecretId,
        createIfNotExists: true,
      })

      if (!secret) return undefined

      return `/api/sanity/preview?type=${type}&id=${id}&slug=${currentSlug}&secret=${secret}`
    },
  },

  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),

    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
    }),

    defineField({
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [defineArrayMember({type: 'pageElement'})],
    }),
  ],
})
