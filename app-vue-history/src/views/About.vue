<template>
  <div class="about">
    <h1>我是 app-vue-history 的 about 页面</h1>
    <span>字体颜色是red</span>
  </div>
</template>

<script>
export default {
  mounted () {
    window.a = 1;
    console.log(window.a, 'app-vue-history');
  },
}
</script>

<style>
/* 测试全局css污染 */
h1,
span {
  color: red;
}
</style>
