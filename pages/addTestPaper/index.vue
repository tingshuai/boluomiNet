<template>
  <section class="container">
    <control-bar></control-bar><!--控件菜单栏-->
    <section class='parent-dom' id="parent-dom">
      <div class="logobg"></div>
      <vue-scroll :ops="ops" @handle-scroll="handleScroll">
        <div class='child-dom paper' id="child-dom">
          <!-- <textarea v-model="formula" cols="30" rows="10"></textarea>
          <vue-mathjax :formula="formula"></vue-mathjax> -->
          <sealing-line></sealing-line><!--密封线-->
          <test-body></test-body><!--试卷主题-->
        </div>
      </vue-scroll>
    </section>
  </section>
</template>

<script>
import '@/static/api/home'
import sealingLine from '~/components/sealingLine.vue'
import controlBar from '~/components/controlBar.vue'
import testBody from '~/components/testBody.vue'
import axios from 'axios'
import { VueMathjax } from 'vue-mathjax'
export default {
  layout:"draw",
  components: {
    'vue-mathjax': VueMathjax,
    sealingLine,controlBar,testBody
  },  
  async asyncData({ $axios }) {

  },
  data () {
    return {
      formula: "",
      boxShadow:"",
      msg: 'Welcome to Your Vue.js App',
      ops:{
        
      },
      testContent:{//试卷内容......

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
  @media all{  
    .container{
      display: flex;
      justify-content: space-between;
      width: 100%;
      overflow: hidden;
      height:100%;
      align-content:stretch;
      .logobg{
        background: url('~assets/img/logo.png');
        background-size: 150px 150px;
        opacity: 0.15;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
      }
      .parent-dom{
        flex-grow: 1;
        overflow: auto;
        height:100%;
        position: relative;
        z-index: 100;
        .child-dom{
          width:2100px;
          height: 1450px; 
          display: flex;
          justify-content: space-between;
          align-items: stretch;
        }
      }
    }
  }
</style>
