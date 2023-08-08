const model = require('mongoose').model

const User = model('User', { 
    email : String, 
    name : String, 
    password : String,
    coin : Number,
})


module.exports = User