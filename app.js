const express = require("express")
const mongoose = require("mongoose")
const url_db = 'mongodb://localhost/test'

const app = express()

mongoose.connect(url_db, {useNewUrlParser:true, useUnifiedTopology:true})


const db = mongoose.connection

db.on('open', () => {
    console.log("DB is working")
})
app.use(express.json())
const userRouter = require("./routers/users")
app.use('/users',userRouter)

app.listen(9000, () => {
    console.log("CRUD Server Started...")
})