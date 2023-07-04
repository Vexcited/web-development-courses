import { defineConfig } from "astro/config";

import uno from "unocss/astro";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    uno({ injectReset: true }),
    mdx()
  ]
});
