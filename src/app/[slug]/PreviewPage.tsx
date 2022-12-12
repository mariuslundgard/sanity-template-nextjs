'use client'

import {usePreview} from '../../sanity/preview'
import {PageScreen} from './PageScreen'
import {query} from './query'

export function PreviewPage(props: {slug: string; token: string}) {
  const {slug, token} = props

  return <PageScreen data={usePreview(token, query, {slug})} />
}
