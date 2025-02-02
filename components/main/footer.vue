<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.fullPath.replace('/', ''))
</script>

<template>
  <div class="py-5 bg-[#006d87] border-t dark:border-gray-800 mt-5 text-zinc-700 dark:text-zinc-300 text-2xl">
    <div class="px-6 container max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <FooterSite v-if="path === 'about'" />
        <FooterSite v-else-if="path === 'zh/about'" />
        <FooterDeveloper v-else />
        <FooterLink />
        <FooterConnect />
      </div>

      <div class="py-4 border-t dark:border-gray-800 mt-5 text-center text-gray-200 text-lg p-2">
        © 2024
        <a href="https://gosim.org" target="_blank" rel="nofollow" class="hover:underline">GOSIM Foundation</a>
      </div>
    </div>
  </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
