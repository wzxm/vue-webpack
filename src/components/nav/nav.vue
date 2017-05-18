<template>
<nav class="main-menu">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="navigation-wrapper">
          <ul id="nav-ul" class="top-menu">
            <li id="index" v-for="(item, index) in list" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1150">
              <router-link :to="item.uri" >{{item.text}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'v-nav',
  data () {
    return {
      list: [{
        uri: '/home/main',
        text: '首页'
      }, {
        uri: '/diary',
        text: '前端日记'
      }, {
        uri: '/hello',
        text: '跳转 hello'
      }, {
        uri: '/mint',
        text: 'Mint-UI 示例'
      }, {
        uri: '/inputBox',
        text: '键盘组件'
      }]
    }
  }
}
</script>

<style lang="scss">
    li {
        list-style: none;
    }
    .main-menu {
        background-color: #ffffff;
        border-top: 1px solid #ededed;
        .container {
            padding: 0 15px;
            margin: 0 auto;
            .row {
                margin: 0 -15px;
            }
        }
    }
    #navigation-wrapper ul.top-menu, #navigation-wrapper .top-menu ul {
        padding: 0;
        margin: 0;
    }
    #navigation-wrapper .top-menu {
        text-align: center;
    }
    #navigation-wrapper .top-menu li {
        display: inline-block;
        margin-right: 18px;
        margin-left: 18px;
        position: relative;
    }
    #navigation-wrapper .top-menu li a {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 50px;
        color: #6a6a6a;
        font-family: 'Open Sans', sans-serif;
        display: block;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        &:hover {
            text-decoration: none !important;
            color: #e74c3c;
        }
    }
</style>