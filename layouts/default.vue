<template>
  <div class="gd-container font-redhat ">
    <header class="fixed w-full bg-[#F1F2F4] dark:bg-slate-950 z-10">
      <MainHeader />
    </header>
    <main class="font-redhat">
      <div class="p-9" />
      <slot />
    </main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<style scoped>
.gd-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>
