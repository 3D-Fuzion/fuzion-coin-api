const userCommands = require('./routes/UserCommands')
const managerCommands = require('./routes/ManagerCommands')
const express = require('express')
const router = express.Router()

router.get('/user', userCommands.getAll); 
router.post('/user', userCommands.create); 
router.post('/user/login', userCommands.logIn);
router.delete('/user/:id', userCommands.delete); 
router.post('/login', managerCommands.logIn); 
router.post('/manager', managerCommands.signIn); 
router.post('/manager/changecoin', userCommands.changeCoinQuantity); 

module.exports = router; 