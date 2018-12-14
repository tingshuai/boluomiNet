<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt/>
    <foot></foot>
  </div>
</template>
<script>
import navBar from '~/components/nav.vue'
import foot from '~/components/foot.vue'
export default {
  components: {
    navBar,foot
  },  
  data () {
    return {
      
    }
  },
  created(){

  }
}
</script>
<style scope lang="less">

</style>
