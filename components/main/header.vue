<script setup lang="ts">
import { navbarData } from '../../data'

const switchLocalePath = useSwitchLocalePath()

const colorMode = useColorMode()
function onClick(val: string) {
  colorMode.preference = val
}
</script>

<template>
  <div class="py-4 border-b dark:border-gray-800 font-semibold">
    <div class="flex px-5 container max-w-7xl justify-between mx-auto items-baseline ">
      <ul class="flex items-baseline space-x-5">
        <li class="text-base sm:text-4xl font-bold">
          <NuxtLink to="/">
            <NuxtImg src="/gosim-logo2.svg" width="120" quality="50" class="rounded-md" />
            <!-- {{ navbarData.homeTitle }} -->
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-xl">
        <!-- <li>
          <a href="https://gosim.org"
            class="block text-center w-full bg-sky-700 hover:bg-cyan-500 p-2 rounded-lg text-[#F1F2F4] text-sm">
            <Icon name="fa:home" size="1.6em" />
          </a>
        </li> -->
        <li>
          <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="switchLocalePath('zh')">中文</NuxtLink>
        </li>
        <!-- <li>
          <button @click="setLocale('en-US')">en</button>
        </li>
        <li>
          <button @click="setLocale('zh-CN')">中文</button>
        </li> -->
        <!-- <li>
          <NuxtLink to="/blogs">
            All Blogs
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories">
            Categories
          </NuxtLink>
        </li>
        <li title="About Me">
          <NuxtLink to="/about" aria-label="About me">
            About
          </NuxtLink>
        </li> -->

        <!-- <li>
          <ClientOnly>
            <button v-if="colorMode.value === 'light'" name="light-mode" title="Light"
              class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onClick('dark')">
              <Icon name="icon-park-solid:moon" size="20" />
            </button>
            <button v-if="colorMode.value === 'dark'" name="dark-mode" title="Dark"
              class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onClick('light')">
              <Icon name="noto:sun" size="20" />
            </button>
            <template #fallback>
        <Icon name="svg-spinners:180-ring" size="20" />
            </template>
          </ClientOnly>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<style>
.router-link-active .router-link-exact-active  {
  @apply underline
}
</style>
