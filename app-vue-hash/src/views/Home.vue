<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/2.jpg"
    />
    <h1>我是 app-vue-hash 的 home页面</h1>
    <span>字体颜色是blue</span>
    <span
      v-if="isQiankun"
      @click="changeParentState"
    >主项目的数据：{{ commonData.parent }},点击变为2</span>
    <div
      v-if="isQiankun"
      @click="handleState"
    >主项目的数据(通过initGlobalState实现共享)：{{ name }},
      <span>点击将name变为lisi</span>
    </div>
  </div>
</template>

<script>
import actions from '../actions'
export default {
  name: 'Home',
  data () {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
      name: ''
    }
  },
  computed: {
    commonData () {
      return this.isQiankun ? this.$root.parentVuex.state.commonData : '';
    }
  },
  mounted () {
    console.log('app-vue-hash Home.vue mounted')
    actions.onGlobalStateChange((state, pre) => {
      this.name = state.name
    }, true)
  },
  methods: {
    changeParentState () {
      if (this.isQiankun) {
        this.$root.parentVuex.commit('setCommonData', { parent: 2 });
      }
    },
    handleState() {
      actions.setGlobalState({name: 'lisi'})
    }
  },
}
</script>
<style scoped>
h1,
span {
  color: blue;
}
img {
  width: 300px;
  height: 300px;
}
</style>
