const express=require("express")
const cors=require("cors")
const { userRoute } = require("./routes/userRoute.route")
const { connection } = require("mongoose")
require("dotenv").config()

const app=express()

app.use(express.json())
app.use("/",userRoute)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server run at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})
