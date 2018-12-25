<template>
    <section class="part sealingLine">
      <div class="studentMsg">
        <aside class="msg msg1">
          <span class="tit">学号</span>
        </aside>
        <aside class="msg msg2">
          <span class="tit">姓名</span>
        </aside>
        <aside class="msg msg3">
          <span class="tit">班级</span>
        </aside>   
        <aside class="msg msg4">
          <span class="tit">学校</span>
        </aside>                                       
      </div>
      <div class="line">
          <span class="font"><span>线</span></span>
          <span class="font"><span>封</span></span>
          <span class="font"><span>密</span></span>
          <div class="dotted"></div>
      </div>
    </section>
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

  },
  methods:{
      drag(e){
          console.log(e);
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
.sealingLine{
  flex-basis: 150px;
  display: flex;
  justify-content: space-between;
  border-right: 2px solid @color;
}
.line{
    position: relative;
    display: flex;
    padding:20px 0;
    flex-direction: column;    
    flex-grow: 1;
    .dotted{
        position: absolute;
        display: inline-block;
        border-right: 2px dotted #333;
        height: 100%;
        left: 9px;
        top: 0;
    }
    .font{
        flex-grow: 1;
        position: relative;
        span{
            transform: rotate(-90deg);
            position: absolute;
            top: 50%;
            display: inline-block;
            background-color: white;
            z-index: 10000;
            padding: 0 10px;
            left: -10px;
        }
        &:after{
            content: '';
            display: inline-block;
            border-bottom: 1px dotted @color;
        }
        &:before{
            content: "";
            display: inline-block;
            border-bottom: 1px dotted @color;
        }
    }
}
.studentMsg{
    display: flex;
    padding:20px 0;
    flex-direction: column;
    height: 100%;
    flex-basis: 100px;
    .msg{
        width: 25%;
        flex-grow: 1;
        position: relative;
        .tit{
            width: 70px;
            display: inline-block;
            position: absolute;
            transform: rotate(-90deg);
            position: absolute;
            bottom: 30%;
            &:after{
                content: '';
                display: inline-block;
                width: 250%;
                position: absolute;
                bottom: 0;
                border-bottom: 1px solid @color;
            }
        }
    }
}
</style>
