<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <p>
        a链接跳转到主项目/其他子项目的页面，页面会刷新，效果不好
        <a href="/about">跳转至主应用的about页</a>
      </p>
      <p v-if="isQiankun">
        主项目把router传给子项目，子项目用这个router来跳转
        <span @click="goToPage('/about')">跳转至主应用的about页</span>
        <span @click="goToPage('/app-vue-history/about')">跳转至app-vue-history的About</span>
      </p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  methods: {
    goToPage (path) {
      console.log(this.$root.parentRouter);
      this.$root.parentRouter.push(path);
    }
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
span {
  font-weight: bold;
  color: #000;
  cursor: pointer;
  margin: 0 15px;
  text-decoration: underline;
}
</style>
