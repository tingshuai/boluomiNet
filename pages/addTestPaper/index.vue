<template>
  <section class="container">
    <textarea v-model="formula" cols="30" rows="10"></textarea>
    <vue-mathjax :formula="formula"></vue-mathjax>
  </section>
</template>

<script>
import '@/static/api/home'
import axios from 'axios'
import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    'vue-mathjax': VueMathjax
  },  
  async asyncData({ $axios }) {
  },  
  data () {
    return {
      formula: "",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  },
  mounted(){
    this.formula = '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$';
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub])
  }
}
</script>

<style scope lang="less">

</style>
