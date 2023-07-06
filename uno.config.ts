import { defineConfig, presetUno } from 'unocss'

import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx(),
  ],

  transformers: [
    transformerVariantGroup(),
  ],

  theme: {
    fontFamily: {
      sans: "Sora"
    }
  }
})
