// step define express server
require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./db-folder/dbConnection')

const dbServer = express()

dbServer.use(cors())
dbServer.use(express.json())
dbServer.use(router)
const PORT = 3000 || process.env.PORT

dbServer.listen(PORT,()=>{
console.log(`dbserver start at port ${PORT} and waiting for client request`);

})

dbServer.get('/',(req,res)=>{
    res.status(200).send(`pfserver started at the ${PORT} waiting for client request`)
})