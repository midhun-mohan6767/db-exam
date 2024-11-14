const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    id:{
        type:String,
        require:true

    },firstName:{
        type:String,  
        require:true
    },lastName:{
        type:String,
        require:true
    },emailAddress:{
        type:String,
        require:true,
        unique:true

    },password:{
        type:String,
        require:true

    },phoneNumber:{
        type:String,
        require:true
    }

})
const users = mongoose.model("users",userSchema)
module.exports = users