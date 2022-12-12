import {previewData} from 'next/headers'

import {PreviewSuspense} from '../../lib/PreviewSuspense'
import {client} from '../../sanity/client'
import {PageScreen} from './PageScreen'
import {PreviewPage} from './PreviewPage'
import {query} from './query'
import {PageData} from './types'

export default async function SlugPage(props: {params: {slug: string}}) {
  const {slug} = props.params
  const preview = previewData()

  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewPage slug={slug} token={preview.token} />
      </PreviewSuspense>
    )
  }

  const data = await client.fetch<PageData | null>(query, {slug})

  return <PageScreen data={data} />
}
