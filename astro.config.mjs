// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://fastidious-sopapillas-c892ad.netlify.app/",
  integrations: [preact()]
});