import Mock from "mockjs";
import api from "../static/api/"
export default () => {
    Mock.mock(api.home.menuList, "get", {
        "code": 0,
        "data": {
          "fullName": "@CNAME", // 随机生成中文人名
          "userId": 1000234234001,
          "username": "zhangsan"
        },
        "msg": "success"
    })
}