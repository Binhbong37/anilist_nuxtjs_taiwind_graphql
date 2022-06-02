<template>
  <header
    id="header"
    class="bg-[#2b2d42] h-[68px] flex justify-center fixed top-0 left-0 w-full"
  >
    <nav
      class="
        text-[#bcbedc]
        items-center
        flex
        h-full
        mx-[50px]
        max-w-[1050px]
        w-full
      "
    >
      <a
        href="/"
        class="items-center inline-flex h-[55px] w-[65px] justify-center"
      >
        <img
          src="https://anilist.co/img/icons/icon.svg"
          alt="Logo"
          class="w-[50px] h-[50px]"
        />
      </a>
      <div class="items-center inline-flex justify-center capitalize w-full">
        <span class="relative" @mouseover="showModal" @mouseleave="hideModal">
          <nuxt-link to="/search/anime" class="links px-4 py-[18px]"
            >Search</nuxt-link
          >
          <div class="dropdown" :class="show ? 'block' : 'hidden'">
            <p>
              <nuxt-link
                to="/search/anime"
                class="cursor-pointer hover:text-red-500"
                >Anime</nuxt-link
              >
            </p>
            <p class="mt-5 cursor-pointer hover:text-red-500">
              <nuxt-link to="/search/manga">Manga</nuxt-link>
            </p>
          </div>
        </span>
        <nuxt-link to="/" class="links px-4 py-[18px]">Social</nuxt-link>
        <nuxt-link to="/" class="links px-4 py-[18px]">Forum</nuxt-link>
        <nuxt-link to="/" class="links ml-[70px] pr-6 px-4 py-[18px]"
          >Login</nuxt-link
        >
        <nuxt-link to="/" class="signUp">Sign Up</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      click: true,
      dropdown: false,
      show: false,
    };
  },
  methods: {
    toggleMenu() {
      this.click = !this.click;
    },
    handleClose() {
      this.click = true;
    },
    showModal() {
      this.show = true;
    },
    hideModal() {
      this.show = false;
    },
  },
  mounted() {
    document.addEventListener("wheel", (e) => {
      if (e.deltaY >= 0) {
        document.querySelector("#header").classList.add("hide");
      } else {
        if (document.querySelector("#anime-detail") != null) {
          if (document.querySelector("html,body").scrollTop <= 200) {
            document.querySelector("#header").classList.add("fade");
          } else {
            document.querySelector("#header").classList.remove("fade");
          }
        } else {
          document.querySelector("#header").classList.remove("fade");
        }
        document.querySelector("#header").classList.remove("hide");
      }
    });
  },
};
</script>

<style scope>
#header {
  position: fixed;
  width: 100%;
  transition: top 0.5s, opacity 0.5s;
  z-index: 999;
  top: 0;
  opacity: 1;
}
.hide {
  top: -120px !important;
}
.fade {
  opacity: 0.7 !important;
}
#header:hover {
  opacity: 1 !important;
}
nav {
  background-color: #2b2d42;
}
.text {
  color: #bcbedc;
}
.text:hover {
  color: #f6f6ff;
}
.logo {
  height: 50px;
}
.sign-up-btn:hover {
  box-shadow: 0 2px 10px rgb(8 150 230 / 60%);
  transform: scale(1.03);
  color: white;
}

.modal {
  position: absolute;
  top: 3;

  background-color: white;
  transition: all 0.5s ease-in;

  width: 200px;
  height: 150px;
  border-radius: 5px;
}
.modal li {
  margin-left: 20px;
  cursor: pointer;
  font-size: 17px;
}
.modal li:hover {
  color: brown;
}

.signUp {
  background: #3577ff;
  border-radius: 6px;
  box-shadow: 0 0 0 rgb(8 150 230 / 60%);
  color: white;
  font-size: 14px;
  font-weight: 800;
  margin-right: -70px;
  padding: 10px 15px;
}
.signUp:hover {
  transition: box-shadow 0.6s ease, transform 0.2s ease-in-out;
}
.links {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.14px;
  line-height: 16.1px;
}
.dropdown {
  background: #fff;
  border-radius: 6px;
  position: absolute;
  top: 32px;
  left: -5px;
  width: 250px;
  color: #647380;
  padding: 20px;
}
.dropdown::before {
  content: "";
  z-index: 2;
  border: 15px solid;
  border-color: transparent transparent #fff transparent;
  position: absolute;
  top: -20px;
  left: 10%;
}
</style>