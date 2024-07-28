export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en-US',
  messages: {
    "en-US": {
      welcome: 'Welcome',
      recent_posts: 'Recent Posts',
      read_more: 'Read More',
    },
    "zh-CN": {
      welcome: '欢迎',
      recent_posts: '最新文章',
      read_more: '更多',
    },
  },
}))
