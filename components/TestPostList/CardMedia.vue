<template>
  <div>
    <img
      :src="media.coverImage.large"
      :alt="media.title.userPreferred"
      class="rounded"
    />
    <h2>{{ media.title.userPreferred }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: "MediaCard",
    };
  },
  props: {
    media: {
      type: Object,
    },
  },
};
</script>

<style>
</style>