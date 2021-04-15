<!--
 * @Description: 
 * @Author: qingyang
 * @Date: 2021-04-14 15:59:42
 * @LastEditors: qingyang
 * @LastEditTime: 2021-04-15 16:58:27
-->
<template>
  <div class="main_app">
    <h1>Hello Options</h1>

  </div>
</template>

<script>
export default {
  name: 'app',
   methods: {
    btnClick() {
     this.$message('按下按钮')
    },
  }
}
</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
