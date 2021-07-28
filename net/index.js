const net = require("net")
const users = {}
net
  .createServer((socket) => {
    console.log(socket)
    const body = JSON.stringify({
      type: "system",
      msg: "链接成功"
    })
    socket.write(body)
    //监听data事件
    socket.on("data", (data) => {
      console.log("------", data)
      const dataBody = JSON.parse(data.toString())
      const type = dataBody.type
      if (type === "reg") {
        //暂存socket
        users[dataBody.userId] = socket
      }
      if (type === "chat") {
        const target = users[dataBody.targetId]
        if (target) {
          target.write(data)
        } else {
          const res = {
            type: "error",
            msg: `${dataBody.targetId}用户不在线`
          }
          users[dataBody.userId].write(JSON.stringify(res))
        }
      }
    })
  })
  .listen(6666, () => {
    console.log("tcp listen on 6666")
  })
