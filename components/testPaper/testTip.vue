<template>
            <div class="testMsg">
                <h4 class="h4">2018年普通高等学校招生全国统一考试</h4>
                <h2 class="h2">理科数学</h2>
                <textarea autoHeight class="textMsg">
注意事项： 
1．答卷前，考生务必将自己的姓名、准考证号填写在答题卡上。 
2．作答时，务必将答案写在答题卡上。写在本试卷及草稿纸上无效。 
3．考试结束后，将本试卷和答题卡一并交回。
                </textarea>
            </div>
</template>
<script>
import './textArea.vue'
export default {
  components: {

  },  
  data () {
    return {

    }
  },
  created(){

  },
  methods:{

  }
}
</script>

<style scoped lang="less">
  .testMsg{
      text-align: center;
      min-width: 100%;
      min-height: 150px;
      .h4{
          margin: 30px 0 10px 0;
      }
      .h2{
          margin: 20px 0;
      }
  }
  .textMsg{
      font-size: 15px;
      line-height: 25px;
      border: none;
      width: 100%!important;
  }
</style>
