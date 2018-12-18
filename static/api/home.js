  import Mock from "mockjs";
  let random = Mock.Random;
  Mock.mock("/api/home/menuList", "get", {
      "code": 0,
      "data": {
        "className": [
          {
            classCode:1,
            name:"高一",
          },{
            classCode:2,
            name:"高二",
          },{
            classCode:3,
            name:"高三",
          }],
        "subject":[
          {
            subjectCode:1,
            name:"数学",
          },{
            subjectCode:1,
            name:"物理",
          },{
            subjectCode:1,
            name:"化学",
          }
        ],
        "chapter": [
          {
            chapterCode:1,
            name:"一次方程"
          },          {
            chapterCode:2,
            name:"立体几何"
          },{
            chapterCode:3,
            name:"不等式"
          },          {
            chapterCode:4,
            name:"三角函数"
          },{
            chapterCode:5,
            name:"微积分"
          },{
            chapterCode:6,
            name:"集合"
          },{
            chapterCode:7,
            name:"虚数"
          }
        ]
      },
      "msg": "success"
  })



  let filterList = [];
  let i = 0;
  for( i; i<8; i++){
    filterList.push({
      headImg:random.image("80","#ddd","头像"),
      tests:22,
      chapter:33,
      students:103,
      chapterType:["立体几何","三角函数","微积分","矩阵","圆角坐标系"]
    })
  }
  Mock.mock("/api/home/filterList","get",{
    code:0,
    data:filterList,
    msg:"success"
  })