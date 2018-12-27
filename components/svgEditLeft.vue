<template>
      <section class="left">
        <ul>
          <li class="item" title="移动工具 A" @contextmenu.prevent="contextmenu" @click="actMe" data-type="xuanze" :class="{ 'act': selType == 'xuanze' }">
              <i class="iconfont icon-xuanze"></i>
          </li>&thinsp;
          <li class="item" title="文字工具 T" @contextmenu.prevent="contextmenu" @click="actMe" data-type="wenzi" :class="{ 'act': selType == 'wenzi' }">
              <i class="iconfont icon-wenzi"></i>
          </li>&thinsp;
          <li class="item" title="线性工具 L" @contextmenu.prevent="contextmenu" @click="actMe" data-type="xiantiao" :class="{ 'act': selType == 'xiantiao' }">
              <i class="iconfont icon-xiantiao"></i>
              <ul class="contextMenu" v-show="selType == 'xiantiao'">
                  <li><i class="block"></i><i class="iconfont icon-xiantiao"></i> <span>直线</span><span class="key">L</span></li>
                  <li><i class="block"></i><i class="iconfont icon--xuxian"></i> <span>虚线</span><span class="key">L</span></li>
                  <li><i class="block"></i><i class="iconfont icon-zhexiantu"></i> <span>折线</span><span class="key">L</span></li>
                  <li><i class="block"></i><i class="iconfont icon-zhexian"></i> <span>折线</span><span class="key">L</span></li>
              </ul>
          </li>&thinsp;
          <li class="item" title="钢笔工具 P" @contextmenu.prevent="contextmenu" @click="actMe" data-type="icon-test3" :class="{ 'act': selType == 'icon-test3' }">
              <i class="iconfont icon-icon-test3"></i>
          </li>&thinsp;
          <li class="item" title="画笔工具 B" @contextmenu.prevent="contextmenu" @click="actMe" data-type="bi1" :class="{ 'act': selType == 'bi1' }">
              <i class="iconfont icon-bi1"></i>
          </li>&thinsp;
          <li class="item" title="矩形工具 M" @contextmenu.prevent="contextmenu" @click="actMe" data-type="juxing1" :class="{ 'act': selType == 'juxing1' }">
              <i class="iconfont icon-juxing1"></i>
              <ul class="contextMenu" v-show="selType == 'juxing1'">
                  <li><i class="block"></i><i class="iconfont icon-juxing1"></i><span>实线</span><span class="key">M</span></li>
                  <li><i class="block"></i><i class="iconfont icon-xuxian"></i><span>虚线</span><span class="key">M</span></li>
              </ul>              
          </li>&thinsp;
          <li class="item" title="椭圆工具 O" @contextmenu.prevent="contextmenu" @click="actMe" data-type="tuoyuanxing" :class="{ 'act': selType == 'tuoyuanxing' }">
              <i class="iconfont icon-tuoyuanxing"></i>
          </li>&thinsp;
          <li class="item" title="橡皮擦 E" @contextmenu.prevent="contextmenu" @click="actMe" data-type="xiangpi" :class="{ 'act': selType == 'xiangpi' }">
              <i class="iconfont icon-xiangpi"></i>
          </li>&thinsp;
          <li class="item" title="色板 C" @contextmenu.prevent="contextmenu" @click="actMe" data-type="yanse1" :class="{ 'act': selType == 'yanse1' }">
              <i class="iconfont icon-yanse1"></i>
          </li>&thinsp;
          <li></li>
          <li></li>
        </ul>
      </section>
</template>
<script>

export default {
  components: {
  },  
  data () {
    return {
      selType:"xuanze"    
    }
  },
  created(){

  },
  methods:{
      actMe(e){
          let _dataSet = e.currentTarget.dataset;
          this.selType = _dataSet.type;
      },
      contextmenu (e) {
        console.log('click:' , e)
      }
  }
}
</script>
<style scoped lang="less">
@color:#333;
@colorLight:#42d29d;
@backgroundColor:#A5AA3F;
@borderColor:#ddd;
@gray:#93999F;
.left{
  width: 80px;
  border-top: 1px solid gray;   
  ul{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 20px 0;
      li{
          flex-basis: 30px;
          height: 25px;
          text-align: center;
          line-height: 23px;
          border-radius: 3px;
          margin: 1.5px 0;    
          position: relative;
          &.item{
              >.iconfont{
                font-size: 22px;
                display: inline-block;
                color: #c1c1c1;
                height: 100%;
                width: 30px;
                &:hover{
                    background-color: #808080;
                    box-shadow: #333 0 0 2px 1px;
                }                
              }
              .contextMenu{
                  width:150px;
                  background-color: #505050;
                  position: absolute;
                  left: 108%;
                  top: 0;
                  border: 1px solid #3e3e3e;
                  z-index: 100;
                  display:flex;
                  flex-direction: column;
                  align-content: flex-start;
                  padding: 0 7px;
                  li{
                      text-align: left;
                      font-size: 12px;
                      vertical-align: top;
                      color: #d8d7d7;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      flex-basis: 20px;
                      &:hover{
                          cursor: default;
                      }
                      .block{
                         width: 4px;
                         height: 4px;
                         margin-right: 8px;
                         background-color: #d8d7d7;
                         vertical-align: middle;
                      }
                      span{
                          vertical-align: middle;
                          flex-basis: 30px;
                      }
                      .iconfont{
                          flex-basis: 30px;
                          vertical-align: middle;
                      }
                      span.key{
                          flex-grow: 1;
                          text-align: right;
                      }
                  }
              }
              &.act{
                  >.iconfont{
                      box-shadow: #232323 0px 0px 2px 2px inset;
                      background-color: #333333;
                  }
              }
          }
      }
  }      
  .vue-contextmenu-listWrapper{
      display: none;
  }     
}
</style>
