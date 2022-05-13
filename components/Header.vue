<template>
  <header id="header">
    <nav
      class="
        absolute
        top-0
        left-0
        right-0
        border-gray-200
        px-12
        py-4
        md:py-0 md:items-center
      "
    >
      <div class="flex justify-between">
        <div>
          <nuxt-link @click="handleClose" to="/" class="text-center text-white">
            <img
              src="https://anilist.co/img/icons/icon.svg"
              class="logo"
              alt="Anilist"
            />
            Analist
          </nuxt-link>
        </div>

        <div class="md:leading-[72px] md:flex md:justify-between">
          <div
            class="
              flex flex-col
              md:flex-row md:space-x-12 md:mt-0 md:font-bold
              z-[2]
              md:z-auto md:static
              absolute
              bg-[#2b2d42]
              w-full
              left-0
              pl-5
              pt-3
              md:opacity-100
              opacity-0
              top-[-350px]
              transition-all
              ease-in
              duration-500
            "
            :class="!click ? 'top-[100px] opacity-100' : ''"
          >
            <ul class="md:flex">
              <li @click="handleClose" class="px-4">
                <a
                  href="/search/anime"
                  class="block border-b md:border-0 md:p-0 text"
                  >Browse</a
                >
              </li>
              <li @click="handleClose" class="px-4">
                <a href="#" class="block py-2 border-b md:border-0 md:p-0 text"
                  >Social</a
                >
              </li>
              <li @click="handleClose" class="px-4">
                <a href="#" class="block py-2 border-b md:border-0 md:p-0 text"
                  >Forum</a
                >
              </li>
            </ul>
            <ul class="hidden md:flex">
              <li>
                <a
                  href="#"
                  class="
                    space-x-10
                    mr-5
                    block
                    py-2
                    pr-4
                    pl-3
                    border-b
                    md:border-0 md:p-0
                    text
                  "
                  >Login</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    sign-up-btn
                    text-white
                    bg-[#3577ff]
                    rounded-md
                    px-6
                    py-3
                    text-center
                    mr-40
                  "
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="text-white text-2xl leading-[72px] cursor-pointer md:hidden"
        >
          <i
            class="fas fa-bars text-2xl hover:text-slate-50 cursor-pointer"
            @click="toggleMenu"
            :class="click ? 'fas fa-bars' : 'fas fa-times'"
          ></i>
        </div>
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
    };
  },
  methods: {
    toggleMenu() {
      this.click = !this.click;
    },
    handleClose() {
      this.click = true;
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
</style>