<template>
  <div class="container mx-auto">
    <h1>This is Index User</h1>
    <h2 class="font-xl">{{ $route.params }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  validate(ruta) {
    return /^\d+$/.test(ruta.params.id);
  },
};
</script>