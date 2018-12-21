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
@color:#333;
@colorLight:#42d29d;
@backgroundColor:#A5AA3F;
@borderColor:#ddd;
@gray:#93999F;
.footer{
    background-color: @colorLight;
}
</style>
