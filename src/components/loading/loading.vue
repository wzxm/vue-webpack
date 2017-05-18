<template>
  <div id="st-preloader" v-show="show">
    <div id="pre-status" v-show="show">
        <div class="preload-placeholder"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-loading',
    data () {
      return {
        show: true
      }
    },
    computed: {
      change: () => {
        this.show = false
        return
      }
    },
    watch: {

    },
    created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
      setTimeout(() => {
        this.show = false
      }, 1000)
    }
  }

</script>
<style lang="scss">
    #st-preloader {
        background: #FFF;
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 9999;
    }
    
    #pre-status,
    .preload-placeholder {
        background-image: url(http://jspang.com/wp-content/themes/aster/assets/images/preloader.gif);
        background-position: center;
        background-repeat: no-repeat;
        height: 50px;
        left: 50%;
        margin: -25px 0 0 -25px;
        position: absolute;
        top: 50%;
        width: 50px;
    }
    
    .preload-placeholder {
        background: none;
        left: 0;
        margin: 0;
        text-align: center;
        top: 65%;
    }
</style>