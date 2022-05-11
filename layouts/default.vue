<template>
  <div>
    <Header />
    <Nuxt class="bg-[#e5ebf1] mt-20" />
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
      