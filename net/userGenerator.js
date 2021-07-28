//tcp客户端
const client = require("net").Socket()
module.exports = genUser = (userId) => {
  return new Promise((resolve, reject) => {
    client.connect(6666, "127.0.0.1", () => {
      client.write(JSON.stringify({ type: "reg", userId }))
      resolve(client)
    })
    client.on("data", (data) => {
      let resData = ""
      try {
        resData = JSON.parse(data.toString())
      } catch (err) {
        resData = data.toString()
      }
      const { type, msg, userId } = resData
      if (type === "error") {
        console.log(msg)
      }
      if (type === "system") {
        console.log(`系统消息：${msg}`)
      }
      if (type === "chat") {
        console.log(`${userId}用户说${msg}`)
      }
    })
  })
}
