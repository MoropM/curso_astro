// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: 'server', // SSR (Se activa el Server Site Rendering) -- hybrid (SSR + CSR)
});