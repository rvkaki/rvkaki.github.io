import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import a11yEmoji from "@fec/remark-a11y-emoji";
import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://rjvieira.com",
  integrations: [
    mdx({
      remarkPlugins: [a11yEmoji],
    }),
    sitemap(),
    tailwind(),
    react(),
  ],
});
