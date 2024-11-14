const jwt =require('jsonwebtoken')


const jwtMiddleware  = (req,res,next)=>{
    console.log("inside middleware");
    const token = req.headers["authorization"].split(" ")[1]
console.log(token);
if(token){
    try{
 
    const jwtresponce = jwt.verify(token,process.env.JWTPASSWORD)
    console.log(jwtresponce);
    req.userId = jwtresponce.userId
    next()
    


    }catch(err){
        res.status(401).json("Authorization faild...please login!!!")
    }
}else{

    responce.status(404).json("Authentication faild...Token is missing!!!")
}

}

module.exports = jwtMiddleware
