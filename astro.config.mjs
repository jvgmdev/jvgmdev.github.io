// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jvgmdev.github.io',
  build: { format: 'file' },
  compressHTML: true,
});
