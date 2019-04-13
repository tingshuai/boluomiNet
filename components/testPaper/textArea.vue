<template>
    <textarea v-model="value" :autoHeight="autoHeight" class="textMsg"></textarea>
</template>
<script>
export default {
    props:{
        value:{
            default:''
        },
        autoHeight:{
            default:true
        }
    },
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

</style>
