const fs = require("fs")
//同步读取文件
const file1 = fs.readFileSync("/Users/jinchuncheng/Desktop/project-code/nodejs-practise/fs/file1.txt", "utf-8")
console.log(file1)

//同步创建文件
const body = "我是同步创建的文件"
fs.writeFileSync("./newCreate.md", body)

//异步读取文件
const file2 = fs.readFile(
  "/Users/jinchuncheng/Desktop/project-code/nodejs-practise/fs/file2.json",
  "utf-8",
  (err, data) => {
    console.log("异步文件2", data)
  }
)
console.log("sync1")
const file3 = fs.readFile(
  "/Users/jinchuncheng/Desktop/project-code/nodejs-practise/fs/file3.js",
  "utf-8",
  (err, data) => {
    console.log("异步文件3", data)
  }
)
console.log("sync2")

//异步创建文件
const bodyAsync = { data: "异步创建的json文件" }
fs.writeFile("newCreateAsync.json", JSON.stringify(bodyAsync), (err) => {
  if (err) throw err
})

//监控文件变化
fs.watch("/Users/jinchuncheng/Desktop/project-code/nodejs-practise/fs/file2.json", "utf-8", (changetype, filename) => {
  console.log(changetype, filename)
})
