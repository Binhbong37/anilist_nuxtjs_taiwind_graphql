<template>
  <div>
    <div id="realation">
      <h1>Relations</h1>
      <div class="flex">
        <img
          v-for="relation in realtionsCut"
          :key="relation.id"
          :src="relation.coverImage.extraLarge"
          alt="Relation"
          class="px-2 w-1/5"
        />
      </div>
    </div>
    <div id="character" class="mt-8">
      <h1>Characters</h1>
      <div class="grid grid-cols-2 gap-5">
        <div
          v-for="(data, index) in charactercut"
          :key="index"
          class="
            bg-white
            max-w-[321px] max-h-[81px]
            shadow
            flex
            justify-between
          "
        >
          <div class="flex">
            <img
              :src="data.node.image.medium"
              alt="Image"
              class="w-[60px] h-[80px]"
            />
            <div class="text-[12px] p-2 flex flex-col justify-around">
              <h1>{{ data.node.name.userPreferred }}</h1>
              <p>{{ data.role.toLowerCase() }}</p>
            </div>
          </div>

          <div class="flex justify-end">
            <div class="text-[12px] p-2 flex flex-col justify-around">
              <h1>{{ data.voiceActors[0].name.userPreferred }}</h1>
              <p>{{ data.voiceActors[0].languageV2 }}</p>
            </div>
            <img
              :src="data.voiceActors[0].image.medium"
              alt="medium"
              class="w-[60px] h-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="watch" class="mt-7">
      <div v-if="episodeCut.length != 0">
        <h1>Watch</h1>
        <div class="watch">
          <div class="flex flex-wrap -mx-4 justify-between">
            <div v-for="(ep, index) in episodeCut" :key="index">
              <div class="watch__item mx-4 my-4 relative">
                <a :href="ep.url"
                  ><img :src="ep.thumbnail" class="watch__item-img"
                /></a>
                <div
                  class="
                    watch__item__title
                    w-full
                    -mt-11
                    absolute
                    bottom-0
                    text-white text-left
                    opacity-70
                    p-4
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    relations: {
      type: Array,
    },
    character: {
      type: Array,
    },
    episodesList: {
      type: Array,
    },
  },
  data() {
    return {
      realtionsCut: this.relations.slice(0, 5),
      charactercut: this.character.slice(0, 6),
      episodeCut: this.episodesList.slice(0, 6),
    };
  },
};
</script>

<style scope>
.watch__item-img {
  width: 164px;
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
}
</style>