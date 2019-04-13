<template>
  <section class="container">
    <classification></classification>
    <div class="part new_hot">
      <section class="type">
        <aside class="item">最新</aside>
        <aside class="item act">最热</aside>
      </section>
      <ul class="course">
        <li class="courseList" v-for="( item,index ) in filterList" v-bind:key="item.id">
          <aside class="left">
            <figure>
              <img :src="item.headImg" width="350" height="234" />
              <figcaption>黄浦江上的的卢浦大桥</figcaption>
            </figure>
            <div class="teachMsg">
              <section class="t1 title"><span class="tit">试题：</span><span class="val">{{ item.tests }}套</span></section>
              <section class="t2 title"><span class="tit">章节：</span><span class="val">{{ item.chapter }}课时</span></section>
              <section class="t2 title"><span class="tit">学员：</span><span class="val">{{ item.students }}人</span></section>
            </div>
          </aside>
          <aside class="right">
            <ul class="t3">
              <li v-for="(it,i) in item.chapterType" v-bind:key="i">{{ it }}</li>
            </ul>
          </aside>
        </li>
        <li class="courseList" style="height:0;padding:0;opacity:0;"></li>
        <li class="courseList" style="height:0;padding:0;opacity:0;"></li>
      </ul>
    </div>

    <div class="part boutiqueTest">
      <section class="title">
        <span><i class="iconfont icon-qingchunhouyuan"  v-for="(item,index) in 3" :key="index"></i></span>
        &nbsp;
        <span class="tt">套题优选</span>
        &nbsp;
        <span><i class="iconfont icon-qingchunhouyuan" v-for="(it,i) in 3" :key="i"></i></span>
      </section>
      <ul class="test">
        <li class="testList" v-for="(item,index) in testList" :key="index">
          <section class="img">
            <div class="wrapImg">
              <img :src="item.img"></img>
            </div>
            <div class="labelList">
              <i class="iconfont" :class="item.sex == 0 ? 'icon-laoshi' : 'icon-jiaoshou1'"></i>
              <span class="label">{{ item.teachMsg }}</span>
            </div>
          </section>
          <section class="msg">
            <div class="t1">
              <i class="iconfont icon-qingchunlianghong-renshu"></i>
              <span class="number">{{ item.students }}已学</span>&nbsp;&nbsp;
              <i class="iconfont icon-shijuanku"></i>
              <span class="number">{{ item.tests }}套</span>&nbsp;&nbsp;            
              <span class="hard">{{ item.difficulty == 0 ? "初级" : item.difficulty == 1 ? "中级" : "高级" }}</span>
            </div>
            <div class="t2">
              <i class="iconfont icon-xingzhuang60kaobei2" v-for="(it,i) in item.star" :key="i"></i>
            </div>
          </section>
        </li>
        <li class="testList" style="height:0;padding:0;opacity:0;"></li>
        <li class="testList" style="height:0;padding:0;opacity:0;"></li>
      </ul>
    </div><!--套题优选-->
    
    <div class="part superTeachers">
      <section class="title">
        <span><i class="iconfont icon-lizhi1"  v-for="(item,index) in 3" :key="index"></i></span>
        &nbsp;
        <span class="tt">远方名师阵营</span>
        &nbsp;
        <span><i class="iconfont icon-lizhi1" v-for="(it,i) in 3" :key="i"></i></span>
      </section>
      <el-carousel indicator-position="outside" trigger="click" height="250px" class="carousel" :interval="5000" arrow="always">
        <el-carousel-item class="carouselItem" v-for="(item,index) in carouselImg" :key="index">
          <div class="carouselIt" v-for="(it,i) in item" :key="i">
            <img :src="it.img" alt="">
            <div class="tit">{{ it.name }}</div>
            <p>{{ it.teachMsg.length > 85 ? it.teachMsg.slice(0,85) + ' . . .' : it.teachMsg }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="part superStar">
      <section class="title">
        <span><i class="iconfont icon-lizhi1"  v-for="(item,index) in 3" :key="index"></i></span>
        &nbsp;
        <span class="tt">周排行榜top10</span>
        &nbsp;
        <span><i class="iconfont icon-lizhi1" v-for="(it,i) in 3" :key="i"></i></span>
      </section>
      <section class="ranking">
        <ul class="progress">
          <li>进步榜</li>
          <li v-for="(item ,index) in progressPrize" :key="index">
            <span class="index">{{ index + 1 }}</span>
            <section class="headImg">
              <img class="hImg" :src="item.headImg" alt=""> 
            </section>
            <section class="studMsg">
              <div class="school">{{item.name}}</div>
              <div class="school">{{item.school}}</div>
            </section>
            <svg class="icon" aria-hidden="true" v-if="index == 0">
              <use xlink:href="#icon-guanjun3"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else-if="index == 1">
              <use xlink:href="#icon-yajun1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else-if="index == 2">
              <use xlink:href="#icon-jijun1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else style="font-size:35px;">
              <use xlink:href="#icon-xianhua-"></use>
            </svg>
          </li>
        </ul>
        <aside class="line"></aside>
        <ul class="progress">
          <li>刷题榜</li>
          <li v-for="(item ,index) in testPrize" :key="index">
            <span class="index">{{ index + 1 }}</span>
            <section class="headImg">
              <img class="hImg" :src="item.headImg" alt="">           
            </section>
            <section class="studMsg">
              <div class="school">{{item.name}}</div>
              <div class="school">{{item.school}}</div>
            </section>
            <svg class="icon" aria-hidden="true" v-if="index == 0">
              <use xlink:href="#icon-guanjun2"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else-if="index == 1">
              <use xlink:href="#icon-yajun3"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else-if="index == 2">
              <use xlink:href="#icon-jijun3"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else style="font-size:35px;">
              <use xlink:href="#icon-xianhualipin"></use>
            </svg>
            <i class="iconfont arow icon-xiangshang1" v-if="item.isRise"></i>
            <i class="iconfont arow icon-xiangxia" v-else style="color:#f78989;"></i>               
          </li>
        </ul>
        <aside class="line"> </aside>
        <ul class="progress">
          <li>总分榜</li>
          <li v-for="(item ,index) in totalPrize" :key="index">
            <span class="index">{{ index + 1 }}</span>
            <section class="headImg">
              <img class="hImg" :src="item.headImg" alt="">
              <svg class="icon huangguan" aria-hidden="true" v-if="index == 0">
                <use xlink:href="#icon-guanjun4"></use>
              </svg>
              <svg class="icon huangguan" aria-hidden="true" v-else-if="index == 1">
                <use xlink:href="#icon-yajun-copy-copy"></use>
              </svg>      
              <svg class="icon huangguan" aria-hidden="true" v-else-if="index == 2">
                <use xlink:href="#icon-jijun5"></use>
              </svg>                    
            </section>
            <section class="studMsg">
              <div class="school">{{item.name}}</div>
              <div class="school">{{item.school}}</div>
            </section>
            <svg class="icon" aria-hidden="true" v-if="index == 0">
              <use xlink:href="#icon-guanjun2"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else-if="index == 1">
              <use xlink:href="#icon-yajun3"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else-if="index == 2">
              <use xlink:href="#icon-jijun3"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else style="font-size:35px;">
              <use xlink:href="#icon-laoshirenzheng"></use>
            </svg>
            <i class="iconfont arow icon-xiangshang1" v-if="item.isRise"></i>
            <i class="iconfont arow icon-xiangxia" v-else style="color:#f78989;"></i>                   
          </li>
        </ul>        
      </section>
    </div>
  </section>
</template>

<script>
import classification from '~/components/classification.vue'
import '@/static/api/home'
import axios from 'axios'
export default {
  components: {
    classification
  },
  data () {
    return {
      filterList:[],//
      testList:[],//试题列表
      progressPrize:[],//进步榜
      testPrize:[],//刷题榜...
      totalPrize:[],//总分榜
      carouselImg:[],//名师轮播图....
    }
  },
  async asyncData({ $axios }) {
    console.log("1");
    const ip = await $axios.$get('http://icanhazip.com').catch((res)=>{
      console.log(res);
    })
    console.log(ip);
    console.log("2");
    return { ip }
  },
  created(){

  },
  mounted(){
    axios.get('/api/home/filterList').then((res)=>{
      this.filterList = res.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    axios.get('/api/home/testList').then((res)=>{
      this.testList = res.data.data;
    })
    .catch((error)=>{
      console.log(error);
    });
    axios.get('/api/home/progressPrize').then((res)=>{
      this.progressPrize = res.data.data;
    })
    .catch((error)=>{
      console.log(error);
    });  
    axios.get('/api/home/testPrize').then((res)=>{
      this.testPrize = res.data.data;
    })
    .catch((error)=>{
      console.log(error);
    }); 
    axios.get('/api/home/totalPrize').then((res)=>{
      this.totalPrize = res.data.data;
    })
    .catch((error)=>{
      console.log(error);
    });
    axios.get('/api/home/carouselImg').then((res)=>{
      this.carouselImg = res.data.data;
      console.log(this.carouselImg);
    })
    .catch((error)=>{
      console.log(error);
    });       
  }
}
</script>

<style scoped lang="less">
.container{

}

.part{
}
.superTeachers{
  background: url('https://www.imooc.com/static/img/index/eliteTbg.jpg');
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding:10px 0 80px 0;
  .tt{
    color: white!important;
  }
}
.classification,.new_hot,.boutiqueTest,.superStar,.carousel{
  max-width: 1100px;
  width: 80%;
  margin: 0 auto;
}
.carousel{
  .carouselItem{
    display: flex;
    justify-content: space-between;
  }
  .carouselIt{
    background-color: @borderColor;
    border-radius: 5px;
    flex-basis: 18%;
    padding: 10px 10px;
    img,p,.tit{
      transition: all @time;
    }
    .tit{
      font-size: 15px;
      color: @color;
    }
    &:hover{
      cursor: pointer;
      img{
        width: 50px;
        height: 50px;
        border: 1px solid @colorLight;
      }
      p{
        height: 180px;
        opacity: 1;
      }
      .tit{
        color: @colorLight;
      }
    }
    img{
      border: 1px solid @gray;
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
    p{
      font-size: 13px;
      line-height: 23px;
      color: @color;
      text-align: left;
      text-indent: 20px;
      height: 155px;
      overflow: hidden;
      opacity: 0.7;
    }
  } 
}
.superStar,.superTeachers{
  text-align: center;
  font-size: 20px;
  .title{
    margin: 50px 0;
    .iconfont{
      font-size: 14px;
      color: @colorLight;
    }
  }
  .tt{
    color: @color;
    font-size: 24px;
  }  
}
.ranking{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .line{
    border-right: 1px solid @borderColor;
    height: 700px;
    top: 70px;
    position: relative;
    opacity: 0.7;
  }
  >ul{
    width: 280px;
    >li{
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 70px;
      border-bottom: 1px solid @borderColor;
      padding: 10px 0;
      align-content: center;
      align-items: center;
      .arow{
        color:@colorLight;
        font-size: 23px;
        width: 10px;
      }
      .headImg{
        height: 100%;
        width: 50px;
        position:relative;
        flex-basis:50px;
        .hImg{
          height:100%;
          width:100%;
          border-radius: 5px;
        }
        .huangguan{
          position: absolute;
          top: -24px;
          left: -20px;
          z-index: 11;
          font-size: 43px;
        }
      }
      .index{
        width: 25px;
        line-height: 25px;
        font-size: 15px;
        color: @color;
        background-color:@colorLight;
        height: 25px;
        border-radius: 50%;
        text-align: center;
        margin-right: 5px;
        color: white;
      }
      .studMsg{
        flex-grow: 1;
        height: 100%;
      }
      .school{
        padding-left: 10px;
        font-size: 13px;
        color: @color;
        margin-top: 5px;
        text-align: left;   
        &:last-child{
          font-size:12px;
          color:@gray;
        }     
      }
      .icon{
        line-height: 50px;
        font-size: 40px;
        top: 2px;
        position: relative;        
      }
      &:first-child{
        text-align: center;
        height: 60px;
        color: @colorLight;
        font-size: 18px;
        border-bottom: 1px solid rgba(0,0,0,0);
        align-items: center;
        justify-content: center;
      }
    }
  }
}
.new_hot{
  section.type{
    width: 100%;
    text-align: left;
    >.item{
      line-height: 30px;
      font-size: 15px;
      width: auto;
      height: 100%;
      display: inline-block;
      cursor: pointer;
      padding: 0px 10px;
      &:first-child{
        margin-right: 5px;
      }
    }
    >aside.act{
      background-color: @colorLight;
      color: white;
      border-radius: 7px;
    }
  }
  ul.course{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
    >li.courseList{
      width: 250px;
      margin: 15px 0px;
      height: 178px;
      border: 1px solid @borderColor;
      border-radius: 4px;
      overflow: hidden;
      padding: 10px 10px;
      transition: all @time;
      &:hover{
        box-shadow: @color 0px 17px 46px -23px;
        transform: rotateX(10deg);
        cursor: pointer;
        >aside{
          transform: translateY(-90px);
        }
      }
      >aside{
        transition:all @time;
      }
      aside.left{
        display: flex;
        justify-content: space-between;
        figure{
          width: 80px;
          height: 80px;
          overflow: hidden;
          border-radius: 7px;
          >img{
            width: 100%;
            height: auto;
          }
        }
        .teachMsg{
          flex-grow: 1;
          margin-left: 15px;
          section.title{
            font-size: 14px;
            text-align: left;
            margin-top: 6px;
          }
        }
      }
      aside.right{
        max-height: 178px;
        overflow: auto;
        >.t3{
          padding: 10px 0;
          li{
            font-size: 12px;
            color: @color;
            margin: 5px 3px;
            display: inline-block;
            border: 1px solid #ddd;
            padding: 4px 10px;
            border-radius: 7px;
          }
        }
      }
    }
  }
}
.boutiqueTest{
    text-align: center;
    font-size: 20px;
    .title{
      margin: 50px 0;
      .iconfont{
        font-size: 28px;
        color: @colorLight;
      }
    }
    .tt{
      color: @color;
      font-size: 24px;
    }
}
ul.test{
  text-align: left;
  display:flex;
  justify-content:space-between;
  flex-wrap: wrap;
  >li.testList{
    height: 300px;
    width: 250px;
    padding: 0 10px;
    &:hover{
      cursor: pointer;
      .labelList{
          color: @colorLight;
      }
    }
    .msg{
      height: 60px;
      line-height: 30px;
      .icon{
        width: 20px;
        height: 20px;
        position: relative;
        top: 5px;
        color: red;
      }
      .t1,.t2{
        height: 30px;
        color: @gray;
        font-size: 13px;
      }
      .t1{

      }
      .t2{
        .iconfont{
          color: @colorLight;
        }
      }
    }
    .wrapImg{
      width: 100%;
      height: 150px;
      overflow: hidden;
      border: 1px solid @borderColor;
      border-radius: 5px;
      >img{
        height: auto;
        width: 100%;
      }
    }
    .labelList{
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: @color;
      transition: all @time;
      .icon{
        width: 20px;
        height: 20px;
        top: 5px;
        display: inline-block;
        position: relative;
      }
    }
  }
}
</style>
