<template>
    <div class="testbody">
        <section class="part part1">4353</section>
        <section class="part part2"></section>
        <section class="part part3">的说法是否</section>
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
.testbody{
    flex-grow: 1;
    display: flex;
    .part1,.part3{
        flex-grow: 1;
    }
    .part2{
      flex-basis: 150px;
    }
    .part1{
      border-right: 1px solid red;
    }
    .part3{
      border-left: 1px solid red;
    }
}
</style>
