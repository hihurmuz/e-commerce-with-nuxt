const jsonwebtoken = require("jsonwebtoken");

module.exports =function( req,res,next){
    let token = req.headers['x-access-token'] || req.headers["authorization"];
    let chechBearer = "Bearer ";

    if(token){
        if(token.starsWith(chechBearer)){
            token = token.slice(chechBearer.length,token.length);
        }
        jsonwebtoken.verify(token,process.env.SECRET_KEY,(err,decoded) =>{
            if(err){
                res.json({
                    success:false,
                    message:"token verify error ..."
                })
            }else{
                req.decoded = decoded
            }
        })
    }else{
        res.json({
            success:false,
            message:"there is no token ..."
        })
    }
}