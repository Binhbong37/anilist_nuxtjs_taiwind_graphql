<template>
  <div class="pt-12 mb-10">
    <h1>{{ search }}</h1>
    <form>
      <div class="bg-white py-2 px-3 rounded inline-block mr-5">
        <i class="fas fa-search"></i>
        <input
          type="text"
          name="search"
          class="rounded px-2 outline-0"
          placeholder="Search . . ."
          v-model="valueInput"
        />
      </div>
      <div class="bg-white py-2 px-3 rounded hidden md:inline-block md:mr-5">
        <input
          type="text"
          name="genres"
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
          md:mt-5 md:inline-block md:mr-5
        "
      >
        <input
          type="text"
          name="year"
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
          md:mt-5
          rounded
          hidden
          md:inline-block md:mr-5
        "
      >
        <input
          type="text"
          name="format"
          class="rounded px-2 outline-0"
          placeholder="Format"
          readonly
        />
        <i class="fas fa-caret-down"></i>
      </div>
      <div>
        <select v-model="seasonMedia">
          <option value="WINTER">WINTER</option>
          <option value="SUMMER">SUMMER</option>
          <option value="SPRING">SPRING</option>
          <option value="FALL">FALL</option>
        </select>
      </div>
    </form>
    <h1>{{ valueInput }}</h1>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueInput: "",
      seasonMedia: "WINTER",
    };
  },

  props: {
    search: {
      type: String,
    },
  },

  methods: {
    handleClick() {
      this.$emit("customE", "data");
    },
  },

  watch: {
    valueInput(newValue, oldValue) {
      console.log({ oldValue });
      console.log({ newValue });
      this.$emit("customE", newValue);
      this.$router.push({ path: "/contact", query: { search: newValue } });
    },

    seasonMedia(newValue, oldValue) {
      this.$emit("customSeason", newValue);
    },
  },
};
</script>

<style>
</style>