<template>
    <div class="tagcloud">
        <a v-for="item in tagList" :href="item.uri" class="tag-link-22 tag-link-position-1" :title="item.topix" style="font-size: 22pt;">{{item.text}}</a>
    </div>
</template>
<script>
export default {
  name: 'v-tagList',
  data () {
    return {
      tagList: [{
        uri: 'http://jspang.com/tag/cocoscreator/',
        topic: '15个话题',
        text: 'CocosCreator'
      }, {
        uri: 'http://jspang.com/tag/es6/',
        topic: '2个话题',
        text: 'ES6'
      }, {
        uri: 'http://jspang.com/tag/js%e7%89%b9%e6%95%88/',
        topic: '1个话题',
        text: 'JS 特效'
      }, {
        uri: 'http://jspang.com/tag/vue/',
        topic: '6个话题',
        text: 'VUE'
      }, {
        uri: 'http://jspang.com/tag/vue/',
        topic: '2个话题',
        text: '读书'
      }]
    }
  }
}
</script>
<style lang="scss"></style>