<template>
  <div>
    <Header />
    <Nuxt class="mt-20" />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  components: { Header, Footer },
  name: "PageLayout",
};
</script>
      