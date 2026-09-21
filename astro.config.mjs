// @ts-check
import { defineConfig } from 'astro/config';

// User site (izzyll.github.io): served from the domain root, so no `base`.
export default defineConfig({
  site: 'https://izzyll.github.io',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
