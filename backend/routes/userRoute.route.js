const express=require("express")
const { UserModel } = require("../models/usermodel.model")
const userRoute=express.Router()

userRoute.get("/",async(req,res)=>{
    try {
        const user=await UserModel.find()
        res.status(200).json({msg:"this is the home page",user})
    } catch (error) {
        res.status(400).json({msg:error})
    }
})



module.exports={
    userRoute
}