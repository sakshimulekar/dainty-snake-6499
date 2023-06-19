const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/usermodel.model");
const { BlacklistModel } = require("../models/black.model");



// const auth = async (req, res, next) => {
//     try {
//       const token = req.headers.authorization?.split(' ')[1];
//       const decoded = jwt.verify(token, "gamers_arena");
  
//       if (!decoded) {
//         return res.status(401).json({ error: 'Invalid token' });
//       }
//       console.log(decoded)
//       const userId = decoded.userID;
//       console.log(userId)
//       const user = await UserModel.findById(userId);
  
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       req.user = user;
//       console.log(user,"userrrq")
//       next();
//     } catch (error) {
//       res.status(500).json({ error: error.message });

//     }
//   };

// module.exports = {auth};

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    // Add the following code to check if the token exists in the blacklist
    const isBlacklisted = await BlacklistModel.findOne({ blacklist: token });
    if (isBlacklisted) {
      return res.status(401).json({ error: 'Token is blacklisted' });
    }

    const decoded = jwt.verify(token, 'gamers_arena');

    if (!decoded) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    console.log(decoded);
    const userId = decoded.userID;
    console.log(userId);
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    req.user = user;
    console.log(user, 'userrrq');
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { auth };
