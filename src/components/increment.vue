<template>
	<div>
		<button @click='increment'>Increment +1 + {{msg}}</button>
	</div>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    default: {
      props: ['msg']
    },
    methods: {
      ...mapActions([
        'increment'
      ])
    }
  }
</script>