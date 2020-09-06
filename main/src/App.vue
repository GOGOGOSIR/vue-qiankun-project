<template>
  <div id="app">
    <header>
      <router-link to="/app-vue-hash/">app-vue-hash</router-link>
      <router-link to="/app-vue-history/">app-vue-history</router-link>
      <router-link to="/about">about</router-link>
      <span
        style="color: #000000"
        @click="changeParentState"
      >主项目的Vuex的数据：{{ commonData.parent }}，点击变回1</span>
    </header>
    <div
      v-show="isShowApp"
      id="appContainer"
    ></div>
    <router-view v-show="!isShowApp"></router-view>
    <!-- 测试主项目的fixed -->
    <div class="fixed-side">
      主项目的侧边栏用fixed定位
      <p>通过qiankun的initGlobalState实现项目间的通信:</p>
      <p>
        <span>initGlobalState共享的name：</span>
        <span>{{name}}</span>
      </p>
      <el-button type="primary" size="small" @click="resetName">将name变为zhangsan</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import actions from './microAppStateActions'
export default {
  data() {
    return {
      name: ''
    }
  },
  computed: {
    commonData () {
      return this.$store.state.commonData;
    },
    ...mapState([
      'isShowApp'
    ])
  },
  mounted() {
    actions.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      this.name = state.name
    }, true)
    
  },
  beforeDestroy() {
    actions.offGlobalStateChange()
  },
  methods: {
    changeParentState () {
      this.$store.commit('setCommonData', { parent: 1 });
    },
    resetName() {
      actions.setGlobalState({
        name: 'zhangshan'
      })
    }
  },
}
</script>

<style scoped>
#app {
  height: 100vh;
  text-align: center;
  position: relative;
  margin-left: 190px;
}
header > a {
  margin: 0 20px;
}
#appContainer {
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
}
.fixed-side{
  width: 190px;
  background: #eeeeee;
  height: 500px;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 14px;
  color: #000;
}
</style>
