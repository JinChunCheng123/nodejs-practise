//node创建服务
const http = require("http")
const qs = require("querystring")
const url = require("url")
http
  .createServer((req, res) => {
    res.end("hello world")
  })
  .listen(3333, () => {
    console.log("listen on 3333")
  })

//node创建接口
const resData = {
  id: 1,
  name: "jinchuncheng",
  age: 28
}
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    const result = JSON.stringify(resData)
    res.end(result, null, () => {
      //data encoding callback
      console.log("请求数据返回成功")
    })
  })
  .listen(4444, () => {
    console.log("listen on 4444")
  })

//node创建路由
const response = (id) => ({
  code: 0,
  data: {
    id,
    name: "jinchuncheng",
    age: 28
  }
})
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    console.log("1-------", req.url)
    //url.parse已被官方不推荐使用，使用qs.parse或URl类替代
    const reqUrl = new URL(req.url, "http://localhost:5555")
    console.log("2-------", reqUrl)
    if (reqUrl.pathname === "/api/find/user") {
      const uid = reqUrl.searchParams.get("uid")
      const result = JSON.stringify(response(uid))
      res.end(result)
    } else {
      res.writeHead(404).end("404 NotFund")
    }
  })
  .listen(5555, () => {
    console.log("listen on 5555")
  })
