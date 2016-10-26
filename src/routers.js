import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/home'
import Hello from './components/hello'
import List from './components/list'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/hello', component: Hello },
    { path: '/list', component: List }
  ]
})
export default router
