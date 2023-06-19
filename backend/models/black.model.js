const mongoose = require("mongoose") 
  
 const blacklistSchema = new mongoose.Schema({ 
     token:String 
 }) 
  
 const BlacklistModel = mongoose.model("blacklist", blacklistSchema) 
  
 module.exports={ 
     BlacklistModel 
 }