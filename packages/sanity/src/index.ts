import {visionTool} from '@sanity/vision'
import {Cannabis, BrainCog} from 'lucide-react'
import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'
import {references, referencesView} from 'sanity-plugin-references'
import {singletonTools} from 'sanity-plugin-singleton-management'
import {structureTool} from 'sanity/structure'
import {tags} from 'sanity-plugin-tags-v4'
import {youtubeInput} from 'sanity-plugin-youtube-input'

import {webhooksTrigger} from 'sanity-plugin-webhooks-trigger'

import {acidSystemsSchema} from './schema'
import {notesSchema} from './notes/schema'

export const sharedConfig = {
  projectId: 'nmhp3u9m',
  dataset: 'production',
}

export const sharedPlugins = {
  plugins: [
    media(),
    references(),
    singletonTools(),
    tags(),
    visionTool(),
    webhooksTrigger(),
  ],
}
export default defineConfig([
  {
    basePath: '/acid-systems',
    name: 'acid-systems',
    title: 'Acid Systems',
    icon: Cannabis,

    ...sharedConfig,
    plugins: [
      ...sharedPlugins.plugins,
      structureTool({
        defaultDocumentNode: (S) =>
          S.document().views([S.view.form(), referencesView(S)]),
      }),
    ],

    schema: {
      types: [...acidSystemsSchema],
    },
  },

  {
    basePath: '/notes',
    name: 'notes',
    title: 'Notes',
    icon: BrainCog,

    ...sharedConfig,

    plugins: [
      ...sharedPlugins.plugins,
      structureTool({}),
      youtubeInput({
        // @ts-ignore
        apiKey: process.env.YOUTUBE_API_KEY,
      }),
    ],

    schema: {
      types: [...notesSchema],
    },
  },
])
