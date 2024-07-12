export const navbarData = {
  homeTitle: 'GOSIM Blog',
}

export const footerData = {
  author: 'GOSIM Foundation',
  aboutAuthor: 'Hi! I am Riyad, a Tech enthusiast, problem solver and software engineer. Currently working at Appscode Inc.',
  authorInterest: 'I have a fair amount of knowledge of Javascript, Typescript, VueJs, and Nuxt. If you have an interesting idea, either open source or paid let\'s connect.',
  aboutTheSite: 'This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it\'s deployed in Vercel.',
}

export const homePage = {
  title: 'Global Open-Source Innovation Meetup',
  description: 'Created by the Open-Source Community, For the Open-Source Community.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'All blogs published by GOSIM Foundation.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Posts under various categories that were #tagged in the posts.',
}

export const aboutPage = {
  title: 'GOSIM',
  description: 'Global Open-Source Innovation Meetup',
  aboutMe: 'Created by the Open-Source Community, For the Open-Source Community.',
}

export const seoData = {
  description: 'Riyad, Software Engineer at AppsCode, with over 2.5+ years experience in software development.',
  ogTitle: 'Riyad codes and helps others learn Javascript, Typescript, Vue, Nuxt, & Problem Solving',
  twitterDescription: 'My blog website, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app',
  twitterHandle: '@qdnvubp',
  mailAddress: 'asadnurriyad@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
