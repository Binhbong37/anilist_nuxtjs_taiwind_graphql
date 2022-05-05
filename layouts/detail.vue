<template>
  <div>
    <nav
      class="
        absolute
        w-full
        h-[68px]
        z-10
        px-[135px]
        bg-[#2b2d42]
        opacity-50
        hover:opacity-100
        text-white
        shadow
        cursor-pointer
        transition
        delay-150
        duration-300
        ease-linear
        md:flex md:items-center md:justify-between
      "
    >
      <div class="flex justify-between items-center mx-2">
        <nuxt-link to="/" class="">
          <img
            src="https://anilist.co/img/icons/icon.svg"
            alt="logo"
            class="h-10 w-10"
            @click="click = true"
          />
          Analist
        </nuxt-link>
        <span class="text-white text-2xl cursor-pointer md:hidden block z-10">
          <i
            class="
              fas
              fa-bars
              text-2xl
              hover:text-slate-50
              leading-[64px]
              cursor-pointer
              md:hidden
            "
            @click="toggleMenu"
            :class="click ? 'fas fa-bars' : 'fas fa-times'"
          ></i>
        </span>
      </div>
      <ul
        class="
          md:flex md:items-center
          z-[2]
          md:z-auto md:static
          absolute
          bg-[#2b2d42]
          w-full
          left-0
          md:w-auto md:pl-0
          pl-5
          md:opacity-100
          opacity-0
          top-[-300px]
          transition-all
          ease-in
          duration-500
        "
        :class="!click ? 'top-[40px] opacity-100' : ''"
      >
        <li
          v-for="menu in navbar"
          :key="menu.url"
          class="mx-4 my-6 md:my-0"
          @click="click = true"
        >
          <nuxt-link
            :to="menu.url"
            class="text-xl hover:text-cyan-700 duration-500"
            >{{ menu.lable }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
    <Nuxt />
    <!-- footer -->
    <div class="bg-black min-h-[50px]"></div>
  </div>
</template>
<script>
export default {
  name: "PageLayout",
  data() {
    return {
      click: true,
      navbar: [
        { url: "/", lable: "Home" },
        { url: "/search/anime", lable: "Search" },
        { url: "/responsive", lable: "List" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.click = !this.click;
    },
  },
};
</script>
      