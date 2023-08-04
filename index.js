const express = require('express')
const mongoose = require('mongoose')
const app = express(); 
const DB_USER = "admin"
const DB_PASSWORD = encodeURIComponent('@Gui92720108')

app.use(
    express.urlencoded({
        extended:true
    }
    )
)

app.use(express.json())

const userRoutes = require('./routes/UserRoutes')

app.use("/user", userRoutes); 
app.use("/", userRoutes); 

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@fuzion-db.umq4kca.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado ao Banco de Dados!')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(3000)