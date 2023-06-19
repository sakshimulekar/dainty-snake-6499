const express=require("express")
const { UserModel } = require("../models/usermodel.model")
const userRoute=express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { auth } = require("../middleware/auth.middleware");
const { BlacklistModel } = require("../models/black.model");
require("dotenv").config()

userRoute.get("/",auth,async(req,res)=>{
    try {
        const user=await UserModel.find()
        res.status(200).json({msg:"this is the home page",user})
    } catch (error) {
        res.status(400).json({msg:error})
    }
})

userRoute.post("/register",async(req,res)=>{
    const {email,pass}=req.body
    try {
        const user=await UserModel.findOne({email})
        console.log(user)
        if(user){
            console.log(user)
            res.status(200).json({error:"User already exists,Please Login!!"})
        }
        else{
            if(checkPass(pass)){
                bcrypt.hash(pass, 5, async(err, hash)=> {
                    if(hash){
                        const data=new UserModel({...req.body,pass:hash})
                        await data.save()
                        res.status(200).json({msg:"The new user has been registered",data})
                    }
                });
            }
            else{
                res.status(200).json({error:"password should contain 8 chars,at lease one uppercase,a special char,a number"})
            }
        }
    } 
    catch (error) {
        res.status(400).json({error:error.message})
    }
})

userRoute.post("/login",async(req,res)=>{
    try {
        const {email,pass}=req.body
        const person=await UserModel.findOne({email})
        if(person){
            bcrypt.compare(pass, person.pass,(err, result)=> {
                if(result){
                    var token = jwt.sign({userID:person._id,user:person.name},process.env.secret);
                    res.status(200).json({msg:"Login succssfully",token})
                }
                else{
                    res.status(200).json({error:"wrong credentials"})
                }
            });
        }
        else{
            res.status(200).json({error:"user not found. please register first!!"})
        }
    } catch (error) {
        res.status(200).json({error:error.message})
    }
})

const checkPass=(pass)=>{
    if(pass.length < 8){
        return false;
    }
    let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums="0123456789"
    let spec="[]{}!@#$%^&*()_-+=~`";
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;

    for(let i=0; i<pass.length; i++){
        if(alpha.includes(pass[i])){
            flag1 = true
        }
        if(nums.includes(pass[i])){
            flag2 = true
        }
        if(spec.includes(pass[i])){
            flag3 = true
        }
    }
    return flag1 && flag2 && flag3 ? true : false
}

userRoute.post('/subscription', auth, async (req, res) => {
    try {
      const { user } = req;
      const { subscription,charge } = req.body;
      const subscriptionExpiration = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // Set expiration to 2 days from now
      user.charge = charge
      user.subscription = subscription;
      user.subscriptionExpiration = subscriptionExpiration;

      console.log(user)
      const updatedUser = await user.save();
  
      res.status(200).json({msg:"subscribe successfully!!",updatedUser});
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  });
  

  userRoute.get('/protected', auth, (req, res) => {
    const user = req.user;
    console.log(user,"ewsaz")
    try {
        
        if(!user.subscription ){
            return res.status(401).json({ error: 'Get Subscription' });
        } 
        if (!user.subscription && !user.subscriptionExpiration < Date.now()) {
                return res.status(401).json({ error: 'Subscription expired' });
            }         
        else{
            res.json({ message: 'Protected content' });
          }
        
    } catch (error) {
        res.json({ error: error.message });
    }
  });

  userRoute.get("/logout" , async (req,res)=>{ 
    const token = req.headers.authorization?.split(" ")[1] 
    try { 
        const blacklistToken = new BlacklistModel({ 
            token 
        }) 
        await blacklistToken.save(); 
        res.status(200).json({msg:"User has been logged out"}) 
    } catch (error) { 
        res.status(200).json({error:error.message}) 
     }
 })

module.exports={
    userRoute
}