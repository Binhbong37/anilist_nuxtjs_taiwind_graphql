<template>
  <div>
    <h1>Fetch data</h1>
    <!-- Form search -->
    <form>
      <input
        type="text"
        name="search"
        class="border-2 rounded py-2 px-4"
        placeholder="Any"
        v-model="search"
      />
      <button @click.prevent="takeSearchInput" class="btn">click</button>
    </form>
    <div class="grid grid-cols-5 gap-5">
      <nuxt-link
        v-for="(trend, idex) in pageData"
        :key="idex"
        :to="`anime/${trend.id}`"
      >
        <img :src="trend.coverImage.medium" alt="medium" class="my-0 mx-auto" />
        <h1 class="text-center">{{ trend.id }} {{ trend.title.english }}</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
const getPage = gql`
  query getTag($page: Int) {
    Page(page: $page) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        title {
          english
          native
        }
        coverImage {
          large
          medium
        }
        id
        genres
      }
    }
  }
`;
export default {
  data() {
    return {
      page: 1,
      pageData: [],
      search: "",
    };
  },
  apollo: {
    Page: {
      query: getPage,
      variables() {
        return {
          page: this.page,
        };
      },
    },
  },

  methods: {
    takeSearchInput() {
      const newDataSearch = this.pageData.filter((data) => {
        const newData = data.title.english.toLowerCase();

        return newData.includes(this.search);
      });
      return (this.pageData = newDataSearch);
    },
    handleScroll() {
      const log1 = window.scrollY;
      const log2 = window.innerHeight;
      const log3 = document.body.scrollHeight - 50;
      if (log1 + log2 >= log3) {
        this.page++;
        console.log(this.page);
        const newPage = this.Page.media;
        this.pageData = [...this.pageData, ...newPage];
      }
    },
  },
  mounted() {
    this.pageData = this.Page.media;
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
</style>