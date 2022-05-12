<template>
  <div>
    <div class="bg-white min-h-[50px] rounded">
      <i class="fas fa-star leading-[50px] text-yellow-400 ml-5"></i>
      <span>#209 Highest Rated All Time</span>
    </div>
    <div class="bg-white min-h-[50px] rounded mt-3">
      <i class="fas fa-heart leading-[50px] text-red-600 ml-5"></i>
      <span>#284 Most Populator All Time</span>
    </div>
    <div class="bg-white rounded mt-3">
      <div v-for="i in 5" :key="i" class="ml-5 mt-2">
        <h1>Title {{ i }}</h1>
        <p class="text-sm">Descrip {{ i }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>