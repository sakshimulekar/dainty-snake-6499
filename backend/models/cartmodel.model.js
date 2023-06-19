const mongoose=require("mongoose")

const cartSchema= new mongoose.Schema({
    userID:String,
    productId:String,
    quantity:Number,
    title:String,
    genre:String,
    category: {type:String, enum:["Xbox" , "Playstation"]},
    cost:Number,
    status:Boolean,
    image:String
},{
    versionKey:false
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}