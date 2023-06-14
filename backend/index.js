const express=require("express")
const { connection } = require("./db")
const { userRoute } = require("./routes/userRoute.route")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use("/users",userRoute)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server run at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})