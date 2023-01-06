import {visionTool} from '@sanity/vision'
import {Config, defineConfig} from 'sanity'

import {dataset, projectId} from './src/sanity/env'
import {deskTool} from './src/sanity/lib/desk'
import {schema} from './src/sanity/schema'

export default defineConfig<Config>({
  basePath: '/studio',
  dataset,
  projectId,
  schema,
  title: 'Next.js Template',

  plugins: [deskTool(), visionTool()],
})
