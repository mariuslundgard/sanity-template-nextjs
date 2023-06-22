import {createClient, type SanityClient} from 'next-sanity'

import {apiVersion, dataset, projectId, useCdn} from './env'

export function getClient(token?: string, encodeSourceMap = true): SanityClient {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  })

  if (!token) {
    return client
  }

  if (!encodeSourceMap) {
    return client.withConfig({
      ignoreBrowserTokenWarning: true,
      token,
      useCdn: false,
    })
  }

  return createClient({
    apiVersion,
    dataset,
    encodeSourceMap,
    ignoreBrowserTokenWarning: true,
    logger: console,
    projectId,
    studioUrl: 'http://localhost:3000/studio',
    token,
    useCdn,
  })
}
