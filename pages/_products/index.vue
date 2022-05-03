<template>
  <div
    id="header"
    class="flex justify-between fixed top-0 right-0 w-full bg-slate-100 shadow"
  >
    <a
      href="#"
      class="h-[60px] leading-[60px] font-bold text-2xl cursor-pointer pl-6"
      >Logo</a
    >
    <div
      @click="handleToggle"
      id="toggle"
      class="
        absolute
        top-0
        right-0
        w-14
        h-14
        cursor-pointer
        flex
        justify-center
        bg-[#9051ff]
        transition
        delay-200
      "
      :active="toggle"
    ></div>
    <div
      id="navbar"
      class="relative h-14 right-14 transition-all w-0 overflow-hidden"
    >
      <ul class="relative flex flex-row">
        <nuxt-link
          v-for="nav in navbar"
          :key="nav.label"
          :to="nav.path"
          class="leading-[60px] px-4 hover:text-white hover:bg-black"
          >{{ nav.label }}</nuxt-link
        >
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      navbar: [
        { path: "/", label: "Home" },
        { path: "/", label: "Contact" },
        { path: "/", label: "About" },
        { path: "/", label: "Sevice" },
        { path: "/", label: "Team" },
      ],
      toggle: true,
    };
  },
  methods: {
    handleToggle(e) {
      const header = document.getElementById("header");
      const toggle = document.getElementById("toggle");
      const nabar = document.getElementById("navbar");

      toggle.classList.toggle("active");
      nabar.classList.toggle("active");
      // this.toggle = !this.toggle;
    },
  },
};
</script>
<style scoped>
#toggle::before {
  content: "";
  position: absolute;
  transition: 0.2s;
  transform: translateY(-10px);
  background: #fff;
  width: 28px;
  height: 3px;
}
#toggle::after {
  content: "";
  position: absolute;
  width: 28px;
  height: 3px;
  transition: 0.2s;
  transform: translateY(10px);
  background: #fff;
}
#toggle.active::after {
  transform: translateY(0) rotate(45deg);
}

#navbar.active {
  width: 400px;
}
</style>