<template>
  <section class="container">
    <control-bar></control-bar><!--控件菜单栏-->
    <section class='parent-dom' id="parent-dom">
      <vue-scroll :ops="ops" @handle-scroll="handleScroll">
        <div class='child-dom' id="child-dom">
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
  methods:{
    handleScroll(vertical, horizontal, nativeEvent){
      // console.log("v---", vertical,"h---", horizontal,"n----", nativeEvent );
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
