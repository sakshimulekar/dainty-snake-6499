const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
    user:String,
    userID:String,
    title:String,
    genre:String,
    desc:String,
    category: {type:String, enum:["Xbox" , "Playstation"]},
    cost:Number,
    status:Boolean,
    rating:Number,
    gameDetails:String,
    image:String,
    video:String
},{
    versionKey:false
})

const ProductModel=mongoose.model("product",productSchema)

module.exports={
    ProductModel
}