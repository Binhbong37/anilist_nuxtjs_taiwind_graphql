<template>
  <div v-if="episodesList.length != 0">
    <div class="watch">
      <div class="flex flex-wrap -mx-4 justify-between">
        <div v-for="(ep, index) in episodesList" :key="index">
          <div class="watch__item mx-4 my-4 relative">
            <a :href="ep.url"
              ><img :src="ep.thumbnail" class="watch__item-img"
            /></a>
            <div
              class="
                watch__item__title
                w-full
                absolute
                bottom-0
                text-white text-left
                opacity-70
                overflow-ellipsis overflow-hidden
              "
            >
              {{ ep.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-watch",
  props: {
    episodesList: {
      type: Array,
    },
  },
};
</script>

<style scope>
.watch__item-img {
  height: 88px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.watch__item__title {
  background-color: rgb(31, 38, 49);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 20%;
}
</style>
