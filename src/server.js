import { connect } from 'mongoose';
import User from '../models/User.js';
import express from "express";
import cors from 'cors'; 


const DB_USER = "admin"
const DB_PASSWORD = encodeURIComponent('@Gui92720108')

const app = express(); 
const port = process.env.PORT || 3000; 

app.use(cors())
app.use(express.json())
app.use(
    express.urlencoded({
        extended:true
    }
    )
)

app.post('/user/create', async (req, res) => { 
    const {name, password} = req.body 
    const coin = 0
    const user = { 
        name, 
        password,
        coin
    }

    try {
        await User.create(user)    

        res.status(201).json({message: 'Usuario Inserido'}) 
    } catch (error) {
        res.status(500).json({error: error})
    }
})

app.get('/user', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

app.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findOne({_id: id})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error})
    }
})


connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@fuzion-db.umq4kca.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado ao Banco de Dados!')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});