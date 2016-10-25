/*! This file is created by wangzhe */
webpackJsonp([3,4],{

/***/ 1:
/***/ function(module, exports) {

// /* --ES6语法-- */
// // vue
// import Vue from 'vue';
// // 路由插件
// import VueRouter from 'vue-router';
// // 路由表配置
// import { configRouter } from './router.config';

// // 安装使用（路由）功能
// Vue.use(VueRouter);

// console.log(Vue);
// // 路由参数配置
// const router = new VueRouter({
// 	// 是否启用hash路由方式
// 	hashbang: true,
// 	// 保存页面切换的位置滚动
// 	saveScrollPosition: true
// });
// 
// 
// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。
const routes = [{ path: '/foo', component: Foo }, { path: '/bar', component: Bar }];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app');

// 现在，应用已经启动了！

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }

},[13]);