import Vue from 'vue'

import App from './App'
import store from './vuex/store'
import router from './routers'

/**
 * [template 实例化Vue]
 * @type {String}
 */
new Vue({
  router,
  template: '<App/>',
  store,
  components: { App }
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
