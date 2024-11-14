const express = require('express')
const router = new express.Router
const conteroller = require('../controller/UserController')

// register:http://localhost:3000/register
router.post('/register',conteroller.registerController)
module.exports=router
// login :http://localhost:3000/login
router.post('/login',conteroller.loginController)

// allUser : http://localhost:3000/allUser
router.get('/allUser',conteroller.userViewController)

// userDetails:http://localhost:3000/userDetails

router.get('/userDetails',conteroller.userDetalsViewController)