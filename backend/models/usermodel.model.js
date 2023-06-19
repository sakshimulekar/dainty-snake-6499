const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    age:String,
    subscription: {type:String,enum:["Basic","Standard","Premium"]},
    subscriptionExpiration: Date,
    charge:Number
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}