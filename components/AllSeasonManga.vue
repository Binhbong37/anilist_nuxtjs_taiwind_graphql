<template>
  <div>
    <div class="px-[10px] md:px-5 lg:px-[135px]">
      <h1 class="text-2xl font-bold pt-12 mb-5">{{ title }}</h1>

      <div class="flex justify-between">
        <div class="bg-white py-3 px-3 rounded inline-block mr-5">
          <i class="fas fa-search text-slate-400"></i>
          <input
            type="text"
            name="search"
            class="rounded px-2 outline-0"
            placeholder="Search . . ."
            v-model="valueInputSearch"
          />
        </div>
        <div
          class="relative py-2 px-4 cursor-pointer"
          @click="handleShowModal"
          @mouseleave="hideModal"
        >
          <i class="fas fa-sort"></i>
          <span>{{ sortValue }}</span>
          <ul v-if="showModal" class="bgConfig">
            <li class="item">
              <label for="trending" @click="handleAddRoute('TRENDING_DESC')"
                >Trending</label
              >
              <input
                id="trending"
                type="radio"
                v-model="sortValue"
                value="Trending"
                class="hidden"
              />
            </li>
            <li class="item">
              <label for="popularity" @click="handleAddRoute('POPULARITY_DESC')"
                >Popularity</label
              >
              <input
                id="popularity"
                type="radio"
                v-model="sortValue"
                value="Popularity"
                class="hidden"
              />
            </li>
            <li class="item">
              <label for="title" @click="handleAddRoute('TITLE_ROMAJI')"
                >Title</label
              >
              <input
                id="title"
                type="radio"
                v-model="sortValue"
                value="Title"
                class="hidden"
              />
            </li>
            <li class="item">
              <label for="favorite" @click="handleAddRoute('FAVOURITES_DESC')"
                >Favorites</label
              >
              <input
                id="favorite"
                type="radio"
                v-model="sortValue"
                value="Favorites"
                class="hidden"
              />
            </li>
          </ul>
        </div>
      </div>

      <div
        class="
          grid
          lg:grid-cols-5 lg:gap-[39px]
          md:grid-cols-5 md:gap-[21px]
          grid-cols-3
          gap-[12px]
        "
      >
        <nuxt-link
          v-for="(trending, index) in seasonFilter"
          :key="index"
          :to="`/manga/${trending.id}`"
          class="
            mt-5
            transform
            hover:scale-105
            transition
            ease-in-out
            duration-500
          "
        >
          <img
            :src="trending.coverImage.large"
            alt="Trending"
            class="
              rounded
              w-[138px]
              h-[160px]
              lg:w-full lg:h-[265px]
              md:h-[190px]
            "
          />
          <h1 class="manga-title mt-3">{{ trending.title.userPreferred }}</h1>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    season: {
      type: Array,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      valueInputSearch: "",
      showModal: false,
      sortValue: "Trending",
    };
  },
  methods: {
    handleShowModal() {
      this.showModal = true;
    },
    hideModal() {
      this.showModal = false;
    },

    handleAddRoute(route) {
      this.$router.push({
        path: "/search/manga",
        query: { sort: route },
      });
    },
  },
  computed: {
    seasonFilter() {
      return this.season.filter((trend) => {
        const lowerText = trend.title.english || trend.title.native;
        const upperText = trend.title.english || trend.title.native;
        lowerText.toLowerCase();
        upperText.toUpperCase();
        return (
          lowerText.includes(this.valueInputSearch) ||
          upperText.includes(this.valueInputSearch)
        );
      });
    },
  },
};
</script>

<style scope>
.bgConfig {
  background: white;
  width: 150px;
  position: absolute;
  z-index: 10;
  right: -20px;
  border-radius: 5px;
}
.item {
  margin-left: 12px;
  padding: 10px;
}
.item label:hover {
  color: rgb(70, 186, 186);
  cursor: pointer;
}
.manga-title {
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>