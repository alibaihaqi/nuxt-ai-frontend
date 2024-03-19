// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/web-vitals',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
    ],
  },
  ssr: true,
  webVitals: {
    debug: false,
    disabled: false
  }
})
