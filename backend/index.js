const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { userRoute } = require("./routes/userRoute.route")
const { productRouter } = require("./routes/productRoute.route")
const { auth } = require("./middleware/auth.middleware")
const {checkSubscription}=require("./middleware/Check.middleware")
require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())
app.use("/users",userRoute)
app.use("/products" , productRouter)




app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server run at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})