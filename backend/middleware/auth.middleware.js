const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/usermodel.model");

// const auth = (req,res,next) =>{
//     const token = req.headers.authorization?.split(" ")[1];
//     if(token){
//         try {
//             const decoded = jwt.verify(token,"gamers_arena");
//             if(decoded){
//                 console.log(decoded)
//                 req.body.userID=decoded.userID
//                 req.body.user = decoded.user
//                 next()
//             }else{
//                 res.json({msg:"Not Authorised"})
//             }
//         } catch (error) {
//             res.json({error:error.message})
//         }
//     }else{
//         res.json({msg:"Please login"})
//     }
// }

// module.exports={
//     auth
// }

// middleware/authenticate.js
// const jwt = require('jsonwebtoken');

// const auth = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (token) {
//   try {
//     const decodedToken = jwt.verify(token, 'gamers_arena');
//     req.user = { userId: decodedToken.userID };
//     console.log(req.user,"htrfc")
//     next();
//   } 
//     catch (error) {
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// }
// else{
//     res.status(401).json({ error: error.message});
// }
// };



const auth = async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      const decoded = jwt.verify(token, "gamers_arena");
  
      if (!decoded) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      console.log(decoded)
      const userId = decoded.userID;
      console.log(userId)
      const user = await UserModel.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      req.user = user;
      console.log(user,"userrrq")
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {auth};

