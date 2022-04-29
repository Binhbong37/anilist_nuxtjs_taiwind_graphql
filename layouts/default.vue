<template>
  <div>
    <div
      class="
        bg-[#152232]
        min-h-[68px]
        text-[#a0b1c5]
        flex
        justify-between
        leading-[18.4px]
        px-[155px]
      "
    >
      <img
        src="https://anilist.co/img/icons/icon.svg"
        alt="logo"
        class="w-[50px] h-[50px] mt-2"
      />
      <div class="flex">
        <ul class="flex text-[14px] leading-[64px] justify-center mr-16">
          <li
            v-for="i in rutas"
            :key="i.item"
            class="hover:text-slate-100 px-2"
          >
            <nuxt-link :to="i.item">{{ i.label }}</nuxt-link>
          </li>
        </ul>
        <ul class="flex text-[14px] leading-[64px] justify-center">
          <li v-for="i in 2" :key="i" class="hover:text-slate-100 px-2">
            <nuxt-link to="/">SignUp</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <Nuxt />

    <div class="bg-[#152232] min-h-[64px] min-w-full">
      <div class="grid grid-cols-3">
        <div>
          <h1 class="text-center text-2xl text-white">FOOTER</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rutas: [
        { item: "/", label: "HOME" },
        { item: "/users/1", label: "LIST" },
        { item: "/contact", label: "CONTACT" },
      ],
    };
  },
};
</script>

<style scoped>
</style>