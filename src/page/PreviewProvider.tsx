import {LiveQueryProvider} from 'next-sanity/preview'
import {useMemo} from 'react'

import {getClient} from '../sanity/client'

export function PreviewProvider({children, token}: {children: React.ReactNode; token: string}) {
  const client = useMemo(() => getClient(token), [token])

  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
