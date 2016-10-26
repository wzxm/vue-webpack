import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/home'
import Hello from './components/hello'
import List from './components/list'

// 使用vue-router
Vue.use(VueRouter)

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/hello', component: Hello },
    { path: '/list', component: List }
  ]
})
// 最后面加上一个回车，代表语句结束，否则会报错
export default router
