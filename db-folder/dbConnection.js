const mongoose = require('mongoose')

const connectionString = process.env.dbConnectionString

mongoose.connect(connectionString).then(res=>{
    console.log("mogoDB Connected Succcessfully with dbserver");
    
}).catch(err=>{
    console.log("mogodbConnection Faild");
    console.log(err); 
    
    
}) 

 