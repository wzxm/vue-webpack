<template>
  <div>
    <h4>{{parentmsg}}</h4>
    <input type="text" name="" v-model="inputValue">
    <br>
    <br>
    <p>---------------------------------------------------------</p>
    <input type="button" name="" value="点击" @click="enter">
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  
  export default {
    props: ['parentmsg'],
    data () {
      return {
        inputValue: ''
      }
    },
    computed: {
      ...mapState({
        age: 'count'
      }),
      ...mapGetters([
        'getCount'
      ])
    },
    methods: {
      ...mapActions([
        'updateMessage'
      ]),
      enter () {
        this.$emit('child-say', this.inputValue)
      }
    }
  }
</script>