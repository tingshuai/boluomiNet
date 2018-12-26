<template>
    <div class="testbody">
        <section class="part part1">
            <div class="testMsg">
                <h4 class="h4">2018年普通高等学校招生全国统一考试</h4>
                <h2 class="h2">理科数学</h2>
                <textarea :input="inputTestMsg" autoHeight class="textMsg" :style="{'height':textareaHeight+'px'}">
注意事项： 
1．答卷前，考生务必将自己的姓名、准考证号填写在答题卡上。 
2．作答时，务必将答案写在答题卡上。写在本试卷及草稿纸上无效。 
3．考试结束后，将本试卷和答题卡一并交回。
                </textarea>
            </div>
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
        </section>
        <!-- <section class="part part2"></section> -->
        <section class="part part3">

        </section>
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
@color:#333;
@colorLight:#42d29d;
@backgroundColor:#A5AA3F;
@borderColor:#ddd;
@gray:#93999F;
.testbody{
    flex-grow: 1;
    display: flex;
    .part1,.part3{
        flex-grow: 1;
        margin: 0 100px;
        flex-basis: 50%;
    }
    .part2{
      flex-basis: 150px;
    }
    .part1{
      border-right: 1px solid red;
      .testMsg{
          text-align: center;
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
          width: 100%;
      }
    }
    .part3{
      border-left: 1px solid red;
    }
}

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
