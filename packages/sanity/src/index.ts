import {theme} from 'https://themer.sanity.build/api/hues?default=898586&primary=807986&transparent=888686&positive=43d675;300&caution=fbd024;200&darkest=121111'

import {visionTool} from '@sanity/vision'
import {Cannabis, BrainCog} from 'lucide-react'
import {customColorPicker} from 'sanity-plugin-color-input'
import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'
import {ptString} from 'sanity-plugin-pt-string'
import {references, referencesView} from 'sanity-plugin-references'
import {richDate} from '@sanity/rich-date-input'
import {singletonTools} from 'sanity-plugin-singleton-management'
import {structureTool} from 'sanity/structure'
import {tags} from 'sanity-plugin-tags-v4'
import {youtubeInput} from 'sanity-plugin-youtube-input'

import {webhooksTrigger} from 'sanity-plugin-webhooks-trigger'

import {acidSystemsSchema} from './acid.systems/schema'
import {notesSchema} from './notes/schema'
import {notesStructure} from './notes/structure'

export const sharedConfig = {
  theme,
  projectId: 'nmhp3u9m',
  dataset: 'production',
}

export const sharedPlugins = {
  plugins: [
    visionTool(),
    media(),
    webhooksTrigger(),
    references(),
    richDate(),
    singletonTools(),
    tags(),
  ],
}
export const config = defineConfig([
  {
    basePath: '/acid-systems',
    name: 'acid-systems',
    title: 'Acid Systems',
    icon: Cannabis,

    ...sharedConfig,
    plugins: [
      structureTool({
        defaultDocumentNode: (S) =>
          S.document().views([S.view.form(), referencesView(S)]),
      }),
      ...sharedPlugins.plugins,
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
      structureTool({
        structure: notesStructure,
      }),
      ...sharedPlugins.plugins,
      youtubeInput({
        // @ts-ignore
        apiKey: process.env.YOUTUBE_API_KEY,
      }),
      customColorPicker(),
      ptString(),
    ],

    schema: {
      types: [...notesSchema],
    },
  },
])
