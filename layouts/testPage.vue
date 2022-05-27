<template>
  <div>
    <header>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/test">TEST</nuxt-link>
        </li>
      </ul>
      <div>tesPage Layout: {{ counter }}</div>
    </header>
    <Nuxt />
  </div>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.readCounter;
    },
  },
};
</script>
