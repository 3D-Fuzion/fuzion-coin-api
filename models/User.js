import { model } from 'mongoose'

const User = model('User', { 
    name : String, 
    password : String,
    coin : Number,
})

export default User