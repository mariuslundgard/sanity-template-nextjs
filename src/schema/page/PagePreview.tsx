import {Box, Code} from '@sanity/ui'
import {ComponentProps} from 'react'
import {UserViewComponent} from 'sanity/desk'

export function PagePreview(props: ComponentProps<UserViewComponent>) {
  const {document} = props
  const value = document.displayed as any

  return (
    <Box padding={4}>
      {value.title || <>Untitled</>}

      <Code language="json" size={1}>
        {JSON.stringify(value.content, null, 2)}
      </Code>
    </Box>
  )
}
