<template>
  <section class="container">
    <section class="controlBar">
      <ul>
        <li>
          <i class="iconfont icon-shezhi"></i>
          <span class="title">设置</span>
        </li>
        <li>
          <i class="iconfont icon-moban"></i>
          <span class="title">模板</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yixuekepu"></use>
          </svg>
          <span class="title">科目</span>
        </li>
        <li>
          <i class="iconfont icon-huatugongju1"></i>
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huatugongju1"></use>
          </svg> -->
          <span class="title">作图</span>
        </li>   
        <li>
          <i class="iconfont icon-bangzhu"></i>
          <span class="title">帮助</span>
        </li>                             
      </ul>
    </section>
    <section class="content">
      <div class="canvas">
        <textarea v-model="formula" cols="30" rows="10"></textarea>
        <vue-mathjax :formula="formula"></vue-mathjax>
      </div>
    </section>
  </section>
</template>

<script>
import '@/static/api/home'
import axios from 'axios'
import { VueMathjax } from 'vue-mathjax'
export default {
  layout:"draw",
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
  .container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    .content{
      flex-grow: 1;
      overflow: auto;
      .canvas{
        width:2100px;
        border: 1px solid red;
        height: 1450px;
      }
    }
    .controlBar{
      flex-basis: 150px;
      ul{
        li{
          font-size: 14px;
        }
      }
    }
  }
</style>
