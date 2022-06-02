<template>
  <div>
    <header
      class="
        bg-[#2b2d42]
        h-[68px]
        flex
        justify-center
        fixed
        top-0
        left-0
        w-full
      "
    >
      <nav
        class="
          text-[#bcbedc]
          items-center
          flex
          h-full
          mx-[50px]
          max-w-[1050px]
          w-full
        "
      >
        <a
          href="/"
          class="items-center inline-flex h-[55px] w-[65px] justify-center"
        >
          <img
            src="https://anilist.co/img/icons/icon.svg"
            alt="Logo"
            class="w-[50px] h-[50px]"
          />
        </a>
        <div class="items-center inline-flex justify-center capitalize w-full">
          <span class="realtive">
            <nuxt-link to="/search/anime" class="links px-4 py-[18px]"
              >Search</nuxt-link
            >
            <div></div>
          </span>
          <nuxt-link to="/" class="links px-4 py-[18px]">Social</nuxt-link>
          <nuxt-link to="/" class="links px-4 py-[18px]">Forum</nuxt-link>
          <nuxt-link to="/" class="links ml-[70px] pr-6 px-4 py-[18px]"
            >Login</nuxt-link
          >
          <nuxt-link to="/" class="signUp">Sign Up</nuxt-link>
        </div>
      </nav>
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
<style scoped>
.signUp {
  background: #3577ff;
  border-radius: 6px;
  box-shadow: 0 0 0 rgb(8 150 230 / 60%);
  color: white;
  font-size: 14px;
  font-weight: 800;
  margin-right: -70px;
  padding: 10px 15px;
}
.signUp:hover {
  transition: box-shadow 0.6s ease, transform 0.2s ease-in-out;
}
.links {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.14px;
  line-height: 16.1px;
}
</style>
