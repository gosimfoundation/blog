import { navbarData, seoData } from './data'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/blog/", // Replace with your GitHub repository name
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: navbarData.homeTitle,
      titleTemplate: `%s - ${navbarData.homeTitle}`,
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  nitro: {
    preset: "static", // Forces a fully static build
  },
  generate: {
    fallback: "404.html", // Needed for GitHub Pages SPA mode
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
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
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
        iso: 'en-US',
        file: 'en-US'
      },
      {
        name: '中文',
        code: 'zh',
        iso: 'zh-CN',
        file: 'zh-CN'
      },
    ],
    defaultLocale: 'en',
  },
})

export default defineNuxtConfig({
  app: {
    baseURL: "/your-repo-name/", // Replace with your GitHub repository name
  },
  nitro: {
    preset: "static", // Forces a fully static build
  },
  generate: {
    fallback: "404.html", // Needed for GitHub Pages SPA mode
  }
});