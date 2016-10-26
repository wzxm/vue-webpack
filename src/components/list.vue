<template>
  <div class="hello">
    <ul id="example-1">
      <li v-for="item in list">
        {{item.name}} , {{item.age}}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      list: [
        { name: '王五', age: 25 },
        { name: 'simon', age: 45 },
        { name: '张三', age: 35 }
      ]
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
