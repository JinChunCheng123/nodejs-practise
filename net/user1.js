const genUser = require("./userGenerator")
const userId = 1
genUser(userId).then((res) => {
  const msg = (time) => ({
    userId,
    msg: `向用户2问好${time}`,
    targetId: 2,
    type: "chat"
  })
  setInterval(() => {
    res.write(JSON.stringify(msg(Date.now())))
  }, 3000)
})
