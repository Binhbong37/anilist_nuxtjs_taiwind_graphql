<template>
  <div class="relative" @mouseover="mouseover" @mouseleave="mouseleave">
    <nuxt-link :to="`/manga/${media.id}`" class="hover:text-[#dc2626]">
      <img
        :src="media.coverImage.large"
        alt="Image"
        class="
          rounded
          w-[138px]
          h-[160px]
          lg:w-[185px] lg:h-[265px]
          md:h-[190px]
        "
      />
      <h1 class="manga-title text-sm mt-2">{{ media.title.userPreferred }}</h1>
    </nuxt-link>
    <div
      class="
        modal_detail
        self-start
        text-md text-left
        absolute
        font-medium
        top-3
        rounded
        translate-x-full
        z-10
        w-72
        md:min-w-0 md:visible
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
              <i style="color: red" class="far fa-frown"></i>
              {{ media.averageScore }}%
            </div>
          </div>
        </div>
        <div class="flex" v-if="media.studios.nodes.lenght > 0">
          <div
            v-for="(node, index) in media.studios.nodes"
            :key="index"
            :style="{ color: media.coverImage.color }"
            class="pb-2 text-sm"
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
      required: true,
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

<style scope>
.manga-title {
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.more-info {
  widows: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 12px;
}
.card-box::before {
  position: absolute;
  content: "";
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent white transparent transparent;
  position: absolute;
  left: -3%;
}
.card-box-left::before {
  position: absolute;
  content: "";
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent white transparent transparent;
  position: absolute;
  transform: rotate(0.5turn);
  right: -3%;
}

.modal_detail {
  animation: growth ease-in 0.2s;
}

@keyframes growth {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>