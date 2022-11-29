'use client'

import {DocumentsCount, query} from '@/components/DocumentsCount'
import {usePreview} from '@/sanity.preview'

export default function PreviewDocumentsCount({token}) {
  const data = usePreview(token, query)
  return <DocumentsCount data={data} />
}
