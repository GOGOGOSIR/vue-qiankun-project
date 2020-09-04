<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <h1>我是 app-vue-hash 的 home页面</h1>
    <span>字体颜色是blue</span>
    <span
      v-if="isQiankun"
      @click="changeParentState"
    >主项目的数据：{{ commonData.parent }},点击变为2</span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  computed: {
    commonData () {
      return this.isQiankun ? this.$root.parentVuex.state.commonData : '';
    }
  },
  mounted () {
    console.log('app-vue-hash Home.vue mounted')
  },
  methods: {
    changeParentState () {
      if (this.isQiankun) {
        this.$root.parentVuex.commit('setCommonData', { parent: 2 });
      }
    }
  },
}
</script>
<style scoped>
h1,
span {
  color: blue;
}
</style>
