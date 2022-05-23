<template>
  <div class="landing-section">
    <nuxt-link to="/" class="title-links">
      <h3 class="font-bold">{{ title }}</h3>
      <div class="expand">View all</div>
    </nuxt-link>
    <div class="results">
      <div
        class="media-card"
        v-for="(me, index) in media"
        :key="index"
        @mouseenter="showMoal(me.id)"
        @mouseleave="hideModal"
      >
        <nuxt-link to="/" class="cover">
          <img :src="me.coverImage.medium" alt="title" class="image loaded" />
        </nuxt-link>
        <nuxt-link to="/" class="title-image">{{ me.title.english }}</nuxt-link>
        <div class="hover-data" :class="isShowModal ? 'hidden' : 'block'"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    media: Array,
  },
  data() {
    return {
      isShowModal: true,
    };
  },
  methods: {
    showMoal(id) {
      console.log(id);
      this.isShowModal = false;
    },
    hideModal() {
      this.isShowModal = true;
    },
  },
};
</script>

<style>
.landing-section {
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  margin-bottom: 20px;
}

.title-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  padding: 0 10px;
}

.results {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px 12px;
  padding: 0 10px;
}

.media-card {
  display: grid;
  grid-auto-rows: min-content auto;
  position: relative;
  width: 110px;
}

.cover {
  border-radius: 4px;
  display: inline-block;
  height: 158px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 5;
  cursor: pointer;
}

.image {
  height: 100%;
  left: 0;
  object-fit: cover;
  /* opacity: 0; */
  position: absolute;
  top: 0;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
}

.title-image {
  font-size: 12px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 15px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
@media (min-width: 760px) and (max-width: 1540px) {
  .landing-section {
    padding-left: 30px;
    padding-right: 30px;
    margin: 20px 104.5px;
  }

  .title-links {
    padding: 0 20px;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  }

  .results {
    position: relative;
    grid-gap: 25px 20px;
    grid-template-columns: repeat(auto-fill, 185px);
    justify-content: space-between;
  }

  .media-card {
    width: 185px;
  }
  .cover {
    cursor: pointer;
    display: inline-block;
    height: 265px;
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 5;
    border-radius: 4px;
  }

  .hover-data {
    position: absolute;
    width: 170px;
    height: 100px;
    border-radius: 4px;
    top: 20px;
    right: -100%;
    background: #fff;
    z-index: 10;
  }
}
</style>