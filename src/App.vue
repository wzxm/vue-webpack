<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Footers></Footers>
    <router-view class="view" keep-alive transition="slide"></router-view>
  </div>
</template>

<script>
// 导入footer组件
import Footers from './components/footer'
// 导入路由
import Router from 'vue-router'

// default导出，使用关键字default，可将对象标注为default对象导出。default关键字在每一个模块中只能使用一次。它既可以用于内联导出，也可以用于一组对象导出声明中。
export default {
  // name: 'app',
  components: {
    Footers
  },
  init () {
    let router = new Router()
    router.push('/home')// 跳转到home组件
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
