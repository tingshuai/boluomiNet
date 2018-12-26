<template>
  <section class="container">
    <div class="top">

    </div>
    <div class="bottom">
      <section class="left">
        <ul>
          <li><i class="iconfont icon-xuanze"></i></li>
          <li><i class="iconfont icon-xuanze"></i></li>
        </ul>
      </section>
      <section class="center"></section>
      <section class="right"></section>
    </div>
  </section>
</template>

<script>
import '@/static/api/home'
import axios from 'axios'
import { VueMathjax } from 'vue-mathjax'
export default {
  layout:"draw",
  components: {
    'vue-mathjax': VueMathjax,
  },  
  async asyncData({ $axios }) {

  },
  data () {
    return {
      formula: "",
      boxShadow:"",
      msg: 'Welcome to Your Vue.js App',
      ops:{
        
      }
    }
  },
  created(){
  },
  mounted(){
    this.formula =  "$$\\ce{\\frac{[Hg^2+][Hg]}{[co2^2+]}}$$";
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub])
  },
  computed:{

  },
  methods:{
    handleScroll(vertical, horizontal, nativeEvent){
    
    }
  }
}
</script>

<style scope lang="less">
  @color:#333;
  @colorLight:#42d29d;
  @backgroundColor:#A5AA3F;
  @borderColor:#ddd;
  @gray:#93999F;
  @time:0.3s;
  @media all{  
      .container{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .top{
            height: 30px;
          }
          .bottom{
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            .left{
              width: 100px;
              border: 1px solid @borderColor;              
            }
            .center{
              flex-grow: 1;
              border: 1px solid @borderColor;
            }
            .right{
              width: 150px;
              border: 1px solid @borderColor;
            }
          }
      }
  }
</style>
