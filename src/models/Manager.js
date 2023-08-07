const model = require('mongoose').model

const Manager = model('Manager', { 
    email : String, 
    password : String
})


module.exports = Manager