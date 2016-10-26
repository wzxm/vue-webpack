<template>
    <div class='footer'>
        <p>
            <router-link to="/home" active-class="active">首页</router-link>
            <router-link to="/list" active-class="active">跳转1</router-link>
            <router-link to="/hello" active-class="active">跳转2</router-link>
        </p>
    </div>
</template>
<script>
export default {
  name: 'footer',
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    // this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      console.log('执行')
    }
  }
}
</script>
<style>
    .footer{
        width: 100%;
        background: #fff;
        border-top: 1px solid #dedede;
        display: table;
    }
    .footer a{
        width: 12%;
        display: table-cell;
        text-align: center;
        text-decoration: none;
        color: #666
    }
    .active{
        color:red !important;
    }
</style>