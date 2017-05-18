<template>
    <ul id="recentcomments">
      <li class="recentcomments" v-for="item in commentList">
        <span class="comment-author-link">
            <a href="http://jspang.com" rel="external nofollow" class="url">{{item.author}}</a>
        </span>
        发表在《<a :href="item.uri">{{item.text}}</a>》
      </li>
    </ul>
</template>
<script>
export default {
  name: 'v-commentList',
  data () {
    return {
      commentList: [{
        author: '王二胖',
        uri: 'http://jspang.com/2017/03/14/vue2_02/#comment-600',
        text: '【第二季】Vue2.0视频教程-全局API(共9集)'
      }, {
        author: 'lee',
        uri: 'http://jspang.com/2017/03/14/vue2_02/#comment-600',
        text: '【第二季】Vue2.0视频教程-全局API(共9集)'
      }, {
        author: '勤奋的阿鑫',
        uri: 'http://jspang.com/2017/03/14/vue2_02/#comment-600',
        text: '【第二季】Vue2.0视频教程-全局API(共9集)'
      }, {
        author: '大伟',
        uri: 'http://jspang.com/2017/03/14/vue2_02/#comment-600',
        text: '【第二季】Vue2.0视频教程-全局API(共9集)'
      }]
    }
  }
}
</script>
<style lang="scss"></style>