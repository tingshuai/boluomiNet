<template>
    <div class="testbody">
        <section class="part testTipWraper">
            <test-tip></test-tip>
        </section>
        <!-- <section class="part part2"></section> -->
        <section class="part choiceQuestionWraper">
            <choice-question></choice-question>
        </section>
    </div>
</template>
<script>
import testTip from '~/components/testPaper/testTip.vue'
import choiceQuestion from '~/components/testPaper/choiceQuestion.vue'

export default {
  components: {
    testTip,choiceQuestion
  },  
  data () {
    return {
    }
  },
  created(){

  },
  methods:{
      drag(e){
          console.log(e);
      },
      inputTestMsg(){

      }
  }
}
</script>
<style scoped lang="less">
.testbody{
    flex-grow: 1;
    display: flex;
    .part{
        flex-grow: 1;
        margin: 0 100px;
        flex-basis: 50%;
    }
    .testTipWraper{
      border-right: 1px solid red;
    }
    .choiceQuestionWraper{
      border-left: 1px solid red;
    }
}
</style>
