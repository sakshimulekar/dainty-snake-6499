const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { ProductModel } = require("../models/productmodel.model");

const productRouter = express.Router();
productRouter.use(auth)

productRouter.post("/add",  async (req, res) => {
    try {
      const { user, userID, title, genre, desc, category, cost, status, rating, gameDetails ,image,video } = req.body;
  
      const product = new ProductModel({
        user,
        userID,
        title,
        genre,
        desc,
        category,
        cost,
        status,
        rating,
        gameDetails,
        image,
        video
      });
  
      await product.save();
      res.json({ msg: "New Product has been added", product });
    } catch (error) {
      res.json({ error: error.message });
    }
  });

productRouter.get("/" , async(req,res)=>{
    try {
        const {userID} = req.body;
        const products = await ProductModel.find() 
        res.json({msg:"products" , products})
    } catch (error) {
        res.json({error:error.message})
    }
})

productRouter.patch("/update/:id" , async(req,res)=>{
  const{id}= req.params
  const product = await ProductModel.findOne({_id:id})
  if(product){
      try{
          if(req.body.user == product.user){
              await ProductModel.findByIdAndUpdate({_id:id},req.body) 
              res.status(200).send({"msg":"Product Updated Successfully"})
          }else{
              res.status(400).send({"err":"You are not authorised to do this operation"})
          }
      }catch(err){
          res.status(400).send({"err":err.message})
      }
  }else{
      res.status(400).send({"err":"Product Not Found"})
  }
})


productRouter.delete("/delete/:id" , async(req,res)=>{
  const{id}= req.params
    const product =await ProductModel.findOne({_id:id})
    if(product){
        try{
            if(req.body.user == product.user){
                await ProductModel.findByIdAndDelete({_id:id}) 
                res.status(200).send({"msg":"Product Deleted Successfully"})
            }else{
                res.status(400).send({"err":"You are not autherized to do this operation"})
            }
        }catch(err){
            res.status(400).send({"err":err.message})
        }
    }else{
        res.status(400).send({"err":"Product Not Found"})
    }
 
})

module.exports={
    productRouter
}