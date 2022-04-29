<template>
  <div class="container font-bold mt-5 mx-auto">
    <h1 v-if="error.statusCode === 404">NOT FOUND PAGE!!!</h1>
    <h1 v-else>PAGE FOUND DIFFERENT</h1>
    <nuxt-link to="/" class="text-red-500 hover:text-amber-400">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "empty",
};
</script>

<style>
</style>