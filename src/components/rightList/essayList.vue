<template>
    <ul>
        <li class="cat-item cat-item-35" v-for="(item, index) in essayList">
            <a :href="item.uri">{{item.text}}</a> <span class="post_count pull-right"> ({{item.infoNum}} )</span>
            <ul class="children" v-show="item.list">
                <li class="cat-item cat-item-25" v-for="obj in item.list">
                    <a :href="obj.uri">{{obj.text}}</a> <span class="post_count pull-right"> ({{obj.infoNum}} )</span>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'v-essayList',
  data () {
    return {
      essayList: [{
        uri: 'http://jspang.com/category/python%e9%85%92%e5%90%a7/',
        text: 'Python酒吧',
        infoNum: 5
      }, {
        uri: 'http://jspang.com/category/python%e9%85%92%e5%90%a7/',
        text: '前端日记',
        infoNum: 34
      }, {
        uri: 'http://jspang.com/category/live/',
        text: '生活趣事',
        infoNum: 2
      }, {
        uri: 'http://jspang.com/category/learn/',
        text: '视频教学',
        infoNum: 24,
        list: [{
          uri: 'http://jspang.com/category/learn/jichu/',
          text: 'CocosCreator基础视频教程',
          infoNum: 5
        }, {
          uri: 'http://jspang.com/category/learn/shizhan/',
          text: 'CocosCreator实战视频教程',
          infoNum: 10
        }, {
          uri: 'http://jspang.com/category/learn/%e6%ad%a5%e5%85%a5fabric-js%e8%a7%86%e9%a2%91%e6%95%99%e7%a8%8b/',
          text: 'Fabric.js视频教程',
          infoNum: 1
        }, {
          uri: 'http://jspang.com/category/learn/vue2/',
          text: 'Vue.js视频教程',
          infoNum: 7
        }]
      }, {
        uri: 'http://jspang.com/category/uncategorized/',
        text: '读书笔记',
        infoNum: 1
      }]
    }
  }
}
</script>
<style lang="scss"></style>