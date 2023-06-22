import {GetStaticProps} from 'next'

import {PageScreen} from '../page/PageScreen'
import {PreviewPage} from '../page/PreviewPage'
import {PreviewProvider} from '../page/PreviewProvider'
import {PAGE_DATA_QUERY} from '../page/query'
import {PageData} from '../page/types'
import {getClient} from '../sanity/client'

interface PageProps {
  data: PageData | null
  preview: boolean
  slug: string | null
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const {preview = false, previewData = {}} = ctx
  const client = getClient(preview ? previewData.token : undefined)

  const params = {slug: 'home'}

  if (preview && previewData.token) {
    return {
      props: {
        data: null,
        preview,
        slug: params?.slug || null,
        token: previewData.token,
      },
    }
  }

  const data = await client.fetch<PageData | null>(PAGE_DATA_QUERY, params)

  return {
    props: {
      data,
      preview,
      slug: params?.slug || null,
      token: null,
    },
  }
}

export default function Page(props: PageProps) {
  const {data, preview, slug, token} = props

  if (preview && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPage data={data} slug={slug} />
      </PreviewProvider>
    )
  }

  return <PageScreen data={data} />
}
