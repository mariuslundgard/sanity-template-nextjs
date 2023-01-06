import {usePreview} from '../sanity/preview'
import {PageScreen} from './PageScreen'
import {PAGE_DATA_QUERY} from './query'

export default function PreviewPage(props: {slug: string | null; token: string | null}) {
  const {slug, token} = props

  return <PageScreen data={usePreview(token, PAGE_DATA_QUERY, {slug})} />
}
