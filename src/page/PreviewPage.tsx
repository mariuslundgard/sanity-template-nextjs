import {useLiveQuery} from 'next-sanity/preview'

import {LoadingScreen} from './LoadingScreen'
import {PageScreen} from './PageScreen'
import {PAGE_DATA_QUERY} from './query'
import {PageData} from './types'

export function PreviewPage(props: {data: PageData | null; slug: string | null}) {
  const {data: initialData, slug} = props
  const [data, loading] = useLiveQuery(initialData, PAGE_DATA_QUERY, {slug})

  if (loading) {
    return <LoadingScreen>Loading preview…</LoadingScreen>
  }

  return <PageScreen data={data} />
}
