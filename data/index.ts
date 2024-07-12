export const navbarData = {
  homeTitle: 'GOSIM Blog',
}

export const footerData = {
  author: 'GOSIM',
  aboutAuthor: 'Global Open-Source Innovation Meetup',
  authorInterest: 'Open-Source, Rust, App Development, UI, Web, Cross-Platform, Mobile, Android, iOS, Linux, Windows, macOS, WGPU, Matrix, Fediverse',
  aboutTheSite: 'This is the blog site of GOSIM.org',
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
  description: 'GOSIM is a grassroots organization dedicated to promoting open-source software development and innovation.',
  ogTitle: 'GOSIM Foundation',
  twitterDescription: 'GOSIM: Global Open-Source Innovation Meetup',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog.gosim.org',
  twitterHandle: '@gosimfoundation',
  mailAddress: 'info@gosim.org',
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
