const express = require("express");
const { CartModel } = require("../models/cartmodel.model");
const cartRouter = express.Router();
const {auth} = require("../middleware/auth.middleware")

cartRouter.get("/:id", auth, async (req, res) => {
    const uid = req.params.id;
    console.log(uid);
    try {
        const data = await CartModel.find({ userId: uid });
        console.log(data)
        res.send({"msg":data})
        
    } catch (error) {
        console.log(error);
        res.send({"msg":error.message})
        
    }
})

cartRouter.post('/create',auth, async (req, res) => {
    try {
        console.log(req.body);
        const cartproduct = new CartModel({...req.body, quantity: 1 });
        await cartproduct.save();
        res.send({"msg":"Product has been added to the Cart"})
        
    } catch (error) {
        console.log(error);
        res.send({"msg":error.message})
        
    }
});

cartRouter.delete('/:id',auth, async (req, res) => {
    try {
        await CartModel.findByIdAndDelete({ _id: req.params.id });
        res.send({"msg":"Product removed from the cart"})
        
    } catch (error) {
        console.log(error);
        res.send({"msg":error.message})
    }
})

cartRouter.patch('/:id',auth, async (req, res) => {
    try {
        await CartModel.findByIdAndUpdate({ _id: req.params.id },req.body);
        res.send({"msg":"Product updated successfully"});
        
    } catch (error) {
        console.log(error);
        res.send({"msg":error.message})
    }
})

module.exports = { cartRouter }