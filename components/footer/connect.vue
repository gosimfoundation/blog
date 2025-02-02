<script setup lang="ts">
import { footerData, seoData } from '~/data'
</script>

<template>
  <div class="flex justify-end">
    <!-- <p class="text-black dark:text-zinc-300   text-base font-semibold">
      Connect With Us
    </p> -->
    <!-- <p class="dark:text-zinc-300  ">
      {{ footerData.authorInterest }}
    </p> -->

    <!-- <a
      :href="`mailto: ${seoData.mailAddress}`"
      class="block text-center w-full bg-sky-700 p-2 rounded-lg text-[#F1F2F4]  mt-3 text-sm"
    >
      Sent Mail
    </a> -->
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink to="https://gosim.org" target="_blank"
        class="p-2 bg-cyan-700 text-white rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]" aria-label="Home">
        <Icon name="fa:home" size="1em" />
      </NuxtLink>
      <NuxtLink to="https://github.com/gosimfoundation" target="_blank"
        class="p-2 bg-cyan-700 text-white rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]" aria-label="GitHub">
        <Icon name="fa:github" size="1em" />
      </NuxtLink>
      <NuxtLink to="https://mastodon.social/@gosim" target="_blank"
        class="p-2 bg-cyan-700 text-white rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]" aria-label="Mastodon">
        <Icon name="cib:mastodon" size="1em" />
      </NuxtLink>
      <NuxtLink to="https://www.youtube.com/@GOSIMFoundation" target="_blank"
        class="p-2 bg-cyan-700 text-white rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]" aria-label="YouTube">
        <Icon name="fa:youtube" size="1em" />
      </NuxtLink>
      <NuxtLink to="https://twitter.com/gosimfoundation" target="_blank"
        class="p-2 bg-cyan-700 text-white rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]" aria-label="X">
        <Icon name="fa:twitter" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>
