const express = require("express");
// const { auth } = require("../middleware/auth.middleware");
const { ProductModel } = require("../models/productmodel.model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory to save the files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });


const productRouter = express.Router();
// productRouter.use(auth)

productRouter.post("/add", upload.fields([{ name: 'image' }, { name: 'video' }]), async (req, res) => {
    try {
      const { user, userID, title, genre, desc, category, cost, status, rating, gameDetails } = req.body;
      const imageURL = req.files.image[0].path; // Path of the uploaded image
      const videoURL = req.files.video[0].path; // Path of the uploaded video
  
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
        image: imageURL,
        video: videoURL
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
        console.log(userID);
        const products = await ProductModel.find({userID}) 
        res.json({msg:"products" , products})
    } catch (error) {
        res.json({error:error.message})
    }
})

module.exports={
    productRouter
}