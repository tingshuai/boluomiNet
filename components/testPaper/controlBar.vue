<template>
    <section class="controlBar" :class="{ 'shink' : ishink}">
      <div class="head">
          <figure class="figure">
            <img src="~/assets/img/head.jpg" alt="">
          </figure>
          <span class="name">挺帅</span>
      </div>   
      <div class="line"></div>      
      <ul>
        <li class="hIcon" title="设置">
          <i class="iconfont icon-shezhi"></i>
          <span class="title">设置</span>
        </li>
        <li class="hIcon" title="模板">
          <i class="iconfont icon-moban"></i>
          <span class="title">模板</span>
        </li>
        <li class="hIcon" title="科目">
          <i class="iconfont icon-kemumoren"></i>
          <span class="title">科目</span>
        </li>
        <li class="hIcon" title="作图">
          <i class="iconfont icon-huatugongju1"></i>
          <span class="title">作图</span>
        </li>
        <li class="hIcon" title="帮助">
          <i class="iconfont icon-bangzhu"></i>
          <span class="title">帮助</span>
        </li>
        <div class="line"></div>      
        <li class="hIcon" title="保存">
          <i class="iconfont icon-baocun"></i>
          <span class="title">保存</span>
        </li>
        <li class="hIcon" title="退出">
          <i class="iconfont icon-tuichu"></i>
          <span class="title">退出</span>
        </li>
      </ul>
      <div class="line"></div>      
      <div class="bar hIcon" @click="toggleBar">
          <i class="iconfont icon-shouqi"></i>
      </div>
    </section>
</template>
<script>
export default {
  components: {
    
  },  
  data () {
    return {
      ishink:false
    }
  },
  created(){

  },
  methods:{
    toggleBar(){
      this.ishink = !this.ishink;
    }
  }
}
</script>

<style lang="less" scoped>
.controlBar{
  flex-basis: 100px;
  box-shadow: #333 -7px 0px 30px 5px;
  flex-shrink: 0;
  position: relative;
  z-index: 1000;      
  .line{
    border-bottom: 1px solid @borderColor;
    width: 80%;
    margin: 20px auto;
    opacity: 0.8;
  }  
  .head{
    height: 90px;
    width: auto;
    text-align: center;
    margin: 20px 0;
    .figure{
      height: 65px;
      width: 65px;
      margin: 0 auto;
      box-shadow: rgba(66, 210, 157, 0.3) 0 0 3px 2px;
      border-radius: 7px;
      overflow: hidden;
      img{
        height: 100%;
        width: auto;
      }
    }
    .name{
      font-size: 12px;
      width: 26px;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .bar{
    text-align: center;
    font-size: 22px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 20px;
    transition: transform 0.3s;
    .iconfont{
      font-size: 30px;
      color: @color;
    }
  }
  ul{
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    li{
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      &:hover{
        cursor: pointer;
        .title{
          color: @colorLight;
        }
      }
      .icon,.iconfont{
        font-size: 20px;
        line-height: 29px;
        vertical-align: middle;
        color: #888;
      }
      .title{
        color: @color;
        display: inline-block;
        height: 100%;
        font-size: 16px;
        vertical-align: middle;
        overflow: hidden;
        width: 35px;
      }
    }
  }
}
.shink{
  flex-basis: 50px;
  .head{
    .figure{
      width: 40px;
      height: 40px;
    }
    .name{
      width: 0;
      display: inline-block;
    }
  }
  .bar{
    .iconfont{
      transform: rotate(90deg);
      display: inline-block;
      font-size: 22px;
    }
  }
  ul>li{
    .icon,.iconfont{
      font-size: 28px;
    }
    .title{
      width: 0;
    }
  }
}
.figure,.title,.name,.controlBar{
    transition: all @time;
}
</style>
