import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kata-cafe.github.io',
  base: '/kata-cafe',
  integrations: [tailwind()],
});
