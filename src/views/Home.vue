<template>
  <div>
    <Header :gameOver="gameOver" />
    <div id="game-field">
      <Card
          v-for="(card, index) in cards"
          :key="index"
          :card="card"
          @match="matchedCards"
          @mismatch="mismatch"
          @game-over="gameIsOver"
      />
    </div>
  </div>
</template>

<script>
  import Card from "../components/Card";
  import Header from "../components/Header";

  export default {
    name: 'Home',
    data: () => {
      return {
        cards: [],
        gameOver: false
      }
    },
    mounted() {
      this.importAll(require.context('../../public/images/', true, /\.jpg$/));
      this.shuffle();
    },
    methods: {
      importAll(paths){
        let i = -1;
        paths.keys().forEach(key => {
          this.cards.push({url: paths(key), name: key, matched: false, visible: false, id: ++i})
          this.cards.push({url: paths(key), name: key, matched: false, visible: false, id: ++i})
        });
      },
      shuffle(){
        this.cards = this.cards.sort(() => Math.random() - 0.5);
      },
      matchedCards(name){
        for (let card of this.cards){
          if (card.name === name){
            card.matched = true;
          }
        }
      },
      mismatch(recentCardId){
        this.$store.commit("increaseMismatches");
        this.recentCardToInvisible(recentCardId);
      },
      recentCardToInvisible(recentCardId){
        for (let card of this.cards){
          if (card.id === recentCardId){
            card.visible = false;
            break;
          }
        }
      },
      gameIsOver(){
        this.gameOver = true;
      }
    },
    components: {
      Header,
      Card
    },
}
</script>

<style scoped>
#game-field {
  display: flex;
  margin: 4vw;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
</style>
