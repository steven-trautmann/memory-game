<template>
  <div class="container">
    <img :src=path.url class="box">
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    path: Object
  }

}
</script>

<style scoped>
  .box {
    margin: 0.5rem;
    height: 10rem;
    width: 10rem;
  }
</style>
