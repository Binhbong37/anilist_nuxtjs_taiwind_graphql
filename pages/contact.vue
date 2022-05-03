<template>
  <div class="container mx-auto p-16">
    <form>
      <input
        type="text"
        name="search"
        class="border-2 rounded py-2 px-4"
        placeholder="Any"
        v-model="search"
      />
      <button class="btn">click</button>
    </form>
    <div v-for="post in filterPosts" :key="post.id">
      <tutorial :post="post"></tutorial>
    </div>
  </div>
</template>

<script>
import Tutorial from "../components/Tutorial.vue";
export default {
  components: { Tutorial },
  data() {
    return {
      search: "",
      posts: [
        { id: 1, title: "Post 1", description: "Vue is cool" },
        { id: 2, title: "Post 2", description: "Beautiful day" },
        { id: 3, title: "Post 3", description: "I have new job" },
      ],
    };
  },
  methods: {
    searchva(e) {
      return this.posts.filter((post) => {
        return post.description.includes(e);
      });
    },
  },
  computed: {
    filterPosts() {
      if (this.search) {
        this.$router.push({ path: "/contact", query: { search: this.search } });
      }
      return this.posts.filter((post) => {
        const text = post.description.toLowerCase();
        const title = post.title.toLowerCase();
        return text.includes(this.search) || title.includes(this.search);
      });
    },
  },
};
</script>

<style>
</style>