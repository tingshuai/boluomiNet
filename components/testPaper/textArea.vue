<template>
    <div class="textarea">
        <div class="controlbar">
            <i class="iconfont icon-bianjishijuanmingcheng"></i>
            <i class="iconfont icon-dakai"></i>
        </div>
        <textarea v-model="textVal" :rows="rows" :readonly="status" :autoHeight="autoHeight" class="textMsg" @input="inputing" @blur="blur" @dblclick="dblclick"></textarea>
    </div>
</template>
<script>
export default {
    props:{
        rows:{
            default:''
        },
        value:{
            default:''
        },
        autoHeight:{
            default:true
        }
    },
    computed:{
        
    },
    components: {

    },  
    data () {
        return {
            status:true,
            textVal:this.value
        }
    },
    created(){

    },
    methods:{
        inputing(val){
            console.log(val);
        },
        dblclick(e){
            this.$nextTick(()=>{
                this.status = false;
            })
        },
        blur(e){
            this.status = true;
        }
    }
}
</script>

<style scoped lang="less">
    .textMsg{
      font-size: 15px;
      line-height: 25px;
      border: none;
      width: 100%!important;
    }
</style>
