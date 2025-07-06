import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  srcDir: './src', // 👈 très important
  integrations: [tailwind()],
});
