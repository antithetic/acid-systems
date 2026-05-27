// @ts-check
import {defineConfig} from 'astro/config'
import { fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Instrument Serif",
    cssVariable: "--font-serif",
  }]
})
