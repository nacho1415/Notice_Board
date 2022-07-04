const express = require("express")

const userRouter = require("./routes/user")

const app = express()

app.use("user/", )

app.listen(8080, (req, res) => {
    console.log("서버 가동중")
})