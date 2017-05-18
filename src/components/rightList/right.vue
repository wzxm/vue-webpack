<template>
    <div class="primary-sidebar widget-area" role="complementary">
    <aside id="text-3" class="widget widget_text">
        <h1 class="widget-title text-uppercase">博主公告</h1>
        <div class="textwidget">
        <ul>
            <li>交流QQ：245160801</li>
            <li>课程 ：Vuex 课程已经在录制中，请小伙伴们耐心等待。如果需要交流的可以加我的Q群，里边有很多前端大咔可以交流学习。</li>
            <li>友链 ：如果你也有前端博客，并且百度排名正常，可以加本人QQ：245160801 进行交换友链，申请时写明友链交换。</li>
        </ul>
        </div>
    </aside>
    <aside id="search-4" class="widget widget_search">
        <h1 class="widget-title text-uppercase">文章搜索</h1>
        <form role="search" method="get" id="search-form" action="http://jspang.com/">
        <div class="aster-search-form">
            <input type="text" placeholder="Search and hit enter…" value="" name="s" id="s">
        </div>
        </form>
    </aside>
    <aside id="aster_about_base_widget-3" class="widget widget_aster_about_base_widget">
        <h1 class="widget-title text-uppercase">博主介绍</h1>
        <div class="about-widget">
            <div class="about-me-content">网名：ERPang(王二胖)，WEB前端技术开发者。从 2005 年开始接触 IT 业，一直从事编程工作，
            曾用技术有J2EE，JAVA，现在主要开发 WEB 前端。博客多以视频加博文的方式记录工作和学习过程。希望认识更多的前端朋友。
            </div>            
        </div>
    </aside>
    <aside id="categories-8" class="widget widget_categories">
        <h1 class="widget-title text-uppercase">文章分类</h1>
        <v-essayList></v-essayList>
    </aside>
    <aside id="recent-comments-6" class="widget widget_recent_comments">
        <h1 class="widget-title text-uppercase">近期评论</h1>
        <v-commentList></v-commentList>
    </aside>
    <aside id="tag_cloud-5" class="widget widget_tag_cloud">
        <h1 class="widget-title text-uppercase">标签</h1>
        <v-tagList></v-tagList>
    </aside>
    <aside id="text-5" class="widget widget_text">
        <h1 class="widget-title text-uppercase">友链</h1>
        <div class="textwidget">
        <ul>
            <li v-for="item in friendship"><a :href="item.uri" target="_blank">{{item.text}}</a></li>
        </ul>
        </div>
    </aside>
    </div>
</template>

<script>
import EssayList from './essayList'
import CommentList from './commentList'
import TagList from './tagList'

export default {
  name: 'v-right',
  components: {
    'v-essayList': EssayList,
    'v-commentList': CommentList,
    'v-tagList': TagList
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
      }]
    }
  },
  watch: {
    '$route' (to, from) {
    }
  }
}
</script>

<style lang="scss">
aside.widget {
      background-color: #ffffff;
      box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.03);
      margin-bottom: 30px;
      padding: 26px;
      text-align: left;
      .widget-title {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1px;
      }
      .text-uppercase {
        text-transform: uppercase;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          border-bottom: 1px solid #eeeeee;
          padding: 6px 0;
          a {
            color: #222222;
            line-height: 26px;
            font-size: 14px;
            &:hover {
              text-decoration: none !important;
              color: #e74c3c;
            }
          }
          .pull-right {
            float: right!important;
          }
          ul {
            padding-left: 15px;
            border-top: 1px solid #eeeeee;
            margin-top: 6px;
          }
        }
        li:first-child {
          padding-top: 0;
        }
        li:last-child {
          padding-bottom: 0;
          border-bottom: 0px;
        }
      }
  }
  .tagcloud a {
    background-color: #222222;
    color: #ffffff;
    display: inline-block;
    font-size: 11px !important;
    text-transform: uppercase;
    padding: 5px 10px;
    margin-right: 2px;
    margin-bottom: 5px;
    &:hover {
      text-decoration: none !important;
      background-color: #e74c3c;
      color: #ffffff;
    }
  }
</style>