<template>
  <div class="px-[50px] md:px-20 lg:px-[135px]">
    <!-- Population -->
    <div class="pt-12">
      <div class="flex justify-between">
        <h1 class="hover:text-red-500 cursor-pointer">Population</h1>
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </div>
      <div
        class="
          grid grid-cols-2
          gap-4
          sm:grid-cols-3 sm:gap-x-3
          md:grid-cols-5 md:gap-x-5
        "
      >
        <nuxt-link
          to="/anime/2"
          v-for="i in 5"
          :key="i"
          class="hover:text-red-500"
        >
          <img src="../assets/images/medium.png" alt="Image" class="rounded" />
          <h1>Title of Movies</h1>
        </nuxt-link>
      </div>
    </div>
    <!-- Next-Season -->
    <div class="pt-12">
      <div class="flex justify-between">
        <h1 class="hover:text-red-500 cursor-pointer">Next Season</h1>
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </div>
      <div
        class="
          grid grid-cols-2
          gap-4
          sm:grid-cols-3 sm:gap-x-3
          md:grid-cols-5 md:gap-x-5
        "
      >
        <nuxt-link
          to="/anime/1"
          v-for="i in 5"
          :key="i"
          class="hover:text-red-500"
        >
          <img
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140960-Yl5M3AiLZAMq.png"
            alt="Image"
            class="rounded"
          />
          <h1>Title of Movies</h1>
        </nuxt-link>
      </div>
    </div>

    <!-- Top 100 -->
    <div class="mt-12 pb-12">
      <div class="flex justify-between">
        <h1 class="hover:text-red-500">Top-100</h1>
        <h1 class="hover:text-red-500">View All</h1>
      </div>
      <div class="">
        <div
          class="bg-white rounded overflow-hidden shadow-md min-h-[40px] mb-6"
        >
          <h1>Title of Movies</h1>
        </div>
        <div
          class="bg-white rounded overflow-hidden shadow-md min-h-[40px] mb-6"
        >
          <h1>Title of Movies</h1>
        </div>
        <div
          class="bg-white rounded overflow-hidden shadow-md min-h-[40px] mb-6"
        >
          <h1>Title of Movies</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: "Binh-1", id: 1 },
        { name: "Binh-2", id: 2 },
        { name: "Binh-3", id: 3 },
        { name: "Binh-4", id: 4 },
        { name: "Binh-5", id: 5 },
      ],
      products: [
        { item: "Banana", id: 1 },
        { item: "Apple", id: 2 },
        { item: "Tomato", id: 3 },
      ],
    };
  },
  methods: {
    gotoUser() {
      this.$router.push("/users");
    },
  },
};
</script>