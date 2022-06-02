<template>
  <div>
    <div
      class="
        grid
        md:grid-cols-4
        sm:grid-cols-2
        w-11/12
        md:w-11/12
        lg:w-10/12
        xl:w-10/12
        sm:w-11/12
        pt-12
      "
    >
      <div class="mr-4">
        <div class="">Search</div>
        <div>
          <input
            v-model="searchKey"
            class="
              mt-1
              block
              w-full
              px-3
              py-2
              bg-white
              border border-slate-300
              rounded-md
              text-sm
              shadow-sm
              placeholder-slate-400
              focus:outline-none focus:border-green-500
            "
            type="search"
            placeholder="Any"
          />
        </div>
      </div>
      <div class="mr-4">
        <div>Genres</div>
        <div>
          <input
            v-model="genreKey"
            class="
              mt-1
              block
              w-full
              px-3
              py-2
              bg-white
              border border-slate-300
              rounded-md
              text-sm
              shadow-sm
              placeholder-slate-400
              focus:outline-none focus:border-green-500
            "
            type="search"
            placeholder="Any"
            list="genres"
          />

          <datalist id="genres" class="mr-5">
            <div v-for="genre in genres" :key="genre">
              <div v-if="genre == genreKey">
                <option
                  class="text-black bg-white color-green"
                  :value="genre"
                ></option>
              </div>
              <div v-else>
                <option
                  class="text-black bg-white color-green"
                  :value="genre"
                ></option>
              </div>
            </div>
          </datalist>
        </div>
      </div>
      <div class="mr-4">
        <div>Season</div>
        <div>
          <input
            v-model="seasonKey"
            class="
              mt-1
              block
              w-full
              px-3
              py-2
              bg-white
              border border-slate-300
              rounded-md
              text-sm
              shadow-sm
              placeholder-slate-400
              focus:outline-none focus:border-green-500
            "
            type="search"
            placeholder="Any"
            list="seasons"
          />
          <datalist id="seasons">
            <div v-for="season in seasons" :key="season">
              <option class="text-black bg-white" :value="season"></option>
            </div>
          </datalist>
        </div>
      </div>
      <div class="mr-4">
        <div>Format</div>
        <div>
          <input
            class="
              mt-1
              block
              w-full
              px-3
              py-2
              bg-white
              border border-slate-300
              rounded-md
              text-sm
              shadow-sm
              placeholder-slate-400
              focus:outline-none focus:border-green-500
            "
            type="search"
            v-model="formatKey"
            placeholder="Any"
            list="formats"
          />
          <datalist id="formats">
            <div v-for="format in formats" :key="format">
              <option class="text-black bg-white" :value="format"></option>
            </div>
          </datalist>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { listGenres, seasons, formatListManga } from "../../static/variables";
export default {
  name: "SearchBar",
  data() {
    return {
      display: true,
      genres: listGenres,
      seasons: seasons,
      formats: formatListManga,
      searchKey: "",
      genreKey: "",
      yearKey: "",
      seasonKey: "",
      formatKey: "",
    };
  },

  computed: {
    searchValue() {
      return this.$route.query.search;
    },
    searchQuery: function () {
      return [
        {
          key: "search",
          value: this.searchKey,
        },
        {
          key: "genre",
          value: this.genreKey,
        },
        {
          key: "season",
          value: this.seasonKey,
        },
        {
          key: "format",
          value: this.formatKey,
        },
      ];
    },
  },
  watch: {
    searchQuery(value) {
      this.$router.push({
        path: "/search/manga",
        query: value.reduce((prev, cur) => {
          if (cur.value === "") {
            return prev;
          }
          return Object.assign(prev, { [cur.key]: cur.value });
        }, {}),
      });
    },
  },

  methods: {},
};
</script>
