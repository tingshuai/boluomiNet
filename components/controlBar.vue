<template>
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
</template>
<script>
export default {
  components: {
    
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
.controlBar{
  flex-basis: 100px;
  box-shadow: #333 -7px 0px 30px 5px;
  flex-shrink: 0;
  position: relative;
  z-index: 100;        
  ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    li{
      padding-left: 10px;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      &:hover{
        cursor: pointer;
      }
      .icon,.iconfont{
        font-size: 20px;
        line-height: 29px;
        vertical-align: middle;
      }
      .title{
        color: @color;
        display: inline-block;
        height: 100%;
        font-size: 16px;
        vertical-align: middle;
      }
    }
  }
}
</style>
