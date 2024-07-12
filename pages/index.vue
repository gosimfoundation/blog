<script lang="ts" setup>
import { navbarData } from '~/data'

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

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings',
  title: navbarData.homeTitle,
  description: 'Welcome to GOSIM',
  link: '/gosim-logo2.svg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <!-- <MainTrending /> -->
  </main>
</template>
