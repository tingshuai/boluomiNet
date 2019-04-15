<template>
            <div class="testMsg">
                <h4 class="h4">2018年普通高等学校招生全国统一考试</h4>
                <h2 class="h2">理科数学</h2>
                <text-area :rows="rows" :value="textVal" autoHeight minHeight="110px" class="textM"></text-area>
            </div>
</template>
<script>
import textArea from './textArea.vue'
export default {
  components: {
    textArea
  },  
  data () {
    return {
      textVal:`注意事项： 
1．答卷前，考生务必将自己的姓名、准考证号填写在答题卡上。 
2．作答时，务必将答案写在答题卡上。写在本试卷及草稿纸上无效。 
3．考试结束后，将本试卷和答题卡一并交回。`,
      rows:4
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
      text-align: left;
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

  }
</style>
