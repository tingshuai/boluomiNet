<template>
  <div class="classification">
      <section class="part part1">
          <span class="title">级别</span>
          <ul class="lists">
              <li class="act">高一</li>
              <li>高二</li>
              <li>高三</li>
          </ul>
      </section>
      <section class="part part2">
            <span class="title">科目</span>
            <ul class="lists">
              <li class="act">数学</li>
              <li>物理</li>
              <li>化学</li>
            </ul>
      </section>
      <section class="part part3">
            <span class="title">章节</span>
            <ul class="lists">
              <li>三角函数</li>
              <li class="act">立体几何</li>
              <li>不等式</li>
              <li>虚数</li>
              <li>集合</li>
              <li>不等式</li>
              <li>虚数</li>
              <li>集合</li>
                            <li>不等式</li>
              <li>虚数</li>
              <li>集合</li>
                            <li>不等式</li>
              <li>虚数</li>
              <li>集合</li>
                            <li>不等式</li>
              <li>虚数</li>
              <li>集合</li>
                            <li>不等式</li>
              <li>虚数</li>
              <li>集合</li>              
            </ul>
      </section>
      <section class="part part4">
            <span class="title">难度</span>
            <ul class="lists">
              <li>简单</li>
              <li class="act">中等</li>
              <li>较难</li>
            </ul>
      </section>
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

<style lang="less" scope>
@color:#333;
@colorLight:#42d29d;
@background-color:#A5AA3F;
.part{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 0;
  flex-wrap: wrap;
}
.title{
  flex-basis: 100px;
  text-align: right;
  font-size: 20px;
  color: @color;
  margin-right: 20px;
}
.lists{
  text-align: left;
  flex-grow: 1;
  flex-basis: 1px;
  >li{
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    color: @color;
    height: 27px;
    line-height: 23px;
    margin: 6px 6px;
    padding: 0px 8px;
  }
  >li.act{
    color:@colorLight;
    border: 1px solid @colorLight;
    border-radius: 5px;
  }
}
</style>
