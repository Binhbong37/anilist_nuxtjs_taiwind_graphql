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
              form-control
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
            @focus="resetValue(genreKey)"
            v-model="genreKey"
            class="
              form-control
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
              form-control
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
            name="seasons"
            placeholder="Any"
            list="seasons"
          />
          <datalist id="seasons">
            <div v-for="s in seasons" :key="s">
              <option class="text-black bg-white" :value="s"></option>
            </div>
          </datalist>
        </div>
      </div>
      <div class="mr-4">
        <div>Format</div>
        <div>
          <input
            class="
              form-control
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
            name="formats"
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
import { listGenres, seasons, formatList } from "../static/const-variables";
export default {
  name: "SearchBar",
  data() {
    return {
      display: true,
      genres: listGenres,
      seasons: seasons,
      formats: formatList,
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
        path: "/search/anime",
        query: value.reduce((prev, curr) => {
          if (curr.value === "") {
            return prev;
          }
          return Object.assign(prev, { [curr.key]: curr.value });
        }, {}),
      });
    },
  },

  methods: {
    resetValue(key) {
      console.log("reset:", key);
    },
  },
};
</script>
