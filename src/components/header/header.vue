<template>
    <header class="header">
        <div class="header-top text-center">
            <div class="text-logo">
                <a href="/pages/user.html">二胖-王哲关注web前端技术</a>
                <p>关注WEB前端技术！</p>
            </div>
            <!-- /.text-logo -->
        </div>
        <!-- /.header-top -->
    </header>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss">
    .text-center {
        text-align: center;
    }
    .header {
        .header-top {
            background-color: #ffffff;
            padding: 40px 0 34px;
        }
    }

    .text-logo {
        a {
            text-transform: uppercase;
            font-size: 20px;
            font-weight: 600;
            text-decoration: none !important;
            color: #e74c3c;
        }
    }
</style>