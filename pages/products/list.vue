<template>
  <div class="container mx-auto">
    <h1>This is PAGE products</h1>
    <h2 class="font-xl">{{ $route.params }}</h2>
    <ul>
      <li v-for="i in 5" :key="i">Items: {{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "ABC",
    };
  },
};
</script>