import {previewData} from 'next/headers'

import {DocumentsCount, query} from '@/components/DocumentsCount'
import PreviewDocumentsCount from '@/components/PreviewDocumentsCount'
import PreviewSuspense from '@/components/PreviewSuspense'
import {client} from '@/sanity.client'

export default async function IndexPage() {
  const preview = previewData()

  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewDocumentsCount token={preview.token} />
      </PreviewSuspense>
    )
  }

  const data = await client.fetch(query)
  return <DocumentsCount data={data} />
}
