<!-- 模板部分 -->
<template>
  <div id="user">
    <v-loading></v-loading>
    <v-header></v-header>
    <v-nav></v-nav>
    <div class="container main-content">
      <div class="row">
        <div class="col-md-8">
          <transition name="slide-fade" mode="out-in">
            <router-view class="view"></router-view>
          </transition>
        </div>
        <div class="col-md-4">
          <v-right></v-right>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>


<!-- javascript 部分 -->
<script>
import Right from './components/rightList/right'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Loading from './components/loading/loading'
import Footer from './components/footer/footer'
// 导入路由
import Router from 'vue-router'

/**
 * default导出，使用关键字default，可将对象标注为default对象导出。default关键字在每一个模块中只能使用一次。它既可以用于内联导出，也可以用于一组对象导出声明中。
 */
export default {
  components: {
    'v-right': Right,
    'v-header': Header,
    'v-nav': Nav,
    'v-footer': Footer,
    'v-loading': Loading
  },
  init () {
    let router = new Router()
    router.push('/home')// 跳转到home组件
  },
  data () {
    return {
      transitionName: 'slide-left',
      user: 'wangzhe'
    }
  },
  /**
   * [watch 增加路由监听，可以获得来源和去向页面]
   * @type {Object}
   */
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      // console.log(from)
    }
  }
}
</script>

<!-- css 样式部分 -->
<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}
#user {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  .content {
    height: 100%;
    background-color: #dee0e8;
    padding: 30px;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .main-content {
    background-color: #dee0e8;
    padding: 60px 20px;
  }
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>