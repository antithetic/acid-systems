// @ts-check
import {defineConfig, fontProviders} from 'astro/config'

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
})
