<template>
  <div>
    <!-- header -->
    <div class="h-12 bg-black">
      <ul class="text-white flex leading-[48px] text-xl">
        <li class="hover:text-black hover:bg-slate-300">
          <a class="px-6" href="/">home</a>
        </li>
        <li class="hover:text-black hover:bg-slate-300">
          <a class="px-6" href="">band</a>
        </li>
        <li class="hover:text-black hover:bg-slate-300">
          <a class="px-6" href="">tour</a>
        </li>
        <li class="hover:text-black hover:bg-slate-300 relative">
          <a class="px-6" href="">More</a>
          <ul class="absolute bg-white">
            <li><a class="text-black" href="">Merchandise</a></li>
            <li><a class="text-black" href=""></a>Extras</li>
            <li><a class="text-black" href=""></a>Media</li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- Slider -->
    <div class="min-h-[500px] bg-slate-500"></div>
  </div>
</template>

<script>
export default {
  layout: "contact",
  data() {
    return {};
  },
};
</script>

<style>
</style>