import { model } from 'mongoose'

export const Manager = model('Manager', { 
    email : String, 
    password : String
})
