<template>
      <section class="center">
        <svg id="svg" class="svg" @mousemove="mousemove" @mousedown="mousedown" @mouseup="mouseup" :class="selType" width="80%" height="80%" style="background-color: white;" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>
      </section>
</template>
<script>
let Svg;
if (process.client) {
  let Snap = require('imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js')
  Svg = Snap('#svg')
}
export default {
  props:{
    selType:{
      default:'',
      type:String
    }
  },
  components: {
    
  },  
  data () {
    return {
      coordinateDown:[],//鼠标按下的坐标.....
      coordinateUp:[],//鼠标抬起的坐标.....
      coordinateOver:[],//鼠标抬起的坐标.....
      timer:"",//是否结束绘制....
      layer:[],//图层......
      drawType:"",//画笔类型.....
      actLayerId:"",//焦点图层......
    }
  },
  created(){

  },
  mounted(){
    this.bindDrag();
  },
  watch:{
    selType(n,o){
      Svg.selectAll(".svgItem").forEach((ele,i,arr)=>{
          ele.undrag();
      })
      this.drawType = n;
      if( n == "xuanze" ){
        this.bindDrag();
      }
    }
  },
  methods:{
      active(){//聚焦出现蚂蚁线.......
        Svg.selectAll(".svgItem").forEach((ele,i,arr)=>{
            ele.drag();
        });
      },
      bindDrag(){
        Svg.selectAll(".svgItem").forEach((ele,i,arr)=>{
            ele.click((e)=>{
              let _dataset = e.currentTarget.dataset;
              let _box = Svg.select(`#${_dataset.id}`).getBBox();
              console.log(JSON.stringify(_box));
              Svg.paper.path(_box.path.toString()).attr({
                  stroke: "#000",
                  strokeWidth: 5,
                  class:"antLines"
              });
            });
        })
      },
      mousemove(e){
        this.coordinateOver = [ e.offsetX,e.offsetY ];
        if( this.timer ) {
          this.draw();
        }
      },
      mouseup(e){
        this.coordinateUp = [ e.offsetX,e.offsetY ];// 记下鼠标抬起的坐标.....
        this.timer = false;
      },
      mousedown(e){
        this.coordinateDown = [ e.offsetX,e.offsetY ];//记录鼠标按下的坐标....
        this.timer = true;//绘画开始.....
        this.drawFirst();
      },
      addLayer(_time){
        this.layer.push({
          name:"图层",
          id:_time
        })
      },
      drawFirst(obj){
        let _time = new Date().getTime();
        switch( this.drawType ){
          case "xuanze":{//选择.....
            break;
          }
          case "wenzi":{//文字工具......
            break;
          }
          case "xiantiao":{//线段
            if( this.timer ){
              Svg.paper.line( this.coordinateDown[0],this.coordinateDown[1],this.coordinateDown[0],this.coordinateDown[1] ).attr({
                  stroke: "#000",
                  strokeWidth: 5,
                  class:"svgItem",
                  id:'id'+_time,
                  "data-id":'id'+_time
              });
              this.active();
              this.addLayer( _time );
            }
            break;
          }
          case "icon-test3":{//钢笔工具.....
            break;
          }
          case "bi1":{//画笔工具...
            break;
          }
          case "juxing1":{//矩形工具.....
            break;
          }
          case "tuoyuanxing":{//椭圆工具.....
            break;
          }
          case "xiangpi":{//橡皮工具....
            break;
          }
          case "yanse1":{//色板
            break;
          }
          default:{
            break;
          }
        }
        this.actLayerId = _time;
      },
      draw(n){
        switch(this.drawType){
          case "xuanze":{//选择.....
            break;
          }
          case "wenzi":{//文字工具......
            break;
          }
          case "xiantiao":{//线段
            Svg.select(`#id${this.actLayerId}`).attr({
              x2:this.coordinateOver[0],
              y2:this.coordinateOver[1]
            });
            break;
          }
          case "icon-test3":{//钢笔工具.....
            break;
          }
          case "bi1":{//画笔工具...
            break;
          }
          case "juxing1":{//矩形工具.....
            break;
          }
          case "tuoyuanxing":{//椭圆工具.....
            break;
          }
          case "xiangpi":{//橡皮工具....
            break;
          }
          case "yanse1":{//色板
            break;
          }
          default:{
            break;
          }
        }
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
  display: flex;
  justify-content: center;
  align-items: center;
  .svg{
    :hover{

    }
  }
  .svg.xuanze{
    &:hover{
      cursor: default;
    }
  }
  .svg.xiantiao,.svg.icon-test3,.svg.juxing1,.svg.tuoyuanxing{
    &:hover{
      cursor: crosshair;
    }
  }
  .svg.wenzi{
    &:hover{
      cursor: text;
    }
  }
  .svg.bi1,.svg.xiangpi{
    &:hover{
      
    }
  }
}
</style>
