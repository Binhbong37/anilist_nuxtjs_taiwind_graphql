<template>
  <div>
    <form>
      <div class="bg-white py-2 px-3 rounded inline-block mr-5">
        <i class="fas fa-search"></i>
        <input
          type="text"
          name="search"
          class="rounded px-2 outline-0"
          placeholder="Search . . ."
        />
      </div>
      <div class="bg-white py-2 px-3 rounded hidden md:inline-block md:mr-5">
        <input
          type="text"
          name="search"
          class="rounded px-2 outline-0"
          placeholder="Genres"
          readonly
        />
        <i class="fas fa-caret-down"></i>
      </div>
      <div
        class="
          bg-white
          py-2
          px-3
          rounded
          hidden
          lg:mt-5
          md:inline-block md:mr-5
        "
      >
        <input
          type="text"
          name="search"
          class="rounded px-2 outline-0"
          placeholder="Year"
          readonly
        />
        <i class="fas fa-caret-down"></i>
      </div>
      <div
        class="
          bg-white
          py-2
          px-3
          lg:mt-5
          rounded
          hidden
          md:inline-block md:mr-5
        "
      >
        <input
          type="text"
          name="search"
          class="rounded px-2 outline-0"
          placeholder="Format"
          readonly
        />
        <i class="fas fa-caret-down"></i>
      </div>
      <button class="btn md:ml-3 mt-3">Search</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "body-filter",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
</style>
