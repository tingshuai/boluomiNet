import Vue from 'vue'
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'

Vue.use(vuescroll,{
  ops: {
    vuescroll:{
        mode:"slide",
        zooming:false
    },
    rail:{
        background:"",
        size:"15px",
    },
    bar:{
        keepShow:true,
        size:"8px"
    },
    scrollButton:{
        enable:true
    }
  } // 在这里设置全局默认配置
})