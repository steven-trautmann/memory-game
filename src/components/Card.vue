<template>
  <div class="container">
    <img :src=path.url
         class="content" :class="visible ? 'shown' : 'hidden'"
         draggable="false"
         @click="showCard"
    >
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    path: Object
  },
  data(){
    return {
      visible: false,
    }
  },
  methods: {
    showCard(){
      this.visible = true;
    }
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
    background-color: black;
  }
</style>
