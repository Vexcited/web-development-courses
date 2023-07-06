import { defineConfig, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx(),
  ],

  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],

  theme: {
    fontFamily: {
      sans: "Sora"
    }
  }
})
