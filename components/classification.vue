<template>
  <div class="">
      <section class="part part1">
          <span class="title">级别</span>
          <ul class="lists">
              <li>高一</li>
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
              <li>立体几何</li>
              <li>不等式</li>
              <li>虚数</li>
              <li>集合</li>
            </ul>
      </section>
      <section class="part part4">
            <span class="title">难度</span>
            <ul class="lists">
              <li>简单</li>
              <li>中等</li>
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

<style lang="less">
  .recordMsg{
    text-align: center;
    font-size: 13px;
    color: #333;
  }
</style>
