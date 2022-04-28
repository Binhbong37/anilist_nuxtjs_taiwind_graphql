<template>
  <div class="container mx-auto">
    <h1>This is Prouduct Page</h1>
    <h2 class="font-xl">{{ $route.params }}</h2>
    <nuxt-link :to="`/${$route.params.products}/list`">Detaile</nuxt-link>
    <button @click="gotoDetail" class="bg-red-500 p-1">Detail</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "ABC",
    };
  },
  methods: {
    gotoDetail() {
      let par = this.$route.params.products;
      this.$router.push(par + "/list");
    },
  },
};
</script>