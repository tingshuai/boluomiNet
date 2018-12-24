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
    <section class='parent-dom'>
      <vue-scroll :ops="ops">
        <div class='child-dom'>
          <textarea v-model="formula" cols="30" rows="10"></textarea>
          <vue-mathjax :formula="formula"></vue-mathjax>
        </div>
      </vue-scroll>
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
      msg: 'Welcome to Your Vue.js App',
      ops:{
        
      }
    }
  },
  created(){
  },
  mounted(){
    this.formula =  "$$\\ce{\\frac{[Hg^2+][Hg]}{[Hg2^2+]}}$$";
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub])
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
  .container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    height:100%;
    align-content:stretch;
    .parent-dom{
      flex-grow: 1;
      overflow: auto;
      height:100%;
      border: 1px solid red;
      .child-dom{
        width:2100px;
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
