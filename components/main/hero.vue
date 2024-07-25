<script setup lang="ts">
import { homePage } from '~/data'
</script>

<template>
  <div class="container mx-auto rounded-xl my-3 bg-gradient-to-r from-blue-50 to-cyan-100">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6 m-5 text-center font-unbounded">
        <h1 class="text-black dark:text-zinc-300 leading-tight text-4xl md:text-5xl my-5">
          {{ homePage.title }}
        </h1>
        <p class="dark:text-zinc-30 ">
          {{ homePage.description }}
        </p>
      </div>
      <div class="px-6 m-6 justify-self-center">
        <div class="hidden sm:block col-span-3">
          <NuxtImg src="/backdrop1.png" width="500" quality="50" class="rounded-md" />
        </div>
        <!-- <LogoDog /> -->
      </div>
    </div>
  </div>
</template>
