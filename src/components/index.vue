<template>
  <div id="app">
    <Display></Display>
    <br>
    <Increment></Increment>
    <br>
    <p>--------------------------------------------------</p>
    <input type="text" v-model="msg" name="">
    <Child v-bind:parentmsg="msg" v-on:child-say="valueUp"></Child>
    <br>
    <p>{{childMes}}</p>
    <!-- <span style="font-family: tahoma, arial, helvetica, sans-serif; font-size: 16px">
      <p @valueUp ="recieve">{{childMes}}</p>
    </span> -->
  </div>
</template>

<script>
import Display from './display'
import Increment from './increment'
import Child from './child'

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Display: Display,
    Increment: Increment,
    Child: Child
  },
  data () {
    return {
      msg: 'wangzhe',
      childMes: ''
    }
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters([
      'getCount'
    ])
  },
  methods: {
    ...mapActions([
      'updateMessage'
    ]),
    valueUp (mes) {
      this.childMes = mes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>