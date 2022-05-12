<template>
  <div class="character">
    <h1>Characters</h1>
    <div class="grid grid-cols-2 gap-5">
      <div
        v-for="(data, index) in character"
        :key="index"
        class="bg-white max-w-[321px] max-h-[81px] shadow flex justify-between"
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
</template>

<script>
export default {
  props: {
    character: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
</style>