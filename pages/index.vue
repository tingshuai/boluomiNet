<template>
  <section class="container">
    <classification></classification>
    <div class="part new_hot">
      <section class="type">
        <aside class="item">最新</aside>
        <aside class="item act">最热</aside>
      </section>
      <ul class="course">
        <li class="courseList">
          <aside class="left">
            <figure>
              <img src="~/assets/img/head.jpg" width="350" height="234" />
              <figcaption>黄浦江上的的卢浦大桥</figcaption>
            </figure>
            <div class="teachMsg">
              <section class="t1 title"><span class="tit">试题：</span><span class="val">33套</span></section>
              <section class="t2 title"><span class="tit">章节：</span><span class="val">23课时</span></section>
              <section class="t2 title"><span class="tit">学员：</span><span class="val">233人</span></section>
            </div>
          </aside>
          <aside class="right">
            <ul class="t3">
              <li>二元一次不等式</li>
              <li>立体几何</li>
              <li>三角函数</li>
              <li>数列</li>
              <li>不等式</li>
              <li>泛函</li>
            </ul>
          </aside>
        </li>
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
    axios.get('/api/home/menuList', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
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
      margin: 15px 15px;
      height: 178px;
      border: 1px solid @borderColor;
      border-radius: 12px;
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
