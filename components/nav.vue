<template>
  <div class="navigater">
      <section class="left navBar">
          <ul class="navList">
              <li><nuxt-link to="/">首页</nuxt-link></li>
              <li><nuxt-link to="/course">课程</nuxt-link></li>
              <li><nuxt-link to="/test">试题</nuxt-link></li>
              <li><nuxt-link to="/addTestPaper">出题</nuxt-link></li>
          </ul>
      </section>
      <section class="right navBar">
          <ul class="navList">
              <li><nuxt-link to="/shoppingCar">购物车</nuxt-link></li>
              <li><nuxt-link to="/me">我</nuxt-link></li>
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
  .navigater{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 60px;
    section.left{
      width: 75%;
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
    >li{
      padding: 0 10px;
    }
  }
</style>
