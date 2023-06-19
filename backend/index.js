const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { userRoute } = require("./routes/userRoute.route")
const { productRouter } = require("./routes/productRoute.route")

const { cartRouter } = require("./routes/cartRoute.route")

require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())
app.use("/users",userRoute)
app.use("/products" , productRouter)

app.use("/cart" , cartRouter)




app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server run at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})