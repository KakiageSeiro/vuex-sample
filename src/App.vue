<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>りんごの値段は、ひとつ{{ appleIncludesTax }}円(税込)です。</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["apple"]),
    ...mapGetters(["appleIncludesTax"])
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
