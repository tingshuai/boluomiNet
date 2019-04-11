<template>
  <div class="testTip">
            <div class="subject">
                <section class="title">一、选择题：本题共<input type="text" value="12"> 小题，每小题 <input type="text" value="5"> 分，共60分．在每小题给出的四个选项中，只有一
项是符合题目要求的．
                </section>
                <ul class="test">
                    <li class="testLists edgeBorder">
                        <div class="title edgeBorder">（1）、我国数学家陈景润在哥德巴赫猜想的研究中取得了世界领先的成果</div>
                        <div class="wrap edgeBorder">
                            <span class="item actBorder">我国数学家陈景润在哥德巴赫猜想的研究中取得了世界领先的成果</span>
                        </div>
                    </li>
                </ul>
            </div>
  </div>
</template>
<script>
export default {
  components: {

  },  
  data () {
    return {
      textareaHeight:150
    }
  },
  created(){

  }
}
</script>

<style scoped lang="less">
  .subject{
      .title{
          line-height: 28px;
      }
      ul.test{
          padding-left: 20px;
          margin-top: 10px;
          .testLists{
              .title{

              }
              .wrap{
                  height: 100px;
                  .item{
                      display: inline-block;
                      &:hover{
                          cursor: move;
                      }
                  }
              }
          }
      }
  }
.edgeBorder{
    border: 1px solid @borderColor;
}
.actBorder{
    border: 1px dotted @colorLight;
}  
</style>
