import {GetStaticProps} from 'next'
import {PreviewSuspense} from 'next-sanity/preview'

import {LazyPreviewPage} from '../page/LazyPreviewPage'
import {LoadingScreen} from '../page/LoadingScreen'
import {PageScreen} from '../page/PageScreen'
import {PAGE_DATA_QUERY, PAGE_PATHS_QUERY} from '../page/query'
import {PageData} from '../page/types'
import {client} from '../sanity/client'

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
  const {params = {}, preview = false, previewData = {}} = ctx

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

export const getStaticPaths = async () => {
  const data = await client.fetch<{slug: string}[] | null>(PAGE_PATHS_QUERY)

  return {paths: data?.map((d) => `/${d.slug}`) || [], fallback: false}
}

export default function Page(props: PageProps) {
  const {data, preview, slug, token} = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingScreen>Loading preview…</LoadingScreen>}>
        <LazyPreviewPage slug={slug} token={token} />
      </PreviewSuspense>
    )
  }

  return <PageScreen data={data} />
}
