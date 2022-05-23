<template>
  <div
    class="
      relative
      w-36
      my-2
      max-w-sm max-h-72
      rounded
      cursor-pointer
      sm:w-40
      md:w-32 md:max-w-sm md:min-w-full
      lg:w-40
      first-letter:lg:max-w-xs
      lg:min-w-full
      xl:max-w-sm xl:min-w-full
      2xl:max-w-sm 2xl:min-w-full
    "
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <div class="max-w-xs overflow-hidden align-text-top rounded aspect-[3/4]">
      <img
        :src="media.coverImage.large"
        :alt="media.title"
        class="rounded w-[138px] h-[160px] lg:w-full lg:h-[265px] md:h-[190px]"
      />
    </div>
    <div class="mr-2">
      <div class="text-left text-md line-clamp-2">
        <p class="media-title truncate hover:text-clip">
          {{ media.title.userPreferred }}
        </p>
      </div>
    </div>
    <div
      class="
        self-start
        text-md text-left
        absolute
        font-medium
        top-3
        rounded
        translate-x-full
        z-10
        w-72
        md:min-w-0
        lg:visible
        invisible
        bg-white
        px-4
        py-3
        shadow-2xl
      "
      :class="{ 'card-box-left': left, 'card-box': !left }"
      :style="[
        { display: displayMedia },
        { right: left ? '' : '-1.25rem' },
        { left: left ? '-1.25rem' : '' },
        { transform: left ? 'translateX(-100%)' : '' },
      ]"
    >
      <div class="relative">
        <div class="flex justify-between pb-3">
          <h3 class="">
            Ep
            {{
              media.nextAiringEpisode ? media.nextAiringEpisode.episode : "7"
            }}
            in 6 days
          </h3>
          <div v-if="media.averageScore">
            <div v-if="media.averageScore > 80">
              <i style="color: green" class="far fa-smile"></i>
              {{ media.averageScore }}%
            </div>
            <div v-else>
              <i style="color: red" class="far fa-smile"></i>
              {{ media.averageScore }}%
            </div>
          </div>
        </div>
        <div class="flex">
          <div
            :style="{ color: media.coverImage.color }"
            class="pb-2 text-sm"
            v-for="(node, index) in media.studios.nodes"
            :key="index"
          >
            <div v-if="node != media.studios.nodes">{{ node.name }},</div>
            <div v-else>{{ node.name }}</div>
          </div>
        </div>
        <div class="pb-4">
          {{ media.format }} Show
          {{ media.episodes ? " - " + media.episodes + " episodes" : "" }}
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div v-for="(genre, index) in media.genres.slice(0, 3)" :key="index">
            <p
              :style="style"
              class="text-white rounded-xl py-1 px-2 text-xs mr-2 mb-3"
            >
              {{ genre }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayMedia: "none",
    };
  },
  props: {
    media: {
      type: Object,
    },
    left: {
      type: Boolean,
    },
  },
  methods: {
    mouseover() {
      this.displayMedia = "block";
    },
    mouseleave() {
      this.displayMedia = "none";
    },
  },
  computed: {
    style() {
      return {
        "background-color": this.media.coverImage.color,
      };
    },
  },
};
</script>

<style>
.more-info {
  display: var(--displayMedia);

  widows: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 12px;
}
.card-box::before {
  position: absolute;
  content: "\A";
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent white transparent transparent;
  position: absolute;
  left: -3%;
}
.card-box-left::before {
  position: absolute;
  content: "\A";
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent white transparent transparent;
  position: absolute;

  transform: rotate(0.5turn);

  right: -3%;
}
.media-title:hover {
  color: var(--background-color);
}
</style>