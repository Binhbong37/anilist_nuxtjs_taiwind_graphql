<template>
  <div class="container mx-auto">
    <p>{{ test }}</p>
    <img src="../assets/images/banner.jpg" alt="Banner" />
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    console.log(this.title);
    return {
      test: this.title,
    };
  },
};
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
