const genUser = require("./userGenerator")
const userId = 2
genUser(userId).then((res) => {
  const msg = (time) => ({
    type: "chat",
    msg: `向用户1问好${time}`,
    targetId: 1,
    userId
  })
  setInterval(() => {
    res.write(JSON.stringify(msg(Date.now())))
  }, 4000)
})
