<template>
  <div>
    <img
      src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/127911-lMXBdTxUGPEM.jpg"
      alt="banner"
    />
    <div class="px-12 flex">
      <div>
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127911-nKrY6sdaflPK.jpg"
          alt="imageLarge"
          class="w-80 -mt-36 mb-2"
        />
        <button class="p-2 bg-[#12acfd] rounded text-white">Add to List</button>
      </div>
      <div class="p-6">
        <h1 class="text-2xl font-bold">Title of image</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          consectetur deserunt a! Tenetur consequuntur rem omnis, magni possimus
          facilis illo accusamus fugiat maiores? Debitis enim maxime aspernatur
          error accusantium reiciendis!
        </p>
      </div>
    </div>
    <div class="">
      <ul class="flex justify-center text-xl">
        <li class="px-2 hover:text-red-500 cursor-pointer">Overview</li>
        <li class="px-2 hover:text-red-500 cursor-pointer">Character</li>
        <li class="px-2 hover:text-red-500 cursor-pointer">Watch</li>
      </ul>
    </div>
    <div class="min-h-[100px] bg-[#e5ebf1] p-12">
      <p>{{ $route.params.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "detail",
};
</script>

<style>
</style>