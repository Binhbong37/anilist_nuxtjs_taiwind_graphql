<template>
  <div>
    <div v-if="nameId === 'character'">
      <Character :character="character" />
    </div>
    <div v-else-if="nameId === 'watch'">
      <Watch :episodesList="watch" />
    </div>
    <div v-else>
      <Overview
        :relations="realations"
        :character="character"
        :episodesList="watch"
      />
    </div>
  </div>
</template>

<script>
import Character from "../../../../components/DetailPage/Character.vue";
import Watch from "../../../../components/DetailPage/Watch.vue";
import Overview from "../../../../components/DetailPage/Overview.vue";
export default {
  components: {
    Character,
    Watch,
    Overview,
  },
  props: {
    character: {
      type: Array,
      default: [],
    },
    realations: {
      type: Array,
    },
    watch: {
      type: Array,
    },
  },
  data() {
    return {
      nameId: this.$route.params.name,
    };
  },
};
</script>

<style>
</style>