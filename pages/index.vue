<template>
  <div class="container mx-auto text-3xl font-bold">
    <div class="mb-8">
      <nuxt-link to="/users" class="hover:text-red-500">Users</nuxt-link>
      <nuxt-link to="/contact" class="hover:text-red-500">Contact</nuxt-link>
      <nuxt-link to="/products" class="hover:text-red-500">products</nuxt-link>
      <nuxt-link :to="{ name: 'users-one' }" class="hover:text-red-500"
        >Users One</nuxt-link
      >
    </div>
    <h1 class="mb-8">This is Index Page</h1>
    <div>
      <button @click="gotoUser" class="bg-red-300 rounded p-1 text-xl">
        User
      </button>
    </div>
    <hr />
    <h1 class="text-red-700">Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <!-- <nuxt-link :to="`users/${user.name}`">{{ user.name }}</nuxt-link> -->
        <nuxt-link :to="{ name: 'users-id', params: { id: user.id } }">{{
          user.name
        }}</nuxt-link>
      </li>
    </ul>
    <hr />
    <h1 class="text-red-700">Products</h1>
    <ul>
      <li v-for="i in products" :key="i.id">
        <nuxt-link :to="`/${i.item}`">{{ i.item }}</nuxt-link>
      </li>
    </ul>
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