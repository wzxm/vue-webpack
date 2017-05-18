<template>
<div>
  <header class="archive-header">
    <div class="archive-title">分类：前端日记</div>
  </header>
  <div class="row masonry_area masonry clearfix">
    <div :key="index" :id="index" v-for="(item, index) in boxList" class="col-md-6 masonry-brick" >
      <article class="box post type-post status-publish format-standard has-post-thumbnail hentry category-vue2">
        <div class="thumbnails">
          <a :href="item.uri" :title="item.title">
            <img width="361" height="270" :src="item.img" class="post-thumbnail img-responsive wp-post-image" alt="" sizes="(max-width: 361px) 100vw, 361px">
          </a>
        </div>
        <div class="padding-content">
          <header class="entry-header">
            <h1 class="entry-title text-uppercase">
              <a :href="item.uri" rel="bookmark">{{item.title}}</a>
            </h1>
          </header> <!--/.entry-header -->
          <div class="entry-meta" style="color:#7f8c8d;">
            阅读：{{item.number}} 次
            <ul class="list-inline">
        <li>
          <span class="author vcard">
            By <a class="url fn n" href="http://jspang.com/author/jspang01/">{{item.author}}</a>
          </span>
        </li>
        <li>/</li>
        <li>
          <span class="posted-on">
            <time class="entry-date published" datetime="2017-05-03T18:52:25+00:00">{{item.time}}</time>
          </span>
        </li>
        </ul>
        </div><!-- .entry-meta -->
          <div class="entry-content">
            <p>{{item.content}}</p>
          </div><!-- .entry-content -->
        </div>
      </article><!-- #post-## -->
    </div>
  </div>
</div>
    <!-- exact 这个链接只会在地址为 /home/foor 的时候被激活 -->
    <!--<router-link to="/home/foor" active-class="foor-active" exact>前往list列表页面</router-link>
    <router-link to="/home/foor/profile" active-class="foor-active" exact>前往list列表页面</router-link>
    <router-link to="/home/foor/posts" active-class="foor-active" exact>前往list列表页面</router-link>

    <transition name="slide-fade" mode="out-in">
      <router-view class="chile-view"></router-view>
    </transition>-->
  <!--</div>-->
</template>

<script>
export default {
  name: 'v-home',
  components: {
  },
  data () {
    return {
      friendship: [{
        uri: 'http://www.liujunting.xin',
        text: '猿人旅程'
      }, {
        uri: 'http://jeffjade.com',
        text: '晚晴幽草轩'
      }, {
        uri: 'http://vf2e.com',
        text: '舞月剑诀'
      }],
      boxList: [{
        img: 'http://jspang.com/wp-content/uploads/2017/05/vuex.jpg',
        uri: 'http://jspang.com/2017/05/03/vuex/',
        title: '技术胖的vuex视频教程',
        number: '2,026',
        author: '技术胖',
        time: '2017年5月13日',
        content: '前言： 公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex。 vuex是一个专门为vue.js设计的集中式状态管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。比如：我们有几个页面要显示用户名…'
      }, {
        img: 'http://jspang.com/wp-content/uploads/2017/04/vue-router2.jpg',
        uri: 'http://jspang.com/2017/04/13/vue-router/',
        title: '二胖的Vue-router视频教程',
        number: '2,980',
        author: '技术胖',
        time: '2017年4月13日',
        content: '简介： 由于Vue在开发时对路由支持的不足，后来官方补充了vue-router插件，它在Vue的生态环境中非常重要，在实际开发中只要编写一个页面就会操作vue-router。要学习vue-router就要先知道这里的路由是什么？这里的路由并不是指我们平时所说的硬件路由器，这里的路由就是SPA（单页应用）的路径管理器。再通俗的说，vue-router就是我们WebApp的链接路径管理系统。 有的小伙…'
      }, {
        img: 'http://jspang.com/wp-content/uploads/2017/04/vue_cli.jpg',
        uri: 'http://jspang.com/2017/04/10/vue-cli/',
        title: '技术胖的Vue-cli 视频教程',
        number: '2,520',
        author: '技术胖',
        time: '2017年4月10日',
        content: '简介： 由于Vue在开发时对路由支持的不足，后来官方补充了vue-router插件，它在Vue的生态环境中非常重要，在实际开发中只要编写一个页面就会操作vue-router。要学习vue-router就要先知道这里的路由是什么？这里的路由并不是指我们平时所说的硬件路由器，这里的路由就是SPA（单页应用）的路径管理器。再通俗的说，vue-router就是我们WebApp的链接路径管理系统。 有的小伙…'
      }, {
        img: 'http://jspang.com/wp-content/uploads/2017/04/2017040911.jpg',
        uri: 'http://jspang.com/2017/04/10/vue-cli/',
        title: '技术胖的Vue-cli 视频教程',
        number: '2,520',
        author: '技术胖',
        time: '2017年4月10日',
        content: '简介： 由于Vue在开发时对路由支持的不足，后来官方补充了vue-router插件，它在Vue的生态环境中非常重要，在实际开发中只要编写一个页面就会操作vue-router。要学习vue-router就要先知道这里的路由是什么？这里的路由并不是指我们平时所说的硬件路由器，这里的路由就是SPA（单页应用）的路径管理器。再通俗的说，vue-router就是我们WebApp的链接路径管理系统。 有的小伙…'
      }, {
        img: 'http://jspang.com/wp-content/uploads/2017/03/2017040922-1.jpg',
        uri: 'http://jspang.com/2017/03/26/jspangadmin/',
        title: '自己作的后台管理开源程序上线',
        number: '916',
        author: '技术胖',
        time: '2017年3月26日',
        content: 'JSPangAdmin是一个建立在Vue2.0框架基础上的后台管理系统，它包含了后台所用的前端样式和常用组件。它可以快速的帮你搭建基于Vue的后台管理系统，剩下宝贵的时间，让前端程序员可以去泡妹子或者去撸两把游戏。 GitHub地址： https://github.com/shenghy/jspangAdmin 相关技术： Vue-cli + element + eCharts 项目预览： htt…'
      }]
    }
  },
  watch: {
    '$route' (to, from) {
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="scss">
  .main-content article.hentry {
      background-color: #ffffff;
      margin-bottom: 30px;
      -webkit-box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.03);
      -moz-box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.03);
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.03);
  }
  a img, iframe {
      border: none !important;
  }
  img {
      vertical-align: middle;
  }
  article .padding-content {
      padding: 26px;
      background-color: #ffffff;
      h1.entry-title {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 1px;
          a {
              color: #222222;
              &:hover {
                  text-decoration: none !important;
                  color: #e74c3c;
              }
          }
      }
      .entry-meta {
          text-align: left;
          ul {
              margin-bottom: 14px;
              margin-left: -2px;
              color: #7f8c8d;
              li {
                  padding-left: 2px;
                  padding-right: 2px;
                  span > a{
                      color: #7f8c8d;
                      &:hover {
                          text-decoration: none !important;
                          color: #e74c3c;
                      }
                  }
              }
          }
      }
      .entry-content {
          text-align: left;
          p {
              margin: 0 0 20px;
          }
      }
  }

  .thumbnails {
    img {
      height: 250px;
    }
  }

  .clearfix:after,
  .clearfix:before {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  .masonry {
    position: relative;
  }
  .box {
    float: left;
    height: auto;
  }
  .archive-header {
      background-color: #ffffff;
      /*margin-left: 15px;*/
      /*margin-right: 15px;*/
      padding: 26px 20px;
      margin-bottom: 30px;
      text-align: left;
  }
</style>