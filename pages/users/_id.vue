<template>
  <div class="h-16 bg-black w-full">
    <div
      @click="handleLayout"
      class="bg-slate-300 w-full h-full fixed top-0 left-0 -z-10"
      :class="click ? 'hidden' : ''"
    ></div>
    <div class="text-white">
      <i
        @click="handleClick"
        class="text-2xl cursor-pointer md:hidden"
        :class="click ? 'fas fa-bars' : 'fas fa-times'"
      ></i>
    </div>
    <!-- nave -->
    <ul
      class="
        text-white text-xl
        z-[2]
        absolute
        w-full
        left-0
        opacity-70
        top-[50px]
        transition-all
        ease-in
        duration-500
        md:flex md:justify-end
      "
    >
      <nuxt-link v-for="d in data" :key="d.ulr" :to="d.ulr" class="md:p-2">
        <li>{{ d.label }}</li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  layout: "contact",
  data() {
    return {
      click: true,
      data: [
        { ulr: "/users/1", label: "User 1" },
        { ulr: "/users/2", label: "User 2" },
        { ulr: "/users/3", label: "User 3" },
      ],
    };
  },
  methods: {
    handleClick() {
      this.click = !this.click;
    },
    handleLayout() {
      this.click = true;
    },
  },
};
</script>

<style>
</style>

