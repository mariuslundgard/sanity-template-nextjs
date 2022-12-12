import {previewData} from 'next/headers'

import {PreviewSuspense} from '../lib/PreviewSuspense'
import {client} from '../sanity/client'
import {PageScreen} from './[slug]/PageScreen'
import {PreviewPage} from './[slug]/PreviewPage'
import {query} from './[slug]/query'

export default async function HomePage() {
  const slug = 'home'
  const preview = previewData()

  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewPage slug={slug} token={preview.token} />
      </PreviewSuspense>
    )
  }

  const data = await client.fetch(query, {slug})

  return <PageScreen data={data} />
}
