<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>りんごの値段は、ひとつ{{ appleIncludesTax }}円(税込)です。</p>
    <p>あなたはりんごを{{ total }} つ、かごに入れました。</p>
    <p>りんごの合計の値段は{{ totalApplesIncludesTax }}</p>
    <button v-if="stock" @click="addApple">りんごをかごに入れる</button>
    <p v-else>りんごはうりきれました。。。</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      total: state => state.apple.total,
      soldout: state => state.apple.soldout,
      stock: state => state.apple.stock
    }),
    ...mapGetters({
      appleIncludesTax: "appleIncludesTax",
      totalApplesIncludesTax: "totalApplesIncludesTax"
    })
  },
  mounted() {
    this.checkStock();
  },
  methods: {
    ...mapMutations("apple", {
      incrementApple: "incrementApple"
    }),
    ...mapActions("apple", {
      checkStock: "checkStock"
    }),
    addApple() {
      this.incrementApple();
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
