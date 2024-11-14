const users = require('../models/userModel')
const jwt = require('jsonwebtoken')
 const bcrypt = require('bcryptjs')

// register : http://localhost:3000/register

exports.registerController  = async(req,res)=>{
console.log("inside register conteroller");
console.log(req.body);
const {id,firstName,lastName,emailAddress,password,phoneNumber}=req.body

 try{
const existingUser = await users.findOne({emailAddress})
if(existingUser){
    res.status(406).json("Already Existing User Please Logine")
}else{
    const hashPassword = await bcrypt.hash(password,8)
    console.log("hash password is :");
    
    console.log(hashPassword);
    
    const newUser = new users({id,firstName,lastName,emailAddress,password,phoneNumber})
    await newUser.save()
    res.status(200).json(newUser)
}

 }catch {
    console.log(err);
    console.log("some err are in the code");
    
    
 }

}


// user login
exports.loginController = async(req,res)=>{
console.log("inside login controller");
const {emailAddress,password} = req.body
console.log({emailAddress,password});

try{
    existingUser = await users.findOne({emailAddress})
    if(existingUser){
        // token genarate
        const token = jwt.sign({ userid: existingUser._id }, process.env.JWTPASSWORD)
        const isMatch  =await bcrypt.compareSync(password,existingUser.password)
        if(isMatch){
            res.status(200).json({
                user:existingUser,token
            })
        }else{
            res.status(404).json("incorrect password")
        }
        // user:existinuser,token??
        res.status(200).json({ user: existingUser, token })
    } else {
        res.status(404).json("Incorrect Email / Password !!!")
    }

} catch (err) {
    res.status(401).json(err)
}

}

// user list view
exports.userViewController = async (req,res) =>{
    console.log("inside view controller");
    try{
const allUser = await users.find()
console.log(allUser);
res.status(200).json(allUser.map(user =>({firstName:user.firstName,emailAddress:user.emailAddress})))

    }catch(err){
        console.log(SyntaxError);
        
    }
    
}

// userDetails view
exports.userDetalsViewController = async (req,res)=>{
    console.log("inside userDetailsViewController");
    const emailAddress = req.body.emailAddress

    try{
        const userDetails = await users.find({emailAddress})
// console.log(userDetails);
if(userDetails){
    res.status(200).json(userDetails.map(detail => ({ firstName: detail.firstName, lastName: detail.lastName, emailAddress: detail.emailAddress, phoneNumber: detail.phoneNumber })))
}else{
    res.status(404).json("User Note Fount")
}
    }catch(err){
        console.log(err);

        
    }
    
}