<template>
  <section class="container">
    <classification></classification>
  </section>
</template>

<script>
import classification from '~/components/classification.vue'

export default {
  components: {
    classification
  },  
  data () {
    return {
      
    }
  },
  created(){

  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
