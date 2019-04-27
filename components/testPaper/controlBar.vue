<template>
    <section id="menuBar" class="controlBar" :class="{ 'shink' : ishink}">
      <div class="menu">
          <div class="head">
              <figure class="figure">
                <img src="~/assets/img/head.jpg" alt="">
              </figure>
              <span class="name">挺帅</span>
          </div>   
          <div class="line"></div>      
          <ul id="menuList">
            <li v-for="(item,index) in menuData" :key="index" :class="{'curItem':curIndex == index}" class="hIcon" :title="item.name" @click="menuClick(item)">
              <i class="iconfont" :class="item.icon"></i>
              <span class="title">{{ item.name }}</span>
            </li>
          </ul>
          <div class="line"></div>      
          <div class="bar hIcon" @click="toggleBar">
              <i class="iconfont icon-shouqi"></i>
          </div>
      </div>

      <div class="childMenu" :class="curIndex == null ? '' : 'shrinkChildren'">
        <section class="childItem" v-show="curIndex == 0">
          <!--设置项获得焦点.....-->
          <el-form class="setting">
            <el-form-item label="密封线:">
              <el-switch v-model="isOpen"></el-switch>
            </el-form-item>
          </el-form>
        </section>
      </div>
    </section>
</template>
<script>
export default {
  components: {
    
  },
  data () {
    return {
      ishink:false,
      curIndex:null,
      isOpen:true,//是否显示密封线.....
      menuData:[
        {
          icon:'icon-shezhi',
          name:"设置",
          value:0
        },
        {
          icon:'icon-moban',
          name:"模板",
          value:1
        }, 
        {
          icon:'icon-huatugongju1',
          name:"科目",
          value:2
        },    
        {
          icon:'icon-kemumoren',
          name:"绘图",
          value:3
        },  
        {
          icon:'icon-bangzhu',
          name:"帮助",
          value:4
        },  
        {
          icon:'icon-baocun',
          name:"保存",
          value:5
        },  
        {
          icon:'icon-tuichu',
          name:"退出",
          value:6
        }                                              
      ]
    }
  },
  created(){

  },
  mounted(){
    let that = this;
    document.addEventListener('click',(e)=>{
      let _ele = document.getElementById('menuBar');
      if( !_ele.contains(e.target) ){
        that.curIndex = null;
      }
    })
  },
  methods:{
    toggleBar(){
      this.ishink = !this.ishink;
    },
    menuClick(menu){
      if( menu.value == this.curIndex ){//已经是焦点元素了
        this.curIndex = null;
      }else{
        this.curIndex = menu.value;
      }
    }
  }
}
</script>

<style lang="less" scoped>
@menuWidth:100px;
.controlBar{
  z-index: 1000;
  display: flex;
  flex: auto;
  justify-content: flex-start;
  box-shadow: #333 -7px 0px 30px 5px;
  position: relative;
  .menu{
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;  
    z-index: 100;
    height: 100%;
    flex: 1 1 85px;
    .line{
      border-bottom: 1.4px solid @borderColor;
      width: 80%;
      margin: 0 auto;
      opacity: 0.6;
    }  
    .head{
      width: auto;
      text-align: center;
      margin: 10px 0;
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
          font-size: 14px;
          vertical-align: middle;
          overflow: hidden;
          width: 35px;
        }
      }
      li.curItem{
        .iconfont,.title{
          color: @colorLight;
        }
      }
    }
  }
  .childMenu{
    width: 0;
    height: 100%;
    background-color: rgba(255,255,255,0.8);
    z-index: 0;
    overflow: hidden;
    border-left: 1px solid #f9f9f9;
    transition: width @time;
  }
  .childMenu.shrinkChildren{
    width: 200px;
  }
}
.shink{
  .menu{
    flex: 1 1 50px;
    .head{
      .figure{
        width: 40px;
        height: 40px;
      }
      .name{
        display: inline-block;
        font-size: 0;
        opacity: 0;
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
        font-size: 0;
        opacity: 0;
      }
    }
  }
}
.figure,.title,.name,.controlBar{
    transition: all @time;
}
</style>
