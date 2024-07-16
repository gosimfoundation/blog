<script lang="ts" setup>
// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('recent-post', () =>
  queryContent('/blogs').limit(3).sort({ _id: -1 }).find(),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome',
    },
  ],
})
</script>

<template>
  <div class="my-6 pb-10 px-4 rounded-xl bg-slate-200">
    <div class=" flex flex-row items-center space-x-3 pt-5 mx-3 pb-3">
      <Icon name="mdi:script-text-outline" size="2em" class="text-black dark:text-zinc-300 " />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300 ">
        Recent Post
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5">
      <template v-for="post in formattedData" :key="post.title">
        <BlogCard :path="post.path" :title="post.title" :date="post.date" :description="post.description"
          :image="post.image" :alt="post.alt" :og-image="post.ogImage" :tags="post.tags" :published="post.published" />
      </template>
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>
