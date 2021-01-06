<template>
  <div class="container" :class="this.card.matched ? 'matched' : 'unmatched'">
    <img :src=card.url
         class="content" :class="this.card.visible ? 'shown' : 'hidden'"
         draggable="false"
         @click="selectCard"
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: "Card",
  props: {
    card: Object
  },
  methods: {
    ...mapMutations(["setRecentCard", "increasePairsFound"]),
    selectCard() {
      // this.$store.commit( "setRecentCard", this.card.name);
      // this.$store.commit("increasePairsFound");
      if (this.card.visible){
        return;
      }
      this.card.visible = true;
      if (this.$store.state.game.recentCard === null){
        this.setRecentCard({name: this.card.name, id: this.card.id});
      } else {
        this.evaluateMatch(this.$store.state.game.recentCard.id);
        this.setRecentCard(null);
      }
    },
    evaluateMatch(recentCardId){
      if (this.$store.state.game.recentCard.name === this.card.name){
        this.increasePairsFound();
        this.card.matched = true;
        this.$emit("match", this.card.name)
      } else {
        setTimeout(() => {
          this.card.visible = false;
          this.$emit("mismatch", recentCardId);
        }, 1000)
      }
      if (this.$store.state.game.totalPairs === this.$store.state.game.pairsFound){
        setTimeout(() => {
          let mismatches = this.$store.state.game.mismatches;
          if (mismatches === 0){
            alert("na mész a picsába, 0 hiba?? valahol csaltál. de azért grat")
          } else if (mismatches <= 8){
            alert("ÚR ISTEN! Te nagyon fasza gyerek vagy, csupán " + mismatches + " hibával csináltad meg a feladványt")
          } else if (mismatches <= 13){
            alert("Nem rossz, összesen " + mismatches + " hibával sikerült megoldani, de azért szerintem menne ez gyorsabban is!")
          } else {
            alert("uhh, hát gyakorolj még:D " + mismatches + " hiba az nem semmi, majdnem rosszabb vagy, mint én!")
          }
          this.$emit("game-over");
        }, 500)
      }
    },
  }

}
</script>

<style scoped>
  .content {
    margin: 0.5rem;
    height: 10rem;
    width: 10rem;
    cursor: pointer;
    transition: opacity .15s ease-in-out;
  }

  .hidden {
    opacity: 0;
  }

  .shown {
    opacity: 100;
  }

  .container {
    margin-top: 0.5rem ;
  }

  .unmatched {
    background-color: black;
  }

  .matched {
    background-color: green;
  }
</style>
