<template>
  <div class="mx-auto w-96 bg-white shadow p-5 mt-5 rounded-xl">
    <h1 class="font-bold text-2xl">{{ animee.title }}</h1>
    <p>
      {{ animee.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["animee"],
};
</script>

<style>
</style>