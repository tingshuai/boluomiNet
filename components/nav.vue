<template>
  <div class="navigater">
      <section class="left navBar">
          <ul>
              <li>首页</li>
              <li>课程</li>
              <li>试题</li>
              <li>出题</li>
          </ul>
      </section>
      <section class="right navBar">
          <ul>
              <li>购物车</li>
              <li>我</li>
          </ul>
      </section>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    Logo,
    'vue-mathjax': VueMathjax
  },  
  data () {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){

  }
}
</script>

<style>

</style>
