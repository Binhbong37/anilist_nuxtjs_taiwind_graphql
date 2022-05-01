<template>
  <div class="container mx-auto">
    <h1>RESPONSIVE PAGE !!!</h1>
    <div class="flex justify-between font-medium md:text-xl">
      <h1>POPULATON</h1>
      <h1>View All</h1>
    </div>
    <div
      class="
        grid grid-cols-2
        gap-4
        sm:grid-cols-3 sm:gap-3
        md:grid-cols-5 md:gap-5
      "
    >
      <div v-for="i in 5" :key="i">
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140960-Yl5M3AiLZAMq.png"
          alt="LOGO"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
};
</script>

<style>
</style>