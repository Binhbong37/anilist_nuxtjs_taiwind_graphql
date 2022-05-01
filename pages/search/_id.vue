<template>
  <div class="px-[135px]">
    <!-- Search -->
    <div class="pt-12 grid grid-cols-6 gap-x-6">
      <div class="col-span-5 flex items-center">
        <div>
          <label class="block">Search</label>
          <input type="text" class="border-4" />
        </div>
        <div>
          <label class="block">Genres</label>
          <select class="border-4 w-[150px]">
            <option>Any</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Horror</option>
          </select>
        </div>
      </div>
      <div class="text-center">
        <i class="fas fa-sliders-h leading-5"></i>
      </div>
    </div>
    <!-- Population -->
    <div class="pt-12">
      <div class="flex justify-between">
        <h1 class="hover:text-red-500 cursor-pointer">Population</h1>
        <h1 class="hover:text-red-500 cursor-pointer">View All</h1>
      </div>
      <div class="grid grid-cols-5 gap-x-5">
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
      </div>
    </div>
    <!-- Next Season -->
    <div class="mt-12">
      <div class="flex justify-between">
        <h1 class="hover:text-red-500">Next-Season</h1>
        <h1 class="hover:text-red-500">View All</h1>
      </div>
      <div class="grid grid-cols-5 gap-x-5">
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
        <div>
          <img
            src="../../assets/images/medium.png"
            class="h-16 md:h-28 lg:h-full"
          />
          <h1>Title of Movies</h1>
        </div>
      </div>
    </div>
    <!-- Top 100 -->
    <div class="mt-12 pb-12">
      <div class="flex justify-between">
        <h1 class="hover:text-red-500">Top-100</h1>
        <h1 class="hover:text-red-500">View All</h1>
      </div>
      <div class="">
        <div
          class="bg-white rounded overflow-hidden shadow-md min-h-[40px] mb-6"
        >
          <h1>Title of Movies</h1>
        </div>
        <div
          class="bg-white rounded overflow-hidden shadow-md min-h-[40px] mb-6"
        >
          <h1>Title of Movies</h1>
        </div>
        <div
          class="bg-white rounded overflow-hidden shadow-md min-h-[40px] mb-6"
        >
          <h1>Title of Movies</h1>
        </div>
      </div>
    </div>
  </div>
</template>