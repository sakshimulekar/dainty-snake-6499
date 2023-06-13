const express=require("express")
const { userModel } = require("../models/usermodel.model")

const userRoute=express.Router()

userRoute.get("/",async(req,res)=>{
    try {
        const user=await userModel.find()
        res.status(200).json({msg:"this is homepage",user})
    } catch (error) {
        res.status(400).json({msg:error})
    }
})

module.exports={
    userRoute
}