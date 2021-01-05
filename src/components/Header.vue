<template>
  <div style="text-align: center">
    <h1>Trágya Memory</h1>
    <h3>- Azaz az emberek, akikről bár ne lenne emléked</h3>
    <button @click="shuffle">Shuffle</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    shuffle(){
      this.$emit("shuffle")
    },
  }
}
</script>

<style scoped>

</style>
