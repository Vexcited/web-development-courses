import { defineConfig } from "astro/config";

import uno from "unocss/astro";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    uno({ injectReset: true }),
    mdx()
  ],

  site: 'https://vexcited.github.io',
  base: '/web-development-courses',

  markdown: {
    shikiConfig: {
      theme: "nord",
      wrap: true
    }
  }
});
