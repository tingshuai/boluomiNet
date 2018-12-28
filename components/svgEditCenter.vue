<template>
      <section class="center">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <circle cx="100" cy="50" r="40" stroke="black"
          stroke-width="2" fill="red" />
        </svg>
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
.center{
  flex-grow: 1;
  background-color: #212121;
}
</style>
