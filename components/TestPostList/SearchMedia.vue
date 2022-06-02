<template>
  <div class="filters-wraps">
    <div class="filters">
      <div class="filter-select">
        <div class="name">Search</div>
        <div class="search-wrap">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" />
        </div>
      </div>
      <div class="filter-select">
        <div class="name">Genres</div>
        <div class="search-wrap">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" />
        </div>
      </div>
    </div>
    <div class="extra-filters-wrap"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.filters-wraps {
  display: grid;
  grid-template-columns: auto 42px;
  align-items: center;
}

.filters {
  margin: 40px 0;
  margin-bottom: 25px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(5, 170px);
}

.search-wrap {
  background: #fff;
  border-radius: 6px;
  padding: 5px 16px;
  padding-left: 13px;
}

input {
  width: 100%;
  outline: none;
}
</style>