const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    age:String
},{
    versionkey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}