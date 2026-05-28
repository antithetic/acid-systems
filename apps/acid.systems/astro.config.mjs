// @ts-check
import {defineConfig, fontProviders} from 'astro/config'

import sanity from '@sanity/astro'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Instrument Serif',
      cssVariable: '--font-serif',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
    },
  ],

  integrations: [
    sanity({
      projectId: 'nmhp3u9m',
      dataset: 'production',
      apiVersion: '2026-05-27',
      useCdn: false,
    }),
    react(),
  ],
})
