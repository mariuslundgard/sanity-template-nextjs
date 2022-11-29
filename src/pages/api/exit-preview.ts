import {NextApiHandler} from 'next'

const handler: NextApiHandler = function exit(_req, res) {
  res.clearPreviewData()
  res.writeHead(307, {Location: '/'})
  res.end()
}

export default handler
