<template>
  <div>
    <nav
      class="
        w-full
        px-[56px]
        bg-[#2b2d42]
        text-white
        shadow
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
        <li class="mx-4 my-6 md:my-0" @click="click = true">
          <nuxt-link to="/" class="text-xl hover:text-cyan-700 duration-500"
            >Home</nuxt-link
          >
        </li>
        <li
          class="mx-4 my-6 md:my-0 relative"
          @mouseenter="handleDropdown"
          @mouseleave="handleCloseDropdown"
        >
          <nuxt-link
            to="/search/anime"
            class="text-xl hover:text-cyan-700 duration-500"
            @click="click = true"
            >Search <i class="fas fa-caret-down"></i>
          </nuxt-link>
          <ul
            v-if="dropdown"
            class="absolute bg-[#2b2d42] md:min-h-[60px] md:top-10"
          >
            <li>
              <nuxt-link
                to="/search/anime"
                class="p-5 hover:text-cyan-700"
                @click="click = true"
                >Anime</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/search/manga"
                class="p-5 mt-3 hover:text-cyan-700"
                @click="click = true"
                >Manga</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li class="mx-4 my-6 md:my-0" @click="click = true">
          <nuxt-link
            to="/responsive"
            class="text-xl hover:text-cyan-700 duration-500"
            >List</nuxt-link
          >
        </li>
        <li class="mx-4 my-6 md:my-0" @click="click = true">
          <nuxt-link
            to="/users"
            class="text-xl hover:text-cyan-700 duration-500"
            >The band</nuxt-link
          >
        </li>
      </ul>
    </nav>
    <Nuxt class="bg-[#e5ebf1]" />
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
      dropdown: false,
    };
  },
  methods: {
    toggleMenu() {
      this.click = !this.click;
      this.dropdown = false;
    },
    handleDropdown() {
      this.dropdown = true;
    },
    handleCloseDropdown() {
      this.dropdown = false;
    },
  },
};
</script>
      