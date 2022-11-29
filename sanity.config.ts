import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schema} from '@/schema'
import {PagePreview} from '@/schema/page'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Computed Layouts',

  projectId: '71npnuha',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode: (S, {schemaType}) => {
        if (schemaType === 'page') {
          return S.document().views([
            S.view.form().title('Content'),
            S.view.component().title('Preview').component(PagePreview),
          ])
        }

        return S.document()
      },
    }),
  ],

  schema: schema,
})
