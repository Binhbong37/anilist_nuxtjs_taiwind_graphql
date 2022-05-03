<template>
  <div>
    <h1 class="font-bold">{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
</style>