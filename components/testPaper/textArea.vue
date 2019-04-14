<template>
    <textarea v-model="textVal" unselectable="on" :rows="rows" :readonly="status" :autoHeight="autoHeight" class="textMsg" @input="inputing" @blur="blur" @dblclick="dblclick"></textarea>
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
        user-select:none;
    }
</style>
