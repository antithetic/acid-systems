import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schema'

export default defineConfig({
  name: 'acid-systems',
  title: 'Acid Systems',

  projectId: 'nmhp3u9m',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
