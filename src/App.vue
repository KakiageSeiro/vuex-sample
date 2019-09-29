<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>りんごの値段は、ひとつ{{ appleIncludesTax }}円(税込)です。</p>
    <p>あなたはりんごを{{ total }} つ、かごに入れました。</p>
    <p>りんごの合計の値段は{{ totalApplesIncludesTax }}</p>
    <button @click="addApple">りんごをかごに入れる</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["apple", "total"]),
    ...mapGetters(["appleIncludesTax", "totalApplesIncludesTax"])
  },
  methods:{
    ...mapMutations(["incrementApple"]),
    addApple () {
      this.incrementApple()
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
