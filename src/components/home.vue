<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
    <router-link to="/list" active-class="active">前往list列表页面</router-link>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'vue + webpack 打包项目',
      msg: '作者：王哲'
    }
  }
}
</script>