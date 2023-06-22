import {createClient, type SanityClient} from 'next-sanity'

import {apiVersion, dataset, projectId, useCdn} from './env'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export function getClient(token?: string): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  })

  if (!token) {
    return client
  }

  return client.withConfig({
    token,
    useCdn: false,
    ignoreBrowserTokenWarning: true,
  })
}
