import {NextApiHandler} from 'next'
import {isString, SanityClient} from 'sanity'

import {getClient} from '../../../sanity/client'
import {previewSecretId} from '../../../sanity/constants'
import {readToken} from '../../../sanity/env'
import {getSecret} from '../../../sanity/secret'

const handler: NextApiHandler = async function preview(req, res) {
  if (!readToken) {
    res.status(404)
    res.end()
    return
  }

  const {query} = req

  const secret = isString(query.secret) ? query.secret : undefined
  const type = isString(query.type) ? query.type : undefined
  const slug = isString(query.slug) ? query.slug : undefined

  if (!secret) {
    res.status(401)
    res.send('Invalid secret')
    return
  }

  const client = getClient(readToken)
  const authClient = client.withConfig({useCdn: false, token: readToken})

  // The secret can't be stored in an env variable with a NEXT_PUBLIC_ prefix, as it would make you
  // vulnerable to leaking the token to anyone. If you don't have an custom API with authentication
  // that can handle checking secrets, you may use https://github.com/sanity-io/sanity-studio-secrets
  // to store the secret in your dataset.
  const storedSecret = await getSecret({
    // TODO: remove type casting once types are compatible
    client: authClient as unknown as SanityClient,
    id: previewSecretId,
  })

  // This is the most common way to check for auth, but we encourage you to use your existing auth
  // infra to protect your token and securely transmit it to the client
  if (secret !== storedSecret) {
    return res.status(401).send('Invalid secret')
  }

  if (type === 'page' && slug) {
    res.setPreviewData({token: readToken})
    res.writeHead(307, {Location: `/${slug}`})
    res.end()
    return
  }

  res.status(404)
  res.end()
}

export default handler
