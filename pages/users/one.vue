<template>
  <div class="p-5 grid grid-cols-2">
    <Users v-for="(ani, ind) in anime_list" :key="ind" :animee="ani" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      anime_list: [],
    };
  },
  methods: {
    getAnime() {
      const anime_title = [
        "Naruto",
        "One Piece",
        "Dragon Ball",
        "Conam",
        "Ito",
        "Hunter x Hunter",
        "Fairy Tail",
        "Tokyo Ghoul",
        "Code Geass",
      ];
      const anime = [];
      for (let i = 0; i < 10; i++) {
        anime.push({
          title: anime_title[Math.floor(Math.random() * anime_title.length)],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero laborum sapiente provident, maiores voluptatum placeat quibusdam reiciendis ipsum dolore vel accusamus animi, exercitationem assumenda rem odio atque obcaecati tenetur.",
        });
      }

      return anime;
    },
    handleScroll() {
      const log1 = window.scrollY;
      const log2 = window.innerHeight;
      const log3 = document.body.scrollHeight - 50;
      console.log({ log1, log2, log3 });

      const newAnime = this.getAnime();
      if (log1 + log2 >= log3) {
        this.anime_list = [...this.anime_list, ...newAnime];
      }
    },
  },
  mounted() {
    this.anime_list = this.getAnime();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>