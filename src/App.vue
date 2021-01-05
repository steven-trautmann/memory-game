<template>
  <div>
    <Header @shuffle="shuffle" />
    <div id="app">
      <Card
        v-for="(path, index) in paths"
        :key="index"
        :path="path"
      />
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import Header from "./components/Header";

export default {
  name: 'App',
  data: () => {
    return {
      paths: []
    }
  },
  mounted() {
    this.importAll(require.context('../public/images/', true, /\.jpg$/));
    this.shuffle();
  },
  methods: {
    importAll(paths){
      paths.keys().forEach(key => {
        this.paths.push({url: paths(key), name: key})
        this.paths.push({url: paths(key), name: key})
      });
    },
    shuffle(){
      this.paths = this.paths.sort(() => Math.random() - 0.5);
    }
  },
  components: {
    Header,
    Card
  },

}
</script>

<style>
#app {
  display: flex;
  margin: 4rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
