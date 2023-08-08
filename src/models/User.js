import { model } from 'mongoose'

export const User = model('User', { 
    name : String, 
    password : String,
    coin : Number,
})

