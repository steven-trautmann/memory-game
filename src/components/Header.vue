<template>
  <div style="text-align: center">
    <router-link to="/about"><button id="about-link">About Page</button></router-link>
    <h1>Trágya Memory</h1>
    <h3>- Azaz az emberek, akikről bár ne lenne emléked</h3>
    <p>total pairs: {{totalPairs}}</p>
    <p>pairs found: {{pairsFound}}</p>
    <button @click="shuffle">Shuffle</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    shuffle(){
      this.$emit("shuffle")
    }
  },
  computed: {
    pairsFound(){
      return this.$store.state.game.pairsFound;
    },
    totalPairs(){
      return this.$store.state.game.totalPairs;
    }
  },
}
</script>

<style scoped>
#about-link{
  margin: 1rem;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
