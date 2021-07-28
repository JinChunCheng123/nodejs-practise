const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/node-db", { useNewUrlParser: true.valueOf, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", console.error.bind(console, "connention error:"))
const Schema = new mongoose.Schema({
  name: String,
  age: Number,
  time: Date
})
const Model = mongoose.model("user", Schema)
Model.create({
  name: "jinchuncheng",
  age: 28,
  time: new Date()
})
Model.find({}, (err, data) => {
  if (err) {
    throw err
  }
  console.log("-----find", data)
})
Model.findById("61015508d0807896f3a2d47a", (err, data) => {
  if (err) {
    throw err
  }
  console.log("-----findById", data)
})
