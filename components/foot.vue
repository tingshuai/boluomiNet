<template>
  <div class="foot">
    <div class="wrap">
      <section class="left">
        <ul>
          <li><nuxt-link class="link act" to="/">企业合作</nuxt-link></li>
          <li><nuxt-link class="link" to="/">联系我们</nuxt-link></li>
          <li><nuxt-link class="link" to="/">教师招募</nuxt-link></li>
          <li><nuxt-link class="link" to="/">帮助中心</nuxt-link></li>
          <li><nuxt-link class="link" to="/">意见反馈</nuxt-link></li>
          <li><nuxt-link class="link" to="/">友情链接</nuxt-link></li>
        </ul>
        <p class="recordMsg">Copyright © 2018 imooc.com All Rights Reserved | 京ICP备</p>
      </section>
      <section class="right">
        <ul>
          <li>
            <i class="iconfont icon-ins"></i>
            <span>1085370797</span>
          </li>
          <li>
            <i class="iconfont icon-shoujihao"></i>
            <span>18058641352</span>
          </li>
          <li>
            <i class="iconfont icon-weixin---"></i>
            <span class="txt">关注微信公众号</span>
            <span class="erweima">
              <img src="https://www.imooc.com/static/img/common/appload.png" alt="">
              <span>扫码关注</span>
            </span>
          </li>
          <!-- <li>
            <i class="iconfont icon-fenxiang"></i>
            <i class="iconfont icon-qq2"></i>
            <i class="iconfont icon-wx"></i>          
          </li> -->
        </ul>
      </section>
    </div>
  </div>
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

<style scoped lang="less">
  .foot{
    margin-top: 60px;
  }
  .wrap{
    height: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
    .left,.right{
      flex-grow: 1;
    }
    .left{
      ul{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 15px 0;
        >li{
          margin-right:15px;
          height: 30px;
          line-height: 30px;
          >a{
            color: @color;
            font-size: 14px;
            transition: all @time;
            &:hover{
              color: white;
            }
          }
        }
      }
      .recordMsg{
        font-size: 12px;
        text-align: left;
      }
    }
    .right{
      ul{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        >li{
          font-size: 15px;
          position: relative;
          margin-top: 5px;
          display: inline-block;
          flex-basis: auto;
          i,span{
            height: 25px;
            display: inline-block;
            line-height: 25px;
            vertical-align: top;
          }
          i.iconfont{
            font-size: 22px;
          }
          span{
            color: @color;
          }
          span.txt{
            font-size: 13px;
          }
          &:last-child:hover{
            cursor: pointer;
            span.erweima{
              display: inline-block;
            }
          }
          span.erweima{
            width: 200px;
            height: 200px;
            background-color: white;
            padding-top: 12px;
            position: absolute;
            top:-200px;
            left: 30px;
            text-align: center;
            display: none;
            img{
              width: auto;
              height: 160px;
            }
            span{
              display: inline-block;
              height: 20px;
              line-height: 20px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
