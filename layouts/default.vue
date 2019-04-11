<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt/>
    <foot class="footer"></foot>
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
<style scoped lang="less">
.footer{
    background-color: @colorLight;
}
</style>
