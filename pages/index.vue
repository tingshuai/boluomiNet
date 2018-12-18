<template>
  <section class="container">
    <classification></classification>
    <div class="part new_hot">
      <section class="type">
        <aside class="item">最新</aside>
        <aside class="item act">最热</aside>
      </section>
      <ul class="course">
        <li class="courseList" v-for="( item,index) in filterList" v-bind:key="index">
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
      <section class="title">套题优选</section>
      <ul class="course">
        <li class="courseList"></li>
        <li class="courseList"></li>
        <li class="courseList"></li>
      </ul>
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
      filterList:[]
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
  }
}
</script>

<style scoped lang="less">
@color:#333;
@colorLight:#42d29d;
@backgroundColor:#A5AA3F;
@borderColor:#ddd;
@time:0.3s;
.container{
  max-width: 1100px;
  width: 80%;
  margin: 0 auto;
}
.part{
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
</style>
