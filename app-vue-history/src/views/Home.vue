<template>
  <div class="home">
    <h1>我是 app-vue-history 的 home 页面</h1>
    <span>字体颜色是orange</span>
    <el-button type="primary" size="small">按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
h1,
span {
  color: orange;
}
</style>
