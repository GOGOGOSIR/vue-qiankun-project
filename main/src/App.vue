<template>
  <div id="app">
    <header>
      <router-link to="/app-vue-hash/">app-vue-hash</router-link>
      <router-link to="/app-vue-history/">app-vue-history</router-link>
      <router-link to="/about">about</router-link>
      <span
        style="color: #000000"
        @click="changeParentState"
      >主项目的数据：{{ commonData.parent }}，点击变回1</span>
    </header>
    <!-- <img src="./assets/logo.png" /> -->
    <div
      v-show="isShowApp"
      id="appContainer"
    ></div>
    <router-view v-show="!isShowApp"></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    commonData () {
      return this.$store.state.commonData;
    },
    ...mapState([
      'isShowApp'
    ])
  },
  methods: {
    changeParentState () {
      this.$store.commit('setCommonData', { parent: 1 });
    }
  },
}
</script>

<style scoped>
#app {
  height: 100vh;
  text-align: center;
  position: relative;
}
header > a {
  margin: 0 20px;
}
#appContainer {
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
}
</style>
