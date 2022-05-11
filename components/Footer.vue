<template>
  <footer id="footer">
    <div class="flex w-full justify-evenly py-20">
      <div>
        <p class="text-[#3db4f2] text-2xl">Site Theme</p>
      </div>
      <div class="flex-row flex space-x-28 text-xl">
        <ul class="text-white space-y-7">
          <li><a href="#" class="hover:text-[#12acfd]">Donate</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">Aniast.co</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">AniChart.net</a></li>
        </ul>
        <ul class="text-white space-y-7">
          <li><a href="#" class="hover:text-[#12acfd]">App</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">Site Stats</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">Recommendations</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">API</a></li>
        </ul>
        <ul class="space-y-7 text-white">
          <li><a href="#" class="hover:text-[#12acfd]">Discord</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">Twitter</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">Facebook</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">GitHub</a></li>
        </ul>
        <ul class="space-y-7 text-white">
          <li><a href="#" class="hover:text-[#12acfd]">Data</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">Moderators</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">Contact</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">Term & Privacy</a></li>
          <li><a href="#" class="hover:text-[#12acfd]">Site Map</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "comp-footer",
  data() {
    return {};
  },
};
</script>

<style>
footer {
  background-color: #11161d;
  font-size: 1.4rem;
}
</style>
