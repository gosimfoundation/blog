import { navbarData, seoData } from './data'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: navbarData.homeTitle,
      titleTemplate: `%s - ${navbarData.homeTitle}`,
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  devServer: {
    port: 3001, // or any other desired port number
  },

  devtools: {
    enabled: true,
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  site: {
    url: seoData.mySite,
    identity: {
      type: 'Organization',
    },
    twitter: seoData.twitterHandle,
  },

  typescript: {
    strict: true,
  },

  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  generate: {
    fallback: "404.html", // Needed for GitHub Pages SPA mode
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'dark',
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
    "@nuxtjs/i18n"
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  compatibilityDate: '2024-07-11',

  i18n: {
    lazy: true,
    langDir: 'locales/',
    locales: [
      {
        name: 'English',
        code: 'en',
        language: 'en-US',
        file: 'en-US.ts'
      },
      {
        name: '中文',
        code: 'zh',
        language: 'zh-CN',
        file: 'zh-CN.ts'
      },
    ],
    defaultLocale: 'en',
  },
})