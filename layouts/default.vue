<template>
  <div>
    <nav
      class="
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
            id="menu"
            name="menu"
            @click="toggleMenu"
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
      >
        <li v-for="menu in navbar" :key="menu.url" class="mx-4 my-6 md:my-0">
          <nuxt-link
            :to="menu.url"
            class="text-xl hover:text-cyan-700 duration-500"
            >{{ menu.lable }}</nuxt-link
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
      navbar: [
        { url: "/", lable: "Home" },
        { url: "/search/anime", lable: "Search" },
        { url: "/responsive", lable: "List" },
      ],
    };
  },
  methods: {
    toggleMenu: () => {
      const toggleMenu = document.getElementById("menu");
      const list = document.querySelector("ul");
      console.log(toggleMenu.name);
      if (toggleMenu.name === "menu") {
        toggleMenu.name = "close";
        list.classList.add("top-[40px]");
        list.classList.add("opacity-70");
      } else {
        toggleMenu.name = "menu";
        list.classList.remove("top-[40px]");
        list.classList.remove("opacity-70");
      }
    },
  },
};
</script>
      