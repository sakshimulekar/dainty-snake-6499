const jwt = require("jsonwebtoken");

const auth = (req,res,next) =>{
    const token = req.headers.authorization?.split(" ")[1];
    if(token){
        try {
            const decoded = jwt.verify(token,"gamers_arena");
            if(decoded){
                console.log(decoded)
                req.body.userID=decoded.userID
                console.log("fdjbasidb",req.body.userID)
                req.body.user = decoded.user
                next()
            }else{
                res.json({msg:"Not Authorised"})
            }
        } catch (error) {
            res.json({error:error.message})
        }
    }else{
        res.json({msg:"Please login"})
    }
}

module.exports={
    auth
}