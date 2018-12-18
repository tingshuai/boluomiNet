<template>
  <div class="navigater">
      <section class="left navBar">
          <ul class="navList">
              <li><nuxt-link class="link act" to="/">首页</nuxt-link></li>
              <li><nuxt-link class="link" to="/course">课程</nuxt-link></li>
              <li><nuxt-link class="link" to="/test">试题</nuxt-link></li>
              <li><nuxt-link class="link" to="/addTestPaper">出题</nuxt-link></li>
          </ul>
      </section>
      <section class="right navBar">
          <ul class="navList">
              <li><nuxt-link class="link" to="/shoppingCar">购物车</nuxt-link></li>
              <li><nuxt-link class="link" to="/me">我</nuxt-link></li>
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
     
    }
  },
  created(){

  }
}
</script>

<style lang="less" scoped>
@color:#333;
@colorLight:#42d29d;
@backgroundColor:#A5AA3F;
@borderColor:#ddd;
@time:0.3s;
  .navigater{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 60px;
    background-color: @colorLight;
    >section{
      padding: 0 8vw;
    }
    section.left{
      flex-grow: 1.5;
      ul{

        >li{
        }  
      }
    }
    section.right{
      flex-grow: 1;
      ul{
        flex-direction: row-reverse;
      }
    }
  }
  .navList{
    display: flex;
    height: 100%;
    align-items: center;
    .link{
      color:white;
      display: block;
      height: 100%;
    }
    .act{
      color: @color;
      &:after{
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        width: 110%;
        left: -5%;
        border-bottom: 2px solid @color;
      }
    }
    >li{
      margin: 0 10px;
      position: relative;
      height: 100%;
      line-height: 60px;
    }
  }
</style>
